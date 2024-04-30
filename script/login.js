document.getElementById('login-password').addEventListener('input', function() {
    var loginPassword = this.value;
    var lowercaseRegex = /[a-z]/;
    var uppercaseRegex = /[A-Z]/;
    var digitRegex = /\d/;

    var passwordStrength = 0;
    if (lowercaseRegex.test(loginPassword)) passwordStrength++;
    if (uppercaseRegex.test(loginPassword)) passwordStrength++;
    if (digitRegex.test(loginPassword)) passwordStrength++;

    var strengthText = '';
    var strengthColor = '';
    if (loginPassword.length >= 12 && passwordStrength >= 3) {
        strengthText = 'Strong password';
        strengthColor = "green"; // Strong password
    } else if (loginPassword.length >= 10 && passwordStrength >= 2) {
        strengthText = 'Medium password';
        strengthColor = "orange"; // Medium password
    } else {
        strengthText = 'Weak password';
        strengthColor = "red"; // Weak password
    }
    document.getElementById('login-password-error').innerHTML = ' <span style="color: ' + strengthColor + '">' + strengthText + '</span>';
});
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

    if (loginPassword.length < 8) {
        document.getElementById('login-password-error').innerText = 'Password must be at least 8 characters';
        validLogin = false;
    } else {
        var lowercaseRegex = /[a-z]/;
        var uppercaseRegex = /[A-Z]/;
        var digitRegex = /\d/;

        var passwordStrength = 0;
        if (lowercaseRegex.test(loginPassword)) passwordStrength++;
        if (uppercaseRegex.test(loginPassword)) passwordStrength++;
        if (digitRegex.test(loginPassword)) passwordStrength++;

        var strengthText = '';
        var strengthColor = '';
        if (loginPassword.length >= 12 && passwordStrength >= 3) {
            strengthText = 'Strong password';
            strengthColor = "green"; // Strong password
        } else if (loginPassword.length >= 10 && passwordStrength >= 2) {
            strengthText = 'Medium password';
            strengthColor = "orange"; // Mediu
        } else {
            strengthText = 'Weak password';
            strengthColor = "red"; 
        }
        document.getElementById('login-password-error').innerHTML = ' <span style="color: ' + strengthColor + '">' + strengthText + '</span>';
        if (strengthColor === "red") {
            validLogin = false;
        }
    }


    if (valid) {
        
        alert('Login Successful');
        
        document.getElementById('login-form').reset();
    }
});
