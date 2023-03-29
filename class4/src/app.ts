// getter and setters
// we use getter and setter to get and set private values
class Product {
    constructor(
        private _id: number,
        private _name: string,
        private _price: number,
        
    ){}
get id () {
    return this._id
}
get name () {
    return this._name
}
// setter
set name (newName: string){
    if(!newName){
        throw new Error("Name cannot be empty")
    }
    this._name= newName;
}
get price () {
    return this._price
}
}

const product1 = new Product(123, "cup", 300);
product1.name = "Apple"
console.log(product1.name);
console.log(product1);

// Inhertance
// child is clothing product and product is child has access of all parent property
class ClothingProduct extends Product{
    constructor(
        id: number,
        name: string,
        price: number,
        private _color: string,
        private _size: "S" | "M" | "L" | "XL",
    ){
        super(id, name, price);
    }
}

const tShirt = new ClothingProduct(2, "tshirt", 1000, "Blue", "M");
console.log(tShirt);