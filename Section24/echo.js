// NODE EXERCISE

// Using the command line, create a file "echo.js"
// Inside the file, write a function named echo that takes 2 arguments:
//  a string and a number
// The function should print the the string, number number of times.

function echo(str, num) {
    for (var n = 0; n < num; n++) {
        console.log(str);
    }
}

echo("Echo!!!", 10);
echo("Tater Tots", 3);