/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// creates a new game instance 
let game = new Game();

// adds event listener to reset button to start game
document.getElementById("btn__reset").addEventListener('click', () => {
    game.startGame();
})

// Adds functionality to onscreen keyboard
document.getElementById('qwerty').addEventListener('click', game.handleInteraction);