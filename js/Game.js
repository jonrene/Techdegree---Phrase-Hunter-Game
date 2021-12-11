/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game{
    constructor(){
        // Keeps track of missed guesses player has
        this.missed = 0;
        // Stores phrases to be used for game
        this.phrases = [new Phrase("Do not go gentle into that good night"), 
                        new Phrase("Life is like a box of chocolates"), 
                        new Phrase("Break a leg"), 
                        new Phrase("Better late then never"),
                        new Phrase("The best of both worlds")
        ];

        // current active phrase. 
        this.activePhrase = this.getRandomPhrase();
    }

    startGame(){
        // adds event listener to reset button to display game
        document.getElementById("btn__reset").addEventListener('click', (e) => {
            document.getElementById('overlay').style.display = 'none';
        })

        // adds current phrase to screen
        this.activePhrase.addPhraseToDisplay();
    }

    // returns a random phrase object from list of phrases. 
    getRandomPhrase(){
        return this.phrases[Math.floor(Math.random() * 5)];
    }

    handleInteraction(){

    }

    removeLife(){

    }

    checkForWin(){

    }

    gameOver(){

    }




}