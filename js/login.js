$("#login-form").on("submit", function (e) {
  e.preventDefault();
  const email = $(this).find("[name='email']").val();
  const password = $(this).find("[name='password']").val();

  if (!email.endsWith("@gec.ac.in")) {
    alert("Invalid email");
  } else if (password.length < 6) {
    alert("Password must be at least 6 characters long");
  } else {
    alert("Logged in successfully");
    window.location.href = "index.html";
    localStorage.setItem("login", true);
  }
});
