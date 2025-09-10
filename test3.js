// 1. Create three product objects
let product1 = {
    name: "Laptop",
    price: 80,
    inStock: true,
    category: "electronics"
};

let product2 = {
    name: "T-Shirt",
    price: 25,
    inStock: false,
    category: "clothes"
};

let product3 = {
    name: "Apple",
    price: 10,
    inStock: true,
    category: "food"
};

// 2. Create an array cart
let cart = [product1, product2, product3];

// 3. Arithmetic operators
let total = product1.price + product2.price + product3.price;

if (total > 100) {
    total = total - (total * 0.1); // apply 10% discount
}

console.log("Final price after discount (if any):", total);

// 4. Comparison operators
if (product1.inStock) {
    console.log(product1.name + " is in stock.");
} else {
    console.log(product1.name + " is out of stock.");
}

if (product2.inStock) {
    console.log(product2.name + " is in stock.");
} else {
    console.log(product2.name + " is out of stock.");
}

if (product3.inStock) {
    console.log(product3.name + " is in stock.");
} else {
    console.log(product3.name + " is out of stock.");
}

// 5. Logical operators
// Product 1
if (product1.inStock && product1.price < 50) {
    console.log(product1.name + " is affordable and available.");
}
if (product1.inStock || product1.price < 25) {
    console.log(product1.name + " can be considered for purchase.");
}

// Product 2
if (product2.inStock && product2.price < 50) {
    console.log(product2.name + " is affordable and available.");
}
if (product2.inStock || product2.price < 25) {
    console.log(product2.name + " can be considered for purchase.");
}

// Product 3
if (product3.inStock && product3.price < 50) {
    console.log(product3.name + " is affordable and available.");
}
if (product3.inStock || product3.price < 25) {
    console.log(product3.name + " can be considered for purchase.");
}

// 6. Conditional statements
if (total < 50) {
    console.log("Budget category: Low budget");
} else if (total >= 50 && total <= 100) {
    console.log("Budget category: Medium budget");
} else {
    console.log("Budget category: High budget");
}

// 7. Switch statement
switch (product1.category) {
    case "electronics":
        console.log(product1.name + ": Take care of warranty!");
        break;
    case "clothes":
        console.log(product1.name + ": Check size before buying!");
        break;
    case "food":
        console.log(product1.name + ": Consume before expiry!");
        break;
    default:
        console.log(product1.name + ": Unknown category");
}

switch (product2.category) {
    case "electronics":
        console.log(product2.name + ": Take care of warranty!");
        break;
    case "clothes":
        console.log(product2.name + ": Check size before buying!");
        break;
    case "food":
        console.log(product2.name + ": Consume before expiry!");
        break;
    default:
        console.log(product2.name + ": Unknown category");
}

switch (product3.category) {
    case "electronics":
        console.log(product3.name + ": Take care of warranty!");
        break;
    case "clothes":
        console.log(product3.name + ": Check size before buying!");
        break;
    case "food":
        console.log(product3.name + ": Consume before expiry!");
        break;
    default:
        console.log(product3.name + ": Unknown category");
}
