

function average(scores) {
    let sum = 0;
    
    for (var s = 0; s < scores.length; s++) {
        sum += scores[s] 
    }
    return Math.round(sum/scores.length);
}

var scores1 = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores1));

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2));
