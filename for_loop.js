let length = 5;

for (let i = 0; i < length; i++) {
    console.log("i is =>", i);
}

let myIntArray = [1, 2, 3, 4, 5];
for (let i = 0; i < myIntArray.length; i++) {
    console.log("i is =>", i);
}

let myStringArray = ["Malik", "Umar", "Rana", "Usman", "Faizan"];
for (let name of myStringArray) {
    console.log("name is =>", name);
}

// object in javascript (similar to Dictionary in Python and HashMap in C++, Java)
const myDictObject = { name: "Malik", age: "24", hair_colot: "Black" };
for (let property in myDictObject) {
    // console.log("property is =>", property);
    console.log(property + " and value is =>", myDictObject[property]);

}

// forEach loop does not work woth object type data in javascript
// myDictObject.forEach(property => console.log("property is =>", property));

let newArray = [1, 2, 3, 4, 5];
newArray.forEach(element => {
    console.log(element * 2);
});