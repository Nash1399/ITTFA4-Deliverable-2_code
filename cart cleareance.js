// clear cart verification

  function clearCart() {

    //create the clear cart confirmation dialog 
    const confirmClear = confirm("Your cart will be cleared. Are you sure?");  // "confirm " a bool function in js (y/n)

    if (confirmClear) {
      //clear cart
        alert("Cart is cleared.");
         localStorage.removeItem("cart");
        
        window.location.href = "Menu Selection.html";
    } else {
        alert("Cart not cleared.");
    }
  }
