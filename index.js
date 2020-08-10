const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeRemaining = document.querySelector('#time-remaining');
let score = document.querySelector('#score');

// Start the game
let result = 0;
let currentTime = timeRemaining.textContent;

// Randomly select a square
function randomSquare() {
   square.forEach(className => {
      className.classList.remove('mole');
   })
   let randomPosition = square[Math.floor(Math.random() * 9)];
   randomPosition.classList.add('mole');

   // Assign the id of the randomPosition to hitPosition allowing for later use 
   hitPosition = randomPosition.id
}

square.forEach(id => {
   id.addEventListener('mouseup', () => {
      if (id.id === hitPosition) {
         result = result + 1;
         score.textContent = result;
         hitPosition = null;
      }
   })
});

function moveMole() {
   let timerId = null;
   timerId = setInterval(randomSquare, 800);
}

moveMole();

function countDown() {
   currentTime--
   timeRemaining.textContent = currentTime
 
   if(currentTime === 0 ) {
     clearInterval(timerId)
     alert('GAME OVER! Your final score is ' +  result )
   }
 }

let timerId = setInterval(countDown, 1000);