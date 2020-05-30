
var p1button = document.querySelector("#button1");
var p2button = document.querySelector("#button2");
var reset = document.querySelector("#reset");
var p1display = document.querySelector("#score1");
var p2display = document.querySelector("#score2");
var numInput = document.querySelector("input");

var goalDisplay = document.querySelector("#goal")
var goal = Number(goalDisplay.textContent);
var gameOver = false;



// Increase Player 1 score
p1button.addEventListener("click", function() {
    if (!gameOver) {
        // Increase score
        let score1 = Number(p1display.textContent);
        score1++;

        // Update display
        p1display.textContent = score1;

        // Check if player has won
        if (score1 === goal) {
            gameOver = true;
            p1display.classList.add("green");
            console.log("GAME OVER!! PLAYER 1 WINS!!");
        }
    }
})

// Increase Player 2 score
p2button.addEventListener("click", function() {
    if (!gameOver) {
        // Increase score
        let score2 = Number(p2display.textContent);
        score2++;

        // Update display
        p2display.textContent = score2;

        // Check if player has won
        if (score2 === goal) {
            gameOver = true;
            p2display.classList.add("green");
            console.log("GAME OVER!! PLAYER 2 WINS!!");
        }
    }
})


// Reset game
function gameReset() {
    // Reset scores
    p1display.textContent = 0;
    p2display.textContent = 0;

    // Reset colors
    p1display.classList.remove("green")
    p2display.classList.remove("green")

    // Reset game state
    gameOver = false;
}

reset.addEventListener("click", function() {
    gameReset();
})

// Set a new winning score
numInput.addEventListener("change", function() {
    // Set the winning score to the entered value
    goal = Number(numInput.value);

    // Update display
    goalDisplay.textContent = goal;

    // Reset all player scores
    gameReset();
})
