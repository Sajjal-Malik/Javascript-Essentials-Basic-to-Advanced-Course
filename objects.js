let person = {
    name: 'John',
    age: 21,
    weight: 100
}

// person2 = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.weight);

// if a value does not exist it returns undefined
console.log(person.salary);

// don't forget to use quotes when using this way
console.log(person["name"]);
console.log(person["age"]);
console.log(person["weight"]);

console.log(person["salary"]);

person.propertName = person.name;
console.log(person.propertName);
console.log(person["propertName"]);

person["propertName"] = person['name'];
console.log(person.propertName);
console.log(person["propertName"]);



const numbers = [1, 2, 3, 4, 5, 6];

const [one, two, ...rest] = numbers;
console.log(one);
console.log(two);
console.log(rest);

const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
}

const updateMyVehicle = {
    type: 'car',
    year: 2021,
    color: 'yellow'
}

// speard opeartor
const myUpdatedVehicle1 = { myVehicle, updateMyVehicle };
console.log(myUpdatedVehicle1);

const myUpdatedVehicle2 = { ...myVehicle, ...updateMyVehicle };
console.log(myUpdatedVehicle2);


const vehicles = ['mustang', 'f-150', 'expedition'];

// destructuring
const [car, truck, suv] = vehicles;
console.log(car);
console.log(truck);
console.log(suv);

function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;

    return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(4, 7);

console.log(add);
console.log(divide);


const num = 0;
const obj = new String("0");
const str = "0";

console.log(num === num); // true
console.log(obj === obj); // true
console.log(str === str); // true

console.log(num === obj); // false
console.log(num === str); // false
console.log(obj === str); // false
console.log(null === undefined); // false
console.log(obj === null); // false
console.log(obj === undefined); // false

const num1 = 0;
const big = 0n;
const str1 = "0";
const obj1 = new String("0");

console.log(num1 == str1); // true
console.log(big == num); // true
console.log(str1 == big); // true

console.log(num1 == obj1); // true
console.log(big == obj1); // true
console.log(str1 == obj1); // true


console.log([NaN].indexOf(NaN)); // -1
switch (NaN) {
    case NaN:
        console.log("Surprise"); // Nothing is logged
}

let myObj1 = { a: 1, b: 2, c: 3 };
let myObj2 = myObj1;
let myObj3 = { ...myObj1 };

console.log(myObj1 === myObj2);
console.log(myObj1 === myObj3);
console.log(myObj2 === myObj3);

console.log(myObj1 == myObj2);
console.log(myObj1 == myObj3);
console.log(myObj2 == myObj3);

function myfunct(obj) {
    let sum = 0;

    myObj1.d = 4;

    for (let k in obj) {
        sum += obj[k];
    }
    return sum;
}

let total = myfunct(myObj1);  // passing by reference
// console.log(total);
// console.log(myObj1);

function areDeeplyEqual(obj1, obj2) {
    if (obj1 === obj2) return true;

    if (Array.isArray(obj1) && Array.isArray(obj2)) {

        if (obj1.length !== obj2.length) return false;

        return obj1.every((elem, index) => {
            return areDeeplyEqual(elem, obj2[index]);
        })

    }

    return false;
}

// Create an Object
const personp = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

// Get the Keys
const keys = Object.keys(personp);
// console.log(keys);
const values = Object.values(personp);
// console.log(values);
const entries = Object.entries(personp);
// console.log(entries);


const fruits = [
    ["apples", 300],
    ["pears", 900],
    ["bananas", 500]
];

const myObje = Object.entries(fruits);
// console.log(myObje);
// The fromEntries() method creates an object from a list of key/value pairs.
const myObjfe = Object.fromEntries(fruits);  // change array of arrays to object
// console.log(myObjfe);


const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

// Create Source Object
const person2 = { firstName: "Anne", lastName: "Smith" };

// Assign Source to Target
let objassign = Object.assign(person1, person2);

console.log(objassign)


"use strict"
// Create Object
const personp1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Freeze Object
Object.freeze(personp1)

// This will throw an error
personp1.age = 51;
console.log(personp1);

// This will return true
let text = Object.isFrozen(person);
let textp1 = Object.isFrozen(personp1);

console.log(text);
console.log(textp1);


const object1 = {};

Object.preventExtensions(object1);

try {
  Object.defineProperty(object1, 'property1', {
    value: 42,
    });
} catch (e) {
  console.log(e);
  // Expected output: TypeError: Cannot define property property1, object is not extensible
}

// Objects are extensible by default.
const empty = {};
Object.isExtensible(empty); // true


const object11 = {};

console.log(Object.isExtensible(object11));
// Expected output: true

Object.preventExtensions(object11);

console.log(Object.isExtensible(object11));
// Expected output: false
