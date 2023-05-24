"use strict";

// Store the Konami Code sequence
$(function () {
    let konamiCode = [
        'ArrowUp',
        'ArrowUp',
        'ArrowDown',
        'ArrowDown',
        'ArrowLeft',
        'ArrowRight',
        'ArrowLeft',
        'ArrowRight',
        'b',
        'a',
        'Enter'];
// Initialize an empty array to track user input
    let userInput = [];
// Listen for keydown events on the document
    document.addEventListener('keydown', (event) => {
        // Add the pressed key to the user input array
        userInput.push(event.key);

        // Check if the user input matches the Konami Code
        if (userInput.length === konamiCode.length && userInput.every((key, index) => key === konamiCode[index])) {
            // The Konami Code was entered correctly
            alert('You have added 30 lives! Other ideas:\nChange the background screen.\nPlay a sound.\nBe creative!');
            // Clear the user input array for future attempts
            userInput = [];
        } else if (userInput.length >= konamiCode.length) {
            // The entered sequence does not match the Konami Code
            // Clear the user input array
            userInput = [];
        }
    });
});
