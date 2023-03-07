class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            {phrase: 'Chuku Luku'}, {phrase: 'JavaScript'}, {phrase: 'Front Backend'}, {phrase: 'Israel'}, {phrase: 'Jerusalem'}
        ];
        this.activePhrase = null;
    }
    
    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        const random = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return new Phrase(random.phrase);
    }

        /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase()
        this.activePhrase.addPhraseToDisplay();
    }

    checkForWin() {
        const hideLetter = document.querySelectorAll('.letter.hide');
        return hideLetter.length === 0;
    }

    removeLife(letter) {
        const hiddenLetter = document.querySelectorAll('.letter.hide');
        const img = document.querySelectorAll('.tries img');
        this.missed += 1;
        // selects the heart image corresponding to the cuurent number of lives lost
        img[this.missed - 1].src = 'images/lostHeart.png';
        img[this.missed - 1].alt = 'Lost Heart Icon';
        if(this.missed === 5) {
            this.gameOver(false);
        }
    }

    gameOver(gameWon) {
        const gameOverMessage = document.getElementById('game-over-message');
        overlay.style.display = '';
        if (gameWon) {
            gameOverMessage.textContent = `You gueesed the right phrase after ${this.missed} wrong guesses. Well Done!`
            overlay.classList.remove('start')
            overlay.classList.add('win');
        } else {
            gameOverMessage.textContent = `Keep on going, try to start over again and guess the right number.`
            overlay.classList.remove('start')
            overlay.classList.add('lose');
        }
    }

    handleInteraction(letter) {
        const isMatch = this.activePhrase.checkLetter(letter);
        if(isMatch) {
            if(this.checkForWin()) {
                this.gameOver(true);
            }
        } else {
            this.removeLife();
        }
        return isMatch;
    }

}
