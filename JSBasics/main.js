var string = "hello";
var number = 5;
var float = 4.55;

let str = "world";
let isTrue = true;
let notDefined;
let isNUll = null;
let obj = {FirstName: "John", lastName: "Smith"};

let condition = true;
if(condition){
    console.log("Condition is true");
} else {
    console.log("Condition is false");
}

for(let i = 0; i < 5; i++){
    console.log(i);
}

let j = 0;
while(j<5){
    console.log(j);
    j++;
}

function greet(name){
    console.log("Hello " + name);
}

greet("Alice");

let fruits = ["Apple", "Pear", "Mango"];
console.log(fruits[1]);

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
};

console.log(person.firstName);

class Car {
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }
    displayCar(){
        return this.brand + " " + this.model;
    }
}

let myCar = new Car("Toyota", "Corolla");
console.log(myCar.displayCar());

class Model extends Car {
    constructor(brand, model, year){
        super(brand, model);
        this.year = year;
    }
    displayModel(){
        return this.displayCar() + " " + this.year;
    }
}

let myModel = new Model("Toyota", "Corolla", "2023");
console.log(myModel.displayModel());

const arr = [1,2,3,4,5];
const squares = arr.map((x) => x*x);
console.log(squares);

//template literals
let nameGirl = "Alice";
console.log(`Hello ${nameGirl}`);

//import{hello} from 

//export default main;