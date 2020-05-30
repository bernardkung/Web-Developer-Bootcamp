
var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");

var rgb_display = document.getElementById("rgb_display");
var msg_display = document.querySelector("#message");
var h1_display = document.querySelector("h1");

var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

// Initialize game state
function init() {
    setupModeButtons();
    setupResetButton();
    setupSquares();

    reset();
}

function setupModeButtons() {
    // Set difficulty mode button listeners
    for (var b = 0; b < modeButtons.length; b++) {
        modeButtons[b].addEventListener("click", function() {
            // Highlight clicked button
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
    
            // figure out how many squares using ternary operator
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
        })
    };
}

function setupSquares() {
    // Set up square listeners
    for (var s = 0; s < squares.length; s++) {
        // add click listeners
        squares[s].addEventListener("click", function() {
        // grab color of clicked square
        var clickedColor = this.style.backgroundColor
            // compare clicked color to picked color
            if (clickedColor === pickedColor) {
                // Display success message
                msg_display.textContent = "Correct!";
                // Change all squares to correct color
                changeColors(clickedColor);
                // Change h1 color
                h1_display.style.backgroundColor = clickedColor;
                // Change reset button content
                resetButton.textContent = "Play Again?";
            } else {
                // fade by setting square color to background
                this.style.backgroundColor = "#232323";
                // Display failure message
                msg_display.textContent = "Try Again!";
            }
        })
    };
}

function setupResetButton() {
    // Set reset button listener
    resetButton.addEventListener("click", function() {
        reset();
    })
}

function reset() {
    // generate all new colors
    colors = generateRandomColors(numSquares);

    // generate a new picked color
    pickedColor = pickColor();

    // change title text to match picked color
    rgb_display.textContent = pickedColor;

    // reset title background color
    h1_display.style.backgroundColor = "steelblue";

    // reset title text
    msg_display.textContent = "";

    // Reset button text back to say "reset"
    resetButton.textContent = "New Colors";

    // change colors of squares
    for (var s = 0; s < squares.length; s++) {
        if (colors[s]) {
            squares[s].style.display = "block";
            squares[s].style.backgroundColor = colors[s];
        } else {
            squares[s].style.display = "none";
        }
    }
}


function changeColors(color) {
    for (var s = 0; s < squares.length; s++) {
        squares[s].style.backgroundColor = color;
    }
}

function pickColor() {
    var randColor = Math.floor(Math.random() * colors.length);
    return colors[randColor];
}

function generateRandomColors(num) {
    // Make an array
    var arr = [];
    // Add n random colors to arr
    for (var n = 0; n < num; n++) {
        // push random color into array
        arr.push(randomColor());
    }
    // Return that array
    return arr;
}

function randomColor() {
    // Create an empty array to store colors
    var rgb_arr = [];
    // Generate random values for R, G, B
    for (var c = 0; c < 3; c++) {
        rgb_arr.push(Math.floor(Math.random() * 256));
    }
    // Compose RGB values into string template
    rgb_string = `rgb(${rgb_arr[0]}, ${rgb_arr[1]}, ${rgb_arr[2]})`;

    return rgb_string;
}


// Loop through each square and...
// for (var s = 0; s < squares.length; s++) {
//     // assign a color to each square
//     squares[s].style.backgroundColor = colors[s];
//     // add click listeners
//     squares[s].addEventListener("click", function() {
//       // grab color of clicked square
//       var clickedColor = this.style.backgroundColor

//         // compare clicked color to picked color
//         if (clickedColor === pickedColor) {
//             // Display success message
//             msg_display.textContent = "Correct!";
//             // Change all squares to correct color
//             changeColors(clickedColor);
//             // Change h1 color
//             h1_display.style.backgroundColor = clickedColor;
//             // Change reset button content
//             resetButton.textContent = "Play Again?";
//         } else {
//             // fade by setting square color to background
//             this.style.backgroundColor = "#232323";
//             // Display failure message
//             msg_display.textContent = "Try Again!";
//         }
//     })
// }


// // Change difficulty with buttons
// easyButton.addEventListener("click", function () {
//     easyButton.classList.add("selected");
//     hardButton.classList.remove("selected");
//     // Reset game board
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     rgb_display.textContent = pickedColor;
//     // Reset square colors
//     for (var s = 0; s < squares.length; s++) {
//         if(colors[s]) {
//             squares[s].style.backgroundColor = colors[s];
//         } else {
//             squares[s].style.display = "none";
//         }
//     }
// })

// hardButton.addEventListener("click", function () {
//     easyButton.classList.remove("selected");
//     hardButton.classList.add("selected");
//     // Reset game board
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     rgb_display.textContent = pickedColor;
//     // Reset square colors
//     for (var s = 0; s < squares.length; s++) {
//             squares[s].style.backgroundColor = colors[s];
//             squares[s].style.display = "block";
//     }
// })