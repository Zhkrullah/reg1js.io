// Form submission handler
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const phone = document.getElementById("number").value;
    const gender = document.getElementById("gender").value;
    const errorMessage = document.getElementById("errorMessage");
    const successMessage = document.getElementById("successMessage");

    // Clear previous messages
    errorMessage.textContent = "";
    successMessage.textContent = "";

    // Username validation
    if (username.length < 5 || username.length > 15) {
        errorMessage.textContent = "Username must be between 5 and 15 characters long.";
        return;
    }

    // Password match validation
    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match!";
        return;
    }

    // Phone number validation
    const phonePattern = /^[0-9]{10,15}$/;
    if (!phonePattern.test(phone)) {
        errorMessage.textContent = "Phone number must be between 10 and 15 digits and contain only numbers.";
        return;
    }

    // Gender selection validation
    if (gender === "gender") {
        errorMessage.textContent = "Please select a gender.";
        return;
    }

    // All validations passed - show success message
    successMessage.textContent = "Registration successful!";
    successMessage.style.color = "green";

    // Clear form
    document.getElementById("registrationForm").reset();
});

// Real-time Validation
document.getElementById("username").addEventListener("input", validateUsername);
document.getElementById("email").addEventListener("input", validateEmail);
document.getElementById("password").addEventListener("input", validatePassword);
document.getElementById("number").addEventListener("input", validatePhone);

function validateUsername() {
    const username = document.getElementById("username").value;
    const errorMessage = document.getElementById("errorMessage");

    if (username.length < 3) {
        errorMessage.textContent = "Username must be at least 3 characters long.";
    } else {
        errorMessage.textContent = "";
    }
}

function validateEmail() {
    const email = document.getElementById("email").value;
    const errorMessage = document.getElementById("errorMessage");
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailPattern.test(email)) {
        errorMessage.textContent = "Please enter a valid email address.";
    } else {
        errorMessage.textContent = "";
    }
}

function validatePassword() {
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    if (password.length < 8 || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
        errorMessage.textContent = "Password must be at least 8 characters long, contain an uppercase letter and a number.";
    } else {
        errorMessage.textContent = "";
    }
}

function validatePhone() {
    const phone = document.getElementById("number").value;
    const errorMessage = document.getElementById("errorMessage");

    if (!/^[0-9]{10,15}$/.test(phone)) {
        errorMessage.textContent = "Phone number must be between 10 and 15 digits and contain only numbers.";
    } else {
        errorMessage.textContent = "";
    }
}

// Show/Hide Password Toggle
document.getElementById("password").addEventListener("focus", addToggle);

function addToggle() {
    let toggleButton = document.getElementById("togglePassword");

    if (!toggleButton) {
        toggleButton = document.createElement("span");
        toggleButton.id = "togglePassword";
        toggleButton.textContent = "Show";
        toggleButton.style.cursor = "pointer";
        toggleButton.style.marginLeft = "10px";

        document.getElementById("password").parentNode.appendChild(toggleButton);

        toggleButton.addEventListener("click", function() {
            const passwordField = document.getElementById("password");
            if (passwordField.type === "password") {
                passwordField.type = "text";
                toggleButton.textContent = "Hide";
            } else {
                passwordField.type = "password";
                toggleButton.textContent = "Show";
            }
        });
    }
}
