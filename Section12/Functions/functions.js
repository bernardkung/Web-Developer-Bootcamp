
function isEven(n) {
    // if (n % 2 === 0) {
    //     return true;
    // }
    // else {
    //     return false;
    // }
    
    return n % 2 === 0;
}


function factorial(n) {
    
    if (f < 0) {
        return -1;
    }
    
    let f = 1;
    
    while (n >= 1) {
        f *= n;
        n--;
    }
    return f;
}

function kebabToSnake(str) {
    let new_str = str.replace(/-/g, "_")
    
    return new_str
}

