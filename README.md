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

- **Levels** (1, 2, 3) → **Units** (themed vocab sets) → **Challenges**
  (Flashcards, Matching Game, Quiz). Level 1 has three fully built units:
  Numbers 1–10, Colors, and Family. Levels 2–3 are placeholders showing where
  future content goes.
- Each challenge awards points on completion (Flashcards 10, Matching 15,
  Quiz up to 30, scaled by score). A persistent top banner shows the
  student's running total. Re-completing a challenge only raises the score
  if the new attempt is better.
- Vocab lives in `public/student.js` as plain arrays of
  `{ id, hanzi, pinyin, meaning }` — adding a new unit's content means
  writing a new vocab array and flipping `available: true` in the
  `CURRICULUM` object.

## Two ways to run this

### 1. Local network (what we built and tested first)

Good for: testing, or running entirely within school wifi with no internet
dependency.

Requires [Node.js](https://nodejs.org) on a laptop/mini PC connected to the
same wifi as the iPads.

```
cd iPad-Learning-App
npm install
npm start
```

The terminal prints something like:

```
Local:   http://localhost:3000
Network: http://192.168.1.42:3000  <-- use this on the iPads
```

Progress is stored in that process's memory — it resets if the server
restarts, and only reaches devices on the same wifi network. Keep the
terminal open for the whole class session. Give the host computer a
static/reserved IP on your router so the address doesn't change between
sessions.

### 2. Public internet, via Vercel + Upstash (for access from anywhere)

Good for: students reaching the app from home, or not depending on a laptop
being on and connected during class.

This path uses Vercel to host the app (serverless — no process to keep
running) and Upstash Redis (free tier) to store student progress, since
serverless functions don't share memory between requests the way a local
Node process does. Steps:

**A. Push the code to GitHub**
1. Create a new repository on [github.com](https://github.com) (keep it
   private if you'd rather not have it public).
2. From Terminal, in this folder:
   ```
   git init
   git add .
   git commit -m "Mandarin enrichment app"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

**B. Create a free Upstash Redis database**
1. Sign up at [upstash.com](https://upstash.com) (free tier: 256MB, 500K
   requests/month — far more than a class of 32 will use).
2. Create a new Redis database (any region close to you).
3. On the database's page, copy the **REST URL** and **REST TOKEN** — you'll
   need both in the next step.

**C. Deploy on Vercel**
1. Sign up at [vercel.com](https://vercel.com) using your GitHub account.
   - **Check which plan you're on before adding payment info.** Hobby is
     free but its terms restrict it to non-commercial projects — if this
     course charges parents a fee, use the $20/month Pro plan instead.
     Compute cost for an app this small is negligible either way; the
     plan choice is about the commercial-use terms, not capacity.
2. Click "Add New Project," import the GitHub repo you just pushed.
3. Before deploying, add two environment variables (from Upstash):
   - `UPSTASH_REDIS_REST_URL`
   - `UPSTASH_REDIS_REST_TOKEN`
4. Deploy. Vercel gives you a URL like `https://your-project.vercel.app`.

**D. Point Mosyle at the new URL**
Update the Web Clips in Mosyle to use the Vercel URL instead of the local
network address:
- Student: `https://your-project.vercel.app/student.html`
- Teacher: `https://your-project.vercel.app/teacher.html`

**Before going live, add a password.** Right now neither the student app nor
the teacher dashboard has any login — anyone with the URL can see student
names and scores. That's fine on closed school wifi, but once this is a
public internet URL, it's worth asking me to add a simple shared password
gate before real students use it.

## Editing the class roster

Open `roster.json` and replace the placeholder names with your actual
students. This list drives both the student login dropdown and the teacher
dashboard grid. If deploying to Vercel, commit and push this file's changes
like any other code change — Vercel redeploys automatically on push.

## How the "verify" step works in class

- Teacher glances at the dashboard while circulating — students flagged
  "needs help" (quiz score under half) are who to check on first.
- Quiz completion screens tell the student to raise their hand and show the
  teacher, pulling the teacher to kids who need help without requiring
  constant dashboard-watching.
- "Reset class" clears everyone's progress for the next period. This is
  intentionally session-based, not a permanent gradebook.

## Known limitations (it's a prototype)

- No login/auth on either app — see the password note above before going
  public.
- Only Level 1 (3 units) has real content; Levels 2–3 are placeholders.
- Audio uses the iPad's built-in Mandarin text-to-speech (Safari supports
  `zh-CN` voices natively) rather than recorded native-speaker audio.
- The local (`server.js`) and Vercel (`/api`) versions use separate storage
  (in-memory vs. Redis) — progress made on one won't show up on the other.
  Pick one deployment method per class session.
