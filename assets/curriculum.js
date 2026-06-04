/* ============================================================================
   OFFICE PRO ACADEMY — Curriculum Data
   ----------------------------------------------------------------------------
   This file defines every module, lesson, tip, keyboard shortcut and quiz.
   It is plain data so the content is easy to read, edit and extend.
   To add a lesson: copy an existing { ... } block and change the text.
   ========================================================================= */

const OFFICE_CURRICULUM = {

  /* Keyboard shortcuts that work almost everywhere in Office + Windows.
     These also power the searchable "Shortcuts" cheat-sheet screen. */
  globalShortcuts: [
    { keys: "Ctrl + C", action: "Copy the selected item" },
    { keys: "Ctrl + X", action: "Cut the selected item" },
    { keys: "Ctrl + V", action: "Paste" },
    { keys: "Ctrl + Shift + V", action: "Paste without formatting (paste as plain text)" },
    { keys: "Ctrl + Z", action: "Undo your last action" },
    { keys: "Ctrl + Y", action: "Redo (put back what you undid)" },
    { keys: "Ctrl + A", action: "Select everything" },
    { keys: "Ctrl + S", action: "Save — do this constantly!" },
    { keys: "F12", action: "Save As (save a new copy with a new name)" },
    { keys: "Ctrl + P", action: "Print" },
    { keys: "Ctrl + F", action: "Find a word on the page" },
    { keys: "Ctrl + H", action: "Find and Replace" },
    { keys: "Ctrl + B", action: "Bold" },
    { keys: "Ctrl + I", action: "Italic" },
    { keys: "Ctrl + U", action: "Underline" },
    { keys: "Ctrl + Home", action: "Jump to the very top of the document" },
    { keys: "Ctrl + End", action: "Jump to the very bottom of the document" },
    { keys: "Ctrl + Arrow", action: "Move one whole word / cell-edge at a time" },
    { keys: "Shift + Arrow", action: "Select text or cells as you move" },
    { keys: "Alt + Tab", action: "Switch between open programs" },
    { keys: "Windows + D", action: "Show the desktop (minimise everything)" },
    { keys: "Windows + L", action: "Lock your computer when you step away" },
    { keys: "Windows + V", action: "Open clipboard history (copy several things, paste any)" },
    { keys: "PrtScn / Win+Shift+S", action: "Take a screenshot (Snipping Tool)" },
    { keys: "Ctrl + Mouse Wheel", action: "Zoom in and out" }
  ],

  /* A guided "learn ASAP" schedule. Each day points to the lessons to finish.
     ~2 short lessons a day; the whole course in two weeks. */
  fastTrack: {
    title: "Fast-Track to Job-Ready (about 2½ weeks)",
    intro: "Do these lessons in order — about 2 short lessons a day (20–30 minutes). Finish the quiz on each to tick it off. By the end you'll have covered everything an office assistant, coordinator, administrative staffer or executive assistant needs — basics to advanced.",
    days: [
      { day: 1,  focus: "Computer basics + get comfortable",       lessons: ["f0", "f1", "f2"] },
      { day: 2,  focus: "Core moves + start typing practice",       lessons: ["f3", "x1"] },
      { day: 3,  focus: "Word: typing & formatting documents",      lessons: ["w1", "w2"] },
      { day: 4,  focus: "Word: editing, tables & pictures",         lessons: ["w3", "w4"] },
      { day: 5,  focus: "Word: advanced + business writing",        lessons: ["w5", "x2"] },
      { day: 6,  focus: "Excel: the grid & making it readable",     lessons: ["e1", "e2"] },
      { day: 7,  focus: "Excel: formulas that do the maths",        lessons: ["e3", "e4"] },
      { day: 8,  focus: "Excel: lookups, charts + shortcut drills", lessons: ["e5", "e6"] },
      { day: 9,  focus: "PowerPoint: build a clean presentation",   lessons: ["p1", "p2"] },
      { day: 10, focus: "Present well + professional email",        lessons: ["p3", "o1"] },
      { day: 11, focus: "Outlook: organise inbox & calendar",       lessons: ["o2", "o3"] },
      { day: 12, focus: "The role + professional communication",    lessons: ["c1", "c2"] },
      { day: 13, focus: "Organising, meetings & customer service",  lessons: ["c3", "c4", "x3"] },
      { day: 14, focus: "Advanced coordinator + equipment & money", lessons: ["c5", "x4", "x5"] },
      { day: 15, focus: "Exec support: calendar/inbox + priorities", lessons: ["ea1", "ea2"] },
      { day: 16, focus: "Projects/events + operations & onboarding",  lessons: ["ea3", "ea4"] },
      { day: 17, focus: "Being a trusted right hand (graduate!)",     lessons: ["ea5"] }
    ]
  },

  modules: [

    /* ====================================================================
       MODULE 1 — FOUNDATIONS
       ================================================================= */
    {
      id: "foundations",
      title: "Office Foundations",
      icon: "🧭",
      color: "#6366f1",
      blurb: "Start here. The core skills every single office program shares — so everything after this feels easy.",
      lessons: [
        {
          id: "f0",
          title: "Computer & Keyboard Basics (Start Here)",
          level: "Basic",
          minutes: 7,
          content: `
            <p>Brand new to computers? Perfect — let's cover the absolute basics first. Once these feel natural, everything else in this course is easy. 😊</p>
            <h4>Using the mouse (or trackpad)</h4>
            <ul>
              <li><b>Left-click</b> (one tap) — selects a thing or presses a button.</li>
              <li><b>Double-click</b> (two quick taps) — opens a file, program, or folder.</li>
              <li><b>Right-click</b> — opens a little menu of extra options. Very useful: when stuck, right-click!</li>
              <li><b>Scroll</b> — the wheel (or two fingers on a trackpad) moves the page up and down.</li>
              <li><b>Drag</b> — hold the left button down while moving, then let go, to move things.</li>
            </ul>
            <h4>The screen &amp; windows</h4>
            <ul>
              <li>The <b>Desktop</b> is your home screen. The <b>Taskbar</b> (usually along the bottom) shows open programs and the Start button.</li>
              <li>Each program opens in a <b>window</b>. Top-right corner: <b>–</b> minimises (hides it), <b>▢</b> resizes, <b>✕</b> closes it.</li>
              <li>You can have many windows open at once and switch between them.</li>
            </ul>
            <h4>The most important keys</h4>
            <ul>
              <li><b>Enter</b> — confirms, or starts a new line.</li>
              <li><b>Spacebar</b> — adds a space (the long key at the bottom).</li>
              <li><b>Backspace</b> — deletes the character to the <i>left</i>; <b>Delete</b> deletes to the right.</li>
              <li><b>Shift</b> — hold it to type a CAPITAL letter or the symbol on a key.</li>
              <li><b>Caps Lock</b> — locks capitals on (press again to turn off).</li>
              <li><b>Tab</b> — jumps forward (between boxes, or indents text).</li>
              <li><b>Ctrl</b> (Control) — held with another key to do shortcuts, like Ctrl+S to save. You'll use these a lot!</li>
              <li><b>Arrow keys</b> — move the cursor up, down, left, right.</li>
            </ul>
            <p>Don't worry about memorising everything — you'll learn by doing throughout this course.</p>
          `,
          tips: [
            "When you're ever unsure what you can do with something, RIGHT-CLICK it — the menu shows your options.",
            "The flashing line where you type is called the 'cursor'. Click where you want it before you type.",
            "Take it slow at first. Speed and confidence come naturally with a little daily practice."
          ],
          shortcuts: [
            { keys: "Shift", action: "Hold for a capital letter or the symbol on a key" },
            { keys: "Backspace", action: "Delete the character to the left" },
            { keys: "Enter", action: "Confirm, or start a new line" }
          ],
          practice: "Open any program (try Notepad or Word). Type your full name, then your address. Use <b>Shift</b> for the capital letters. Press <b>Enter</b> to start a new line between them. Then use <b>Backspace</b> to delete a letter and retype it. Finally, right-click anywhere on the page and see what menu appears.",
          summary_tl: "Sa lesson na ito, ang pinakabasic: paggamit ng mouse (left-click=pumili, double-click=magbukas, right-click=mga opsyon), ang mga window sa screen, at ang mahahalagang keys — Enter, Shift (para sa malalaking letra), Backspace (pang-delete), Tab, at Ctrl (ginagamit sa mga shortcut). Huwag mag-alala kung marami; matututunan mo habang ginagawa. Kapag hindi sigurado, i-right-click!",
          quiz: [
            { q: "What does a DOUBLE-click usually do?", choices: ["Deletes a file", "Opens a file, folder or program", "Closes the window", "Types a capital letter"], answer: 1 },
            { q: "You're unsure what options you have on an item. What's the best thing to try?", choices: ["Turn off the computer", "Right-click it to see a menu of options", "Press the spacebar repeatedly", "Unplug the mouse"], answer: 1 },
            { q: "Which key do you HOLD to type a capital letter?", choices: ["Tab", "Enter", "Shift", "Backspace"], answer: 2 }
          ]
        },
        {
          id: "f1",
          title: "How the Office Ribbon Works",
          level: "Basic",
          minutes: 6,
          content: `
            <p>Every Microsoft Office program (Word, Excel, PowerPoint, Outlook) looks similar on purpose. The strip of buttons across the top is called the <b>Ribbon</b>. Learn it once and you know all of them.</p>
            <h4>The parts of the screen</h4>
            <ul>
              <li><b>Tabs</b> — the words across the very top: <i>Home, Insert, Layout, Review, View</i>. Each tab opens a different set of buttons.</li>
              <li><b>Ribbon</b> — the buttons that appear when you click a tab. <i>Home</i> has the everyday tools (font, colour, bold).</li>
              <li><b>Quick Access Toolbar</b> — the tiny icons in the very top-left corner (Save, Undo, Redo). You can right-click any button and choose "Add to Quick Access Toolbar".</li>
              <li><b>File / Backstage</b> — the coloured <b>File</b> tab on the far left. This is where you Open, Save, Print, and Share.</li>
              <li><b>Status Bar</b> — the thin strip at the very bottom showing page number, word count, and zoom.</li>
            </ul>
            <h4>The golden rule of Office</h4>
            <p><b>Select first, then act.</b> Highlight the text, cell, or picture you want to change <i>before</i> you click a button. The Ribbon only changes the thing that is selected.</p>
          `,
          tips: [
            "Double-click any tab name to hide the Ribbon and get more space. Double-click again to bring it back.",
            "If a button looks greyed-out, it usually means nothing is selected yet.",
            "Hover your mouse over any button for 2 seconds — a little label tells you what it does."
          ],
          shortcuts: [
            { keys: "Alt", action: "Press Alt alone to reveal letter shortcuts on the Ribbon" },
            { keys: "Ctrl + F1", action: "Hide or show the Ribbon" }
          ],
          practice: "Open Word. Click each tab along the top (Home, Insert, Layout…) and watch the buttons change. Type a sentence, select it with your mouse, then make it bold using the Home tab.",
          summary_tl: "Lahat ng Office programs (Word, Excel, PowerPoint, Outlook) ay magkakapareho ang itsura. Ang hanay ng mga button sa itaas ay tinatawag na Ribbon, na may mga Tab (Home, Insert, Layout...). Tandaan ang golden rule: PUMILI muna (i-highlight ang text o item) bago mag-click ng button. Ang File tab ang gamit sa Open, Save, at Print.",
          quiz: [
            { q: "What is the strip of buttons across the top of every Office program called?", choices: ["The Toolbar", "The Ribbon", "The Menu Bar", "The Header"], answer: 1 },
            { q: "What should you always do BEFORE clicking a formatting button?", choices: ["Save the file", "Print a copy", "Select the text or item you want to change", "Close other programs"], answer: 2 },
            { q: "Where do you go to Open, Save, or Print a file?", choices: ["The View tab", "The File tab (Backstage)", "The Insert tab", "The status bar"], answer: 1 }
          ]
        },
        {
          id: "f2",
          title: "Files, Folders & Never Losing Your Work",
          level: "Basic",
          minutes: 8,
          content: `
            <p>An office assistant is trusted with important documents. Knowing exactly where things are saved — and never losing work — is one of the most valued skills you can have.</p>
            <h4>Folders = digital filing cabinet</h4>
            <p>A <b>folder</b> holds files. Folders can hold other folders. Keep a tidy structure, for example:</p>
            <p style="font-family:monospace;background:#f1f5f9;padding:10px;border-radius:8px">📁 2026<br>&nbsp;&nbsp;📁 Invoices<br>&nbsp;&nbsp;📁 Meeting Minutes<br>&nbsp;&nbsp;📁 Contracts</p>
            <h4>Saving the smart way</h4>
            <ul>
              <li><b>Save</b> (Ctrl+S) updates the file you already have. Do it every few minutes — make it a reflex.</li>
              <li><b>Save As</b> (F12) makes a brand-new copy with a different name — perfect before you make big changes you might want to undo.</li>
              <li><b>File names matter.</b> Use clear names with dates: <code>2026-06-03 Board Minutes.docx</code>. Dates written year-month-day sort neatly in order.</li>
            </ul>
            <h4>The cloud (OneDrive / SharePoint)</h4>
            <p>When a file is saved to <b>OneDrive</b>, it auto-saves every few seconds and you can open it from any device. You'll see "AutoSave" turn on (a toggle in the top-left). For shared team files this is a lifesaver — multiple people can edit at once.</p>
          `,
          tips: [
            "Never name a file 'Final' — you'll end up with 'Final v2 REAL final'. Use dates instead.",
            "If you ever close without saving, reopen the program — Office often recovers it under 'Recover Unsaved Documents'.",
            "Avoid spaces and symbols like / \\ : * ? in file names; they can cause errors."
          ],
          shortcuts: [
            { keys: "Ctrl + S", action: "Save right now" },
            { keys: "F12", action: "Save As (new copy)" },
            { keys: "Ctrl + O", action: "Open an existing file" },
            { keys: "Ctrl + N", action: "Create a new blank file" }
          ],
          practice: "Create a new folder on your Desktop called 'Practice'. Open Word, type a few words, and save the file into that folder using Ctrl+S. Give it a name with today's date, like '2026-06-04 Practice'.",
          summary_tl: "Ang folder ay parang filing cabinet ng mga file. Mag-save lagi gamit ang Ctrl+S (gawing ugali!). Ang 'Save As' (F12) ay gumagawa ng bagong kopya. Pangalanan ang file nang malinaw na may petsa (Taon-Buwan-Araw) para maayos ang pagkakasunod. Kung naka-OneDrive, automatic itong nagse-save.",
          quiz: [
            { q: "Which shortcut saves your work instantly?", choices: ["Ctrl + P", "Ctrl + S", "Ctrl + O", "F1"], answer: 1 },
            { q: "What is the best way to name files so they sort in order?", choices: ["Use the word Final", "Start with the date as Year-Month-Day", "Use random numbers", "All capital letters"], answer: 1 },
            { q: "What does 'Save As' do?", choices: ["Deletes the original", "Prints the file", "Makes a new copy with a different name", "Emails the file"], answer: 2 }
          ]
        },
        {
          id: "f3",
          title: "Copy, Cut, Paste & Undo Like a Pro",
          level: "Basic",
          minutes: 5,
          content: `
            <p>These four actions are the muscles of office work. You will use them hundreds of times a day, so make them automatic.</p>
            <table class="lesson-table">
              <tr><th>Action</th><th>What it does</th><th>Shortcut</th></tr>
              <tr><td>Copy</td><td>Makes a duplicate, leaves the original</td><td>Ctrl + C</td></tr>
              <tr><td>Cut</td><td>Removes it, ready to move elsewhere</td><td>Ctrl + X</td></tr>
              <tr><td>Paste</td><td>Drops in what you copied or cut</td><td>Ctrl + V</td></tr>
              <tr><td>Undo</td><td>Reverses your last action — your safety net</td><td>Ctrl + Z</td></tr>
            </table>
            <h4>The power move: Paste Special</h4>
            <p>Sometimes copying from a website brings ugly colours and fonts with it. Use <b>Ctrl + Shift + V</b> to paste as plain text — it takes on the clean formatting of where you paste it.</p>
            <h4>Clipboard history</h4>
            <p>Press <b>Windows + V</b> to see the last several things you copied, and paste any one of them. Most people don't know this exists — it's a huge time-saver.</p>
          `,
          tips: [
            "Ctrl + Z (Undo) can be pressed many times to step back through your changes.",
            "Pressed Undo too far? Ctrl + Y redoes it.",
            "You can copy a file in your folders the same way — click it, Ctrl+C, go to the new folder, Ctrl+V."
          ],
          shortcuts: [
            { keys: "Ctrl + C", action: "Copy" },
            { keys: "Ctrl + X", action: "Cut" },
            { keys: "Ctrl + V", action: "Paste" },
            { keys: "Ctrl + Shift + V", action: "Paste as plain text" },
            { keys: "Ctrl + Z", action: "Undo" },
            { keys: "Windows + V", action: "Clipboard history" }
          ],
          practice: "In Word, type three lines of text. Copy the first line (Ctrl+C) and paste it (Ctrl+V) at the bottom. Then press Ctrl+Z a few times and watch it undo. Finally press Windows+V to see your clipboard history.",
          summary_tl: "Ito ang pinaka-gamit na aksyon: Copy (Ctrl+C)=kopya; Cut (Ctrl+X)=aalisin para ilipat; Paste (Ctrl+V)=ilalagay; Undo (Ctrl+Z)=ibabalik ang mali. Gamitin ang Ctrl+Shift+V para sa malinis na text (walang dalang format). Ang Windows+V ay nagpapakita ng mga nakopya mo dati.",
          quiz: [
            { q: "Which shortcut UNDOES your last mistake?", choices: ["Ctrl + U", "Ctrl + Z", "Ctrl + V", "Ctrl + D"], answer: 1 },
            { q: "You copied text from a website but it brought ugly colours. What pastes it as clean plain text?", choices: ["Ctrl + V", "Ctrl + Shift + V", "Ctrl + C", "Ctrl + B"], answer: 1 },
            { q: "What does Windows + V open?", choices: ["The volume control", "Clipboard history of recent copies", "A new document", "The print menu"], answer: 1 }
          ]
        }
      ]
    },

    /* ====================================================================
       MODULE 2 — MICROSOFT WORD
       ================================================================= */
    {
      id: "word",
      title: "Microsoft Word",
      icon: "📝",
      color: "#2563eb",
      blurb: "Create clean, professional letters, reports and documents — from your first paragraph to advanced mail merge.",
      lessons: [
        {
          id: "w1",
          title: "Typing, Formatting & Making Text Look Professional",
          level: "Basic",
          minutes: 8,
          content: `
            <p>Word is for documents you read: letters, memos, reports, policies. The skill is making them look clean and consistent.</p>
            <h4>The essential formatting buttons (Home tab)</h4>
            <ul>
              <li><b>Font</b> & <b>Size</b> — pick one professional font (Calibri or Arial, size 11–12) and stick with it.</li>
              <li><b>Bold / Italic / Underline</b> — for emphasis. Use sparingly; if everything is bold, nothing stands out.</li>
              <li><b>Alignment</b> — Left for most text, Center for titles, Justify for a clean block edge.</li>
              <li><b>Bullets & Numbering</b> — turn a wall of text into a scannable list.</li>
              <li><b>Line spacing</b> — 1.15 or 1.5 makes documents easier to read.</li>
            </ul>
            <h4>Select text fast</h4>
            <ul>
              <li><b>Double-click</b> a word to select it.</li>
              <li><b>Triple-click</b> to select a whole paragraph.</li>
              <li><b>Ctrl + A</b> selects the entire document.</li>
            </ul>
            <h4>The Format Painter — copy a look</h4>
            <p>Select text that looks right, click the little <b>paintbrush</b> (Format Painter), then drag over other text to instantly give it the same formatting. Double-click the paintbrush to apply it to several places.</p>
          `,
          tips: [
            "Less is more — two fonts maximum in any professional document.",
            "Use Styles (Heading 1, Heading 2) instead of manually making text big and bold — it keeps everything consistent and lets you build a table of contents automatically.",
            "Press Ctrl + Spacebar to strip messy formatting off selected text back to normal."
          ],
          shortcuts: [
            { keys: "Ctrl + B / I / U", action: "Bold / Italic / Underline" },
            { keys: "Ctrl + L / E / R / J", action: "Align Left / Center / Right / Justify" },
            { keys: "Ctrl + ] / [", action: "Make font bigger / smaller" },
            { keys: "Ctrl + Spacebar", action: "Clear formatting" }
          ],
          practice: "Type a short 'thank you' note (3–4 lines). Make the greeting bold, the closing italic, and turn three points into a bulleted list. Then use the Format Painter to copy the greeting's look onto the closing.",
          summary_tl: "Ang Word ay para sa mga dokumento tulad ng liham at report. Sa Home tab: font, laki, Bold/Italic/Underline, alignment, bullets. Pumili ng isang propesyonal na font (Calibri o Arial, laki 11-12). Mabilis pumili: double-click=salita, triple-click=talata, Ctrl+A=lahat. Ang Format Painter (brush) ay kinokopya ang itsura sa ibang text.",
          quiz: [
            { q: "How do you select a whole paragraph quickly?", choices: ["Single click", "Double-click", "Triple-click", "Right-click"], answer: 2 },
            { q: "What does the Format Painter (paintbrush) do?", choices: ["Changes the page colour", "Copies formatting from one place to another", "Draws pictures", "Deletes text"], answer: 1 },
            { q: "What is a sensible, professional font and size?", choices: ["Comic Sans, size 20", "Calibri or Arial, size 11–12", "Five different fonts", "All capitals, size 8"], answer: 1 }
          ]
        },
        {
          id: "w2",
          title: "Page Layout, Headers, Footers & Page Numbers",
          level: "Intermediate",
          minutes: 7,
          content: `
            <p>A polished document has consistent margins, page numbers, and a header or footer with the company name or date.</p>
            <h4>Margins & orientation (Layout tab)</h4>
            <ul>
              <li><b>Margins</b> — the white space around the edge. "Normal" (2.54cm / 1 inch) is standard for letters.</li>
              <li><b>Orientation</b> — Portrait (tall) for letters, Landscape (wide) for tables and certificates.</li>
              <li><b>Size</b> — A4 is standard in most of the world; Letter in the US.</li>
            </ul>
            <h4>Headers & footers (Insert tab)</h4>
            <p>Click <b>Insert → Header</b> (or Footer) to add text that repeats on every page — perfect for a company name, document title, or confidentiality note. Double-click into the header area to edit it; double-click back in the main body to leave.</p>
            <h4>Page numbers</h4>
            <p><b>Insert → Page Number</b> lets you place automatic numbers (bottom-center is common). They renumber themselves as the document grows.</p>
            <h4>Page break vs. pressing Enter</h4>
            <p>To start fresh on a new page, never hammer the Enter key. Press <b>Ctrl + Enter</b> for a clean <i>page break</i> — the new page stays put even if you edit earlier text.</p>
          `,
          tips: [
            "Turn on the ¶ button (Home tab) to see hidden spaces and breaks — it reveals why your layout is misbehaving.",
            "For a cover page with no number but numbers everywhere else, tick 'Different First Page' in the Header & Footer tools.",
            "Insert → Date & Time can add a date that updates automatically every time you open the document."
          ],
          shortcuts: [
            { keys: "Ctrl + Enter", action: "Insert a clean page break" },
            { keys: "Shift + Enter", action: "New line without starting a new paragraph" }
          ],
          practice: "Open a Word document and add a header with a made-up company name, a footer with your name, and automatic page numbers. Then press Ctrl+Enter to start a fresh second page.",
          summary_tl: "Ang malinis na dokumento ay may tamang margins, page numbers, at header/footer. Sa Layout tab: margins at orientation (Portrait=patayo, Landscape=pahiga). Sa Insert tab: Header/Footer (paulit sa bawat pahina) at Page Number. Para magsimula ng bagong pahina, Ctrl+Enter (page break), hindi paulit-ulit na Enter.",
          quiz: [
            { q: "What is the correct way to start text on a brand-new page?", choices: ["Press Enter many times", "Ctrl + Enter (page break)", "Change the font size", "Add a header"], answer: 1 },
            { q: "Where does a repeating company name on every page go?", choices: ["In the header or footer", "In the margin settings", "In a text box only", "In the file name"], answer: 0 },
            { q: "Which orientation is best for a wide table or certificate?", choices: ["Portrait", "Landscape", "A4", "Justified"], answer: 1 }
          ]
        },
        {
          id: "w3",
          title: "Spelling, Grammar, Track Changes & Comments",
          level: "Intermediate",
          minutes: 7,
          content: `
            <p>Office assistants are often the last set of eyes before a document goes out. These tools make you reliable and collaborative.</p>
            <h4>Spelling & grammar (Review tab)</h4>
            <p>Red wavy underline = possible spelling error. Blue = grammar/style. Right-click the word for suggestions, or press <b>F7</b> to check the whole document. Always read it yourself too — spellcheck won't catch "form" vs "from".</p>
            <h4>Track Changes — the editor's superpower</h4>
            <p>Turn on <b>Review → Track Changes</b> and every edit you make is shown in colour, so the author can see exactly what you changed and <b>Accept</b> or <b>Reject</b> each one. Essential when several people review a contract or report.</p>
            <h4>Comments</h4>
            <p>Select text and click <b>New Comment</b> to leave a note in the margin (like "Please confirm this date") without changing the document itself. Reply to and resolve comments to keep a conversation tidy.</p>
          `,
          tips: [
            "Before sending a final file, go Review → Accept All Changes and delete comments, or use File → Check for Issues → Inspect Document to remove hidden tracked edits.",
            "Add words like a company name to the dictionary so spellcheck stops flagging them.",
            "Use @name inside a comment to tag a colleague — in cloud files they get notified."
          ],
          shortcuts: [
            { keys: "F7", action: "Run spelling & grammar check" },
            { keys: "Ctrl + Shift + E", action: "Turn Track Changes on/off" },
            { keys: "Alt + Ctrl + M", action: "Insert a new comment" }
          ],
          practice: "Turn on Track Changes (Review tab) and edit a sentence — see the changes appear in colour. Add a Comment on one word. Then Accept all changes.",
          summary_tl: "Gamitin ang Spelling check (F7) — pula=mali sa spelling. Ang Track Changes (Review tab) ay ipinapakita ang bawat edit sa kulay para puwedeng i-Accept o i-Reject ng may-akda. Ang Comment ay paalala sa gilid nang hindi binabago ang teksto. Bago ipadala, i-Accept All at tanggalin ang comments.",
          quiz: [
            { q: "What does Track Changes let the author do with each edit?", choices: ["Print it", "Accept or Reject it", "Email it", "Translate it"], answer: 1 },
            { q: "How do you leave a note for the author WITHOUT changing the text?", choices: ["Bold the text", "Insert a Comment", "Delete the sentence", "Change the font"], answer: 1 },
            { q: "What does a red wavy underline usually mean?", choices: ["The text is bold", "A possible spelling error", "A hyperlink", "A tracked change"], answer: 1 }
          ]
        },
        {
          id: "w4",
          title: "Tables, Pictures & Page Design",
          level: "Intermediate",
          minutes: 8,
          content: `
            <p>Well-placed tables and images make a document clear and attractive.</p>
            <h4>Insert a table</h4>
            <p><b>Insert → Table</b>, then drag to choose how many rows and columns. Once it's in:</p>
            <ul>
              <li><b>Tab key</b> jumps to the next cell; press Tab in the last cell to add a new row.</li>
              <li>The <b>Table Design</b> tab offers instant professional colour styles.</li>
              <li>Hover near a row/column edge and click the <b>+</b> to insert more.</li>
            </ul>
            <h4>Pictures</h4>
            <p><b>Insert → Pictures</b> to add an image from your computer. The key skill is <b>Wrap Text</b> (click the picture → Layout Options): "In Line with Text" keeps it in the flow, "Square" or "Tight" lets text flow around it, "Behind Text" makes a watermark-style background.</p>
            <h4>Make it look designed</h4>
            <ul>
              <li><b>Insert → Shapes</b> for lines, arrows and boxes.</li>
              <li><b>Insert → SmartArt</b> for instant diagrams (org charts, process steps).</li>
              <li><b>Design tab</b> applies a whole-document colour theme in one click.</li>
            </ul>
          `,
          tips: [
            "To make table columns line up perfectly, select them and use Table Layout → Distribute Columns.",
            "Always add 'Alt Text' to images (right-click → Edit Alt Text) so the document is accessible to screen readers — many organisations require this.",
            "Hold Shift while resizing a picture from its corner to keep it from stretching out of shape."
          ],
          shortcuts: [
            { keys: "Tab", action: "Move to next table cell (adds a row at the end)" },
            { keys: "Shift + Tab", action: "Move to previous table cell" }
          ],
          practice: "Insert a 3-column, 4-row table and fill in a mini contacts list (Name, Email, Phone). Use Tab to move between cells. Then insert any picture and try the 'Square' text-wrap option.",
          summary_tl: "Maglagay ng table gamit ang Insert -> Table. Sa loob: Tab=susunod na cell (sa huli, dagdag ng row). Larawan: Insert -> Pictures; importante ang Wrap Text (paano dadaloy ang text sa paligid). Gamitin ang SmartArt para sa diagram. Maglagay ng Alt Text sa larawan para accessible.",
          quiz: [
            { q: "In a table, what does pressing Tab in the very last cell do?", choices: ["Saves the file", "Deletes the row", "Adds a new row", "Nothing"], answer: 2 },
            { q: "Which feature lets text flow around a picture?", choices: ["Wrap Text / Layout Options", "Format Painter", "Track Changes", "Page Break"], answer: 0 },
            { q: "What should you add to images for accessibility?", choices: ["A border", "Alt Text", "A caption number", "A hyperlink"], answer: 1 }
          ]
        },
        {
          id: "w5",
          title: "Advanced: Styles, Table of Contents & Mail Merge",
          level: "Advanced",
          minutes: 12,
          content: `
            <p>These are the skills that separate a confident office professional from a beginner.</p>
            <h4>Styles → automatic Table of Contents</h4>
            <p>If you mark your headings using the built-in <b>Heading 1 / Heading 2</b> styles (Home tab), Word can build a clickable <b>Table of Contents</b> for you: <b>References → Table of Contents</b>. Change a heading later and just click "Update Table" — the page numbers fix themselves.</p>
            <h4>Mail Merge — send 200 personalised letters at once</h4>
            <p>This is the classic office power-skill. One template letter + one list of names = hundreds of personalised letters, labels, or emails.</p>
            <ol>
              <li>Make your list of recipients in Excel (columns like First Name, Address).</li>
              <li>In Word: <b>Mailings → Start Mail Merge → Letters</b>.</li>
              <li><b>Select Recipients → Use an Existing List</b> and pick your Excel file.</li>
              <li>Type your letter; where the name should go, click <b>Insert Merge Field → First Name</b>.</li>
              <li><b>Preview Results</b> to flip through each person, then <b>Finish & Merge</b> to print or email them all.</li>
            </ol>
            <h4>Templates</h4>
            <p>Save a document you reuse (letterhead, memo) as a <b>Word Template (.dotx)</b> via Save As. Opening it always gives a fresh copy, protecting the master.</p>
          `,
          tips: [
            "Mail Merge is perfect for name badges, envelopes, certificates, and holiday cards — not just letters.",
            "Keep your Excel recipient list clean: one header row, no blank rows, one record per line.",
            "Press Ctrl + A then F9 to update every field (including the Table of Contents) in one go."
          ],
          shortcuts: [
            { keys: "Alt + Ctrl + 1 / 2 / 3", action: "Apply Heading 1 / 2 / 3 styles instantly" },
            { keys: "F9", action: "Update a selected field (like the Table of Contents)" }
          ],
          practice: "Write a 1-line letter, then apply Heading styles to two short headings and insert a Table of Contents (References tab). Add a line, then click 'Update Table' to watch it refresh.",
          summary_tl: "Kapag gumamit ka ng Heading styles, awtomatikong makakagawa ng Table of Contents (References tab). Ang Mail Merge ang power-skill: isang template na liham + listahan (mula Excel) = daan-daang personalized na liham/label/email nang sabay. Hakbang: Mailings -> Start Mail Merge -> piliin ang recipients -> Insert Merge Fields -> Finish & Merge.",
          quiz: [
            { q: "What must you use on your headings so Word can build an automatic Table of Contents?", choices: ["Bold text", "Heading styles (Heading 1, 2…)", "Bigger font", "Underline"], answer: 1 },
            { q: "Mail Merge combines a template letter with what?", choices: ["A picture", "A list of recipients (e.g. from Excel)", "A page break", "A footer"], answer: 1 },
            { q: "Why save a reusable letterhead as a Template (.dotx)?", choices: ["It prints faster", "Opening it gives a fresh copy and protects the master", "It uses less ink", "It can't be edited"], answer: 1 }
          ]
        }
      ]
    },

    /* ====================================================================
       MODULE 3 — MICROSOFT EXCEL
       ================================================================= */
    {
      id: "excel",
      title: "Microsoft Excel",
      icon: "📊",
      color: "#16a34a",
      blurb: "The most powerful office skill of all. Track, calculate, and analyse anything — from a simple list to dashboards.",
      lessons: [
        {
          id: "e1",
          title: "Cells, Rows, Columns & Entering Data",
          level: "Basic",
          minutes: 7,
          content: `
            <p>Excel is a giant grid. Master the grid and you master Excel.</p>
            <h4>The vocabulary</h4>
            <ul>
              <li><b>Cell</b> — one box. Each has an address like <b>A1</b> (column A, row 1).</li>
              <li><b>Column</b> — runs up-and-down, labelled with letters (A, B, C…).</li>
              <li><b>Row</b> — runs left-to-right, labelled with numbers (1, 2, 3…).</li>
              <li><b>Worksheet (tab)</b> — one page; a file can hold many tabs along the bottom.</li>
            </ul>
            <h4>Entering data</h4>
            <ul>
              <li>Click a cell and type. Press <b>Enter</b> to go down, <b>Tab</b> to go right.</li>
              <li>To edit what's already there, double-click the cell or press <b>F2</b>.</li>
              <li><b>AutoFill</b>: type "January" in a cell, grab the little square at the bottom-right corner, drag down — Excel fills February, March… Same with dates and numbers (1, 2, 3…).</li>
            </ul>
            <h4>Moving around fast</h4>
            <p><b>Ctrl + Arrow keys</b> jump to the edge of your data instantly — essential in big sheets. <b>Ctrl + Home</b> goes back to cell A1.</p>
          `,
          tips: [
            "Always put headings in row 1 (Name, Date, Amount) — Excel's smart features expect them.",
            "Numbers line up on the right, text on the left. If a number sits on the left, Excel thinks it's text — usually a stray space.",
            "Press Ctrl + ; (semicolon) to instantly type today's date."
          ],
          shortcuts: [
            { keys: "F2", action: "Edit the selected cell" },
            { keys: "Ctrl + Arrow", action: "Jump to the edge of your data" },
            { keys: "Ctrl + ;", action: "Insert today's date" },
            { keys: "Alt + Enter", action: "Start a new line inside the same cell" }
          ],
          practice: "In Excel, type headings in row 1 (Item, Qty, Price). Add three rows of data. Type 'Jan' in a cell and drag the corner down to auto-fill the months.",
          summary_tl: "Ang Excel ay malaking grid. Cell=kahon (hal. A1); Column=patayo (letra); Row=pahiga (numero). I-type tapos Enter (pababa) o Tab (pakanan). AutoFill: i-type ang 'January', i-drag ang sulok, susunod ang Feb, Mar. Mabilis gumalaw: Ctrl+Arrow. Ilagay ang mga heading sa row 1.",
          quiz: [
            { q: "What is the address of the cell in column B, row 3?", choices: ["3B", "B3", "BB3", "B-3"], answer: 1 },
            { q: "What does AutoFill do when you type 'Monday' and drag the corner down?", choices: ["Deletes the cell", "Fills Tuesday, Wednesday…", "Changes the colour", "Prints the sheet"], answer: 1 },
            { q: "A number is sitting on the LEFT of its cell. What does that usually mean?", choices: ["It's bold", "Excel is treating it as text, not a number", "It's the largest value", "It's a formula"], answer: 1 }
          ]
        },
        {
          id: "e2",
          title: "Formatting & Making Spreadsheets Readable",
          level: "Basic",
          minutes: 7,
          content: `
            <p>A spreadsheet nobody can read is useless. Formatting turns raw numbers into a clear report.</p>
            <h4>Number formats (Home tab)</h4>
            <ul>
              <li><b>Currency</b> ($, £, €) for money.</li>
              <li><b>Percentage</b> (%) — turns 0.25 into 25%.</li>
              <li><b>Comma style</b> adds thousands separators: 1,250,000.</li>
              <li><b>Date</b> formats for consistent dates.</li>
            </ul>
            <p>Selecting the right number format is vital — it changes how a value <i>looks</i> without changing the actual number.</p>
            <h4>Make it tidy</h4>
            <ul>
              <li><b>Bold</b> your heading row and give it a fill colour.</li>
              <li><b>Borders</b> (Home tab) draw lines around your table.</li>
              <li>Double-click the line between two column letters to <b>auto-fit</b> the width to the content.</li>
              <li><b>Wrap Text</b> keeps long text inside one cell instead of spilling over.</li>
              <li><b>Merge & Center</b> joins cells for a title across the top.</li>
            </ul>
            <h4>Freeze the headings</h4>
            <p><b>View → Freeze Panes → Freeze Top Row</b> keeps your headings visible as you scroll down a long list. A must for any real data.</p>
          `,
          tips: [
            "Conditional Formatting (Home tab) can auto-colour cells — e.g. turn negative numbers red, or highlight the top 10. It updates automatically as data changes.",
            "Select a column, right-click → Format Cells for the full menu of number options.",
            "Use Ctrl + 1 to open the Format Cells box for anything selected — the fastest formatting shortcut in Excel."
          ],
          shortcuts: [
            { keys: "Ctrl + 1", action: "Open Format Cells dialog" },
            { keys: "Ctrl + Shift + $", action: "Apply currency format" },
            { keys: "Ctrl + Shift + %", action: "Apply percentage format" },
            { keys: "Alt + H + W", action: "Wrap text" }
          ],
          practice: "Using your small table, format the Price column as currency, bold the heading row with a fill colour, add borders, and use View → Freeze Top Row.",
          summary_tl: "Para mabasa ang spreadsheet, i-format ang numbers: Currency (pera), Percentage, Comma (libo-libo). Bold ang heading row, lagyan ng kulay at borders. I-double-click ang gilid ng column para mag-auto-fit. View -> Freeze Top Row para manatiling nakikita ang heading. Ctrl+1 ang pinakamabilis sa Format Cells.",
          quiz: [
            { q: "Which View feature keeps your heading row visible while scrolling?", choices: ["Wrap Text", "Freeze Panes", "Merge & Center", "Borders"], answer: 1 },
            { q: "What does Percentage format turn the number 0.25 into?", choices: ["0.25%", "25%", "250%", "2.5%"], answer: 1 },
            { q: "What's the fastest shortcut to open the full Format Cells box?", choices: ["Ctrl + 1", "Ctrl + P", "F7", "Ctrl + B"], answer: 0 }
          ]
        },
        {
          id: "e3",
          title: "Your First Formulas: SUM, AVERAGE & Basic Math",
          level: "Intermediate",
          minutes: 9,
          content: `
            <p>This is the moment Excel becomes magic. A <b>formula</b> calculates for you and updates automatically when the numbers change.</p>
            <h4>The golden rule</h4>
            <p>Every formula starts with an <b>equals sign (=)</b>. That tells Excel "calculate this".</p>
            <p style="font-family:monospace;background:#f1f5f9;padding:10px;border-radius:8px">=10+5  →  15<br>=A1+A2  →  adds the two cells together<br>=B2*0.1  →  10% of cell B2</p>
            <p>Use cell addresses, not typed numbers, wherever you can. Then if a value changes, every formula updates instantly.</p>
            <h4>The functions you'll use daily</h4>
            <table class="lesson-table">
              <tr><th>Function</th><th>What it does</th><th>Example</th></tr>
              <tr><td>=SUM()</td><td>Adds a range of cells</td><td>=SUM(B2:B10)</td></tr>
              <tr><td>=AVERAGE()</td><td>Finds the average</td><td>=AVERAGE(B2:B10)</td></tr>
              <tr><td>=MAX() / =MIN()</td><td>Largest / smallest value</td><td>=MAX(B2:B10)</td></tr>
              <tr><td>=COUNT()</td><td>Counts how many numbers</td><td>=COUNT(B2:B10)</td></tr>
            </table>
            <p>The <b>:</b> means "through" — <code>B2:B10</code> means cells B2 all the way to B10.</p>
            <h4>AutoSum — the one-click total</h4>
            <p>Click an empty cell just below a column of numbers and press <b>Alt + =</b> (or the Σ AutoSum button). Excel guesses the range and totals it. Press Enter.</p>
          `,
          tips: [
            "Copy a formula down a whole column by grabbing the bottom-right corner and dragging — Excel adjusts the cell references automatically.",
            "If you see #### in a cell, the column is just too narrow — widen it.",
            "Click a cell to see its formula in the Formula Bar at the top, even though the cell shows the answer."
          ],
          shortcuts: [
            { keys: "Alt + =", action: "AutoSum the column above" },
            { keys: "Ctrl + `", action: "Show all formulas instead of results (great for checking)" },
            { keys: "F4", action: "Lock a cell reference (adds $ signs) — see next lesson" }
          ],
          practice: "Below your Qty column, click an empty cell and press Alt+= to total it. Do the same for Price. Then in a new cell type =AVERAGE() of the prices.",
          summary_tl: "Dito makapangyarihan ang Excel. Lahat ng formula ay nagsisimula sa equals sign (=). Gamitin ang cell addresses (=A1+A2) para awtomatiko ang update. Pangunahing function: =SUM() (dagdag), =AVERAGE(), =MAX()/=MIN(), =COUNT(). Ang tutuldok (:) ay 'hanggang' (B2:B10). Ang AutoSum (Alt+=) ay agad na nagto-total.",
          quiz: [
            { q: "What must every Excel formula start with?", choices: ["A number", "An equals sign (=)", "A letter", "A dollar sign"], answer: 1 },
            { q: "What does =SUM(B2:B10) do?", choices: ["Counts the cells", "Adds cells B2 through B10", "Averages them", "Finds the biggest"], answer: 1 },
            { q: "Which shortcut instantly totals a column of numbers?", choices: ["Alt + =", "Ctrl + S", "F2", "Ctrl + B"], answer: 0 }
          ]
        },
        {
          id: "e4",
          title: "Smart Formulas: IF, Absolute References & Sorting/Filtering",
          level: "Intermediate",
          minutes: 11,
          content: `
            <p>Now we make Excel think and organise.</p>
            <h4>IF — make decisions</h4>
            <p><b>=IF(test, "yes-answer", "no-answer")</b>. For example, flag who is over budget:</p>
            <p style="font-family:monospace;background:#f1f5f9;padding:10px;border-radius:8px">=IF(B2>1000, "Over budget", "OK")</p>
            <p>If B2 is more than 1000 it writes "Over budget", otherwise "OK".</p>
            <h4>Absolute references ($) — lock a cell</h4>
            <p>Normally when you copy a formula, the cells shift. Sometimes you want one cell to stay fixed — like a tax rate in cell E1. Put dollar signs to lock it: <b>$E$1</b>. Press <b>F4</b> on a reference to add them automatically.</p>
            <p style="font-family:monospace;background:#f1f5f9;padding:10px;border-radius:8px">=B2*$E$1   ← E1 stays locked as you copy down</p>
            <h4>Sort & Filter (Data tab) — the organiser's best friend</h4>
            <ul>
              <li><b>Sort</b> arranges rows A→Z, smallest→largest, or by date. Select your data first.</li>
              <li><b>Filter</b> adds little dropdown arrows to your headings so you can show only what you want — e.g. only "Unpaid" invoices, or only one department. The other rows hide, they aren't deleted.</li>
            </ul>
          `,
          tips: [
            "Always sort using the Data → Sort button, never by cutting and pasting rows — it keeps each row's data together.",
            "COUNTIF and SUMIF are the next step up: =SUMIF(C:C,\"Paid\",B:B) adds only the 'Paid' amounts.",
            "Turn your data into a real Table (Ctrl + T) — it gets filter buttons, banded colours, and formulas that fill down automatically."
          ],
          shortcuts: [
            { keys: "Ctrl + T", action: "Turn a range into a smart Table" },
            { keys: "Ctrl + Shift + L", action: "Turn Filters on/off" },
            { keys: "F4", action: "Add/cycle $ locks on a reference" }
          ],
          practice: "Add a column called 'Status' and use =IF(C2>10,\"High\",\"Low\") to flag prices. Then turn on filters (Ctrl+Shift+L) and filter to show only 'High'.",
          summary_tl: "Ang =IF(test,'oo','hindi') ay gumagawa ng desisyon. Ang dollar signs (hal. lock sa E1) ay pumipigil na magbago ang reference kapag kinopya — pindutin ang F4 para idagdag. Ang Sort (Data tab) ay nag-aayos ng rows; ang Filter ay nagpapakita lang ng gusto mong makita (itinatago ang iba, di binubura). Gamitin ang Data -> Sort, huwag mag-cut-paste ng rows.",
          quiz: [
            { q: "What does =IF(B2>1000,\"Over\",\"OK\") write if B2 is 500?", choices: ["Over", "OK", "1000", "Error"], answer: 1 },
            { q: "What do the dollar signs in $E$1 do?", choices: ["Format it as currency", "Lock the reference so it doesn't shift when copied", "Make it bold", "Delete it"], answer: 1 },
            { q: "What does FILTER let you do?", choices: ["Delete rows permanently", "Temporarily show only the rows you want", "Add a chart", "Change fonts"], answer: 1 }
          ]
        },
        {
          id: "e5",
          title: "Advanced: VLOOKUP/XLOOKUP, PivotTables & Charts",
          level: "Advanced",
          minutes: 14,
          content: `
            <p>These are the resume-worthy Excel skills. Learn them and you're genuinely advanced.</p>
            <h4>XLOOKUP / VLOOKUP — look something up automatically</h4>
            <p>Imagine a price list. You type a product code and Excel finds its price for you. That's a lookup.</p>
            <p><b>Modern XLOOKUP</b> (easiest):</p>
            <p style="font-family:monospace;background:#f1f5f9;padding:10px;border-radius:8px">=XLOOKUP(A2, ProductCodes, Prices)</p>
            <p>"Find the value of A2 in the ProductCodes list, return the matching Price." Older Excel uses <b>VLOOKUP</b> which does the same job with a slightly fussier setup.</p>
            <h4>PivotTables — summarise thousands of rows in seconds</h4>
            <p>A PivotTable answers questions like "total sales per region" or "how many invoices per month" without a single formula.</p>
            <ol>
              <li>Click anywhere in your data → <b>Insert → PivotTable</b>.</li>
              <li>Drag a field (e.g. Region) into <b>Rows</b>.</li>
              <li>Drag a number (e.g. Sales) into <b>Values</b> — it totals automatically.</li>
              <li>Drag another field into <b>Columns</b> or <b>Filters</b> to slice it further.</li>
            </ol>
            <p>Rearrange by dragging — it's the fastest way to explore data.</p>
            <h4>Charts — turn numbers into a picture</h4>
            <p>Select your data → <b>Insert → Recommended Charts</b>. Use a <b>column/bar</b> chart to compare, a <b>line</b> chart for trends over time, and a <b>pie</b> chart for parts of a whole. Give every chart a clear title.</p>
          `,
          tips: [
            "A PivotTable doesn't change your data — it's a live summary. Right-click → Refresh after the data changes.",
            "XLOOKUP can return 'Not found' instead of an ugly error: =XLOOKUP(A2,codes,prices,\"Not found\").",
            "Keep charts simple: no 3-D, no clutter. The message should be readable in two seconds."
          ],
          shortcuts: [
            { keys: "Alt + F1", action: "Instantly create a chart from selected data" },
            { keys: "F11", action: "Create a chart on its own new sheet" }
          ],
          practice: "Select your data and use Insert → Recommended Charts to make a column chart. Then try Insert → PivotTable and drag a field into Rows and a number into Values.",
          summary_tl: "Ang XLOOKUP/VLOOKUP ay naghahanap ng halaga at ibinabalik ang katugma (hal. presyo ng product code). Ang PivotTable ay nagbubuod ng libong rows sa segundo (hal. total per region) nang walang formula — i-drag lang ang fields. Ang Charts: column=paghahambing, line=trend sa panahon, pie=bahagi ng kabuuan.",
          quiz: [
            { q: "What is XLOOKUP used for?", choices: ["Printing", "Looking up a value and returning its match (e.g. a price)", "Spell check", "Changing colours"], answer: 1 },
            { q: "What does a PivotTable do?", choices: ["Deletes duplicate rows", "Summarises large data (e.g. totals per region) with no formulas", "Prints labels", "Locks the file"], answer: 1 },
            { q: "Which chart is best for showing a trend over time?", choices: ["Pie chart", "Line chart", "No chart", "Table"], answer: 1 }
          ]
        },
        {
          id: "e6",
          title: "Excel Drills: Essential Shortcuts & Formula Practice",
          level: "Intermediate",
          minutes: 12,
          content: `
            <p>This lesson is a hands-on workout. Knowing these shortcuts and core formulas by heart is what makes you <i>fast</i> in Excel — exactly what employers notice. Practise them until they're automatic.</p>
            <h4>The must-know keyboard shortcuts</h4>
            <table class="lesson-table">
              <tr><th>Shortcut</th><th>What it does</th></tr>
              <tr><td>Ctrl + Arrow</td><td>Jump to the edge of your data</td></tr>
              <tr><td>Ctrl + Shift + Arrow</td><td>Select all the way to the edge of the data</td></tr>
              <tr><td>Ctrl + Space / Shift + Space</td><td>Select the whole column / whole row</td></tr>
              <tr><td>Alt + =</td><td>AutoSum (total the numbers above)</td></tr>
              <tr><td>Ctrl + ;</td><td>Insert today's date</td></tr>
              <tr><td>Ctrl + 1</td><td>Open Format Cells</td></tr>
              <tr><td>F2</td><td>Edit the active cell</td></tr>
              <tr><td>F4</td><td>Lock a reference / repeat last action</td></tr>
              <tr><td>Ctrl + T</td><td>Turn data into a Table</td></tr>
              <tr><td>Ctrl + Shift + L</td><td>Turn filters on/off</td></tr>
              <tr><td>Alt + Enter</td><td>New line inside the same cell</td></tr>
              <tr><td>Ctrl + Z / Ctrl + Y</td><td>Undo / Redo</td></tr>
            </table>
            <h4>The core formulas to memorise</h4>
            <p style="font-family:monospace;background:#f1f5f9;padding:10px;border-radius:8px">=SUM(A1:A10) &nbsp; add a range<br>=AVERAGE(A1:A10) &nbsp; the average<br>=MIN() / =MAX() &nbsp; smallest / largest<br>=COUNT(A1:A10) &nbsp; how many numbers<br>=COUNTA(A1:A10) &nbsp; how many non-empty cells<br>=IF(A1&gt;10,"High","Low") &nbsp; make a decision<br>=ROUND(A1,2) &nbsp; round to 2 decimals<br>=TODAY() &nbsp; today's date</p>
            <h4>How to get fast</h4>
            <p>Don't try to learn all of these at once. Pick <b>3 shortcuts a day</b>, use them on purpose until they feel natural, then add 3 more. Within two weeks they'll be muscle memory. Do the practice below, then take the quiz to test yourself.</p>
          `,
          tips: [
            "F4 is a hidden gem: in a formula it adds the dollar-sign locks; anywhere else it repeats your last action.",
            "Select a range first, then Alt + = totals each column at once — a huge time-saver.",
            "If a formula misbehaves, press Ctrl + ` (back-tick) to see all formulas at once and spot the problem."
          ],
          shortcuts: [
            { keys: "Ctrl + Shift + Arrow", action: "Select to the edge of your data" },
            { keys: "Alt + =", action: "AutoSum" },
            { keys: "F4", action: "Lock a reference / repeat last action" },
            { keys: "Ctrl + 1", action: "Open Format Cells" },
            { keys: "Ctrl + T", action: "Make a Table" }
          ],
          practice: "Build a mini scoreboard: A1='Name', B1='Score'. Fill A2:A6 with 5 names and B2:B6 with scores. Now PRACTISE: (1) press Alt+= under the scores to total them; (2) in another cell use =AVERAGE(B2:B6); (3) =MAX(B2:B6) and =MIN(B2:B6); (4) in C2 type =IF(B2>50,\"Pass\",\"Fail\") and copy it down; (5) use Ctrl+Shift+Down to select the scores quickly. Time yourself — try to finish in under 3 minutes!",
          summary_tl: "Practice lesson ito! Kabisaduhin ang shortcuts: Alt+= (AutoSum), F4 (lock reference), Ctrl+1 (Format Cells), Ctrl+Shift+Arrow (pumili hanggang dulo), Ctrl+T (Table), F2 (edit cell). Core formulas: =SUM, =AVERAGE, =MAX/MIN, =COUNT, =IF, =ROUND, =TODAY. Tip: 3 shortcut kada araw hanggang maging automatic. Gawin ang practice at quiz para masubok ang sarili!",
          quiz: [
            { q: "Which shortcut totals the numbers above the cell?", choices: ["Ctrl + T", "Alt + =", "F4", "Ctrl + 1"], answer: 1 },
            { q: "What does F4 do inside a formula?", choices: ["Deletes it", "Locks the cell reference (adds dollar signs)", "Prints it", "Makes it bold"], answer: 1 },
            { q: "Which formula makes a decision (e.g. Pass/Fail)?", choices: ["=SUM()", "=IF()", "=COUNT()", "=TODAY()"], answer: 1 },
            { q: "How do you quickly select all the data down to the edge?", choices: ["Ctrl + Shift + Arrow", "Ctrl + P", "F2", "Alt + Enter"], answer: 0 },
            { q: "What's the smart way to learn these shortcuts?", choices: ["Memorise all 20 in one night", "Learn about 3 a day and use them until automatic", "Never use them", "Only read about them"], answer: 1 }
          ]
        }
      ]
    },

    /* ====================================================================
       MODULE 4 — POWERPOINT
       ================================================================= */
    {
      id: "powerpoint",
      title: "Microsoft PowerPoint",
      icon: "📽️",
      color: "#ea580c",
      blurb: "Build clean, confident presentations that look professional — and deliver them smoothly.",
      lessons: [
        {
          id: "p1",
          title: "Slides, Layouts & Adding Content",
          level: "Basic",
          minutes: 7,
          content: `
            <p>PowerPoint is for showing ideas on a screen — meetings, training, pitches.</p>
            <h4>The building blocks</h4>
            <ul>
              <li><b>Slide</b> — one screen. Your presentation is a stack of slides shown in order.</li>
              <li><b>Layout</b> — a ready-made arrangement of placeholders (Title Slide, Title + Content, Two Content…). Choose via <b>Home → Layout</b>.</li>
              <li><b>Placeholder</b> — the dotted boxes that say "Click to add title". Just click and type.</li>
            </ul>
            <h4>Adding & organising slides</h4>
            <ul>
              <li><b>New Slide</b> (Home tab) adds one; click the small arrow to pick its layout.</li>
              <li>The strip on the left shows all slides — drag them to reorder.</li>
              <li><b>Insert → Pictures / Icons / Shapes / Table / Chart</b> add visuals.</li>
            </ul>
            <h4>The #1 design rule for beginners</h4>
            <p><b>One idea per slide. Few words. Big text.</b> Slides are a backdrop for <i>you</i> talking — not a document to read aloud. Aim for short phrases, not paragraphs.</p>
          `,
          tips: [
            "Use the Outline View (View tab) to type all your headings quickly before worrying about design.",
            "Pick a built-in Theme (Design tab) first — it sets matching colours and fonts across every slide instantly.",
            "Reuse slides from another file via Home → New Slide → Reuse Slides."
          ],
          shortcuts: [
            { keys: "Ctrl + M", action: "Add a new slide" },
            { keys: "Ctrl + D", action: "Duplicate the selected slide or object" }
          ],
          practice: "Create a new presentation. Add a title slide with a title and subtitle, then add a second slide with a bulleted list of 3 points. Pick a Theme from the Design tab.",
          summary_tl: "Ang PowerPoint ay para sa presentation sa screen. Slide=isang screen; Layout=handang ayos ng placeholders; Placeholder=ang 'Click to add title'. New Slide (Home), i-drag sa kaliwa para ayusin. Pinakaimportante: ISANG ideya kada slide, kaunting salita, malaking text. Pumili ng Theme (Design tab) para tumugma ang kulay at font.",
          quiz: [
            { q: "What is the golden design rule for slides?", choices: ["Fit as much text as possible", "One idea per slide, few words, big text", "Use five fonts", "Read every word aloud"], answer: 1 },
            { q: "What is a 'placeholder'?", choices: ["A saved file", "The dotted box where you click to add title or content", "A keyboard shortcut", "A printed handout"], answer: 1 },
            { q: "Where do you set matching colours and fonts for the whole deck at once?", choices: ["The Design tab (Themes)", "The File menu", "The status bar", "Track Changes"], answer: 0 }
          ]
        },
        {
          id: "p2",
          title: "Design, Transitions & Animations (Without Overdoing It)",
          level: "Intermediate",
          minutes: 8,
          content: `
            <p>A little movement adds polish; too much looks amateur. Here's the tasteful way.</p>
            <h4>Transitions — between slides</h4>
            <p>The <b>Transitions tab</b> animates the change from one slide to the next. <b>Fade</b> or <b>Push</b> look professional. Apply one, then click <b>Apply To All</b> so the whole deck is consistent. Avoid spinning, bouncing transitions in business settings.</p>
            <h4>Animations — for items on a slide</h4>
            <p>The <b>Animations tab</b> makes an item appear, emphasise, or leave. The classic use: reveal bullet points one at a time so the audience focuses on each. Select the text box → Animations → <b>Appear</b> or <b>Fade</b> → set "Start: On Click".</p>
            <h4>Designer — instant professional layouts</h4>
            <p>In Microsoft 365, <b>Design → Designer</b> suggests beautiful arrangements of your content automatically. Add a picture and watch the ideas appear on the right — one click to apply.</p>
            <h4>Slide Master — change everything at once</h4>
            <p><b>View → Slide Master</b> edits the template behind every slide. Change the logo or heading font here once and it updates on every slide. Advanced but powerful for branded decks.</p>
          `,
          tips: [
            "Consistency beats variety — one transition for the whole deck looks far more professional than a different one each time.",
            "Keep animations to 'Fade' or 'Appear'. Skip the swooshy ones for serious audiences.",
            "Put your company logo on the Slide Master so it appears on every slide automatically."
          ],
          shortcuts: [
            { keys: "Alt + N then P", action: "Insert a picture (keyboard path)" },
            { keys: "Ctrl + Shift + C / V", action: "Copy and paste formatting between objects" }
          ],
          practice: "Apply a 'Fade' transition and click 'Apply To All'. Then add a simple 'Appear' animation to your bullet points so they reveal one at a time.",
          summary_tl: "Ang Transition (Transitions tab) ay galaw pag-lipat ng slide — Fade o Push, tapos Apply To All. Ang Animation (Animations tab) ay para sa item sa slide — hal. paisa-isang bullets. Iwasan ang sobrang galaw. Ang Slide Master ang gamit para baguhin ang lahat ng slide nang sabay (hal. logo).",
          quiz: [
            { q: "What's the difference between a Transition and an Animation?", choices: ["No difference", "Transition is between slides; Animation is for items on a slide", "Animation prints; Transition saves", "Both delete slides"], answer: 1 },
            { q: "What's the professional approach to transitions?", choices: ["A different flashy one per slide", "One subtle one (Fade/Push) applied to all", "No slides at all", "Only spinning ones"], answer: 1 },
            { q: "Where do you change the logo so it shows on every slide?", choices: ["Slide Master", "The Review tab", "The status bar", "Filter"], answer: 0 }
          ]
        },
        {
          id: "p3",
          title: "Delivering: Presenter View, Notes & Exporting",
          level: "Advanced",
          minutes: 8,
          content: `
            <p>Building the deck is half the job; delivering it smoothly is the other half — and a key office-assistant duty (you'll often run the slides for a manager).</p>
            <h4>Start the show</h4>
            <p>Press <b>F5</b> to start from the beginning, or <b>Shift + F5</b> from the current slide. Click or press the <b>spacebar / right arrow</b> to advance, <b>left arrow</b> to go back, and <b>Esc</b> to exit.</p>
            <h4>Presenter View — your secret cockpit</h4>
            <p>When connected to a projector, <b>Presenter View</b> shows the audience only the slide, while <i>you</i> see your speaker notes, a timer, the next slide, and tools — on your own screen. Turn it on in the <b>Slide Show</b> tab. Add notes in the box under each slide (View → Notes).</p>
            <h4>Handy tricks during a show</h4>
            <ul>
              <li>Type a slide number then <b>Enter</b> to jump straight to it.</li>
              <li>Press <b>B</b> to black the screen (and again to return) — great when discussion takes over.</li>
              <li>Press <b>W</b> for a white screen.</li>
            </ul>
            <h4>Sharing the file</h4>
            <p><b>File → Export → Create PDF</b> for a version anyone can open that can't be edited. <b>File → Export → Create Handouts</b> sends slides + notes to Word for printing.</p>
          `,
          tips: [
            "Always test on the actual projector/screen before the meeting — resolution and colours can surprise you.",
            "Save a PDF copy to email; it always looks the same on every device, unlike a .pptx.",
            "Press B to black the screen when you want all eyes on the speaker, not the slide."
          ],
          shortcuts: [
            { keys: "F5", action: "Start the slideshow from the beginning" },
            { keys: "Shift + F5", action: "Start from the current slide" },
            { keys: "B / W", action: "Black / white the screen during a show" },
            { keys: "Esc", action: "End the slideshow" }
          ],
          practice: "Press F5 to start your slideshow. Practise advancing with the spacebar and going back with the arrow. Press B to black the screen, then B again. Press Esc to exit.",
          summary_tl: "F5 para simulan ang slideshow (Shift+F5 mula sa kasalukuyang slide). Spacebar/right arrow=sunod, left arrow=balik, Esc=labas. Ang Presenter View ay nagpapakita sa iyo ng notes, timer, at susunod na slide habang slide lang ang nakikita ng audience. Pindutin ang B para itim ang screen. I-export bilang PDF para pare-pareho ang itsura.",
          quiz: [
            { q: "Which key starts the slideshow from the beginning?", choices: ["F5", "Esc", "Ctrl + S", "F2"], answer: 0 },
            { q: "What does Presenter View let the speaker see that the audience can't?", choices: ["Nothing extra", "Speaker notes, timer, and the next slide", "A different presentation", "The audience's screens"], answer: 1 },
            { q: "Why export the deck as a PDF before emailing it?", choices: ["It's smaller and looks the same on every device", "It adds animations", "It can be edited more easily", "It prints in colour only"], answer: 0 }
          ]
        }
      ]
    },

    /* ====================================================================
       MODULE 5 — OUTLOOK & EMAIL
       ================================================================= */
    {
      id: "outlook",
      title: "Outlook, Email & Calendar",
      icon: "📧",
      color: "#0891b2",
      blurb: "Manage email, calendars and meetings like a true coordinator — organised, prompt, and professional.",
      lessons: [
        {
          id: "o1",
          title: "Email That Looks Professional",
          level: "Basic",
          minutes: 8,
          content: `
            <p>Email is the front door of office work. How you write reflects on the whole organisation.</p>
            <h4>Anatomy of a great email</h4>
            <ul>
              <li><b>Subject line</b> — short and specific: "Invoice #204 — due Friday", not "Hi". People decide whether to open based on this.</li>
              <li><b>Greeting</b> — "Dear Ms Lee," or "Hi James,". Match the formality of the relationship.</li>
              <li><b>One clear purpose</b> — say what you need and by when, early. Busy people skim.</li>
              <li><b>Sign-off</b> — "Kind regards," then your name and a signature block (name, title, phone).</li>
            </ul>
            <h4>To, Cc, Bcc — get this right</h4>
            <ul>
              <li><b>To</b> — the people who must act or reply.</li>
              <li><b>Cc</b> (carbon copy) — people who should be kept in the loop but needn't act.</li>
              <li><b>Bcc</b> (blind copy) — recipients hidden from each other. Use it when emailing a large group so you don't expose everyone's address.</li>
            </ul>
            <h4>Attachments</h4>
            <p>Mention the attachment in the text ("Please see the agenda attached"). <b>Attach the file before you write "attached"</b> — Outlook even warns you if you forget. Large files? Share a OneDrive link instead.</p>
          `,
          tips: [
            "Write the recipient's address LAST — that way you can't send it half-finished by accident.",
            "Re-read every email once before sending. Tone is easily misread; a quick 'thank you' softens a lot.",
            "Set up a signature once: File → Options → Mail → Signatures. It auto-adds your details to every email."
          ],
          shortcuts: [
            { keys: "Ctrl + N", action: "New email" },
            { keys: "Ctrl + Enter", action: "Send the email" },
            { keys: "Ctrl + R", action: "Reply" },
            { keys: "Ctrl + Shift + R", action: "Reply All (use with care!)" }
          ],
          practice: "Draft a practice email to yourself: write a clear subject line, a greeting, one clear request with a deadline, and a sign-off. Attach any file, then send it and check it arrives.",
          summary_tl: "Magandang email: malinaw na Subject (hal. 'Invoice #204 — due Friday'), greeting, isang malinaw na layunin agad, at sign-off na may pangalan. To=dapat sumagot; Cc=para malaman lang; Bcc=itinatago ang mga address. I-attach muna ang file bago isulat ang 'attached'. Tip: huling i-type ang address para di maaga ang send.",
          quiz: [
            { q: "When should you use Bcc?", choices: ["Never", "To hide recipients' addresses from each other when emailing a group", "Only for your boss", "To make text bold"], answer: 1 },
            { q: "What makes a good subject line?", choices: ["Just 'Hi'", "Short and specific, like 'Invoice #204 — due Friday'", "Left blank", "The whole message"], answer: 1 },
            { q: "What's a smart habit to avoid sending an email too early?", choices: ["Type the recipient's address last", "Never use a subject", "Always Reply All", "Write in all caps"], answer: 0 }
          ]
        },
        {
          id: "o2",
          title: "Inbox Organisation: Folders, Rules, Flags & Search",
          level: "Intermediate",
          minutes: 8,
          content: `
            <p>A coordinator's inbox is mission control. Keeping it organised means nothing falls through the cracks.</p>
            <h4>Folders & categories</h4>
            <p>Create <b>folders</b> (right-click your mailbox → New Folder) to file emails by project or client. <b>Colour categories</b> tag emails across folders — e.g. red for Urgent, green for Done.</p>
            <h4>Rules — automatic sorting</h4>
            <p>A <b>Rule</b> tells Outlook to act automatically: "Move every email from the accounting system into the Invoices folder." Set them up via <b>Rules → Manage Rules</b>. This keeps the inbox clear without lifting a finger.</p>
            <h4>Flags & follow-up</h4>
            <p>Click the little <b>flag</b> on an email to mark it for follow-up; set a reminder date so it pops up when due. Flagged items appear in your To-Do list — a simple, reliable task system.</p>
            <h4>Search like a detective</h4>
            <p>The search box finds anything fast. Refine it: <code>from:james</code>, <code>subject:invoice</code>, <code>hasattachments:yes</code>. Combine them to pinpoint one email among thousands.</p>
          `,
          tips: [
            "Aim for 'Inbox Zero' — file or flag each email, don't leave hundreds sitting read-but-undone.",
            "Use a 'Waiting For' folder for emails where you're expecting a reply from someone.",
            "Archive (not delete) old emails — you keep them searchable without cluttering the inbox."
          ],
          shortcuts: [
            { keys: "Ctrl + E", action: "Jump to the search box" },
            { keys: "Ctrl + Shift + V", action: "Move the email to a folder" },
            { keys: "Insert key", action: "Flag/unflag the selected email" }
          ],
          practice: "Create a folder in your mailbox called 'Practice', then move an email into it. Flag one email for follow-up. Use the search box to find an email by typing a word from its subject.",
          summary_tl: "Para organisado ang inbox: Folders at Categories (kulay). Ang Rules ay awtomatikong nag-aayos ng paparating na email. Ang Flag ay para sa follow-up na may reminder. Mahusay mag-search: from:james, subject:invoice, hasattachments:yes. Layunin: 'Inbox Zero' — i-file o i-flag ang bawat email.",
          quiz: [
            { q: "What does a Rule do in Outlook?", choices: ["Deletes your inbox", "Automatically sorts/handles incoming emails", "Changes the font", "Prints emails"], answer: 1 },
            { q: "How do you search for emails that have attachments?", choices: ["hasattachments:yes", "find:files", "attach=true", "You can't"], answer: 0 },
            { q: "What's the purpose of flagging an email?", choices: ["To delete it", "To mark it for follow-up with an optional reminder", "To make it bold", "To forward it automatically"], answer: 1 }
          ]
        },
        {
          id: "o3",
          title: "Calendar & Scheduling Meetings",
          level: "Intermediate",
          minutes: 9,
          content: `
            <p>Managing calendars and booking meetings is the heartbeat of a coordinator's role.</p>
            <h4>Appointments vs. Meetings</h4>
            <ul>
              <li><b>Appointment</b> — just for you (e.g. "Lunch", "Focus time"). No invitees.</li>
              <li><b>Meeting</b> — you invite others; they get a request and can Accept/Decline.</li>
            </ul>
            <h4>Booking a meeting that works for everyone</h4>
            <ol>
              <li><b>New Meeting</b> → add people in the <b>To</b> / <b>Required</b> line.</li>
              <li>Use <b>Scheduling Assistant</b> — it shows everyone's free/busy times side by side so you pick a slot that's open for all.</li>
              <li>Add a <b>location</b> or a Teams link, a clear title, and an agenda in the body.</li>
              <li>Set a <b>reminder</b> (15 min before is standard) and Send.</li>
            </ol>
            <h4>Other essentials</h4>
            <ul>
              <li><b>Recurring meetings</b> — tick "Make Recurring" for a weekly stand-up; it books every week at once.</li>
              <li><b>Rooms</b> — book a meeting room as a resource so it can't be double-booked.</li>
              <li><b>Time zones</b> — when inviting across regions, double-check the zone; Outlook shows the recipient's local time.</li>
            </ul>
          `,
          tips: [
            "Always add an agenda in the invite body — people arrive prepared and meetings run shorter.",
            "Send a calendar invite rather than just emailing 'let's meet at 2' — it blocks everyone's time and reminds them.",
            "When booking for your manager, add 'travel time' or buffer slots so back-to-back meetings don't collide."
          ],
          shortcuts: [
            { keys: "Ctrl + Shift + A", action: "New appointment" },
            { keys: "Ctrl + Shift + Q", action: "New meeting request" },
            { keys: "Ctrl + 2", action: "Switch to Calendar view" }
          ],
          practice: "Open your Calendar and create a practice meeting for tomorrow. Add an agenda in the body, set a 15-minute reminder, and (if you can) invite yourself at another address.",
          summary_tl: "Appointment=para sa iyo lang; Meeting=may iniimbitahan. Para sa meeting na bagay sa lahat: gamitin ang Scheduling Assistant (free/busy ng lahat). Magdagdag ng location/Teams link, agenda, reminder (15 min bago). Para sa lingguhan, gawing Recurring. Tiyakin ang time zone kapag iba't ibang lugar.",
          quiz: [
            { q: "What's the difference between an Appointment and a Meeting?", choices: ["Nothing", "A Meeting invites others; an Appointment is just for you", "Appointments are longer", "Meetings can't be recurring"], answer: 1 },
            { q: "Which tool shows everyone's free/busy times to find a slot?", choices: ["The Scheduling Assistant", "Track Changes", "AutoSum", "The Slide Master"], answer: 0 },
            { q: "What should you always include in a meeting invite body?", choices: ["Nothing", "An agenda", "A pie chart", "Your password"], answer: 1 }
          ]
        }
      ]
    },

    /* ====================================================================
       MODULE 6 — OFFICE COORDINATOR / ASSISTANT SKILLS
       ================================================================= */
    {
      id: "coordinator",
      title: "Office Coordinator Skills",
      icon: "🗂️",
      color: "#9333ea",
      blurb: "The human side of the job: communication, organisation, meetings, phones, filing and professionalism that make you indispensable.",
      lessons: [
        {
          id: "c1",
          title: "The Role: What Office Assistants & Coordinators Really Do",
          level: "Basic",
          minutes: 7,
          content: `
            <p>An office assistant/coordinator keeps the workplace running smoothly so everyone else can do their job. You are the organiser, the communicator, and the problem-solver.</p>
            <h4>Your typical responsibilities</h4>
            <ul>
              <li><b>Communication hub</b> — answering phones and emails, greeting visitors, relaying messages.</li>
              <li><b>Scheduling</b> — managing calendars, booking meetings and rooms, arranging travel.</li>
              <li><b>Documents</b> — creating and formatting letters, reports, and spreadsheets; filing and record-keeping.</li>
              <li><b>Office operations</b> — ordering supplies, liaising with vendors, handling mail and deliveries.</li>
              <li><b>Support</b> — assisting managers, preparing for meetings, taking minutes, following up on tasks.</li>
            </ul>
            <h4>The qualities that matter most</h4>
            <ul>
              <li><b>Reliability</b> — if you say it's done, it's done. People build trust on this.</li>
              <li><b>Attention to detail</b> — correct dates, names, and numbers prevent costly mistakes.</li>
              <li><b>Discretion</b> — you'll see confidential information; keep it confidential.</li>
              <li><b>Anticipation</b> — the best assistants solve problems before they're asked.</li>
              <li><b>Calm under pressure</b> — when things go wrong, you're the steady one.</li>
            </ul>
          `,
          tips: [
            "Keep a running to-do list and review it first thing every morning and last thing before you leave.",
            "When given a task, repeat it back or confirm the deadline — it prevents misunderstandings.",
            "Become the person who 'knows where everything is and how everything works' — that makes you indispensable."
          ],
          shortcuts: [],
          summary_tl: "Ang office assistant/coordinator ang nagpapatakbo ng opisina. Gawain: komunikasyon (telepono, email, bisita), scheduling, dokumento at filing, supplies, suporta sa manager. Mahalagang katangian: reliability (kapag sinabi mong tapos, tapos), atensyon sa detalye, discretion (kumpidensyal), at pag-asa sa problema bago pa itanong.",
          quiz: [
            { q: "Which quality builds the most trust with colleagues?", choices: ["Typing fast", "Reliability — if you say it's done, it's done", "Knowing every shortcut", "Working late"], answer: 1 },
            { q: "What does 'discretion' mean in this role?", choices: ["Working quietly", "Keeping confidential information confidential", "Decorating the office", "Avoiding meetings"], answer: 1 },
            { q: "What do the BEST assistants do?", choices: ["Wait to be told everything", "Anticipate and solve problems before being asked", "Only answer emails", "Avoid the phone"], answer: 1 }
          ]
        },
        {
          id: "c2",
          title: "Professional Communication: Phone, Email & In Person",
          level: "Basic",
          minutes: 9,
          content: `
            <p>You are often the first voice or face people meet. Professional communication shapes the whole impression of the company.</p>
            <h4>Answering the phone</h4>
            <ul>
              <li>Answer within 3 rings, smile (it changes your voice), and greet: "Good morning, [Company], this is [Name], how can I help?"</li>
              <li><b>Taking a message:</b> note the caller's name, company, number, time, and what they need. Read the number back to confirm.</li>
              <li><b>Transferring:</b> tell the caller who you're connecting them to; if no answer, offer to take a message rather than leaving them stranded.</li>
              <li><b>On hold:</b> always ask "May I put you on hold?" and check back every 30–45 seconds.</li>
            </ul>
            <h4>Email & written tone</h4>
            <p>Be warm but concise. Use "please" and "thank you". Avoid ALL CAPS (it reads as shouting). When something's urgent, say so politely and give a deadline.</p>
            <h4>In person & visitors</h4>
            <p>Greet visitors promptly, offer a seat and water, notify the person they're meeting, and never leave a guest feeling ignored. A friendly, organised welcome sets the tone.</p>
            <h4>Difficult situations</h4>
            <p>Stay calm and listen. Don't take frustration personally. Acknowledge ("I understand, let me help"), focus on what you <i>can</i> do, and escalate to a manager when needed.</p>
          `,
          tips: [
            "Keep a notepad and pen by every phone — never rely on memory for a message.",
            "Mirror the caller's level of formality, but always stay polite and clear.",
            "The phrase 'Let me find out for you' is far better than a flat 'I don't know'."
          ],
          shortcuts: [],
          summary_tl: "Ikaw madalas ang unang boses/mukha ng kumpanya. Telepono: sagutin sa 3 ring, ngumiti, kumuha ng kumpletong message (pangalan, kumpanya, numero, oras, dahilan — ulitin ang numero). Email: magalang at maikli. Bisita: batiin agad, alukin ng upuan. Galit na tao: manatiling kalmado, makinig, kilalanin ang damdamin, tumulong.",
          quiz: [
            { q: "What details must a phone message always capture?", choices: ["Just the name", "Name, company, number, time, and the reason — and read the number back", "Only the time", "Nothing, just remember it"], answer: 1 },
            { q: "Before putting someone on hold you should…", choices: ["Just do it silently", "Ask 'May I put you on hold?' and check back regularly", "Hang up", "Transfer without telling them"], answer: 1 },
            { q: "How should you handle an upset caller?", choices: ["Argue back", "Stay calm, acknowledge, focus on what you can do, escalate if needed", "Hang up", "Put them on hold forever"], answer: 1 }
          ]
        },
        {
          id: "c3",
          title: "Organisation: Filing, Records & Time Management",
          level: "Intermediate",
          minutes: 9,
          content: `
            <p>Organisation is the backbone of the role. A well-organised office runs itself; a disorganised one wastes everyone's time.</p>
            <h4>Filing systems (digital & paper)</h4>
            <ul>
              <li><b>Consistent naming</b> — agree a format (e.g. <code>YYYY-MM-DD Client Topic</code>) and use it everywhere.</li>
              <li><b>Logical folders</b> — by year, then category, then project. Don't go more than 3–4 levels deep.</li>
              <li><b>One source of truth</b> — store shared files where the team can find them (SharePoint/OneDrive), not on your own desktop.</li>
              <li><b>Retention</b> — know what must be kept (contracts, invoices) and for how long; archive the rest.</li>
            </ul>
            <h4>Managing your time</h4>
            <ul>
              <li><b>Prioritise</b> with urgent/important: do urgent+important first, schedule important-not-urgent, minimise the rest.</li>
              <li><b>Time-block</b> your calendar for focused work, not just meetings.</li>
              <li><b>Batch</b> similar tasks (all filing at once, all calls at once) to stay efficient.</li>
              <li><b>Single source to-do list</b> — one place for every task, reviewed daily.</li>
            </ul>
            <h4>Supplies & office operations</h4>
            <p>Keep a simple inventory; reorder before you run out, not after. Build relationships with reliable suppliers. Track recurring needs (paper, toner, kitchen) on a checklist.</p>
          `,
          tips: [
            "Touch each piece of paper/email once: deal, delegate, file, or bin — don't shuffle it endlessly.",
            "A 5-minute tidy at day's end means a calm start tomorrow.",
            "Keep a 'how-to' document for recurring tasks so anyone can cover for you — and you look organised."
          ],
          shortcuts: [],
          summary_tl: "Ang organisasyon ang gulugod ng trabaho. Filing: pare-parehong pangalan (YYYY-MM-DD), maayos na folders, isang shared na lugar (OneDrive/SharePoint). Time management: unahin ang urgent+important; i-schedule ang important; i-batch ang magkakatulad; isang to-do list na binabalikan araw-araw. Supplies: mag-order BAGO maubos.",
          quiz: [
            { q: "Where should shared team files live?", choices: ["On your personal desktop", "A shared location like SharePoint/OneDrive — one source of truth", "Printed only", "In your email drafts"], answer: 1 },
            { q: "In the urgent/important method, what do you do FIRST?", choices: ["The easy tasks", "Tasks that are both urgent AND important", "Nothing", "Only important-not-urgent"], answer: 1 },
            { q: "Why keep a 'how-to' document for recurring tasks?", choices: ["To fill time", "So anyone can cover for you and work stays consistent", "It's required by law", "To make the folder bigger"], answer: 1 }
          ]
        },
        {
          id: "c4",
          title: "Meetings: Agendas, Minutes & Follow-up",
          level: "Intermediate",
          minutes: 10,
          content: `
            <p>Coordinators make meetings work — before, during, and after. Done well, this is one of the most visible parts of the job.</p>
            <h4>Before: preparation</h4>
            <ul>
              <li>Confirm date, time, attendees, and room/link; send the invite with an <b>agenda</b>.</li>
              <li>Circulate any documents in advance so people arrive ready.</li>
              <li>Prepare the room: seating, projector, water, printed agendas if needed.</li>
            </ul>
            <h4>During: taking minutes</h4>
            <p>Minutes are the official record. Capture:</p>
            <ul>
              <li><b>Attendees</b> (and apologies/absentees), date, time.</li>
              <li><b>Decisions</b> made — clearly, not every word said.</li>
              <li><b>Action items</b> — the gold. For each: <i>what</i>, <i>who</i> is responsible, and <i>by when</i>.</li>
            </ul>
            <p>Don't transcribe everything — summarise decisions and actions. Note the agenda item each point relates to.</p>
            <h4>After: follow-up</h4>
            <ul>
              <li>Type up and circulate the minutes <b>within 24 hours</b> while it's fresh.</li>
              <li>Track action items and gently remind owners as deadlines approach.</li>
              <li>Carry unfinished actions to the next meeting's agenda.</li>
            </ul>
          `,
          tips: [
            "Build a minutes template (attendees, agenda items, decisions, action table) so you only fill in the blanks.",
            "An 'Action: Sarah to send report by Fri 6 June' line is worth more than a paragraph of discussion.",
            "Send minutes promptly — speed builds your reputation for reliability."
          ],
          shortcuts: [],
          summary_tl: "Bago ang meeting: kumpirmahin ang oras/lugar, magpadala ng agenda. Habang nagmi-meeting, kumuha ng MINUTES: attendees, desisyon, at lalo na ang ACTION ITEMS (ano, sino, kailan). Pagkatapos: ipamahagi ang minutes sa loob ng 24 oras, i-track ang actions, paalalahanan ang may hawak bago ang deadline.",
          quiz: [
            { q: "What's the most important thing to capture in minutes?", choices: ["Every single word", "Action items: what, who, and by when", "The weather", "Who arrived late"], answer: 1 },
            { q: "When should minutes ideally be circulated?", choices: ["Within 24 hours, while fresh", "A month later", "Never", "Only if asked"], answer: 0 },
            { q: "What should be sent out WITH the meeting invite?", choices: ["A pie chart", "An agenda (and any documents to read)", "Nothing", "The minutes from a future meeting"], answer: 1 }
          ]
        },
        {
          id: "c5",
          title: "Advanced: Travel, Events, Confidentiality & Growing in the Role",
          level: "Advanced",
          minutes: 11,
          content: `
            <p>The skills that mark out a senior, trusted coordinator or executive assistant.</p>
            <h4>Travel coordination</h4>
            <ul>
              <li>Build an <b>itinerary</b>: flights, hotels, ground transport, meeting times — all in one document, in the traveller's local time.</li>
              <li>Keep confirmation numbers, addresses, and emergency contacts together.</li>
              <li>Anticipate: visas, time-zone gaps, dietary needs, a buffer for delays.</li>
            </ul>
            <h4>Organising events & meetings (bigger scale)</h4>
            <p>For a workshop or off-site: book the venue, manage the guest list and RSVPs, arrange catering and equipment, prepare materials, and keep a run-sheet (timed schedule). A checklist with deadlines is your best friend.</p>
            <h4>Confidentiality & professionalism</h4>
            <ul>
              <li>You'll handle salaries, contracts, personal data — treat all of it as strictly confidential.</li>
              <li>Lock your screen (Windows + L) when away; don't leave sensitive papers on the desk.</li>
              <li>Be discreet in conversation; gossip destroys trust instantly.</li>
            </ul>
            <h4>Growing in the role</h4>
            <ul>
              <li><b>Learn the business</b> — understand what the organisation does and who's who.</li>
              <li><b>Build relationships</b> across departments; your network gets things done.</li>
              <li><b>Keep upskilling</b> — advanced Excel, project tools, and clear writing open doors to executive assistant and office manager roles.</li>
              <li><b>Ask for feedback</b> and act on it; it accelerates your growth.</li>
            </ul>
          `,
          tips: [
            "For travel, always have a Plan B (alternate flight, backup contact) — managers remember who saved the day.",
            "A single, well-formatted itinerary document beats ten scattered confirmation emails.",
            "Confidentiality is a reputation you build once and can lose in a single careless moment — guard it."
          ],
          shortcuts: [
            { keys: "Windows + L", action: "Lock your screen instantly when stepping away" }
          ],
          summary_tl: "Senior skills: Travel — isang itinerary (flight, hotel, transport, contacts) sa local time. Events — venue, RSVP, catering, materials, run-sheet (naka-oras na schedule). Confidentiality — lihim ang sahod/kontrata/personal data; i-lock ang screen (Windows+L). Paglago: alamin ang negosyo, bumuo ng relasyon, mag-upskill, humingi ng feedback.",
          quiz: [
            { q: "What's the best format for travel details?", choices: ["Ten separate emails", "One clear itinerary with flights, hotel, transport, and contacts together", "Memorising it", "A voicemail"], answer: 1 },
            { q: "How should you treat salaries, contracts and personal data?", choices: ["Share with friends", "As strictly confidential", "Post on the noticeboard", "Email to everyone"], answer: 1 },
            { q: "What helps you grow toward executive assistant or office manager roles?", choices: ["Avoiding new tasks", "Upskilling (advanced Excel, writing), building relationships, asking for feedback", "Staying silent", "Never learning the business"], answer: 1 }
          ]
        }
      ]
    },

    /* ====================================================================
       MODULE 7 — PRACTICAL OFFICE WORK
       ================================================================= */
    {
      id: "practical",
      title: "Practical Office Work",
      icon: "🧰",
      color: "#0d9488",
      blurb: "The hands-on daily skills: typing fast & accurately, business writing, customer service, office equipment, and handling money.",
      lessons: [
        {
          id: "x1",
          title: "Typing Speed, Accuracy & Data Entry",
          level: "Basic",
          minutes: 8,
          content: `
            <p>Fast, accurate typing is the single biggest day-to-day productivity skill in any office. A few weeks of practice pays off for your whole career.</p>
            <h4>Touch typing — type without looking</h4>
            <ul>
              <li>Rest your fingers on the <b>home row</b>: left hand on <b>A S D F</b>, right hand on <b>J K L ;</b>. Feel the little bumps on F and J — they guide your fingers back without looking.</li>
              <li>Each finger "owns" certain keys. Let the thumbs handle the spacebar.</li>
              <li><b>Accuracy first, speed second.</b> Speed comes naturally once your fingers learn the positions — chasing speed just teaches mistakes.</li>
            </ul>
            <h4>Practise (free)</h4>
            <p>Spend 10–15 minutes a day on a free typing trainer (e.g. typing.com, keybr.com, or Microsoft's own typing practice). Aim to build from ~20 words-per-minute to 50+ wpm over a few weeks.</p>
            <h4>Data entry: accuracy is everything</h4>
            <ul>
              <li><b>Double-check numbers</b> — one wrong digit in an invoice or phone number causes real problems. Read it back.</li>
              <li><b>Use Tab</b> to move neatly between fields/cells instead of the mouse — it's far faster.</li>
              <li><b>Be consistent</b> — pick one date format, one way to write names, and stick to it across the whole sheet.</li>
              <li><b>The number pad</b> (right side of a full keyboard) is fastest for typing lots of figures — practise it.</li>
            </ul>
          `,
          tips: [
            "Sit up, screen at eye level, wrists floating (not resting hard) — good posture lets you type longer without aching.",
            "Don't look at the keys — covering your hands while practising forces your fingers to learn.",
            "When entering data, verify totals add up; a quick =SUM check catches typos instantly."
          ],
          shortcuts: [
            { keys: "Tab", action: "Jump to the next field or cell (faster than the mouse)" },
            { keys: "Shift + Tab", action: "Jump back to the previous field" },
            { keys: "Num Lock", action: "Turn the number pad on for fast figure entry" }
          ],
          practice: "Open a free typing site (typing.com or keybr.com) and do one 5-minute lesson with your fingers on the home row (ASDF / JKL;). Don't look at the keys!",
          summary_tl: "Ang mabilis at tamang pag-type ang pinakamalaking araw-araw na skill. Touch typing: ipatong ang daliri sa home row (ASDF / JKL;) — may bukol sa F at J na gabay. Accuracy muna bago bilis. Mag-practice 10-15 min kada araw (typing.com). Data entry: i-double-check ang numbers, gamitin ang Tab, maging consistent, gamitin ang number pad.",
          quiz: [
            { q: "Where do your fingers rest in touch typing (the 'home row')?", choices: ["Q W E R / U I O P", "A S D F / J K L ;", "Z X C V / M , . /", "The number row"], answer: 1 },
            { q: "What matters MOST when learning to type and doing data entry?", choices: ["Speed above all", "Accuracy first — speed follows", "Using only the mouse", "Looking at the keys"], answer: 1 },
            { q: "What's the fastest way to move between cells/fields while entering data?", choices: ["The mouse", "The Tab key", "Scrolling", "Closing and reopening"], answer: 1 }
          ]
        },
        {
          id: "x2",
          title: "Business Writing & Ready-to-Use Templates",
          level: "Intermediate",
          minutes: 10,
          content: `
            <p>Clear, correct writing makes you look professional and saves everyone time. Keep it simple, polite, and to the point.</p>
            <h4>The rules of good business writing</h4>
            <ul>
              <li><b>Get to the point fast</b> — say what you need in the first sentence or two.</li>
              <li><b>Short sentences, plain words.</b> "Use" not "utilise"; "before" not "prior to".</li>
              <li><b>Be polite and positive</b> — "Could you please…", "Thank you for…".</li>
              <li><b>Proofread</b> — read it once out loud; spellcheck won't catch "their/there" or a wrong name.</li>
              <li><b>One topic per message</b>; use bullet points for anything with steps or lists.</li>
            </ul>
            <h4>Template: professional email</h4>
            <p style="font-family:monospace;background:#f1f5f9;padding:10px;border-radius:8px">Subject: [Clear topic — e.g. Invoice #204, due 12 June]<br><br>Dear [Name],<br><br>[One line of purpose.] [Any detail or request, with a deadline.]<br><br>Please let me know if you need anything further.<br><br>Kind regards,<br>[Your name] · [Title] · [Phone]</p>
            <h4>Template: formal business letter</h4>
            <p>Top: your company details, the date, then the recipient's name and address. Open with "Dear Mr/Ms [Surname],". State the purpose, give the details, finish with the action you'd like. Close "Yours sincerely," (if you named them) or "Yours faithfully," (if you wrote "Dear Sir/Madam"). Leave space for a signature, then your typed name and title.</p>
            <h4>Template: internal memo</h4>
            <p style="font-family:monospace;background:#f1f5f9;padding:10px;border-radius:8px">MEMO<br>To: [team]   From: [you]   Date: [date]   Re: [subject]<br><br>[Purpose in one line, then the key points as bullets, then any action needed.]</p>
          `,
          tips: [
            "Save your finished letter/memo/email layouts as Word templates so you never start from scratch.",
            "Keep a 'snippets' note of polite phrases you reuse: greetings, sign-offs, 'please find attached', 'thank you for your patience'.",
            "If an email feels emotional, write it, wait 10 minutes, re-read, THEN send."
          ],
          shortcuts: [
            { keys: "F7", action: "Run the spelling & grammar check before sending" },
            { keys: "Ctrl + Shift + V", action: "Paste text in clean formatting" }
          ],
          practice: "Using the email template in this lesson, write a short, polite request to book a meeting room. Keep it to 4 lines. Read it out loud once, then fix anything that sounds clunky.",
          summary_tl: "Business writing: dumiretso sa punto, maikling pangungusap, simpleng salita, magalang, at i-proofread (basahin nang malakas). Templates: email (malinaw na subject, greeting, layunin, sign-off), pormal na letter (Yours sincerely kung may pangalan; Yours faithfully kung Dear Sir/Madam), memo (To/From/Date/Re). I-save bilang template.",
          quiz: [
            { q: "What's the golden rule of business writing?", choices: ["Use big, impressive words", "Get to the point fast with short, plain sentences", "Write as much as possible", "Skip the greeting"], answer: 1 },
            { q: "If you opened a letter with 'Dear Sir/Madam', how should you close it?", choices: ["Yours sincerely", "Yours faithfully", "Cheers", "Love"], answer: 1 },
            { q: "Why save your letter and memo layouts as templates?", choices: ["They print faster", "So you never start from scratch and stay consistent", "It uses less ink", "It's required by law"], answer: 1 }
          ]
        },
        {
          id: "x3",
          title: "Customer Service & Front-Desk Excellence",
          level: "Basic",
          minutes: 9,
          content: `
            <p>As an assistant or coordinator you're often the face and voice of the organisation. Great service makes people feel looked after — and reflects well on everyone.</p>
            <h4>The service mindset</h4>
            <ul>
              <li><b>Be warm and present</b> — make eye contact, smile, greet people promptly. Nobody should feel ignored.</li>
              <li><b>Listen fully</b> before responding. Let them finish; don't interrupt.</li>
              <li><b>Be helpful, not just polite</b> — "Let me find out for you" beats "I don't know".</li>
              <li><b>Follow through</b> — if you promise to call back or send something, do it, on time.</li>
            </ul>
            <h4>Greeting visitors</h4>
            <ol>
              <li>Welcome them immediately: "Good morning, welcome to [Company]. How can I help?"</li>
              <li>Find out who they're here to see and whether they have an appointment.</li>
              <li>Notify the host; offer the guest a seat and water while they wait.</li>
              <li>Sign them in if your office requires it (visitor log/badge).</li>
            </ol>
            <h4>Handling complaints or upset people — the LEAP method</h4>
            <ul>
              <li><b>L</b>isten without interrupting.</li>
              <li><b>E</b>mpathise: "I understand why that's frustrating."</li>
              <li><b>A</b>pologise for the trouble (even if it wasn't your fault).</li>
              <li><b>P</b>rovide a solution or escalate to someone who can.</li>
            </ul>
            <p>Stay calm, never take it personally, and never argue. Your composure defuses almost everything.</p>
          `,
          tips: [
            "A genuine smile changes your tone of voice — people can 'hear' it on the phone.",
            "Use the person's name once or twice; it makes service feel personal.",
            "Under-promise and over-deliver: say 'by end of day' and surprise them by lunchtime."
          ],
          shortcuts: [],
          summary_tl: "Ikaw ang mukha ng kumpanya. Service mindset: mainit at handa, makinig nang buo, matulungin ('Hahanapin ko po' kaysa 'Ewan ko'), at tuparin ang pangako. Bisita: batiin agad, alamin ang pakay, ipaalam sa host, alukin ng upuan. Sa reklamo, LEAP: Listen, Empathise, Apologise, Provide solution. Manatiling kalmado, huwag personalin.",
          quiz: [
            { q: "What does the 'E' in the LEAP method for upset people stand for?", choices: ["Explain", "Empathise", "Exit", "Email"], answer: 1 },
            { q: "What's better than telling a visitor 'I don't know'?", choices: ["Ignoring them", "'Let me find out for you'", "'That's not my job'", "Walking away"], answer: 1 },
            { q: "How should you handle someone who is upset?", choices: ["Argue back", "Stay calm, listen, empathise, and provide/escalate a solution", "Take it personally", "Hang up"], answer: 1 }
          ]
        },
        {
          id: "x4",
          title: "Office Equipment & Everyday Tech",
          level: "Basic",
          minutes: 8,
          content: `
            <p>Knowing the everyday machines makes you the reliable person who 'just sorts it out'.</p>
            <h4>Printers</h4>
            <ul>
              <li><b>Before printing</b>, use <b>Print Preview</b> (Ctrl+P shows it) to avoid wasting paper.</li>
              <li><b>Double-sided</b> (duplex) saves paper — set it in the print dialog.</li>
              <li>Common fixes: paper jam (open the tray, gently remove paper in the direction it feeds), "out of toner", or the wrong printer selected. Check the queue if nothing comes out.</li>
            </ul>
            <h4>Scanners & copiers</h4>
            <ul>
              <li><b>Scanning</b> turns paper into a digital file (usually a PDF) you can email or store. Place the page face-down, line it up with the corner arrow.</li>
              <li><b>Multi-page</b> documents: use the top feeder (ADF) and choose "PDF" so they save as one file.</li>
              <li><b>Copying</b> just makes paper duplicates — choose number of copies, single/double-sided, and size.</li>
            </ul>
            <h4>Video meetings (Teams / Zoom)</h4>
            <ul>
              <li>Test your <b>camera, microphone and speakers</b> before the meeting starts.</li>
              <li><b>Mute</b> yourself when not speaking to avoid background noise.</li>
              <li>Know how to <b>share your screen</b> and to <b>record</b> if asked.</li>
            </ul>
            <h4>Saving & sharing files</h4>
            <p><b>PDF</b> is the safe format for sending finished documents — it looks the same everywhere and can't be easily edited. For big files, share a <b>OneDrive/Drive link</b> rather than a huge attachment.</p>
          `,
          tips: [
            "Keep a simple note of how to do recurring tasks on each machine (scan-to-email, double-sided) — and where supplies/toner are kept.",
            "If a print job 'disappears', check you sent it to the right printer, then open the print queue to clear stuck jobs.",
            "Always do a quick test scan/print of one page before running 200."
          ],
          shortcuts: [
            { keys: "Ctrl + P", action: "Print (and see the print preview)" },
            { keys: "Win + Shift + S", action: "Screenshot part of the screen (great for quick help notes)" }
          ],
          practice: "Find a printer's Print Preview (Ctrl+P) for any document and look at the double-sided option. If you have a scanner, scan one page to PDF and email it to yourself.",
          summary_tl: "Kagamitan: Printer — Print Preview (Ctrl+P), i-double-sided para makatipid; ayusin ang paper jam o maling printer. Scanner — gawing PDF ang papel para i-email. Video meeting (Teams/Zoom): i-test ang camera/mic, i-mute kung di nagsasalita, alamin ang screen share. Para magpadala ng tapos na dokumento, gamitin ang PDF.",
          quiz: [
            { q: "Which file format looks the same on every device and is best for sending finished documents?", choices: ["A Word file only", "PDF", "A screenshot", "A zip file"], answer: 1 },
            { q: "What should you do before printing a long document?", choices: ["Nothing", "Use Print Preview and consider double-sided to save paper", "Print 10 test copies", "Turn off the printer"], answer: 1 },
            { q: "In a video meeting, what's good etiquette when you're not speaking?", choices: ["Talk over others", "Mute your microphone", "Turn the lights off", "Leave the call"], answer: 1 }
          ]
        },
        {
          id: "x5",
          title: "Money Basics: Invoices, Expenses & Petty Cash",
          level: "Intermediate",
          minutes: 10,
          content: `
            <p>Assistants and coordinators often handle small financial tasks. You don't need to be an accountant — just accurate, organised, and honest.</p>
            <h4>Invoices</h4>
            <ul>
              <li>An <b>invoice</b> is a bill — a request for payment. A <b>receipt</b> is proof a payment was made.</li>
              <li>A proper invoice shows: a unique <b>invoice number</b>, the date, who it's from and to, a description of goods/services, amounts, any tax, the <b>total due</b>, the <b>due date</b>, and how to pay.</li>
              <li>When invoices arrive, log them, get them approved by the right person, and pay/file them before the due date so nothing is late.</li>
            </ul>
            <h4>Expenses</h4>
            <ul>
              <li>An <b>expense claim</b> reimburses someone for money they spent for work (travel, supplies).</li>
              <li><b>Keep every receipt</b> — no receipt usually means no reimbursement. Photograph or scan them so they don't get lost.</li>
              <li>A simple expense sheet: date, what it was for, category, amount, and the receipt attached. Total it with <b>=SUM</b> in Excel.</li>
            </ul>
            <h4>Petty cash</h4>
            <ul>
              <li>A small cash float for minor purchases (stamps, milk, taxi).</li>
              <li><b>Golden rule:</b> cash out + receipts in should always equal the starting float. Record every transaction in a petty-cash log.</li>
              <li>Count it regularly and report any shortfall immediately — accuracy here protects your reputation.</li>
            </ul>
            <h4>Purchase orders (PO)</h4>
            <p>A <b>purchase order</b> is an official request to buy something, approved before the money is spent. Suppliers then match their invoice to the PO number. It keeps spending controlled and traceable.</p>
          `,
          tips: [
            "Never throw away a receipt until it's logged and filed — photograph it the moment you get it.",
            "Use an Excel table with =SUM to keep a running total of expenses or petty cash; it adds up automatically.",
            "Be scrupulously honest and accurate with money — trust here is everything, and easy to lose."
          ],
          shortcuts: [
            { keys: "Alt + =", action: "AutoSum a column of amounts in Excel" },
            { keys: "Ctrl + ;", action: "Enter today's date in a cell" }
          ],
          practice: "In Excel, make a simple expense sheet: columns for Date, Description, Category, Amount. Add 4 rows and total the Amount column with =SUM. This is exactly how a real expense log works.",
          summary_tl: "Madalas humahawak ng maliit na pera ang assistant. Invoice=hingi ng bayad; Receipt=patunay na nakabayad. Expenses: itago ang LAHAT ng resibo, gumawa ng sheet (Date, Description, Category, Amount), i-total gamit ang =SUM. Petty cash: natitirang cash + resibo = dapat tugma sa simulang halaga. Maging tapat at tama sa pera — iyon ang tiwala.",
          quiz: [
            { q: "What's the difference between an invoice and a receipt?", choices: ["They're the same", "An invoice requests payment; a receipt proves payment was made", "A receipt is bigger", "An invoice is only for cash"], answer: 1 },
            { q: "What must you keep to claim back work expenses?", choices: ["Nothing", "Every receipt", "Just a verbal note", "A screenshot of your bank app only"], answer: 1 },
            { q: "What's the golden rule of petty cash?", choices: ["Spend it fast", "Cash remaining + receipts should equal the starting float", "Never write anything down", "Keep it secret"], answer: 1 }
          ]
        }
      ]
    },

    /* ====================================================================
       MODULE 8 — EXECUTIVE ASSISTANT & ADMIN PRO
       ================================================================= */
    {
      id: "exec",
      title: "Executive Assistant & Admin Pro",
      icon: "👔",
      color: "#be123c",
      blurb: "The full scope of senior admin work: managing an executive's day, projects and events, operations, and being a trusted right hand.",
      lessons: [
        {
          id: "ea1",
          title: "Managing an Executive's Calendar & Inbox (Gatekeeping)",
          level: "Advanced",
          minutes: 11,
          content: `
            <p>An executive assistant protects the most valuable thing a leader has: their <b>time and attention</b>. You become the trusted gatekeeper.</p>
            <h4>Owning the calendar</h4>
            <ul>
              <li><b>Protect focus time</b> — block periods for deep work; don't let the day fill with back-to-back meetings.</li>
              <li><b>Add buffers</b> — travel time, prep time, and breaks between meetings so the day doesn't collapse when one runs over.</li>
              <li><b>Prioritise</b> — when two things clash, know which matters more (and ask if unsure). Decline or rebook the lesser one politely.</li>
              <li><b>Prepare ahead</b> — for each meeting, ensure your exec has the agenda, documents, and any background they need.</li>
              <li><b>Time zones & travel</b> — always confirm the zone; never book a 7am call the morning after a long flight.</li>
            </ul>
            <h4>Managing the inbox (with permission)</h4>
            <ul>
              <li><b>Triage</b> — flag what's urgent, file what's reference, draft replies for routine messages.</li>
              <li><b>Use folders/categories</b> and rules so important senders never get lost.</li>
              <li><b>Draft on their behalf</b> in their voice; let them approve sensitive replies.</li>
            </ul>
            <h4>Gatekeeping with grace</h4>
            <p>You'll say "no" or "not now" often — do it warmly. "He's fully booked this week; can I help, or shall I find time next week?" You shield your exec without making people feel shut out.</p>
          `,
          tips: [
            "Start each day with a quick 'look-ahead' so your exec knows what's coming and you've spotted any clashes.",
            "Keep a shared, colour-coded calendar so the whole team can see (appropriate) availability.",
            "Learn your exec's preferences once — how they like meetings spaced, who gets priority — and apply them consistently."
          ],
          shortcuts: [
            { keys: "Ctrl + 2", action: "Open the Calendar in Outlook" },
            { keys: "Ctrl + Shift + Q", action: "New meeting request" }
          ],
          summary_tl: "Ang executive assistant ang nag-iingat sa oras at atensyon ng lider. Kalendaryo: protektahan ang focus time, magdagdag ng buffer (travel/prep), unahin ang mas mahalaga, ihanda ang dokumento bago ang meeting. Inbox (may pahintulot): i-triage, folders/rules, mag-draft ng sagot. Mag-gatekeep nang magalang — magbigay ng alternatibo.",
          quiz: [
            { q: "What is an executive assistant primarily protecting?", choices: ["The office plants", "The executive's time and attention", "The printer", "The petty cash"], answer: 1 },
            { q: "Why add 'buffers' between meetings?", choices: ["To look busy", "So the day doesn't collapse when a meeting runs over (travel/prep/breaks)", "To waste time", "There's no reason"], answer: 1 },
            { q: "What's the best way to 'gatekeep' someone you must turn away?", choices: ["Ignore them", "Say no warmly and offer an alternative or help", "Be rude so they go away", "Promise something you can't do"], answer: 1 }
          ]
        },
        {
          id: "ea2",
          title: "Prioritising, Task Tracking & Reliable Follow-Up",
          level: "Intermediate",
          minutes: 9,
          content: `
            <p>The admin superpower is that <b>nothing falls through the cracks</b>. That comes from a system, not a good memory.</p>
            <h4>Prioritise with the urgent/important grid</h4>
            <ul>
              <li><b>Urgent + Important</b> → do now.</li>
              <li><b>Important, not urgent</b> → schedule it (this is where good work lives).</li>
              <li><b>Urgent, not important</b> → do quickly or delegate.</li>
              <li><b>Neither</b> → drop it.</li>
            </ul>
            <h4>One trusted task list</h4>
            <p>Keep <b>every</b> task in one place — a notebook, Outlook Tasks, Microsoft To Do, or a simple Excel tracker — and review it first thing each morning and last thing each day. A scattered system is no system.</p>
            <h4>Tracking other people's actions</h4>
            <p>You'll constantly chase things others owe (a signed form, a reply, a report). Keep a simple <b>follow-up log</b>: task · who · promised date · status. Send a friendly nudge as deadlines approach — politely persistent gets results.</p>
            <p style="font-family:monospace;background:#f1f5f9;padding:10px;border-radius:8px">Task            | Owner  | Due     | Status<br>Sign contract   | Sarah  | 10 Jun  | Reminded 6 Jun</p>
            <h4>Close the loop</h4>
            <p>When you finish a task, briefly confirm it's done ("Booked — confirmation attached"). That visible reliability is what makes people trust you with bigger things.</p>
          `,
          tips: [
            "End each day by writing tomorrow's top 3 priorities — you'll start focused instead of reactive.",
            "A gentle reminder isn't nagging; people are busy and usually grateful for it.",
            "Use Outlook flags or Microsoft To Do so reminders pop up automatically — don't rely on memory."
          ],
          shortcuts: [
            { keys: "Ctrl + Shift + K", action: "Create a new task in Outlook" },
            { keys: "Insert", action: "Flag the selected email for follow-up" }
          ],
          summary_tl: "Ang superpower: walang nakakalimutan — dahil sa SISTEMA, hindi memorya. Unahin gamit ang urgent/important grid. Isang trusted na task list, binabalikan araw-araw. I-track ang utang-gawa ng iba sa follow-up log (gawain, sino, deadline, status) at magpaalala nang magalang. Kapag tapos, kumpirmahin — iyon ang nagbibigay ng tiwala.",
          quiz: [
            { q: "In the urgent/important grid, what do you do with 'important but NOT urgent' tasks?", choices: ["Drop them", "Schedule them", "Ignore them", "Always do them last forever"], answer: 1 },
            { q: "What's the key to nothing falling through the cracks?", choices: ["A great memory", "One trusted task list reviewed daily", "Doing everything at once", "Avoiding tasks"], answer: 1 },
            { q: "How should you handle following up on what others owe you?", choices: ["Never remind anyone", "Keep a follow-up log and send polite, timely nudges", "Do their work for them", "Complain to everyone"], answer: 1 }
          ]
        },
        {
          id: "ea3",
          title: "Coordinating Projects, Events & Big Meetings",
          level: "Advanced",
          minutes: 12,
          content: `
            <p>Coordinators and EAs often run the moving parts of projects and events. The tools: a checklist, a timeline, and clear ownership.</p>
            <h4>Project coordination basics</h4>
            <ul>
              <li><b>Break it down</b> into tasks with an owner and a due date for each.</li>
              <li><b>Track it</b> in a simple plan (Excel, Planner, or a to-do tool): task · owner · deadline · status.</li>
              <li><b>Communicate</b> — short status updates keep everyone aligned; flag risks early, don't hide them.</li>
              <li><b>Follow up</b> relentlessly so nothing slips.</li>
            </ul>
            <h4>Planning an event or big meeting (e.g. board meeting, off-site, AGM)</h4>
            <ol>
              <li><b>Define</b> the purpose, date, budget, and guest list.</li>
              <li><b>Book</b> the venue/room, catering, equipment (AV, projector, video link).</li>
              <li><b>Invite & track RSVPs</b>; chase non-responders.</li>
              <li><b>Prepare materials</b> — agenda, packs, name cards, presentations.</li>
              <li><b>Build a run-sheet</b> — a timed schedule of exactly what happens when, and who's responsible.</li>
              <li><b>On the day</b> — arrive early, test everything, greet attendees, keep to time.</li>
              <li><b>After</b> — circulate minutes/actions, settle invoices, note what to improve next time.</li>
            </ol>
            <h4>The two tools that never fail</h4>
            <p>A <b>checklist with deadlines</b> (so nothing is forgotten) and a <b>run-sheet</b> (so the day runs to time). Master these and you can run anything from a team lunch to a conference.</p>
          `,
          tips: [
            "Always have a Plan B — backup AV, a printed copy of the slides, extra chairs. Things go wrong; prepared people stay calm.",
            "Confirm everything 24–48 hours before (venue, catering numbers, attendees) — confirmations prevent disasters.",
            "Keep a reusable event checklist template; each event makes it better."
          ],
          shortcuts: [
            { keys: "Ctrl + T", action: "Make a tracking Table in Excel (filters + auto-fill)" },
            { keys: "Ctrl + Shift + L", action: "Toggle filters to sort your task list" }
          ],
          summary_tl: "Sa project/event: hatiin sa tasks na may owner at deadline, i-track, mag-follow up. Malaking meeting/event: tukuyin ang layunin, i-book ang venue/catering/equipment, i-track ang RSVP, ihanda ang materials, gumawa ng RUN-SHEET (naka-oras na schedule). Lagi may Plan B. Kumpirmahin ang lahat 24-48 oras bago.",
          quiz: [
            { q: "What is a 'run-sheet'?", choices: ["A list of attendees", "A timed schedule of exactly what happens when, and who's responsible", "The catering bill", "A type of email"], answer: 1 },
            { q: "What two tools make events and projects run smoothly?", choices: ["A pen and paper only", "A checklist with deadlines and a run-sheet", "Luck and memory", "A bigger budget"], answer: 1 },
            { q: "When should you confirm venue, catering and attendees?", choices: ["Never", "24–48 hours before the event", "A year before only", "During the event"], answer: 1 }
          ]
        },
        {
          id: "ea4",
          title: "Admin Operations: Onboarding, Records, Compliance & Procurement",
          level: "Intermediate",
          minutes: 11,
          content: `
            <p>Administrative staff keep the office's behind-the-scenes machinery running. Here are the core operational duties.</p>
            <h4>Onboarding new staff</h4>
            <ul>
              <li>Prepare before day one: desk, computer/login, email, building access, welcome pack.</li>
              <li>Collect and file their paperwork (contract, ID, bank/tax details) — handle it confidentially.</li>
              <li>Arrange their induction schedule and introduce them around. A warm start matters.</li>
            </ul>
            <h4>Records & document management</h4>
            <ul>
              <li><b>Consistent filing</b> — agreed names and folders, one shared source of truth.</li>
              <li><b>Retention</b> — know how long to keep records (contracts, invoices, HR files) and archive or securely dispose of the rest.</li>
              <li><b>Version control</b> — keep the latest version clearly marked; avoid duplicate "finals".</li>
            </ul>
            <h4>Data protection & compliance</h4>
            <ul>
              <li>Personal data (staff, customers) must be kept <b>secure and confidential</b> — lock screens, don't share logins, follow your organisation's data-protection rules (e.g. GDPR).</li>
              <li>Only collect and keep what's needed; dispose of sensitive paper by shredding.</li>
              <li>Follow basic <b>health & safety</b> admin too — fire exits, first-aid, incident logs.</li>
            </ul>
            <h4>Supplies & procurement</h4>
            <ul>
              <li>Track stock (stationery, kitchen, toner); reorder <b>before</b> running out.</li>
              <li>Get quotes, raise purchase orders, and build good relationships with reliable suppliers.</li>
              <li>Check deliveries against the order, and match invoices to the PO before paying.</li>
            </ul>
          `,
          tips: [
            "Build an onboarding checklist so every new starter gets a consistent, welcoming first day.",
            "Treat all HR and personal data as strictly confidential — store it securely, share it with no one unauthorised.",
            "Keep a supplier contact list with account numbers and lead times so reordering is instant."
          ],
          shortcuts: [
            { keys: "Windows + L", action: "Lock your screen to protect data when you step away" }
          ],
          summary_tl: "Operasyong gawain: Onboarding — ihanda bago ang unang araw (desk, login, email, access, welcome pack), kolektahin ang papeles nang kumpidensyal. Records — pare-parehong filing, alam ang retention. Data protection — i-secure ang personal data, i-lock ang screen, mag-shred ng sensitibong papel. Procurement — i-track ang stock, mag-order bago maubos, i-match ang invoice sa PO.",
          quiz: [
            { q: "What should be ready BEFORE a new employee's first day?", choices: ["Nothing", "Desk, computer/login, email, access and a welcome pack", "Only a chair", "Their resignation letter"], answer: 1 },
            { q: "How must personal and HR data be handled?", choices: ["Shared freely", "Kept secure and strictly confidential, per data-protection rules", "Left on the desk", "Emailed to everyone"], answer: 1 },
            { q: "What's good practice with office supplies?", choices: ["Reorder after you run out", "Track stock and reorder before running out", "Never reorder", "Order ten years' worth"], answer: 1 }
          ]
        },
        {
          id: "ea5",
          title: "Being a Trusted Right Hand: Executives, Stakeholders & Discretion",
          level: "Advanced",
          minutes: 10,
          content: `
            <p>At the senior end, the role is about judgement, trust, and relationships as much as tasks. This is what makes you indispensable.</p>
            <h4>Anticipate, don't just react</h4>
            <p>The best assistants see what's needed before being asked — prepping a document the exec will want, spotting a calendar clash next week, having the travel detail ready. Think one step ahead.</p>
            <h4>Communicate 'upward' well</h4>
            <ul>
              <li><b>Be concise</b> — give leaders the headline first, detail only if needed.</li>
              <li><b>Bring solutions, not just problems</b> — "X happened; I suggest Y — okay?"</li>
              <li><b>Be honest</b> — flag issues early; never hide a mistake. Trust depends on it.</li>
            </ul>
            <h4>Managing relationships & stakeholders</h4>
            <p>You're the link between your exec and everyone else — staff, clients, board members, vendors. Be professional, friendly and even-handed with all of them. A strong network across the organisation lets you get things done fast.</p>
            <h4>Discretion & professionalism — the foundation</h4>
            <ul>
              <li>You'll know confidential things — salaries, strategy, personal matters. <b>Say nothing.</b> Discretion is your reputation.</li>
              <li>Stay calm and composed under pressure; you set the tone.</li>
              <li>Represent your exec and organisation well in every email, call and conversation.</li>
            </ul>
            <h4>Keep growing</h4>
            <p>Learn the business, ask for feedback, and keep building skills (advanced Excel, project tools, clear writing). This is the path from assistant to office manager, chief of staff, or operations roles.</p>
          `,
          tips: [
            "Anticipation is the #1 trait leaders praise — keep a 'what will they need next?' mindset.",
            "Bring a recommendation with every problem you raise; it shows judgement and saves their time.",
            "Confidentiality is built once and lost in a moment — guard it like your reputation, because it is."
          ],
          shortcuts: [],
          summary_tl: "Sa senior level, judgment at tiwala ang laman. Mag-anticipate — gawin ang kakailanganin bago pa hingin. Mag-communicate paitaas nang maikli at may solusyon (hindi lang problema), at maging tapat. Pamahalaan ang relasyon sa lahat nang propesyonal. Ang discretion ang pundasyon — tahimik sa kumpidensyal. Patuloy na matuto para umangat ang karera.",
          quiz: [
            { q: "What single trait do leaders value most in a great assistant?", choices: ["Typing speed", "Anticipating needs before being asked", "Working late", "Knowing gossip"], answer: 1 },
            { q: "How should you raise a problem to a busy executive?", choices: ["Just dump the problem", "Bring the headline AND a suggested solution", "Hide it", "Tell everyone else first"], answer: 1 },
            { q: "Why is discretion so important?", choices: ["It isn't", "You handle confidential information; trust is your reputation and easily lost", "To seem mysterious", "To avoid work"], answer: 1 }
          ]
        }
      ]
    }
  ]
};

/* Make available to the app whether loaded via <script> or modules. */
if (typeof window !== "undefined") { window.OFFICE_CURRICULUM = OFFICE_CURRICULUM; }
