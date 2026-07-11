// ============================================================
// Curriculum structure: Levels -> Units -> Challenges
// Level 1 (Units 1-3) is fully built out for this prototype;
// Levels 2-3 are "coming soon" placeholders so the navigation
// and points system can still be tested end to end.
//
// Vocab item shape: { id, hanzi, pinyin, meaning }
//   id      - unique within the unit, used to check matches/answers
//   meaning - short English gloss shown on flashcards & in quiz prompts
// ============================================================

// ------------------------------------------------------------
// Vocab is drawn straight from the YCT 1 Standard Course textbook
// (Confucius Institute HQ / Hanban), one array per lesson's
// "Let's learn" word list. meaning is kept short and distinct within
// a unit so the matching game and quiz never have two items that look
// like the same answer.
// ------------------------------------------------------------

// Lesson 1 — 你好！(Hello!): greetings + numbers 1–10
const L1_GREETINGS_VOCAB = [
  { id: 1, hanzi: "你", pinyin: "nǐ", meaning: "you" },
  { id: 2, hanzi: "好", pinyin: "hǎo", meaning: "good" },
  { id: 3, hanzi: "老师", pinyin: "lǎoshī", meaning: "teacher" },
  { id: 4, hanzi: "再见", pinyin: "zàijiàn", meaning: "goodbye" },
  { id: 5, hanzi: "一", pinyin: "yī", meaning: "1" },
  { id: 6, hanzi: "二", pinyin: "èr", meaning: "2" },
  { id: 7, hanzi: "三", pinyin: "sān", meaning: "3" },
  { id: 8, hanzi: "四", pinyin: "sì", meaning: "4" },
  { id: 9, hanzi: "五", pinyin: "wǔ", meaning: "5" },
  { id: 10, hanzi: "六", pinyin: "liù", meaning: "6" },
  { id: 11, hanzi: "七", pinyin: "qī", meaning: "7" },
  { id: 12, hanzi: "八", pinyin: "bā", meaning: "8" },
  { id: 13, hanzi: "九", pinyin: "jiǔ", meaning: "9" },
  { id: 14, hanzi: "十", pinyin: "shí", meaning: "10" },
];

// Lesson 2 — 你叫什么？(What's your name?)
const L2_NAME_VOCAB = [
  { id: 1, hanzi: "我", pinyin: "wǒ", meaning: "I, me" },
  { id: 2, hanzi: "叫", pinyin: "jiào", meaning: "to be called" },
  { id: 3, hanzi: "什么", pinyin: "shénme", meaning: "what" },
  { id: 4, hanzi: "认识", pinyin: "rènshi", meaning: "to know" },
  { id: 5, hanzi: "很", pinyin: "hěn", meaning: "very" },
  { id: 6, hanzi: "高兴", pinyin: "gāoxìng", meaning: "glad" },
  { id: 7, hanzi: "她", pinyin: "tā", meaning: "she, her" },
  { id: 8, hanzi: "吗", pinyin: "ma", meaning: "question word" },
  { id: 9, hanzi: "不", pinyin: "bù", meaning: "not" },
];

// Lesson 3 — 他是谁？(Who is he?)
const L3_WHOIS_VOCAB = [
  { id: 1, hanzi: "他", pinyin: "tā", meaning: "he, him" },
  { id: 2, hanzi: "是", pinyin: "shì", meaning: "to be (is)" },
  { id: 3, hanzi: "谁", pinyin: "shéi", meaning: "who" },
  { id: 4, hanzi: "哪", pinyin: "nǎ", meaning: "which" },
  { id: 5, hanzi: "国", pinyin: "guó", meaning: "country" },
  { id: 6, hanzi: "人", pinyin: "rén", meaning: "person" },
  { id: 7, hanzi: "中国", pinyin: "Zhōngguó", meaning: "China" },
  { id: 8, hanzi: "中国人", pinyin: "Zhōngguórén", meaning: "Chinese person" },
];

// Lesson 4 — 我家有四口人 (There are four people in my family)
const L4_FAMILY_VOCAB = [
  { id: 1, hanzi: "爸爸", pinyin: "bàba", meaning: "father" },
  { id: 2, hanzi: "妈妈", pinyin: "māma", meaning: "mother" },
  { id: 3, hanzi: "哥哥", pinyin: "gēge", meaning: "older brother" },
  { id: 4, hanzi: "姐姐", pinyin: "jiějie", meaning: "older sister" },
  { id: 5, hanzi: "妹妹", pinyin: "mèimei", meaning: "younger sister" },
  { id: 6, hanzi: "家", pinyin: "jiā", meaning: "family, home" },
  { id: 7, hanzi: "有", pinyin: "yǒu", meaning: "to have" },
  { id: 8, hanzi: "几", pinyin: "jǐ", meaning: "how many" },
  { id: 9, hanzi: "口", pinyin: "kǒu", meaning: "measure: people" },
  { id: 10, hanzi: "和", pinyin: "hé", meaning: "and" },
  { id: 11, hanzi: "没有", pinyin: "méiyǒu", meaning: "not have" },
  { id: 12, hanzi: "个", pinyin: "gè", meaning: "measure: general" },
];

function standardChallenges() {
  return [
    { id: "flashcards", title: "🗂️ Flashcards", desc: "Learn each word", points: 10, type: "flashcards" },
    { id: "matching", title: "🔗 Matching Game", desc: "Match characters to pinyin", points: 15, type: "matching" },
    { id: "quiz", title: "📝 Quiz", desc: "Test what you learned", points: 30, type: "quiz" },
  ];
}

const CURRICULUM = [
  {
    id: "level1", title: "Level 1", subtitle: "YCT 1 · Beginner",
    units: [
      {
        id: "unit1", title: "Lesson 1", theme: "你好！Hello! (greetings + 1–10)", available: true,
        vocab: L1_GREETINGS_VOCAB,
        challenges: standardChallenges(),
      },
      {
        id: "unit2", title: "Lesson 2", theme: "你叫什么？What's your name?", available: true,
        vocab: L2_NAME_VOCAB,
        challenges: standardChallenges(),
      },
      {
        id: "unit3", title: "Lesson 3", theme: "他是谁？Who is he?", available: true,
        vocab: L3_WHOIS_VOCAB,
        challenges: standardChallenges(),
      },
      {
        id: "unit4", title: "Lesson 4", theme: "我家有四口人 My family", available: true,
        vocab: L4_FAMILY_VOCAB,
        challenges: standardChallenges(),
      },
    ],
  },
  {
    id: "level2", title: "Level 2", subtitle: "Elementary",
    units: [
      { id: "unit1", title: "Unit 1", theme: "Animals (动物)", available: false, vocab: [], challenges: [] },
      { id: "unit2", title: "Unit 2", theme: "Food (食物)", available: false, vocab: [], challenges: [] },
      { id: "unit3", title: "Unit 3", theme: "School (学校)", available: false, vocab: [], challenges: [] },
    ],
  },
  {
    id: "level3", title: "Level 3", subtitle: "Intermediate",
    units: [
      { id: "unit1", title: "Unit 1", theme: "Weather (天气)", available: false, vocab: [], challenges: [] },
      { id: "unit2", title: "Unit 2", theme: "Time (时间)", available: false, vocab: [], challenges: [] },
      { id: "unit3", title: "Unit 3", theme: "Hobbies (爱好)", available: false, vocab: [], challenges: [] },
    ],
  },
];

// ============================================================
// State
// ============================================================
let studentName = "";
let studentEmail = "";
let studentRecord = { completed: {}, totalPoints: 0, location: null };
let currentLevel = null;
let currentUnit = null;
let currentChallenge = null;

let fcIndex = 0;
let quizIndex = 0;
let quizScore = 0;
let quizQuestions = [];
let matchSelectedHanzi = null;
let matchedCount = 0;

// Tracks which vocab ids the student pronounced correctly during the current
// flashcards run, so we can reward them and show a read-aloud tally.
let fcReadCorrect = new Set();

// Web Speech API for the flashcard "Read it" pronunciation check. Safari on
// iPad supports it (webkit-prefixed); it needs mic permission + a network
// connection. Feature-detected so the button hides where it's unavailable.
const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
let fcRecognizing = false;
// Hold-to-record state: the student presses and holds "Read it" to record,
// sees a live waveform, and releases to run the pronunciation check.
let fcRecording = false;
let fcStream = null, fcAudioCtx = null, fcAnalyser = null, fcRaf = null;
let fcRec = null, fcTarget = null, fcHeardMatch = false, fcLastHeard = "";

// The sign-in page's "Preview the student app" button opens this page with
// ?preview=1, which puts it into a no-login sandbox: no Google sign-in is
// required, the real identity and saved progress are ignored, and nothing is
// written back to the server. This is how anyone can try out the lessons
// (including on localhost, where the auth endpoints don't exist) without
// creating a student record or touching the live class dashboard.
const PREVIEW = new URLSearchParams(window.location.search).has("preview");

function $(id) { return document.getElementById(id); }

function showScreen(id) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
  $(id).classList.add("active");
  updateBreadcrumb(id);
}

// ============================================================
// Breadcrumb: a tappable "Levels › Level › Lesson › Game" path at the
// bottom, so students can jump back any number of steps at once instead
// of tapping Back repeatedly. How deep the path goes is driven purely by
// which screen is active.
// ============================================================
const SCREEN_DEPTH = {
  "screen-home": 0,
  "screen-level": 1,
  "screen-unit": 2,
  "screen-flashcards": 3,
  "screen-match": 3,
  "screen-quiz": 3,
  "screen-challenge-done": 3,
};

function goHome() {
  renderLevels();
  showScreen("screen-home");
  postLocation("Home");
}

function updateBreadcrumb(activeId) {
  const bar = $("breadcrumb");
  const depth = SCREEN_DEPTH[activeId];
  if (depth === undefined) { bar.classList.remove("visible"); return; }

  const items = [{ icon: "🏠", label: "Levels", go: goHome }];
  if (depth >= 1 && currentLevel) {
    items.push({ icon: "📂", label: currentLevel.title, go: () => openLevel(currentLevel) });
  }
  if (depth >= 2 && currentUnit) {
    items.push({ icon: "📖", label: currentUnit.title, go: () => openUnit(currentLevel, currentUnit) });
  }
  if (depth >= 3 && currentChallenge) {
    // challenge titles already carry their own emoji, so no extra icon
    items.push({ label: currentChallenge.title, go: () => startChallenge(currentLevel, currentUnit, currentChallenge) });
  }

  bar.innerHTML = "";
  items.forEach((item, i) => {
    if (i > 0) {
      const sep = document.createElement("span");
      sep.className = "crumb-sep";
      sep.textContent = "›";
      bar.appendChild(sep);
    }
    const isCurrent = i === items.length - 1;
    const btn = document.createElement("button");
    btn.className = "crumb" + (isCurrent ? " current" : "");
    btn.textContent = (item.icon ? item.icon + " " : "") + item.label;
    if (!isCurrent) btn.addEventListener("click", item.go);
    bar.appendChild(btn);
  });
  bar.classList.add("visible");
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function speak(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "zh-CN";
  u.rate = 0.8;
  window.speechSynthesis.speak(u);
}

function challengeKey(level, unit, challenge) {
  return `${level.id}-${unit.id}-${challenge.id}`;
}

async function postJSON(url, body) {
  if (PREVIEW) return null; // preview mode is a sandbox — never writes to the server
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "same-origin",
      body: JSON.stringify(body),
    });
    if (res.status === 401) {
      // Session expired or was never established - back to sign-in.
      window.location.href = "/index.html";
      return null;
    }
    return await res.json();
  } catch (e) {
    console.warn("Could not reach server:", e);
    return null;
  }
}

function postLocation(text) {
  studentRecord.location = text;
  postJSON("/api/location", { location: text });
}

// ============================================================
// Header
// ============================================================
function updateHeader() {
  $("app-header").classList.add("visible");
  $("header-name").textContent = studentName;
  $("header-points").textContent = `⭐ ${studentRecord.totalPoints} pts`;
}

$("home-btn").addEventListener("click", goHome);

$("logout-btn").addEventListener("click", async () => {
  if (PREVIEW) { window.location.href = "/index.html"; return; }
  await postJSON("/api/auth/logout", {});
  window.location.href = "/index.html";
});

// Preview-mode "Exit preview" button — returns to the sign-in page.
if ($("preview-exit-btn")) {
  $("preview-exit-btn").addEventListener("click", () => {
    window.location.href = "/index.html";
  });
}

// ============================================================
// AUTH: confirm the Google sign-in session, then load progress
// ============================================================
async function initAuth() {
  // Teacher previewing the student app: skip the real sign-in/progress load
  // entirely and start from a clean, in-memory sandbox record.
  if (PREVIEW) {
    document.body.classList.add("preview-mode");
    studentName = "Student view";
    studentEmail = "";
    studentRecord = { completed: {}, totalPoints: 0, location: null };
    updateHeader();
    renderLevels();
    showScreen("screen-home");
    return;
  }

  try {
    const res = await fetch("/api/auth/me", { credentials: "same-origin" });
    const data = await res.json();
    if (!data.authenticated) {
      window.location.href = "/index.html";
      return;
    }
    studentName = data.name;
    studentEmail = data.email;
  } catch (e) {
    console.warn("Could not verify sign-in:", e);
    window.location.href = "/index.html";
    return;
  }

  // Pull any existing record so progress/points carry over between
  // sessions and across different iPads.
  try {
    const res = await fetch("/api/my-progress", { credentials: "same-origin" });
    const record = await res.json();
    studentRecord = {
      completed: record.completed || {},
      totalPoints: record.totalPoints || 0,
      location: record.location || null,
    };
  } catch (e) {
    console.warn("Could not load student record:", e);
  }

  updateHeader();
  renderLevels();
  showScreen("screen-home");
  postLocation("Home");
}

// ============================================================
// HOME: LEVEL LIST
// ============================================================
function renderLevels() {
  const list = $("level-list");
  list.innerHTML = "";
  CURRICULUM.forEach((level) => {
    const anyAvailable = level.units.some((u) => u.available);
    const card = document.createElement("div");
    card.className = "level-card" + (anyAvailable ? "" : " locked");
    card.innerHTML = `
      <div class="title">${level.title}${anyAvailable ? "" : '<span class="badge-soon">Coming soon</span>'}</div>
      <div class="meta">${level.subtitle} · ${level.units.length} units</div>
    `;
    if (anyAvailable) {
      card.addEventListener("click", () => openLevel(level));
    }
    list.appendChild(card);
  });
}

function openLevel(level) {
  currentLevel = level;
  $("level-title").textContent = level.title;
  $("level-subtitle").textContent = level.subtitle;
  renderUnits(level);
  showScreen("screen-level");
  postLocation(`${level.title}`);
}

$("level-back-btn").addEventListener("click", goHome);

// ============================================================
// LEVEL: UNIT LIST
// ============================================================
function unitProgressText(level, unit) {
  if (!unit.available) return "Coming soon";
  const total = unit.challenges.length;
  const done = unit.challenges.filter((c) => studentRecord.completed[challengeKey(level, unit, c)]).length;
  return `${done}/${total} challenges done`;
}

function renderUnits(level) {
  const list = $("unit-list");
  list.innerHTML = "";
  level.units.forEach((unit) => {
    const card = document.createElement("div");
    card.className = "unit-card" + (unit.available ? "" : " locked");
    card.innerHTML = `
      <div class="title">${unit.title}${unit.available ? "" : '<span class="badge-soon">Coming soon</span>'}</div>
      <div class="meta">${unit.theme}</div>
      <div class="meta">${unitProgressText(level, unit)}</div>
    `;
    if (unit.available) {
      card.addEventListener("click", () => openUnit(level, unit));
    }
    list.appendChild(card);
  });
}

// ============================================================
// UNIT: CHALLENGE LIST
// ============================================================
function openUnit(level, unit) {
  currentUnit = unit;
  $("unit-title").textContent = unit.title;
  $("unit-theme").textContent = unit.theme;
  renderChallenges(level, unit);
  showScreen("screen-unit");
  postLocation(`${level.title} > ${unit.title}`);
}

function renderChallenges(level, unit) {
  const list = $("challenge-list");
  list.innerHTML = "";
  let allDone = true;

  unit.challenges.forEach((challenge) => {
    const key = challengeKey(level, unit, challenge);
    const earned = studentRecord.completed[key];
    if (!earned) allDone = false;

    const card = document.createElement("div");
    card.className = "challenge-card" + (earned ? " done" : "");
    card.innerHTML = `
      <div class="cc-text">
        <div class="cc-title">${challenge.title}</div>
        <div class="cc-desc">${challenge.desc}</div>
      </div>
      <div class="cc-points">${earned ? earned : "0"}/${challenge.points} pts</div>
      ${earned ? '<div class="cc-check">✅</div>' : ""}
    `;
    card.addEventListener("click", () => startChallenge(level, unit, challenge));
    list.appendChild(card);
  });

  $("unit-complete-banner").style.display = allDone && unit.challenges.length ? "block" : "none";
}

$("unit-back-btn").addEventListener("click", () => {
  renderUnits(currentLevel);
  showScreen("screen-level");
  postLocation(currentLevel.title);
});

// ============================================================
// CHALLENGE ROUTER
// ============================================================
function startChallenge(level, unit, challenge) {
  currentChallenge = challenge;
  postLocation(`${level.title} > ${unit.title} > ${challenge.title}`);
  if (challenge.type === "flashcards") startFlashcards(unit);
  else if (challenge.type === "matching") startMatchGame(unit);
  else if (challenge.type === "quiz") startQuiz(unit);
}

function finishChallenge(points, message) {
  const key = challengeKey(currentLevel, currentUnit, currentChallenge);
  const prevBest = studentRecord.completed[key] || 0;
  const newBest = Math.max(prevBest, points);
  studentRecord.completed[key] = newBest;
  studentRecord.totalPoints = Object.values(studentRecord.completed).reduce((a, b) => a + b, 0);
  updateHeader();

  postJSON("/api/challenge-complete", {
    challengeKey: key,
    points,
    location: `${currentLevel.title} > ${currentUnit.title} > ${currentChallenge.title}`,
  });

  $("cd-points").textContent = `+${points}`;
  $("cd-instruction").textContent = message;
  showScreen("screen-challenge-done");
}

$("cd-continue").addEventListener("click", () => {
  renderChallenges(currentLevel, currentUnit);
  showScreen("screen-unit");
});

// ============================================================
// FLASHCARDS
// ============================================================
function startFlashcards(unit) {
  fcIndex = 0;
  fcReadCorrect = new Set();
  $("fc-title").textContent = "Learn — then read each word aloud 🎤";
  // Hide the "Read it" button entirely where speech recognition isn't available.
  $("fc-read").style.display = SpeechRecognitionAPI ? "" : "none";
  renderFlashcard(unit);
  showScreen("screen-flashcards");
}

function renderFlashcard(unit) {
  const vocab = unit.vocab;
  const item = vocab[fcIndex];
  $("fc-hanzi").textContent = item.hanzi;
  $("fc-pinyin").textContent = item.pinyin;
  $("fc-numeral").textContent = item.meaning;
  $("fc-prev").disabled = fcIndex === 0;
  $("fc-next").textContent = fcIndex === vocab.length - 1 ? "Finish" : "Next";
  setReadFeedback("", "");
  resetReadButton();
  renderFlashcardDots();
}

function renderFlashcardDots() {
  const vocab = currentUnit.vocab;
  const dots = $("fc-dots");
  dots.innerHTML = "";
  vocab.forEach((v, i) => {
    const d = document.createElement("div");
    d.className =
      "dot" + (i <= fcIndex ? " done" : "") + (fcReadCorrect.has(v.id) ? " read" : "");
    dots.appendChild(d);
  });
}

function finishFlashcards() {
  const total = currentUnit.vocab.length;
  const readCount = currentUnit.vocab.filter((v) => fcReadCorrect.has(v.id)).length;
  const message =
    readCount > 0
      ? `You read ${readCount}/${total} words aloud! 🎤 Nice work!`
      : "Nice work! Keep going.";
  finishChallenge(currentChallenge.points, message);
}

// ---- "Read it" pronunciation check -----------------------------------------
function setReadFeedback(state, msg) {
  const el = $("fc-read-feedback");
  el.className = "fc-read-feedback " + (state || "");
  el.textContent = msg || "";
}

function resetReadButton() {
  const btn = $("fc-read");
  btn.disabled = false;
  btn.classList.remove("recording");
  btn.textContent = "🎤 Hold to read";
}

function normalizeSpoken(s) {
  // Drop spaces and punctuation so "你好。" and "你好" compare equal.
  return (s || "").replace(/[\s，。、！？,.!?·・]/g, "").trim();
}

function acceptableAnswers(item) {
  const ans = [item.hanzi];
  // Numbers: the recognizer may return the digit ("1") instead of 一.
  if (/^\d+$/.test(item.meaning)) ans.push(item.meaning);
  return ans.map(normalizeSpoken).filter(Boolean);
}

function readingMatches(heard, item) {
  const h = normalizeSpoken(heard);
  if (!h) return false;
  return acceptableAnswers(item).some((t) => h === t || h.includes(t) || t.includes(h));
}

// Press-and-hold: begin recording + show the live waveform, then check on release.
function beginReading() {
  if (!SpeechRecognitionAPI || fcRecording) return;
  fcTarget = currentUnit.vocab[fcIndex];
  fcHeardMatch = false;
  fcLastHeard = "";
  fcRecording = true;

  // Stop any text-to-speech so the mic doesn't pick up the app's own audio.
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();

  const btn = $("fc-read");
  btn.classList.add("recording");
  btn.textContent = "🎙️ Recording… (release to check)";
  setReadFeedback("listening", "Say the word now…");

  startWaveform();
  startRecognition();
}

function endReading() {
  if (!fcRecording) return;
  fcRecording = false;

  const btn = $("fc-read");
  btn.classList.remove("recording");
  btn.textContent = "🎤 Hold to read";

  stopWaveform();
  if (fcRec) { try { fcRec.stop(); } catch (e) {} }

  setReadFeedback("listening", "Analyzing…");
  // Give the engine a moment to deliver its final transcript, then decide.
  setTimeout(finalizeReading, 700);
}

function endReadingIfRecording() { if (fcRecording) endReading(); }

function finalizeReading() {
  if (!fcTarget || fcReadCorrect.has(fcTarget.id)) return;
  if (fcHeardMatch) {
    onReadCorrect(fcTarget);
  } else {
    setReadFeedback(
      "retry",
      fcLastHeard
        ? `Heard “${fcLastHeard}”. Not quite — hold 🎤 and try again.`
        : "Didn't catch that — hold 🎤 and try again."
    );
  }
}

function startRecognition() {
  let rec;
  try { rec = new SpeechRecognitionAPI(); } catch (e) { return; }
  fcRec = rec;
  rec.lang = "zh-CN";
  rec.interimResults = true;
  try { rec.continuous = true; } catch (e) {}
  rec.maxAlternatives = 3;

  rec.onresult = (e) => {
    let last = "";
    const start = e.resultIndex != null ? e.resultIndex : 0;
    for (let i = start; i < e.results.length; i++) {
      const r = e.results[i];
      for (let j = 0; j < r.length; j++) {
        if (j === 0) last = r[j].transcript;
        if (readingMatches(r[j].transcript, fcTarget)) fcHeardMatch = true;
      }
    }
    if (last) fcLastHeard = last;
    if (fcRecording) {
      setReadFeedback("listening", fcHeardMatch ? "✓ got it — release to check" : `Listening… “${fcLastHeard || "…"}”`);
    }
  };
  rec.onerror = (e) => {
    if (e.error === "not-allowed" || e.error === "service-not-allowed") {
      fcRecording = false;
      resetReadButton();
      stopWaveform();
      setReadFeedback("retry", "🎤 Allow microphone access to read aloud.");
    }
  };
  rec.onend = () => { fcRecognizing = false; };

  try { rec.start(); fcRecognizing = true; } catch (e) {}
}

// ---- live waveform (Web Audio) ---------------------------------------------
async function startWaveform() {
  const canvas = $("fc-waveform");
  if (!canvas || !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) return;
  canvas.classList.add("active");
  try {
    fcStream = await navigator.mediaDevices.getUserMedia({ audio: true });
  } catch (e) {
    canvas.classList.remove("active"); // no mic for visuals; recognition may still work
    return;
  }
  if (!fcRecording) { stopStream(); canvas.classList.remove("active"); return; } // released already

  const Ctx = window.AudioContext || window.webkitAudioContext;
  if (!Ctx) return;
  fcAudioCtx = new Ctx();
  const src = fcAudioCtx.createMediaStreamSource(fcStream);
  fcAnalyser = fcAudioCtx.createAnalyser();
  fcAnalyser.fftSize = 1024;
  src.connect(fcAnalyser);

  const data = new Uint8Array(fcAnalyser.fftSize);
  const ctx = canvas.getContext("2d");
  const draw = () => {
    fcRaf = requestAnimationFrame(draw);
    fcAnalyser.getByteTimeDomainData(data);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = "#4A90D9";
    ctx.beginPath();
    const slice = canvas.width / data.length;
    let x = 0;
    for (let i = 0; i < data.length; i++) {
      const y = (data[i] / 128.0) * (canvas.height / 2);
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      x += slice;
    }
    ctx.stroke();
  };
  draw();
}

function stopWaveform() {
  const canvas = $("fc-waveform");
  if (canvas) canvas.classList.remove("active");
  if (fcRaf) { cancelAnimationFrame(fcRaf); fcRaf = null; }
  if (fcAudioCtx) { try { fcAudioCtx.close(); } catch (e) {} fcAudioCtx = null; }
  fcAnalyser = null;
  stopStream();
}

function stopStream() {
  if (fcStream) { fcStream.getTracks().forEach((t) => t.stop()); fcStream = null; }
}

function onReadCorrect(item) {
  fcReadCorrect.add(item.id);
  setReadFeedback("correct", "✅ 对了! Great reading! ⭐");
  renderFlashcardDots();
  // Reward with momentum: after a beat, move to the next card (or finish).
  setTimeout(() => {
    if (item.id !== currentUnit.vocab[fcIndex].id) return; // student navigated away
    if (fcIndex < currentUnit.vocab.length - 1) {
      fcIndex++;
      renderFlashcard(currentUnit);
    } else {
      finishFlashcards();
    }
  }, 1100);
}

$("fc-speak").addEventListener("click", () => speak(currentUnit.vocab[fcIndex].hanzi));

// Hold-to-record: press starts recording, release (anywhere) runs the check.
$("fc-read").addEventListener("pointerdown", (e) => { e.preventDefault(); beginReading(); });
$("fc-read").addEventListener("contextmenu", (e) => e.preventDefault());
window.addEventListener("pointerup", endReadingIfRecording);
window.addEventListener("pointercancel", endReadingIfRecording);
$("fc-prev").addEventListener("click", () => {
  if (fcIndex > 0) { fcIndex--; renderFlashcard(currentUnit); }
});
$("fc-next").addEventListener("click", () => {
  if (fcIndex < currentUnit.vocab.length - 1) {
    fcIndex++;
    renderFlashcard(currentUnit);
  } else {
    finishFlashcards();
  }
});

// ============================================================
// MATCHING GAME
// ============================================================
function startMatchGame(unit) {
  matchedCount = 0;
  matchSelectedHanzi = null;
  const hanziCol = $("match-hanzi-col");
  const pinyinCol = $("match-pinyin-col");
  hanziCol.innerHTML = "";
  pinyinCol.innerHTML = "";

  const hanziOrder = shuffle(unit.vocab);
  const pinyinOrder = shuffle(unit.vocab);

  hanziOrder.forEach((item) => {
    const tile = document.createElement("div");
    tile.className = "tile";
    tile.textContent = item.hanzi;
    tile.dataset.key = item.id;
    tile.dataset.type = "hanzi";
    tile.addEventListener("click", onMatchTileClick);
    hanziCol.appendChild(tile);
  });

  pinyinOrder.forEach((item) => {
    const tile = document.createElement("div");
    tile.className = "tile";
    tile.textContent = item.pinyin;
    tile.dataset.key = item.id;
    tile.dataset.type = "pinyin";
    tile.addEventListener("click", onMatchTileClick);
    pinyinCol.appendChild(tile);
  });

  $("match-continue").disabled = true;
  $("match-continue").textContent = "Continue";
  showScreen("screen-match");
}

function onMatchTileClick(e) {
  const tile = e.currentTarget;
  if (tile.classList.contains("matched")) return;

  if (tile.dataset.type === "hanzi") {
    document.querySelectorAll('[data-type="hanzi"]').forEach((t) => t.classList.remove("selected"));
    tile.classList.add("selected");
    matchSelectedHanzi = tile;
    speak(tile.textContent);
    return;
  }

  if (!matchSelectedHanzi) return;
  if (matchSelectedHanzi.dataset.key === tile.dataset.key) {
    matchSelectedHanzi.classList.remove("selected");
    matchSelectedHanzi.classList.add("matched");
    tile.classList.add("matched");
    matchedCount++;
    matchSelectedHanzi = null;
    if (matchedCount === currentUnit.vocab.length) {
      $("match-continue").disabled = false;
    }
  } else {
    tile.classList.add("wrong");
    setTimeout(() => tile.classList.remove("wrong"), 400);
  }
}

$("match-continue").addEventListener("click", () => {
  finishChallenge(currentChallenge.points, "Nice work! Keep going.");
});

// ============================================================
// QUIZ
// ============================================================
function buildQuizQuestions(unit) {
  const count = Math.min(6, unit.vocab.length);
  const items = shuffle(unit.vocab).slice(0, count);
  return items.map((correct) => {
    const distractors = shuffle(unit.vocab.filter((i) => i.id !== correct.id)).slice(0, 3);
    const options = shuffle([correct, ...distractors]);
    return { correct, options };
  });
}

function startQuiz(unit) {
  quizIndex = 0;
  quizScore = 0;
  quizQuestions = buildQuizQuestions(unit);
  showScreen("screen-quiz");
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const q = quizQuestions[quizIndex];
  $("quiz-progress").textContent = `Quiz (Question ${quizIndex + 1} of ${quizQuestions.length})`;
  $("quiz-question").textContent = `Which character is "${q.correct.pinyin}" (${q.correct.meaning})?`;

  const optsDiv = $("quiz-options");
  optsDiv.innerHTML = "";
  q.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "opt-btn";
    btn.textContent = opt.hanzi;
    btn.addEventListener("click", () => onQuizAnswer(btn, opt, q.correct));
    optsDiv.appendChild(btn);
  });

  speak(q.correct.pinyin);
}

function onQuizAnswer(btn, chosen, correct) {
  document.querySelectorAll(".opt-btn").forEach((b) => (b.disabled = true));
  if (chosen.id === correct.id) {
    btn.classList.add("correct");
    quizScore++;
  } else {
    btn.classList.add("incorrect");
    document.querySelectorAll(".opt-btn").forEach((b) => {
      if (b.textContent === correct.hanzi) b.classList.add("correct");
    });
  }

  setTimeout(() => {
    quizIndex++;
    if (quizIndex < quizQuestions.length) {
      document.querySelectorAll(".opt-btn").forEach((b) => (b.disabled = false));
      renderQuizQuestion();
    } else {
      finishQuiz();
    }
  }, 900);
}

function finishQuiz() {
  const total = quizQuestions.length;
  const maxPoints = currentChallenge.points;
  const earned = Math.round((maxPoints * quizScore) / total);
  const message =
    quizScore >= total - 1
      ? `You scored ${quizScore}/${total} — mastered it! ✋ Show your teacher.`
      : quizScore >= total / 2
      ? `You scored ${quizScore}/${total} — good try! ✋ Show your teacher.`
      : `You scored ${quizScore}/${total} — let's review this together. ✋ Show your teacher.`;
  finishChallenge(earned, message);
}

// ============================================================
// Init
// ============================================================
initAuth();
