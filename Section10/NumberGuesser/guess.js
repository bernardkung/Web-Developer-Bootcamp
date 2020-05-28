// Create secret number
let secretNumber = 4;

// Ask for user guess
let guess = Number(prompt("Guess a number"));

// Check Guess
if (guess === secretNumber) {
    alert("You got it right!");
} else if (guess > secretNumber) {
    alert("You guessed too high!");
} else {
    alert("You guessed too low!");
}