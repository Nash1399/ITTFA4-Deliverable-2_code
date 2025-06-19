// user-verification.js

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
//IndexedDB lets you store and retrieve objects that are indexed with a key
    const request = indexedDB.open("UserDatabase", 1);
    let db;

    request.onupgradeneeded = function (e) {
        db = e.target.result;
        // Ensure the users store exists in case login happens before registration
        if (!db.objectStoreNames.contains("users")) {
            db.createObjectStore("users", { keyPath: "email" });
        }
    };

    request.onsuccess = function (e) {
        db = e.target.result;
       // checks entered details against indexeddb 
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();

            const transaction = db.transaction(["users"], "readonly");
            const store = transaction.objectStore("users");

            const getRequest = store.get(email);
//check if user exists in indexeddb
            getRequest.onsuccess = function () {
                const user = getRequest.result;
                if (user && user.password === password) {
                    alert("Login successful! Welcome back.");
                    window.location.href = "Menu Selection.html";
                } else {
                    alert("Invalid email or password. Try again.");
                }
            };
               //  data access failure 
            getRequest.onerror = function () {
                alert("Error accessing local database.");
            };
        });
    };

    request.onerror = function () {
        alert("Failed to open local database.");
    };
});
