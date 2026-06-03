# 🎓 Office Pro Academy

A complete, friendly, **self-paced course** that takes a total beginner all the way
to a confident, skilled **office assistant / coordinator** — covering both
**Microsoft Office** (Word, Excel, PowerPoint, Outlook) and the **real-world office
work skills** (phone etiquette, filing, meetings, minutes, scheduling, travel and
more).

It runs in any web browser, works **offline**, and **remembers progress
automatically**. No installation, no internet, no account needed.

---

## ▶️ How to start (for the learner)

1. Download/copy this whole folder onto the computer.
2. **Double-click `index.html`.** It opens in your web browser (Chrome, Edge, Safari…).
3. That's it — start with **Office Foundations** and work your way down.

> 💡 Tip: In your browser, drag the open page to the bookmarks bar (or press
> `Ctrl + D`) so it's one click away every day.

---

## 📚 What's inside

The course is organised as a clear learning path — work through it **top to bottom**.
Each lesson goes from **Basic → Intermediate → Advanced**.

| # | Module | What you'll learn |
|---|--------|-------------------|
| 1 | 🧭 **Office Foundations** | The Ribbon, saving & files, copy/cut/paste/undo — the basics every program shares |
| 2 | 📝 **Microsoft Word** | Formatting, layout, track changes, tables & images, Styles, Table of Contents, Mail Merge |
| 3 | 📊 **Microsoft Excel** | Cells & data, formatting, formulas (SUM, IF…), sort/filter, VLOOKUP/XLOOKUP, PivotTables, charts |
| 4 | 📽️ **PowerPoint** | Slides & design, tasteful animations, delivering with Presenter View |
| 5 | 📧 **Outlook, Email & Calendar** | Professional email, inbox organisation, scheduling meetings |
| 6 | 🗂️ **Office Coordinator Skills** | The role, professional communication, organisation & filing, meeting minutes, travel & confidentiality |

Plus a searchable **⌨️ Master Shortcut Cheat-Sheet** of the keyboard shortcuts that
work almost everywhere.

---

## ✨ Features

- **Progress tracking** — finished lessons get a green tick; progress bars fill up. Saved automatically in the browser.
- **Interactive quizzes** — every lesson ends with a short quiz. Score 70%+ to complete it (with a little confetti 🎉).
- **Pro Tips & Shortcuts** boxes in every lesson — the easy, smart, time-saving way to work.
- **Search** — type any word ("save", "Excel", "Ctrl+C", "email") to jump straight to the lesson or shortcut.
- **Works on phone, tablet or computer**, online or offline.

---

## 🛠️ For whoever set this up

- It's plain HTML/CSS/JavaScript — **no build step, no dependencies**.
- To **add or edit lessons**, open `assets/curriculum.js`. Each lesson is a simple
  block with a title, content, tips, shortcuts and a quiz. Copy an existing block
  and change the text — that's the whole process.
- Progress is stored per-browser in `localStorage` under `officeProAcademy.progress.v1`.

```
Architect/
├── index.html              ← double-click this to start
├── assets/
│   ├── curriculum.js        ← all the lessons & quizzes (edit here)
│   ├── app.js               ← the app logic
│   └── styles.css           ← the look & feel
└── README.md
```

Made with care so learning Microsoft Office and office work feels easy. 💜
