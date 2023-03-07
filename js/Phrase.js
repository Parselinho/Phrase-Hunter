class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

        /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {
        for (let i = 0; i < this.phrase.length; i++) {
            const li = document.createElement('li');
            if (this.phrase[i] === ' ') {
                li.classList.add('hide');
                li.classList.add('space');
            } else {
                li.classList.add('hide');
                li.classList.add('letter');
                li.classList.add(this.phrase[i]);
                li.textContent = this.phrase[i];
            }
            phraseUL.append(li);
        }
    }

    // `checkLetter()`: Checks to see if the letter selected by the player matches a letter in the phrase.
    //  and Reveals the letter(s) on the board that matches the  player's selection.
    checkLetter(letter) {
        const letterLI = document.querySelectorAll('.letter');
        let isMatch = false;
        for (let i =0; i < letterLI.length; i++) {
        if (letterLI[i].textContent === letter) {
            this.showMatchedLetter(letterLI[i]);
            isMatch = true;
        }
        }
        return isMatch;
    }

    showMatchedLetter(letterLI) {
        letterLI.classList.remove('hide');
        letterLI.classList.add('show');
    }
}



