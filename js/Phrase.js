class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

        /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {
        const phraseUL = document.querySelector('#phrase > ul');
        for (let i = 0; i < this.phrase.length; i++) {
            const li = document.createElement('li');
            if (this.phrase[i] === ' ') {
                li.classList.add('space');
            } else {
                li.classList.add('letter');
            }
            phraseUL.append(li);
        }
    }

}


