// cart storage js 
function addToCart(itemName, category, subcategory, price) {
  const user_email = localStorage.getItem("loggedInEmail");

  // enusres that login must happen before placing orderes
  if (!user_email) {
    alert("Please log in before adding items to the cart.");
    window.location.href = "Login Page.html"; //takes to login page if user not logged in 
    return;
  }

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Check if item already exists in cart (same name + subcategory)
  const existingItem = cart.find(item =>
    item.item_name === itemName &&
    item.subcategory === subcategory &&
    item.user_email === user_email
  );

  if (existingItem) {
    existingItem.quantity += 1;
    existingItem.total = existingItem.quantity * existingItem.price;
  } else {
    cart.push({
      user_email,
      item_name: itemName,
      category,
      subcategory,
      quantity: 1,
      price,
      total: price,
      added_at: new Date().toISOString()
    });
  }
// add selected products to cart

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${itemName} has been added to your cart!`);
}
