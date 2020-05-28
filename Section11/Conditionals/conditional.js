let age = Number(prompt("Age: "));

// Check if age is negative
if (age < 0) {
    alert("Invalid age entered!");
} else  {
    // Check if age is 21
    if (age === 21) {
        console.log("Happy 21st Birthday!!");
    }
    // Check if age is odd
    if (age % 2 === 1) {
        console.log("Your age is odd!");
    }
    
    // Check if age is a perfect square
    if ((Math.sqrt(age) % age) === 0) {
        console.log("P-P-PERFECT SQUARE!");
    }
}