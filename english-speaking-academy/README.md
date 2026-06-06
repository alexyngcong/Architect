# 🗣️ Speak Up — English Speaking Academy

A complete, friendly, **self-paced course** that takes you from **basic everyday English**
all the way to **confident, advanced speaking** — the kind tested in **IELTS, TOEFL &
Cambridge** speaking exams and needed in **job interviews** and **public speaking**.

Everything is taught in **British English** (Received-Pronunciation-style models,
British vocabulary and spelling), with a special focus on **tone, intonation and
sounding like a fluent native speaker**.

It runs **100% locally** in any web browser, works **offline**, and **remembers your
progress automatically**. No installation, no account, no server.

`index.html` is a **single self-contained file** — all the lessons, styling and logic
are bundled inside it. Copy that one file anywhere (USB stick, email, phone) and it just works.

---

## ▶️ How to start

1. Open **`index.html`** in your web browser (Chrome or Edge recommended — see below).
2. Start with **Speaking Foundations** and work top to bottom.
3. **Say every example out loud.** Tap 🔊 to hear a British voice, then copy it.

> 🎤 **For the full experience, use Chrome or Edge and allow microphone access.** That
> unlocks live **pronunciation scoring** (the app listens and tells you how close you
> were) and **recording** in the mock exams. In any other browser you can still listen
> to every model and practise aloud — only the mic features need Chrome/Edge.

---

## 📚 What's inside

A clear flow: pick a **module** → work through the **lessons** (Basic → Intermediate →
Advanced) → say the examples aloud → pass the **quiz** → pass the **Module Exam** →
earn your **Certificate**.

| # | Module | What you'll learn |
|---|--------|-------------------|
| 1 | 🗣️ **Speaking Foundations** | How speaking works, the sounds of English, greetings, introducing yourself, everyday essentials |
| 2 | 🔤 **British Pronunciation Lab** | British vowels & the long /ɑː/, tricky consonants (TH, V/W, dark L), the silent "R", word stress |
| 3 | 🎵 **Tone, Intonation & Sounding Fluent** | Sentence stress & rhythm, rise & fall, connected speech, speaking in "chunks", British politeness & understatement |
| 4 | 💬 **Everyday British Conversation** | Small talk & the weather, cafés/pubs/shops, opinions, agreeing/disagreeing politely, the telephone |
| 5 | 🧱 **Grammar for Speaking** | The tenses you actually use, asking questions naturally, conditionals, linking words for flow |
| 6 | 🚀 **Fluency, Vocabulary & Idioms** | Fillers & paraphrasing, collocations, British idioms, telling a great story |
| 7 | 📊 **Exam Speaking: IELTS & Cambridge** | The four marking criteria, IELTS Parts 1–3, the cue-card long turn, building arguments |
| 8 | 💼 **Job Interviews in English** | The 90-second pitch, the STAR method, tricky questions, closing strong & virtual interviews |
| 9 | 🎤 **Public Speaking & Presentations** | Structure, openings & closings, delivery (voice, pace, pauses, body language), Q&A & nerves |

> **9 modules · 37 lessons · 111 quiz questions · 9 module exams.** Quiz and exam answer
> choices are **shuffled every attempt**, so passing means actually knowing the material.

### 🎤 The Speaking Lab (where the real practice happens)
- **Pronunciation Drills** — minimal pairs, stress and tricky sounds, mic-scored.
- **IELTS Speaking Mock** — a full 3-part test with timer & recorder, then self-assess against the band descriptors (gives an estimated band).
- **Job Interview Mock** — answer real questions on the clock, record, replay and rate your STAR answers.
- **Presentation Mock** — deliver a short talk against the clock and review your delivery.
- **Speaking Phrasebook** — ready-made British phrases for every situation; tap any line to hear it.

### Also included
- 🔊 **British model voice** on every example (text-to-speech), with a **🐢 Slow** button for rhythm practice.
- 🎯 **"Speak & check" boxes** that listen to you and score how close you were, word by word (Chrome/Edge).
- 🔴 **Record & compare** — record yourself, play it back, and A/B against the British model. Works in **all** modern browsers (Chrome, Edge, Safari, Firefox), so you can train your tone everywhere.
- ⚙️ **Settings** — pick the **British voice** on your device and set a comfortable **speaking speed** (used everywhere).
- 🔥 **Daily practice streak** to keep you coming back.
- 🗓️ **10-Week Study Plan** — a guided, day-by-day path from basic to advanced.
- 🏆 **Certificate of Completion** — unlocks when every lesson is done and every exam passed; print it or save as PDF.
- 🔍 **Search** — jump to any lesson or phrase.

---

## ✨ Features
- **Progress tracking** — finished lessons get a green tick; progress bars fill up. Saved automatically in the browser.
- **Interactive quizzes** — score 70%+ to complete each lesson (with a little confetti 🎉). Choices shuffle every attempt.
- **Mic pronunciation scoring** and **recorded mock exams** with timers and self-assessment rubrics.
- **Works on phone, tablet or computer**, online or offline.

---

## 🛠️ For whoever set this up
- Plain HTML/CSS/JavaScript — **no frameworks, no dependencies**.
- `index.html` is the **built, self-contained** file; it's generated by inlining the source files in `/assets`.
- To **add or edit lessons**, open `assets/curriculum.js`. Each lesson is a simple block
  (title, content, tips, practice, quiz). Copy an existing block and change the text.
  - Drop a **listen button** in any lesson's content: `<button class="say" data-say="Lovely weather.">🔊 Listen</button>`
  - Drop a **speak-and-score** box: `<div class="speakcheck" data-target="Lovely weather, isn't it?"></div>`
- After editing anything in `/assets`, **rebuild the single file**:
  ```
  node build.js
  ```
- Progress is stored per-browser in `localStorage` under `speakUpAcademy.progress.v1`.

```
english-speaking-academy/
├── index.html              ← the single file to open / share (built)
├── build.js                ← regenerates index.html from /assets
├── assets/
│   ├── curriculum.js        ← all the lessons, drills, phrasebook & mock tests (edit here)
│   ├── app.js               ← the app logic (TTS, speech recognition, recorder, quizzes, exams)
│   └── styles.css           ← the look & feel
└── README.md
```

### Browser support for speaking features
| Feature | Chrome | Edge | Safari | Firefox |
|---|---|---|---|---|
| Listen / Slow (text-to-speech) | ✅ | ✅ | ✅ | ✅ |
| Choose British voice & speed | ✅ | ✅ | ✅ | ✅ |
| Speak & check (instant mic scoring) | ✅ | ✅ | ⚠️ partial | ❌ |
| Record & compare yourself | ✅ | ✅ | ✅ | ✅ |
| Record mock exams | ✅ | ✅ | ✅ | ✅ |

> The number of British voices available depends on your device/OS. On Windows and
> Android you can install an extra “English (United Kingdom)” voice in your system's
> speech settings for the most authentic accent; the app will then offer it in **Settings**.

Made with care so learning to **speak English with confidence** feels easy. 💜
