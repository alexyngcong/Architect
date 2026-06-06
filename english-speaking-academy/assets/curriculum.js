/* ============================================================================
   SPEAK UP — English Speaking Academy — Curriculum Data (British English)
   ----------------------------------------------------------------------------
   Every module, lesson, tip, speaking drill, phrase and quiz lives here as
   plain data so it's easy to read, edit and extend. The models are written in
   British English (RP-style pronunciation, British vocabulary & spelling).

   Speaking widgets you can drop inside any lesson's `content` HTML:
     • Listen button:   <button class="say" data-say="Lovely weather.">🔊 Listen</button>
     • Speak & score:   <div class="speakcheck" data-target="Lovely weather, isn't it?"></div>

   To add a lesson: copy an existing { ... } block and change the text.
   ========================================================================= */

const SPEAK_CURRICULUM = {

  /* ==========================================================================
     STUDY PLAN — a guided, week-by-week path from basic to advanced.
     ====================================================================== */
  studyPlan: {
    title: "11-Week Speaking Plan (Basic → Advanced)",
    intro: "Do a little every day. Aim for ~20 minutes: read a short lesson, say every example out loud (tap 🔊 first, then copy it), pass the quiz, and finish each week in the Speaking Lab. You'll start with the everyday words and the classic mix-ups (their/there/they're), then build all the way up — by week 11 you'll handle interviews, exams and public speaking with a confident British tone.",
    days: [
      { day: 1,  focus: "Get started: sounds, greetings & your first everyday words", lessons: ["f1", "f2", "f3", "v1"] },
      { day: 2,  focus: "Everyday basics + the famous their/there/they're",          lessons: ["f4", "w1", "w2"] },
      { day: 3,  focus: "More word mix-ups + describing things",                     lessons: ["w3", "w4", "v2"] },
      { day: 4,  focus: "Start British pronunciation: vowels & the long /ɑː/",       lessons: ["p1", "p2", "p3"] },
      { day: 5,  focus: "British sounds & confusing meaning twins",                  lessons: ["p4", "w5", "w6"] },
      { day: 6,  focus: "Tone & music of English + words that go together",          lessons: ["t1", "t2", "v3"] },
      { day: 7,  focus: "Intonation, connected speech & phrasal verbs",              lessons: ["t3", "t4", "t5", "v4"] },
      { day: 8,  focus: "Everyday British conversation & small talk",                lessons: ["c1", "c2", "c3", "c4"] },
      { day: 9,  focus: "Grammar you speak + precise, advanced vocabulary",          lessons: ["g1", "g2", "g3", "g4", "v5"] },
      { day: 10, focus: "Fluency, idioms & storytelling",                            lessons: ["x1", "x2", "x3", "x4"] },
      { day: 11, focus: "Exams & the working world: IELTS, interviews, presenting",  lessons: ["i1", "i2", "j1", "s1"] }
    ]
  },

  /* ==========================================================================
     PRONUNCIATION DRILLS — used by the Speaking Lab (mic-scored).
     ====================================================================== */
  drills: [
    {
      title: "Minimal pairs — vowels",
      note: "Two words that differ by one sound. Say each sentence; the mic checks you.",
      items: [
        "I need to sit on this seat.",
        "The ship will leave the sheep behind.",
        "He hit the heat of the moment.",
        "Pull the full bag, please.",
        "Don't slip on the sleep-deprived steps."
      ]
    },
    {
      title: "Tricky consonants — TH, V/W, R/L",
      note: "British speakers keep these crisp. Listen, then copy carefully.",
      items: [
        "Think of three thin things.",
        "The weather is rather lovely.",
        "Very well, we will wait.",
        "Really lovely yellow lorry.",
        "I'd rather gather further."
      ]
    },
    {
      title: "Word & sentence stress",
      note: "Stress the strong syllable; glide over the rest. CAPITALS show the beat.",
      items: [
        "I'd absolutely LOVE to come.",
        "It's a beautiful, comfortable flat.",
        "Could you possibly repeat that?",
        "To be honest, I completely agree.",
        "That's a fantastic opportunity."
      ]
    },
    {
      title: "Polite British phrasing",
      note: "The softer, more indirect British tone. Match the gentle rhythm.",
      items: [
        "Sorry to bother you, could I just ask a quick question?",
        "Would you mind passing me the menu?",
        "I'm afraid I can't make it on Tuesday.",
        "That's not quite what I had in mind.",
        "Lovely, thank you ever so much."
      ]
    },
    {
      title: "Fluency phrases — sound natural",
      note: "Useful 'chunks' fluent speakers say without thinking.",
      items: [
        "To be honest with you, it depends.",
        "Having said that, I do see your point.",
        "At the end of the day, it's up to you.",
        "I'd say it's well worth a try.",
        "Let me think about that for a second."
      ]
    }
  ],

  /* ==========================================================================
     PHRASEBOOK — tap 🔊 to hear each line in a British voice.
     ====================================================================== */
  phrasebook: [
    { cat: "Greetings & small talk", items: [
      { en: "Morning! How are you keeping?", note: "Friendly British greeting." },
      { en: "Not too bad, thanks. You?", note: "Classic understated reply." },
      { en: "Lovely weather we're having, isn't it?", note: "The British small-talk opener." },
      { en: "Right, I'd best be off. Lovely to see you.", note: "Polite way to end a chat." }
    ]},
    { cat: "Being polite & indirect", items: [
      { en: "Sorry to bother you, but could you help me for a moment?", note: "Soft, polite request." },
      { en: "Would you mind if I opened the window?", note: "Asking permission politely." },
      { en: "I'm afraid I don't quite agree.", note: "Disagreeing gently." },
      { en: "It's no trouble at all.", note: "Reassuring someone." }
    ]},
    { cat: "Café, pub & shops", items: [
      { en: "Could I get a flat white to take away, please?", note: "Ordering a coffee." },
      { en: "I'll have the fish and chips, please.", note: "Ordering food." },
      { en: "Are you in the queue?", note: "Queuing — very British." },
      { en: "Keep the change.", note: "Tipping." }
    ]},
    { cat: "Interviews", items: [
      { en: "Thank you for having me — I'm delighted to be here.", note: "Warm opening." },
      { en: "In my previous role, I was responsible for…", note: "Describing experience." },
      { en: "A good example of that would be…", note: "Leading into a STAR story." },
      { en: "That's a great question. May I take a moment to think?", note: "Buying thinking time." }
    ]},
    { cat: "Presentations & meetings", items: [
      { en: "Thanks for coming. Today I'd like to talk about…", note: "Opening a talk." },
      { en: "Let me give you a bit of background.", note: "Setting context." },
      { en: "To sum up, there are three key points.", note: "Signposting the close." },
      { en: "I'd be happy to take any questions.", note: "Inviting Q&A." }
    ]},
    { cat: "Buying time & repairing", items: [
      { en: "That's a good point. Let me think for a second.", note: "Pause without 'um'." },
      { en: "Sorry, what I meant to say was…", note: "Correcting yourself smoothly." },
      { en: "How can I put this?", note: "Natural thinking phrase." },
      { en: "Could you say that again, please?", note: "Asking for repetition." }
    ]}
  ],

  /* ==========================================================================
     MOCK TESTS — Speaking Lab recorded exams with timers & self-assessment.
     ====================================================================== */
  mockTests: {
    ielts: {
      title: "IELTS Speaking — Full Mock",
      icon: "📊",
      prompts: [
        { tag: "Part 1 · Introduction", q: "Let's talk about your home town. Where are you from, and what's it like?", speak: 40, prep: 0 },
        { tag: "Part 1", q: "Do you prefer spending time indoors or outdoors? Why?", speak: 40, prep: 0 },
        { tag: "Part 2 · Cue card", q: "Describe a person who has inspired you.", detail: "You should say: who they are, how you know them, what they did, and explain why they inspired you. You have 1 minute to prepare and should speak for 1–2 minutes.", speak: 120, prep: 60 },
        { tag: "Part 3 · Discussion", q: "Do you think young people today have good role models? Why or why not?", speak: 60, prep: 0 },
        { tag: "Part 3", q: "How has the idea of a 'hero' changed over time?", speak: 60, prep: 0 }
      ],
      rubricTitle: "Tick what you achieved (the four IELTS criteria)",
      rubric: [
        "Fluency: I kept going without long pauses or lots of self-correction.",
        "Coherence: I organised ideas with linkers (because, however, for example).",
        "Vocabulary: I used some less common, topic-specific words and at least one idiom.",
        "Vocabulary: I paraphrased instead of repeating the same word.",
        "Grammar: I used a mix of simple and complex sentences.",
        "Grammar: most of my sentences were accurate.",
        "Pronunciation: my word and sentence stress were clear.",
        "Pronunciation: my intonation rose and fell naturally (not flat).",
        "Part 2: I spoke for the full 1–2 minutes and covered all four bullet points.",
        "Overall: I sounded calm, confident and easy to understand."
      ],
      band: function (p) { return p >= 90 ? "Band 8–9" : p >= 70 ? "Band 6.5–7.5" : p >= 50 ? "Band 5.5–6" : "Band 4–5 (keep practising)"; },
      tips: [
        "Never answer Part 1 with one word — add a reason and a small example.",
        "In Part 2, use your 1 minute to jot 3–4 keywords for each bullet, not full sentences.",
        "Stretch your answer with 'The reason I say that is…' to show range.",
        "Don't memorise speeches — examiners spot them. Sound like you're really thinking."
      ]
    },
    interview: {
      title: "Job Interview — Mock",
      icon: "💼",
      prompts: [
        { tag: "Opener", q: "Tell me a little about yourself.", detail: "Aim for a 60–90 second 'professional summary': present, past, future.", speak: 90, prep: 30 },
        { tag: "Motivation", q: "Why do you want to work here, and why this role?", speak: 60, prep: 20 },
        { tag: "Competency (STAR)", q: "Tell me about a time you faced a difficult challenge at work.", detail: "Use STAR: Situation, Task, Action, Result.", speak: 120, prep: 40 },
        { tag: "Self-awareness", q: "What would you say is your greatest weakness?", speak: 60, prep: 20 },
        { tag: "Your questions", q: "Do you have any questions for us?", detail: "Always say yes — ask one thoughtful question.", speak: 45, prep: 15 }
      ],
      rubricTitle: "Rate your interview answers",
      rubric: [
        "I opened with a clear, structured 'about me' (present → past → future).",
        "I gave specific examples, not vague generalisations.",
        "My STAR answer had a clear Situation, Task, Action and Result.",
        "I quantified a result where possible (numbers, time saved, etc.).",
        "My weakness answer was honest and showed how I'm improving.",
        "I sounded positive about the company and the role.",
        "I spoke at a calm, steady pace and didn't ramble.",
        "I used a confident, professional tone — warm but not over-casual.",
        "I asked at least one intelligent question at the end.",
        "I'd hire me based on that answer."
      ],
      band: function (p) { return p >= 90 ? "Strong hire" : p >= 70 ? "Good — interview-ready" : p >= 50 ? "Promising — needs polish" : "Keep practising"; },
      tips: [
        "Structure 'tell me about yourself' as Present → Past → Future. Practise it until it's smooth.",
        "For weaknesses, pick a real one and end with the action you're taking to fix it.",
        "Keep STAR answers to ~90 seconds: spend most of it on Action and Result.",
        "Research the company so your 'why us?' answer is specific, not generic."
      ]
    },
    presentation: {
      title: "Presentation — Mock",
      icon: "🎤",
      prompts: [
        { tag: "Open", q: "Deliver a 60-second opening for a talk titled 'A change I'd like to see'.", detail: "Hook → who you are → what you'll cover.", speak: 60, prep: 60 },
        { tag: "Body", q: "Explain your single most important point with one clear example.", detail: "Signpost it: 'My main point is…'", speak: 90, prep: 30 },
        { tag: "Close", q: "Give a strong 30-second closing with a call to action.", speak: 40, prep: 20 }
      ],
      rubricTitle: "Rate your delivery",
      rubric: [
        "My opening hooked the listener in the first 10 seconds.",
        "I signposted clearly ('First… / My main point is… / To sum up…').",
        "I used one concrete example, not just abstract claims.",
        "I varied my pace and paused for emphasis.",
        "My intonation was lively — I didn't sound flat or monotone.",
        "I stressed the key words in each sentence.",
        "My closing was memorable and ended with a clear call to action.",
        "I sounded confident and in control throughout."
      ],
      band: function (p) { return p >= 85 ? "Compelling speaker" : p >= 60 ? "Solid — engaging" : "Keep building confidence"; },
      tips: [
        "Open with a question, a surprising fact, or a short story — never 'Erm, so…'.",
        "Pause before and after your key message; silence makes it land.",
        "Rule of three: audiences remember points grouped in threes.",
        "End on purpose: restate your message and tell people exactly what to do next."
      ]
    }
  },

  /* ==========================================================================
     MODULES
     ====================================================================== */
  modules: [

    /* ----- 1. SPEAKING FOUNDATIONS ----------------------------------------- */
    {
      id: "found", icon: "🗣️", color: "#0ea5a4",
      title: "Speaking Foundations",
      blurb: "Start here. The sounds of English, greetings, introducing yourself and everyday basics — with a British tone.",
      lessons: [
        {
          id: "f1", level: "Basic", minutes: 8,
          title: "How to use this course (and how speaking works)",
          content: `
            <p>Welcome! Speaking a language is a <b>physical skill</b>, like swimming or playing an instrument. You can't learn it only by reading — you learn it by <b>making the sounds with your mouth, again and again</b>. This course is built for exactly that.</p>
            <h3>The golden rule: say everything out loud</h3>
            <p>Whenever you see a <button class="say" data-say="Hello, lovely to meet you.">🔊 Listen</button> button, tap it to hear a British voice, then <b>copy it aloud</b>. Don't whisper — speak properly, as if someone is listening.</p>
            <h3>Check yourself with the microphone</h3>
            <p>In many lessons you'll see a box like the one below. Tap <b>Listen</b>, then tap <b>Speak &amp; check</b> and say the sentence. The app shows how close you were.</p>
            <div class="speakcheck" data-target="Hello, my name is Sam and I'm learning English."></div>
            <h3>Your weekly path</h3>
            <ol>
              <li>Work top to bottom through the modules (Basic → Advanced).</li>
              <li>Read each short lesson and <b>say every example aloud</b>.</li>
              <li>Pass the quiz (70%+) to tick the lesson off.</li>
              <li>Take the <b>Module Exam</b> (80%) to earn the badge.</li>
              <li>Visit the <b>Speaking Lab</b> for drills and mock exams.</li>
            </ol>
            <blockquote>Tip: it's better to practise 15 minutes <b>every day</b> than two hours once a week. Little and often wins.</blockquote>`,
          tips: [
            "Tap 🔊 first, then say it back immediately while the sound is fresh.",
            "Use Chrome or Edge for microphone scoring; any browser plays the model voice.",
            "Don't chase perfection — chase repetition. Fluency grows from mileage."
          ],
          practice: "Say this out loud three times, a little louder each time: <button class=\"say\" data-say=\"I am learning to speak English with confidence.\">🔊 Listen</button> “I am learning to speak English with confidence.”",
          quiz: [
            { q: "What is the single most important habit in this course?", choices: ["Reading silently", "Saying everything out loud", "Memorising grammar rules", "Watching films only"], answer: 1 },
            { q: "How long should you ideally practise?", choices: ["3 hours once a week", "A little every day", "Only before exams", "Never — just read"], answer: 1 },
            { q: "What does the 'Speak & check' box do?", choices: ["Translates words", "Records a song", "Hears you and scores how close you were", "Marks the lesson complete"], answer: 2 }
          ]
        },
        {
          id: "f2", level: "Basic", minutes: 10,
          title: "The sounds of English — a friendly tour",
          content: `
            <p>English has about <b>44 sounds</b> but only 26 letters, so spelling and sound often disagree. The good news: you only need to train a handful of tricky ones. Here are the sounds learners most often need.</p>
            <h3>Vowels that trip people up</h3>
            <table>
              <tr><th>Sound</th><th>Example</th><th>Listen</th></tr>
              <tr><td>Long /iː/ vs short /ɪ/</td><td>sheep / ship</td><td><button class="say" data-say="sheep, ship">🔊</button></td></tr>
              <tr><td>/æ/ vs /ʌ/</td><td>cat / cut</td><td><button class="say" data-say="cat, cut">🔊</button></td></tr>
              <tr><td>British /ɑː/</td><td>bath, glass, can't</td><td><button class="say" data-say="bath, glass, can't">🔊</button></td></tr>
            </table>
            <h3>Consonants worth polishing</h3>
            <ul>
              <li><b>TH</b> — put your tongue between your teeth: <button class="say" data-say="think, this, three, the">🔊 think / this</button></li>
              <li><b>V vs W</b> — <button class="say" data-say="very, well, vine, wine">🔊 very / well</button> (teeth on lip for V; round lips for W)</li>
              <li><b>The British R</b> — softer, and often <b>silent</b> at the end: "car" sounds like <button class="say" data-say="car, water, mother">🔊 cah, watah, muthah</button></li>
            </ul>
            <h3>Try a few</h3>
            <div class="speakcheck" data-target="I think this is the third one."></div>
            <div class="speakcheck" data-target="The water in the harbour is cold."></div>
            <p>Don't worry about getting every sound perfect today. Notice them, copy them, and they'll improve over the weeks.</p>`,
          tips: [
            "TH is the famous one: tongue lightly between the teeth, push a little air.",
            "In British English, the R at the end of a word is usually not pronounced.",
            "Long and short vowels (sheep/ship) change meaning — give long vowels real length."
          ],
          practice: "Practise the silent British R: <button class=\"say\" data-say=\"My father parked the car near the harbour.\">🔊 Listen</button> then say “My father parked the car near the harbour.” aloud.",
          quiz: [
            { q: "In British English, the 'r' at the end of 'car' is usually…", choices: ["Rolled strongly", "Pronounced like American R", "Silent / very soft", "Said as an L"], answer: 2 },
            { q: "How do you make the TH sound?", choices: ["Lips together", "Tongue between the teeth", "Back of the throat", "Round the lips"], answer: 1 },
            { q: "Why do 'sheep' and 'ship' sound different?", choices: ["Different first letters", "Long vs short vowel", "One is louder", "They don't"], answer: 1 }
          ]
        },
        {
          id: "f3", level: "Basic", minutes: 9,
          title: "Greetings & introducing yourself",
          content: `
            <p>First impressions are made in seconds. Let's build a warm, natural British introduction you can use anywhere.</p>
            <h3>Greetings by formality</h3>
            <table>
              <tr><th>Situation</th><th>Say</th><th></th></tr>
              <tr><td>Casual</td><td>Hi! / Hiya! / Morning!</td><td><button class="say" data-say="Hi! Hiya! Morning!">🔊</button></td></tr>
              <tr><td>Neutral</td><td>Hello, how are you?</td><td><button class="say" data-say="Hello, how are you?">🔊</button></td></tr>
              <tr><td>Polite/formal</td><td>Good morning, pleased to meet you.</td><td><button class="say" data-say="Good morning, pleased to meet you.">🔊</button></td></tr>
            </table>
            <h3>A simple introduction formula</h3>
            <p><b>Name → where you're from → what you do → a friendly line.</b></p>
            <div class="ex">"Hello, I'm Maria. I'm from Spain, and I work as a nurse. It's lovely to meet you." <button class="say" data-say="Hello, I'm Maria. I'm from Spain, and I work as a nurse. It's lovely to meet you.">🔊</button></div>
            <h3>Replying to "How are you?"</h3>
            <p>British replies are often modest: <button class="say" data-say="Not too bad, thanks. And you?">🔊 Not too bad, thanks. And you?</button> Notice you almost always <b>return the question</b>.</p>
            <h3>Your turn</h3>
            <div class="speakcheck" data-target="Hello, I'm learning English and it's lovely to meet you." data-hint="Replace the name and copy the warm, friendly tone."></div>`,
          tips: [
            "Always 'return' the question: “…and you?” keeps the conversation flowing.",
            "“Lovely to meet you” is warm and very British — better than a flat “nice”.",
            "Smile while you speak — it actually changes your tone for the better."
          ],
          practice: "Build your own introduction using the formula (name → origin → job/study → friendly line) and say it aloud five times until it's smooth.",
          quiz: [
            { q: "After 'How are you?', a natural British reply is…", choices: ["I am fine. (full stop)", "Not too bad, thanks. And you?", "Yes.", "No comment."], answer: 1 },
            { q: "A good introduction formula is…", choices: ["Job → nothing else", "Name → origin → what you do → friendly line", "Only your name", "A long life story"], answer: 1 },
            { q: "Which is the most polite/formal greeting?", choices: ["Hiya!", "Morning!", "Good morning, pleased to meet you.", "Yo"], answer: 2 }
          ]
        },
        {
          id: "f4", level: "Basic", minutes: 10,
          title: "Everyday essentials: numbers, time, days & politeness",
          content: `
            <p>These are the words you'll use every single day. Get them automatic and speaking becomes far easier.</p>
            <h3>Please, thank you & sorry — the British trio</h3>
            <p>British English runs on politeness. Sprinkle these everywhere:</p>
            <ul>
              <li><button class="say" data-say="Could I have a coffee, please?">🔊</button> “Could I have a coffee, <b>please</b>?”</li>
              <li><button class="say" data-say="Thank you so much, that's very kind.">🔊</button> “<b>Thank you</b> so much, that's very kind.”</li>
              <li><button class="say" data-say="Sorry, could you say that again?">🔊</button> “<b>Sorry</b>, could you say that again?”</li>
            </ul>
            <h3>Telling the time</h3>
            <table>
              <tr><th>Clock</th><th>British way</th><th></th></tr>
              <tr><td>9:00</td><td>nine o'clock</td><td><button class="say" data-say="nine o'clock">🔊</button></td></tr>
              <tr><td>9:15</td><td>quarter past nine</td><td><button class="say" data-say="quarter past nine">🔊</button></td></tr>
              <tr><td>9:30</td><td>half past nine</td><td><button class="say" data-say="half past nine">🔊</button></td></tr>
              <tr><td>9:45</td><td>quarter to ten</td><td><button class="say" data-say="quarter to ten">🔊</button></td></tr>
            </table>
            <h3>Practise a real moment</h3>
            <div class="speakcheck" data-target="Sorry to bother you, could you tell me the time, please?"></div>
            <div class="speakcheck" data-target="The meeting is at half past two."></div>`,
          tips: [
            "“Quarter past / half past / quarter to” is the everyday British way to tell the time.",
            "“Sorry” in Britain often just means 'excuse me' — it's a politeness lubricant.",
            "Adding 'please' and 'could' turns an order into a polite request instantly."
          ],
          practice: "Say the current time out loud the British way (e.g. “It's twenty past three”), then ask a polite question using “Sorry to bother you, could you…?”",
          quiz: [
            { q: "9:45 in the British style is…", choices: ["nine forty-five only", "quarter to ten", "three quarters nine", "ten to nine"], answer: 1 },
            { q: "Which makes a request politest?", choices: ["Give me water.", "Water.", "Could I have some water, please?", "I want water now."], answer: 2 },
            { q: "In Britain, saying 'sorry' to a stranger usually means…", choices: ["You did something terrible", "Excuse me / a polite softener", "You're sad", "Goodbye"], answer: 1 }
          ]
        }
      ]
    },

    /* ----- 1b. CONFUSING WORDS & CORRECT USAGE ----------------------------- */
    {
      id: "words", icon: "🧩", color: "#6366f1",
      title: "Confusing Words & Correct Usage",
      blurb: "The words everyone mixes up — their/there/they're, your/you're, its/it's, to/too/two and many more. Learn the meaning of each and exactly when to use it.",
      lessons: [
        {
          id: "w1", level: "Basic", minutes: 9,
          title: "there · their · they're (the famous three)",
          content: `
            <p>These three sound <b>exactly the same</b> when spoken, but they mean completely different things. Getting them right is one of the clearest signs of a careful English user. Let's make it simple.</p>
            <h3>1. <span style="color:#6366f1">there</span> — a place, or "it exists"</h3>
            <p>Think of the word <b>here</b> hiding inside <b>t-here</b>. It points to a place, or starts a sentence about something existing.</p>
            <ul>
              <li><button class="say" data-say="The cafe is over there, next to the bank.">🔊</button> "The cafe is over <b>there</b>, next to the bank." (a place)</li>
              <li><button class="say" data-say="There is a problem with my order.">🔊</button> "<b>There</b> is a problem with my order." (it exists)</li>
            </ul>
            <h3>2. <span style="color:#6366f1">their</span> — belonging to them</h3>
            <p>It shows possession (like <i>my, your, our</i>). Tip: it has the word <b>heir</b> inside (an heir owns things).</p>
            <ul>
              <li><button class="say" data-say="The students forgot their books.">🔊</button> "The students forgot <b>their</b> books." (the books belong to them)</li>
              <li><button class="say" data-say="My neighbours painted their front door blue.">🔊</button> "My neighbours painted <b>their</b> front door blue."</li>
            </ul>
            <h3>3. <span style="color:#6366f1">they're</span> — short for "they are"</h3>
            <p>The apostrophe means letters are missing. If you can replace it with <b>"they are"</b>, this is the one.</p>
            <ul>
              <li><button class="say" data-say="They're going to be late.">🔊</button> "<b>They're</b> going to be late." (= they are going)</li>
              <li><button class="say" data-say="I like them because they're so friendly.">🔊</button> "I like them because <b>they're</b> so friendly." (= they are)</li>
            </ul>
            <h3>The quick test</h3>
            <blockquote>Try saying <b>"they are"</b> in the sentence. If it fits → <b>they're</b>. If not, ask: is it a <b>place / exists</b> (there) or does something <b>belong to them</b> (their)?</blockquote>
            <h3>Say all three correctly</h3>
            <div class="speakcheck" data-target="They're putting their bags over there."></div>`,
          tips: [
            "they're = they are. Always. If 'they are' doesn't fit, it's not this one.",
            "there has 'here' in it — both are about place.",
            "their = belonging to them (their car, their idea, their fault)."
          ],
          practice: "Say this sentence aloud three times and notice how all three sound identical but mean different things: <button class=\"say\" data-say=\"They're sure their keys are over there.\">🔊 Listen</button> “They're sure their keys are over there.”",
          quiz: [
            { q: "Choose the correct sentence:", choices: ["Their going to the park.", "They're going to the park.", "There going to the park.", "Theyre going to the park."], answer: 1 },
            { q: "“___ house is the green one.” (belongs to them)", choices: ["There", "They're", "Their", "Theyr"], answer: 2 },
            { q: "“Is ___ any milk left?” (it exists)", choices: ["their", "they're", "there", "thair"], answer: 2 },
            { q: "Which is the quick test for 'they're'?", choices: ["Does it name a place?", "Can you replace it with 'they are'?", "Does it own something?", "Is it plural?"], answer: 1 }
          ]
        },
        {
          id: "w2", level: "Basic", minutes: 8,
          title: "your · you're  and  its · it's",
          content: `
            <p>Two more pairs that trip up even native speakers. The rule is the same each time: <b>the apostrophe means two words squashed together.</b></p>
            <h3>your vs you're</h3>
            <ul>
              <li><b>your</b> = belonging to you. <button class="say" data-say="Is this your coat?">🔊</button> "Is this <b>your</b> coat?"</li>
              <li><b>you're</b> = you are. <button class="say" data-say="You're very kind.">🔊</button> "<b>You're</b> very kind." (= you are very kind)</li>
            </ul>
            <p><b>Test:</b> say "you are". Fits? Use <b>you're</b>. Doesn't fit? Use <b>your</b>.</p>
            <div class="ex">"<b>You're</b> going to love <b>your</b> new job." <button class="say" data-say="You're going to love your new job.">🔊</button></div>
            <h3>its vs it's</h3>
            <p>This one feels backwards, so learn it carefully:</p>
            <ul>
              <li><b>it's</b> = it is / it has. <button class="say" data-say="It's raining again.">🔊</button> "<b>It's</b> raining." (= it is raining)</li>
              <li><b>its</b> = belonging to it. <button class="say" data-say="The dog wagged its tail.">🔊</button> "The dog wagged <b>its</b> tail." (the tail belongs to it)</li>
            </ul>
            <blockquote>Remember: <b>it's</b> ALWAYS means "it is" or "it has". If you can't say "it is", drop the apostrophe → <b>its</b>.</blockquote>
            <h3>Your turn</h3>
            <div class="speakcheck" data-target="You're sure it's going to rain, so bring your umbrella."></div>`,
          tips: [
            "Apostrophe = missing letters. you're = you (a)re. it's = it (i)s.",
            "No apostrophe for possession here: your, its (like his, hers — none of those have apostrophes).",
            "When unsure, say the full words 'you are' / 'it is' in your head."
          ],
          practice: "Read aloud, choosing in your head why each word is right: <button class=\"say\" data-say=\"You're right that your phone is great, but its battery is weak and it's getting old.\">🔊 Listen</button> “You're right that your phone is great, but its battery is weak and it's getting old.”",
          quiz: [
            { q: "“___ welcome to stay for dinner.”", choices: ["Your", "You're", "Yor", "Youre"], answer: 1 },
            { q: "“The company changed ___ logo.” (belongs to it)", choices: ["it's", "its", "its'", "it is"], answer: 1 },
            { q: "“___ been a long day.” (= it has)", choices: ["Its", "It's", "Its'", "It"], answer: 1 },
            { q: "Which never takes an apostrophe?", choices: ["it's meaning 'it is'", "you're meaning 'you are'", "its / your meaning belonging", "none of them"], answer: 2 }
          ]
        },
        {
          id: "w3", level: "Basic", minutes: 8,
          title: "to · too · two  and  then · than",
          content: `
            <p>Tiny words, big difference. Once you see the pattern, you'll never mix them up.</p>
            <h3>to · too · two</h3>
            <table>
              <tr><th>Word</th><th>Meaning</th><th>Example</th></tr>
              <tr><td><b>to</b></td><td>direction, or before a verb</td><td>I'm going <b>to</b> work. / I want <b>to</b> sleep.</td></tr>
              <tr><td><b>too</b></td><td>also, or "more than enough"</td><td>I'm coming <b>too</b>. / It's <b>too</b> hot.</td></tr>
              <tr><td><b>two</b></td><td>the number 2</td><td>I have <b>two</b> sisters.</td></tr>
            </table>
            <p><button class="say" data-say="I want to buy two coffees, and a cake too.">🔊</button> "I want <b>to</b> buy <b>two</b> coffees, and a cake <b>too</b>."</p>
            <p><b>Tip:</b> <b>too</b> has an extra 'o' — think "too much", an extra o for extra meaning (also / excessively).</p>
            <h3>then vs than</h3>
            <ul>
              <li><b>then</b> = time / next (it has an 'e' like <b>tim<u>e</u></b>... or like "and th<b>e</b>n"). <button class="say" data-say="We had dinner, then we watched a film.">🔊</button> "We had dinner, <b>then</b> we watched a film."</li>
              <li><b>than</b> = comparison. <button class="say" data-say="She is taller than her brother.">🔊</button> "She is taller <b>than</b> her brother."</li>
            </ul>
            <blockquote>If you're <b>comparing</b> two things (bigger, better, more, less) → <b>than</b>. If it's about <b>time / order</b> → <b>then</b>.</blockquote>
            <div class="speakcheck" data-target="It's too cold to go out, so first we'll eat, then we'll decide."></div>`,
          tips: [
            "too = also / excessively (the extra 'o' = extra).",
            "two is the number — it has a 'w' like twin, twice, twelve.",
            "than = comparison (bigger than); then = time (and then)."
          ],
          practice: "Say it aloud and explain to yourself why each is correct: <button class=\"say\" data-say=\"Two of us were too tired to talk, so we ate, then slept better than before.\">🔊 Listen</button> “Two of us were too tired to talk, so we ate, then slept better than before.”",
          quiz: [
            { q: "“This bag is ___ heavy to lift.”", choices: ["to", "two", "too", "tow"], answer: 2 },
            { q: "“I'd love ___ join you.”", choices: ["to", "too", "two", "tu"], answer: 0 },
            { q: "“He's older ___ me.”", choices: ["then", "than", "thane", "thn"], answer: 1 },
            { q: "“Finish your work, ___ relax.”", choices: ["than", "then", "thn", "thane"], answer: 1 }
          ]
        },
        {
          id: "w4", level: "Intermediate", minutes: 10,
          title: "More sound-alikes: where/wear/we're, here/hear, buy/by/bye & friends",
          content: `
            <p>English is full of <b>homophones</b> — words that sound the same but are spelled and used differently. Here are the most useful ones to master for clear speaking and writing.</p>
            <h3>where · wear · we're</h3>
            <ul>
              <li><b>where</b> = which place? <button class="say" data-say="Where are you going?">🔊</button> "<b>Where</b> are you going?"</li>
              <li><b>wear</b> = to have clothes on. <button class="say" data-say="What will you wear tonight?">🔊</button> "What will you <b>wear</b> tonight?"</li>
              <li><b>we're</b> = we are. <button class="say" data-say="We're almost ready.">🔊</button> "<b>We're</b> almost ready." (= we are)</li>
            </ul>
            <h3>here · hear</h3>
            <ul>
              <li><b>here</b> = this place (opposite of there). <button class="say" data-say="Come and sit here.">🔊</button> "Come and sit <b>here</b>."</li>
              <li><b>hear</b> = to listen with your ears (it has <b>ear</b> in it!). <button class="say" data-say="I can't hear you.">🔊</button> "I can't <b>hear</b> you."</li>
            </ul>
            <h3>A handy homophone table</h3>
            <table>
              <tr><th>Sounds like</th><th>Words & meanings</th></tr>
              <tr><td>buy / by / bye</td><td>buy (purchase) · by (next to / via) · bye (goodbye)</td></tr>
              <tr><td>new / knew</td><td>new (not old) · knew (past of know)</td></tr>
              <tr><td>no / know</td><td>no (opposite of yes) · know (have knowledge)</td></tr>
              <tr><td>write / right</td><td>write (with a pen) · right (correct / direction)</td></tr>
              <tr><td>flour / flower</td><td>flour (for baking) · flower (a plant)</td></tr>
              <tr><td>break / brake</td><td>break (smash / a rest) · brake (to stop a car)</td></tr>
            </table>
            <p><button class="say" data-say="I knew you would buy a new flower by the shop on the right.">🔊</button> "I <b>knew</b> you would <b>buy</b> a <b>new flower by</b> the shop on the <b>right</b>."</p>
            <div class="speakcheck" data-target="We're not sure where to wear these, but we can hear the music from here."></div>`,
          tips: [
            "hear has 'ear' in it — you hear with your ears.",
            "we're = we are; wear = clothing; where = place.",
            "Read tricky sentences slowly and picture the meaning of each word."
          ],
          practice: "Make one sentence using buy, by AND bye, then say it aloud — e.g. “Bye! I'll buy the bread on my way by the shop.”",
          quiz: [
            { q: "“I can't ___ the TV — turn it up.”", choices: ["here", "hear", "heir", "hair"], answer: 1 },
            { q: "“___ meeting them at noon.” (= we are)", choices: ["Where", "Wear", "We're", "Were"], answer: 2 },
            { q: "“She ___ the answer straight away.” (past of know)", choices: ["new", "knew", "gnu", "new"], answer: 1 },
            { q: "Which means 'to stop a car'?", choices: ["break", "brake", "bray", "brace"], answer: 1 }
          ]
        },
        {
          id: "w5", level: "Intermediate", minutes: 11,
          title: "Meaning twins: affect/effect, accept/except, advice/advise, practise/practice",
          content: `
            <p>These pairs aren't always homophones, but their meanings get mixed up constantly. Learn the difference and you'll sound noticeably more precise.</p>
            <h3>affect vs effect</h3>
            <p><b>affect</b> is usually a <b>verb</b> (an action); <b>effect</b> is usually a <b>noun</b> (a result). Memory trick: <b>A</b>ffect = <b>A</b>ction, <b>E</b>ffect = <b>E</b>nd result.</p>
            <ul>
              <li><button class="say" data-say="The weather affects my mood.">🔊</button> "The weather <b>affects</b> my mood." (verb)</li>
              <li><button class="say" data-say="The weather has an effect on my mood.">🔊</button> "The weather has an <b>effect</b> on my mood." (noun)</li>
            </ul>
            <h3>accept vs except</h3>
            <ul>
              <li><b>accept</b> = to receive / say yes. <button class="say" data-say="I accept your offer.">🔊</button> "I <b>accept</b> your offer."</li>
              <li><b>except</b> = apart from. <button class="say" data-say="Everyone came except Tom.">🔊</button> "Everyone came <b>except</b> Tom."</li>
            </ul>
            <h3>advice vs advise</h3>
            <ul>
              <li><b>advice</b> (noun, sounds like "ice") = the guidance itself. <button class="say" data-say="Can I give you some advice?">🔊</button> "Can I give you some <b>advice</b>?"</li>
              <li><b>advise</b> (verb, sounds like "ize") = the action of giving it. <button class="say" data-say="I advise you to rest.">🔊</button> "I <b>advise</b> you to rest."</li>
            </ul>
            <h3>practise vs practice (British English)</h3>
            <p>In British English, <b>practise</b> is the <b>verb</b> and <b>practice</b> is the <b>noun</b> (like advise/advice).</p>
            <ul>
              <li><button class="say" data-say="I practise speaking every day.">🔊</button> "I <b>practise</b> speaking every day." (verb)</li>
              <li><button class="say" data-say="Daily practice makes a big difference.">🔊</button> "Daily <b>practice</b> makes a big difference." (noun)</li>
            </ul>
            <blockquote>The "-ice" version is the thing (noun); the "-ise" version is the doing (verb). Same pattern for advice/advise and practice/practise.</blockquote>
            <div class="speakcheck" data-target="My advice is to accept the offer, because it will affect your future."></div>`,
          tips: [
            "Affect = Action (verb); Effect = End result (noun).",
            "except = excluding (think 'exit' — it leaves something out).",
            "-ice = noun (advice, practice); -ise = verb (advise, practise)."
          ],
          practice: "Say two sentences aloud: one using 'affect' as a verb, one using 'effect' as a noun — e.g. “Noise affects my sleep; the effect is tiredness.”",
          quiz: [
            { q: "“How will this decision ___ the team?”", choices: ["effect", "affect", "effekt", "afect"], answer: 1 },
            { q: "“I'll eat anything ___ mushrooms.”", choices: ["accept", "except", "exept", "acept"], answer: 1 },
            { q: "“Let me ___ you to be careful.” (the action)", choices: ["advice", "advise", "advize", "advis"], answer: 1 },
            { q: "British English: “I ___ the piano daily.” (verb)", choices: ["practice", "practise", "practize", "practis"], answer: 1 }
          ]
        },
        {
          id: "w6", level: "Advanced", minutes: 11,
          title: "Advanced mix-ups: lose/loose, who's/whose, fewer/less & more",
          content: `
            <p>Master these and you'll write and speak with the precision of an advanced user. These are the ones that even confident speakers slip on.</p>
            <h3>lose vs loose</h3>
            <ul>
              <li><b>lose</b> (rhymes with "news") = to not win, or misplace. <button class="say" data-say="Don't lose your ticket.">🔊</button> "Don't <b>lose</b> your ticket."</li>
              <li><b>loose</b> (rhymes with "goose") = not tight. <button class="say" data-say="This shirt is too loose.">🔊</button> "This shirt is too <b>loose</b>."</li>
            </ul>
            <h3>who's vs whose</h3>
            <ul>
              <li><b>who's</b> = who is / who has. <button class="say" data-say="Who's coming tonight?">🔊</button> "<b>Who's</b> coming tonight?" (= who is)</li>
              <li><b>whose</b> = belonging to whom. <button class="say" data-say="Whose jacket is this?">🔊</button> "<b>Whose</b> jacket is this?"</li>
            </ul>
            <h3>fewer vs less</h3>
            <p>Use <b>fewer</b> for things you can <b>count</b>; use <b>less</b> for things you <b>can't count</b> (amounts).</p>
            <ul>
              <li><button class="say" data-say="Fewer cars, less traffic.">🔊</button> "<b>Fewer</b> cars, <b>less</b> traffic." (cars = countable; traffic = uncountable)</li>
              <li>fewer mistakes, fewer people · less time, less money, less water</li>
            </ul>
            <h3>A few more advanced pairs</h3>
            <table>
              <tr><th>Pair</th><th>Quick rule</th></tr>
              <tr><td>complement / compliment</td><td>complement = completes/goes well with · compliment = praise</td></tr>
              <tr><td>stationary / stationery</td><td>stationary = not moving · stationery = paper & pens (e for envelope)</td></tr>
              <tr><td>principal / principle</td><td>principal = main / head of school · principle = a rule or belief</td></tr>
              <tr><td>i.e. / e.g.</td><td>i.e. = "that is" (clarify) · e.g. = "for example" (give an example)</td></tr>
            </table>
            <p><button class="say" data-say="Whose idea was it to wear loose clothes so we wouldn't lose the race?">🔊</button> "<b>Whose</b> idea was it to wear <b>loose</b> clothes so we wouldn't <b>lose</b> the race?"</p>
            <div class="speakcheck" data-target="Who's the person who made fewer mistakes and lost less time?"></div>`,
          tips: [
            "lose = misplace (one 'o'); loose = not tight (two 'o's, like goose).",
            "who's = who is; whose = belonging (no apostrophe for possession, like its/your).",
            "Countable → fewer; uncountable → less (fewer items, less time)."
          ],
          practice: "Say aloud, explaining each choice: <button class=\"say\" data-say=\"Whose loose tooth is it? Try not to lose it, and eat fewer sweets and less sugar.\">🔊 Listen</button> “Whose loose tooth is it? Try not to lose it, and eat fewer sweets and less sugar.”",
          quiz: [
            { q: "“I might ___ my keys.” (misplace)", choices: ["loose", "lose", "loos", "luse"], answer: 1 },
            { q: "“___ turn is it?” (belonging to whom)", choices: ["Who's", "Whose", "Whos", "Whose'"], answer: 1 },
            { q: "“There were ___ people than last year.” (countable)", choices: ["less", "fewer", "lesser", "few"], answer: 1 },
            { q: "“e.g.” means…", choices: ["that is", "for example", "and so on", "in other words"], answer: 1 }
          ]
        }
      ]
    },

    /* ----- 1c. VOCABULARY BUILDER & WORD POWER ----------------------------- */
    {
      id: "vocab", icon: "📚", color: "#f59e0b",
      title: "Vocabulary Builder & Word Power",
      blurb: "From your first everyday words to rich, precise vocabulary. Learn the words AND exactly how and when to use them.",
      lessons: [
        {
          id: "v1", level: "Basic", minutes: 10,
          title: "Your everyday core words (and how to use them)",
          content: `
            <p>You don't need thousands of words to start speaking — you need the <b>right few hundred</b>, used confidently. These are the everyday words that appear in almost every conversation.</p>
            <h3>The most useful verbs (doing words)</h3>
            <p>Master these and you can describe most daily actions:</p>
            <div class="ex">be, have, do, go, get, make, take, come, see, want, need, like, know, think, say, give, find, use, work, help, feel <button class="say" data-say="be, have, do, go, get, make, take, come, see, want">🔊</button></div>
            <ul>
              <li><button class="say" data-say="I need to go to work.">🔊</button> "I <b>need</b> to <b>go</b> to <b>work</b>."</li>
              <li><button class="say" data-say="Can you help me, please?">🔊</button> "Can you <b>help</b> me, please?"</li>
              <li><button class="say" data-say="I'd like to get a coffee.">🔊</button> "I'd <b>like</b> to <b>get</b> a coffee."</li>
            </ul>
            <h3>Everyday nouns (things)</h3>
            <div class="ex">time, day, people, way, man, woman, child, home, work, school, food, water, money, house, friend, family, phone, car, job <button class="say" data-say="time, day, people, home, work, food, money, friend, family">🔊</button></div>
            <h3>Small words that connect everything</h3>
            <p>These "glue" words are tiny but used constantly: <b>and, but, or, so, because, with, for, in, on, at, to, from</b>.</p>
            <div class="ex">"I stayed home <b>because</b> I was tired, <b>so</b> I rested <b>and</b> watched TV." <button class="say" data-say="I stayed home because I was tired, so I rested and watched TV.">🔊</button></div>
            <h3>Build a sentence right now</h3>
            <p>Pattern: <b>I + verb + thing</b>. Try: "I want water." → "I need help." → "I like my job."</p>
            <div class="speakcheck" data-target="I want to get some food because I am hungry."></div>`,
          tips: [
            "Learn words in short sentences, never alone — your brain remembers them in use.",
            "A few hundred common words cover most everyday conversation. Quality over quantity.",
            "Say new words out loud the moment you meet them."
          ],
          practice: "Pick five verbs from the list and make a tiny sentence with each (e.g. “I take the bus.”). Say each one aloud twice.",
          quiz: [
            { q: "What's the best way to learn a new word?", choices: ["Memorise it alone", "Learn it inside a short sentence", "Only read it silently", "Translate it once"], answer: 1 },
            { q: "Which group are 'connecting' words?", choices: ["time, day, food", "and, but, because, so", "go, get, make", "house, car, job"], answer: 1 },
            { q: "A simple sentence pattern to start with is…", choices: ["thing + thing + thing", "I + verb + thing", "verb only", "no pattern"], answer: 1 }
          ]
        },
        {
          id: "v2", level: "Basic", minutes: 10,
          title: "Describing things: adjectives & the order they go in",
          content: `
            <p>Adjectives are describing words — they bring your speech to life. Instead of "a car", you can say "a lovely old red car". Let's build that skill.</p>
            <h3>Everyday adjectives by type</h3>
            <table>
              <tr><th>Type</th><th>Examples</th></tr>
              <tr><td>Opinion</td><td>lovely, nice, great, terrible, beautiful</td></tr>
              <tr><td>Size</td><td>big, small, tall, tiny, huge</td></tr>
              <tr><td>Age</td><td>old, new, young, ancient</td></tr>
              <tr><td>Colour</td><td>red, blue, green, dark, bright</td></tr>
            </table>
            <h3>The natural order of adjectives</h3>
            <p>English has a "secret" order native speakers feel without thinking: <b>Opinion → Size → Age → Colour → Material → Noun</b>.</p>
            <div class="ex">"a <b>lovely little old brown leather</b> bag" <button class="say" data-say="a lovely little old brown leather bag">🔊</button></div>
            <p>"a red big ball" sounds wrong; "a <b>big red</b> ball" sounds right. <button class="say" data-say="a big red ball">🔊</button></p>
            <h3>Make descriptions stronger</h3>
            <p>Add small "intensifiers": <b>very, really, quite, absolutely</b>. <button class="say" data-say="It was a really delicious meal.">🔊</button> "It was a <b>really</b> delicious meal."</p>
            <p>Tip: with strong adjectives (delicious, enormous, freezing) use <b>absolutely</b>, not "very": <button class="say" data-say="It was absolutely delicious.">🔊</button> "absolutely delicious".</p>
            <h3>Describe something near you</h3>
            <div class="speakcheck" data-target="It's a beautiful small wooden table." data-hint="Try describing a real object around you."></div>`,
          tips: [
            "Order: Opinion-Size-Age-Colour-Material (a nice big old blue cotton shirt).",
            "Use 'absolutely' with strong adjectives, 'very' with normal ones.",
            "One or two good adjectives is plenty — don't overload."
          ],
          practice: "Look at three objects around you and describe each in one sentence using two adjectives in the right order. Say them aloud.",
          quiz: [
            { q: "Which order sounds natural?", choices: ["a red big book", "a big red book", "a book red big", "big a red book"], answer: 1 },
            { q: "The usual adjective order is…", choices: ["Colour-Size-Opinion", "Opinion-Size-Age-Colour", "Age-Colour-Opinion", "random"], answer: 1 },
            { q: "Which fits 'absolutely'?", choices: ["absolutely nice", "absolutely big", "absolutely freezing", "absolutely okay"], answer: 2 }
          ]
        },
        {
          id: "v3", level: "Intermediate", minutes: 11,
          title: "Words that go together: collocations & word families",
          content: `
            <p>Fluent English isn't single words — it's <b>words that naturally go together</b>. These pairings are called <b>collocations</b>. Using them makes you sound natural; breaking them sounds "off", even if every word is correct.</p>
            <h3>We say… not…</h3>
            <table>
              <tr><th>Natural ✅</th><th>Sounds wrong ❌</th></tr>
              <tr><td>make a mistake</td><td>do a mistake</td></tr>
              <tr><td>do your homework</td><td>make your homework</td></tr>
              <tr><td>take a photo</td><td>make a photo</td></tr>
              <tr><td>heavy rain</td><td>strong rain</td></tr>
              <tr><td>fast food</td><td>quick food</td></tr>
            </table>
            <p><button class="say" data-say="I made a mistake, so I had to do the work again.">🔊</button> "I <b>made a mistake</b>, so I had to <b>do the work</b> again."</p>
            <h3>Common verb partners: make vs do</h3>
            <ul>
              <li><b>make</b>: make a decision, make a plan, make dinner, make friends, make money</li>
              <li><b>do</b>: do business, do the washing, do exercise, do your best, do a favour</li>
            </ul>
            <h3>Word families — one root, many forms</h3>
            <p>Learn one word and you often get four. This multiplies your vocabulary fast:</p>
            <table>
              <tr><th>Noun</th><th>Verb</th><th>Adjective</th><th>Adverb</th></tr>
              <tr><td>success</td><td>succeed</td><td>successful</td><td>successfully</td></tr>
              <tr><td>decision</td><td>decide</td><td>decisive</td><td>decisively</td></tr>
              <tr><td>care</td><td>care</td><td>careful</td><td>carefully</td></tr>
            </table>
            <p><button class="say" data-say="She made a careful decision and handled it successfully.">🔊</button> "She made a <b>careful decision</b> and handled it <b>successfully</b>."</p>
            <div class="speakcheck" data-target="I need to make a plan and do my best to succeed."></div>`,
          tips: [
            "When you learn a noun, ask: what's the verb, adjective and adverb?",
            "Note the verb that 'partners' a noun (make/do/take/have a…).",
            "Collect collocations from things you read — they're gold for sounding natural."
          ],
          practice: "Say five 'make/do' collocations aloud from the lesson, then make one full sentence using two of them.",
          quiz: [
            { q: "Which is the natural collocation?", choices: ["do a mistake", "make a mistake", "have a mistake", "take a mistake"], answer: 1 },
            { q: "We usually say…", choices: ["strong rain", "heavy rain", "big rain", "hard rain"], answer: 1 },
            { q: "The adjective from 'success' is…", choices: ["succeed", "successfully", "successful", "succession"], answer: 2 },
            { q: "Which pairs correctly?", choices: ["make the washing", "do a decision", "make a decision", "do dinner"], answer: 2 }
          ]
        },
        {
          id: "v4", level: "Intermediate", minutes: 11,
          title: "Phrasal verbs you'll actually use",
          content: `
            <p><b>Phrasal verbs</b> are a verb + a small word (up, out, on, off, in) that together get a new meaning. They're everywhere in spoken English — using them makes you sound natural and relaxed.</p>
            <h3>Everyday phrasal verbs</h3>
            <table>
              <tr><th>Phrasal verb</th><th>Meaning</th><th>Example</th></tr>
              <tr><td>get up</td><td>leave bed</td><td>I <b>get up</b> at seven.</td></tr>
              <tr><td>turn on / off</td><td>start/stop a device</td><td>Please <b>turn off</b> the lights.</td></tr>
              <tr><td>look for</td><td>search</td><td>I'm <b>looking for</b> my keys.</td></tr>
              <tr><td>give up</td><td>quit / stop trying</td><td>Don't <b>give up</b>!</td></tr>
              <tr><td>find out</td><td>discover</td><td>I'll <b>find out</b> the time.</td></tr>
              <tr><td>get on with</td><td>have a good relationship</td><td>I <b>get on with</b> my colleagues.</td></tr>
            </table>
            <p><button class="say" data-say="I get up early, turn on the radio, and look for my shoes.">🔊</button> "I <b>get up</b> early, <b>turn on</b> the radio, and <b>look for</b> my shoes."</p>
            <h3>Same verb, different meanings</h3>
            <p>One phrasal verb can shift meaning with context — let context guide you:</p>
            <ul>
              <li><b>take off</b> — a plane leaves the ground / remove clothing. <button class="say" data-say="The plane took off. Please take off your coat.">🔊</button></li>
              <li><b>pick up</b> — lift something / collect someone / learn casually. <button class="say" data-say="I'll pick you up at eight.">🔊</button></li>
            </ul>
            <blockquote>Don't try to learn 500 at once. Learn a handful, use them daily, and add more slowly. Real use makes them stick.</blockquote>
            <div class="speakcheck" data-target="Don't give up — I'll find out what went wrong."></div>`,
          tips: [
            "Learn phrasal verbs in a full example sentence, not as a list.",
            "Many have a one-word formal twin (find out = discover) — handy for exams.",
            "Start with 10–15 everyday ones and actually use them."
          ],
          practice: "Choose three phrasal verbs from the table and describe your morning routine aloud using each one.",
          quiz: [
            { q: "“Please ___ the TV, I'm trying to sleep.” (stop the device)", choices: ["turn on", "turn off", "look for", "get up"], answer: 1 },
            { q: "'Find out' means…", choices: ["lose", "discover", "exit", "search forever"], answer: 1 },
            { q: "'Get on with someone' means…", choices: ["argue", "ignore them", "have a good relationship", "leave"], answer: 2 },
            { q: "Best way to learn phrasal verbs?", choices: ["Memorise 200 in a day", "In example sentences, a few at a time", "Never use them", "Only read them"], answer: 1 }
          ]
        },
        {
          id: "v5", level: "Advanced", minutes: 12,
          title: "Precise word choice, synonyms & register (formal vs informal)",
          content: `
            <p>At advanced level, it's not about <i>more</i> words — it's about the <b>exact right word</b> for the meaning and the situation. This is what makes a speaker sound truly fluent and educated.</p>
            <h3>Choosing the precise word</h3>
            <p>"Good", "nice" and "very" are fine, but precise words say more in less space:</p>
            <table>
              <tr><th>Instead of…</th><th>Try…</th></tr>
              <tr><td>very good</td><td>excellent, outstanding, superb</td></tr>
              <tr><td>very bad</td><td>terrible, awful, dreadful</td></tr>
              <tr><td>very big</td><td>enormous, huge, vast</td></tr>
              <tr><td>very happy</td><td>delighted, thrilled, overjoyed</td></tr>
              <tr><td>very tired</td><td>exhausted, worn out</td></tr>
            </table>
            <p><button class="say" data-say="The view was absolutely stunning, and I was thrilled.">🔊</button> "The view was absolutely <b>stunning</b>, and I was <b>thrilled</b>."</p>
            <h3>Synonyms aren't always identical</h3>
            <p>Words can share a meaning but carry a different feeling (connotation). <b>slim</b> (positive) vs <b>skinny</b> (negative) vs <b>thin</b> (neutral). Choose the shade you mean.</p>
            <h3>Register: match your words to the situation</h3>
            <table>
              <tr><th>Informal (friends)</th><th>Formal (work / exam)</th></tr>
              <tr><td>get</td><td>receive / obtain</td></tr>
              <tr><td>kids</td><td>children</td></tr>
              <tr><td>a lot of</td><td>a great deal of / numerous</td></tr>
              <tr><td>find out</td><td>discover / determine</td></tr>
              <tr><td>buy</td><td>purchase</td></tr>
            </table>
            <p>Informal: <button class="say" data-say="I need to find out more about the job.">🔊</button> "I need to <b>find out</b> more about the job."<br>
            Formal: <button class="say" data-say="I would like to obtain further information about the position.">🔊</button> "I would like to <b>obtain</b> further information about the <b>position</b>."</p>
            <h3>How to keep growing your vocabulary for life</h3>
            <ul>
              <li>Read widely and note new words <b>in context</b>.</li>
              <li>Keep a small list of words + one example sentence each; review and <b>use them in speech</b>.</li>
              <li>Learn one strong synonym for each "tired" word (good, bad, big, nice).</li>
            </ul>
            <div class="speakcheck" data-target="I was delighted with the outstanding service and the enormous portions."></div>`,
          tips: [
            "Precise beats fancy — pick the word that means exactly what you mean.",
            "Mind connotation: slim vs skinny vs thin all differ in feeling.",
            "Match register to the moment: 'get' with friends, 'obtain' in formal writing."
          ],
          practice: "Take a dull sentence (“It was a very good, very big meal and I was very happy”) and say a vivid version aloud using precise words (e.g. “It was a superb, enormous meal and I was delighted”).",
          quiz: [
            { q: "A precise replacement for 'very tired' is…", choices: ["sleepy-ish", "exhausted", "a bit tired", "very very tired"], answer: 1 },
            { q: "Which is the most formal?", choices: ["get", "grab", "obtain", "pick up"], answer: 2 },
            { q: "'slim', 'skinny' and 'thin' show that synonyms can differ in…", choices: ["spelling only", "feeling/connotation", "number of letters", "nothing"], answer: 1 },
            { q: "Best lifelong vocabulary habit?", choices: ["Memorise the dictionary", "Note new words in context and use them", "Avoid new words", "Only learn long words"], answer: 1 }
          ]
        }
      ]
    },

    /* ----- 2. BRITISH PRONUNCIATION LAB ------------------------------------ */
    {
      id: "pron", icon: "🔤", color: "#14b8a6",
      title: "British Pronunciation Lab",
      blurb: "Master the British sounds: vowels, tricky consonants, the silent R, and clear word stress.",
      lessons: [
        {
          id: "p1", level: "Basic", minutes: 10,
          title: "British vowels & the long /ɑː/",
          content: `
            <p>Vowels carry a lot of a British accent. The signature one is the long <b>/ɑː/</b> in words like <button class="say" data-say="bath, glass, dance, can't, after">🔊 bath, glass, dance, can't, after</button>. In Received Pronunciation these have a long, open “ah”, not a short “a”.</p>
            <h3>Short vs long — keep them distinct</h3>
            <table>
              <tr><th>Short</th><th>Long</th><th>Listen</th></tr>
              <tr><td>ship /ɪ/</td><td>sheep /iː/</td><td><button class="say" data-say="ship, sheep">🔊</button></td></tr>
              <tr><td>full /ʊ/</td><td>fool /uː/</td><td><button class="say" data-say="full, fool">🔊</button></td></tr>
              <tr><td>cot /ɒ/</td><td>caught /ɔː/</td><td><button class="say" data-say="cot, caught">🔊</button></td></tr>
            </table>
            <h3>The schwa — the laziest, most common sound</h3>
            <p>The little “uh” sound /ə/ appears in nearly every unstressed syllable: <button class="say" data-say="about, banana, teacher, the">🔊 about, banana, teacher, the</button>. Native speakers reduce these to a quick schwa — that's what makes English sound relaxed, not robotic.</p>
            <h3>Practise</h3>
            <div class="speakcheck" data-target="I can't have a bath after dance class."></div>
            <div class="speakcheck" data-target="The teacher asked about a banana."></div>`,
          tips: [
            "British /ɑː/ in bath, glass, can't is long and open — like a doctor's 'ahh'.",
            "Don't give every syllable equal weight; weak syllables become a quick schwa 'uh'.",
            "Lengthen long vowels properly — it's a clue to meaning, not just style."
          ],
          practice: "Contrast the pairs aloud: ship/sheep, full/fool, cot/caught — exaggerate the length difference until it feels natural.",
          quiz: [
            { q: "In RP British English, 'bath' uses which vowel?", choices: ["A short 'a' as in cat", "A long open /ɑː/ 'ah'", "An 'o' sound", "A schwa"], answer: 1 },
            { q: "The schwa /ə/ is…", choices: ["A loud stressed vowel", "The quick 'uh' in unstressed syllables", "Only used in questions", "A consonant"], answer: 1 },
            { q: "Why keep 'ship' and 'sheep' distinct?", choices: ["Politeness", "Different vowel length changes the word", "They're spelled the same", "No reason"], answer: 1 }
          ]
        },
        {
          id: "p2", level: "Basic", minutes: 9,
          title: "Tricky consonants: TH, V/W and the dark L",
          content: `
            <p>A few consonants do most of the damage to clarity. Fix these and people understand you far better.</p>
            <h3>TH — two versions</h3>
            <ul>
              <li>Voiceless (just air): <button class="say" data-say="think, thing, three, bath">🔊 think, thing, three</button></li>
              <li>Voiced (buzzing): <button class="say" data-say="this, that, the, mother">🔊 this, that, mother</button></li>
            </ul>
            <p>Tongue tip lightly touches the back of the top teeth. Avoid turning TH into “d”, “z” or “f”.</p>
            <h3>V vs W</h3>
            <p><b>V</b>: top teeth touch bottom lip and buzz. <b>W</b>: round your lips, no teeth. <button class="say" data-say="vine, wine, vest, west, very, well">🔊 vine/wine, vest/west, very/well</button></p>
            <h3>The British 'dark L'</h3>
            <p>At the end of words, the L is darker: <button class="say" data-say="full, ball, milk, little">🔊 full, ball, milk, little</button> — the back of the tongue lifts.</p>
            <h3>Practise</h3>
            <div class="speakcheck" data-target="Think of three things this week."></div>
            <div class="speakcheck" data-target="The vest in the west is very wet."></div>`,
          tips: [
            "TH is air through the teeth — don't swap it for 'd' or 'z'.",
            "For V, you must feel your top teeth on your bottom lip; W has no teeth at all.",
            "Practise minimal pairs slowly first, then speed up while keeping the contrast."
          ],
          practice: "Say the tongue-twister slowly, then faster: “The thirty-three thieves thought they thrilled the throne.”",
          quiz: [
            { q: "The difference between V and W is mainly…", choices: ["Loudness", "Teeth on lip (V) vs rounded lips, no teeth (W)", "Tongue between teeth", "Nothing"], answer: 1 },
            { q: "A common TH mistake is replacing it with…", choices: ["m or n", "d, z or f", "p or b", "r"], answer: 1 },
            { q: "The 'dark L' appears typically…", choices: ["At the start of words", "At the end of words like 'full', 'ball'", "Only in questions", "Never in British English"], answer: 1 }
          ]
        },
        {
          id: "p3", level: "Intermediate", minutes: 9,
          title: "The non-rhotic R — the British 'silent' R",
          content: `
            <p>This single feature instantly signals a British accent. In most British accents, the letter R is <b>only pronounced before a vowel</b>. Before a consonant or at the end of a word, it goes <b>silent</b> — the vowel just lengthens.</p>
            <h3>R is silent at the end</h3>
            <table>
              <tr><th>Word</th><th>Sounds like</th><th></th></tr>
              <tr><td>car</td><td>cah</td><td><button class="say" data-say="car">🔊</button></td></tr>
              <tr><td>water</td><td>wa-tuh</td><td><button class="say" data-say="water">🔊</button></td></tr>
              <tr><td>better</td><td>be-tuh</td><td><button class="say" data-say="better">🔊</button></td></tr>
              <tr><td>hard</td><td>haad</td><td><button class="say" data-say="hard">🔊</button></td></tr>
            </table>
            <h3>R is pronounced before a vowel</h3>
            <p><button class="say" data-say="red, around, very, carry">🔊 red, around, very, carry</button> — here you do say the R.</p>
            <h3>The clever 'linking R'</h3>
            <p>When a word ending in R is followed by a vowel, British speakers link them: <button class="say" data-say="far away, mother and father, better off">🔊 far_away, mother_and father, better_off</button>.</p>
            <h3>Practise</h3>
            <div class="speakcheck" data-target="The car park is rather far away."></div>
            <div class="speakcheck" data-target="My mother and father work hard."></div>`,
          tips: [
            "End-of-word R = silent; the vowel before it just gets a little longer.",
            "R before a vowel (red, around) is still pronounced clearly.",
            "Use the linking R ('far away' → far-r-away) to sound smooth and connected."
          ],
          practice: "Read aloud, keeping final R's silent: “The teacher in the corner near the door wore a smarter jumper.”",
          quiz: [
            { q: "In most British accents, the R in 'car' is…", choices: ["Strongly rolled", "Silent (the vowel lengthens)", "Said like a W", "Said twice"], answer: 1 },
            { q: "The R in 'around' is…", choices: ["Silent", "Pronounced (it's before a vowel)", "A schwa", "Dropped"], answer: 1 },
            { q: "'Far away' said the British way uses a…", choices: ["Silent gap", "Linking R joining the words", "Rolled R", "Glottal stop"], answer: 1 }
          ]
        },
        {
          id: "p4", level: "Intermediate", minutes: 10,
          title: "Word stress — the hidden key to being understood",
          content: `
            <p>Every English word of two or more syllables has one <b>strong</b> syllable. Put the stress in the wrong place and even perfect sounds can be hard to understand. Stress is more important than any single consonant.</p>
            <h3>Hear the beat</h3>
            <table>
              <tr><th>Word</th><th>Stress (CAPS)</th><th></th></tr>
              <tr><td>banana</td><td>ba-NA-na</td><td><button class="say" data-say="banana">🔊</button></td></tr>
              <tr><td>photograph</td><td>PHO-to-graph</td><td><button class="say" data-say="photograph">🔊</button></td></tr>
              <tr><td>photographer</td><td>pho-TO-gra-pher</td><td><button class="say" data-say="photographer">🔊</button></td></tr>
              <tr><td>important</td><td>im-POR-tant</td><td><button class="say" data-say="important">🔊</button></td></tr>
            </table>
            <p>Notice how 'photograph' and 'photographer' shift the stress — and the vowels around the stress relax into schwas.</p>
            <h3>Same spelling, different stress = different word</h3>
            <ul>
              <li>Noun <b>PRE-sent</b> (a gift) vs verb <b>pre-SENT</b> (to give): <button class="say" data-say="a present, to present">🔊</button></li>
              <li><b>RE-cord</b> (noun) vs <b>re-CORD</b> (verb): <button class="say" data-say="a record, to record">🔊</button></li>
            </ul>
            <h3>Practise</h3>
            <div class="speakcheck" data-target="It's important to record the photograph."></div>`,
          tips: [
            "Learn the stress with every new word — say it as a beat: da-DA-da.",
            "Stressed syllable = longer, louder, clearer; the rest relax to schwa.",
            "Noun/verb pairs often shift stress: a REcord vs to reCORD."
          ],
          practice: "Clap the rhythm of these as you say them: banana (di-DUM-di), important (di-DUM-di), photographer (di-DUM-di-di). Feel the strong beat.",
          quiz: [
            { q: "Which syllable is stressed in 'important'?", choices: ["IM-portant", "im-POR-tant", "impor-TANT", "none"], answer: 1 },
            { q: "Why does word stress matter so much?", choices: ["It looks nice", "Wrong stress can make a word hard to understand", "It's only for songs", "It doesn't"], answer: 1 },
            { q: "'a PREsent' vs 'to preSENT' shows that…", choices: ["Spelling changes", "Stress can change the meaning/word class", "They're unrelated", "British people don't stress words"], answer: 1 }
          ]
        }
      ]
    },

    /* ----- 3. TONE, INTONATION & SOUNDING FLUENT (focus module) ------------ */
    {
      id: "tone", icon: "🎵", color: "#6366f1",
      title: "Tone, Intonation & Sounding Fluent",
      blurb: "The music of English. Stress, rhythm, rise & fall, connected speech and the natural 'chunks' that make you sound like a fluent native speaker.",
      lessons: [
        {
          id: "t1", level: "Intermediate", minutes: 10,
          title: "Sentence stress — the rhythm of English",
          content: `
            <p>English is a <b>stress-timed</b> language. We don't say every word with equal weight: we punch the <b>important</b> words and squeeze the small ones. This rhythm is the biggest secret to sounding fluent.</p>
            <h3>Content words vs function words</h3>
            <p><b>Stress the content words</b> (nouns, main verbs, adjectives, adverbs). <b>Weaken the function words</b> (a, the, to, of, and, is, are, can).</p>
            <div class="ex">"I'd <b>LOVE</b> to <b>COME</b> to your <b>PAR</b>ty on <b>SAT</b>urday." <button class="say" data-say="I'd love to come to your party on Saturday.">🔊</button></div>
            <p>Say only the capitals with a strong beat and let everything else go fast and quiet. That's the music.</p>
            <h3>Weak forms</h3>
            <p>Small words shrink to a schwa: <button class="say" data-say="a cup of tea, fish and chips, I can do it">🔊 'a cup ə tea', 'fish ən chips', 'I cən do it'</button>. Saying every small word fully and loudly is what makes speech sound robotic.</p>
            <h3>Feel the beat</h3>
            <div class="speakcheck" data-target="I'd love to come to your party on Saturday."></div>
            <div class="speakcheck" data-target="I can have a cup of tea and a piece of cake."></div>`,
          tips: [
            "Punch the meaning words; throw away the grammar words.",
            "'and', 'of', 'a', 'to', 'can' usually shrink to a quick schwa.",
            "Tap the table on the stressed beats as you speak — it trains the rhythm."
          ],
          practice: "Say “fish and chips”, “a cup of tea”, “bread and butter” fast, squeezing 'and/of/a' to a tiny 'ə'. Then put them in a sentence.",
          quiz: [
            { q: "English rhythm comes from…", choices: ["Saying every word equally", "Stressing content words and weakening function words", "Speaking very slowly", "Always rising at the end"], answer: 1 },
            { q: "In 'a cup of tea', the words 'a' and 'of' should be…", choices: ["Loud and clear", "Reduced to a quick schwa 'ə'", "Stressed", "Dropped completely"], answer: 1 },
            { q: "Which words usually get the stress?", choices: ["a, the, of, to", "Nouns, main verbs, adjectives", "Only the last word", "Pronouns"], answer: 1 }
          ]
        },
        {
          id: "t2", level: "Intermediate", minutes: 10,
          title: "Intonation — the rise and fall that carries meaning",
          content: `
            <p>Intonation is the <b>melody</b> of your voice going up and down. It carries emotion and meaning — sometimes more than the words. A flat, monotone voice is the number-one thing that makes a speaker sound unsure or bored.</p>
            <h3>Falling tone — certainty & statements</h3>
            <p>Statements and 'wh-' questions usually <b>fall</b> at the end. It sounds confident and finished.</p>
            <p><button class="say" data-say="I live in London. Where do you work?">🔊</button> “I live in London. ↘ / Where do you work? ↘”</p>
            <h3>Rising tone — questions & 'I'm not finished'</h3>
            <p>Yes/no questions and lists often <b>rise</b>.</p>
            <p><button class="say" data-say="Are you coming tonight? Did you call her?">🔊</button> “Are you coming tonight? ↗”</p>
            <h3>Fall–rise — the very British 'polite but…'</h3>
            <p>A dip then a small rise signals doubt, politeness or reservation — extremely British.</p>
            <div class="ex">"Well, it's <b>lovely</b>… ↘↗ (but I'm not sure)" <button class="say" data-say="Well, it's lovely, but I'm not sure.">🔊</button></div>
            <h3>Same words, different meaning</h3>
            <p>"Really." ↘ = I believe you / "Really?" ↗ = I'm surprised. <button class="say" data-say="Really. Really?">🔊</button></p>
            <div class="speakcheck" data-target="Are you coming to the meeting tomorrow?"></div>
            <div class="speakcheck" data-target="I really enjoyed it, thank you."></div>`,
          tips: [
            "Statements and wh-questions fall ↘; yes/no questions rise ↗.",
            "A flat voice reads as bored or nervous — let your pitch move.",
            "The British fall–rise softens disagreement and sounds polite."
          ],
          practice: "Say “Thank you” three ways: warm and sincere (big fall), surprised (rise), and sarcastic-polite (fall–rise). Hear how the melody changes the meaning.",
          quiz: [
            { q: "A normal statement in English usually…", choices: ["Rises at the end", "Falls at the end", "Stays flat", "Has no tone"], answer: 1 },
            { q: "A yes/no question ('Are you ready?') typically…", choices: ["Falls", "Rises", "Is monotone", "Is whispered"], answer: 1 },
            { q: "Speaking in a flat monotone tends to make you sound…", choices: ["Confident", "Unsure or bored", "Polite", "Excited"], answer: 1 }
          ]
        },
        {
          id: "t3", level: "Intermediate", minutes: 11,
          title: "Connected speech — why native English sounds 'joined up'",
          content: `
            <p>Fluent speakers don't say words one… by… one. They <b>join words together</b>, drop sounds and blend them. Understanding this helps you both <b>speak</b> more smoothly and <b>understand</b> fast speech.</p>
            <h3>1. Linking (consonant → vowel)</h3>
            <p>A final consonant grabs the next vowel: <button class="say" data-say="an apple, pick it up, this evening">🔊 'a-napple', 'pi-ki-tup', 'thi-sevening'</button></p>
            <h3>2. Intrusive & linking /r/ /w/ /j/</h3>
            <p><button class="say" data-say="go away, I am, the end">🔊 'go-w-away', 'I-y-am', 'the-y-end'</button> — a tiny glide sneaks in.</p>
            <h3>3. Elision (dropping sounds)</h3>
            <p>We drop sounds in clusters: <button class="say" data-say="next day, most common, friendship">🔊 'nex day', 'mos common'</button></p>
            <h3>4. Assimilation (sounds blend)</h3>
            <p><button class="say" data-say="don't you, would you, gonna, wanna">🔊 'doncha', 'wouldja', 'gonna', 'wanna'</button> — relaxed everyday speech.</p>
            <h3>Hear it, then say it</h3>
            <div class="speakcheck" data-target="Pick it up and put it in an envelope." data-hint="Let the words run together: 'pi-ki-tup'."></div>
            <div class="speakcheck" data-target="What do you want to do this evening?" data-hint="Relaxed: 'Wadya wanna do this evening?'"></div>`,
          tips: [
            "Link a final consonant to the next word's vowel: 'an apple' → 'a-napple'.",
            "Don't try to pronounce every word separately — joining up is correct, not lazy.",
            "Learning connected speech also dramatically improves your listening."
          ],
          practice: "Say slowly then quickly, joining the words: “Pick it up.” → “Pi-ki-tup.” and “What are you doing?” → “Wodaya doing?”",
          quiz: [
            { q: "'an apple' is often pronounced as…", choices: ["an. apple.", "a-napple (linked)", "an-a-pple", "apple an"], answer: 1 },
            { q: "Connected speech (joining words) is…", choices: ["Lazy and wrong", "How fluent native speakers normally talk", "Only used in songs", "Bad grammar"], answer: 1 },
            { q: "'don't you' in relaxed speech often sounds like…", choices: ["don-t-you", "doncha", "do not you", "don you"], answer: 1 }
          ]
        },
        {
          id: "t4", level: "Advanced", minutes: 11,
          title: "Speaking in chunks — the real secret of fluency",
          content: `
            <p>Here's the truth about fluency: fluent speakers don't build every sentence word by word. They reach for ready-made <b>chunks</b> (fixed phrases) stored in memory. The more chunks you own, the faster and smoother you speak.</p>
            <h3>What is a chunk?</h3>
            <p>A group of words that go together and come out as one unit: <button class="say" data-say="to be honest, at the end of the day, as far as I'm concerned, that sort of thing">🔊 'to be honest', 'at the end of the day', 'as far as I'm concerned', 'that sort of thing'</button></p>
            <h3>Power chunks for any conversation</h3>
            <table>
              <tr><th>To…</th><th>Chunk</th></tr>
              <tr><td>Give an opinion</td><td>If you ask me… / The way I see it…</td></tr>
              <tr><td>Soften a claim</td><td>I'd say… / It tends to… / more or less</td></tr>
              <tr><td>Add a point</td><td>On top of that… / What's more…</td></tr>
              <tr><td>Concede</td><td>Having said that… / Then again…</td></tr>
              <tr><td>Buy time</td><td>Let me think… / That's a good question…</td></tr>
            </table>
            <p><button class="say" data-say="If you ask me, it's well worth a try. Having said that, it depends on the budget.">🔊 Listen to chunks in action</button></p>
            <h3>Why chunks make you fluent</h3>
            <ul>
              <li>They come out <b>automatically</b>, so your brain is free to think about ideas.</li>
              <li>They're <b>grammatically correct</b> by default — no assembling needed.</li>
              <li>They give you <b>thinking time</b> while still talking.</li>
            </ul>
            <div class="speakcheck" data-target="To be honest with you, at the end of the day, it's well worth a try."></div>`,
          tips: [
            "Collect chunks like a magpie: note real phrases you hear and reuse them.",
            "Practise a chunk until it's automatic — say it 10 times, then use it today.",
            "Opening chunks ('To be honest…') buy you a second to plan the rest."
          ],
          practice: "Pick three chunks from the table and build a sentence with each, out loud. Repeat until they feel effortless.",
          quiz: [
            { q: "A 'chunk' is…", choices: ["A single difficult word", "A ready-made fixed phrase said as one unit", "A grammar rule", "A type of exam"], answer: 1 },
            { q: "Why do chunks help fluency?", choices: ["They're long", "They come out automatically and are already correct", "They impress examiners only", "They slow you down"], answer: 1 },
            { q: "Which is a 'buy time' chunk?", choices: ["At the end of the day", "That's a good question, let me think…", "On top of that", "If you ask me"], answer: 1 }
          ]
        },
        {
          id: "t5", level: "Advanced", minutes: 10,
          title: "Sounding natural & British: politeness, hedging & understatement",
          content: `
            <p>To sound like a fluent British speaker, <b>what</b> you say matters less than <b>how indirectly</b> you say it. British communication prizes politeness, hedging and a famous love of understatement.</p>
            <h3>Hedge it — don't state it too boldly</h3>
            <table>
              <tr><th>Too direct</th><th>Natural &amp; British</th></tr>
              <tr><td>You're wrong.</td><td>I'm not sure that's quite right.</td></tr>
              <tr><td>I want this.</td><td>I was wondering if I could possibly…</td></tr>
              <tr><td>That's bad.</td><td>It's not ideal, to be honest.</td></tr>
              <tr><td>No.</td><td>I'm afraid that might be a bit tricky.</td></tr>
            </table>
            <p><button class="say" data-say="I'm afraid that might be a bit tricky. I was wondering if we could possibly move it.">🔊</button></p>
            <h3>Understatement — the British speciality</h3>
            <p>Brits often say <b>less</b> than they mean. "Not bad" can mean 'very good'. "A bit of a problem" can mean 'a disaster'. "Quite nice" is genuine, mild praise.</p>
            <div class="ex">"That presentation was <b>not bad at all</b>." = That was really good. <button class="say" data-say="That presentation was not bad at all.">🔊</button></div>
            <h3>Softeners that make you sound polished</h3>
            <p><button class="say" data-say="just, perhaps, possibly, a little, sort of, I think, if that's alright">🔊 'just', 'perhaps', 'possibly', 'a little', 'I think', 'if that's alright'</button></p>
            <div class="speakcheck" data-target="I was wondering if I could possibly ask a quick question."></div>
            <div class="speakcheck" data-target="I'm afraid that's not quite what I had in mind."></div>`,
          tips: [
            "Hedging ('I think', 'perhaps', 'a bit') makes you sound polite and considered.",
            "'I'm afraid…' is the British way to deliver bad news or refuse gently.",
            "Understatement is a feature, not a bug — 'not bad' is real praise."
          ],
          practice: "Rewrite three blunt sentences politely out loud, e.g. turn “Move the meeting” into “I was wondering if we could possibly move the meeting.”",
          quiz: [
            { q: "Hedging language ('perhaps', 'a bit', 'I think') makes you sound…", choices: ["Rude", "Polite and considered", "Unsure and weak", "Aggressive"], answer: 1 },
            { q: "A British person saying 'not bad at all' usually means…", choices: ["It was terrible", "It was actually very good", "They didn't notice", "They're angry"], answer: 1 },
            { q: "The polite British way to refuse is often to start with…", choices: ["No.", "I'm afraid…", "You can't.", "Never."], answer: 1 }
          ]
        }
      ]
    },

    /* ----- 4. EVERYDAY BRITISH CONVERSATION -------------------------------- */
    {
      id: "conv", icon: "💬", color: "#0ea5a4",
      title: "Everyday British Conversation",
      blurb: "Small talk, the weather, shops, cafés, queues and the telephone — handle daily life with a natural British tone.",
      lessons: [
        {
          id: "c1", level: "Basic", minutes: 9,
          title: "Small talk & the art of the weather",
          content: `
            <p>Small talk is social glue. In Britain, it very often starts with the <b>weather</b> — not because it's fascinating, but because it's safe, shared and friendly.</p>
            <h3>Openers</h3>
            <ul>
              <li><button class="say" data-say="Lovely day, isn't it?">🔊</button> “Lovely day, isn't it?”</li>
              <li><button class="say" data-say="Bit chilly today, isn't it?">🔊</button> “Bit chilly today, isn't it?”</li>
              <li><button class="say" data-say="Did you have a good weekend?">🔊</button> “Did you have a good weekend?”</li>
            </ul>
            <h3>Keep it going — the question tag</h3>
            <p>Notice “…isn't it?”. These <b>question tags</b> invite a reply and are everywhere in British chat: <button class="say" data-say="It's freezing, isn't it? You're new here, aren't you?">🔊</button></p>
            <h3>The flow: comment → agree → add</h3>
            <div class="ex">A: "Miserable weather, isn't it?" → B: "Oh, I know, awful. Apparently it'll clear up later, though." <button class="say" data-say="Miserable weather, isn't it? Oh, I know, awful. Apparently it'll clear up later, though.">🔊</button></div>
            <div class="speakcheck" data-target="Lovely weather we're having, isn't it?"></div>
            <div class="speakcheck" data-target="Did you get up to much at the weekend?"></div>`,
          tips: [
            "Question tags ('isn't it?', 'aren't you?') invite the other person to respond.",
            "Agree first, then add a small comment — that keeps the chat flowing.",
            "Safe small-talk topics: weather, weekend, travel, the local area."
          ],
          practice: "Make three weather comments with a question tag and say them aloud: “Bit grey today, isn't it?” etc.",
          quiz: [
            { q: "British small talk very often starts with…", choices: ["Salary", "The weather", "Politics", "Religion"], answer: 1 },
            { q: "A question tag like 'isn't it?' is used to…", choices: ["End the conversation", "Invite the other person to reply", "Ask for money", "Correct grammar"], answer: 1 },
            { q: "Best response to keep small talk going?", choices: ["Silence", "Agree, then add a small comment", "Change the subject abruptly", "Just 'yes'"], answer: 1 }
          ]
        },
        {
          id: "c2", level: "Basic", minutes: 9,
          title: "In a café, pub or shop",
          content: `
            <p>Everyday transactions follow predictable scripts. Learn the script once and you'll never freeze at the till again.</p>
            <h3>Ordering</h3>
            <ul>
              <li><button class="say" data-say="Could I get a flat white, please?">🔊</button> “Could I get a flat white, please?”</li>
              <li><button class="say" data-say="I'll have the soup, please.">🔊</button> “I'll have the soup, please.”</li>
              <li>Eat in or take away? → <button class="say" data-say="To take away, please.">🔊</button> “To take away, please.”</li>
            </ul>
            <h3>Paying</h3>
            <p><button class="say" data-say="Can I pay by card? Keep the change.">🔊</button> “Can I pay by card?” · “Keep the change.”</p>
            <h3>In a shop</h3>
            <ul>
              <li><button class="say" data-say="I'm just browsing, thanks.">🔊</button> (when staff offer help) “I'm just browsing, thanks.”</li>
              <li><button class="say" data-say="Have you got this in a medium?">🔊</button> “Have you got this in a medium?”</li>
            </ul>
            <h3>The queue — sacred in Britain</h3>
            <p><button class="say" data-say="Sorry, are you in the queue?">🔊</button> Always check before you join: “Sorry, are you in the queue?” Never push in!</p>
            <div class="speakcheck" data-target="Could I get a tea and a slice of cake, please?"></div>
            <div class="speakcheck" data-target="Sorry, are you in the queue?"></div>`,
          tips: [
            "“Could I get… / I'll have…, please” is the natural way to order.",
            "“I'm just browsing, thanks” politely declines help in shops.",
            "Respect the queue — ask 'are you in the queue?' if unsure."
          ],
          practice: "Role-play ordering a drink and a snack, then paying by card — say the whole exchange aloud, both sides.",
          quiz: [
            { q: "A natural way to order food is…", choices: ["Give me soup.", "I'll have the soup, please.", "Soup. Now.", "I demand soup."], answer: 1 },
            { q: "If shop staff offer help and you're looking around, say…", choices: ["Go away", "I'm just browsing, thanks", "Nothing", "Buy this"], answer: 1 },
            { q: "Before joining a line in Britain, you might ask…", choices: ["Move!", "Sorry, are you in the queue?", "Is this free?", "What's your name?"], answer: 1 }
          ]
        },
        {
          id: "c3", level: "Intermediate", minutes: 10,
          title: "Opinions, agreeing & disagreeing politely",
          content: `
            <p>Good conversation is an exchange of views. The skill is sharing yours clearly while staying friendly — especially when you disagree.</p>
            <h3>Giving an opinion</h3>
            <p><button class="say" data-say="I think, personally, if you ask me, in my opinion, I'd say">🔊 'I think…', 'Personally…', 'If you ask me…', 'I'd say…'</button></p>
            <h3>Agreeing</h3>
            <p><button class="say" data-say="Absolutely. Exactly. That's so true. I couldn't agree more.">🔊 'Absolutely', 'Exactly', 'That's so true', 'I couldn't agree more'</button></p>
            <h3>Disagreeing — gently (very British)</h3>
            <table>
              <tr><th>Soft opener</th><th>Then your view</th></tr>
              <tr><td>I see what you mean, but…</td><td>…I'm not sure it's that simple.</td></tr>
              <tr><td>That's a fair point, though…</td><td>…I'd look at it differently.</td></tr>
              <tr><td>I'm not so sure, actually.</td><td>…I think it depends.</td></tr>
            </table>
            <p><button class="say" data-say="I see what you mean, but I'm not sure it's that simple.">🔊</button></p>
            <p>Never just say "No, you're wrong." Acknowledge, then offer your view.</p>
            <div class="speakcheck" data-target="That's a fair point, but I'd look at it slightly differently."></div>
            <div class="speakcheck" data-target="I couldn't agree more, to be honest."></div>`,
          tips: [
            "Cushion disagreement: acknowledge their point first, then add yours.",
            "'Actually' softens a correction: 'I'm not so sure, actually.'",
            "Strong agreement ('I couldn't agree more') builds warm rapport."
          ],
          practice: "Practise disagreeing politely with three statements (e.g. “Mornings are the best time to work”) using a soft opener each time.",
          quiz: [
            { q: "The polite British way to disagree is to…", choices: ["Say 'You're wrong'", "Acknowledge their point, then give yours", "Stay silent forever", "Shout"], answer: 1 },
            { q: "'I couldn't agree more' means…", choices: ["I disagree", "I strongly agree", "Maybe", "I don't understand"], answer: 1 },
            { q: "Which phrase introduces an opinion?", choices: ["If you ask me…", "Keep the change", "Mind the gap", "See you later"], answer: 0 }
          ]
        },
        {
          id: "c4", level: "Intermediate", minutes: 10,
          title: "On the telephone",
          content: `
            <p>Phone calls feel harder because there's no body language and the sound can be unclear. A few set phrases make you sound calm and professional.</p>
            <h3>Answering & starting</h3>
            <ul>
              <li><button class="say" data-say="Hello, this is Alex speaking.">🔊</button> “Hello, this is Alex speaking.”</li>
              <li><button class="say" data-say="Hi, is that the booking office?">🔊</button> “Hi, is that the booking office?”</li>
              <li><button class="say" data-say="I'm calling about my appointment on Friday.">🔊</button> “I'm calling about…”</li>
            </ul>
            <h3>When you don't catch something</h3>
            <p>Crucial skill — never pretend you understood:</p>
            <ul>
              <li><button class="say" data-say="Sorry, could you repeat that, please?">🔊</button> “Sorry, could you repeat that, please?”</li>
              <li><button class="say" data-say="The line's a bit bad. Could you speak up?">🔊</button> “The line's a bit bad — could you speak up?”</li>
              <li><button class="say" data-say="Let me just check I've got that right.">🔊</button> “Let me just check I've got that right…”</li>
            </ul>
            <h3>Spelling on the phone</h3>
            <p>Use the phonetic alphabet for clarity: <button class="say" data-say="That's S for Sugar, A for Apple, M for Mother.">🔊 'S for Sugar, A for Apple, M for Mother'</button></p>
            <h3>Ending</h3>
            <p><button class="say" data-say="Right, thanks ever so much for your help. Bye for now.">🔊</button> “Thanks ever so much for your help. Bye for now.”</p>
            <div class="speakcheck" data-target="Sorry, the line's a bit bad. Could you repeat that, please?"></div>`,
          tips: [
            "Never fake understanding on the phone — ask them to repeat or slow down.",
            "“This is … speaking” and “Is that …?” are the standard call openers.",
            "Read numbers and spellings back to confirm: 'Let me check I've got that.'"
          ],
          practice: "Role-play booking an appointment by phone: open the call, ask them to repeat a detail, spell your name, and close politely.",
          quiz: [
            { q: "When you don't catch something on the phone, you should…", choices: ["Pretend you understood", "Ask them to repeat: 'Sorry, could you repeat that?'", "Hang up", "Shout"], answer: 1 },
            { q: "'This is Alex speaking' is used to…", choices: ["Ask a question", "Say who you are when answering", "End the call", "Complain"], answer: 1 },
            { q: "To confirm a detail, you say…", choices: ["Whatever", "Let me just check I've got that right", "Goodbye", "No"], answer: 1 }
          ]
        }
      ]
    },

    /* ----- 5. GRAMMAR FOR SPEAKING ----------------------------------------- */
    {
      id: "gram", icon: "🧱", color: "#14b8a6",
      title: "Grammar for Speaking",
      blurb: "Just the grammar you actually speak: the key tenses, asking questions, conditionals and linking words for flow.",
      lessons: [
        {
          id: "g1", level: "Intermediate", minutes: 11,
          title: "The tenses you really use when speaking",
          content: `
            <p>You don't need every tense to speak well — you need a handful, used confidently. Here are the workhorses.</p>
            <h3>Present simple — habits & facts</h3>
            <p><button class="say" data-say="I work in marketing. I usually take the train.">🔊</button> “I work in marketing. I usually take the train.”</p>
            <h3>Present continuous — now & temporary</h3>
            <p><button class="say" data-say="I'm learning English. I'm staying with friends this week.">🔊</button></p>
            <h3>Past simple — finished actions</h3>
            <p><button class="say" data-say="I went to Manchester last year and visited the museum.">🔊</button></p>
            <h3>Present perfect — experience & 'up to now' (very British)</h3>
            <p>British speakers love the present perfect: <button class="say" data-say="I've already eaten. Have you ever been to Scotland?">🔊 'I've already eaten', 'Have you ever been to Scotland?'</button></p>
            <table>
              <tr><th>Use</th><th>Example</th></tr>
              <tr><td>Life experience</td><td>I've never tried sushi.</td></tr>
              <tr><td>Recent + relevant now</td><td>I've just finished.</td></tr>
              <tr><td>Unfinished time</td><td>I haven't seen her today.</td></tr>
            </table>
            <h3>'going to' & 'will' — the future</h3>
            <p><button class="say" data-say="I'm going to visit my family. I'll give you a call later.">🔊</button> 'going to' = plan; 'will' = decision/offer now.</p>
            <div class="speakcheck" data-target="I've just finished work and I'm going to visit my family."></div>`,
          tips: [
            "British English uses the present perfect a lot: 'I've just…', 'Have you ever…?'",
            "'going to' = an existing plan; 'will' = a decision made at the moment of speaking.",
            "Don't overthink tenses mid-sentence — keep talking; accuracy comes with practice."
          ],
          practice: "Tell your day in mixed tenses aloud: what you usually do (present), what you did yesterday (past), and what you're going to do tomorrow (future).",
          quiz: [
            { q: "'I've just finished' is which tense?", choices: ["Past simple", "Present perfect", "Future", "Present continuous"], answer: 1 },
            { q: "'going to' usually expresses…", choices: ["A finished action", "A plan or intention", "A habit", "A fact"], answer: 1 },
            { q: "For a habit ('every day') you use…", choices: ["Present simple", "Present perfect", "Past continuous", "Future perfect"], answer: 0 }
          ]
        },
        {
          id: "g2", level: "Intermediate", minutes: 9,
          title: "Asking questions naturally",
          content: `
            <p>Conversation is powered by questions. Getting their form and tone right keeps things flowing.</p>
            <h3>Yes/No questions (auxiliary first)</h3>
            <p><button class="say" data-say="Do you like coffee? Have you finished? Are you coming?">🔊</button> These usually <b>rise</b> at the end.</p>
            <h3>Wh- questions (information)</h3>
            <p><button class="say" data-say="Where do you live? What do you do? Why did you choose that?">🔊</button> These usually <b>fall</b>.</p>
            <h3>Follow-up questions = the fluency superpower</h3>
            <p>Don't interrogate; show interest with short follow-ups:</p>
            <ul>
              <li><button class="say" data-say="Oh really? How come? What was that like?">🔊</button> “Oh really?” · “How come?” · “What was that like?”</li>
            </ul>
            <h3>Polite, indirect questions</h3>
            <p>Softer and very British: <button class="say" data-say="Could you tell me where the station is? Do you happen to know what time it opens?">🔊 'Could you tell me where the station is?', 'Do you happen to know…?'</button></p>
            <div class="speakcheck" data-target="Could you tell me where the nearest station is, please?"></div>
            <div class="speakcheck" data-target="Oh really? What was that like?"></div>`,
          tips: [
            "Indirect questions ('Could you tell me where…?') sound polite and softer.",
            "Short follow-ups ('Oh really? How come?') show you're listening.",
            "Notice the word order flips in indirect questions: 'where the station is', not 'where is the station'."
          ],
          practice: "Have a mini-interview with yourself: ask and answer five questions about your weekend, adding a follow-up question each time.",
          quiz: [
            { q: "Indirect question word order: 'Could you tell me where…?'", choices: ["…where is the bank?", "…where the bank is?", "…the bank where is?", "…is the bank where?"], answer: 1 },
            { q: "Follow-up questions like 'How come?' are used to…", choices: ["End the chat", "Show interest and keep it going", "Be rude", "Change topic"], answer: 1 },
            { q: "Wh- questions ('Where do you live?') usually have which intonation?", choices: ["Rising", "Falling", "Flat", "None"], answer: 1 }
          ]
        },
        {
          id: "g3", level: "Advanced", minutes: 10,
          title: "Conditionals & hypotheticals in speech",
          content: `
            <p>Conditionals let you talk about possibilities, advice and imagined situations — vital for exams, interviews and rich conversation.</p>
            <h3>Zero & first — real possibilities</h3>
            <ul>
              <li>Zero (facts): <button class="say" data-say="If you heat ice, it melts.">🔊</button> “If you heat ice, it melts.”</li>
              <li>First (likely future): <button class="say" data-say="If it rains, I'll take the bus.">🔊</button> “If it rains, I'll take the bus.”</li>
            </ul>
            <h3>Second — imaginary / advice</h3>
            <p><button class="say" data-say="If I were you, I'd take the job. If I had more time, I'd travel more.">🔊</button> Note the polished “If I <b>were</b> you…” — great for giving advice.</p>
            <h3>Third — past regrets / 'what if'</h3>
            <p><button class="say" data-say="If I'd known, I would have come earlier.">🔊</button> “If I'd known, I would have come earlier.”</p>
            <h3>Why this matters for exams</h3>
            <p>Examiners reward a <b>range</b> of structures. Dropping a clean second or third conditional shows control: <button class="say" data-say="If I had the chance, I'd love to live abroad for a year.">🔊</button></p>
            <div class="speakcheck" data-target="If I were you, I'd take the opportunity."></div>
            <div class="speakcheck" data-target="If I had more free time, I'd definitely travel more."></div>`,
          tips: [
            "'If I were you, I'd…' is the natural, polished way to give advice.",
            "Second conditional ('If I had… I'd…') is perfect for imaginary exam answers.",
            "Using a third conditional well signals advanced control to examiners."
          ],
          practice: "Finish these aloud: “If I won the lottery, I'd…”, “If I were the boss, I'd…”, “If I'd studied harder, I would have…”.",
          quiz: [
            { q: "Which is correct advice-giving?", choices: ["If I am you, I take it", "If I were you, I'd take it", "If I was you, take it now", "When I you, take it"], answer: 1 },
            { q: "'If it rains, I'll stay home' is which conditional?", choices: ["Zero", "First", "Second", "Third"], answer: 1 },
            { q: "Third conditional talks about…", choices: ["General facts", "An imagined present", "Past situations / regrets", "The future only"], answer: 2 }
          ]
        },
        {
          id: "g4", level: "Intermediate", minutes: 9,
          title: "Linking words — making your speech flow",
          content: `
            <p>Fluent speech is <b>connected</b> speech — ideas joined logically. Linking words (discourse markers) are the signposts that guide your listener.</p>
            <h3>Add ideas</h3>
            <p><button class="say" data-say="and, also, on top of that, what's more">🔊 'and', 'also', 'on top of that', 'what's more'</button></p>
            <h3>Contrast</h3>
            <p><button class="say" data-say="but, however, although, on the other hand, having said that">🔊 'but', 'however', 'although', 'on the other hand', 'having said that'</button></p>
            <h3>Reason & result</h3>
            <p><button class="say" data-say="because, so, that's why, as a result">🔊 'because', 'so', 'that's why', 'as a result'</button></p>
            <h3>Sequence (great for stories & exams)</h3>
            <p><button class="say" data-say="first of all, then, after that, finally">🔊 'first of all', 'then', 'after that', 'finally'</button></p>
            <h3>Put it together</h3>
            <div class="ex">"I love my city <b>because</b> it's lively. <b>Having said that</b>, it can be expensive, <b>so</b> I'm careful with money. <b>All in all</b>, I wouldn't live anywhere else." <button class="say" data-say="I love my city because it's lively. Having said that, it can be expensive, so I'm careful with money. All in all, I wouldn't live anywhere else.">🔊</button></div>
            <div class="speakcheck" data-target="First of all I'd say it's convenient, and on top of that it's affordable."></div>`,
          tips: [
            "Linkers turn a list of facts into a flowing argument — examiners love them.",
            "'Having said that' and 'on the other hand' add balance and sophistication.",
            "Use sequence markers (first, then, finally) to structure any story or answer."
          ],
          practice: "Describe your typical morning using at least four sequence and reason linkers (first of all, then, because, finally).",
          quiz: [
            { q: "Which linker shows contrast?", choices: ["What's more", "On the other hand", "Because", "Finally"], answer: 1 },
            { q: "Linking words help your speech by…", choices: ["Making it longer", "Connecting ideas so listeners follow you", "Hiding mistakes", "Adding volume"], answer: 1 },
            { q: "Best sequence to tell a story?", choices: ["Finally, then, first", "First of all, then, after that, finally", "So, but, and", "However, because"], answer: 1 }
          ]
        }
      ]
    },

    /* ----- 6. FLUENCY, VOCABULARY & IDIOMS --------------------------------- */
    {
      id: "flu", icon: "🚀", color: "#6366f1",
      title: "Fluency, Vocabulary & Idioms",
      blurb: "Paraphrasing, natural fillers, idioms & collocations, and storytelling — the tools that lift you to advanced.",
      lessons: [
        {
          id: "x1", level: "Intermediate", minutes: 10,
          title: "Keep talking: fillers, paraphrasing & not freezing",
          content: `
            <p>Fluency isn't about never getting stuck — it's about <b>not stopping</b> when you do. Here are the tools that keep you going.</p>
            <h3>Natural thinking phrases (not 'errrr')</h3>
            <p>Replace dead 'um's with real phrases that buy time:</p>
            <ul>
              <li><button class="say" data-say="Let me think for a second.">🔊</button> “Let me think for a second.”</li>
              <li><button class="say" data-say="That's a good question.">🔊</button> “That's a good question.”</li>
              <li><button class="say" data-say="How can I put this?">🔊</button> “How can I put this?”</li>
            </ul>
            <h3>Paraphrasing — when you forget a word</h3>
            <p>Don't freeze — describe it. Forgot 'corkscrew'? Say: <button class="say" data-say="It's the thing you use to open a wine bottle.">🔊</button> “It's the thing you use to open a wine bottle.” This skill is gold in exams.</p>
            <h3>Useful 'vague' language (natural, not weak)</h3>
            <p><button class="say" data-say="sort of, kind of, more or less, that kind of thing, or something">🔊 'sort of', 'kind of', 'more or less', 'that kind of thing'</button></p>
            <h3>Repair phrases</h3>
            <p><button class="say" data-say="Sorry, what I meant to say was…">🔊</button> “Sorry, what I meant to say was…” lets you fix a slip smoothly.</p>
            <div class="speakcheck" data-target="That's a good question. Let me think for a second."></div>
            <div class="speakcheck" data-target="It's the thing you use to open a bottle of wine."></div>`,
          tips: [
            "Swap 'um' for a real chunk: 'That's a good question…' buys time and sounds fluent.",
            "If you forget a word, describe it ('the thing you use to…') — never stop dead.",
            "Self-repair ('what I meant was…') is what good speakers do, not a failure."
          ],
          practice: "Pick five random objects in the room and describe each without naming it ('It's the thing you use to…'). Speak continuously.",
          quiz: [
            { q: "If you forget a word mid-sentence, the best move is to…", choices: ["Stop and give up", "Describe it / paraphrase", "Switch to your language", "Apologise and leave"], answer: 1 },
            { q: "A good replacement for 'errr…' is…", choices: ["Silence", "That's a good question, let me think…", "Repeating the question word for word", "Coughing"], answer: 1 },
            { q: "'What I meant to say was…' is used to…", choices: ["Start a story", "Repair/correct yourself smoothly", "End the talk", "Ask a question"], answer: 1 }
          ]
        },
        {
          id: "x2", level: "Advanced", minutes: 10,
          title: "Collocations — words that belong together",
          content: `
            <p>Advanced speakers sound natural because they use the <b>right</b> word combinations. We say “heavy rain”, not “strong rain”; “make a decision”, not “do a decision”. These pairings are called <b>collocations</b>, and learning them is the fastest route to natural English.</p>
            <h3>Common verb + noun collocations</h3>
            <table>
              <tr><th>Say this</th><th>Not this</th></tr>
              <tr><td>make a decision / a mistake</td><td>do a decision</td></tr>
              <tr><td>do your homework / the washing-up</td><td>make your homework</td></tr>
              <tr><td>take a break / a photo</td><td>make a break</td></tr>
              <tr><td>have a go / a chat / a rest</td><td>—</td></tr>
            </table>
            <p><button class="say" data-say="Let's take a break, then have a quick chat and make a decision.">🔊</button></p>
            <h3>Strong, natural adjective pairs</h3>
            <p><button class="say" data-say="heavy rain, strong accent, bitterly cold, deeply grateful, highly unlikely">🔊 'heavy rain', 'strong accent', 'bitterly cold', 'deeply grateful', 'highly unlikely'</button></p>
            <h3>Make/do — a classic trap</h3>
            <p>Roughly: <b>do</b> = tasks &amp; work (do the shopping, do business); <b>make</b> = create/produce (make a plan, make a cup of tea).</p>
            <div class="speakcheck" data-target="I need to make a decision and do the washing-up."></div>`,
          tips: [
            "Learn nouns with their natural verb: 'make a decision', 'take a photo', 'have a rest'.",
            "Roughly: 'do' = jobs/tasks; 'make' = create/produce.",
            "Note collocations from things you read or watch, and reuse them aloud."
          ],
          practice: "Say five 'make' phrases and five 'do' phrases aloud (make a plan, make dinner… do the shopping, do my best…).",
          quiz: [
            { q: "Which is the natural collocation?", choices: ["do a decision", "make a decision", "have a decision", "take a decision off"], answer: 1 },
            { q: "We usually say 'heavy ___'.", choices: ["rain", "wind only", "sun", "cold"], answer: 0 },
            { q: "Roughly, 'make' tends to mean…", choices: ["tasks and chores", "create or produce", "destroy", "borrow"], answer: 1 }
          ]
        },
        {
          id: "x3", level: "Advanced", minutes: 10,
          title: "British idioms you'll actually hear",
          content: `
            <p>Idioms add colour — but only if used naturally and sparingly. Here are common British ones, with meanings. Use one or two, not ten.</p>
            <table>
              <tr><th>Idiom</th><th>Meaning</th><th></th></tr>
              <tr><td>It's not my cup of tea.</td><td>I don't really like it.</td><td><button class="say" data-say="It's not really my cup of tea.">🔊</button></td></tr>
              <tr><td>It cost a fortune / an arm and a leg.</td><td>Very expensive.</td><td><button class="say" data-say="It cost an arm and a leg.">🔊</button></td></tr>
              <tr><td>I'm chuffed to bits.</td><td>I'm very pleased.</td><td><button class="say" data-say="I'm chuffed to bits.">🔊</button></td></tr>
              <tr><td>Let's call it a day.</td><td>Let's stop for now.</td><td><button class="say" data-say="Right, let's call it a day.">🔊</button></td></tr>
              <tr><td>It's a piece of cake.</td><td>Very easy.</td><td><button class="say" data-say="Don't worry, it's a piece of cake.">🔊</button></td></tr>
              <tr><td>Touch wood.</td><td>Hoping for good luck.</td><td><button class="say" data-say="It's going well, touch wood.">🔊</button></td></tr>
            </table>
            <h3>Phrasal verbs — the everyday kind</h3>
            <p>British speech is full of these: <button class="say" data-say="I'm shattered, I might turn in early. Can you sort it out? Let's catch up soon.">🔊 'turn in' (go to bed), 'sort out' (fix), 'catch up' (meet/chat)</button></p>
            <h3>A word of caution</h3>
            <p>An idiom in the right place sounds great; forced everywhere it sounds odd. Aim for one well-placed idiom per topic in an exam.</p>
            <div class="speakcheck" data-target="To be honest, it's not really my cup of tea."></div>`,
          tips: [
            "Use idioms sparingly and in the right context — one well-placed idiom beats five forced ones.",
            "Learn phrasal verbs as whole units: 'sort out', 'turn in', 'catch up'.",
            "In IELTS, a natural idiom can lift your vocabulary score — but only if it fits."
          ],
          practice: "Use three idioms from the table in your own true sentences, out loud (e.g. “Skiing isn't really my cup of tea.”).",
          quiz: [
            { q: "'It's not my cup of tea' means…", choices: ["I'm thirsty", "I don't really like it", "It's broken", "It's expensive"], answer: 1 },
            { q: "'Let's call it a day' means…", choices: ["Let's start", "Let's stop for now", "Name the day", "Let's celebrate"], answer: 1 },
            { q: "Best idiom strategy in an exam is…", choices: ["Use as many as possible", "Use one or two that fit naturally", "Never use any", "Invent new ones"], answer: 1 }
          ]
        },
        {
          id: "x4", level: "Advanced", minutes: 11,
          title: "Telling a great story (and the IELTS Part 2 'long turn')",
          content: `
            <p>Whether it's a dinner-party anecdote or the IELTS cue card, a good spoken story holds attention. Here's the structure fluent speakers use.</p>
            <h3>The shape of a story</h3>
            <ol>
              <li><b>Set the scene</b> — when, where, who: <button class="say" data-say="So this was a couple of years ago, when I was living in Leeds.">🔊</button></li>
              <li><b>Build it up</b> — what happened, step by step (past tenses + sequence linkers).</li>
              <li><b>The turning point</b> — the interesting bit: <button class="say" data-say="And then, out of nowhere…">🔊</button> “And then, out of nowhere…”</li>
              <li><b>Wrap up</b> — how it ended &amp; how you felt: <button class="say" data-say="In the end it all worked out, and I learned a lot from it.">🔊</button></li>
            </ol>
            <h3>Make it vivid</h3>
            <ul>
              <li>Vary your tenses: past simple for events, past continuous for background (“I <b>was walking</b> home when…”).</li>
              <li>Add feelings: <button class="say" data-say="I was absolutely terrified. I couldn't believe it.">🔊</button></li>
              <li>Use your intonation — speed up at the exciting part, pause before the punchline.</li>
            </ul>
            <h3>IELTS Part 2 tip</h3>
            <p>Use your 1-minute prep to note keywords for each bullet, then narrate for the full 1–2 minutes. Don't stop early — examiners want extended speech.</p>
            <div class="speakcheck" data-target="So this was a couple of years ago, when I was living abroad."></div>
            <div class="speakcheck" data-target="And then, out of nowhere, everything changed."></div>`,
          tips: [
            "Open by setting the scene: time, place, people — it draws the listener in.",
            "Mix past simple (events) with past continuous (background) to sound natural.",
            "Pause before the climax and let your voice carry the drama."
          ],
          practice: "Tell a 90-second true story about a memorable trip, using the four-part shape (scene → build-up → turning point → wrap-up). Record it in the Speaking Lab.",
          quiz: [
            { q: "A good spoken story usually starts by…", choices: ["Stating the ending", "Setting the scene (when/where/who)", "Listing facts", "Apologising"], answer: 1 },
            { q: "Background description in a story often uses…", choices: ["Past continuous ('I was walking…')", "Future tense", "Present perfect only", "Commands"], answer: 0 },
            { q: "In IELTS Part 2, you should…", choices: ["Stop after 20 seconds", "Speak for the full 1–2 minutes", "Only answer yes/no", "Memorise a generic speech"], answer: 1 }
          ]
        }
      ]
    },

    /* ----- 7. EXAM SPEAKING: IELTS & CAMBRIDGE ----------------------------- */
    {
      id: "ielts", icon: "📊", color: "#0ea5a4",
      title: "Exam Speaking: IELTS & Cambridge",
      blurb: "Beat the speaking tests. The format, the band descriptors, and proven strategies for IELTS Parts 1–3 and Cambridge exams.",
      lessons: [
        {
          id: "i1", level: "Advanced", minutes: 11,
          title: "How speaking exams are marked (the four criteria)",
          content: `
            <p>You can't hit a target you can't see. Almost all major speaking exams (IELTS, Cambridge B2/C1) judge the <b>same four things</b>. Learn them and you'll know exactly what to show.</p>
            <h3>The four criteria</h3>
            <table>
              <tr><th>Criterion</th><th>What examiners want</th></tr>
              <tr><td><b>Fluency &amp; Coherence</b></td><td>Keep going at a natural pace; organise ideas with linkers; don't over-self-correct.</td></tr>
              <tr><td><b>Lexical Resource</b></td><td>Range of vocabulary; collocations, some idioms; paraphrasing instead of repeating.</td></tr>
              <tr><td><b>Grammatical Range &amp; Accuracy</b></td><td>A mix of simple and complex sentences, mostly accurate.</td></tr>
              <tr><td><b>Pronunciation</b></td><td>Clear sounds, good word/sentence stress, natural intonation.</td></tr>
            </table>
            <h3>The big realisation</h3>
            <p>Notice what's <b>not</b> on the list: 'having the right opinion' or 'sounding like a native'. You're rewarded for <b>how</b> you speak, not what you believe. So an average idea expressed fluently scores higher than a brilliant idea expressed in broken English.</p>
            <h3>Quick self-check after any answer</h3>
            <ul>
              <li>Did I keep going without long pauses? (Fluency)</li>
              <li>Did I use a linker and a less common word? (Coherence/Lexis)</li>
              <li>Did I use at least one complex sentence? (Grammar)</li>
              <li>Did my voice rise and fall? (Pronunciation)</li>
            </ul>
            <div class="speakcheck" data-target="In my view, it largely depends on the situation, although there are exceptions."></div>`,
          tips: [
            "You're marked on HOW you speak, not whether your opinion is 'correct'.",
            "A fluent average answer beats a brilliant idea in broken English.",
            "After practice answers, score yourself on all four criteria honestly."
          ],
          practice: "Answer “Do you enjoy cooking?” for 40 seconds, then rate yourself on all four criteria. Re-do it, improving the weakest one.",
          quiz: [
            { q: "Which is NOT one of the four speaking criteria?", choices: ["Fluency & coherence", "Having the 'correct' opinion", "Vocabulary range", "Pronunciation"], answer: 1 },
            { q: "'Lexical resource' means…", choices: ["Speaking speed", "Your range and use of vocabulary", "Grammar accuracy", "Your accent's origin"], answer: 1 },
            { q: "A fluent, average-idea answer vs a great idea in broken English — which scores higher?", choices: ["Broken English great idea", "The fluent answer", "They're equal", "Neither"], answer: 1 }
          ]
        },
        {
          id: "i2", level: "Advanced", minutes: 11,
          title: "IELTS Part 1 — extend every answer",
          content: `
            <p>Part 1 is a friendly warm-up: familiar questions about you (home, work, hobbies, food). The trap is answering too <b>shortly</b>. The fix is a simple formula.</p>
            <h3>The 'Answer + Reason + Example/Detail' formula</h3>
            <div class="ex">Q: "Do you like reading?"<br>
            ❌ "Yes, I do." (too short)<br>
            ✅ "Yes, I love it. <b>I'd say</b> I read most evenings to unwind, <b>especially</b> crime novels — there's nothing better than a good plot twist." <button class="say" data-say="Yes, I love it. I'd say I read most evenings to unwind, especially crime novels. There's nothing better than a good plot twist.">🔊</button></div>
            <h3>Aim for 2–3 sentences per answer</h3>
            <p>Answer → add a reason ('because…') → add an example or detail. That's it. Don't speak for too long either — Part 1 answers are short-ish, just not one word.</p>
            <h3>Handy extenders</h3>
            <p><button class="say" data-say="I'd say, to be honest, especially, for instance, that said">🔊 'I'd say…', 'to be honest…', 'especially…', 'for instance…', 'that said…'</button></p>
            <h3>Practise the formula</h3>
            <div class="speakcheck" data-target="Yes, definitely. I'd say I exercise most mornings, mainly because it helps me focus."></div>
            <p>Now try this question aloud using the formula: <button class="say" data-say="Do you prefer tea or coffee?">🔊 'Do you prefer tea or coffee?'</button></p>`,
          tips: [
            "Never answer Part 1 with one word — use Answer + Reason + Example.",
            "Two to three sentences is the sweet spot for Part 1.",
            "Extenders like 'especially' and 'for instance' naturally lengthen answers."
          ],
          practice: "Answer five Part 1 questions (home, job, food, weekends, music) using Answer + Reason + Example each time.",
          quiz: [
            { q: "The best length for a Part 1 answer is…", choices: ["One word", "2–3 sentences (answer + reason + example)", "Three minutes", "A single 'yes'"], answer: 1 },
            { q: "Which best extends an answer?", choices: ["Yes.", "…because… for instance…", "No comment", "Repeating the question"], answer: 1 },
            { q: "Part 1 questions are usually about…", choices: ["Abstract global issues", "Familiar topics: you, home, work, hobbies", "Maths problems", "Other people's secrets"], answer: 1 }
          ]
        },
        {
          id: "i3", level: "Advanced", minutes: 11,
          title: "IELTS Part 2 — the long turn (cue card)",
          content: `
            <p>Part 2 gives you a card with a topic and bullet points. You get <b>1 minute to prepare</b> and must speak for <b>1–2 minutes</b>. This is where structure saves you.</p>
            <h3>Use your prep minute well</h3>
            <p>Don't write sentences — jot <b>keywords</b> next to each bullet. Add a few 'wow' words you want to use.</p>
            <h3>Structure your talk</h3>
            <ol>
              <li><b>Intro:</b> "I'd like to talk about…" <button class="say" data-say="I'd like to talk about a trip that really stuck with me.">🔊</button></li>
              <li><b>Cover each bullet</b> in order, expanding with detail.</li>
              <li><b>Tell a little story</b> in the middle — it fills time naturally and shows range.</li>
              <li><b>Round off:</b> "…and that's why it meant so much to me." <button class="say" data-say="And that's why it really meant so much to me.">🔊</button></li>
            </ol>
            <h3>Keep going for the full 2 minutes</h3>
            <p>If you finish early, add: how you felt, why it matters, whether you'd do it again. Don't stop and wait — the examiner will stop you.</p>
            <h3>The 'stuck' lifelines</h3>
            <p><button class="say" data-say="Now, where was I? Oh yes. Anyway, the point is…">🔊 'Now, where was I?… Anyway, the point is…'</button></p>
            <div class="speakcheck" data-target="I'd like to talk about a place that's really special to me."></div>`,
          tips: [
            "Prep with keywords, not full sentences — you won't have time to read them.",
            "Fold a short story into the middle; it's the easiest way to fill the time.",
            "If you dry up, use a lifeline ('Anyway, the point is…') and carry on."
          ],
          practice: "Do a full cue card in the Speaking Lab → IELTS Mock: “Describe a person who inspired you.” Speak for the full 1–2 minutes.",
          quiz: [
            { q: "In the Part 2 prep minute you should…", choices: ["Write full sentences to read", "Jot keywords for each bullet", "Stay silent", "Memorise an essay"], answer: 1 },
            { q: "If you finish before 2 minutes, you should…", choices: ["Stop and wait", "Add feelings/details to keep going", "Apologise", "Ask to restart"], answer: 1 },
            { q: "A good way to fill the long turn naturally is to…", choices: ["List dictionary words", "Include a short personal story", "Count numbers", "Repeat the card"], answer: 1 }
          ]
        },
        {
          id: "i4", level: "Advanced", minutes: 11,
          title: "IELTS Part 3 & Cambridge discussion — think in arguments",
          content: `
            <p>Part 3 (and the Cambridge collaborative/discussion tasks) move to <b>abstract, opinion</b> questions: society, the future, advantages and disadvantages. They test whether you can <b>develop an argument</b>, not just react.</p>
            <h3>The PEEL mini-structure</h3>
            <p>For each answer: <b>P</b>oint → <b>E</b>xplain → <b>E</b>xample → <b>L</b>ink back.</p>
            <div class="ex">"<b>I think</b> remote work is mostly positive. <b>The reason is</b> it saves commuting time. <b>For instance</b>, a friend of mine got two hours of his day back. <b>So overall</b>, I'd say the benefits outweigh the drawbacks." <button class="say" data-say="I think remote work is mostly positive. The reason is it saves commuting time. For instance, a friend of mine got two hours of his day back. So overall, I'd say the benefits outweigh the drawbacks.">🔊</button></div>
            <h3>Sit on the fence — gracefully</h3>
            <p>You don't have to pick a side. Balanced answers show range: <button class="say" data-say="It's a bit of a double-edged sword. On the one hand… on the other hand…">🔊 'It's a double-edged sword. On the one hand… on the other hand…'</button></p>
            <h3>Speculate &amp; compare (advanced language)</h3>
            <p><button class="say" data-say="It's likely that… It could well lead to… Compared to the past, people tend to…">🔊 'It's likely that…', 'It could well lead to…', 'Compared to the past…'</button></p>
            <h3>If you don't know? Think aloud</h3>
            <p>"I've never really thought about it, but I suppose…" is perfectly fine and keeps you talking.</p>
            <div class="speakcheck" data-target="It's a bit of a double-edged sword, to be honest."></div>
            <div class="speakcheck" data-target="On the whole, I'd say the benefits outweigh the drawbacks."></div>`,
          tips: [
            "Use PEEL: Point, Explain, Example, Link — for a complete, examiner-pleasing answer.",
            "Balanced 'on the one hand / on the other' answers show real range.",
            "Don't know? Think aloud — 'I suppose…' is better than silence."
          ],
          practice: "Answer “Should governments invest more in public transport?” using PEEL, then give a balanced 'double-edged sword' version.",
          quiz: [
            { q: "PEEL stands for…", choices: ["Point, Explain, Example, Link", "Please Explain Every Letter", "Pause, Erm, End, Leave", "Point, End, Eat, Listen"], answer: 0 },
            { q: "Part 3 questions are mainly…", choices: ["About your daily routine", "Abstract/opinion questions about society & ideas", "Yes/no only", "Spelling tests"], answer: 1 },
            { q: "A balanced answer might use…", choices: ["On the one hand… on the other hand…", "Yes. Yes. Yes.", "I don't know.", "Only idioms"], answer: 0 }
          ]
        }
      ]
    },

    /* ----- 8. JOB INTERVIEWS IN ENGLISH ------------------------------------ */
    {
      id: "intv", icon: "💼", color: "#14b8a6",
      title: "Job Interviews in English",
      blurb: "Walk in confident. Strong answers to the classic questions, the STAR method, and a polished, professional tone.",
      lessons: [
        {
          id: "j1", level: "Advanced", minutes: 11,
          title: "“Tell me about yourself” — your 90-second pitch",
          content: `
            <p>It's the most common opener and the most fumbled. Interviewers aren't asking for your life story — they want a <b>focused professional summary</b>. Use the <b>Present → Past → Future</b> structure.</p>
            <h3>The structure</h3>
            <ol>
              <li><b>Present:</b> who you are now. <button class="say" data-say="I'm currently a marketing coordinator with about five years' experience in digital campaigns.">🔊</button></li>
              <li><b>Past:</b> a highlight that's relevant. <button class="say" data-say="Before that, I grew a client's social following by sixty per cent in a year.">🔊</button></li>
              <li><b>Future:</b> why you're here, now. <button class="say" data-say="Now I'm looking to bring that experience to a larger team, which is exactly why this role appeals to me.">🔊</button></li>
            </ol>
            <h3>Keep it to 60–90 seconds</h3>
            <p>Tight and confident beats long and rambling. Practise it until it flows without sounding robotic.</p>
            <h3>Professional tone</h3>
            <p>Warm but not too casual: <button class="say" data-say="Thank you for having me, I'm delighted to be here.">🔊 'Thank you for having me — I'm delighted to be here.'</button></p>
            <div class="speakcheck" data-target="I'm currently a project assistant with three years of experience in operations."></div>
            <div class="speakcheck" data-target="Now I'm looking to take on more responsibility, which is exactly why this role appeals to me."></div>`,
          tips: [
            "Structure 'about yourself' as Present → Past → Future.",
            "Keep it to 60–90 seconds — rehearse until it's smooth, not memorised-sounding.",
            "End by linking yourself to THIS role: 'which is why this role appeals to me.'"
          ],
          practice: "Write and rehearse your own 90-second Present→Past→Future pitch. Record it in the Interview Mock and tighten it.",
          quiz: [
            { q: "Best structure for 'Tell me about yourself'?", choices: ["Childhood to now in detail", "Present → Past → Future", "Only your weaknesses", "Your hobbies"], answer: 1 },
            { q: "Ideal length is about…", choices: ["10 seconds", "60–90 seconds", "5 minutes", "As long as possible"], answer: 1 },
            { q: "A strong finish links your experience to…", choices: ["Your salary", "This specific role", "Your last holiday", "The weather"], answer: 1 }
          ]
        },
        {
          id: "j2", level: "Advanced", minutes: 11,
          title: "The STAR method for competency questions",
          content: `
            <p>“Tell me about a time when…” questions test real behaviour. The <b>STAR</b> method gives your answer a clear, persuasive shape.</p>
            <h3>STAR</h3>
            <table>
              <tr><th>Letter</th><th>What to say</th></tr>
              <tr><td><b>S</b>ituation</td><td>Briefly set the scene. (10–15%)</td></tr>
              <tr><td><b>T</b>ask</td><td>What you needed to achieve. (10%)</td></tr>
              <tr><td><b>A</b>ction</td><td>What <b>you</b> specifically did. (50–60% — the heart)</td></tr>
              <tr><td><b>R</b>esult</td><td>The positive outcome, ideally with numbers. (20%)</td></tr>
            </table>
            <h3>Example</h3>
            <div class="ex">"<b>(S)</b> Last year our team was behind on a launch. <b>(T)</b> I had to get us back on schedule. <b>(A)</b> I broke the work into daily targets, reassigned two tasks, and ran a quick stand-up each morning. <b>(R)</b> We launched on time and sales beat target by fifteen per cent." <button class="say" data-say="Last year our team was behind on a launch. I had to get us back on schedule. I broke the work into daily targets, reassigned two tasks, and ran a quick stand-up each morning. We launched on time and sales beat target by fifteen per cent.">🔊</button></div>
            <h3>Two golden rules</h3>
            <ul>
              <li>Say "<b>I</b>", not "we", in the Action — they're hiring you.</li>
              <li>Always land a <b>Result</b>, with a number if you can.</li>
            </ul>
            <div class="speakcheck" data-target="I broke the work into daily targets and we launched on time."></div>`,
          tips: [
            "Spend most of a STAR answer on the Action — what YOU did.",
            "Quantify the Result ('cut errors by 30%') whenever possible.",
            "Prepare 4–5 flexible STAR stories that cover teamwork, conflict, failure, leadership."
          ],
          practice: "Build one STAR story about a real challenge. Practise it aloud, keeping Action longest and ending on a clear Result.",
          quiz: [
            { q: "STAR stands for…", choices: ["Situation, Task, Action, Result", "Start, Talk, Ask, Reply", "Story, Time, Answer, Rest", "Speak, Think, Act, Relax"], answer: 0 },
            { q: "Which part should be the longest?", choices: ["Situation", "Task", "Action", "There's no main part"], answer: 2 },
            { q: "In the Action, you should mostly say…", choices: ["'we'", "'I' — what you personally did", "'they'", "nothing"], answer: 1 }
          ]
        },
        {
          id: "j3", level: "Advanced", minutes: 10,
          title: "Tricky questions: strengths, weaknesses & 'why us?'",
          content: `
            <p>A few questions catch people out every time. Prepare them and you'll feel calm.</p>
            <h3>“What's your greatest strength?”</h3>
            <p>Pick one relevant strength + proof. <button class="say" data-say="I'd say my strength is staying calm under pressure. For example, during a system outage I kept the team focused and we fixed it within the hour.">🔊</button></p>
            <h3>“What's your greatest weakness?”</h3>
            <p>Be honest, pick a real but non-fatal weakness, and end with what you're <b>doing about it</b>:</p>
            <div class="ex">"I used to take on too much myself rather than delegate. I've been working on it by trusting my team with clear briefs — and honestly, the results have been better for it." <button class="say" data-say="I used to take on too much myself rather than delegate. I've been working on it by trusting my team with clear briefs, and honestly the results have been better for it.">🔊</button></div>
            <p>Avoid the cliché 'I'm a perfectionist' — interviewers have heard it a thousand times.</p>
            <h3>“Why do you want to work here?”</h3>
            <p>Be <b>specific</b> about the company. Show you've done your homework: <button class="say" data-say="I really admire your focus on sustainability, and I'd love to contribute to that mission.">🔊</button></p>
            <div class="speakcheck" data-target="I'd say my greatest strength is staying calm under pressure."></div>`,
          tips: [
            "Strength = one relevant trait + a quick proof story.",
            "Weakness = a real one + the concrete steps you're taking to improve.",
            "'Why us?' must be specific — name something real about the company."
          ],
          practice: "Prepare answers to all three questions and say each aloud. For the weakness, make sure you end on an improvement.",
          quiz: [
            { q: "A good 'weakness' answer ends with…", choices: ["A second weakness", "What you're doing to improve it", "A joke", "Silence"], answer: 1 },
            { q: "'Why do you want to work here?' should be…", choices: ["Generic and short", "Specific about the company", "About salary", "About your weaknesses"], answer: 1 },
            { q: "Which weakness answer is weakest (cliché)?", choices: ["'I'm a perfectionist.'", "A real, specific habit you're improving", "Over-committing and learning to delegate", "Public speaking, which you're practising"], answer: 0 }
          ]
        },
        {
          id: "j4", level: "Advanced", minutes: 10,
          title: "Questions to ask, closing strong & virtual interviews",
          content: `
            <p>The interview isn't over until you've left a final impression. Two things matter most: the questions <b>you</b> ask, and how you close.</p>
            <h3>Always have questions ready</h3>
            <p>"No, I'm fine thanks" looks uninterested. Ask one or two thoughtful questions:</p>
            <ul>
              <li><button class="say" data-say="What does success look like in this role in the first six months?">🔊</button> “What does success look like in the first six months?”</li>
              <li><button class="say" data-say="How would you describe the team's culture?">🔊</button> “How would you describe the team's culture?”</li>
              <li><button class="say" data-say="What are the biggest challenges the team is facing right now?">🔊</button></li>
            </ul>
            <h3>Close with warmth and intent</h3>
            <p><button class="say" data-say="Thank you, I've really enjoyed our conversation. I'm very interested in the role and I hope to hear from you.">🔊</button> “Thank you — I've really enjoyed our conversation. I'm very interested in the role and hope to hear from you.”</p>
            <h3>Virtual interview essentials</h3>
            <ul>
              <li>Look at the <b>camera</b>, not the screen, when speaking — it's your eye contact.</li>
              <li>Test mic and lighting beforehand; sit somewhere quiet and tidy.</li>
              <li>A small pause before answering online is normal — don't rush over them.</li>
            </ul>
            <div class="speakcheck" data-target="What does success look like in this role in the first six months?"></div>`,
          tips: [
            "Prepare two questions to ask — it signals genuine interest.",
            "On video, look at the camera lens to make 'eye contact'.",
            "Close by stating clearly that you want the job."
          ],
          practice: "Run the full Interview Mock in the Speaking Lab, ending with one strong question of your own and a warm close.",
          quiz: [
            { q: "When asked 'Any questions for us?', you should…", choices: ["Say no", "Ask one or two thoughtful questions", "Ask only about salary", "Leave"], answer: 1 },
            { q: "On a video interview, eye contact means looking at…", choices: ["The screen image", "The camera lens", "Your notes", "Away"], answer: 1 },
            { q: "A strong close does what?", choices: ["Hides your interest", "Clearly states you want the role", "Criticises the company", "Asks nothing"], answer: 1 }
          ]
        }
      ]
    },

    /* ----- 9. PUBLIC SPEAKING & PRESENTATIONS ------------------------------ */
    {
      id: "pub", icon: "🎤", color: "#6366f1",
      title: "Public Speaking & Presentations",
      blurb: "Command a room. Structure, powerful openings and closings, delivery, persuasion and handling questions and nerves.",
      lessons: [
        {
          id: "s1", level: "Advanced", minutes: 11,
          title: "Structure: the backbone of every great talk",
          content: `
            <p>A talk that wanders loses people. A clear structure keeps your audience (and you) on track. The classic advice still wins: <b>“Tell them what you'll tell them, tell them, then tell them what you told them.”</b></p>
            <h3>The three-part shape</h3>
            <ol>
              <li><b>Opening:</b> hook + your message + a roadmap. <button class="say" data-say="Today I'd like to share three simple ideas that could change how you work.">🔊</button></li>
              <li><b>Body:</b> 2–4 key points, each with one example. Don't cram in ten points.</li>
              <li><b>Close:</b> recap + a call to action.</li>
            </ol>
            <h3>Signposting — verbal road signs</h3>
            <p>Tell people where you are: <button class="say" data-say="Firstly… My second point is… Which brings me to… Finally… To sum up…">🔊 'Firstly…', 'My second point is…', 'Which brings me to…', 'Finally…', 'To sum up…'</button></p>
            <h3>The rule of three</h3>
            <p>Audiences remember things in threes: "It's simple, fast and free." Group your points in threes whenever you can.</p>
            <div class="speakcheck" data-target="Today I'd like to share three simple ideas with you."></div>
            <div class="speakcheck" data-target="Which brings me to my second point."></div>`,
          tips: [
            "Three to four key points maximum — depth beats breadth.",
            "Signpost constantly so the audience never gets lost.",
            "Group ideas in threes; it's memorable and satisfying to hear."
          ],
          practice: "Outline a 3-minute talk on a topic you love: write a hook, three points (with one example each), and a closing call to action. Then say the opening aloud.",
          quiz: [
            { q: "The classic talk structure is…", choices: ["Improvise freely", "Tell them what you'll say, say it, recap it", "Read a script fast", "Start with the ending only"], answer: 1 },
            { q: "Signposting phrases ('Firstly…', 'To sum up…') help by…", choices: ["Filling time", "Showing the audience where you are", "Hiding nerves", "Adding jokes"], answer: 1 },
            { q: "How many key points should a short talk have?", choices: ["Ten or more", "Two to four", "Exactly one word", "As many as possible"], answer: 1 }
          ]
        },
        {
          id: "s2", level: "Advanced", minutes: 10,
          title: "Powerful openings & memorable closings",
          content: `
            <p>People judge a talk in the first 30 seconds and remember the last 30. Invest in both. Never open with "Erm, so, yeah, today I'm going to talk about…".</p>
            <h3>Five strong openings</h3>
            <ul>
              <li><b>A question:</b> <button class="say" data-say="Have you ever wondered why we remember songs but forget names?">🔊</button></li>
              <li><b>A surprising fact:</b> <button class="say" data-say="We spend nearly a third of our lives at work.">🔊</button></li>
              <li><b>A short story:</b> "Last winter, something happened that changed my mind…"</li>
              <li><b>A bold statement:</b> <button class="say" data-say="Everything you've been told about multitasking is wrong.">🔊</button></li>
              <li><b>A relevant quote</b> — used sparingly.</li>
            </ul>
            <h3>Closings that land</h3>
            <ul>
              <li><b>Full circle:</b> answer the question you opened with.</li>
              <li><b>Call to action:</b> <button class="say" data-say="So this week, try just one thing: put your phone in another room for an hour.">🔊</button></li>
              <li><b>A memorable line:</b> short, punchy, and then <b>stop</b>.</li>
            </ul>
            <p>Crucial: don't fade out with "…yeah, that's it, thanks." End on your strong line and a confident "Thank you."</p>
            <div class="speakcheck" data-target="Have you ever wondered why we remember songs but forget names?"></div>
            <div class="speakcheck" data-target="So this week, try just one small thing."></div>`,
          tips: [
            "Open with a question, fact, story or bold claim — never 'Erm, so…'.",
            "Bookend your talk: close by answering the question you opened with.",
            "End on your strong line — resist the urge to trail off."
          ],
          practice: "Write two different openings (a question and a surprising fact) for the same talk and say both aloud. Pick the one that grips you more.",
          quiz: [
            { q: "A strong opening could be…", choices: ["'Erm, so, today…'", "A question, fact, story or bold statement", "An apology", "Reading the agenda"], answer: 1 },
            { q: "A 'full circle' close means…", choices: ["Talking in circles", "Returning to your opening hook", "Repeating everything", "Ending early"], answer: 1 },
            { q: "How should you end?", choices: ["Trail off with 'yeah, that's it'", "On a strong line, then a confident thank you", "By apologising", "Abruptly walk off"], answer: 1 }
          ]
        },
        {
          id: "s3", level: "Advanced", minutes: 11,
          title: "Delivery: voice, pace, pauses & body language",
          content: `
            <p>How you say it often matters more than the words. Great delivery is mostly about <b>variety</b> and <b>control</b>.</p>
            <h3>Use your voice as an instrument</h3>
            <ul>
              <li><b>Pace:</b> slow down for important points; a little quicker for stories.</li>
              <li><b>Pause:</b> the most underused tool. Pause <b>before</b> a key idea (builds anticipation) and <b>after</b> it (lets it land). <button class="say" data-say="And the result… was extraordinary.">🔊</button></li>
              <li><b>Pitch:</b> vary it — a flat monotone is the fastest way to lose a room.</li>
              <li><b>Volume:</b> drop your voice and people lean in; raise it for emphasis.</li>
            </ul>
            <h3>Banish the filler 'um'</h3>
            <p>When you'd say 'um', say <b>nothing</b> instead. A confident silence sounds far better than 'errr'. Pauses make you seem in control.</p>
            <h3>Body language</h3>
            <ul>
              <li>Stand tall, feet planted; don't sway or pace nervously.</li>
              <li>Make real <b>eye contact</b> — talk to one person at a time for a few seconds.</li>
              <li>Use open gestures; keep hands out of pockets.</li>
              <li><b>Smile</b> where appropriate — it warms your whole tone.</li>
            </ul>
            <div class="speakcheck" data-target="And the result, after all that effort, was extraordinary." data-hint="Pause where the commas are. Let the last word land."></div>`,
          tips: [
            "The pause is your most powerful tool — before a point to build it, after to land it.",
            "Replace 'um' with silence; it reads as confidence, not a gap.",
            "Vary pace, pitch and volume — monotone loses the room fastest."
          ],
          practice: "Read the practice sentence aloud, pausing fully at each comma and stretching the final word. Record it and listen for the drama the pauses add.",
          quiz: [
            { q: "The most underused delivery tool is the…", choices: ["Loud voice", "Pause", "Fast pace", "Pointer"], answer: 1 },
            { q: "Instead of saying 'um', you should…", choices: ["Say 'um' louder", "Pause silently", "Apologise", "Speak faster"], answer: 1 },
            { q: "Good eye contact in a talk means…", choices: ["Staring at the floor", "Looking at one person at a time briefly", "Closing your eyes", "Reading slides only"], answer: 1 }
          ]
        },
        {
          id: "s4", level: "Advanced", minutes: 10,
          title: "Handling questions & taming the nerves",
          content: `
            <p>Two final hurdles: the Q&A and your own nerves. Both are very manageable with a little technique.</p>
            <h3>Handling questions like a pro</h3>
            <ol>
              <li><b>Listen fully</b>, then pause — it's fine to think. <button class="say" data-say="That's a really good question.">🔊</button></li>
              <li><b>Rephrase</b> if helpful: "So you're asking whether…"</li>
              <li><b>Answer concisely</b> — don't give a second speech.</li>
              <li>Don't know? Be honest: <button class="say" data-say="That's a great question. I don't have the figure to hand, but I'll find out and get back to you.">🔊</button></li>
            </ol>
            <h3>Dealing with a tricky questioner</h3>
            <p>Stay calm and gracious: <button class="say" data-say="I see it slightly differently, and here's why…">🔊 'I see it slightly differently, and here's why…'</button> Never get defensive.</p>
            <h3>Taming nerves</h3>
            <ul>
              <li><b>Prepare and rehearse out loud</b> — confidence comes from readiness.</li>
              <li><b>Breathe</b>: slow breaths before you start calm the body.</li>
              <li>Reframe nerves as <b>energy</b> — the adrenaline is helping you, not attacking you.</li>
              <li>Nail your <b>first line</b> by heart; once you're moving, nerves fade.</li>
            </ul>
            <h3>Putting it all together</h3>
            <p>You now have structure, openings, delivery and Q&A. Head to the <b>Presentation Mock</b> in the Speaking Lab and deliver a short talk start to finish.</p>
            <div class="speakcheck" data-target="That's a great question. Let me give you a short answer."></div>`,
          tips: [
            "Pause before answering a question — thinking time is allowed and looks composed.",
            "If you don't know, say so honestly and offer to follow up.",
            "Memorise your first sentence; once you're rolling, the nerves settle."
          ],
          practice: "Do the Presentation Mock: deliver a 2-minute talk, then have a friend (or you) ask two questions. Practise pausing before each answer.",
          quiz: [
            { q: "When you don't know the answer to a question, you should…", choices: ["Make something up", "Be honest and offer to follow up", "Ignore it", "End the talk"], answer: 1 },
            { q: "The best first step when handling a question is to…", choices: ["Interrupt", "Listen fully, then pause to think", "Argue", "Repeat your whole talk"], answer: 1 },
            { q: "A helpful way to manage nerves is to…", choices: ["Skip rehearsing", "Rehearse aloud and nail your first line", "Drink lots of coffee", "Avoid breathing"], answer: 1 }
          ]
        }
      ]
    }
  ]
};

/* Make available to the app whether loaded via <script> or modules. */
if (typeof window !== "undefined") { window.SPEAK_CURRICULUM = SPEAK_CURRICULUM; }
