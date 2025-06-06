//getting user input
  document.getElementById('Registraionform').addEventListener('submit', function (e) {
    const password = document.getElementById('password').value; // from registration form
    const confirmPassword = document.getElementById('Confirm Password').value;

    
    //checking if user inputs match 

    if (password !== confirmPassword) {
      alert("Passwords do not match.")
      e.preventDefault(); // Prevent form submission
    }
    else{
      alert("Passwords match , you have been registerd ");

    }
  });



  
    
  

  
