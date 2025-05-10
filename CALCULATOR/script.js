// Get all the buttons and display input
const display = document.querySelector('.display input');
const buttons = document.querySelectorAll('.container input');

// Initialize display value
let displayValue = "";

// Add event listeners to all buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        // Clear the display (AC)
        if (value === "AC") {
            displayValue = "";
        } 
        // Delete the last character (DE)
        else if (value === "DE") {
            displayValue = displayValue.slice(0, -1);
        } 
        // Calculate the result (=)
        else if (value === "=") {
            try {
                displayValue = eval(displayValue); // Evaluate the expression
            } catch {
                displayValue = "Error"; // Handle invalid expressions
            }
        } 
        // Add the button value to the display
        else {
            displayValue += value;
        }

        // Update the display
        display.value = displayValue;
    });
});