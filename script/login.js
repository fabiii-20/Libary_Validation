// Login form validation
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-password').value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var valid = true;

    if (!emailRegex.test(email)) {
        document.getElementById('login-email-error').innerText = 'Please enter a valid email';
        valid = false;
    } else {
        document.getElementById('login-email-error').innerText = '';
    }

    if (signupPassword.length < 8) {
        document.getElementById('signup-password-error').innerText = 'Password must be at least 8 characters';
        validSignup = false;
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/.test(signupPassword)) {
        document.getElementById('signup-password-error').innerText = 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
        validSignup = false;
    } else {
        var passwordStrength = validatePassword(signupPassword);
        var strengthColor = '';
        if (passwordStrength === "green") {
            strengthColor = "green"; // Strong password
        } else if (passwordStrength === "orange") {
            strengthColor = "orange"; // Medium password
        } else {
            strengthColor = "red"; // Weak password
        }
        document.getElementById('signup-password-error').innerHTML = 'Password strength: <span style="color: ' + strengthColor + '">' + passwordStrength.toUpperCase() + '</span>';
    }


    if (valid) {
        // You can perform form submission or other actions here
        alert('Login Successful');
        // Clear form fields
        document.getElementById('login-form').reset();
    }
});
