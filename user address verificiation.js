// User address verification
function confirmAddress() {
  const address = document.getElementById("address").value.trim();
  if (address) {
    alert("Address confirmed: " + address);
  } else {
    alert("Please enter your address.");
  }
}
