/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


// Creates references to reset/start button
let resetButton = document.getElementById("btn__reset");

// adds event listener to reset button to display game
resetButton.addEventListener('click', (e) => {
    document.getElementById('overlay').style.display = 'none';
})

