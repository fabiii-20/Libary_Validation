document.getElementById('login-password').addEventListener('input', function() {
    var loginPassword = this.value;
    // var lowercaseRegex = /[a-z]/;
    // var uppercaseRegex = /[A-Z]/;
    // var digitRegex = /\d/;

    var passwordStrength = 0;
    // if (lowercaseRegex.test(loginPassword)) passwordStrength++;
    // if (uppercaseRegex.test(loginPassword)) passwordStrength++;
    // if (digitRegex.test(loginPassword)) passwordStrength++;
    var hasUpperCase = /[A-Z]/.test(loginPassword);
    var hasLowerCase = /[a-z]/.test(loginPassword);
    var hasNumbers = /\d/.test(loginPassword);
    if(loginPassword.length < 8) {
        passwordStrength=1
    }
    if(loginPassword.length >=8 && (!hasLowerCase || !hasUpperCase || !hasNumbers)) {
        passwordStrength =2
    }
    if(hasLowerCase && hasUpperCase && hasNumbers && loginPassword.length >= 8) {
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
    document.getElementById('login-password-error').innerHTML = ' <span style="color: ' + strengthColor + '">' + strengthText + '</span>';
    document.getElementById('login-password-digit').innerHTML = `<span style="color: ${hasNumbers ? 'green' : 'red'}">${hasNumbers ? '✓' : '✗'} Should contain atleast one digit </span>`;
    document.getElementById('login-password-lower').innerHTML = `<span style="color: ${hasLowerCase ? 'green' : 'red'}">${hasLowerCase ? '✓' : '✗'} Should contain atleast one lowercase letter </span>`;
    document.getElementById('login-password-upper').innerHTML = `<span style="color: ${hasUpperCase ? 'green' : 'red'}">${hasUpperCase ? '✓' : '✗'} Should contain atleast one uppercase letter </span>`;
});
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('login-email').value;
    var loginPassword = document.getElementById('login-password').value;
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    var valid = true;

    if (!emailRegex.test(email)) {
        document.getElementById('login-email-error').innerText = 'Please enter a valid email';
        valid = false;
    } else {
        document.getElementById('login-email-error').innerText = '';
    }

    if (loginPassword.length < 8) {
        // document.getElementById('login-password-error').innerText = 'Password must be at least 8 characters';
        validLogin = false;
    } else {
        // var lowercaseRegex = /[a-z]/;
        // var uppercaseRegex = /[A-Z]/;
        // var digitRegex = /\d/;

        // var passwordStrength = 0;
        // if (lowercaseRegex.test(loginPassword)) passwordStrength++;
        // if (uppercaseRegex.test(loginPassword)) passwordStrength++;
        // if (digitRegex.test(loginPassword)) passwordStrength++;

        // var strengthText = '';
        // var strengthColor = '';
        // if (loginPassword.length >= 12 && passwordStrength >= 3) {
        //     strengthText = 'Strong password';
        //     strengthColor = "green"; // Strong password
        // } else if (loginPassword.length >= 10 && passwordStrength >= 2) {
        //     strengthText = 'Medium password';
        //     strengthColor = "orange"; // Mediu
        // } else {
        //     strengthText = 'Weak password';
        //     strengthColor = "red"; 
        // }
        // document.getElementById('login-password-error').innerHTML = ' <span style="color: ' + strengthColor + '">' + strengthText + '</span>';
        // if (strengthColor === "red") {
        //     validLogin = false;
        // }
        var hasLowerCase = /[a-z]/.test(loginPassword);
        var hasUpperCase = /[A-Z]/.test(loginPassword);
        var hasNumbers = /\d/.test(loginPassword);
        var passwordLength = loginPassword.length;
        var isPasswordValid = hasLowerCase && hasUpperCase && hasNumbers && passwordLength >= 8;
        if (!isPasswordValid) {
            // document.getElementById('login-password-error').innerText = 'Password must contain at least one uppercase letter, one lowercase letter, one digit and must be at least 8 characters long';
            valid = false;
        } else {
            // document.getElementById('login-password-error').innerText = '';
        }

    }


    if (valid) {
        
        alert('Login Successful');
        
        document.getElementById('login-form').reset();
        document.getElementById('login-email-error').innerText = '';
        document.getElementById('login-password-error').innerText = '';
        document.getElementById('login-password-digit').innerText = '';
        document.getElementById('login-password-lower').innerText = '';
        document.getElementById('login-password-upper').innerText = '';
    }
});

document.getElementById('login-email').addEventListener('input', function() {
    var loginEmail = this.value;
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(loginEmail)) {
        document.getElementById('login-email-error').innerText = 'Please enter a valid email';
    } else {
        document.getElementById('login-email-error').innerText = '';
    }

})
