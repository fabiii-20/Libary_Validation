document.getElementById('signup-form').addEventListener('submit', function(eventSignup) {
    eventSignup.preventDefault();
    var name = document.getElementById('signup-name').value;
    var signupEmail = document.getElementById('signup-email').value;
    var signupPassword = document.getElementById('signup-password').value; 
    var dob = document.getElementById('signup-dob').value;
    var phone = document.getElementById('signup-phone').value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phoneRegex = /^\d{3}[- .]?\d{3}[- .]?\d{4}$/;
    var zip = document.getElementById('signup-zip').value;
    var validSignup = true;

    if (name.trim() === '') {
        document.getElementById('signup-name-error').innerText = 'Please enter your full name';
        validSignup = false;
    } else {
        document.getElementById('signup-name-error').innerText = '';
    }
    if (!emailRegex.test(signupEmail)) {
        document.getElementById('signup-email-error').innerText = 'Please enter a valid email';
        validSignup = false;
    } else {
        document.getElementById('signup-email-error').innerText = '';
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

    if (dob === '') {
        document.getElementById('signup-dob-error').innerText = 'Please select your date of birth';
        validSignup = false;
    } else {
        document.getElementById('signup-dob-error').innerText = '';
    }

    if (!phoneRegex.test(phone)) {
        document.getElementById('signup-phone-error').innerText = 'Please enter a valid phone number';
        validSignup = false;
    } else {
        document.getElementById('signup-phone-error').innerText = '';
    }

    if (zip.length !== 6) {
        document.getElementById('signup-zip-error').innerText = 'Zip code must contain 6 numbers';
        validSignup = false;
    } else {
        document.getElementById('signup-zip-error').innerText = '';
    }

    if (validSignup) {
        alert('Signup Successful');

        document.getElementById('signup-form').reset();
    }
});
