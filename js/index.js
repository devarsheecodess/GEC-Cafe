const authButtons = document.querySelectorAll(".auth-buttons");
const profileBtns_ = document.querySelectorAll(".profile-button");
const cartBtns = document.querySelectorAll(".cart-btn");

// Check if user is logged in
if (localStorage.getItem("login")) {
  authButtons.forEach((authButton) => {
    authButton.innerHTML = `<button class="logout-btn"><i class="fa-solid fa-right-from-bracket"></i></button>`;
  });
  profileBtns_.forEach((profileBtn) => {
    profileBtn.innerHTML = `<button class="profile-btn"><i class="fa-solid fa-user"></i></button>`;
  });
} else {
  authButtons.forEach((authButton) => {
    authButton.innerHTML = `<button class="login-btn" onclick="window.location.href='login.html'">Login</button>`;
  });
}

// Logout Button
const logoutBtns = document.querySelectorAll(".logout-btn");
logoutBtns.forEach((logoutBtn) => {
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
});

// Profile Button
const profileBtns = document.querySelectorAll(".profile-btn");
profileBtns.forEach((profileBtn) => {
  profileBtn.addEventListener("click", () => {
    window.location.href = "profile.html";
  });
});

// Cart Button
cartBtns.forEach((cartBtn) => {
  cartBtn.addEventListener("click", () => {
    if (localStorage.getItem("login")) {
      window.location.href = "cart.html";
    } else {
      alert("Please login to view cart");
      window.location.href = "login.html";
    }
  });
});

// Toggle menu (for small screens)
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

if (menuBtn && closeBtn && sidebar) {
  menuBtn.addEventListener("click", () => {
    sidebar.classList.add("active");
    menuBtn.style.display = "none";
    closeBtn.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
    menuBtn.style.display = "block";
    closeBtn.style.display = "none";
  });
}
