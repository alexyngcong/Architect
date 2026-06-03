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
  // shape: { done: { lessonId: true }, quiz: { lessonId: scorePercent } }
  progress.done = progress.done || {};
  progress.quiz = progress.quiz || {};

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
  function go(hash) { window.location.hash = hash; }
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
          <div class="meta"><span>${mp.done} / ${mp.total} lessons</span><span>${mp.pct}%</span></div>
        </button>`;
    }).join("");

    app.innerHTML = `
      <div class="hero">
        <div class="ring"></div><div class="ring two"></div>
        <h1>Welcome to Office Pro Academy 👋</h1>
        <p>Your complete, step-by-step path from total beginner to a confident, skilled office assistant & coordinator. Learn at your own pace — your progress saves automatically.</p>
        <div class="progress-summary">
          <div class="stat"><div class="num">${done}/${total}</div><div class="lbl">Lessons done</div></div>
          <div class="stat"><div class="num">${pct}%</div><div class="lbl">Course complete</div></div>
          <div class="stat"><div class="num">${quizzesTaken}</div><div class="lbl">Quizzes taken</div></div>
          <div class="stat"><div class="num">${avgScore}%</div><div class="lbl">Avg quiz score</div></div>
        </div>
      </div>

      <div class="section-title">📚 Your Learning Path — work top to bottom</div>
      <div class="grid">${moduleCards}</div>

      <div class="section-title">🎁 Quick tip of the day</div>
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
              ${score != null ? `<span>📝 Quiz: ${score}%</span>` : ""}
            </div>
          </div>
          <div class="arrow">›</div>
        </button>`;
    }).join("");

    app.innerHTML = `
      <a class="back-link" onclick="OPA.go('')">‹ Back to all modules</a>
      <div class="module-head">
        <div class="icon" style="background:${m.color}22;color:${m.color}">${m.icon}</div>
        <div>
          <h1>${m.title}</h1>
          <div style="color:var(--ink-soft)">${m.blurb}</div>
        </div>
      </div>
      <div class="bar" style="margin:14px 0 6px"><span style="width:${mp.pct}%"></span></div>
      <div class="meta" style="display:flex;justify-content:space-between;color:var(--ink-soft);font-size:13px;margin-bottom:24px">
        <span>${mp.done} of ${mp.total} lessons complete</span><span>${mp.pct}%</span>
      </div>
      ${rows}
    `;
  }

  function renderLesson(moduleId, lessonId) {
    const m = DATA.modules.find(x => x.id === moduleId);
    if (!m) return renderNotFound();
    const idx = m.lessons.findIndex(l => l.id === lessonId);
    const l = m.lessons[idx];
    if (!l) return renderNotFound();

    const tips = (l.tips && l.tips.length) ? `
      <div class="box tips">
        <h4>💡 Pro Tips &amp; Shortcuts to Remember</h4>
        <ul>${l.tips.map(t => `<li>${t}</li>`).join("")}</ul>
      </div>` : "";

    const shorts = (l.shortcuts && l.shortcuts.length) ? `
      <div class="box short">
        <h4>⌨️ Keyboard Shortcuts in This Lesson</h4>
        ${l.shortcuts.map(s => `<div class="kbd-row"><span class="kbd">${escapeHtml(s.keys)}</span><span class="desc">${s.action}</span></div>`).join("")}
      </div>` : "";

    const prev = m.lessons[idx - 1];
    const next = m.lessons[idx + 1];

    app.innerHTML = `
      <a class="back-link" onclick="OPA.go('module/${m.id}')">‹ Back to ${escapeHtml(m.title)}</a>
      <div class="reader">
        <h1>${l.title}</h1>
        <div class="reader-meta">
          <span class="level-tag level-${l.level}">${l.level}</span>
          <span>⏱ ${l.minutes} min read</span>
          <span>${m.icon} ${escapeHtml(m.title)}</span>
        </div>
        <div class="content">${l.content}</div>
        ${tips}
        ${shorts}
      </div>

      ${l.quiz && l.quiz.length ? `<div id="quizMount"></div>` : `
        <div class="btn-row">
          <button class="btn" onclick="OPA.completeLesson('${m.id}','${l.id}')">Mark lesson complete ✓</button>
        </div>`}

      <div class="btn-row" style="margin-top:28px;justify-content:space-between">
        <div>${prev ? `<button class="btn ghost" onclick="OPA.go('lesson/${m.id}/${prev.id}')">‹ Previous</button>` : ""}</div>
        <div>${next ? `<button class="btn ghost" onclick="OPA.go('lesson/${m.id}/${next.id}')">Next ›</button>`
                     : `<button class="btn ghost" onclick="OPA.go('module/${m.id}')">Finish module ✓</button>`}</div>
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

      let header = `<h3>📝 Check Your Knowledge</h3><div class="qsub">Answer all ${l.quiz.length} questions to complete this lesson.</div>`;
      let banner = "";
      let footer = `<div class="btn-row"><button class="btn" id="quizSubmit" onclick="OPA._submitQuiz()" ${Object.keys(state.answers).length < l.quiz.length ? "disabled" : ""}>Submit answers</button></div>`;

      if (state.submitted) {
        const correct = l.quiz.filter((it, qi) => state.answers[qi] === it.answer).length;
        const pct = Math.round((correct / l.quiz.length) * 100);
        const pass = pct >= 70;
        banner = `<div class="result-banner ${pass ? "pass" : "fail"}">${pass ? "🎉" : "💪"} You scored ${correct}/${l.quiz.length} (${pct}%). ${pass ? "Lesson complete — great work!" : "Almost! Review the lesson and try again."}</div>`;
        footer = `<div class="btn-row">
          <button class="btn ghost" onclick="OPA._retryQuiz()">Try again</button>
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
      if (pct >= 70) { markDone(l.id); celebrate(); toast("Lesson complete! Progress saved ✓"); }
      draw();
    };
    window.OPA._retryQuiz = () => { state.answers = {}; state.submitted = false; draw(); };

    draw();
  }

  /* ---------- Shortcuts cheat-sheet ---------- */
  function renderShortcuts() {
    const rows = DATA.globalShortcuts.map(s =>
      `<div class="row"><span class="kbd">${escapeHtml(s.keys)}</span><span>${s.action}</span></div>`
    ).join("");
    app.innerHTML = `
      <a class="back-link" onclick="OPA.go('')">‹ Back to dashboard</a>
      <div class="module-head">
        <div class="icon" style="background:#4f46e522;color:#4f46e5">⌨️</div>
        <div><h1>Master Shortcut Cheat-Sheet</h1>
        <div style="color:var(--ink-soft)">The shortcuts that work almost everywhere. Learn 5 a week and you'll fly.</div></div>
      </div>
      <div style="margin:18px 0 10px;color:var(--ink-soft);font-size:13px">Tip: use the search box at the top to find any shortcut or lesson.</div>
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
      app.innerHTML = `<div class="empty"><div class="big">🔍</div><h2>No results for "${escapeHtml(query)}"</h2><p>Try a different word, like "save", "Excel", "email" or "Ctrl".</p></div>`;
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
      <a class="back-link" onclick="OPA.clearSearch()">‹ Clear search</a>
      <h1 style="font-size:22px;margin-bottom:18px">Results for "${escapeHtml(query)}"</h1>
      ${lessonHits.length ? `<div class="section-title">📖 Lessons (${lessonHits.length})</div>${lessonList}` : ""}
      ${allShorts.length ? `<div class="section-title">⌨️ Shortcuts (${allShorts.length})</div><div class="short-card">${shortList}</div>` : ""}
    `;
  }

  function renderNotFound() {
    app.innerHTML = `<div class="empty"><div class="big">🤔</div><h2>Page not found</h2><button class="btn" onclick="OPA.go('')">Back to dashboard</button></div>`;
  }

  /* ---------- Effects ---------- */
  let toastTimer;
  function toast(msg) {
    let t = document.getElementById("toast");
    if (!t) { t = document.createElement("div"); t.id = "toast"; t.className = "toast"; document.body.appendChild(t); }
    t.innerHTML = "🎉 " + msg;
    requestAnimationFrame(() => t.classList.add("show"));
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("show"), 2600);
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
    completeLesson(mId, lId) { markDone(lId); celebrate(); toast("Lesson complete! Progress saved ✓"); setTimeout(() => go("module/" + mId), 700); },
    clearSearch() { searchInput.value = ""; go(""); },
    _pick() {}, _submitQuiz() {}, _retryQuiz() {} // replaced per-quiz
  };

  function render() {
    if (searchInput.value.trim()) { renderSearch(searchInput.value); updateNav(); return; }
    const { parts } = parseHash();
    if (!parts.length) renderDashboard();
    else if (parts[0] === "module") renderModule(parts[1]);
    else if (parts[0] === "lesson") renderLesson(parts[1], parts[2]);
    else if (parts[0] === "shortcuts") renderShortcuts();
    else renderNotFound();
    updateNav();
  }

  function updateNav() {
    const h = window.location.hash;
    document.querySelectorAll("[data-nav]").forEach(el => {
      el.classList.toggle("active", el.getAttribute("data-nav") === (h.includes("shortcuts") ? "shortcuts" : "home") && !searchInput.value.trim());
    });
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
