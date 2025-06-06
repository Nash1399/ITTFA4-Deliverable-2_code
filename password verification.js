
  document.getElementById('Registraionform').addEventListener('submit', function (e) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('Confirm Password').value;

    if (password !== confirmPassword) {
      alert("Passwords do not match.")
      e.preventDefault(); // Prevent form submission
    }
    else{
      alert("Passwords match , you have been registerd ");

    }
  });



  
    
  

  
