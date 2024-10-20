// class declaration
class Human {
    name
    age
    weight
    height
    color
}

class Person {

    static numberOfPeople = 0;

    // private member
    #age = 24;

    constructor(fname = null, lname = null, color = null) {
        Person.numberOfPeople += 1;
        this.fname = fname;
        this.lname = lname;
        // console.log("I am a constructor");
    }

    // Getter Method
    get Age() {
        console.log("Getting age...");
        return this.#age;
    }
    // Setter Method
    set Age(val) {
        this.#age = val;
    }

    // haveBirthday(){
    //     return this.#age++;
    // }

}
// object initialization
let person1 = new Person("John", "Wick", 'White');
let person2 = new Person("Chris", "Evan", 'White');
console.log(person1 instanceof Person);
// Expected output: true
console.log(person2 instanceof Person);
// Expected output: true
// console.log(person3 instanceof Person);
// // Expected output: ReferenceError

console.log("Number of profiles have created are: " + Person.numberOfPeople);
// person1.lname = 'Doe';  // bad approach

console.log(person1.fname);
console.log(person1.lname);
// console.log(person1.#greet);  // trying to access the private property of the person class
// console.log(person1.haveBirthday());
// console.log(person1.haveBirthday());
// console.log(person1.haveBirthday());

console.log(person1.Age);
person1.Age = 30; // setter will allow us to change the value locally
console.log(person1.Age);



class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name); // call the super class constructor and pass in the name parameter
    }

    speak() {
        console.log(`${this.name} barks.`);
    }
}

const d = new Dog("Mitzie");
d.speak(); // Mitzie barks.

// ----------------------------------------------------------------


class Cat {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Lion extends Cat {
    speak() {
        super.speak();  // super keyword is used to call the parent class constructor
        console.log(`${this.name} roars.`);
    }
}

const l = new Lion("Fuzzy");
l.speak();
// Fuzzy makes a noise.
// Fuzzy roars.



function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
const auto = new Car('Honda', 'Accord', 1998);

console.log(auto instanceof Car);
// Expected output: true

console.log(auto instanceof Object);
// Expected output: true


// ----------------------------------------------------------------

const MyInterface = {
	method1: function () { },
	method2: function (param1, param2) { },
};
class MyClass {
	method1() {
		console.log("Method 1 called");
	}

	method2(param1, param2) {
		console.log(
			`Method 2 called with ${param1} and ${param2}`);
	}
}

function implementsInterface(obj, interfaceObj) {
	for (const method in interfaceObj) {
		if (!(method in obj) || 
			typeof obj[method] !== "function") {
			return false;
		}
	}
	return true;
}

const myObject = new MyClass();

if (implementsInterface(myObject, MyInterface)) {
	console.log(
		"myObject implements MyInterface");
} else {
	console.log(
		"myObject does not implement MyInterface");
}
