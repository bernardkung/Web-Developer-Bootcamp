var faker = require('faker');

function generateProduct(num) {
    let productArray = [];
    
    for (var n = 0; n < num; n++) {
        let item = faker.commerce.productName();
        let price = faker.commerce.price();
        
        productArray.push(`${item} - \$${price}`);
    }
    
    return productArray;
}

console.log(generateProduct(10));