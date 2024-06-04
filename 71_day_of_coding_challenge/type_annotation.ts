class Product {
    // property type annotations:
    id: number;
    name: string;
    price: number;
  
    constructor(id: number, name: string, price: number) {
        // Contructor parameter type annotation
      this.id = id;
      this.name = name;
      this.price = price;
    }
  
    getProductInfo(): string {
      return `ID: ${this.id}, Name: ${this.name}, Price: $${this.price}`;
    }
  }
  //Create a instance of a product class:
  const product1 = new Product(1, "Widget", 20.0);
//   access class properties and call a method:
  console.log(product1.getProductInfo()); // output: ID:1,Name:Widget, Price:$20