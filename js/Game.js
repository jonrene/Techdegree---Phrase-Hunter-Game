/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game{
    constructor(){
        // Keeps track of missed guesses player has
        this.missed = 0;
        // Stores phrases to be used for game
        this.phrases = [new Phrase("Do not go gentle into that good night"), 
                        new Phrase("Life is good"), 
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

        // clears phrase if one there
        document.getElementById('phraseList').innerHTML = '';
       
        // Resets all all lives/hearts and number of missed guesses
        this.missed = 0;
        for(let i = 0; i < document.getElementById('livesList').children.length; i++ ){
            document.getElementById('livesList').children[i].firstChild.src = "images/liveHeart.png";
        }

        // adds current phrase to screen
        this.activePhrase.addPhraseToDisplay();

        // enables all buttons/keys on keyboard
        let keys = document.getElementsByClassName('key');
        console.log(keys.length);
        for(let i = 0; i < keys.length; i++){
            keys[i].disabled = false;
            keys[i].className = 'key';
        }
    }

    // returns a random phrase object from list of phrases. 
    getRandomPhrase(){
        return this.phrases[Math.floor(Math.random() * 5)];
    }

    // 
    handleInteraction(e){
        if(e.target.className === 'key'){
            // creates reference to current key/button
            let key = e.target;

            // disables current key/button
            key.disabled = true;

            // checks if current key is in phrase. 
            // If current key in phrase, changes key's class to chosen and checks for a win
            // Else, changes key's class to wrong, increases number of missing, and removes a life from screen,
            // and checks for loss. 
            if(game.activePhrase.phrase.includes(key.innerHTML)){
                key.className = 'key chosen';
                game.activePhrase.showMatchedLetter(key.innerHTML);
                if(game.checkForWin()){
                    game.gameOver('win');
                }
            } 
            else{
                game.missed += 1;
                if(game.missed >= 5){
                    game.gameOver('');
                }else{
                    key.className = 'key wrong';
                    game.removeLife();
                }
            }
        }
    }

    // This method removes a life/heart from a player on screen
    removeLife(){
        document.getElementById('livesList').children[this.missed - 1].firstChild.src = "images/lostHeart.png";
    }

    // Checks to see if player has won the game. If player wins, returns true. False if otherwise. 
    checkForWin(){
        // creates list of objects with the class letter. 
        const letters = document.getElementById('phraseList').children;

        // Loops through all letters in current phrase to see if they have all been revealed. 
        for(let i = 0; i < letters.length; i++){
            if(letters[i].className === 'letter'){
                return false;
            }
        }
        return true;
    }

    // This method reveals the proper overlay screen depending if player wins or loses. 
    gameOver(result){
        //Creates reference to overlay 
        let gameOverlay = document.getElementById('overlay');

        // Updates overlay message and class. Also reveals certain overlay based on loss or win by player
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