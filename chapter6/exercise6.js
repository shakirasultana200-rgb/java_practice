const products = [
    { name: "Laptop", price: 55000 },
    { name: "Mouse", price: 800 },
    { name: "Keyboard", price: 1500 },
    { name: "Monitor", price: 18000 }
];

products.sort((a, b) => b.price - a.price);

console.log(products);