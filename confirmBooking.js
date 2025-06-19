// booking confirmation js 
function confirmBooking(){

  const booking = confirm("Your booking will be placed. Do you want to continue?");  // "confirm " a bool function in js (y/n)

    if (booking) {
    
        localStorage.removeItem("cart")
        alert("Your order has been placed and will be ready for collection.");
    } else {
        alert("Please confirm your order to proceed with booking.");
    }
}

