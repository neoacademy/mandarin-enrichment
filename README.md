# Mandarin Enrichment iPad App

A teach → practice → verify loop for a 32-iPad classroom: the teacher
introduces a concept, students practice independently on iPads through a
Levels → Units → Challenges structure and earn points, and a live teacher
dashboard shows who's done and who needs a check-in — so class time isn't
spent doing one-on-one verification with every kid.

No App Store, no Apple Developer account, no native app build required —
this runs as a **Mosyle Web Clip** (a home-screen icon that opens the page
fullscreen, indistinguishable from a native app to students).

## Structure

- **Levels** (1, 2, 3) → **Units** (themed vocab sets) → **Challenges**.
  Level 1 is built from **YCT 1**, Level 2 from **YCT 2**, and Level 3 from
  **YCT 3** (all Confucius Institute HQ/Hanban Standard Course textbooks) —
  12 lessons each, 36 units total, every one fully open. Every unit runs the
  full **four-skills** flow: a **Flashcards** Learn step, then graded
  **Listening** (hear it → tap the character), **Speaking** (hold to read
  each word aloud, checked by speech recognition), **Reading** (see the
  character → tap the meaning), and **Writing** (trace each character
  stroke-by-stroke, validated by the HanziWriter library).
- Each correct answer is worth **1 point**, so a challenge's max equals its
  number of questions. Flashcards is a Learn step and isn't scored. A
  persistent top banner shows the student's running total, and re-completing a
  challenge only raises the score if the new attempt is better.
- Vocab lives in `public/student.js` as plain arrays of
  `{ id, hanzi, pinyin, meaning }` — adding a new unit's content means
  writing a new vocab array and flipping `available: true` in the
  `CURRICULUM` object.
- **Daily Challenge** is a mini-game on the home screen: a 30-second,
  infinite-questions timed quiz that draws from the vocab of every unit the
  student has already completed. Each question randomly exercises one of
  the four skills — Reading (tap the meaning), Listening (tap the
  character), Speaking (hold and say it aloud), or Writing (trace it) —
  rewarding 1 star per correct answer; a Skip button moves past a
  speaking/writing question without penalty. Speaking/writing only enter
  the random draw on devices where speech recognition / HanziWriter are
  actually available. It unlocks after finishing one unit anywhere in the
  curriculum, and can be played once every 24 hours — the 24h cooldown is
  enforced
  server-side (`api/minigame-complete.js`), not just in the UI. Unlike
  regular challenges (best-attempt only), mini-game points accumulate
  across every daily play, since the goal is to reward showing up, not to
  cap a single high score.

### Curriculum status — Levels 1–3 cover all 36 YCT 1–3 lessons

Each YCT book (1, 2, 3) has **12 lessons** (11 + a Lesson 12 Review), and
each level's `CURRICULUM` entry has all 12 as units (`unit1`–`unit12`), every
one `available: true` and using `fourSkillChallenges()`. Vocab arrays are
named `L{n}_..._VOCAB` for Level 1 (YCT 1), `YCT2_L{n}_..._VOCAB` for Level 2
(YCT 2), and `YCT3_L{n}_..._VOCAB` for Level 3 (YCT 3), all in
`public/student.js`. Every Lesson 12 is a hand-picked review set spanning
that book's Lessons 1–11 (review lessons in the textbook itself don't
introduce new vocab). Verified locally that all 36 units render with 5
challenges each and at least 4 vocab items (the minimum for a 4-option
Listening/Reading question) — several lessons sit right at that minimum
(YCT 1 Lesson 5, YCT 2 Lesson 10, YCT 3 Lessons 9 and 11 all have exactly
4–5 items), so double-check those if their vocab arrays ever get edited.

Known data gap: **YCT 2 Lesson 11**'s source page (p.53 of the scanned PDF)
is missing from the scan — the page range jumps straight from 52 to 54. Its
vocab array (`YCT2_L11_BEIJING_VOCAB`) was reconstructed from surrounding
pages (the "Let's read" dialogue, the Test section, and the lesson title)
rather than transcribed from the official "Let's learn" vocab box, so it's
a best-effort guess worth double-checking against another copy of the book.

The source PDFs are under the YCT folder in Google Drive (see the
`yct-curriculum-source` project memory for the exact path).
- Sign-in is Google SSO restricted to `@neoacademy.id` accounts. Signing in
  with an email on the `TEACHER_EMAILS` allowlist (see below) opens the
  dashboard; every other `@neoacademy.id` account opens the student app.
  There's no manual roster anymore — a student's record is created
  automatically the first time they sign in.

## Two ways to run this

### 1. Local network (quick testing only — no login)

Good for: testing a challenge or curriculum change before pushing it live.
This version does **not** have Google sign-in — it's the simpler,
name-picker version we built first, kept around purely as a fast local
testing tool. Real classroom use should go through the Vercel deployment
below, since that's the version with actual access control.

Requires [Node.js](https://nodejs.org).

```
cd iPad-Learning-App
npm install
npm start
```

The terminal prints something like:

```
Local:   http://localhost:3000
Network: http://192.168.1.42:3000
```

Progress here is stored in memory and resets when the server restarts —
expected, since it's just for testing.

### 2. Public internet, via Vercel + Upstash + Google Sign-In (production)

This is what real students and the teacher use. It runs on Vercel
(serverless — no process to keep running), stores student progress in
Upstash Redis (since serverless functions don't share memory between
requests), and gates access with Google Sign-In restricted to your school
domain.

**A. Push the code to GitHub** — already done if you've been through this
once. For changes going forward: edit, then `git add . && git commit -m "..."
&& git push`. Vercel redeploys automatically on every push to `main`.

**B. Upstash Redis** — already set up (see Vercel project's environment
variables for `UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN` if you
ever need to rotate them).

**C. Setting up Google Sign-In** (one-time setup)

1. Go to [console.cloud.google.com](https://console.cloud.google.com) and
   create a new project (or use an existing one).
2. Go to **APIs & Services → OAuth consent screen**.
   - If your Google Workspace admin account has access, set **User Type**
     to **Internal** — this restricts sign-in to `@neoacademy.id` accounts
     at the Google level, in addition to the domain check already built
     into the app (`api/auth/google.js` checks the email domain
     server-side regardless, so this is a belt-and-suspenders extra, not
     strictly required).
   - Fill in the required app name/support email fields.
3. Go to **APIs & Services → Credentials → Create Credentials → OAuth
   client ID**.
   - Application type: **Web application**.
   - **Authorized JavaScript origins**: add
     `https://your-project.vercel.app` (your actual Vercel URL) and, if you
     want to test locally, `http://localhost:3000`.
   - You don't need to set a redirect URI — this app uses Google Identity
     Services' token flow, not the redirect-based flow.
4. Copy the generated **Client ID** (looks like
   `123456-abc.apps.googleusercontent.com`). This is not a secret — it's
   meant to be visible in front-end code.
5. Open `public/login.js` and replace the placeholder value of
   `GOOGLE_CLIENT_ID` at the top with your real Client ID. Commit and push.
6. In your Vercel project's **Settings → Environment Variables**, add:
   - `GOOGLE_CLIENT_ID` — same value as above (the server verifies tokens
     against this).
   - `ALLOWED_DOMAIN` — `neoacademy.id`
   - `TEACHER_EMAILS` — comma-separated list of teacher accounts that
     should see the dashboard, e.g. `you@neoacademy.id,other-teacher@neoacademy.id`
7. Redeploy (push any small change, or use Vercel's "Redeploy" button) so
   the new environment variables take effect.

**D. Point Mosyle at the app**

- Everyone (students and teacher) — Web Clip pointing at
  `https://your-project.vercel.app/` (the root URL is the sign-in page; it
  automatically routes each person to the student app or teacher dashboard
  based on their account).

## How sign-in and roles work

- Anyone with an `@neoacademy.id` Google account can sign in.
- Emails on the `TEACHER_EMAILS` environment variable are treated as
  teachers and land on the dashboard; everyone else lands on the student
  app.
- Sessions last 8 hours. There's a logout button (🚪) in the header of both
  the student app and the teacher dashboard — **worth teaching students to
  use it**, since these are shared iPads: if one student doesn't log out,
  the next student to open the app would continue on the previous
  student's account instead of getting their own.
- A student's progress is tied to their Google account, not to a specific
  iPad — they can pick up on any of the 32 devices and see their own
  points.

## How the "verify" step works in class

- Teacher glances at the dashboard while circulating — students flagged
  "needs help" (quiz score under half) are who to check on first.
- Quiz completion screens tell the student to raise their hand and show the
  teacher, pulling the teacher to kids who need help without requiring
  constant dashboard-watching.
- "Reset class" clears everyone's progress for the next period. This is
  intentionally session-based, not a permanent gradebook.

## Known limitations (it's a prototype)

- Levels 1–3 now cover all 36 YCT 1–3 lessons (see "Curriculum status"
  above), including one lesson (YCT 2 Lesson 11) reconstructed from a
  missing source page — worth double-checking against another copy of the
  textbook.
- Audio uses the iPad's built-in Mandarin text-to-speech (Safari supports
  `zh-CN` voices natively) rather than recorded native-speaker audio.
- The local (`server.js`) version has no login and separate in-memory
  storage — it's a testing tool, not where real student data should live.
- Logout is manual (button in the header), not automatic between students
  on a shared iPad — worth building a habit of tapping it around when
  handing a device to the next student.
