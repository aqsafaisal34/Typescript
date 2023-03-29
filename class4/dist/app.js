"use strict";
// getter and setters
// we use getter and setter to get and set private values
class Product {
    constructor(_id, _name, _price) {
        this._id = _id;
        this._name = _name;
        this._price = _price;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    // setter
    set name(newName) {
        if (!newName) {
            throw new Error("Name cannot be empty");
        }
        this._name = newName;
    }
    get price() {
        return this._price;
    }
}
const product1 = new Product(123, "cup", 300);
product1.name = "Apple";
console.log(product1.name);
console.log(product1);
// Inhertance
// child is clothing product and product is child has access of all parent property
class ClothingProduct extends Product {
    constructor(id, name, price, _color, _size) {
        super(id, name, price);
        this._color = _color;
        this._size = _size;
    }
}
const tShirt = new ClothingProduct(2, "tshirt", 1000, "Blue", "M");
console.log(tShirt);
//# sourceMappingURL=app.js.map