const menuContainer = document.getElementById("menu-container");
let menu = []; // Global menu variable

const fetchMenu = async () => {
  try {
    const response = await fetch("../assets/menu-items.json");
    menu = await response.json(); // Store data globally

    menuContainer.innerHTML = menu
      .map(
        (item) => `
        <span>
          <img src="${item.image}" alt="${item.name}">
          <h1>${item.name}</h1>
          <p>Rs. ${item.price}/-</p>
          <button class="add-to-order" onclick="addToOrder(${item.id})">Add to Order</button>
        </span>
        `
      )
      .join("");
  } catch (error) {
    console.error("Error fetching menu:", error);
  }
};

fetchMenu();

let orderList = localStorage.getItem("order")
  ? JSON.parse(localStorage.getItem("order"))
  : [];
let total = Number(localStorage.getItem("total")) || 0;

const addToOrder = (id) => {
  if (!localStorage.getItem("login")) {
    alert("Please login to add items to cart");
    window.location.href = "html/login.html";
    return;
  }
  const item = menu.find((item) => item.id === id);
  if (item) {
    orderList.push(item);
    total += item.price;
    localStorage.setItem("order", JSON.stringify(orderList));
    localStorage.setItem("total", total);
  }
  alert("Item added to order!");
};

const cartItemsContainer = document.querySelector(".cart-items");
const totalPriceElement = document.querySelector(".cart-footer h3");

// Fetch order from LocalStorage
const order = JSON.parse(localStorage.getItem("order")) || [];
total = Number(localStorage.getItem("total")) || 0;

// Function to render cart items
const renderCart = () => {
  cartItemsContainer.innerHTML = ""; // Clear previous items

  if (order.length === 0) {
    cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    order.forEach((item, index) => {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="item-image">
                <div class="item-details">
                    <h4 class="item-name">${item.name}</h4>
                    <p class="item-price">Rs. ${item.price}/-</p>
                </div>
                <div class="item-actions">
                    <input type="number" value="1" class="item-quantity" min="1" data-index="${index}">
                    <button class="remove-item" onclick="removeItem(${index})">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            `;
      cartItemsContainer.appendChild(cartItem);
    });
  }

  totalPriceElement.textContent = `Total: Rs. ${total}/-`;
};

// Function to remove item from cart
const removeItem = (index) => {
  const removedItem = order[index];
  total -= removedItem.price;
  order.splice(index, 1);

  localStorage.setItem("order", JSON.stringify(order));
  localStorage.setItem("total", total);

  renderCart();
};

// Initial render
renderCart();

const checkoutButton = document.getElementById("checkout-btn");

checkoutButton.addEventListener("click", () => {
  if (order.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert("Ordered successfully!");
    localStorage.removeItem("order");
    localStorage.removeItem("total");
    renderCart();
    window.location.href = "html/index.html";
  }
});
