// date confirmation js
function confirmdate() {
    const dateInput = document.getElementById("booking_date").value;

    // Check if date is empty
    if (!dateInput) {
        alert("Please select a date and time before confirming.");
        return;
    }

    // Create confirmation dialog
    const date_selection = confirm("This is the date your reservation shall be placed. Are you sure?");

    // Verify user confirmed
    if (date_selection) {
        alert("Your reservation has been placed.");
        localStorage.removeItem("cart"); // clear cart
        window.location.href = "Menu Selection.html"; // go back to menu
    } else {
        alert("Reservation not confirmed.");
    }
}
