// Replace this with the real OAuth Client ID from Google Cloud Console
// (see README.md "Setting up Google Sign-In"). The Client ID is not a
// secret — it's meant to be visible in front-end code.
const GOOGLE_CLIENT_ID = "1021764095113-prn9jnd4coflvogp4n0l7s00e7pv0l01.apps.googleusercontent.com";
const SCHOOL_DOMAIN = "neoacademy.id";

function $(id) { return document.getElementById(id); }

function showError(msg) {
  $("login-loading").style.display = "none";
  const el = $("login-error");
  el.textContent = msg;
  el.style.display = "block";
}

function routeByRole(role) {
  window.location.href = role === "teacher" ? "/teacher.html" : "/student.html";
}

async function handleGoogleLogin(response) {
  try {
    const res = await fetch("/api/auth/google", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "same-origin",
      body: JSON.stringify({ credential: response.credential }),
    });
    const data = await res.json();
    if (res.ok && data.ok) {
      routeByRole(data.role);
    } else {
      showError(data.error || "Could not sign in. Please try again.");
    }
  } catch (e) {
    showError("Could not reach the server. Check your connection and try again.");
  }
}

async function checkExistingSession() {
  try {
    const res = await fetch("/api/auth/me", { credentials: "same-origin" });
    const data = await res.json();
    if (data.authenticated) {
      routeByRole(data.role);
      return;
    }
  } catch (e) {
    // ignore — just fall through to showing the sign-in button
  }
  $("login-loading").style.display = "none";
}

window.onload = () => {
  checkExistingSession();

  if (!window.google || !window.google.accounts) {
    showError("Could not load Google Sign-In. Check your internet connection and reload.");
    return;
  }

  google.accounts.id.initialize({
    client_id: GOOGLE_CLIENT_ID,
    callback: handleGoogleLogin,
    hd: SCHOOL_DOMAIN,
  });
  google.accounts.id.renderButton($("g_signin_container"), {
    theme: "outline",
    size: "large",
    text: "signin_with",
    width: 280,
  });
};
