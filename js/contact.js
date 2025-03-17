$("#contact-form").on("submit", function (event) {
  event.preventDefault();
  try {
    const name = $("#name").val();
    const email = $("#email").val();
    const message = $("#message").val();

    if (!email.includes("@")) {
      throw new Error("Invalid email");
    }

    const data = {
      name: name,
      email: email,
      message: message,
    };
    console.log(data);
  } catch (e) {
    console.log(e);
  } finally {
    alert("Contact form submitted sucessfully!");
  }
});
