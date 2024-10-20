function myFunction(p1, p2) {
    return p1 * p2;
}

let result = myFunction(4, 3);



function toCelsius(f) {
    return (5 / 9) * (f - 32);
}

let tempValue = toCelsius(77);


// the value returns accoording to call
console.log(tempValue);

console.log(result);


// Arrow functions
hello = () => {
    return "Hello World!";
}

hello = () => "Hello World!";

//   If you have parameters, you pass them inside the parentheses:
hello = (val) => "Hello " + val;

//   In fact, if you have only one parameter, you can skip the parentheses as well:
hello = val => "Hello " + val;


// the this keyword refers to an object.
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}



function myFunction(a, b) {
    // Function returns the product of a and b
    return a * b;
}

// Function is called, the return value will end up in x
let x = myFunction(4, 3);

console.log(x);



function myFunc(theObject) {
    theObject.make = "Toyota";
}

const mycar = {
    make: "Honda",
    model: "Accord",
    year: 1998,
};

console.log(mycar.make); // "Honda"
myFunc(mycar);
console.log(mycar.make); // "Toyota"




function myFunc(theArr) {
    theArr[0] = 30;
}

const arr = [45];

console.log(arr[0]); // 45
myFunc(arr);
console.log(arr[0]); // 30



const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(3)); // 6



function map(f, a) {
    const result = new Array(a.length);
    for (let i = 0; i < a.length; i++) {
        result[i] = f(a[i]);
    }
    return result;
}

const cube = function (x) {
    return x * x * x;
};

const numbers = [0, 1, 2, 5, 10];
console.log(map(cube, numbers)); // [0, 1, 8, 125, 1000]


function Person() {
    // Some choose `that` instead of `self`.
    // Choose one and be consistent.
    const self = this;
    self.age = 0;

    setInterval(function growUp() {
        // The callback refers to the `self` variable of which
        // the value is the expected object.
        self.age++;
    }, 1000);
}



function myConcat(separator) {
    let result = ""; // initialize list
    // iterate through arguments
    for (let i = 1; i < arguments.length; i++) {
        result += arguments[i] + separator;
    }
    return result;
}

console.log(myConcat(", ", "red", "orange", "blue"));
// "red, orange, blue, "

console.log(myConcat("; ", "elephant", "giraffe", "lion", "cheetah"));
// "elephant; giraffe; lion; cheetah; "

console.log(myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley"));
// "sage. basil. oregano. pepper. parsley. "


const createPet = function (name) {
    let sex;

    const pet = {
        // setName(newName) is equivalent to setName: function (newName)
        // in this context
        setName(newName) {
            name = newName;
        },

        getName() {
            return name;
        },

        getSex() {
            return sex;
        },

        setSex(newSex) {
            if (
                typeof newSex === "string" &&
                (newSex.toLowerCase() === "male" || newSex.toLowerCase() === "female")
            ) {
                sex = newSex;
            }
        },
    };

    return pet;
};

const pet = createPet("Vivie");
console.log(pet.getName()); // Vivie

pet.setName("Oliver");
pet.setSex("male");
console.log(pet.getSex()); // male
console.log(pet.getName()); // Oliver




function outside(x) {
    function inside(y) {
        return x + y;
    }
    return inside;
}

const fnInside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give it
console.log(fnInside(5)); // 8
console.log(outside(3)(5)); // 8


// functions inside an object type  ( with this keyword)
let human = {
    name: "John",
    age: 20,
    hairColor: "Black",
    Details: () => {
        console.log(`${this.name} + " " + ${this.age}`);
    },
}

human.Details();


const object = {
    property: "I'm a property",
    method: function () {
        console.log(this.property);
    }
};

object.method(); // prints "I'm a property"



function checkEligiblity() {
    if (this.age >= 18) {
        console.log(`${this.firstname} age is ${this.age} eligible for vote`);
    } else {
        console.log(`${this.firstname} age is ${this.age} not eligible for vote`);
    }
}

const user1 = {
    firstname: "Joes",
    age: 35,
    eligiblity: checkEligiblity
}
user1.eligiblity();
const user2 = {
    firstname: "Sara",
    age: 12,
    eligiblity: checkEligiblity
}
user2.eligiblity();