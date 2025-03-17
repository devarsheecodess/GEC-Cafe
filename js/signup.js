$(".signup-form").on("submit", function (e) {
  e.preventDefault();
  try {
    const name = $(this).find("[name='name']").val();
    const year = $(this).find("[name='year']").val();
    const department = $(this).find("[name='department']").val();
    const email = $(this).find("[name='email']").val();
    const phone = $(this).find("[name='phone']").val();
    const password = $(this).find("[name='password']").val();
    const confirmPassword = $(this).find("[name='confirm_password']").val();

    if (
      !name ||
      !year ||
      !department ||
      !email ||
      !phone ||
      !password ||
      !confirmPassword
    ) {
      alert("Please fill all the fields");
      return;
    }

    if (!email.endsWith("@gec.ac.in")) {
      alert("Please use your college email ID");
      return;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const user = {
      name,
      year,
      department,
      email,
      phone,
      password,
    };
    alert("Signed up successfully");
    window.location.href = "login.html";
  } catch (error) {
    console.error("Error:", error);
  }
});
