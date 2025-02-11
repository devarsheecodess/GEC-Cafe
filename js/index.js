const authButtons = document.getElementById("auth-buttons");
const cartBtn = document.getElementById("cart-btn");

if (localStorage.getItem("login")) {
  authButtons.innerHTML = `<button id="logout-btn"><i class="fa-solid fa-right-from-bracket"></i></button>`;
} else {
  authButtons.innerHTML = `<button id="login-btn" onclick="window.location.href='login.html'">Login</button>`;
}

// Reassign logoutBtn after modifying the DOM
const logoutBtn = document.getElementById("logout-btn");

if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    try {
      const cf = confirm("Are you sure you want to logout?");
      if (cf) {
        localStorage.removeItem("login");
        alert("Logged out successfully");
        window.location.href = "index.html";
      }
    } catch (e) {
      alert("An error occurred");
      localStorage.removeItem("login");
    } finally {
      window.location.href = "index.html";
    }
  });
}

cartBtn.addEventListener("click", () => {
  if (localStorage.getItem("login")) {
    window.location.href = "cart.html";
  } else {
    alert("Please login to view cart");
    window.location.href = "login.html";
  }
});
