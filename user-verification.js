// user-verification.js

// Hardcoded users for demo
const demoUsers = [
    { email: "demo@user.com", password: "demo123" },
    { email: "admin@site.com", password: "admin" }
];

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginForm").addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        const matchedUser = demoUsers.find(
            user => user.email === email && user.password === password
        );

        if (matchedUser) {
            alert("Login successful! Welcome back.");
            window.location.href = "Menu Selection.html";
        } else {
            alert("Invalid email or password. Try again.");
        }
    });
});
