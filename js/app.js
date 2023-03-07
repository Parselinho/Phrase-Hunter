const restartBtn = document.getElementById('btn__reset');
const phraseUL = document.querySelector('#phrase > ul');
const overlay = document.getElementById('overlay');
const divButtons = document.querySelector('#qwerty');
let game;

//function and eventListener to start new game : 
function newGame() {
    game = new Game()
    game.startGame();
}

restartBtn.addEventListener('click', newGame);


// //function and eventListener for the key buttons : 
// function pressedKey(e) {

// }

divButtons.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        console.log(handleInteraction(button));
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