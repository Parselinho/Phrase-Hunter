class Game {
    constructor() {
        this.missed = 0;
        this.phrase =[
            new Phrase('Chuku Luku'),
            new Phrase('JavaScript'),
            new Phrase('Front Backend'),
            new Phrase('Israel'),
            new Phrase('Jerusalem')
            ];
        this.activePhrase = null;
    }
    
    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        const random = this.phrase[Math.floor(Math.random() * this.phrase.length)];
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

    removeLife() {
        const hiddenLetter = document.querySelectorAll(`.letter.hide`);
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
            overlay.classList.remove('lose');
            overlay.classList.add('win');
        } else {
            gameOverMessage.textContent = `Keep on going, try to start over again and guess the right phrase.`
            overlay.classList.remove('start')
            overlay.classList.remove('win');
            overlay.classList.add('lose');
        }
        this.resetGame()
    }

    handleInteraction(button) {
        button.disabled = true;
        const letter = button.textContent;
        if (this.activePhrase.checkLetter(letter)) {
          button.classList.add('chosen');
          const letterLI = document.querySelectorAll(`.letter.${letter}`); // took it from stakOverFlow, the code target is create a css selector string that targets all li elements with both letter class and letter argument
          for (let i = 0; i < letterLI.length; i++) {
            this.activePhrase.showMatchedLetter(letterLI[i]);
          }
          if (this.checkForWin()) {
            this.gameOver(true);
          }
          return true;
        } else {
          button.classList.add('wrong');
          this.removeLife();
          return false;
        }
      }
      

    resetGame() {
        this.missed = 0;
        const buttons = document.querySelectorAll('.key');
        for (let i = 0; i < buttons.length; i++) {
          buttons[i].classList.remove('chosen', 'wrong');
          buttons[i].disabled = false;;
        }
        const img = document.querySelectorAll('.tries img');
        for (let i=0; i< img.length; i++) {
            img[i].src = 'images/liveHeart.png';
            img[i].alt = 'Heart Icon'
        }
        const liArray = [...phraseUL.children];
        for (let i = 0; i < liArray.length; i++) {
          phraseUL.removeChild(liArray[i]);
        }
    }
}
