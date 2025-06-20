//cart manager js 

document.addEventListener("DOMContentLoaded", function () {
  const cartItemsContainer = document.getElementById("cartItems");
  const cartTotalDisplay = document.getElementById("cartTotal");

  const userEmail = localStorage.getItem("loggedInEmail");
  let cart = JSON.parse(localStorage.getItem("cart")) || []; //gets the current items and total for items for logged on email 

  // Filter cart for current user
  cart = cart.filter(item => item.user_email === userEmail);

  function renderCart() {
    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
      const itemTotal = item.quantity * item.price;
      total += itemTotal;

      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.item_name}</td>
        <td>${item.subcategory}</td>
        <td>${item.quantity}</td>
        <td>$${item.price.toFixed(2)}</td>
        <td>$${itemTotal.toFixed(2)}</td>
        <td><button onclick="removeCartItem(${index})">Remove</button></td>
      `;
      cartItemsContainer.appendChild(row);
    });

    cartTotalDisplay.innerHTML = `<strong>Total: $${total.toFixed(2)}</strong>`;
  }

  window.removeCartItem = function (index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload(); // Reload to re-render the table after remove
  };

  renderCart();
});
