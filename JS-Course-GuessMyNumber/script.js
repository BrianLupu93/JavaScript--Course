'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!🎉';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;
document.querySelector('.highscore').textContent = 22;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

*/

//  Functie pentru secretNumber
// const secretNumber = Math.trunc(Math.random() * 20) + 1;

let secretNumber = 0;
function generateNumber() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
}
generateNumber();

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // Just for test than can you delete!!!
  console.log(secretNumber);

  // When there is no imput
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number';
    displayMessage('⛔ No Number');
    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Corret Number!';
    displayMessage('🎉 Corret Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
  }
  // NEW Implementetion REFACTORING
  //When guess is Wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  // When guess is too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // When guess is to low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  //  }
});

document.querySelector('.again').addEventListener('click', function () {
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  score = 20;
  document.querySelector('.score').textContent = score;
  generateNumber();
});
