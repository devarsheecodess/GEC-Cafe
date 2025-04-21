$("#login-form").on("submit", function (e) {
  const email = $(this).find("[name='email']").val();

  if (!email.endsWith("@gec.ac.in")) {
    alert("Invalid email");
    e.preventDefault(); // Stop form submission
  }
});
