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


// function buttonsEvent(e) {
//   const button = e.target;
//   if (button.tagName === 'BUTTON') {
//     game.handleInteraction(button);
//   }
// };

// divButtons.addEventListener('click', buttonsEvent);
// divButtons.addEventListener('keydown', buttonsEvent);

function buttonsEvent(e) {
  let button;
  if (e.type === 'click') {
    button = e.target;
  } else if (e.type === 'keydown') {
    const letter = e.key;
    const buttons = document.querySelectorAll('.key');
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].textContent === letter) {
        button = buttons[i];
        break;
      }
    }
  }
  if (button && button.tagName === 'BUTTON') {
    game.handleInteraction(button);
  }
}

divButtons.addEventListener('click', buttonsEvent);
document.addEventListener('keydown', buttonsEvent);