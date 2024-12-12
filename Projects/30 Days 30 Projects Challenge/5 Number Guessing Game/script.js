let displayValue = document.querySelector('.display-screen');


function guessNumber(event){
const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);

let button = event.currentTarget;
let buttonText = button.innerText.trim();
let guess = parseInt(buttonText);
console.log(guess);

if (guess === randomNumber){
  displayValue.value = `YAHOO! GREAT GUESS 🥳`;
} else if (guess > randomNumber){
  displayValue.value = `You guessed: ${guess} is too high!`;
} else{
  displayValue.value = `You guessed: ${guess} is too low!`;
};
};

let number = document.querySelectorAll('.button');
number.forEach(button => {
  button.addEventListener('click', guessNumber);
});