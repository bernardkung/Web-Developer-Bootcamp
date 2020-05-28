// Print all numbers between -10 and 19
console.log("\n")
for (var i = -10; i <= 19; i++) {
    console.log(i);
}

// Print all even numbers between 10 and 40
console.log("\n")
for (var i = 10; i <= 40; i+=2) {
    console.log(i)
}

// for (var i = 10; i <= 40; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// Print all odd numbers between 300 and 333
console.log("\n")
for (let i = 300; i <= 333; i++) {
    if (i % 2 === 1) {
        console.log(i);
    }
}

// Print all numbers divisible by 5 AND 3 between 5 and 50
console.log("\n")
for (let i = 5; i < 51; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log(i);
    }
}