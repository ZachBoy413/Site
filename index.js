// Define an object to hold the valid login credentials
const validLogins = {
    "ZC": "4444",  // Student initials "AB" with PIN "1234"
    
};

// Function to validate login credentials
function validateLogin() {
    // Get the entered username (initials) and password (PIN)
    const username = document.getElementById("username").value.trim().toUpperCase();
    const password = document.getElementById("password").value.trim();

    // Check if the entered username exists in the validLogins object
    if (validLogins[username] && validLogins[username] === password) {
        // If credentials are correct, show a success message
        alert("Login successful!");
        return true;
    } else {
        // If credentials are incorrect, show an error message
        alert("Invalid login. Please try again.");
        return false;
    }
}

