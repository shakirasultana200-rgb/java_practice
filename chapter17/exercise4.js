function totalStock(products) {

    return products.reduce((total, product) => total + product.stock, 0);

}

const products = [
    { name: "Pen", stock: 40 },
    { name: "Book", stock: 20 },
    { name: "Bag", stock: 10 }
];

console.log(totalStock(products));