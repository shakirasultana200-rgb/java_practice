function totalStock(products) {
    return products.reduce((total, item) => {
        return total + item.stock;
    }, 0);
}

const products = [
    { name: "Pen", stock: 15 },
    { name: "Book", stock: 8 },
    { name: "Bag", stock: 6 }
];

console.log(totalStock(products));