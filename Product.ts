class Product
{
    protected name : String
    protected price : number

    constructor(name : string , price:number)
    {
        this.name = name
        this.price = price
    }
    print(): void
    {
        console.log(this.name)
        console.log(this.price)
    }
}

class DiscountProduct extends Product 
{ 
    protected discountRate : number; 
    
    constructor(name :string, price : number, discountRate :number) 
    { 
        super(name,price); 
        this.discountRate = discountRate; 
    } 
    print():void 
    { 
        super.print(); 
        console.log(this.discountRate); 
    } 
        
        getNetPrice(): number 
        { 
            return this.price - this.price * this.discountRate / 100; 
        } 
    
}

let p = new DiscountProduct("Phone 7",70000,15); 
p.print(); 
console.log("Net Price : " + p.getNetPrice());
