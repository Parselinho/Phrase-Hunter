const restartBtn = document.getElementById('btn__reset');
const phraseUL = document.querySelector('#phrase > ul');
const overlay = document.getElementById('overlay');
const divButtons = document.querySelector('#qwerty');
let game;

//function and eventListener to start new game : 
function newGame() {
    game = new Game()
    game.resetGame();
    game.startGame();
    // handleInteraction()
}

restartBtn.addEventListener('click', newGame);


// //function and eventListener for the key buttons : 
divButtons.addEventListener('click', (e) => {
    const button = e.target;
    const buttonText = e.target.textContent;
    if (button.tagName === 'BUTTON') {
        button.classList.add('chosen');
      if (!game.handleInteraction(buttonText)) {
        button.classList.add('wrong');
        button.disabled = true;
      }
    }
  });


// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

// const game = new Game();
// const randomPhrase = game.getRandomPhrase();
// const phrase = new Phrase(randomPhrase.phrase);
// phrase.addPhraseToDisplay();


// const game = new Game();
// game.phrases.forEach((phrase, index) => {
// console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });