const express = require('express');
const fs = require('fs');
const path = require('path');
const os = require('os');

const app = express();
app.use(express.json());
// no-store so this local testing server always serves the latest edits —
// otherwise browsers cache student.js/style.css and you see stale UI.
app.use(express.static(path.join(__dirname, 'public'), {
  etag: false,
  lastModified: false,
  setHeaders: (res) => res.setHeader('Cache-Control', 'no-store'),
}));

const ROSTER_PATH = path.join(__dirname, 'roster.json');

function loadRoster() {
  try {
    return JSON.parse(fs.readFileSync(ROSTER_PATH, 'utf8'));
  } catch (e) {
    return [];
  }
}

// In-memory student records. Resets when the server restarts or the
// teacher hits "Reset class" on the dashboard — intentional, this is
// meant to track one class session at a time, not long-term history.
//
// Shape per student:
// {
//   completed: { [challengeKey]: pointsEarned },  // e.g. "l1u1-quiz": 25
//   totalPoints: number,
//   location: string,   // human-readable, e.g. "Level 1 > Unit 1 > Quiz"
//   updatedAt: number
// }
let students = {};

function getOrCreateStudent(name) {
  if (!students[name]) {
    students[name] = { completed: {}, totalPoints: 0, location: null, updatedAt: Date.now() };
  }
  return students[name];
}

app.get('/api/roster', (req, res) => {
  res.json(loadRoster());
});

// Full class snapshot, used by the teacher dashboard.
app.get('/api/status', (req, res) => {
  res.json(students);
});

// A single student's record, used by the student app on login so progress
// (and points) survive moving to a different iPad or reloading the page.
app.get('/api/student/:name', (req, res) => {
  const student = students[req.params.name];
  res.json(student || { completed: {}, totalPoints: 0, location: null });
});

// Lightweight "where is this student right now" ping, for the dashboard.
app.post('/api/location', (req, res) => {
  const { name, location } = req.body;
  if (!name || typeof name !== 'string') {
    return res.status(400).json({ error: 'name is required' });
  }
  const student = getOrCreateStudent(name);
  student.location = location || student.location;
  student.updatedAt = Date.now();
  res.json({ ok: true });
});

// Record a completed challenge and award points. Re-completing a challenge
// only raises the score if the new attempt is better, so totals aren't
// inflated by replaying the same challenge over and over.
app.post('/api/challenge-complete', (req, res) => {
  const { name, challengeKey, points, location } = req.body;
  if (!name || typeof name !== 'string' || !challengeKey || typeof points !== 'number') {
    return res.status(400).json({ error: 'name, challengeKey and points are required' });
  }
  const student = getOrCreateStudent(name);
  const prevBest = student.completed[challengeKey] || 0;
  student.completed[challengeKey] = Math.max(prevBest, points);
  student.totalPoints = Object.values(student.completed).reduce((sum, p) => sum + p, 0);
  if (location) student.location = location;
  student.updatedAt = Date.now();
  res.json({ ok: true, totalPoints: student.totalPoints });
});

app.post('/api/reset', (req, res) => {
  students = {};
  res.json({ ok: true });
});

function getLocalIPs() {
  const nets = os.networkInterfaces();
  const ips = [];
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === 'IPv4' && !net.internal) {
        ips.push(net.address);
      }
    }
  }
  return ips;
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  const ips = getLocalIPs();
  console.log('Chinese enrichment app is running.');
  console.log(`Local:   http://localhost:${PORT}`);
  ips.forEach((ip) => {
    console.log(`Network: http://${ip}:${PORT}  <-- use this on the iPads`);
  });
  console.log('');
  console.log('Student view:      /student.html');
  console.log('Teacher dashboard: /teacher.html');
});
