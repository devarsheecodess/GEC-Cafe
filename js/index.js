const authButtons = document.getElementById("auth-buttons");
const authButtons2 = document.getElementById("auth-buttons2");
const profileBtn = document.getElementById("profile-button");
const profileBtn2 = document.getElementById("profile-button2");
const cartBtns = document.querySelectorAll(".cart-btn"); // ✅ Fixed

if (localStorage.getItem("login")) {
  authButtons.innerHTML = `<button class="logout-btn"><i class="fa-solid fa-right-from-bracket"></i></button>`;
  authButtons2.innerHTML = `<button class="logout-btn"><i class="fa-solid fa-right-from-bracket"></i></button>`;
  profileBtn.innerHTML = `<button class="profile-btn"><i class="fa-solid fa-user"></i></button>`;
  profileBtn2.innerHTML = `<button class="profile-btn"><i class="fa-solid fa-user"></i></button>`;
} else {
  authButtons.innerHTML = `<button class="login-btn" onclick="window.location.href='login.html'">Login</button>`;
  authButtons2.innerHTML = `<button class="login-btn" onclick="window.location.href='login.html'">Login</button>`;
}

// Select all logout buttons
const logoutBtns = document.querySelectorAll(".logout-btn");
const profileBtns = document.querySelectorAll(".profile-btn");

logoutBtns.forEach((logoutBtn) => {
  logoutBtn.addEventListener("click", () => {
    try {
      const cf = confirm("Are you sure you want to logout?");
      if (cf) {
        localStorage.removeItem("login");
        alert("Logged out successfully");
        window.location.href = "html/index.html";
      }
    } catch (e) {
      alert("An error occurred");
      localStorage.removeItem("login");
    } finally {
      window.location.href = "html/index.html";
    }
  });
});

profileBtns.forEach((profileBtn) => {
  profileBtn.addEventListener("click", () => {
    window.location.href = "html/profile.html";
  });
});

cartBtns.forEach((cartBtn) => {
  // ✅ Fixed
  cartBtn.addEventListener("click", () => {
    if (localStorage.getItem("login")) {
      window.location.href = "html/cart.html";
    } else {
      alert("Please login to view cart");
      window.location.href = "html/login.html";
    }
  });
});

// Menu Toggle
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

if (menuBtn && closeBtn && sidebar) {
  // ✅ Prevents errors if elements are missing
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
