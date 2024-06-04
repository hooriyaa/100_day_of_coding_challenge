"use strict";
class Product {
    constructor(id, name, price) {
        // Contructor parameter type annotation
        this.id = id;
        this.name = name;
        this.price = price;
    }
    getProductInfo() {
        return `ID: ${this.id}, Name: ${this.name}, Price: $${this.price}`;
    }
}
//Create a instance of a product class:
const product1 = new Product(1, "Widget", 20.0);
//   access class properties and call a method:
console.log(product1.getProductInfo()); // output: ID:1,Name:Widget, Price:$20
