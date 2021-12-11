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
        activePhrase = null;
    }

}