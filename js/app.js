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
}

restartBtn.addEventListener('click', newGame);

function buttonsEvent(e) {
  const button = e.target;
  const buttonText = e.target.textContent;
  if (button.tagName === 'BUTTON') {
      button.classList.add('chosen');
    if (!game.handleInteraction(buttonText)) {
      button.classList.add('wrong');
      button.disabled = true;
    }
  }
}

divButtons.addEventListener('click', buttonsEvent);
//function and eventListener for the key buttons : 

// divButtons.addEventListener('click', (e) => {
    // const button = e.target;
    // const buttonText = e.target.textContent;
    // if (button.tagName === 'BUTTON') {
    //     button.classList.add('chosen');
    //   if (!game.handleInteraction(buttonText)) {
    //     button.classList.add('wrong');
    //     button.disabled = true;
    //   }
    // }
  // });
