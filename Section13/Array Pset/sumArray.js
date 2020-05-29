
function sumArray(array) {
    let cumSum = 0;
    array.forEach(function(r) {
        cumSum += r;
    });
    return cumSum;
}