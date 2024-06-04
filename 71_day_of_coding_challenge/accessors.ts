class ProductExAccessors {
   // 'private' property
       private _price: number;
    constructor(private id: number, private name: string) {
      this._price = 0; // Default price
    }
    //public getter for price
    get price(): number {
      return this._price;
    }
    //public setter for price
    set price(newPrice: number) {
      if (newPrice >= 0) {
        this._price = newPrice;
      } else {
        console.log("Price cannot be negative.");
      }
    }
  
    getProductInfo(): string {
      return `ID: ${this.id}, Name: ${this.name}, Price: $${this._price}`;
    }
  }
    
 
  // create am instance of the ProductExAccessors class
  const productEx = new ProductExAccessors(1, "Widget");
  console.log(productEx.getProductInfo()); //Default price ID:1, Name:Widget, Price:$0
  
  productEx.price = 607
  console.log(productEx.getProductInfo()); //Default price ID:1, Name:Widget, Price:$607
