// store-users.js

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("Registraionform");  // gets data from registrarion form
//IndexedDB lets you store and retrieve objects that are indexed with a key

    const request = indexedDB.open("UserDatabase", 1); // opens the database that was created 
    let db;

    request.onupgradeneeded = function (e) {
        db = e.target.result;
        const store = db.createObjectStore("users", { keyPath: "email" });
        store.createIndex("email", "email", { unique: true });
    };

    request.onsuccess = function (e) {
        db = e.target.result;

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const surname = document.getElementById("surname").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("Phone_number").value.trim();
            const password = document.getElementById("password").value.trim();
            const confirmPassword = document.getElementById("Confirm Password").value.trim();

            // Password match check
            if (password !== confirmPassword) {
                alert("Passwords do not match.");
                return;
            }

            // Save to IndexedDB
            const transaction = db.transaction(["users"], "readwrite");
            const store = transaction.objectStore("users");

            const user = { name, surname, email, phone, password };

            const addRequest = store.add(user);

            addRequest.onsuccess = function () {
                alert("Passwords match, you have been registered and saved !");
                form.reset(); // Clear form after success
                 window.location.href = "Login Page.html"; // takes user to login 
            };

            addRequest.onerror = function () {
                alert("This email is already registered.");
            };
        });
    };

    request.onerror = function () {
        alert("Could not open local database.");
    };
});

  
    
  

  
