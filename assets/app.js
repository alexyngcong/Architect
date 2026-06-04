/* ============================================================================
   OFFICE PRO ACADEMY — App logic
   A tiny no-framework single-page app. It renders screens, tracks progress
   in the browser (localStorage), runs quizzes, and powers search.
   ========================================================================= */

(function () {
  "use strict";

  const DATA = window.OFFICE_CURRICULUM;
  const STORE_KEY = "officeProAcademy.progress.v1";
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
  // shape: { done:{lessonId:true}, quiz:{lessonId:pct}, exam:{moduleId:pct}, name, lang }
  progress.done = progress.done || {};
  progress.quiz = progress.quiz || {};
  progress.lang = progress.lang || "en";   // "en" | "tl" (Tagalog)

  /* ---------- Language (Tagalog option) ----------
     t(en, tl) returns the Tagalog string when the learner has chosen Tagalog,
     otherwise the English one. Office terms stay English because the software
     she uses is in English. */
  function t(en, tl) { return (progress.lang === "tl" && tl) ? tl : en; }
  function setLang(lang) { progress.lang = lang; saveProgress(progress); }

  function markDone(lessonId) {
    if (!progress.done[lessonId]) {
      progress.done[lessonId] = true;
      saveProgress(progress);
    }
  }
  function setQuizScore(lessonId, pct) {
    progress.quiz[lessonId] = pct;
    saveProgress(progress);
  }

  /* ---------- Helpers ---------- */
  const allLessons = () => DATA.modules.flatMap(m => m.lessons.map(l => ({ ...l, moduleId: m.id, moduleTitle: m.title, color: m.color })));
  const totalLessons = () => allLessons().length;
  const doneCount = () => Object.keys(progress.done).filter(k => progress.done[k]).length;
  const moduleProgress = (m) => {
    const done = m.lessons.filter(l => progress.done[l.id]).length;
    return { done, total: m.lessons.length, pct: Math.round((done / m.lessons.length) * 100) };
  };
  const escapeHtml = (s) => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ---------- Router (hash based, works offline) ---------- */
  function go(hash) {
    // Any deliberate navigation clears an active search, so clicking a search
    // result actually opens it (instead of render() re-running the search).
    if (searchInput) searchInput.value = "";
    const current = window.location.hash.replace(/^#\/?/, "");
    if (current === hash) render();            // same hash won't fire hashchange — render manually
    else window.location.hash = hash;          // triggers hashchange -> render
  }
  window.addEventListener("hashchange", render);

  function parseHash() {
    const h = window.location.hash.replace(/^#\/?/, "");
    const parts = h.split("/").filter(Boolean);
    return { parts };
  }

  /* ---------- Screens ---------- */

  function renderDashboard() {
    const done = doneCount(), total = totalLessons();
    const pct = total ? Math.round((done / total) * 100) : 0;
    const quizzesTaken = Object.keys(progress.quiz).length;
    const avgScore = quizzesTaken
      ? Math.round(Object.values(progress.quiz).reduce((a, b) => a + b, 0) / quizzesTaken)
      : 0;

    const moduleCards = DATA.modules.map(m => {
      const mp = moduleProgress(m);
      return `
        <button class="module-card" onclick="OPA.go('module/${m.id}')">
          <div class="icon" style="background:${m.color}22;color:${m.color}">${m.icon}</div>
          <h3>${m.title}</h3>
          <div class="blurb">${m.blurb}</div>
          <div class="bar"><span style="width:${mp.pct}%"></span></div>
          <div class="meta"><span>${mp.done} / ${mp.total} ${t("lessons","aralin")}</span><span>${mp.pct}%</span></div>
        </button>`;
    }).join("");

    app.innerHTML = `
      <div class="hero">
        <div class="ring"></div><div class="ring two"></div>
        <h1>${t("Welcome to Office Pro Academy 👋","Maligayang pagdating sa Office Pro Academy 👋")}</h1>
        <p>${t("Your complete, step-by-step path from total beginner to a confident, skilled office assistant, coordinator, administrative staffer &amp; executive assistant. Learn at your own pace — your progress saves automatically.","Ang kumpleto, hakbang-hakbang na gabay mula baguhan tungong tiwalang office assistant, coordinator, administrative staff at executive assistant. Mag-aral sa sariling bilis — awtomatikong naka-save ang iyong progreso.")}</p>
        <div class="btn-row" style="margin-top:18px">
          <button class="btn" style="background:#fff;color:var(--brand-dark)" onclick="OPA.go('plan')">🚀 ${t("Start the Fast-Track Plan","Simulan ang Fast-Track Plan")}</button>
        </div>
        <p style="opacity:.9;font-size:13.5px;margin-top:12px">${t("New here? It's simple: open a module → read the short lessons & try the practice → pass the quick quiz to tick it off. Totally new to computers? Begin with <b>“Computer &amp; Keyboard Basics”</b> in Office Foundations.","Bago ka rito? Simple lang: buksan ang module → basahin ang maikling aralin at subukan ang practice → pumasa sa quiz para ma-tsek ito. Bago sa kompyuter? Magsimula sa <b>“Computer &amp; Keyboard Basics”</b> sa Office Foundations.")}</p>
        <div class="progress-summary">
          <div class="stat"><div class="num">${done}/${total}</div><div class="lbl">${t("Lessons done","Tapos na aralin")}</div></div>
          <div class="stat"><div class="num">${pct}%</div><div class="lbl">${t("Course complete","Bahagi ng kurso")}</div></div>
          <div class="stat"><div class="num">${quizzesTaken}</div><div class="lbl">${t("Quizzes taken","Quiz na nakuha")}</div></div>
          <div class="stat"><div class="num">${avgScore}%</div><div class="lbl">${t("Avg quiz score","Avg na iskor")}</div></div>
        </div>
      </div>

      <div class="section-title">📚 ${t("Your Learning Path — work top to bottom","Ang Iyong Learning Path — sunod-sunod mula itaas")}</div>
      <div class="grid">${moduleCards}</div>

      <div class="section-title">🎁 ${t("Quick tip of the day","Mabilis na tip ngayong araw")}</div>
      <div class="reader" style="padding:22px">
        <p style="margin:0">${randomTip()}</p>
      </div>
    `;
  }

  function renderModule(moduleId) {
    const m = DATA.modules.find(x => x.id === moduleId);
    if (!m) return renderNotFound();
    const mp = moduleProgress(m);

    const rows = m.lessons.map((l, i) => {
      const done = !!progress.done[l.id];
      const score = progress.quiz[l.id];
      return `
        <button class="lesson-row ${done ? "done" : ""}" onclick="OPA.go('lesson/${m.id}/${l.id}')">
          <div class="check">✓</div>
          <div class="info">
            <h4>${i + 1}. ${l.title}</h4>
            <div class="sub">
              <span class="level-tag level-${l.level}">${l.level}</span>
              <span>⏱ ${l.minutes} min</span>
              ${score != null ? `<span>📝 ${t("Quiz","Quiz")}: ${score}%</span>` : ""}
            </div>
          </div>
          <div class="arrow">›</div>
        </button>`;
    }).join("");

    app.innerHTML = `
      <a class="back-link" onclick="OPA.go('')">‹ ${t("Back to all modules","Balik sa lahat ng module")}</a>
      <div class="module-head">
        <div class="icon" style="background:${m.color}22;color:${m.color}">${m.icon}</div>
        <div>
          <h1>${m.title}</h1>
          <div style="color:var(--ink-soft)">${m.blurb}</div>
        </div>
      </div>
      <div class="bar" style="margin:14px 0 6px"><span style="width:${mp.pct}%"></span></div>
      <div class="meta" style="display:flex;justify-content:space-between;color:var(--ink-soft);font-size:13px;margin-bottom:24px">
        <span>${mp.done} ${t("of","sa")} ${mp.total} ${t("lessons complete","aralin tapos")}</span><span>${mp.pct}%</span>
      </div>
      ${rows}
      ${examCta(m, mp)}
    `;
  }

  /* The "Final Exam" call-to-action shown at the bottom of each module. */
  function examCta(m, mp) {
    progress.exam = progress.exam || {};
    const score = progress.exam[m.id] || 0;
    const passed = score >= 80;
    const ready = mp.pct === 100;
    return `
      <div class="reader" style="margin-top:18px;padding:22px;text-align:center;${passed ? "border:1px solid #16a34a" : ""}">
        <div style="font-size:30px">${passed ? "🏆" : "🎓"}</div>
        <h3 style="margin:6px 0">${escapeHtml(m.title)} — ${t("Final Exam","Huling Pagsusulit")}</h3>
        <p style="color:var(--ink-soft);margin-bottom:14px">
          ${passed ? t(`You passed with <b>${score}%</b>. Great work! You can retake it any time.`, `Pumasa ka nang <b>${score}%</b>. Magaling! Puwede mong ulitin anumang oras.`)
                   : (ready ? t("You've finished every lesson — time to prove it! Score 80% to earn this module's badge.","Tapos mo na lahat ng aralin — patunayan mo na! Makakuha ng 80% para sa badge ng module na ito.")
                            : t(`Finish the lessons first, then take the exam. ${score ? "Best so far: " + score + "%." : ""}`, `Tapusin muna ang mga aralin, tapos kunin ang pagsusulit. ${score ? "Pinakamataas: " + score + "%." : ""}`))}
        </p>
        <button class="btn" onclick="OPA.go('exam/${m.id}')">${passed ? t("Retake exam","Ulitin ang pagsusulit") : t("Take the Final Exam ›","Kunin ang Huling Pagsusulit ›")}</button>
      </div>`;
  }

  function renderLesson(moduleId, lessonId) {
    const m = DATA.modules.find(x => x.id === moduleId);
    if (!m) return renderNotFound();
    const idx = m.lessons.findIndex(l => l.id === lessonId);
    const l = m.lessons[idx];
    if (!l) return renderNotFound();

    const tips = (l.tips && l.tips.length) ? `
      <div class="box tips">
        <h4>💡 ${t("Pro Tips &amp; Shortcuts to Remember","Mga Tip at Shortcut na Tatandaan")}</h4>
        <ul>${l.tips.map(tip => `<li>${tip}</li>`).join("")}</ul>
      </div>` : "";

    const shorts = (l.shortcuts && l.shortcuts.length) ? `
      <div class="box short">
        <h4>⌨️ ${t("Keyboard Shortcuts in This Lesson","Mga Keyboard Shortcut sa Araling Ito")}</h4>
        ${l.shortcuts.map(s => `<div class="kbd-row"><span class="kbd">${escapeHtml(s.keys)}</span><span class="desc">${s.action}</span></div>`).join("")}
      </div>` : "";

    const practice = l.practice ? `
      <div class="box practice">
        <h4>✍️ ${t("Try It Yourself","Subukan Mo")}</h4>
        <p style="margin:0">${l.practice}</p>
      </div>` : "";

    // Tagalog explanation — shown when the learner has switched to Tagalog.
    const tagalog = (progress.lang === "tl" && l.summary_tl) ? `
      <div class="box tagalog">
        <h4>📘 Paliwanag sa Tagalog</h4>
        <p style="margin:0">${escapeHtml(l.summary_tl)}</p>
      </div>` : "";

    const prev = m.lessons[idx - 1];
    const next = m.lessons[idx + 1];

    app.innerHTML = `
      <a class="back-link" onclick="OPA.go('module/${m.id}')">‹ ${t("Back to","Balik sa")} ${escapeHtml(m.title)}</a>
      <div class="reader">
        <h1>${l.title}</h1>
        <div class="reader-meta">
          <span class="level-tag level-${l.level}">${l.level}</span>
          <span>⏱ ${l.minutes} min</span>
          <span>${m.icon} ${escapeHtml(m.title)}</span>
        </div>
        ${tagalog}
        <div class="content">${l.content}</div>
        ${tips}
        ${shorts}
        ${practice}
      </div>

      ${l.quiz && l.quiz.length ? `<div id="quizMount"></div>` : `
        <div class="btn-row">
          <button class="btn" onclick="OPA.completeLesson('${m.id}','${l.id}')">${t("Mark lesson complete ✓","Markahan tapos ✓")}</button>
        </div>`}

      <div class="btn-row" style="margin-top:28px;justify-content:space-between">
        <div>${prev ? `<button class="btn ghost" onclick="OPA.go('lesson/${m.id}/${prev.id}')">‹ ${t("Previous","Nakaraan")}</button>` : ""}</div>
        <div>${next ? `<button class="btn ghost" onclick="OPA.go('lesson/${m.id}/${next.id}')">${t("Next","Susunod")} ›</button>`
                     : `<button class="btn ghost" onclick="OPA.go('module/${m.id}')">${t("Finish module ✓","Tapusin ang module ✓")}</button>`}</div>
      </div>
    `;

    if (l.quiz && l.quiz.length) mountQuiz(m, l);
    window.scrollTo(0, 0);
  }

  /* ---------- Quiz engine ---------- */
  function mountQuiz(m, l) {
    const mount = document.getElementById("quizMount");
    const state = { answers: {}, submitted: false };

    function draw() {
      const blocks = l.quiz.map((item, qi) => {
        const chosen = state.answers[qi];
        const choices = item.choices.map((c, ci) => {
          let cls = "choice";
          if (state.submitted) {
            if (ci === item.answer) cls += " correct";
            else if (chosen === ci) cls += " wrong";
          } else if (chosen === ci) cls += " selected";
          const mark = state.submitted
            ? (ci === item.answer ? '<span class="mark">✓</span>' : (chosen === ci ? '<span class="mark">✗</span>' : ""))
            : "";
          return `<button class="${cls}" ${state.submitted ? "disabled" : ""} onclick="OPA._pick(${qi},${ci})">${escapeHtml(c)}${mark}</button>`;
        }).join("");
        return `<div class="q-block"><div class="q-text">${qi + 1}. ${escapeHtml(item.q)}</div>${choices}</div>`;
      }).join("");

      let header = `<h3>📝 ${t("Check Your Knowledge","Subukin ang Iyong Natutunan")}</h3><div class="qsub">${t(`Answer all ${l.quiz.length} questions to complete this lesson.`, `Sagutin ang lahat ng ${l.quiz.length} tanong para matapos ang araling ito.`)}</div>`;
      let banner = "";
      let footer = `<div class="btn-row"><button class="btn" id="quizSubmit" onclick="OPA._submitQuiz()" ${Object.keys(state.answers).length < l.quiz.length ? "disabled" : ""}>${t("Submit answers","Isumite ang sagot")}</button></div>`;

      if (state.submitted) {
        const correct = l.quiz.filter((it, qi) => state.answers[qi] === it.answer).length;
        const pct = Math.round((correct / l.quiz.length) * 100);
        const pass = pct >= 70;
        banner = `<div class="result-banner ${pass ? "pass" : "fail"}">${pass ? "🎉" : "💪"} ${t(`You scored ${correct}/${l.quiz.length} (${pct}%).`, `Nakakuha ka ng ${correct}/${l.quiz.length} (${pct}%).`)} ${pass ? t("Lesson complete — great work!","Tapos na ang aralin — magaling!") : t("Almost! Review the lesson and try again.","Muntik na! Balikan ang aralin at subukang muli.")}</div>`;
        footer = `<div class="btn-row">
          <button class="btn ghost" onclick="OPA._retryQuiz()">${t("Try again","Subukang muli")}</button>
        </div>`;
      }

      mount.innerHTML = `<div class="quiz">${header}${banner}${blocks}${footer}</div>`;
    }

    // expose handlers for this quiz instance
    window.OPA._pick = (qi, ci) => { if (!state.submitted) { state.answers[qi] = ci; draw(); } };
    window.OPA._submitQuiz = () => {
      state.submitted = true;
      const correct = l.quiz.filter((it, qi) => state.answers[qi] === it.answer).length;
      const pct = Math.round((correct / l.quiz.length) * 100);
      setQuizScore(l.id, pct);
      if (pct >= 70) { markDone(l.id); celebrate(); toast(t("Lesson complete! Progress saved ✓","Tapos na ang aralin! Naka-save ang progreso ✓")); }
      draw();
    };
    window.OPA._retryQuiz = () => { state.answers = {}; state.submitted = false; draw(); };

    draw();
  }

  /* ---------- Fast-Track Plan screen ---------- */
  function renderPlan() {
    const ft = DATA.fastTrack;
    const lessonById = {};
    allLessons().forEach(l => { lessonById[l.id] = l; });

    const dayCards = ft.days.map(d => {
      const items = d.lessons.map(id => {
        const l = lessonById[id];
        if (!l) return "";
        const done = !!progress.done[id];
        return `<button class="lesson-row ${done ? "done" : ""}" style="margin-bottom:8px"
                  onclick="OPA.go('lesson/${l.moduleId}/${l.id}')">
                  <div class="check">✓</div>
                  <div class="info"><h4>${l.title}</h4>
                    <div class="sub"><span class="level-tag level-${l.level}">${l.level}</span><span>⏱ ${l.minutes} min</span></div>
                  </div><div class="arrow">›</div>
                </button>`;
      }).join("");
      const dayDone = d.lessons.every(id => progress.done[id]);
      return `
        <div class="reader" style="padding:18px;margin-bottom:14px;${dayDone ? "border:1px solid #16a34a" : ""}">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px">
            <div style="background:${dayDone ? "#16a34a" : "var(--brand)"};color:#fff;width:46px;height:46px;border-radius:12px;display:grid;place-items:center;font-weight:800">${dayDone ? "✓" : "D" + d.day}</div>
            <div><div style="font-weight:800;font-size:16px">${t("Day","Araw")} ${d.day}</div>
            <div style="color:var(--ink-soft);font-size:13px">${d.focus}</div></div>
          </div>
          ${items}
        </div>`;
    }).join("");

    app.innerHTML = `
      <a class="back-link" onclick="OPA.go('')">‹ ${t("Back to dashboard","Balik sa dashboard")}</a>
      <div class="module-head">
        <div class="icon" style="background:#4f46e522;color:#4f46e5">🚀</div>
        <div><h1>${ft.title}</h1>
        <div style="color:var(--ink-soft)">${ft.intro}</div></div>
      </div>
      <div style="margin:18px 0">${dayCards}</div>
    `;
    window.scrollTo(0, 0);
  }

  /* ---------- Module Final Exam ---------- */
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }

  function renderExam(moduleId) {
    const m = DATA.modules.find(x => x.id === moduleId);
    if (!m) return renderNotFound();
    // Pool all quiz questions across the module's lessons.
    const pool = m.lessons.flatMap(l => (l.quiz || []).map(q => ({ ...q })));
    const questions = shuffle(pool).slice(0, Math.min(10, pool.length)); // up to 10 Qs
    const state = { answers: {}, submitted: false };

    function draw() {
      const blocks = questions.map((item, qi) => {
        const chosen = state.answers[qi];
        const choices = item.choices.map((c, ci) => {
          let cls = "choice";
          if (state.submitted) {
            if (ci === item.answer) cls += " correct";
            else if (chosen === ci) cls += " wrong";
          } else if (chosen === ci) cls += " selected";
          const mark = state.submitted ? (ci === item.answer ? '<span class="mark">✓</span>' : (chosen === ci ? '<span class="mark">✗</span>' : "")) : "";
          return `<button class="${cls}" ${state.submitted ? "disabled" : ""} onclick="OPA._examPick(${qi},${ci})">${escapeHtml(c)}${mark}</button>`;
        }).join("");
        return `<div class="q-block"><div class="q-text">${qi + 1}. ${escapeHtml(item.q)}</div>${choices}</div>`;
      }).join("");

      let banner = "";
      let footer = `<div class="btn-row"><button class="btn" onclick="OPA._examSubmit()" ${Object.keys(state.answers).length < questions.length ? "disabled" : ""}>${t("Submit exam","Isumite ang pagsusulit")}</button>
                    <button class="btn ghost" onclick="OPA.go('module/${m.id}')">${t("Back to module","Balik sa module")}</button></div>`;

      if (state.submitted) {
        const correct = questions.filter((it, qi) => state.answers[qi] === it.answer).length;
        const pct = Math.round((correct / questions.length) * 100);
        const pass = pct >= 80;
        banner = `<div class="result-banner ${pass ? "pass" : "fail"}">${pass ? "🏆" : "💪"} ${t("Exam score","Iskor sa pagsusulit")}: ${correct}/${questions.length} (${pct}%). ${pass ? t("PASSED — module mastered!","PUMASA — bihasa na sa module!") : t("You need 80% to pass. Review the lessons and try again.","Kailangan ng 80% para pumasa. Balikan ang mga aralin at subukang muli.")}</div>`;
        footer = `<div class="btn-row">
          <button class="btn ghost" onclick="OPA._examRetry()">${t("Retake exam","Ulitin ang pagsusulit")}</button>
          ${pass ? `<button class="btn" onclick="OPA.go('certificate')">${t("View your progress / certificate ›","Tingnan ang progreso / certificate ›")}</button>` : `<button class="btn" onclick="OPA.go('module/${m.id}')">${t("Back to lessons","Balik sa mga aralin")}</button>`}
        </div>`;
      }

      app.innerHTML = `
        <a class="back-link" onclick="OPA.go('module/${m.id}')">‹ ${t("Back to","Balik sa")} ${escapeHtml(m.title)}</a>
        <div class="quiz">
          <h3>🎓 ${escapeHtml(m.title)} — ${t("Final Exam","Huling Pagsusulit")}</h3>
          <div class="qsub">${t(`${questions.length} questions drawn from the whole module. You need <b>80%</b> to pass and earn this module's badge.`, `${questions.length} tanong mula sa buong module. Kailangan ng <b>80%</b> para pumasa at makuha ang badge ng module.`)}</div>
          ${banner}${blocks}${footer}
        </div>`;
    }

    window.OPA._examPick = (qi, ci) => { if (!state.submitted) { state.answers[qi] = ci; draw(); } };
    window.OPA._examSubmit = () => {
      state.submitted = true;
      const correct = questions.filter((it, qi) => state.answers[qi] === it.answer).length;
      const pct = Math.round((correct / questions.length) * 100);
      progress.exam = progress.exam || {};
      if (pct > (progress.exam[m.id] || 0)) { progress.exam[m.id] = pct; saveProgress(progress); }
      if (pct >= 80) { celebrate(); toast(m.title + t(" exam passed! 🏆"," — pumasa sa pagsusulit! 🏆")); }
      draw();
    };
    window.OPA._examRetry = () => { renderExam(m.id); }; // re-render directly (same-hash nav wouldn't fire)

    draw();
    window.scrollTo(0, 0);
  }

  /* ---------- Certificate ---------- */
  function renderCertificate() {
    progress.exam = progress.exam || {};
    const done = doneCount(), total = totalLessons();
    const examsPassed = DATA.modules.filter(m => (progress.exam[m.id] || 0) >= 80).length;
    const allDone = done === total && examsPassed === DATA.modules.length;
    const name = progress.name || "";

    const moduleStatus = DATA.modules.map(m => {
      const mp = moduleProgress(m);
      const ex = progress.exam[m.id] || 0;
      const passed = ex >= 80;
      return `<div class="short-card" style="margin-bottom:10px"><div class="row">
        <span style="font-size:22px">${m.icon}</span>
        <span style="flex:1"><b>${m.title}</b><br><span style="color:var(--ink-soft);font-size:13px">${mp.done}/${mp.total} ${t("lessons","aralin")} · ${t("Exam","Pagsusulit")}: ${ex ? ex + "%" : t("not taken","di pa kinukuha")}</span></span>
        <span class="level-tag ${passed ? "level-Basic" : "level-Advanced"}">${passed ? t("✓ Passed","✓ Pasado") : (mp.pct === 100 ? t("Take exam","Kunin") : t("In progress","Ginagawa"))}</span>
      </div></div>`;
    }).join("");

    app.innerHTML = `
      <a class="back-link" onclick="OPA.go('')">‹ ${t("Back to dashboard","Balik sa dashboard")}</a>
      <div class="module-head">
        <div class="icon" style="background:#f59e0b22;color:#f59e0b">🏆</div>
        <div><h1>${t("Your Certificate & Progress","Iyong Certificate at Progreso")}</h1>
        <div style="color:var(--ink-soft)">${t(`Complete every lesson and pass all ${DATA.modules.length} module exams to earn your certificate.`, `Tapusin ang lahat ng aralin at pumasa sa lahat ng ${DATA.modules.length} pagsusulit para makuha ang certificate.`)}</div></div>
      </div>

      <div style="margin:14px 0 22px">
        <label style="font-weight:600;font-size:14px">${t("Your name on the certificate:","Pangalan mo sa certificate:")}</label>
        <input id="certName" type="text" value="${escapeHtml(name)}" placeholder="${t("Type your name…","I-type ang pangalan mo…")}"
          oninput="OPA._setName(this.value)"
          style="display:block;width:100%;max-width:360px;margin-top:6px;padding:10px 14px;border:1px solid var(--line);border-radius:10px;font-size:15px" />
      </div>

      ${allDone ? `
        <div id="cert" style="background:linear-gradient(135deg,#fffbeb,#fef3c7);border:3px solid #f59e0b;border-radius:20px;padding:36px;text-align:center;margin-bottom:18px">
          <div style="font-size:42px">🎓</div>
          <div style="font-size:13px;letter-spacing:2px;text-transform:uppercase;color:#b45309;font-weight:700;margin-top:8px">${t("Certificate of Completion","Sertipiko ng Pagtatapos")}</div>
          <div id="certNameDisplay" style="font-size:28px;font-weight:800;margin:14px 0;color:#1e293b">${escapeHtml(name || t("Your Name","Pangalan Mo"))}</div>
          <div style="color:#475569">${t("has successfully completed","ay matagumpay na natapos ang")}</div>
          <div style="font-size:18px;font-weight:700;margin:6px 0 14px;color:var(--brand-dark)">Office Pro Academy — Microsoft Office &amp; Office Administration</div>
          <div style="color:#475569;font-size:14px">${t(`All ${total} lessons &amp; ${DATA.modules.length} module exams passed 🏆`, `Lahat ng ${total} aralin at ${DATA.modules.length} pagsusulit ay pasado 🏆`)}</div>
        </div>
        <div class="btn-row"><button class="btn" onclick="window.print()">🖨️ ${t("Print / Save as PDF","I-print / I-save bilang PDF")}</button></div>
      ` : `
        <div class="result-banner fail">📋 ${t(`${done}/${total} lessons done · ${examsPassed}/${DATA.modules.length} module exams passed. Keep going — your certificate unlocks when both are complete!`, `${done}/${total} aralin tapos · ${examsPassed}/${DATA.modules.length} pagsusulit pasado. Tuloy lang — bubukas ang certificate kapag kumpleto na ang dalawa!`)}</div>
      `}

      <div class="section-title">${t("Module-by-module status","Status bawat module")}</div>
      ${moduleStatus}
    `;
    window.scrollTo(0, 0);
  }

  /* ---------- Shortcuts cheat-sheet ---------- */
  function renderShortcuts() {
    const rows = DATA.globalShortcuts.map(s =>
      `<div class="row"><span class="kbd">${escapeHtml(s.keys)}</span><span>${s.action}</span></div>`
    ).join("");
    app.innerHTML = `
      <a class="back-link" onclick="OPA.go('')">‹ ${t("Back to dashboard","Balik sa dashboard")}</a>
      <div class="module-head">
        <div class="icon" style="background:#4f46e522;color:#4f46e5">⌨️</div>
        <div><h1>${t("Master Shortcut Cheat-Sheet","Listahan ng mga Shortcut")}</h1>
        <div style="color:var(--ink-soft)">${t("The shortcuts that work almost everywhere. Learn 5 a week and you'll fly.","Ang mga shortcut na gumagana halos kahit saan. Mag-aral ng 5 kada linggo.")}</div></div>
      </div>
      <div style="margin:18px 0 10px;color:var(--ink-soft);font-size:13px">${t("Tip: use the search box at the top to find any shortcut or lesson.","Tip: gamitin ang search box sa itaas para hanapin ang shortcut o aralin.")}</div>
      <div class="short-card">${rows}</div>
    `;
  }

  /* ---------- Search ---------- */
  function renderSearch(query) {
    const q = query.trim().toLowerCase();
    if (!q) return renderDashboard();

    const lessonHits = allLessons().filter(l =>
      l.title.toLowerCase().includes(q) ||
      l.content.toLowerCase().includes(q) ||
      l.level.toLowerCase().includes(q)
    );
    const shortcutHits = DATA.globalShortcuts.filter(s =>
      s.keys.toLowerCase().includes(q) || s.action.toLowerCase().includes(q)
    );
    // lesson-level shortcuts too
    const lessonShortcutHits = [];
    allLessons().forEach(l => (l.shortcuts || []).forEach(s => {
      if (s.keys.toLowerCase().includes(q) || s.action.toLowerCase().includes(q))
        lessonShortcutHits.push({ ...s, lesson: l });
    }));

    if (!lessonHits.length && !shortcutHits.length && !lessonShortcutHits.length) {
      app.innerHTML = `<div class="empty"><div class="big">🔍</div><h2>${t("No results for","Walang nahanap para sa")} "${escapeHtml(query)}"</h2><p>${t('Try a different word, like "save", "Excel", "email" or "Ctrl".','Subukan ang ibang salita, tulad ng "save", "Excel", "email" o "Ctrl".')}</p></div>`;
      return;
    }

    const lessonList = lessonHits.map(l => `
      <button class="lesson-row" onclick="OPA.go('lesson/${l.moduleId}/${l.id}')">
        <div class="check" style="border-color:${l.color}">${progress.done[l.id] ? "✓" : ""}</div>
        <div class="info"><h4>${l.title}</h4>
          <div class="sub"><span class="level-tag level-${l.level}">${l.level}</span><span>${l.moduleTitle}</span></div>
        </div><div class="arrow">›</div>
      </button>`).join("");

    const allShorts = [...shortcutHits.map(s => ({ keys: s.keys, action: s.action })),
                       ...lessonShortcutHits.map(s => ({ keys: s.keys, action: s.action + " — from: " + s.lesson.title }))];
    const shortList = allShorts.map(s =>
      `<div class="row"><span class="kbd">${escapeHtml(s.keys)}</span><span>${escapeHtml(s.action)}</span></div>`
    ).join("");

    app.innerHTML = `
      <a class="back-link" onclick="OPA.clearSearch()">‹ ${t("Clear search","I-clear ang paghahanap")}</a>
      <h1 style="font-size:22px;margin-bottom:18px">${t("Results for","Resulta para sa")} "${escapeHtml(query)}"</h1>
      ${lessonHits.length ? `<div class="section-title">📖 ${t("Lessons","Mga Aralin")} (${lessonHits.length})</div>${lessonList}` : ""}
      ${allShorts.length ? `<div class="section-title">⌨️ ${t("Shortcuts","Mga Shortcut")} (${allShorts.length})</div><div class="short-card">${shortList}</div>` : ""}
    `;
  }

  function renderNotFound() {
    app.innerHTML = `<div class="empty"><div class="big">🤔</div><h2>${t("Page not found","Hindi nahanap ang pahina")}</h2><button class="btn" onclick="OPA.go('')">${t("Back to dashboard","Balik sa dashboard")}</button></div>`;
  }

  /* ---------- Effects ---------- */
  let toastTimer;
  function toast(msg) {
    let el = document.getElementById("toast");
    if (!el) { el = document.createElement("div"); el.id = "toast"; el.className = "toast"; document.body.appendChild(el); }
    el.innerHTML = "🎉 " + msg;
    requestAnimationFrame(() => el.classList.add("show"));
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("show"), 2600);
  }

  function celebrate() {
    const c = document.createElement("div");
    c.className = "confetti";
    document.body.appendChild(c);
    const colors = ["#4f46e5", "#7c3aed", "#db2777", "#16a34a", "#f59e0b"];
    for (let i = 0; i < 60; i++) {
      const p = document.createElement("div");
      const size = 6 + Math.random() * 8;
      p.style.cssText = `position:absolute;top:-20px;left:${Math.random() * 100}%;width:${size}px;height:${size}px;background:${colors[i % colors.length]};border-radius:${Math.random() > .5 ? "50%" : "2px"};opacity:.9;`;
      c.appendChild(p);
      const fall = 600 + Math.random() * 800;
      const drift = (Math.random() - .5) * 200;
      p.animate(
        [{ transform: "translate(0,0) rotate(0)" }, { transform: `translate(${drift}px, ${window.innerHeight + 40}px) rotate(${Math.random() * 720}deg)` }],
        { duration: 1400 + Math.random() * 800, easing: "cubic-bezier(.2,.6,.4,1)" }
      );
    }
    setTimeout(() => c.remove(), 2400);
  }

  const TIPS = [
    "Press <b>Ctrl + S</b> every few minutes. Saving is a habit, not an afterthought.",
    "<b>Ctrl + Z</b> is your best friend — it undoes almost any mistake.",
    "In Excel, <b>Alt + =</b> instantly totals a column of numbers.",
    "Write the email recipient's address <b>last</b> so you never send it half-finished.",
    "Name files with the date first: <code>2026-06-03 Report.docx</code> — they sort themselves.",
    "<b>Windows + L</b> locks your screen instantly when you step away. Always do this.",
    "Use <b>Format Painter</b> (the paintbrush) to copy a look from one place to another.",
    "In a meeting, the gold is the <b>action items</b>: what, who, and by when."
  ];
  function randomTip() { return TIPS[Math.floor(Math.random() * TIPS.length)]; }

  /* ---------- Public API & routing ---------- */
  window.OPA = {
    go,
    completeLesson(mId, lId) { markDone(lId); celebrate(); toast(t("Lesson complete! Progress saved ✓","Tapos na ang aralin! Naka-save ✓")); setTimeout(() => go("module/" + mId), 700); },
    clearSearch() { searchInput.value = ""; go(""); },
    toggleLang() { setLang(progress.lang === "tl" ? "en" : "tl"); render(); },
    _setName(v) { progress.name = v; saveProgress(progress); const el = document.getElementById("certNameDisplay"); if (el) el.textContent = v || t("Your Name","Pangalan Mo"); },
    _pick() {}, _submitQuiz() {}, _retryQuiz() {},       // replaced per-quiz
    _examPick() {}, _examSubmit() {}, _examRetry() {}      // replaced per-exam
  };

  function render() {
    if (searchInput.value.trim()) { renderSearch(searchInput.value); updateNav(); return; }
    const { parts } = parseHash();
    if (!parts.length) renderDashboard();
    else if (parts[0] === "module") renderModule(parts[1]);
    else if (parts[0] === "lesson") renderLesson(parts[1], parts[2]);
    else if (parts[0] === "exam") renderExam(parts[1]);
    else if (parts[0] === "plan") renderPlan();
    else if (parts[0] === "certificate") renderCertificate();
    else if (parts[0] === "shortcuts") renderShortcuts();
    else renderNotFound();
    updateNav();
  }

  function updateNav() {
    const h = window.location.hash;
    let current = "home";
    if (h.includes("shortcuts")) current = "shortcuts";
    else if (h.includes("plan")) current = "plan";
    else if (h.includes("certificate")) current = "certificate";
    document.querySelectorAll("[data-nav]").forEach(el => {
      el.classList.toggle("active", el.getAttribute("data-nav") === current && !searchInput.value.trim());
    });
    // Keep the nav labels and the language toggle in the chosen language.
    const setText = (id, str) => { const el = document.getElementById(id); if (el) el.textContent = str; };
    setText("navHome", t("Home", "Home"));
    setText("navPlan", t("Plan", "Plano"));
    setText("navShortcuts", t("Shortcuts", "Shortcut"));
    setText("navCert", t("Certificate", "Sertipiko"));
    const lt = document.getElementById("langToggle");
    if (lt) lt.textContent = progress.lang === "tl" ? "🌐 English" : "🌐 Tagalog";
    const si = document.getElementById("search");
    if (si) si.placeholder = t("Search lessons or shortcuts…", "Maghanap ng aralin o shortcut…");
  }

  /* ---------- Search input wiring ---------- */
  let searchTimer;
  searchInput.addEventListener("input", () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => renderSearch(searchInput.value), 150);
  });

  /* ---------- Boot ---------- */
  if (!DATA) {
    app.innerHTML = `<div class="empty"><div class="big">⚠️</div><h2>Could not load the course content.</h2><p>Make sure curriculum.js is in the same folder.</p></div>`;
  } else {
    render();
  }
})();
