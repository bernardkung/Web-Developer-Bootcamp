
function myForEach(arr, func) {
    for (var i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}


// function myForEach(arr, func) {
//     let newArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         newArr.push(func(arr[i]));
//     }
//     return newArr;
// }