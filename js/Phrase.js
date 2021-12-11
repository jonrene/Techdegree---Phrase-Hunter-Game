/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase{
    // sets phrase for phrse object
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }

    // This function adds the hidden phrase to screen.
    addPhraseToDisplay(){
        // creates reference to phraseList
        let phraseList = document.getElementById("phraseList");
        
        // This iterates through current phrase and creates an LI element for each character in phrase.
        // Checks to see if each character is a space or character and assigns it the appropriate class.
        // Then it sets each LI element's innerHTML to current character in phrase
        for(let i = 0; i < this.phrase.length; i++){
            // creates a list item to be added to the phrase list
            let currChar = document.createElement("LI");
            
            // checks to see if list item should be a space or a letter and assigns it the appropriate class
            if(this.phrase[i] === " "){
                currChar.className = "space";
            } else{
                currChar.className = "letter";
            }

            // sets innerHTML of list item to current character in phrase
            currChar.innerHTML = this.phrase[i];

            // adds phrase to screen. 
            phraseList.appendChild(currChar);
        }
    }

    // checks to see if given letter is in the phrase
    checkLetter(letter){
        return this.phrase.includes(letter.toLowerCase());
    }

    // reveals all instances of given letter on screen if it's in the phrase
    showMatchedLetter(letter){ 
         // creates reference to phraseList
         let phraseList = document.getElementById("phraseList");
        
        // reveals letter on screen if part of phrase. 
        for(let i = 0; i < phraseList.children.length; i++){
            if(phraseList.children[i].innerHTML === letter){
                phraseList.children[i].className = 'show'
            }
        }
    }
}