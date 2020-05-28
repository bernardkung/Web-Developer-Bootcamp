// Print all numbers between -10 and 19
console.log("\n")
let i = -10;
while (i <= 19) {
    console.log(i);
    i++
};

// Print all even numbers between 10 and 40
console.log("\n")
i = 10;
while (i <= 40) {
    // Using if condition
    // if (i % 2 === 0) {
    //     console.log(i)
    // }
    // i++;
    
    // Using the fact we're starting even and can iterate by 2
    console.log(i);
    i += 2;
}

// Print all odd numbers between 300 and 333
console.log("\n")
i = 300;
while (i <= 333) {
    if (i % 2 === 1) {
        console.log(i)
    }
    i++;
}


// Print all numbers divisible by 5 AND 3 between 5 and 50
console.log("\n")
i = 5;
while (i <= 50) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log(i)
    }
    i++;
}
