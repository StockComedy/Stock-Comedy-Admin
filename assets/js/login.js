// Select the necessary DOM elements
const otpLink = document.getElementById("otp-link");
const otpInputs = document.querySelectorAll(".otp");
const loginForm = document.getElementById("login-form");
let generatedOTP = "";

// Function to generate a random 5-digit OTP
function generateOTP() {
    return Math.floor(10000 + Math.random() * 90000); // Generate a random 5-digit number
}

// Function to start generating OTP every 10 seconds
function startOTPGeneration() {
    setInterval(() => {
        generatedOTP = generateOTP(); // Generate a new OTP every 10 seconds
        console.log(`Generated OTP: ${generatedOTP}`); // For testing purposes, you can remove this
    }, 10000);
}

// Handle OTP link click to show the generated OTP
otpLink.addEventListener("click", function (e) {
    e.preventDefault();

    // Generate OTP on the first click (if not already generated)
    if (!generatedOTP) {
        generatedOTP = generateOTP();
    }

    // Display OTP to the user (you can show it in the input fields or in a modal)
    alert(`Your OTP is: ${generatedOTP}`);
});

// Function to check if OTP input matches the generated OTP
function checkOTPInput() {
    const enteredOTP = [...otpInputs].map(input => input.value).join("");
    return enteredOTP === generatedOTP.toString();
}

// Handle OTP form submission
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (checkOTPInput()) {
        // OTP is correct, proceed with login
        alert("OTP is correct. Redirecting to the dashboard...");
        // Redirect to the admin dashboard or the next page
        window.location.href = "pages/dashboard.html"; // Updated to redirect to the correct path
    } else {
        alert("Invalid OTP. Please try again.");
    }
});

// Start the OTP generation when the page loads
startOTPGeneration();