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
        this.activePhrase = null;
    }

    startGame(){
        // Gets rid of game overlay to show game
        document.getElementById('overlay').style.display = 'none';

        // gets a phrase for the current game
        this.activePhrase = this.getRandomPhrase();

        // adds current phrase to screen
        this.activePhrase.addPhraseToDisplay();

        
    }

    // returns a random phrase object from list of phrases. 
    getRandomPhrase(){
        return this.phrases[Math.floor(Math.random() * 5)];
    }

    handleInteraction(){

    }

    // This method removes a life/heart from a player on screen
    removeLife(){
        document.getElementById('livesList').children[this.missed - 1].firstChild.src = "images/lostHeart.png";
    }

    // Checks to see if player has won the game. If player wins, returns true. False if otherwise. 
    checkForWin(){
        // creates list of objects with the class letter. 
        const letters = document.getElementsByClassName('letter');

        // Loops through all letters in current phrase to see if they have been revealed. 
        for(let i = 0; i < letters.length; i++){
            if(letters[i].className != 'show'){
                return false;
            }
        }
        return true;
    }

    // This method reveals the proper overlay screen depending if player wins or loses. 
    gameOver(result){
        //Creates reference to overlay 
        let gameOverlay = document.getElementById('overlay');

        // Updates overlay message and class. Also reveals overlay
        if(result === 'win'){
            document.getElementById('overlay').style.display = 'block';
            gameOverlay.className = 'win';
            document.getElementById("game-over-message").innerHTML = "Congratualions! You got it."
        }else{
            document.getElementById('overlay').style.display = 'block';
            gameOverlay.className = 'lose';
            document.getElementById("game-over-message").innerHTML = "Sorry. Better luck next time."
        }
    }




}