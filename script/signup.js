document.getElementById('signup-password').addEventListener('input', function() {
    var signupPassword = this.value;
    var lowercaseRegex = /[a-z]/;
    var uppercaseRegex = /[A-Z]/;
    var digitRegex = /\d/;

    var passwordStrength = 0;
    if (lowercaseRegex.test(signupPassword)) passwordStrength++;
    if (uppercaseRegex.test(signupPassword)) passwordStrength++;
    if (digitRegex.test(signupPassword)) passwordStrength++;
    var hasLowerCase = /[a-z]/.test(signupPassword);
    var hasUpperCase = /[A-Z]/.test(signupPassword);
    var hasNumbers = /\d/.test(signupPassword);
    if(signupPassword.length < 8) {
        passwordStrength=1
    }
    if(signupPassword.length >=8 && (!hasLowerCase || !hasUpperCase || !hasNumbers)) {
        passwordStrength =2
    }
    if(hasLowerCase && hasUpperCase && hasNumbers && signupPassword.length >= 8) {
        passwordStrength = 3;
    }
    
    var strengthText = '';
    var strengthColor = '';
    if ( passwordStrength == 3) {
        strengthText = '✓ Password strength : Strong';
        strengthColor = "green"; // Strong password
    } else if ( passwordStrength == 2) {
        strengthText = '✓ Password strength : Medium';
        strengthColor = "orange"; // Medium password
    } else {
        strengthText = '✗ Password strength : Weak';
        strengthColor = "red"; // Weak password
    }
    document.getElementById('signup-password-error').innerHTML = ' <span style="color: ' + strengthColor + '">' + strengthText + '</span>';
    document.getElementById('signup-password-digit').innerHTML = `<span style="color: ${hasNumbers ? 'green' : 'red'}">${hasNumbers ? '✓' : '✗'} Should contain atleast one digit </span>`;
    document.getElementById('signup-password-lower').innerHTML = `<span style="color: ${hasLowerCase ? 'green' : 'red'}">${hasLowerCase ? '✓' : '✗'} Should contain atleast one lowercase letter </span>`;
    document.getElementById('signup-password-upper').innerHTML = `<span style="color: ${hasUpperCase ? 'green' : 'red'}">${hasUpperCase ? '✓' : '✗'} Should contain atleast one uppercase letter </span>`;

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
        
        var hasLowerCase = /[a-z]/.test(signupPassword);
        var hasUpperCase = /[A-Z]/.test(signupPassword);
        var hasNumbers = /\d/.test(signupPassword);
        var isPasswordValid = hasLowerCase && hasUpperCase && hasNumbers && signupPassword.length >= 8;
        if(!isPasswordValid) {
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

document.getElementById('signup-email').addEventListener('input', function() {
    var signupEmail = this.value;
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(signupEmail)) {
        document.getElementById('signup-email-error').innerText = 'Please enter a valid email';
    } else {
        document.getElementById('signup-email-error').innerText = '';
    }
})
