// Define valid student login credentials
const validLogins = {
    "AB": "1234",   // Example: Username 'AB' with password '1234'
    "CD": "5678",   // Example: Username 'CD' with password '5678'
    "EF": "9101"    // Example: Username 'EF' with password '9101'
};

// Select the form and listen for the submit event
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission for validation

    // Get the entered username and password
    const username = document.getElementById('username').value.toUpperCase(); // Ensure uppercase
    const password = document.getElementById('password').value;

    // Check if the entered username exists in validLogins and if the password matches
    if (validLogins[username] && validLogins[username] === password) {
        window.alert("Login successful!"); // Successful login
        // Redirect to another page or update the page as needed
    } else {
        window.alert("Invalid login. Please check your username and password."); // Failed login
    }
});
