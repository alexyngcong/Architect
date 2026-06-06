/* ============================================================================
   SPEAK UP — English Speaking Academy — App logic
   A tiny no-framework single-page app. It renders screens, tracks progress in
   the browser (localStorage), runs quizzes & exams, and powers the Speaking
   Lab with text-to-speech (model pronunciation), microphone speech-recognition
   scoring, and recorded mock speaking tests. Works fully offline.
   ========================================================================= */

(function () {
  "use strict";

  const DATA = window.SPEAK_CURRICULUM;
  const STORE_KEY = "speakUpAcademy.progress.v1";
  const app = document.getElementById("app");
  const searchInput = document.getElementById("search");

  /* ---------- Progress persistence ---------- */
  function loadProgress() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; }
    catch (e) { return {}; }
  }
  function saveProgress(p) {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(p)); } catch (e) {}
  }
  let progress = loadProgress();
  // shape: { done, quiz, exam, lab, best, name, rate, voiceURI, streak, daysPracticed, lastDay }
  progress.done = progress.done || {};
  progress.quiz = progress.quiz || {};
  progress.exam = progress.exam || {};
  progress.lab  = progress.lab  || {};
  progress.best = progress.best || {};
  progress.rate = progress.rate || 0.92;          // comfortable default speaking speed
  progress.voiceURI = progress.voiceURI || null;  // chosen British voice (if any)
  progress.finalBest = progress.finalBest || 0;   // best score on the Final Mastery Exam (%)

  /* Daily practice streak — called whenever the learner completes something. */
  function touchPractice() {
    const today = new Date().toDateString();
    if (progress.lastDay === today) return;
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    progress.streak = (progress.lastDay === yesterday) ? (progress.streak || 0) + 1 : 1;
    progress.daysPracticed = (progress.daysPracticed || 0) + 1;
    progress.lastDay = today;
    saveProgress(progress);
  }

  function markDone(lessonId) {
    if (!progress.done[lessonId]) { progress.done[lessonId] = true; touchPractice(); saveProgress(progress); }
  }
  function setQuizScore(lessonId, pct) { progress.quiz[lessonId] = pct; saveProgress(progress); }
  function setBest(key, pct) { if (pct > (progress.best[key] || 0)) { progress.best[key] = pct; saveProgress(progress); } }

  /* ---------- Helpers ---------- */
  const allLessons = () => DATA.modules.flatMap(m => m.lessons.map(l => ({ ...l, moduleId: m.id, moduleTitle: m.title, color: m.color })));
  const totalLessons = () => allLessons().length;
  const doneCount = () => Object.keys(progress.done).filter(k => progress.done[k]).length;
  const moduleProgress = (m) => {
    const done = m.lessons.filter(l => progress.done[l.id]).length;
    return { done, total: m.lessons.length, pct: Math.round((done / m.lessons.length) * 100) };
  };
  const escapeHtml = (s) => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }

  /* ============================================================================
     SPEECH — text-to-speech (model pronunciation) + recognition (mic scoring)
     ========================================================================= */
  const TTS = window.speechSynthesis;
  function englishVoices() {
    const vs = (TTS && TTS.getVoices && TTS.getVoices()) || [];
    return vs.filter(v => /^en/i.test(v.lang));
  }
  function pickVoice() {
    if (!TTS) return null;
    const vs = TTS.getVoices() || [];
    if (progress.voiceURI) { const saved = vs.find(v => v.voiceURI === progress.voiceURI); if (saved) return saved; }
    return vs.find(v => /en[-_]GB/i.test(v.lang)) || vs.find(v => /en[-_]US/i.test(v.lang)) || vs.find(v => /^en/i.test(v.lang)) || null;
  }
  if (TTS && typeof TTS.onvoiceschanged !== "undefined") { TTS.onvoiceschanged = pickVoice; }

  function speak(text, rate, btn) {
    if (!TTS) { toast("🔇 This browser can't read text aloud. Try Chrome, Edge or Safari."); return; }
    TTS.cancel();
    const u = new SpeechSynthesisUtterance(text);
    const v = pickVoice(); if (v) u.voice = v;
    u.lang = (v && v.lang) || "en-GB";
    u.rate = rate || progress.rate || 0.92;
    if (btn) {
      btn.classList.add("speaking");
      u.onend = u.onerror = () => btn.classList.remove("speaking");
    }
    TTS.speak(u);
  }

  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const speechRecognitionSupported = !!SR;

  // Audio recording (works in Chrome, Edge, Safari & Firefox) — for record-and-compare.
  const recordSupported = !!(window.navigator && navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder);
  let activeRecorder = null;   // only one microphone recording at a time, app-wide
  function stopActiveRecorder() {
    if (activeRecorder && activeRecorder.state === "recording") { try { activeRecorder.stop(); } catch (e) {} }
  }

  function normalizeWords(s) {
    return String(s).toLowerCase().replace(/[^a-z0-9'\s]/g, " ").split(/\s+/).filter(Boolean);
  }
  function wordEditDistance(a, b) {
    const m = a.length, n = b.length;
    const d = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) d[i][0] = i;
    for (let j = 0; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++)
      for (let j = 1; j <= n; j++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      }
    return d[m][n];
  }
  function scoreSpeech(target, heard) {
    const t = normalizeWords(target), h = normalizeWords(heard);
    if (!t.length) return { pct: 0, target: t, heardSet: new Set(h) };
    const dist = wordEditDistance(t, h);
    const pct = Math.max(0, Math.round(100 * (1 - dist / Math.max(t.length, h.length || 1))));
    return { pct, target: t, heardSet: new Set(h) };
  }

  /* Speak & Check widget — learner reads a target sentence; we score it and/or
     let them record themselves and compare with the model. */
  function mountSpeakCheck(el) {
    const target = el.getAttribute("data-target") || "";
    const hint = el.getAttribute("data-hint") || "Listen, then say it — tap the mic to be scored, or record yourself to compare.";
    el.innerHTML = `
      <div class="sc-target">“${escapeHtml(target)}”</div>
      <div class="sc-hint">${escapeHtml(hint)}</div>
      <div class="sc-controls">
        <button class="say sc-listen">🔊 Listen</button>
        <button class="say sc-slow">🐢 Slow</button>
        ${speechRecognitionSupported ? `<button class="mic-btn sc-mic">🎤 Speak &amp; check</button>` : ""}
        ${recordSupported ? `<button class="rec-btn sc-record">🔴 Record &amp; compare</button>` : ""}
      </div>
      <div class="sc-out"></div>
      <div class="sc-rec"></div>
      ${(!speechRecognitionSupported && !recordSupported) ? `<div class="unsupported">🎙️ Speaking practice with the microphone needs a modern browser (Chrome, Edge or Safari). You can still tap <b>Listen</b> / <b>Slow</b> and practise out loud.</div>`
        : (!speechRecognitionSupported ? `<div class="unsupported">💡 Instant scoring works best in Chrome or Edge. Here you can <b>record &amp; compare</b> yourself against the model — listen to both and match the rhythm.</div>` : "")}
    `;
    // Wire directly (and mark wired) so the generic enhancer never double-binds these.
    const listenBtn = el.querySelector(".sc-listen");
    const slowBtn = el.querySelector(".sc-slow");
    listenBtn.dataset.wired = slowBtn.dataset.wired = "1";
    listenBtn.onclick = (e) => speak(target, null, e.currentTarget);
    slowBtn.onclick = (e) => speak(target, 0.55, e.currentTarget);
    const out = el.querySelector(".sc-out");

    // ---- Record & compare (all modern browsers) ----
    const recBtn = el.querySelector(".sc-record");
    if (recBtn) {
      const recArea = el.querySelector(".sc-rec");
      let myRecorder = null, myUrl = null;
      recBtn.onclick = async () => {
        if (myRecorder && myRecorder.state === "recording") { myRecorder.stop(); return; }
        stopActiveRecorder();
        if (TTS) TTS.cancel();
        let stream;
        try { stream = await navigator.mediaDevices.getUserMedia({ audio: true }); }
        catch (e) { recArea.innerHTML = `<div class="unsupported">Microphone blocked. Allow mic access in your browser to record.</div>`; return; }
        const chunks = [];
        myRecorder = new MediaRecorder(stream); activeRecorder = myRecorder;
        myRecorder.ondataavailable = e => { if (e.data.size) chunks.push(e.data); };
        myRecorder.onstop = () => {
          stream.getTracks().forEach(t => t.stop());
          if (myUrl) { try { URL.revokeObjectURL(myUrl); } catch (e) {} }
          const blob = new Blob(chunks, { type: chunks[0] ? chunks[0].type : "audio/webm" });
          myUrl = URL.createObjectURL(blob);
          recArea.innerHTML = `<div style="font-size:13px;color:var(--ink-soft);margin:8px 0 2px">▶️ Your recording — play it, then tap <b>🔊 Listen</b> to compare your rhythm with the model:</div><audio controls src="${myUrl}"></audio>`;
          recBtn.classList.remove("recording"); recBtn.innerHTML = "🔴 Record again";
          if (activeRecorder === myRecorder) activeRecorder = null;
        };
        myRecorder.start();
        recBtn.classList.add("recording"); recBtn.innerHTML = `<span class="rec-dot"></span> Stop`;
      };
    }

    // ---- Speak & check (instant scoring; Chrome/Edge) ----
    const micBtn = el.querySelector(".sc-mic");
    if (!micBtn) return;

    let rec = null, listening = false;
    micBtn.onclick = () => {
      if (listening && rec) { rec.stop(); return; }
      stopActiveRecorder();    // don't run scoring and recording at once
      if (TTS) TTS.cancel();   // never let the mic pick up the model voice
      rec = new SR();
      rec.lang = "en-GB"; rec.interimResults = false; rec.maxAlternatives = 1;
      listening = true; micBtn.classList.add("listening"); micBtn.textContent = "● Listening… (tap to stop)";
      out.innerHTML = "";
      rec.onresult = (ev) => {
        const heard = ev.results[0][0].transcript;
        const { pct, target: tw, heardSet } = scoreSpeech(target, heard);
        const cls = pct >= 80 ? "good" : pct >= 55 ? "mid" : "low";
        const verdict = pct >= 80 ? "Excellent! 🎉" : pct >= 55 ? "Good — keep polishing 👍" : "Keep trying — listen again and copy the rhythm 💪";
        const marked = tw.map(w => heardSet.has(w) ? `<span class="w-ok">${escapeHtml(w)}</span>` : `<span class="w-bad">${escapeHtml(w)}</span>`).join(" ");
        out.innerHTML = `
          <div class="sc-result">
            <div class="sc-meter"><span style="width:${pct}%;background:${pct>=80?'#16a34a':pct>=55?'#f59e0b':'#ef4444'}"></span></div>
            <div><span class="sc-score ${cls}">${pct}%</span> — ${verdict}</div>
            <div class="sc-heard"><b>We heard:</b> “${escapeHtml(heard)}”</div>
            <div class="sc-heard"><b>Target words:</b> ${marked}</div>
          </div>`;
      };
      rec.onerror = (ev) => { out.innerHTML = `<div class="unsupported">Mic error: ${escapeHtml(ev.error)}. Check microphone permission and try again.</div>`; };
      rec.onend = () => { listening = false; micBtn.classList.remove("listening"); micBtn.innerHTML = "🎤 Speak &amp; check"; };
      try { rec.start(); } catch (e) { listening = false; micBtn.classList.remove("listening"); micBtn.innerHTML = "🎤 Speak &amp; check"; }
    };
  }

  /* After any screen renders, wire up speech controls inside it. */
  function enhanceSpeaking(root) {
    (root || app).querySelectorAll(".say").forEach(btn => {
      if (btn.dataset.wired) return; btn.dataset.wired = "1";
      btn.onclick = (e) => speak(btn.getAttribute("data-say"), null, e.currentTarget);
    });
    (root || app).querySelectorAll(".speakcheck").forEach(el => {
      if (el.dataset.wired) return; el.dataset.wired = "1"; mountSpeakCheck(el);
    });
  }

  /* ---------- Router (hash based, works offline) ---------- */
  function go(hash) {
    if (searchInput) searchInput.value = "";
    if (TTS) TTS.cancel();
    const current = window.location.hash.replace(/^#\/?/, "");
    if (current === hash) render();
    else window.location.hash = hash;
  }
  window.addEventListener("hashchange", render);
  function parseHash() {
    const h = window.location.hash.replace(/^#\/?/, "");
    return { parts: h.split("/").filter(Boolean) };
  }

  /* ============================================================================
     SCREENS
     ========================================================================= */

  function renderDashboard() {
    const done = doneCount(), total = totalLessons();
    const pct = total ? Math.round((done / total) * 100) : 0;
    const quizzesTaken = Object.keys(progress.quiz).length;
    const avgScore = quizzesTaken
      ? Math.round(Object.values(progress.quiz).reduce((a, b) => a + b, 0) / quizzesTaken) : 0;

    const moduleCards = DATA.modules.map(m => {
      const mp = moduleProgress(m);
      return `
        <button class="module-card" onclick="SUA.go('module/${m.id}')">
          <div class="icon" style="background:${m.color}22;color:${m.color}">${m.icon}</div>
          <h3>${m.title}</h3>
          <div class="blurb">${m.blurb}</div>
          <div class="bar"><span style="width:${mp.pct}%"></span></div>
          <div class="meta"><span>${mp.done} / ${mp.total} lessons</span><span>${mp.pct}%</span></div>
        </button>`;
    }).join("");

    app.innerHTML = `
      <div class="hero">
        <div class="ring"></div><div class="ring two"></div>
        <h1>Welcome to Speak Up 🗣️</h1>
        <p>Your complete, step-by-step path from <b>basic everyday English</b> to <b>confident, advanced speaking</b> — the kind tested in IELTS, TOEFL &amp; Cambridge exams and needed in job interviews and public speaking. Listen to a model voice, <b>practise out loud with your microphone</b>, and take real mock exams. Your progress saves automatically.</p>
        <div class="btn-row" style="margin-top:18px">
          <button class="btn" style="background:#fff;color:var(--brand-dark)" onclick="SUA.go('plan')">🗓️ Start the Study Plan</button>
          <button class="btn ghost" onclick="SUA.go('lab')">🎤 Open the Speaking Lab</button>
        </div>
        <p style="opacity:.92;font-size:13.5px;margin-top:12px">New here? It's simple: open a module → read the short lesson &amp; <b>say the examples out loud</b> → pass the quick quiz to tick it off → take each module's exam. Brand new to speaking? Begin with <b>“Speaking Foundations.”</b></p>
        <div class="progress-summary">
          <div class="stat"><div class="num">🔥 ${progress.streak || 0}</div><div class="lbl">Day streak</div></div>
          <div class="stat"><div class="num">${done}/${total}</div><div class="lbl">Lessons done</div></div>
          <div class="stat"><div class="num">${pct}%</div><div class="lbl">Course complete</div></div>
          <div class="stat"><div class="num">${quizzesTaken}</div><div class="lbl">Quizzes taken</div></div>
          <div class="stat"><div class="num">${avgScore}%</div><div class="lbl">Avg quiz score</div></div>
        </div>
      </div>

      <div class="section-title">📚 Your Learning Path — work top to bottom</div>
      <div class="grid">${moduleCards}</div>

      <div class="section-title">🎓 The finish line</div>
      ${(() => {
        const r = courseReady();
        const fs = progress.finalBest || 0;
        const finalPassed = fs >= FINAL_PASS;
        const status = finalPassed ? "✓ Passed (" + fs + "%)" : (r.ready ? "Ready to take" : "Unlocks after all modules");
        const tone = finalPassed ? "#16a34a" : (r.ready ? "#6366f1" : "var(--line)");
        return `
        <div class="reader" style="padding:22px;border:2px solid ${tone}">
          <div class="row" style="align-items:flex-start;gap:14px">
            <span style="font-size:30px">${finalPassed ? "🏆" : (r.ready ? "🎓" : "🔒")}</span>
            <div style="flex:1">
              <h3 style="margin:0 0 4px">Final Mastery Exam → Certificate</h3>
              <p style="margin:0;color:var(--ink-soft);font-size:14px">Your journey: <b>learn each module</b> → <b>pass its exam (80%)</b> → <b>pass the Final Mastery Exam (80%)</b> → <b>earn your certificate</b>. ${r.ready ? "You've finished every module — take the final exam to complete the course!" : `Progress: ${r.done}/${r.total} lessons · ${r.examsPassed}/${r.totalExams} module exams.`}</p>
              <div class="btn-row" style="margin-top:12px">
                <button class="btn" ${r.ready ? "" : 'style="opacity:.6"'} onclick="SUA.go('final')">${finalPassed ? "Retake Final Exam" : "Go to Final Exam ›"}</button>
                <button class="btn ghost" onclick="SUA.go('certificate')">View certificate &amp; progress</button>
              </div>
              <div style="margin-top:8px;font-size:12.5px;color:var(--ink-soft)">Status: <b>${status}</b></div>
            </div>
          </div>
        </div>`;
      })()}

      <div class="section-title">🎁 Speaking tip of the day</div>
      <div class="reader" style="padding:22px"><p style="margin:0">${randomTip()}</p></div>
    `;
    enhanceSpeaking(app);
  }

  function renderModule(moduleId) {
    const m = DATA.modules.find(x => x.id === moduleId);
    if (!m) return renderNotFound();
    const mp = moduleProgress(m);

    const rows = m.lessons.map((l, i) => {
      const done = !!progress.done[l.id];
      const score = progress.quiz[l.id];
      return `
        <button class="lesson-row ${done ? "done" : ""}" onclick="SUA.go('lesson/${m.id}/${l.id}')">
          <div class="check">✓</div>
          <div class="info">
            <h4>${i + 1}. ${l.title}</h4>
            <div class="sub">
              <span class="level-tag level-${l.level}">${l.level}</span>
              <span>⏱ ${l.minutes} min</span>
              ${score != null ? `<span>📝 Quiz: ${score}%</span>` : ""}
            </div>
          </div>
          <div class="arrow">›</div>
        </button>`;
    }).join("");

    app.innerHTML = `
      <a class="back-link" onclick="SUA.go('')">‹ Back to all modules</a>
      <div class="module-head">
        <div class="icon" style="background:${m.color}22;color:${m.color}">${m.icon}</div>
        <div><h1>${m.title}</h1><div style="color:var(--ink-soft)">${m.blurb}</div></div>
      </div>
      <div class="bar" style="margin:14px 0 6px"><span style="width:${mp.pct}%"></span></div>
      <div class="meta" style="display:flex;justify-content:space-between;color:var(--ink-soft);font-size:13px;margin-bottom:24px">
        <span>${mp.done} of ${mp.total} lessons complete</span><span>${mp.pct}%</span>
      </div>
      ${rows}
      ${examCta(m, mp)}
    `;
  }

  function examCta(m, mp) {
    const score = progress.exam[m.id] || 0;
    const passed = score >= 80;
    const ready = mp.pct === 100;
    return `
      <div class="reader" style="margin-top:18px;padding:22px;text-align:center;${passed ? "border:1px solid #16a34a" : ""}">
        <div style="font-size:30px">${passed ? "🏆" : "🎓"}</div>
        <h3 style="margin:6px 0">${escapeHtml(m.title)} — Module Exam</h3>
        <p style="color:var(--ink-soft);margin-bottom:14px">
          ${passed ? `You passed with <b>${score}%</b>. Great work! You can retake it any time.`
                   : (ready ? "You've finished every lesson — time to prove it! Score 80% to earn this module's badge."
                            : `Finish the lessons first, then take the exam. ${score ? "Best so far: " + score + "%." : ""}`)}
        </p>
        <button class="btn" onclick="SUA.go('exam/${m.id}')">${passed ? "Retake exam" : "Take the Module Exam ›"}</button>
      </div>`;
  }

  function renderLesson(moduleId, lessonId) {
    const m = DATA.modules.find(x => x.id === moduleId);
    if (!m) return renderNotFound();
    const idx = m.lessons.findIndex(l => l.id === lessonId);
    const l = m.lessons[idx];
    if (!l) return renderNotFound();

    const tips = (l.tips && l.tips.length) ? `
      <div class="box tips"><h4>💡 Speaking tips to remember</h4>
        <ul>${l.tips.map(tip => `<li>${tip}</li>`).join("")}</ul></div>` : "";

    const practice = l.practice ? `
      <div class="box practice"><h4>🎯 Try it yourself (out loud)</h4><p>${l.practice}</p></div>` : "";

    const prev = m.lessons[idx - 1];
    const next = m.lessons[idx + 1];

    app.innerHTML = `
      <a class="back-link" onclick="SUA.go('module/${m.id}')">‹ Back to ${escapeHtml(m.title)}</a>
      <div class="reader">
        <h1>${l.title}</h1>
        <div class="reader-meta">
          <span class="level-tag level-${l.level}">${l.level}</span>
          <span>⏱ ${l.minutes} min</span>
          <span>${m.icon} ${escapeHtml(m.title)}</span>
        </div>
        <div class="content">${l.content}</div>
        ${tips}
        ${practice}
      </div>

      ${l.quiz && l.quiz.length ? `<div id="quizMount"></div>` : `
        <div class="btn-row"><button class="btn" onclick="SUA.completeLesson('${m.id}','${l.id}')">Mark lesson complete ✓</button></div>`}

      <div class="btn-row" style="margin-top:28px;justify-content:space-between">
        <div>${prev ? `<button class="btn ghost" onclick="SUA.go('lesson/${m.id}/${prev.id}')">‹ Previous</button>` : ""}</div>
        <div>${next ? `<button class="btn ghost" onclick="SUA.go('lesson/${m.id}/${next.id}')">Next ›</button>`
                     : `<button class="btn ghost" onclick="SUA.go('module/${m.id}')">Finish module ✓</button>`}</div>
      </div>
    `;
    if (l.quiz && l.quiz.length) mountQuiz(m, l);
    enhanceSpeaking(app);
    window.scrollTo(0, 0);
  }

  /* ---------- Quiz engine ---------- */
  function mountQuiz(m, l) {
    const mount = document.getElementById("quizMount");
    const state = { answers: {}, submitted: false, order: l.quiz.map(it => shuffle(it.choices.map((_, i) => i))) };

    function draw() {
      const blocks = l.quiz.map((item, qi) => {
        const chosen = state.answers[qi];
        const choices = state.order[qi].map((ci) => {
          const c = item.choices[ci];
          let cls = "choice";
          if (state.submitted) { if (ci === item.answer) cls += " correct"; else if (chosen === ci) cls += " wrong"; }
          else if (chosen === ci) cls += " selected";
          const mark = state.submitted ? (ci === item.answer ? '<span class="mark">✓</span>' : (chosen === ci ? '<span class="mark">✗</span>' : "")) : "";
          return `<button class="${cls}" ${state.submitted ? "disabled" : ""} onclick="SUA._pick(${qi},${ci})">${escapeHtml(c)}${mark}</button>`;
        }).join("");
        return `<div class="q-block"><div class="q-text">${qi + 1}. ${escapeHtml(item.q)}</div>${choices}</div>`;
      }).join("");

      let header = `<h3>📝 Check your understanding</h3><div class="qsub">Answer all ${l.quiz.length} questions to complete this lesson.</div>`;
      let banner = "";
      let footer = `<div class="btn-row"><button class="btn" onclick="SUA._submitQuiz()" ${Object.keys(state.answers).length < l.quiz.length ? "disabled" : ""}>Submit answers</button></div>`;

      if (state.submitted) {
        const correct = l.quiz.filter((it, qi) => state.answers[qi] === it.answer).length;
        const pctv = Math.round((correct / l.quiz.length) * 100);
        const pass = pctv >= 70;
        banner = `<div class="result-banner ${pass ? "pass" : "fail"}">${pass ? "🎉" : "💪"} You scored ${correct}/${l.quiz.length} (${pctv}%). ${pass ? "Lesson complete — great work!" : "Almost! Review the lesson and try again."}</div>`;
        footer = `<div class="btn-row"><button class="btn ghost" onclick="SUA._retryQuiz()">Try again</button></div>`;
      }
      mount.innerHTML = `<div class="quiz">${header}${banner}${blocks}${footer}</div>`;
    }

    window.SUA._pick = (qi, ci) => { if (!state.submitted) { state.answers[qi] = ci; draw(); } };
    window.SUA._submitQuiz = () => {
      state.submitted = true;
      const correct = l.quiz.filter((it, qi) => state.answers[qi] === it.answer).length;
      const pctv = Math.round((correct / l.quiz.length) * 100);
      setQuizScore(l.id, pctv);
      if (pctv >= 70) { markDone(l.id); celebrate(); toast("Lesson complete! Progress saved ✓"); }
      draw();
    };
    window.SUA._retryQuiz = () => { state.answers = {}; state.submitted = false; state.order = l.quiz.map(it => shuffle(it.choices.map((_, i) => i))); draw(); };
    draw();
  }

  /* ---------- Study Plan ---------- */
  function renderPlan() {
    const ft = DATA.studyPlan;
    const lessonById = {}; allLessons().forEach(l => { lessonById[l.id] = l; });

    const dayCards = ft.days.map(d => {
      const items = d.lessons.map(id => {
        const l = lessonById[id]; if (!l) return "";
        const done = !!progress.done[id];
        return `<button class="lesson-row ${done ? "done" : ""}" style="margin-bottom:8px" onclick="SUA.go('lesson/${l.moduleId}/${l.id}')">
                  <div class="check">✓</div>
                  <div class="info"><h4>${l.title}</h4>
                    <div class="sub"><span class="level-tag level-${l.level}">${l.level}</span><span>⏱ ${l.minutes} min</span></div>
                  </div><div class="arrow">›</div></button>`;
      }).join("");
      const dayDone = d.lessons.every(id => progress.done[id]);
      return `
        <div class="reader" style="padding:18px;margin-bottom:14px;${dayDone ? "border:1px solid #16a34a" : ""}">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px">
            <div style="background:${dayDone ? "#16a34a" : "var(--brand)"};color:#fff;width:46px;height:46px;border-radius:12px;display:grid;place-items:center;font-weight:800">${dayDone ? "✓" : "W" + d.day}</div>
            <div><div style="font-weight:800;font-size:16px">Week ${d.day}</div>
            <div style="color:var(--ink-soft);font-size:13px">${d.focus}</div></div>
          </div>${items}
        </div>`;
    }).join("");

    app.innerHTML = `
      <a class="back-link" onclick="SUA.go('')">‹ Back to dashboard</a>
      <div class="module-head"><div class="icon" style="background:#0ea5a422;color:#0ea5a4">🗓️</div>
        <div><h1>${ft.title}</h1><div style="color:var(--ink-soft)">${ft.intro}</div></div></div>
      <div style="margin:18px 0">${dayCards}</div>
    `;
    window.scrollTo(0, 0);
  }

  /* ---------- Module Exam (knowledge, MCQ pool) ---------- */
  function renderExam(moduleId) {
    const m = DATA.modules.find(x => x.id === moduleId);
    if (!m) return renderNotFound();
    const pool = m.lessons.flatMap(l => (l.quiz || []).map(q => ({ ...q })));
    if (!pool.length) {
      app.innerHTML = `<a class="back-link" onclick="SUA.go('module/${m.id}')">‹ Back to ${escapeHtml(m.title)}</a>
        <div class="empty"><div class="big">📭</div><h2>No exam questions yet</h2></div>`;
      return;
    }
    const questions = shuffle(pool).slice(0, Math.min(12, pool.length));
    const order = questions.map(it => shuffle(it.choices.map((_, i) => i)));
    const state = { answers: {}, submitted: false };

    function draw() {
      const blocks = questions.map((item, qi) => {
        const chosen = state.answers[qi];
        const choices = order[qi].map((ci) => {
          const c = item.choices[ci];
          let cls = "choice";
          if (state.submitted) { if (ci === item.answer) cls += " correct"; else if (chosen === ci) cls += " wrong"; }
          else if (chosen === ci) cls += " selected";
          const mark = state.submitted ? (ci === item.answer ? '<span class="mark">✓</span>' : (chosen === ci ? '<span class="mark">✗</span>' : "")) : "";
          return `<button class="${cls}" ${state.submitted ? "disabled" : ""} onclick="SUA._examPick(${qi},${ci})">${escapeHtml(c)}${mark}</button>`;
        }).join("");
        return `<div class="q-block"><div class="q-text">${qi + 1}. ${escapeHtml(item.q)}</div>${choices}</div>`;
      }).join("");

      let banner = "";
      let footer = `<div class="btn-row"><button class="btn" onclick="SUA._examSubmit()" ${Object.keys(state.answers).length < questions.length ? "disabled" : ""}>Submit exam</button>
                    <button class="btn ghost" onclick="SUA.go('module/${m.id}')">Back to module</button></div>`;
      if (state.submitted) {
        const correct = questions.filter((it, qi) => state.answers[qi] === it.answer).length;
        const pctv = Math.round((correct / questions.length) * 100);
        const pass = pctv >= 80;
        banner = `<div class="result-banner ${pass ? "pass" : "fail"}">${pass ? "🏆" : "💪"} Exam score: ${correct}/${questions.length} (${pctv}%). ${pass ? "PASSED — module mastered!" : "You need 80% to pass. Review the lessons and try again."}</div>`;
        footer = `<div class="btn-row"><button class="btn ghost" onclick="SUA._examRetry()">Retake exam</button>
          ${pass ? `<button class="btn" onclick="SUA.go('certificate')">View certificate ›</button>` : `<button class="btn" onclick="SUA.go('module/${m.id}')">Back to lessons</button>`}</div>`;
      }
      app.innerHTML = `<a class="back-link" onclick="SUA.go('module/${m.id}')">‹ Back to ${escapeHtml(m.title)}</a>
        <div class="quiz"><h3>🎓 ${escapeHtml(m.title)} — Module Exam</h3>
          <div class="qsub">${questions.length} questions drawn from the whole module. You need <b>80%</b> to pass and earn this module's badge.</div>
          ${banner}${blocks}${footer}</div>`;
    }

    window.SUA._examPick = (qi, ci) => { if (!state.submitted) { state.answers[qi] = ci; draw(); } };
    window.SUA._examSubmit = () => {
      state.submitted = true;
      const correct = questions.filter((it, qi) => state.answers[qi] === it.answer).length;
      const pctv = Math.round((correct / questions.length) * 100);
      if (pctv > (progress.exam[m.id] || 0)) { progress.exam[m.id] = pctv; saveProgress(progress); }
      if (pctv >= 80) { celebrate(); toast(m.title + " exam passed! 🏆"); }
      draw();
    };
    window.SUA._examRetry = () => renderExam(m.id);
    draw();
    window.scrollTo(0, 0);
  }

  /* ---------- Course readiness (gates the Final Mastery Exam) ---------- */
  function courseReady() {
    const done = doneCount(), total = totalLessons();
    const examsPassed = DATA.modules.filter(m => (progress.exam[m.id] || 0) >= 80).length;
    return {
      done, total,
      examsPassed, totalExams: DATA.modules.length,
      lessonsComplete: done === total,
      examsComplete: examsPassed === DATA.modules.length,
      ready: done === total && examsPassed === DATA.modules.length
    };
  }

  /* ============================================================================
     FINAL MASTERY EXAM — the capstone. Draws from EVERY module. 80% to pass.
     Passing it (plus all lessons & module exams) unlocks the certificate.
     ========================================================================= */
  const FINAL_PASS = 80;
  const FINAL_COUNT = 25;

  function renderFinalExam() {
    const r = courseReady();

    // Locked until every lesson is done and every module exam is passed.
    if (!r.ready) {
      app.innerHTML = `
        <a class="back-link" onclick="SUA.go('')">‹ Back to dashboard</a>
        <div class="module-head"><div class="icon" style="background:#6366f122;color:#6366f1">🎓</div>
          <div><h1>Final Mastery Exam</h1>
          <div style="color:var(--ink-soft)">The capstone test of the whole course. Pass it to unlock your certificate.</div></div></div>
        <div class="reader" style="padding:22px;text-align:center">
          <div style="font-size:34px">🔒</div>
          <h3 style="margin:8px 0">Almost there — finish the programme first</h3>
          <p style="color:var(--ink-soft)">The Final Mastery Exam unlocks once you've completed every lesson and passed all ${r.totalExams} module exams.</p>
          <div class="result-banner fail" style="margin:14px auto;max-width:520px">📋 ${r.done}/${r.total} lessons done · ${r.examsPassed}/${r.totalExams} module exams passed.</div>
          <div class="btn-row" style="justify-content:center">
            <button class="btn" onclick="SUA.go('')">Continue the course ›</button>
            <button class="btn ghost" onclick="SUA.go('plan')">Open the Study Plan</button>
          </div>
        </div>`;
      window.scrollTo(0, 0);
      return;
    }

    // Build a pool from EVERY quiz question in the course, tag with its module.
    const pool = DATA.modules.flatMap(m => m.lessons.flatMap(l => (l.quiz || []).map(q => ({ ...q, _mod: m.title }))));
    const questions = shuffle(pool).slice(0, Math.min(FINAL_COUNT, pool.length));
    const order = questions.map(it => shuffle(it.choices.map((_, i) => i)));
    const state = { answers: {}, submitted: false };
    const needCorrect = Math.ceil((FINAL_PASS / 100) * questions.length);

    function draw() {
      const blocks = questions.map((item, qi) => {
        const chosen = state.answers[qi];
        const choices = order[qi].map((ci) => {
          const c = item.choices[ci];
          let cls = "choice";
          if (state.submitted) { if (ci === item.answer) cls += " correct"; else if (chosen === ci) cls += " wrong"; }
          else if (chosen === ci) cls += " selected";
          const mark = state.submitted ? (ci === item.answer ? '<span class="mark">✓</span>' : (chosen === ci ? '<span class="mark">✗</span>' : "")) : "";
          return `<button class="${cls}" ${state.submitted ? "disabled" : ""} onclick="SUA._finalPick(${qi},${ci})">${escapeHtml(c)}${mark}</button>`;
        }).join("");
        return `<div class="q-block"><div class="q-text">${qi + 1}. ${escapeHtml(item.q)} <span style="color:var(--ink-soft);font-weight:500;font-size:12px">· ${escapeHtml(item._mod)}</span></div>${choices}</div>`;
      }).join("");

      const answered = Object.keys(state.answers).length;
      let banner = "";
      let footer = `<div class="btn-row"><button class="btn" onclick="SUA._finalSubmit()" ${answered < questions.length ? "disabled" : ""}>Submit final exam</button>
                    <button class="btn ghost" onclick="SUA.go('')">Save &amp; exit</button></div>
                    <div style="color:var(--ink-soft);font-size:12.5px;margin-top:8px">${answered}/${questions.length} answered · you need ${needCorrect}/${questions.length} (${FINAL_PASS}%) to pass.</div>`;
      if (state.submitted) {
        const correct = questions.filter((it, qi) => state.answers[qi] === it.answer).length;
        const pctv = Math.round((correct / questions.length) * 100);
        const pass = pctv >= FINAL_PASS;
        banner = `<div class="result-banner ${pass ? "pass" : "fail"}">${pass ? "🏆" : "💪"} Final score: ${correct}/${questions.length} (${pctv}%). ${pass ? "PASSED — you've mastered the course!" : "You need " + FINAL_PASS + "% to pass. Review the weaker topics and try again."}</div>`;
        footer = `<div class="btn-row"><button class="btn ghost" onclick="SUA._finalRetry()">Retake final exam</button>
          ${pass ? `<button class="btn" onclick="SUA.go('certificate')">Claim your certificate ›</button>` : `<button class="btn" onclick="SUA.go('')">Back to the course</button>`}</div>`;
      }
      app.innerHTML = `<a class="back-link" onclick="SUA.go('')">‹ Back to dashboard</a>
        <div class="quiz"><h3>🎓 Final Mastery Exam</h3>
          <div class="qsub">${questions.length} questions drawn from <b>every module</b> of the course. Score <b>${FINAL_PASS}%+</b> to prove complete mastery and unlock your certificate. ${progress.finalBest ? "Best so far: <b>" + progress.finalBest + "%</b>." : ""}</div>
          ${banner}${blocks}${footer}</div>`;
    }

    window.SUA._finalPick = (qi, ci) => { if (!state.submitted) { state.answers[qi] = ci; draw(); } };
    window.SUA._finalSubmit = () => {
      state.submitted = true;
      const correct = questions.filter((it, qi) => state.answers[qi] === it.answer).length;
      const pctv = Math.round((correct / questions.length) * 100);
      if (pctv > (progress.finalBest || 0)) { progress.finalBest = pctv; saveProgress(progress); }
      if (pctv >= FINAL_PASS) { celebrate(); toast("Final Mastery Exam passed! 🎓🏆"); }
      draw();
      window.scrollTo(0, 0);
    };
    window.SUA._finalRetry = () => renderFinalExam();
    draw();
    window.scrollTo(0, 0);
  }

  /* ============================================================================
     SPEAKING LAB
     ========================================================================= */
  function renderLab(sub) {
    if (sub === "pron") return renderPronLab();
    if (sub === "phrasebook") return renderPhrasebook();
    if (sub && DATA.mockTests[sub]) return renderMockTest(sub);

    const cards = [
      { key: "pron", icon: "🔤", title: "Pronunciation Drills", desc: "Minimal pairs, stress &amp; tricky sounds. Listen, then speak — your mic scores you instantly." },
      { key: "ielts", icon: "📊", title: "IELTS Speaking Mock", desc: "A full 3-part mock test with timer &amp; recorder, then self-assess against the band descriptors." },
      { key: "interview", icon: "💼", title: "Job Interview Mock", desc: "Answer real interview questions on the clock. Record, replay, and rate your STAR answers." },
      { key: "presentation", icon: "🎤", title: "Presentation Mock", desc: "Deliver a short talk against the clock and review your delivery." },
      { key: "phrasebook", icon: "💬", title: "Speaking Phrasebook", desc: "Ready-made phrases for every situation — tap any line to hear it spoken." },
    ];
    app.innerHTML = `
      <a class="back-link" onclick="SUA.go('')">‹ Back to dashboard</a>
      <div class="module-head"><div class="icon" style="background:#6366f122;color:#6366f1">🎤</div>
        <div><h1>Speaking Lab</h1><div style="color:var(--ink-soft)">Practise out loud with your microphone. The real work of speaking happens here — little and often.</div></div></div>
      ${speechRecognitionSupported ? "" : `<div class="unsupported" style="margin:14px 0">🎙️ For mic scoring &amp; recording, open this in <b>Chrome</b> or <b>Edge</b> and allow microphone access. You can still listen to every model and practise out loud anywhere.</div>`}
      <div class="lab-grid" style="margin-top:18px">
        ${cards.map(c => `<button class="lab-card" onclick="SUA.go('lab/${c.key}')">
          <div class="icon">${c.icon}</div><h3>${c.title}</h3><p>${c.desc}</p></button>`).join("")}
      </div>`;
    window.scrollTo(0, 0);
  }

  function renderPronLab() {
    const groups = DATA.drills.map(g => `
      <div class="section-title">${g.title}</div>
      <div style="color:var(--ink-soft);font-size:14px;margin-bottom:10px">${g.note || ""}</div>
      ${g.items.map(p => `<div class="speakcheck" data-target="${escapeHtml(p)}"></div>`).join("")}
    `).join("");
    app.innerHTML = `
      <a class="back-link" onclick="SUA.go('lab')">‹ Back to Speaking Lab</a>
      <div class="module-head"><div class="icon" style="background:#0ea5a422;color:#0ea5a4">🔤</div>
        <div><h1>Pronunciation Drills</h1><div style="color:var(--ink-soft)">Listen to the model, then say it. Green = matched, red = missed. Aim for 80%+.</div></div></div>
      <div style="margin-top:16px">${groups}</div>`;
    enhanceSpeaking(app);
    window.scrollTo(0, 0);
  }

  function renderPhrasebook() {
    const sections = DATA.phrasebook.map(sec => `
      <div class="section-title">${sec.cat}</div>
      <div class="box phrases">
        ${sec.items.map(it => `<div class="phrase-line">
          <button class="say" data-say="${escapeHtml(it.en)}">🔊</button>
          <span class="txt"><span class="en">${escapeHtml(it.en)}</span>${it.note ? `<br><span class="note">${escapeHtml(it.note)}</span>` : ""}</span>
        </div>`).join("")}
      </div>`).join("");
    app.innerHTML = `
      <a class="back-link" onclick="SUA.go('lab')">‹ Back to Speaking Lab</a>
      <div class="module-head"><div class="icon" style="background:#6366f122;color:#6366f1">💬</div>
        <div><h1>Speaking Phrasebook</h1><div style="color:var(--ink-soft)">Natural, ready-to-use phrases. Tap 🔊 to hear each one, then copy the rhythm.</div></div></div>
      <div style="margin-top:8px">${sections}</div>`;
    enhanceSpeaking(app);
    window.scrollTo(0, 0);
  }

  /* ---------- Mock speaking test (timer + recorder + self-rubric) ---------- */
  function renderMockTest(key) {
    const test = DATA.mockTests[key];
    if (!test) return renderNotFound();
    let step = 0;                       // current prompt index, or test.prompts.length = rubric
    const recordings = [];             // {url} per prompt
    let mediaRecorder = null, chunks = [], stream = null, tick = null;

    function cleanup() {
      if (tick) { clearInterval(tick); tick = null; }
      if (mediaRecorder && mediaRecorder.state !== "inactive") { try { mediaRecorder.stop(); } catch (e) {} }
      if (stream) { stream.getTracks().forEach(t => t.stop()); stream = null; }
    }

    function drawPrompt() {
      const p = test.prompts[step];
      app.innerHTML = `
        <a class="back-link" onclick="SUA.go('lab')">‹ Exit mock test</a>
        <div class="module-head"><div class="icon" style="background:#6366f122;color:#6366f1">${test.icon}</div>
          <div><h1>${test.title}</h1><div style="color:var(--ink-soft)">Question ${step + 1} of ${test.prompts.length}</div></div></div>
        <div class="exam-prompt" style="margin-top:16px">
          <div class="tag">${escapeHtml(p.tag || "Speaking")}</div>
          <div class="q">${p.q}</div>
          ${p.detail ? `<div style="color:var(--ink-soft);margin-bottom:8px">${p.detail}</div>` : ""}
          <button class="say small" data-say="${escapeHtml((p.q + ". " + (p.detail || "")).replace(/<[^>]+>/g, " "))}">🔊 Hear the question</button>
          <div style="margin:16px 0 6px;color:var(--ink-soft);font-size:13px">${p.prep ? `Prep time ~${p.prep}s · ` : ""}Speak for about ${p.speak || 60}s.</div>
          <div class="timer" id="mt-timer">0:00</div>
          <div class="btn-row" style="margin-top:14px" id="mt-controls"></div>
          <div id="mt-playback"></div>
        </div>
        <div class="btn-row" style="justify-content:space-between;margin-top:10px">
          <div>${step > 0 ? `<button class="btn ghost" onclick="SUA._mtPrev()">‹ Previous</button>` : ""}</div>
          <div><button class="btn" onclick="SUA._mtNext()">${step < test.prompts.length - 1 ? "Next question ›" : "Finish &amp; self-assess ›"}</button></div>
        </div>`;
      enhanceSpeaking(app);
      const controls = document.getElementById("mt-controls");
      const timerEl = document.getElementById("mt-timer");
      const playback = document.getElementById("mt-playback");
      if (recordings[step]) playback.innerHTML = `<audio controls src="${recordings[step].url}"></audio>`;

      let seconds = 0;
      function fmt(s) { return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0"); }

      const recordBtn = document.createElement("button");
      recordBtn.className = "btn";
      recordBtn.innerHTML = "🎙️ Start recording";
      controls.appendChild(recordBtn);

      recordBtn.onclick = async () => {
        if (mediaRecorder && mediaRecorder.state === "recording") {
          cleanup(); return;
        }
        if (!navigator.mediaDevices || !window.MediaRecorder) {
          playback.innerHTML = `<div class="unsupported">Recording isn't available in this browser. Use the on-screen timer instead: tap “Hear the question”, then practise speaking aloud against the clock.</div>`;
          // fall back to a plain timer — and start it straight away on this click
          recordBtn.onclick = () => {
            if (tick) { clearInterval(tick); tick = null; recordBtn.innerHTML = "▶️ Start timer"; return; }
            seconds = 0; timerEl.textContent = "0:00"; timerEl.classList.remove("warn");
            tick = setInterval(() => { seconds++; timerEl.textContent = fmt(seconds); if (p.speak && seconds >= p.speak) timerEl.classList.add("warn"); }, 1000);
            recordBtn.innerHTML = "⏹ Stop timer";
          };
          recordBtn.onclick();
          return;
        }
        try {
          stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        } catch (e) {
          playback.innerHTML = `<div class="unsupported">Microphone blocked. Allow mic access in your browser to record.</div>`; return;
        }
        chunks = [];
        mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.ondataavailable = e => { if (e.data.size) chunks.push(e.data); };
        mediaRecorder.onstop = () => {
          const blob = new Blob(chunks, { type: chunks[0] ? chunks[0].type : "audio/webm" });
          const url = URL.createObjectURL(blob);
          recordings[step] = { url };
          playback.innerHTML = `<audio controls src="${url}"></audio>`;
          recordBtn.innerHTML = "🎙️ Record again";
          recordBtn.classList.remove("listening");
        };
        mediaRecorder.start();
        seconds = 0; timerEl.textContent = "0:00"; timerEl.classList.remove("warn");
        tick = setInterval(() => { seconds++; timerEl.textContent = fmt(seconds); if (p.speak && seconds >= p.speak) timerEl.classList.add("warn"); }, 1000);
        recordBtn.innerHTML = `<span class="rec-dot"></span> Stop recording`;
        recordBtn.classList.add("listening");
      };
    }

    function drawRubric() {
      cleanup();
      const items = test.rubric;
      app.innerHTML = `
        <a class="back-link" onclick="SUA.go('lab')">‹ Exit mock test</a>
        <div class="module-head"><div class="icon" style="background:#6366f122;color:#6366f1">${test.icon}</div>
          <div><h1>${test.title} — Self-assessment</h1><div style="color:var(--ink-soft)">Replay your answers and tick what you did well. Be honest — it's how you improve.</div></div></div>
        ${recordings.some(Boolean) ? `<div class="reader" style="margin-top:14px;padding:18px"><h4 style="margin-bottom:8px">🎧 Your recordings</h4>
          ${test.prompts.map((p, i) => recordings[i] ? `<div style="margin-bottom:10px"><div style="font-size:13px;color:var(--ink-soft)">Q${i + 1}: ${escapeHtml(p.q.replace(/<[^>]+>/g,' '))}</div><audio controls src="${recordings[i].url}"></audio></div>` : "").join("")}
        </div>` : ""}
        <div class="rubric">
          <h4 style="margin-bottom:8px">${escapeHtml(test.rubricTitle || "Rate your performance")}</h4>
          ${items.map((r, i) => `<label><input type="checkbox" data-r="${i}"> <span>${r}</span></label>`).join("")}
          <div class="btn-row" style="margin-top:14px"><button class="btn" onclick="SUA._mtScore()">See my result</button></div>
          <div id="mt-score" style="margin-top:14px"></div>
        </div>
        <div class="box tips" style="margin-top:16px"><h4>💡 What examiners reward</h4><ul>${(test.tips || []).map(t => `<li>${t}</li>`).join("")}</ul></div>
      `;
      enhanceSpeaking(app);
      window.SUA._mtScore = () => {
        const checks = Array.from(document.querySelectorAll(".rubric input[data-r]"));
        const got = checks.filter(c => c.checked).length;
        const pctv = Math.round((got / checks.length) * 100);
        setBest("mock_" + key, pctv);
        progress.lab["mock_" + key] = true; touchPractice(); saveProgress(progress);
        const band = test.band ? test.band(pctv) : "";
        const cls = pctv >= 80 ? "pass" : "fail";
        document.getElementById("mt-score").innerHTML =
          `<div class="result-banner ${cls}">${pctv >= 80 ? "🏆" : "📈"} You met ${got}/${checks.length} criteria (${pctv}%). ${band ? "<b>Estimated level: " + band + ".</b> " : ""}${pctv >= 80 ? "Strong performance — keep it up!" : "Good effort — focus on the unticked points and try again."}</div>`;
        if (pctv >= 80) celebrate();
      };
      window.scrollTo(0, 0);
    }

    window.SUA._mtNext = () => { cleanup(); if (step < test.prompts.length - 1) { step++; drawPrompt(); } else { step = test.prompts.length; drawRubric(); } };
    window.SUA._mtPrev = () => { cleanup(); if (step > 0) { step--; drawPrompt(); } };
    // On leaving the mock entirely: stop the mic AND free the recorded audio blobs.
    function disposeAll() { cleanup(); recordings.forEach(r => { if (r && r.url) { try { URL.revokeObjectURL(r.url); } catch (e) {} } }); }
    window.addEventListener("hashchange", disposeAll, { once: true });

    drawPrompt();
    window.scrollTo(0, 0);
  }

  /* ---------- Certificate ---------- */
  function renderCertificate() {
    const done = doneCount(), total = totalLessons();
    const examsPassed = DATA.modules.filter(m => (progress.exam[m.id] || 0) >= 80).length;
    const modulesDone = done === total && examsPassed === DATA.modules.length;
    const finalScore = progress.finalBest || 0;
    const finalPassed = finalScore >= FINAL_PASS;
    const allDone = modulesDone && finalPassed;
    const name = progress.name || "";

    const moduleStatus = DATA.modules.map(m => {
      const mp = moduleProgress(m);
      const ex = progress.exam[m.id] || 0;
      const passed = ex >= 80;
      return `<div class="short-card" style="margin-bottom:10px"><div class="row">
        <span style="font-size:22px">${m.icon}</span>
        <span style="flex:1"><b>${m.title}</b><br><span style="color:var(--ink-soft);font-size:13px">${mp.done}/${mp.total} lessons · Exam: ${ex ? ex + "%" : "not taken"}</span></span>
        <span class="level-tag ${passed ? "level-Basic" : "level-Advanced"}">${passed ? "✓ Passed" : (mp.pct === 100 ? "Take exam" : "In progress")}</span>
      </div></div>`;
    }).join("");

    app.innerHTML = `
      <a class="back-link" onclick="SUA.go('')">‹ Back to dashboard</a>
      <div class="module-head"><div class="icon" style="background:#f59e0b22;color:#f59e0b">🏆</div>
        <div><h1>Your Certificate &amp; Progress</h1>
        <div style="color:var(--ink-soft)">Complete every lesson, pass all ${DATA.modules.length} module exams, and pass the <b>Final Mastery Exam</b> to earn your certificate.</div></div></div>

      <div style="margin:14px 0 22px">
        <label style="font-weight:600;font-size:14px">Your name on the certificate:</label>
        <input id="certName" type="text" value="${escapeHtml(name)}" placeholder="Type your name…" oninput="SUA._setName(this.value)"
          style="display:block;width:100%;max-width:360px;margin-top:6px;padding:10px 14px;border:1px solid var(--line);border-radius:10px;font-size:15px" />
      </div>

      ${allDone ? `
        <div id="cert" style="background:linear-gradient(135deg,#f0fdfa,#eef2ff);border:3px solid var(--brand);border-radius:20px;padding:36px;text-align:center;margin-bottom:18px">
          <div style="font-size:42px">🎓</div>
          <div style="font-size:13px;letter-spacing:2px;text-transform:uppercase;color:var(--brand-dark);font-weight:700;margin-top:8px">Certificate of Completion</div>
          <div id="certNameDisplay" style="font-size:28px;font-weight:800;margin:14px 0;color:var(--ink)">${escapeHtml(name || "Your Name")}</div>
          <div style="color:#475569">has successfully completed</div>
          <div style="font-size:18px;font-weight:700;margin:6px 0 14px;color:var(--brand-dark)">Speak Up — English Speaking Academy (Basic → Advanced)</div>
          <div style="color:#475569;font-size:14px">All ${total} lessons &amp; ${DATA.modules.length} module exams passed · Final Mastery Exam: <b>${finalScore}%</b> 🏆</div>
        </div>
        <div class="btn-row"><button class="btn" onclick="window.print()">🖨️ Print / Save as PDF</button>
          <button class="btn ghost" onclick="SUA.go('final')">Retake final exam</button></div>
      ` : `
        <div class="result-banner fail">📋 ${done}/${total} lessons done · ${examsPassed}/${DATA.modules.length} module exams passed · Final exam: ${finalPassed ? finalScore + "% ✓" : (modulesDone ? "ready to take" : "locked")}. ${modulesDone ? "" : "Keep going — finish the lessons and module exams first."}</div>
        ${modulesDone ? `
        <div class="reader" style="padding:22px;text-align:center;border:2px solid #6366f1;margin-top:14px">
          <div style="font-size:30px">🎓</div>
          <h3 style="margin:8px 0">Final step: the Final Mastery Exam</h3>
          <p style="color:var(--ink-soft)">You've completed every module — now prove it. Pass the Final Mastery Exam (${FINAL_PASS}%) to unlock your certificate.${finalScore ? " Best so far: <b>" + finalScore + "%</b>." : ""}</p>
          <div class="btn-row" style="justify-content:center"><button class="btn" onclick="SUA.go('final')">${finalScore ? "Retake the Final Mastery Exam ›" : "Take the Final Mastery Exam ›"}</button></div>
        </div>` : ""}
      `}

      <div class="section-title">Your process at a glance</div>
      <div class="short-card" style="margin-bottom:10px"><div class="row">
        <span style="font-size:22px">🎓</span>
        <span style="flex:1"><b>Final Mastery Exam</b><br><span style="color:var(--ink-soft);font-size:13px">Capstone test from every module · ${finalScore ? "best " + finalScore + "%" : "not taken"}</span></span>
        <span class="level-tag ${finalPassed ? "level-Basic" : "level-Advanced"}">${finalPassed ? "✓ Passed" : (modulesDone ? "Ready" : "Locked")}</span>
      </div></div>

      <div class="section-title">Module-by-module status</div>
      ${moduleStatus}

      <div style="margin-top:26px;text-align:center">
        <button class="btn ghost" onclick="SUA._resetProgress()" style="color:var(--bad)">↺ Reset all progress</button>
        <div style="color:var(--ink-soft);font-size:12.5px;margin-top:6px">Clears every lesson, quiz, exam and your certificate on this device. This can't be undone.</div>
      </div>
    `;
    window.scrollTo(0, 0);
  }

  /* ---------- Settings (British voice + speaking speed) ---------- */
  function renderSettings() {
    const voices = englishVoices();
    const gb = voices.filter(v => /en[-_]GB/i.test(v.lang));
    const others = voices.filter(v => !/en[-_]GB/i.test(v.lang));
    const opt = (v) => `<option value="${escapeHtml(v.voiceURI)}" ${progress.voiceURI === v.voiceURI ? "selected" : ""}>${escapeHtml(v.name)} (${escapeHtml(v.lang)})</option>`;
    const voiceSelect = !TTS ? `<div class="unsupported">This browser can't speak text aloud. Try Chrome, Edge or Safari to use the model voice.</div>`
      : !voices.length ? `<div class="unsupported">No English voices found yet — they sometimes load a moment after the page. Reopen Settings if the list is empty.</div>`
      : `<select id="voiceSel" onchange="SUA._setVoice(this.value)" style="width:100%;max-width:460px;padding:10px 12px;border:1px solid var(--line);border-radius:10px;font-size:15px">
            <option value="">Auto — best British voice available</option>
            ${gb.length ? `<optgroup label="British English (recommended)">${gb.map(opt).join("")}</optgroup>` : ""}
            ${others.length ? `<optgroup label="Other English voices">${others.map(opt).join("")}</optgroup>` : ""}
         </select>
         ${gb.length ? "" : `<div class="sc-hint" style="margin-top:8px">💡 No dedicated British voice is installed on this device. On Windows/Android you can add an “English (United Kingdom)” voice in your system speech settings for the most authentic accent.</div>`}`;

    const rates = [["🐢 Slower", 0.72], ["💬 Comfortable", 0.92], ["🗣️ Native pace", 1.0]];
    const rateBtns = rates.map(([label, r]) =>
      `<button class="btn ${Math.abs((progress.rate || 0.92) - r) < 0.001 ? "" : "ghost"}" onclick="SUA._setRate(${r})">${label}</button>`).join(" ");

    app.innerHTML = `
      <a class="back-link" onclick="SUA.go('')">‹ Back to dashboard</a>
      <div class="module-head"><div class="icon" style="background:#6366f122;color:#6366f1">⚙️</div>
        <div><h1>Settings</h1><div style="color:var(--ink-soft)">Tune the model voice and speed to train your British accent and tone.</div></div></div>

      <div class="reader" style="margin-top:16px">
        <h3 style="margin-top:0">🔊 Model voice</h3>
        <p style="color:var(--ink-soft);font-size:14px">Choose the British voice you'd like to learn from. It's used for every 🔊 Listen button across the app.</p>
        ${voiceSelect}
        <div class="btn-row" style="margin-top:14px"><button class="btn ghost" onclick="SUA._testVoice()">▶️ Test the voice</button></div>

        <h3>⏱️ Speaking speed</h3>
        <p style="color:var(--ink-soft);font-size:14px">How fast the model voice talks. Start slower to catch every sound, then build up to native pace. (The 🐢 Slow button on practice cards is always extra-slow.)</p>
        <div class="btn-row">${rateBtns}</div>

        <h3>🎯 Try it</h3>
        <div class="speakcheck" data-target="Lovely weather we're having, isn't it?"></div>
      </div>

      <div class="reader" style="margin-top:16px">
        <h3 style="margin-top:0">📈 Your practice</h3>
        <p style="margin:0;color:var(--ink-soft)">🔥 Current streak: <b>${progress.streak || 0}</b> day(s) · Total days practised: <b>${progress.daysPracticed || 0}</b></p>
        <div class="btn-row" style="margin-top:14px">
          <button class="btn ghost" onclick="SUA.go('certificate')">View certificate &amp; progress ›</button>
          <button class="btn ghost" style="color:var(--bad)" onclick="SUA._resetProgress()">↺ Reset all progress</button>
        </div>
      </div>
    `;
    enhanceSpeaking(app);
    window.scrollTo(0, 0);
  }

  /* ---------- Search ---------- */
  function renderSearch(query) {
    const q = query.trim().toLowerCase();
    if (!q) return renderDashboard();
    const lessonHits = allLessons().filter(l =>
      l.title.toLowerCase().includes(q) || l.content.toLowerCase().includes(q) || l.level.toLowerCase().includes(q));
    const phraseHits = [];
    (DATA.phrasebook || []).forEach(sec => sec.items.forEach(it => {
      if (it.en.toLowerCase().includes(q) || (it.note || "").toLowerCase().includes(q)) phraseHits.push({ ...it, cat: sec.cat });
    }));

    if (!lessonHits.length && !phraseHits.length) {
      app.innerHTML = `<div class="empty"><div class="big">🔍</div><h2>No results for "${escapeHtml(query)}"</h2><p>Try a word like "interview", "vowel", "IELTS" or "small talk".</p></div>`;
      return;
    }
    const lessonList = lessonHits.map(l => `
      <button class="lesson-row" onclick="SUA.go('lesson/${l.moduleId}/${l.id}')">
        <div class="check" style="border-color:${l.color}">${progress.done[l.id] ? "✓" : ""}</div>
        <div class="info"><h4>${l.title}</h4>
          <div class="sub"><span class="level-tag level-${l.level}">${l.level}</span><span>${l.moduleTitle}</span></div>
        </div><div class="arrow">›</div></button>`).join("");
    const phraseList = phraseHits.map(p => `<div class="phrase-line">
        <button class="say" data-say="${escapeHtml(p.en)}">🔊</button>
        <span class="txt"><span class="en">${escapeHtml(p.en)}</span> <span class="note">— ${escapeHtml(p.cat)}</span></span></div>`).join("");

    app.innerHTML = `
      <a class="back-link" onclick="SUA.clearSearch()">‹ Clear search</a>
      <h1 style="font-size:22px;margin-bottom:18px">Results for "${escapeHtml(query)}"</h1>
      ${lessonHits.length ? `<div class="section-title">📖 Lessons (${lessonHits.length})</div>${lessonList}` : ""}
      ${phraseHits.length ? `<div class="section-title">💬 Phrases (${phraseHits.length})</div><div class="box phrases">${phraseList}</div>` : ""}`;
    enhanceSpeaking(app);
  }

  function renderNotFound() {
    app.innerHTML = `<div class="empty"><div class="big">🤔</div><h2>Page not found</h2><button class="btn" onclick="SUA.go('')">Back to dashboard</button></div>`;
  }

  /* ---------- Effects ---------- */
  let toastTimer;
  function toast(msg) {
    let el = document.getElementById("toast");
    if (!el) { el = document.createElement("div"); el.id = "toast"; el.className = "toast"; document.body.appendChild(el); }
    el.innerHTML = msg;
    requestAnimationFrame(() => el.classList.add("show"));
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("show"), 2600);
  }
  function celebrate() {
    const c = document.createElement("div"); c.className = "confetti"; document.body.appendChild(c);
    const colors = ["#0ea5a4", "#14b8a6", "#6366f1", "#16a34a", "#f59e0b"];
    for (let i = 0; i < 60; i++) {
      const p = document.createElement("div");
      const size = 6 + Math.random() * 8;
      p.style.cssText = `position:absolute;top:-20px;left:${Math.random() * 100}%;width:${size}px;height:${size}px;background:${colors[i % colors.length]};border-radius:${Math.random() > .5 ? "50%" : "2px"};opacity:.9;`;
      c.appendChild(p);
      const drift = (Math.random() - .5) * 200;
      p.animate([{ transform: "translate(0,0) rotate(0)" }, { transform: `translate(${drift}px, ${window.innerHeight + 40}px) rotate(${Math.random() * 720}deg)` }],
        { duration: 1400 + Math.random() * 800, easing: "cubic-bezier(.2,.6,.4,1)" });
    }
    setTimeout(() => c.remove(), 2400);
  }
  const TIPS = [
    "Speak a little <b>every day</b>. Five minutes daily beats one long session a week.",
    "Don't aim for zero mistakes — aim to <b>keep talking</b>. Fluency first, polish later.",
    "Record yourself, then listen back. Your ears will teach you faster than any rulebook.",
    "Copy the <b>music</b> of English: stress the important words, glide over the small ones.",
    "Learn whole <b>phrases</b>, not single words — that's how fluent speakers really talk.",
    "Pause and breathe. A confident silence sounds far better than a rushed “um.”",
    "Shadow a short audio clip: play a sentence, then say it back matching the rhythm.",
    "In exams &amp; interviews, <b>extend every answer</b> with a reason or example — never just “yes.”"
  ];
  function randomTip() { return TIPS[Math.floor(Math.random() * TIPS.length)]; }

  /* ---------- Public API & routing ---------- */
  window.SUA = {
    go,
    completeLesson(mId, lId) { markDone(lId); celebrate(); toast("Lesson complete! Progress saved ✓"); setTimeout(() => go("module/" + mId), 700); },
    clearSearch() { searchInput.value = ""; go(""); },
    speak,
    _resetProgress() {
      if (!window.confirm("Reset ALL progress on this device? Lessons, quizzes, exams and your certificate will be cleared. This cannot be undone.")) return;
      progress = { done: {}, quiz: {}, exam: {}, lab: {}, best: {}, finalBest: 0, name: progress.name || "" };
      saveProgress(progress);
      toast("Progress reset — fresh start! ✨");
      go("");
    },
    _setName(v) { progress.name = v; saveProgress(progress); const el = document.getElementById("certNameDisplay"); if (el) el.textContent = v || "Your Name"; },
    _setVoice(uri) { progress.voiceURI = uri || null; saveProgress(progress); speak("Hello, this is the voice you'll learn with."); },
    _setRate(r) { progress.rate = parseFloat(r) || 0.92; saveProgress(progress); renderSettings(); speak("This is how fast I'll speak."); },
    _testVoice() { speak("Lovely weather we're having, isn't it? Let's practise speaking English together."); },
    _pick() {}, _submitQuiz() {}, _retryQuiz() {},
    _examPick() {}, _examSubmit() {}, _examRetry() {},
    _finalPick() {}, _finalSubmit() {}, _finalRetry() {},
    _mtNext() {}, _mtPrev() {}, _mtScore() {}
  };

  function render() {
    if (TTS) TTS.cancel();
    if (searchInput.value.trim()) { renderSearch(searchInput.value); updateNav(); return; }
    const { parts } = parseHash();
    if (!parts.length) renderDashboard();
    else if (parts[0] === "module") renderModule(parts[1]);
    else if (parts[0] === "lesson") renderLesson(parts[1], parts[2]);
    else if (parts[0] === "exam") renderExam(parts[1]);
    else if (parts[0] === "final") renderFinalExam();
    else if (parts[0] === "plan") renderPlan();
    else if (parts[0] === "lab") renderLab(parts[1]);
    else if (parts[0] === "certificate") renderCertificate();
    else if (parts[0] === "settings") renderSettings();
    else renderNotFound();
    updateNav();
  }

  function updateNav() {
    const h = window.location.hash;
    let current = "home";
    if (h.includes("lab")) current = "lab";
    else if (h.includes("plan")) current = "plan";
    else if (h.includes("final")) current = "final";
    else if (h.includes("certificate")) current = "certificate";
    else if (h.includes("settings")) current = "settings";
    document.querySelectorAll("[data-nav]").forEach(el => {
      el.classList.toggle("active", el.getAttribute("data-nav") === current && !searchInput.value.trim());
    });
  }

  let searchTimer;
  searchInput.addEventListener("input", () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => renderSearch(searchInput.value), 150);
  });

  /* ---------- Boot ---------- */
  if (!DATA) {
    app.innerHTML = `<div class="empty"><div class="big">⚠️</div><h2>Could not load the course content.</h2><p>Make sure curriculum.js is loaded.</p></div>`;
  } else {
    if (TTS) pickVoice();
    render();
  }
})();
