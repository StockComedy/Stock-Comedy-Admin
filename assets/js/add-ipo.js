import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';

// Your Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyDUKi9EMIGputcL32kdGs7W-bhaiGRYKYI",
    authDomain: "stockcomedy-666.firebaseapp.com",
    databaseURL: "https://stockcomedy-666-default-rtdb.firebaseio.com",
    projectId: "stockcomedy-666",
    storageBucket: "stockcomedy-666.firebasestorage.app",
    messagingSenderId: "670829636816",
    appId: "1:670829636816:web:bca160907d8e10ec8d02d5",
    measurementId: "G-T8XFP8TFGV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.addEventListener("DOMContentLoaded", function () {
    // Set the minimum date for the IPO date (tomorrow)
    const ipoDateInput = document.getElementById('ipo-date');
    
    // Get the current date and format it as yyyy-mm-dd
    const today = new Date();
    today.setDate(today.getDate() + 1); // Set date to tomorrow
    
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Get month and ensure it's two digits
    const day = String(today.getDate()).padStart(2, '0'); // Get day and ensure it's two digits
    
    // Set the min attribute to the formatted date (yyyy-mm-dd)
    ipoDateInput.setAttribute('min', `${year}-${month}-${day}`);

    // Select the form
    const ipoForm = document.querySelector('.ipo-form');

    // Add event listener for form submission
    ipoForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get form values
        const companyName = document.getElementById('company-name').value;
        const stockSymbol = document.getElementById('stock-symbol').value;
        const sector = document.getElementById('sector').value;
        const ipoDate = document.getElementById('ipo-date').value;
        const offeringPrice = document.getElementById('offering-price').value;
        const totalShares = document.getElementById('total-shares').value;

        // Simple form validation
        if (!companyName || !stockSymbol || !sector || !ipoDate || !offeringPrice || !totalShares) {
            alert("Please fill out all fields before submitting.");
            return;
        }

        // Validate stock symbol length (4 to 5 characters) and check if it only contains letters
        const stockSymbolRegex = /^[A-Za-z]+$/; // Regex to ensure only letters
        if (stockSymbol.length < 4 || stockSymbol.length > 5) {
            alert("Stock symbol must be between 4 and 5 characters.");
            return;
        }
        if (!stockSymbolRegex.test(stockSymbol)) {
            alert("Stock symbol must contain only letters (A-Z, a-z).");
            return;
        }

        // Validate Offering Price (must be a valid positive float number greater than 0)
        if (isNaN(offeringPrice) || parseFloat(offeringPrice) <= 0) {
            alert("Offering Price must be a valid positive number greater than 0.");
            return;
        }

        // Validate Total Shares (must be a valid integer number, at least 1,000,000, and a multiple of 100,000)
        if (isNaN(totalShares) || parseInt(totalShares) < 1000000 || parseInt(totalShares) % 100000 !== 0) {
            alert("Total shares must be at least 1,000,000 and a multiple of 100,000.");
            return;
        }

        // Set the confirmation modal values
        document.getElementById('confirmCompanyName').textContent = companyName;
        document.getElementById('confirmStockSymbol').textContent = stockSymbol;
        document.getElementById('confirmSector').textContent = sector;
        document.getElementById('confirmIpoDate').textContent = ipoDate;
        document.getElementById('confirmOfferingPrice').textContent = offeringPrice;
        document.getElementById('confirmTotalShares').textContent = totalShares;

        // Show the modal
        document.getElementById('confirmationModal').style.display = 'flex';
    });

    // Close modal function
    function closeModal() {
        document.getElementById('confirmationModal').style.display = 'none';
    }

    // Confirm IPO function (Add to Firestore)
    async function confirmIpo() {
        // Get form values again (to send them to Firestore)
        const companyName = document.getElementById('company-name').value;
        const stockSymbol = document.getElementById('stock-symbol').value;
        const sector = document.getElementById('sector').value;
        const ipoDate = document.getElementById('ipo-date').value;
        const offeringPrice = document.getElementById('offering-price').value;
        const totalShares = document.getElementById('total-shares').value;

        const ipoDetails = {
            companyName,
            stockSymbol,
            sector,
            ipoDate,
            offeringPrice,
            totalShares,
            status: 'Open for Subscription',  // Default value, you can adjust
            positive: true,  // You can dynamically set this
        };

        try {
            // Save the IPO data to Firestore
            await addDoc(collection(db, "ipos"), ipoDetails);

            // Show confirmation message
            alert("New IPO added successfully!");

            // Optionally, reset the form
            document.querySelector('.ipo-form').reset();

            // Close the modal
            closeModal();
        } catch (error) {
            console.error("Error adding IPO: ", error);
            alert("Failed to add IPO. Please try again.");
        }
    }

    // Cancel IPO function
    function cancelIpo() {
        // Simply close the modal without doing anything
        closeModal();
    }

    // Expose the functions to the global scope for use in buttons
    window.closeModal = closeModal;
    window.confirmIpo = confirmIpo;
    window.cancelIpo = cancelIpo;
});