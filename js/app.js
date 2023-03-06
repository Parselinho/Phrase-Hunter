const restartBtn = document.getElementById('btn__reset');





// const game = new Game();
// const randomPhrase = game.getRandomPhrase();
// const phrase = new Phrase(randomPhrase.phrase);
// phrase.addPhraseToDisplay();
const game = new Game();
game.getRandomPhrase().addPhraseToDisplay();
// const game = new Game();
// game.phrases.forEach((phrase, index) => {
// console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });