document.getElementById('signup-password').addEventListener('input', function() {
    var signupPassword = this.value;
    var lowercaseRegex = /[a-z]/;
    var uppercaseRegex = /[A-Z]/;
    var digitRegex = /\d/;

    var passwordStrength = 0;
    if (lowercaseRegex.test(signupPassword)) passwordStrength++;
    if (uppercaseRegex.test(signupPassword)) passwordStrength++;
    if (digitRegex.test(signupPassword)) passwordStrength++;

    var strengthText = '';
    var strengthColor = '';
    if (signupPassword.length >= 12 && passwordStrength >= 3) {
        strengthText = 'Strong password';
        strengthColor = "green"; // Strong password
    } else if (signupPassword.length >= 10 && passwordStrength >= 2) {
        strengthText = 'Medium password';
        strengthColor = "orange"; // Medium password
    } else {
        strengthText = 'Weak password';
        strengthColor = "red"; // Weak password
    }
    document.getElementById('signup-password-error').innerHTML = 'Password strength: <span style="color: ' + strengthColor + '">' + strengthText + '</span>';
});

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
    } else {
        var lowercaseRegex = /[a-z]/;
        var uppercaseRegex = /[A-Z]/;
        var digitRegex = /\d/;

        var passwordStrength = 0;
        if (lowercaseRegex.test(signupPassword)) passwordStrength++;
        if (uppercaseRegex.test(signupPassword)) passwordStrength++;
        if (digitRegex.test(signupPassword)) passwordStrength++;

        var strengthText = '';
        var strengthColor = '';
        if (signupPassword.length >= 12 && passwordStrength >= 3) {
            strengthText = 'Strong password';
            strengthColor = "green"; // Strong password
        } else if (signupPassword.length >= 10 && passwordStrength >= 2) {
            strengthText = 'Medium password';
            strengthColor = "orange"; // Mediu
        } else {
            strengthText = 'Weak password';
            strengthColor = "red"; 
        }
        document.getElementById('signup-password-error').innerHTML = ' <span style="color: ' + strengthColor + '">' + strengthText + '</span>';
        if (strengthColor === "red") {
            validSignup = false;
        }
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
