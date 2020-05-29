
function isUniform(array) {
    var j = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] !== j) {
            return false;
        }
    }
    return true;
}