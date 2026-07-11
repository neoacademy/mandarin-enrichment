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

// Lesson 5 — 我6岁 (I'm ... years old)
const L5_AGE_VOCAB = [
  { id: 1, hanzi: "岁", pinyin: "suì", meaning: "years old" },
  { id: 2, hanzi: "多大", pinyin: "duōdà", meaning: "how old" },
  { id: 3, hanzi: "也", pinyin: "yě", meaning: "also, too" },
  { id: 4, hanzi: "几", pinyin: "jǐ", meaning: "how many" },
];

// Lesson 6 — 你的个子真高！(You're so tall! — body & describing)
const L6_BODY_VOCAB = [
  { id: 1, hanzi: "的", pinyin: "de", meaning: "'s (of)" },
  { id: 2, hanzi: "小", pinyin: "xiǎo", meaning: "small" },
  { id: 3, hanzi: "大", pinyin: "dà", meaning: "big" },
  { id: 4, hanzi: "长", pinyin: "cháng", meaning: "long" },
  { id: 5, hanzi: "个子", pinyin: "gèzi", meaning: "height" },
  { id: 6, hanzi: "真", pinyin: "zhēn", meaning: "really" },
  { id: 7, hanzi: "高", pinyin: "gāo", meaning: "tall" },
  { id: 8, hanzi: "头发", pinyin: "tóufa", meaning: "hair" },
  { id: 9, hanzi: "鼻子", pinyin: "bízi", meaning: "nose" },
  { id: 10, hanzi: "眼睛", pinyin: "yǎnjing", meaning: "eye" },
  { id: 11, hanzi: "手", pinyin: "shǒu", meaning: "hand" },
  { id: 12, hanzi: "耳朵", pinyin: "ěrduo", meaning: "ear" },
];

// Lesson 7 — 这是谁的狗？(Whose dog is this? — animals & this/that)
const L7_ANIMALS_VOCAB = [
  { id: 1, hanzi: "这", pinyin: "zhè", meaning: "this" },
  { id: 2, hanzi: "那", pinyin: "nà", meaning: "that" },
  { id: 3, hanzi: "看", pinyin: "kàn", meaning: "to look" },
  { id: 4, hanzi: "这儿", pinyin: "zhèr", meaning: "here" },
  { id: 5, hanzi: "那儿", pinyin: "nàr", meaning: "there" },
  { id: 6, hanzi: "多", pinyin: "duō", meaning: "many" },
  { id: 7, hanzi: "猫", pinyin: "māo", meaning: "cat" },
  { id: 8, hanzi: "狗", pinyin: "gǒu", meaning: "dog" },
  { id: 9, hanzi: "鱼", pinyin: "yú", meaning: "fish" },
  { id: 10, hanzi: "鸟", pinyin: "niǎo", meaning: "bird" },
];

// Lesson 8 — 我去商店 (I'm going to the store — places & going)
const L8_PLACES_VOCAB = [
  { id: 1, hanzi: "在", pinyin: "zài", meaning: "at, in" },
  { id: 2, hanzi: "谢谢", pinyin: "xièxie", meaning: "thanks" },
  { id: 3, hanzi: "去", pinyin: "qù", meaning: "to go" },
  { id: 4, hanzi: "你们", pinyin: "nǐmen", meaning: "you (plural)" },
  { id: 5, hanzi: "我们", pinyin: "wǒmen", meaning: "we" },
  { id: 6, hanzi: "哪儿", pinyin: "nǎr", meaning: "where" },
  { id: 7, hanzi: "学校", pinyin: "xuéxiào", meaning: "school" },
  { id: 8, hanzi: "商店", pinyin: "shāngdiàn", meaning: "store" },
];

// Lesson 9 — 今天星期几？(What day is it? — days & dates)
const L9_TIME_VOCAB = [
  { id: 1, hanzi: "生日", pinyin: "shēngrì", meaning: "birthday" },
  { id: 2, hanzi: "月", pinyin: "yuè", meaning: "month" },
  { id: 3, hanzi: "号", pinyin: "hào", meaning: "date" },
  { id: 4, hanzi: "今天", pinyin: "jīntiān", meaning: "today" },
  { id: 5, hanzi: "明天", pinyin: "míngtiān", meaning: "tomorrow" },
  { id: 6, hanzi: "昨天", pinyin: "zuótiān", meaning: "yesterday" },
  { id: 7, hanzi: "星期", pinyin: "xīngqī", meaning: "week" },
  { id: 8, hanzi: "喜欢", pinyin: "xǐhuan", meaning: "to like" },
];

// Lesson 10 — 现在几点？(What time is it? — clock)
const L10_CLOCK_VOCAB = [
  { id: 1, hanzi: "现在", pinyin: "xiànzài", meaning: "now" },
  { id: 2, hanzi: "点", pinyin: "diǎn", meaning: "o'clock" },
  { id: 3, hanzi: "分", pinyin: "fēn", meaning: "minute" },
  { id: 4, hanzi: "见", pinyin: "jiàn", meaning: "to meet" },
  { id: 5, hanzi: "早上", pinyin: "zǎoshang", meaning: "morning" },
];

// Lesson 11 — 你吃什么？(What would you like to eat? — food & drink)
const L11_FOOD_VOCAB = [
  { id: 1, hanzi: "米饭", pinyin: "mǐfàn", meaning: "rice" },
  { id: 2, hanzi: "面条", pinyin: "miàntiáo", meaning: "noodles" },
  { id: 3, hanzi: "苹果", pinyin: "píngguǒ", meaning: "apple" },
  { id: 4, hanzi: "牛奶", pinyin: "niúnǎi", meaning: "milk" },
  { id: 5, hanzi: "水", pinyin: "shuǐ", meaning: "water" },
  { id: 6, hanzi: "吃", pinyin: "chī", meaning: "to eat" },
  { id: 7, hanzi: "喝", pinyin: "hē", meaning: "to drink" },
  { id: 8, hanzi: "爱", pinyin: "ài", meaning: "to love" },
  { id: 9, hanzi: "蛋糕", pinyin: "dàngāo", meaning: "cake" },
];

// Lesson 12 — 复习 (Review): a mixed set spanning Lessons 1–11.
const L12_REVIEW_VOCAB = [
  { id: 1, hanzi: "老师", pinyin: "lǎoshī", meaning: "teacher" },
  { id: 2, hanzi: "我", pinyin: "wǒ", meaning: "I, me" },
  { id: 3, hanzi: "中国", pinyin: "Zhōngguó", meaning: "China" },
  { id: 4, hanzi: "妈妈", pinyin: "māma", meaning: "mother" },
  { id: 5, hanzi: "岁", pinyin: "suì", meaning: "years old" },
  { id: 6, hanzi: "高", pinyin: "gāo", meaning: "tall" },
  { id: 7, hanzi: "狗", pinyin: "gǒu", meaning: "dog" },
  { id: 8, hanzi: "学校", pinyin: "xuéxiào", meaning: "school" },
  { id: 9, hanzi: "今天", pinyin: "jīntiān", meaning: "today" },
  { id: 10, hanzi: "现在", pinyin: "xiànzài", meaning: "now" },
  { id: 11, hanzi: "苹果", pinyin: "píngguǒ", meaning: "apple" },
  { id: 12, hanzi: "喜欢", pinyin: "xǐhuan", meaning: "to like" },
];

function standardChallenges() {
  return [
    { id: "flashcards", title: "🗂️ Flashcards", desc: "Learn each word", type: "flashcards" },
    { id: "matching", title: "🔗 Matching Game", desc: "Match characters to pinyin", type: "matching" },
    { id: "quiz", title: "📝 Quiz", desc: "Test what you learned", type: "quiz" },
  ];
}

// The full "four skills" set: a Learn step (flashcards) followed by graded
// Listening, Speaking, Reading and Writing tests. Used by every Level 1 unit.
// (standardChallenges() above is the older 3-challenge model, kept for future
// levels that aren't built out to the four-skill structure yet.)
function fourSkillChallenges() {
  return [
    { id: "flashcards", title: "🗂️ Flashcards", desc: "Learn each word", type: "flashcards" },
    { id: "listening", title: "👂 Listening", desc: "Hear it, tap the character", type: "listening" },
    { id: "speaking", title: "🗣️ Speaking", desc: "Read each word aloud", type: "speaking" },
    { id: "reading", title: "📖 Reading", desc: "Read it, tap the meaning", type: "reading" },
    { id: "writing", title: "✍️ Writing", desc: "Trace each character", type: "writing" },
  ];
}

const CURRICULUM = [
  {
    id: "level1", title: "Level 1", subtitle: "YCT 1 · Beginner",
    units: [
      {
        id: "unit1", title: "Lesson 1", theme: "你好！Hello! (greetings + 1–10)", available: true,
        vocab: L1_GREETINGS_VOCAB,
        challenges: fourSkillChallenges(),
      },
      {
        id: "unit2", title: "Lesson 2", theme: "你叫什么？What's your name?", available: true,
        vocab: L2_NAME_VOCAB,
        challenges: fourSkillChallenges(),
      },
      {
        id: "unit3", title: "Lesson 3", theme: "他是谁？Who is he?", available: true,
        vocab: L3_WHOIS_VOCAB,
        challenges: fourSkillChallenges(),
      },
      {
        id: "unit4", title: "Lesson 4", theme: "我家有四口人 My family", available: true,
        vocab: L4_FAMILY_VOCAB,
        challenges: fourSkillChallenges(),
      },
      {
        id: "unit5", title: "Lesson 5", theme: "我6岁 Age", available: true,
        vocab: L5_AGE_VOCAB,
        challenges: fourSkillChallenges(),
      },
      {
        id: "unit6", title: "Lesson 6", theme: "你的个子真高！Body & describing", available: true,
        vocab: L6_BODY_VOCAB,
        challenges: fourSkillChallenges(),
      },
      {
        id: "unit7", title: "Lesson 7", theme: "这是谁的狗？Animals", available: true,
        vocab: L7_ANIMALS_VOCAB,
        challenges: fourSkillChallenges(),
      },
      {
        id: "unit8", title: "Lesson 8", theme: "我去商店 Places & going", available: true,
        vocab: L8_PLACES_VOCAB,
        challenges: fourSkillChallenges(),
      },
      {
        id: "unit9", title: "Lesson 9", theme: "今天星期几？Days & dates", available: true,
        vocab: L9_TIME_VOCAB,
        challenges: fourSkillChallenges(),
      },
      {
        id: "unit10", title: "Lesson 10", theme: "现在几点？Time", available: true,
        vocab: L10_CLOCK_VOCAB,
        challenges: fourSkillChallenges(),
      },
      {
        id: "unit11", title: "Lesson 11", theme: "你吃什么？Food & drink", available: true,
        vocab: L11_FOOD_VOCAB,
        challenges: fourSkillChallenges(),
      },
      {
        id: "unit12", title: "Lesson 12", theme: "复习 Review", available: true,
        vocab: L12_REVIEW_VOCAB,
        challenges: fourSkillChallenges(),
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
let studentRecord = { completed: {}, totalPoints: 0, location: null, miniGamePoints: 0, lastMiniGameAt: null };
let currentLevel = null;
let currentUnit = null;
let currentChallenge = null;

let fcIndex = 0;
let fcMode = "learn";
let quizIndex = 0;
let quizScore = 0;
let quizQuestions = [];

// Listening / Reading (multiple-choice) and Writing (stroke tracing) state.
let mcqQuestions = [], mcqIndex = 0, mcqScore = 0;
let writeWords = [], writeIndex = 0, writeDone = 0;
let matchSelectedHanzi = null;
let matchedCount = 0;

// Daily Challenge mini-game: a 60s timed rapid-fire quiz over vocab from
// every unit the student has already completed, playable once per 24h.
const MINIGAME_DURATION_S = 60;
const MINIGAME_COOLDOWN_MS = 24 * 60 * 60 * 1000;
let mgScore = 0;
let mgTimeLeft = MINIGAME_DURATION_S;
let mgInterval = null;
let mgQuestion = null;
let mgPool = [];
let mgActive = false;
let mgAnswering = false; // true between an answer tap and the next question, to ignore double-taps

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
let fcRaf = null;
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
  "screen-listening": 3,
  "screen-reading": 3,
  "screen-writing": 3,
  "screen-challenge-done": 3,
};

function goHome() {
  stopMiniGameIfRunning();
  renderLevels();
  renderMiniGameCard();
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
    studentRecord = { completed: {}, totalPoints: 0, location: null, miniGamePoints: 0, lastMiniGameAt: null };
    updateHeader();
    renderLevels();
    renderMiniGameCard();
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
      miniGamePoints: record.miniGamePoints || 0,
      lastMiniGameAt: record.lastMiniGameAt || null,
    };
  } catch (e) {
    console.warn("Could not load student record:", e);
  }

  updateHeader();
  renderLevels();
  renderMiniGameCard();
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

function isUnitComplete(level, unit) {
  if (!unit.available || !unit.challenges.length) return false;
  return unit.challenges.every((c) => {
    const key = challengeKey(level, unit, c);
    return c.type === "flashcards" ? key in studentRecord.completed : !!studentRecord.completed[key];
  });
}

// Horizontal offsets (px) that repeat to make the unit list wind left/right
// down the screen, Duolingo-style, instead of a plain vertical stack.
const PATH_OFFSETS = [0, 62, 98, 62, 0, -62, -98, -62];

function renderUnits(level) {
  const list = $("unit-list");
  list.innerHTML = "";

  // The one unit that gets the pulsing highlight + "START" callout: the
  // first available unit the student hasn't finished yet.
  const nextUnit = level.units.find((u) => u.available && !isUnitComplete(level, u));

  level.units.forEach((unit, i) => {
    const complete = isUnitComplete(level, unit);
    const isNext = unit === nextUnit;

    const step = document.createElement("div");
    step.className = "path-step";
    step.style.setProperty("--offset", `${PATH_OFFSETS[i % PATH_OFFSETS.length]}px`);

    const node = document.createElement("button");
    node.className =
      "path-node" +
      (!unit.available ? " locked" : complete ? " complete" : "") +
      (isNext ? " current" : "");
    node.textContent = !unit.available ? "🔒" : complete ? "✓" : String(i + 1);
    if (unit.available) node.addEventListener("click", () => openUnit(level, unit));
    else node.disabled = true;
    step.appendChild(node);

    if (isNext) {
      const callout = document.createElement("div");
      callout.className = "path-callout";
      callout.textContent = "START";
      step.appendChild(callout);
    }

    const label = document.createElement("div");
    label.className = "path-label";
    label.innerHTML = `
      <div class="path-title">${unit.title}${unit.available ? "" : '<span class="badge-soon">Coming soon</span>'}</div>
      <div class="path-theme">${unit.theme}</div>
      <div class="path-progress">${unitProgressText(level, unit)}</div>
    `;
    step.appendChild(label);

    list.appendChild(step);
  });
}

// ============================================================
// DAILY CHALLENGE (mini-game): a 60s timed rapid quiz over vocab from every
// unit the student has already completed, playable once per 24h. Unlocked
// after finishing at least one unit anywhere in the curriculum.
// ============================================================
function hasCompletedAnyUnit() {
  return CURRICULUM.some((level) => level.units.some((unit) => isUnitComplete(level, unit)));
}

// Vocab ids only unique *within* a unit (every lesson array restarts at 1),
// so this pool is used and compared by object reference, never by id.
function miniGameVocabPool() {
  const pool = [];
  CURRICULUM.forEach((level) => {
    level.units.forEach((unit) => {
      if (isUnitComplete(level, unit)) pool.push(...unit.vocab);
    });
  });
  return pool;
}

function formatCooldown(ms) {
  const totalMin = Math.max(1, Math.ceil(ms / 60000));
  const h = Math.floor(totalMin / 60);
  const m = totalMin % 60;
  return h > 0 ? `${h}h ${m}m` : `${m}m`;
}

function renderMiniGameCard() {
  const card = $("minigame-card");
  if (!card) return;

  if (!hasCompletedAnyUnit()) {
    card.className = "minigame-card locked";
    card.innerHTML = `
      <div class="mg-card-title">🎮 Daily Challenge</div>
      <div class="mg-card-sub">🔒 Finish your first lesson to unlock!</div>
    `;
    card.onclick = null;
    return;
  }

  const remaining = MINIGAME_COOLDOWN_MS - (Date.now() - (studentRecord.lastMiniGameAt || 0));
  if (remaining > 0) {
    card.className = "minigame-card cooldown";
    card.innerHTML = `
      <div class="mg-card-title">🎮 Daily Challenge</div>
      <div class="mg-card-sub">✅ Done for today! Next one in ${formatCooldown(remaining)}</div>
    `;
    card.onclick = null;
    return;
  }

  card.className = "minigame-card ready";
  card.innerHTML = `
    <div class="mg-card-title">🎮 Daily Challenge</div>
    <div class="mg-card-sub">Ready! Answer as many as you can in 60 seconds ⭐</div>
  `;
  card.onclick = openMiniGameIntro;
}

function openMiniGameIntro() {
  if (!hasCompletedAnyUnit()) return; // defensive; card isn't clickable otherwise
  showScreen("screen-minigame-intro");
  postLocation("Daily Challenge");
}

function stopMiniGameIfRunning() {
  if (mgInterval) { clearInterval(mgInterval); mgInterval = null; }
  mgActive = false;
}

function startMiniGame() {
  mgPool = miniGameVocabPool();
  mgScore = 0;
  mgTimeLeft = MINIGAME_DURATION_S;
  mgActive = true;
  mgAnswering = false;
  $("mg-score").textContent = "0";
  $("mg-timer").textContent = String(mgTimeLeft);
  sfxContext(); // unlock chimes within this tap gesture
  showScreen("screen-minigame");
  renderMiniGameQuestion();
  mgInterval = setInterval(tickMiniGame, 1000);
}

function tickMiniGame() {
  mgTimeLeft--;
  $("mg-timer").textContent = String(Math.max(0, mgTimeLeft));
  if (mgTimeLeft <= 0) {
    clearInterval(mgInterval);
    mgInterval = null;
    finishMiniGame();
  }
}

// Alternates between "reading" (see hanzi, tap the meaning) and "listening"
// (hear it, tap the hanzi) so revision exercises both senses.
function buildMiniGameQuestion(pool) {
  const mode = Math.random() < 0.5 ? "reading" : "listening";
  const field = mode === "reading" ? "meaning" : "hanzi";
  const correct = pool[Math.floor(Math.random() * pool.length)];

  // Prefer distractors with distinct display text — vocab repeats across
  // lessons (e.g. the Lesson 12 review set), and two options that look
  // identical would be confusing.
  const usedText = new Set([correct[field]]);
  const rest = shuffle(pool.filter((v) => v !== correct));
  const distractors = [];
  for (const v of rest) {
    if (distractors.length >= 3) break;
    if (usedText.has(v[field])) continue;
    usedText.add(v[field]);
    distractors.push(v);
  }
  // Fallback for a very small pool: allow text repeats rather than serve
  // fewer than 4 options.
  for (const v of rest) {
    if (distractors.length >= 3) break;
    if (!distractors.includes(v)) distractors.push(v);
  }

  return { mode, correct, options: shuffle([correct, ...distractors]) };
}

function renderMiniGameQuestion() {
  mgQuestion = buildMiniGameQuestion(mgPool);
  const q = mgQuestion;

  $("mg-mode-label").textContent = q.mode === "reading" ? "📖 Tap the meaning" : "👂 Tap what you hear";
  $("mg-prompt").innerHTML =
    q.mode === "reading"
      ? `<p class="hanzi mg-hanzi">${q.correct.hanzi}</p>`
      : `<button class="speak-btn" id="mg-replay">🔊 Play again</button>`;
  if (q.mode === "listening") {
    $("mg-replay").addEventListener("click", () => speak(q.correct.hanzi));
    speak(q.correct.hanzi);
  }

  const opts = $("mg-options");
  opts.innerHTML = "";
  q.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "opt-btn" + (q.mode === "reading" ? " opt-meaning" : "");
    btn.textContent = q.mode === "reading" ? opt.meaning : opt.hanzi;
    btn.addEventListener("click", () => answerMiniGame(btn, opt));
    opts.appendChild(btn);
  });
}

function answerMiniGame(btn, chosen) {
  if (mgAnswering || !mgActive) return;
  mgAnswering = true;
  document.querySelectorAll("#mg-options .opt-btn").forEach((b) => (b.disabled = true));

  const correct = mgQuestion.correct;
  const correctLabel = mgQuestion.mode === "reading" ? correct.meaning : correct.hanzi;
  if (chosen === correct) {
    btn.classList.add("correct");
    mgScore++;
    $("mg-score").textContent = String(mgScore);
    playDing();
  } else {
    btn.classList.add("incorrect");
    document.querySelectorAll("#mg-options .opt-btn").forEach((b) => {
      if (b.textContent === correctLabel) b.classList.add("correct");
    });
    playError();
  }

  setTimeout(() => {
    mgAnswering = false;
    if (mgActive && mgTimeLeft > 0) renderMiniGameQuestion();
  }, 500);
}

function finishMiniGame() {
  mgActive = false;
  const earned = mgScore;

  studentRecord.miniGamePoints = (studentRecord.miniGamePoints || 0) + earned;
  studentRecord.lastMiniGameAt = Date.now();
  studentRecord.totalPoints =
    Object.values(studentRecord.completed).reduce((a, b) => a + b, 0) + studentRecord.miniGamePoints;
  updateHeader();

  postJSON("/api/minigame-complete", { points: earned });

  $("mg-done-score").textContent = `+${earned}`;
  $("mg-done-message").textContent =
    earned === 0
      ? "Come back tomorrow for another round!"
      : `You answered ${earned} correctly! Come back tomorrow for another round.`;
  showScreen("screen-minigame-done");
}

$("mg-start-btn").addEventListener("click", startMiniGame);
$("mg-intro-back-btn").addEventListener("click", goHome);
$("mg-done-continue").addEventListener("click", goHome);

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

// Each correct answer is worth 1 point, so a challenge's max = its number of
// items. Flashcards is the Learn step and isn't scored at all.
function challengeMaxPoints(unit, challenge) {
  const n = unit.vocab.length;
  switch (challenge.type) {
    case "listening":
    case "reading":
    case "quiz":
    case "writing":
      return Math.min(6, n);
    default: // speaking, matching
      return n;
  }
}

function renderChallenges(level, unit) {
  const list = $("challenge-list");
  list.innerHTML = "";
  let allDone = true;

  unit.challenges.forEach((challenge) => {
    const key = challengeKey(level, unit, challenge);
    const isLearn = challenge.type === "flashcards";
    const earned = studentRecord.completed[key];
    // Learn is "done" once visited (recorded, even as 0); scored challenges
    // count as done once at least one point is earned.
    const done = isLearn ? (key in studentRecord.completed) : !!earned;
    if (!done) allDone = false;

    const scoreLabel = isLearn
      ? "Learn"
      : `${earned || 0}/${challengeMaxPoints(unit, challenge)} pts`;

    const card = document.createElement("div");
    card.className = "challenge-card" + (done ? " done" : "");
    card.innerHTML = `
      <div class="cc-text">
        <div class="cc-title">${challenge.title}</div>
        <div class="cc-desc">${challenge.desc}</div>
      </div>
      <div class="cc-points">${scoreLabel}</div>
      ${done ? '<div class="cc-check">✅</div>' : ""}
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
  if (challenge.type === "flashcards") startFlashcards(unit, "learn");
  else if (challenge.type === "speaking") startFlashcards(unit, "speaking");
  else if (challenge.type === "listening") startListening(unit);
  else if (challenge.type === "reading") startReadingChallenge(unit);
  else if (challenge.type === "writing") startWriting(unit);
  else if (challenge.type === "matching") startMatchGame(unit);
  else if (challenge.type === "quiz") startQuiz(unit);
}

// learned=true records completion of the Learn step without showing/earning
// points (the points banner is hidden).
function finishChallenge(points, message, learned) {
  const key = challengeKey(currentLevel, currentUnit, currentChallenge);
  const prevBest = studentRecord.completed[key] || 0;
  studentRecord.completed[key] = Math.max(prevBest, points);
  studentRecord.totalPoints = Object.values(studentRecord.completed).reduce((a, b) => a + b, 0);
  updateHeader();

  postJSON("/api/challenge-complete", {
    challengeKey: key,
    points,
    location: `${currentLevel.title} > ${currentUnit.title} > ${currentChallenge.title}`,
  });

  const banner = $("cd-points-banner");
  if (banner) banner.style.display = learned ? "none" : "";
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
// mode: "learn" (Flashcards challenge — reading aloud is optional practice)
//       "speaking" (Speaking test — score = how many words read aloud correctly)
function startFlashcards(unit, mode) {
  fcMode = mode || "learn";
  fcIndex = 0;
  fcReadCorrect = new Set();
  $("fc-title").textContent =
    fcMode === "speaking"
      ? "Speaking — hold 🎤 and read each word aloud"
      : "Learn — study each word";
  // "Hold to read" belongs to the Speaking test only. Flashcards is pure
  // learning, so hide it there (also hidden where speech isn't supported).
  $("fc-read").style.display = fcMode === "speaking" && SpeechRecognitionAPI ? "" : "none";
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
  if (fcMode === "speaking") {
    // Speaking test: 1 point per word pronounced correctly.
    const total = currentUnit.vocab.length;
    const readCount = currentUnit.vocab.filter((v) => fcReadCorrect.has(v.id)).length;
    finishChallenge(readCount, `You read ${readCount}/${total} words aloud! 🎤`);
  } else {
    // Learn step: no score.
    finishChallenge(0, "You've learned these words! 🎉 Now try the tests.", true);
  }
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

// ---- sound effects (synthesized, no audio files) ---------------------------
// Reused AudioContext for the correct/incorrect chimes. Created + resumed
// inside the press gesture (see beginReading) so iOS Safari lets it play.
let sfxCtx = null;
function sfxContext() {
  const Ctx = window.AudioContext || window.webkitAudioContext;
  if (!Ctx) return null;
  if (!sfxCtx) sfxCtx = new Ctx();
  if (sfxCtx.state === "suspended") sfxCtx.resume();
  return sfxCtx;
}

function sfxTone(ctx, freq, at, dur, type, peak) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(0.0001, at);
  gain.gain.exponentialRampToValueAtTime(peak, at + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, at + dur);
  osc.connect(gain).connect(ctx.destination);
  osc.start(at);
  osc.stop(at + dur);
}

function playDing() {
  const ctx = sfxContext();
  if (!ctx) return;
  const t = ctx.currentTime;
  sfxTone(ctx, 880.0, t, 0.16, "sine", 0.3);        // A5
  sfxTone(ctx, 1318.5, t + 0.13, 0.30, "sine", 0.3); // E6 — "ding-ding" rising
}

function playError() {
  const ctx = sfxContext();
  if (!ctx) return;
  const t = ctx.currentTime;
  sfxTone(ctx, 220.0, t, 0.16, "square", 0.16);      // low, descending buzz
  sfxTone(ctx, 164.8, t + 0.13, 0.26, "square", 0.16);
}

// Press-and-hold: begin recording + show the live waveform, then check on release.
function beginReading() {
  if (!SpeechRecognitionAPI || fcRecording) return;
  fcTarget = currentUnit.vocab[fcIndex];
  fcHeardMatch = false;
  fcLastHeard = "";
  fcRecording = true;

  // Unlock the sound-effect audio here, inside the press gesture, so the
  // correct/incorrect chime can play later (iOS requires a user gesture).
  sfxContext();

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
    playError();
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

// ---- recording waveform (animated) -----------------------------------------
// A synthetic animated waveform shown while holding the button. It is NOT
// driven by the mic on purpose: the speech recognizer already owns the
// microphone, and opening a second getUserMedia stream for a real analyser
// made Chrome re-prompt for permission and starved the recognizer of audio
// (so it couldn't catch anything). This animation just signals "recording".
function startWaveform() {
  const canvas = $("fc-waveform");
  if (!canvas) return;
  canvas.classList.add("active");
  let ctx = null;
  try { ctx = canvas.getContext("2d"); } catch (e) {}
  if (!ctx) return;

  const W = canvas.width, H = canvas.height;
  const now = () => (window.performance && performance.now ? performance.now() : Date.now());
  const start = now();
  const render = () => {
    fcRaf = requestAnimationFrame(render);
    const t = (now() - start) / 1000;
    ctx.clearRect(0, 0, W, H);
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = fcHeardMatch ? "#4CAF50" : "#4A90D9";
    ctx.beginPath();
    for (let x = 0; x <= W; x += 3) {
      const p = x / W;
      const envelope = 0.4 + 0.6 * Math.abs(Math.sin(t * 2.3 + p * 3.1));
      const wobble = 0.5 + 0.5 * Math.sin(t * 6.7 + p * 9.0);
      const y = H / 2 + Math.sin(p * 22 + t * 11) * (H * 0.34) * envelope * wobble;
      x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.stroke();
  };
  fcRaf = requestAnimationFrame(render);
}

function stopWaveform() {
  const canvas = $("fc-waveform");
  if (canvas) canvas.classList.remove("active");
  if (fcRaf) { cancelAnimationFrame(fcRaf); fcRaf = null; }
}

function onReadCorrect(item) {
  fcReadCorrect.add(item.id);
  playDing();
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
  finishChallenge(matchedCount, "Nice work! Keep going."); // 1 point per matched pair
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
  const message =
    quizScore >= total - 1
      ? `You scored ${quizScore}/${total} — mastered it! ✋ Show your teacher.`
      : quizScore >= total / 2
      ? `You scored ${quizScore}/${total} — good try! ✋ Show your teacher.`
      : `You scored ${quizScore}/${total} — let's review this together. ✋ Show your teacher.`;
  finishChallenge(quizScore, message); // 1 point per correct answer
}

// ============================================================
// Shared multiple-choice engine (Listening + Reading tests)
// ============================================================
function buildMcqQuestions(unit) {
  const count = Math.min(6, unit.vocab.length);
  const items = shuffle(unit.vocab).slice(0, count);
  return items.map((correct) => {
    const distractors = shuffle(unit.vocab.filter((i) => i.id !== correct.id)).slice(0, 3);
    return { correct, options: shuffle([correct, ...distractors]) };
  });
}

// render(question, index) draws the prompt + options; onDone(score, total) finishes.
function renderMcq(screenId, progressId, optionsId, render) {
  showScreen(screenId);
  const q = mcqQuestions[mcqIndex];
  $(progressId).textContent = `${mcqIndex + 1} of ${mcqQuestions.length}`;
  render(q);
}

function answerMcq(optionsId, chosen, correct, matchText, next) {
  const btns = document.querySelectorAll(`#${optionsId} .opt-btn`);
  btns.forEach((b) => (b.disabled = true));
  const chosenBtn = Array.from(btns).find((b) => b.dataset.id === String(chosen.id));
  if (chosen.id === correct.id) {
    if (chosenBtn) chosenBtn.classList.add("correct");
    mcqScore++;
    playDing();
  } else {
    if (chosenBtn) chosenBtn.classList.add("incorrect");
    btns.forEach((b) => { if (b.dataset.id === String(correct.id)) b.classList.add("correct"); });
    playError();
  }
  setTimeout(() => { mcqIndex++; next(); }, 900);
}

function finishMcq() {
  const total = mcqQuestions.length;
  const message =
    mcqScore >= total - 1
      ? `You got ${mcqScore}/${total} — excellent! ✋ Show your teacher.`
      : mcqScore >= total / 2
      ? `You got ${mcqScore}/${total} — good job!`
      : `You got ${mcqScore}/${total} — let's practice this more.`;
  finishChallenge(mcqScore, message); // 1 point per correct answer
}

function mcqOption(opt, label) {
  const btn = document.createElement("button");
  btn.className = "opt-btn";
  btn.dataset.id = opt.id;
  btn.textContent = label;
  return btn;
}

// ============================================================
// LISTENING: hear the word, tap the matching character
// ============================================================
function startListening(unit) {
  sfxContext(); // unlock chimes within this tap gesture
  mcqQuestions = buildMcqQuestions(unit);
  mcqIndex = 0;
  mcqScore = 0;
  renderListening();
}

function renderListening() {
  if (mcqIndex >= mcqQuestions.length) return finishMcq();
  renderMcq("screen-listening", "listen-progress", "listen-options", (q) => {
    const opts = $("listen-options");
    opts.innerHTML = "";
    q.options.forEach((opt) => {
      const btn = mcqOption(opt, opt.hanzi);
      btn.addEventListener("click", () => answerMcq("listen-options", opt, q.correct, opt.hanzi, renderListening));
      opts.appendChild(btn);
    });
    speak(q.correct.hanzi);
  });
}

$("listen-replay").addEventListener("click", () => {
  const q = mcqQuestions[mcqIndex];
  if (q) speak(q.correct.hanzi);
});

// ============================================================
// READING: see the character, tap the meaning
// ============================================================
function startReadingChallenge(unit) {
  sfxContext();
  mcqQuestions = buildMcqQuestions(unit);
  mcqIndex = 0;
  mcqScore = 0;
  renderReadingChallenge();
}

function renderReadingChallenge() {
  if (mcqIndex >= mcqQuestions.length) return finishMcq();
  renderMcq("screen-reading", "reading-progress", "reading-options", (q) => {
    $("reading-hanzi").textContent = q.correct.hanzi;
    const opts = $("reading-options");
    opts.innerHTML = "";
    q.options.forEach((opt) => {
      const btn = mcqOption(opt, opt.meaning);
      btn.classList.add("opt-meaning");
      btn.addEventListener("click", () => answerMcq("reading-options", opt, q.correct, opt.meaning, renderReadingChallenge));
      opts.appendChild(btn);
    });
  });
}

// ============================================================
// WRITING: trace each character (HanziWriter stroke validation)
// ============================================================
function startWriting(unit) {
  sfxContext();
  writeWords = shuffle(unit.vocab).slice(0, Math.min(6, unit.vocab.length));
  writeIndex = 0;
  writeDone = 0;
  showScreen("screen-writing");
  renderWriting();
}

function renderWriting() {
  const word = writeWords[writeIndex];
  $("writing-progress").textContent = `Writing (${writeIndex + 1} of ${writeWords.length})`;
  $("writing-pinyin").textContent = word.pinyin;
  $("writing-meaning").textContent = word.meaning;
  setWritingFeedback("", "");

  const wrap = $("writing-targets");
  wrap.innerHTML = "";

  if (!window.HanziWriter) {
    setWritingFeedback("retry", "✍️ Writing practice needs an internet connection. Tap Skip to continue.");
    return;
  }

  const chars = Array.from(word.hanzi);
  const size = chars.length > 1 ? 120 : 160;
  let completed = 0;
  chars.forEach((ch) => {
    const cell = document.createElement("div");
    cell.className = "writing-cell";
    wrap.appendChild(cell);
    const writer = window.HanziWriter.create(cell, ch, {
      width: size,
      height: size,
      padding: 6,
      showCharacter: false,
      showOutline: true,
      showHintAfterMisses: 3,
      highlightOnComplete: true,
      drawingWidth: 30,
    });
    writer.quiz({
      onComplete: () => {
        completed++;
        if (completed === chars.length) onWritingWordDone();
      },
    });
  });
}

function onWritingWordDone() {
  writeDone++;
  playDing();
  setWritingFeedback("correct", "✅ 写对了! Well written!");
  setTimeout(nextWritingWord, 1100);
}

function nextWritingWord() {
  writeIndex++;
  if (writeIndex < writeWords.length) renderWriting();
  else finishWriting();
}

function finishWriting() {
  const total = writeWords.length;
  finishChallenge(writeDone, `You wrote ${writeDone}/${total} characters! ✍️`); // 1 point each
}

function setWritingFeedback(state, msg) {
  const el = $("writing-feedback");
  el.className = "fc-read-feedback " + (state || "");
  el.textContent = msg || "";
}

$("writing-skip").addEventListener("click", nextWritingWord);

// ============================================================
// Init
// ============================================================
initAuth();
