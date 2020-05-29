
function max(array) {
    let m = array[0];

    array.forEach(function(r) {
        if (r > m) {
            m = r;
        }
    })
    return m;
}