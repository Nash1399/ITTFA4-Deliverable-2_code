// clear cart verification

  function clearCart() {

    //create the clear cart confirmation dialog 
    const confirmClear = confirm("Your cart will be cleared. Are you sure?");

    if (confirmClear) {
      //clear cart
        alert("Cart is cleared.");
         localStorage.removeItem("cart");
        
        window.location.href = "Cart Page.html";
    } else {
        alert("Cart not cleared.");
    }
  }
