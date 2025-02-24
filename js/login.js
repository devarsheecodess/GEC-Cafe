const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = loginForm.username.value;
  const password = loginForm.password.value;

  if (!email.includes("@")) {
    alert("Invalid email");
  } else if (password.length < 6) {
    alert("Password must be at least 6 characters long");
  } else {
    alert("Logged in successfully");
    window.location.href = "index.html";
    localStorage.setItem("login", true);
  }
});
