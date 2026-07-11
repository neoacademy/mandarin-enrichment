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

const NUMBERS_VOCAB = [
  { id: 1, hanzi: "一", pinyin: "yī", meaning: "1" },
  { id: 2, hanzi: "二", pinyin: "èr", meaning: "2" },
  { id: 3, hanzi: "三", pinyin: "sān", meaning: "3" },
  { id: 4, hanzi: "四", pinyin: "sì", meaning: "4" },
  { id: 5, hanzi: "五", pinyin: "wǔ", meaning: "5" },
  { id: 6, hanzi: "六", pinyin: "liù", meaning: "6" },
  { id: 7, hanzi: "七", pinyin: "qī", meaning: "7" },
  { id: 8, hanzi: "八", pinyin: "bā", meaning: "8" },
  { id: 9, hanzi: "九", pinyin: "jiǔ", meaning: "9" },
  { id: 10, hanzi: "十", pinyin: "shí", meaning: "10" },
];

const COLORS_VOCAB = [
  { id: 1, hanzi: "红", pinyin: "hóng", meaning: "red" },
  { id: 2, hanzi: "橙", pinyin: "chéng", meaning: "orange" },
  { id: 3, hanzi: "黄", pinyin: "huáng", meaning: "yellow" },
  { id: 4, hanzi: "绿", pinyin: "lǜ", meaning: "green" },
  { id: 5, hanzi: "蓝", pinyin: "lán", meaning: "blue" },
  { id: 6, hanzi: "紫", pinyin: "zǐ", meaning: "purple" },
  { id: 7, hanzi: "黑", pinyin: "hēi", meaning: "black" },
  { id: 8, hanzi: "白", pinyin: "bái", meaning: "white" },
  { id: 9, hanzi: "粉", pinyin: "fěn", meaning: "pink" },
  { id: 10, hanzi: "棕", pinyin: "zōng", meaning: "brown" },
];

const FAMILY_VOCAB = [
  { id: 1, hanzi: "爸爸", pinyin: "bàba", meaning: "dad" },
  { id: 2, hanzi: "妈妈", pinyin: "māma", meaning: "mom" },
  { id: 3, hanzi: "哥哥", pinyin: "gēge", meaning: "older brother" },
  { id: 4, hanzi: "姐姐", pinyin: "jiějie", meaning: "older sister" },
  { id: 5, hanzi: "弟弟", pinyin: "dìdi", meaning: "younger brother" },
  { id: 6, hanzi: "妹妹", pinyin: "mèimei", meaning: "younger sister" },
  { id: 7, hanzi: "爷爷", pinyin: "yéye", meaning: "grandpa" },
  { id: 8, hanzi: "奶奶", pinyin: "nǎinai", meaning: "grandma" },
  { id: 9, hanzi: "儿子", pinyin: "érzi", meaning: "son" },
  { id: 10, hanzi: "女儿", pinyin: "nǚ'ér", meaning: "daughter" },
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
    id: "level1", title: "Level 1", subtitle: "Beginner",
    units: [
      {
        id: "unit1", title: "Unit 1", theme: "Numbers 1–10 (数字 1–10)", available: true,
        vocab: NUMBERS_VOCAB,
        challenges: standardChallenges(),
      },
      {
        id: "unit2", title: "Unit 2", theme: "Colors (颜色)", available: true,
        vocab: COLORS_VOCAB,
        challenges: standardChallenges(),
      },
      {
        id: "unit3", title: "Unit 3", theme: "Family (家人)", available: true,
        vocab: FAMILY_VOCAB,
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

function $(id) { return document.getElementById(id); }

function showScreen(id) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
  $(id).classList.add("active");
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

$("home-btn").addEventListener("click", () => {
  renderLevels();
  showScreen("screen-home");
  postLocation("Home");
});

$("logout-btn").addEventListener("click", async () => {
  await postJSON("/api/auth/logout", {});
  window.location.href = "/index.html";
});

// ============================================================
// AUTH: confirm the Google sign-in session, then load progress
// ============================================================
async function initAuth() {
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

$("level-back-btn").addEventListener("click", () => {
  renderLevels();
  showScreen("screen-home");
  postLocation("Home");
});

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
  $("fc-title").textContent = "Learn";
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

  const dots = $("fc-dots");
  dots.innerHTML = "";
  vocab.forEach((_, i) => {
    const d = document.createElement("div");
    d.className = "dot" + (i <= fcIndex ? " done" : "");
    dots.appendChild(d);
  });
}

$("fc-speak").addEventListener("click", () => speak(currentUnit.vocab[fcIndex].hanzi));
$("fc-prev").addEventListener("click", () => {
  if (fcIndex > 0) { fcIndex--; renderFlashcard(currentUnit); }
});
$("fc-next").addEventListener("click", () => {
  if (fcIndex < currentUnit.vocab.length - 1) {
    fcIndex++;
    renderFlashcard(currentUnit);
  } else {
    finishChallenge(currentChallenge.points, "Nice work! Keep going.");
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
