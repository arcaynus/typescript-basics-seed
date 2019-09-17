// console.log('Hey There TypeScript!');
const pizzas = [
    {name: 'Pepperoni', toppings: ['pepperoni']}
];

// const mappedPizzas = pizzas.map(pizza => {
//     return pizza.name.toUpperCase();
// });

console.log("///////////////");
console.log("Arrow Functions");
console.log("////////////////");
const mappedPizzas = pizzas.map(pizza => pizza.name.toUpperCase());
console.log(mappedPizzas);

const pizza = {
    name: 'Blazing Inferno',
    price: 15,
    getName: () => pizza.name,
    getNameNF(){
      console.log(this.name);
    },
    getNameFunction: function(){
      console.log(this.name);
    },
    getNameTimeOut: function () {
        setTimeout(()=>console.log(this.name), 100);
    }
};

console.log(pizza.getName());
console.log(pizza.getNameFunction());
console.log(pizza.getNameTimeOut());

console.log("////////////////////////////");
console.log("Default Functions Parameters");
console.log("////////////////////////////");
function multiply (a:number, b:number = 25){
    return a * b;
}
console.log(multiply(5));

console.log("///////////////////////////");
console.log("Object Literal Improvements");
console.log("///////////////////////////");
const toppings = ['pepperoni', 'chili'];
const order = { pizza,toppings};
console.log(order);
console.log(order.pizza.getNameNF());

console.log("///////////////");
console.log("Rest Parameters");
console.log("///////////////");
function sumAll(arr:[number]){
 return arr.reduce((prev, next) => prev + next);
}
const sum = sumAll([1,2,3,4,5,6,7,8,9,10]);
console.log(sum);

function sumAllRest(...arr:Array<number>){
    return arr.reduce((prev, next) => prev + next);
}
const sumRest = sumAllRest(1,2,3,4,5,6,7,8,9,10);
console.log(sumRest);

console.log("//////////////////////");
console.log("Array Spread Operator");
console.log("//////////////////////");
const newToppings = ['bacon'];
const allToppings = [...toppings, ...newToppings];
console.log(allToppings);

console.log("//////////////////////");
console.log("Object Spread Operator");
console.log("//////////////////////");
const order2 = {
    ...pizza,
    toppings
};
console.log(order2);

console.log("////////////////////////////////");
console.log("Destructuring Arrays and Objects");
console.log("////////////////////////////////");
const pizza3 = {
    name: 'Pepperoni',
    toppings: ['pepperoni'],
};

function order3({ name: pizzaName, toppings: pizzaToppings}: {name:string, toppings:string[]}) {
     // console.log(pizzaName, pizzaToppings)
    return {pizzaName, pizzaToppings};
}

const myOrder = order3(pizza3);
console.log(myOrder);
const [first, second, third] = allToppings;
console.log(first, second, third);
function logToppings([first, second, third]: string[]){
    console.log(first, second, third);
}
logToppings(allToppings);

console.log("/***********************************/");
console.log("Number Types, Arguments and Functions");
console.log("/***********************************/");
console.log("/////////////////////////////////////");
console.log("Number Types, Arguments and Functions");
console.log("/////////////////////////////////////");
const pizzaCost: number = 10;
const pizzaToppings: number = 2;

function calculatePrice(cost:number, toppings:number): number{
    return cost + 1.5 * toppings;
}

const cost:number = calculatePrice(pizzaCost, pizzaToppings);
console.log(`Pizza costs: $${cost}`);

console.log("////////////////////////////");
console.log("String Type, String Literals");
console.log("////////////////////////////");
const coupon: string = 'pizza25';
function normalizeCoupon(code: string): string {
    return code.toUpperCase();
}
const couponMessage: string = `Final coupon is ${normalizeCoupon(coupon)}`;
console.log(couponMessage);

console.log("//////////////////////////////");
console.log("Boolean Type, Boolean Literals");
console.log("//////////////////////////////");
const pizzasNum: number = 5;
function offerDiscount(orders:number): boolean {
    return orders >= 3;
}
if (offerDiscount(pizzasNum)){
    console.log("You're entitled to a discount!")
}else{
    console.log("Order more than 3 pizzas for a discount!")
}

console.log("/**************/");
console.log("Typescript Types");
console.log("/**************/");
console.log("//////////////");
console.log("The 'Any' Type");
console.log("//////////////");
let coupon2:any;
coupon2 = 25;
coupon2 = '25';
coupon2 = true;

console.log("////////////////////");
console.log("Implicit vs Explicit");
console.log("////////////////////");
let implicitCoupon = 'pizza25';
let explicitCoupon: string = 'pizza25';

console.log("/////////");
console.log("Void Type");
console.log("/////////");
let selectedTopping: string = 'pepperoni';
function selectTopping(topping:string): void{
    selectedTopping = topping;
}
selectTopping('bacon');
console.log(selectedTopping);

console.log("//////////");
console.log("Never Type");
console.log("//////////");
function orderError(error: string): never{
    throw new Error(error);
}

try {
    orderError("Something went wrong");
}catch(error){
    console.log(error.message);
}

console.log("///////////////////////////////////");
console.log("Null, Undefined, Strict Null checks");
console.log("///////////////////////////////////");
let coupon3:string | null = 'pizza25';
function removeCoupon(): void{
    coupon3 = null;
}
console.log(coupon3);
removeCoupon();
console.log(coupon3);

console.log("///////////////////////");
console.log("Union and Literal Types");
console.log("///////////////////////");
let pizzaSize: string = 'small';
function selectSize(size: 'small' | 'medium' | 'large'):void {
    pizzaSize = size;
}
selectSize('large');
console.log(`Pizza size: ${pizzaSize}`);

console.log("//////////////");
console.log("Function Types");
console.log("//////////////");
let sumOrder: (price:number, quantity: number) => number = (x,y) => x * y;
const sum3 = sumOrder(25, 2);
console.log(`total sum: ${sum3}`);

console.log("////////////////////////////////");
console.log("Functions and Optional Arguments");
console.log("////////////////////////////////");
let sumOrder2: (price: number, quantity?: number) => number;

sumOrder2 = (x,y) => {
    if(y){
        return x * y;
    }else{
        return x;
    }
};
const sum4 = sumOrder2(25);
console.log(`total sum: ${sum4}`);

console.log("//////////////////////////////////");
console.log("Typed Functions and Default Params");
console.log("//////////////////////////////////");
let sumOrder3: (price: number, quantity?: number) => number;

sumOrder3 = (x,y = 1) => {
    return x * y;
};
const sum5 = sumOrder3(25);
console.log(`total sum: ${sum5}`);

console.log("////////////");
console.log("Object Types");
console.log("////////////");
let pizza4: {name: string, price: number, getName():string} = {
    name: 'Plain Old Pepperoni',
    price: 20,
    getName(){
        return this.name;
    }
};
console.log(pizza4.getName());

console.log("////////////////////////");
console.log("Array Types and Generics");
console.log("////////////////////////");
const sizes1:string[] = ['small', 'medium', 'large'];
let toppings1: Array<string>;
toppings1 = ['pepperoni', 'tomato', 'bacon'];
console.log(...sizes1);
console.log(...toppings1);

console.log("//////////////////////");
console.log("Tuple Types for Arrays");
console.log("//////////////////////");
let pizza5: [string, number, boolean];
pizza5 = ['Pepperoni', 20, true];
console.log(...pizza5);

console.log("/*************************/");
console.log("Type Aliases and Assertions");
console.log("/*************************/");
console.log("////////////");
console.log("Type Aliases");
console.log("////////////");
type Size = 'small' | 'medium' | 'large';
type Callback = (size: Size) => void;

let pizzaSize2: Size = 'small';
const selectSize2: Callback = (x) => {
    pizzaSize2 = x;
};
selectSize2('medium');
console.log(`Pizza Size: ${pizzaSize2}`);

console.log("///////////////");
console.log("Type Assertions");
console.log("///////////////");
type Pizza = {name:string, toppings: number};
const pizza2:Pizza = {name: 'Blazing Inferno', toppings: 5};
const serialized = JSON.stringify(pizza2);
function getNameFromJSON(obj: string){
    return (JSON.parse(obj) as Pizza).name;
}
console.log(`Pizza name: ${getNameFromJSON(serialized)}`);

console.log("/*****************/");
console.log("Creating Interfaces");
console.log("/*****************/");
console.log("///////////////////");
console.log("Creating Interfaces");
console.log("///////////////////");
type PizzaType = {
    name: string;
    sizes: string[]
}
interface ISizes {
    sizes: string[]
}
interface IPizza extends ISizes {
    name: string,
    toppings?: number,
    getAvailableSizes(): string[],
    [key: number]: string;
}

let pizza6: PizzaType;
let pizza7: IPizza;
function createPizza(name: string, sizes: string[]) : PizzaType{
    return {name, sizes};
}
function createPizzaInterface(name: string, sizes: string[]) : IPizza{
    return {
        name,
        sizes,
        getAvailableSizes(): string[] {
            return this.sizes;
        }
    };
}
pizza6 = createPizza('Tuna', ['small', 'medium']);
pizza7 = createPizzaInterface('Egg', ['small', 'medium']);
console.log(`Pizza from type: ${pizza6.name}`);
console.log(`Pizza from interface: ${pizza7.name}`);
console.log("//////////////////////////////");
console.log("Interfaces with Function Types");
console.log("//////////////////////////////");
console.log(`Pizza name from interface: ${pizza7.name}`);
console.log(`Pizza sizes from interface: ${pizza7.getAvailableSizes().toString()}`);

console.log("////////////////////");
console.log("Extending Interfaces");
console.log("////////////////////");
// Just modified the sizes to an interface and extended IPizza to use it

console.log("//////////////////////////////////");
console.log("Interfaces and Optional Properties");
console.log("//////////////////////////////////");
pizza7.toppings = 7;
console.log(`Number of Pizza Toppings: ${pizza7.toppings}`);

console.log("////////////////////////////////");
console.log("Interfaces with Index Signatures");
console.log("////////////////////////////////");
pizza7[1] = 'xyz';
console.log(`ID of Pizza: ${pizza7[1]}`);

console.log("/*********************************/");
console.log("Classes, Properties and Inheritance");
console.log("/*********************************/");
console.log("//////////////////////////////////////");
console.log("Understanding Classes and Constructors");
console.log("//////////////////////////////////////");
/*function PizzaF(name: string){
    this.name = name;
    this.toppings = [];
}
PizzaF.prototype.addTopping = function addTopping(topping: string){
    this.toppings.push(topping);
};
const pizza8:PizzaF = new PizzaF('Pepperoini');*/
class SizesClass {

    constructor(public sizes: string[]){
    }
    set availableSizes(sizes: string[]){
        this.sizes = sizes;
    }
    get availableSizes(){
        return this.sizes;
    }
}
class PizzaClass extends SizesClass{
    public toppings: string[] = [];
    constructor(readonly name: string, public sizes: string[]){
        super(sizes);
        this.name = name;
    }
    public addTopping(topping:string): void{
        this.toppings.push(topping);
    }
}

const pizzaClass: PizzaClass = new PizzaClass("Salmon", ['small', 'medium', 'large']);
pizzaClass.addTopping("Onions");
console.log(pizzaClass);

console.log("//////////////////////////");
console.log("Public and Private Members");
console.log("//////////////////////////");

console.log("////////////////");
console.log("Readonly Members");
console.log("////////////////");
console.log(pizzaClass.name);

console.log("///////////////////");
console.log("Setters and Getters");
console.log("///////////////////");

const sizesClass = new SizesClass(['small', 'medium', 'large']);
sizesClass.availableSizes = ['small', 'medium', 'large', 'x-large'];
console.log(sizesClass.availableSizes);

console.log("///////////////////////");
console.log("Classes and Inheritance");
console.log("///////////////////////");
//modified pizza class to extend sizes
console.log(pizzaClass);
console.log("////////////////");
console.log("Abstract Classes");
console.log("////////////////");
abstract class AbstractSizesClass {

    constructor(public sizes: string[]){
    }
    set availableSizes(sizes: string[]){
        this.sizes = sizes;
    }
    get availableSizes(){
        return this.sizes;
    }
}
// cannot do new AbstractSizesClass(['small']);
console.log("/////////////////////////////////");
console.log("Protected Members and Inheritance");
console.log("/////////////////////////////////");
// Nothing here, more of a FYI video
console.log("/////////////////////////////");
console.log("Static Properties and Methods");
console.log("/////////////////////////////");
class Coupon {
    static allowed = ['Pepperoni', 'Blazing Inferno'];
    static create(percentage: number){
        return `PIZZA_RESTAURANT_${percentage}`;
    }
}
console.log(Coupon.allowed);
console.log(Coupon.create(25));