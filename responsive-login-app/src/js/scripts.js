document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const errorMessage = document.getElementById("errorMessage");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        validateForm();
    });

    function validateForm() {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        errorMessage.textContent = "";

        if (username === "") {
            errorMessage.textContent += "Username is required. ";
        }
        if (password === "") {
            errorMessage.textContent += "Password is required. ";
        }

        if (errorMessage.textContent === "") {
            // Proceed with form submission or further processing
            console.log("Form submitted successfully!");
        }
    }

    // Social login functions
    document.getElementById("loginMicrosoft").addEventListener("click", function() {
        // Implement Microsoft login logic here
        console.log("Microsoft login initiated.");
    });

    document.getElementById("loginGoogle").addEventListener("click", function() {
        // Implement Google login logic here
        console.log("Google login initiated.");
    });

    document.getElementById("loginFacebook").addEventListener("click", function() {
        // Implement Facebook login logic here
        console.log("Facebook login initiated.");
    });

    document.getElementById("loginApple").addEventListener("click", function() {
        // Implement Apple login logic here
        console.log("Apple login initiated.");
    });

    window.handleCredentialResponse = function(response) {
        console.log("Encoded JWT ID token: " + response.credential);
        // Decode the JWT token and handle the user login
        // You can send the token to your backend for verification
    };

    function onSignIn(googleUser) {
        alert('1');
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
      }
});