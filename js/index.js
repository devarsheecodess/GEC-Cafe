const authButtons = document.getElementById("auth-buttons");
const authButtons2 = document.getElementById("auth-buttons2");
const profileBtn = document.getElementById("profile-button");
const profileBtn2 = document.getElementById("profile-button2");
const cartBtn = document.getElementById("cart-btn");

if (localStorage.getItem("login")) {
  authButtons.innerHTML = `<button id="logout-btn"><i class="fa-solid fa-right-from-bracket"></i></button>`;
  authButtons2.innerHTML = `<button id="logout-btn"><i class="fa-solid fa-right-from-bracket"></i></button>`;
  profileBtn.innerHTML = `<button id="profile-btn""><i class="fa-solid fa-user"></i></button>`;
  profileBtn2.innerHTML = `<button id="profile-btn""><i class="fa-solid fa-user"></i></button>`;
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

const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

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
