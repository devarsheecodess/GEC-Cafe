const signupForm = document.querySelector(".signup-form");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  try {
    const name = signupForm.name.value;
    const year = signupForm.year.value;
    const department = signupForm.department.value;
    const email = signupForm.email.value;
    const phone = signupForm.phone.value;
    const password = signupForm.password.value;
    const confirmPassword = signupForm.confirm_password.value;

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
