let Array1 = ['a', 'b', 'c'];
// let Array2 = new Array('a','b','c');
// let Array2 = new Array(10); // 10 empty items in array
// let Array2 = new Array(5).fill('a');
// let Array2 = new Array(2).fill(new Array(5).fill(0));  // 2D Array will be created

// Array reference is stored using this syntax
// arr1 = [];
// arr2 = arr1;

// let Array2 = new Array(4).fill({});  // 2D Array will be created
// Array2[0].a = 'Hi';
// Array2[0].push('Hi');

let Array2 = new Array(4).fill("").map(() => ({}));  // 2D Array will be created
Array2[0].a = 'Hi';

// console.log(Array1);
// console.log(Array2);


let myObj = { a: 12, b: 60 };
// console.log(myObj);
delete myObj.a;  // delete allows us to delete the properties of the objects
// console.log(myObj);


let myArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// console.log(myArray1);
// console.log(myArray1.length);
delete myArray1[0];  // for array it will make the make empty space on the entered index element's location
// console.log(myArray1);
// console.log(myArray1.length);


let myArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// console.log(myArray2);
myArray2.shift();  // shift() is like pop(), but it effects the beginning of the array
// console.log(myArray2.length);
myArray2.unshift(0);  // unshift() is like push(), but it effects the start of the array
// console.log(myArray2);
// console.log(myArray2.length);


let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr1);
// arr1.splice(5, 2, ); // first argument is index of the start element and second argument is how many elements to delete
// arr1.splice(5, 2, "six","seven");  // third argument is for replacing the deleted elements with specified elements
arr1.splice(5, 0, "six","seven");
// console.log(arr1);

let arr2 = [1,2,3,4,5,6,7,8];

let section = arr2.slice(2, 5);  // specified elements will be cut out except the last one
console.log(arr2);
console.log(section);


let arr3 = [1,2,3,4,7,5,6,7,8,9,10];
// console.log(arr3.toString());  // The toString() method does not change the original string.
// console.log(arr3.join(' + '));
console.log(arr3.join(','));
// console.log(arr3.includes(10,9));
// console.log(arr3.includes(11,6));

// if(arr3.includes(10)){
//     console.log("key is present")
// }
// else{
// console.log("key is not present");
// }

let res = arr3.indexOf(arr3.includes(10));

if(arr3.includes(4)){
    console.log(res);
}
else{
console.log("key is not present");
}

// console.log(arr3.indexOf(7));  // it gives first index
// console.log(arr3.lastIndexOf(7));  // it gives last index


const numbersConst = [45, 4, 9, 16, 25];

function myFunction(value) {
    console.log(value);
}
numbersConst.forEach(myFunction);
console.log();

let numbers = [1,2,3,4,5];
let sum = 0;
numbers.forEach(function(num){
    sum += num;
    // console.log(sum);
});

// Arrow function with one parameter
numbers.forEach(num  => {
    sum += num;
    // console.log(sum);
});

// numbers.forEach(num => console.log(sum));


const numbers1 = [45, 4, 9, 16, 25];

function myFunction(value) {
    return value * 2;
}
const numbers2 = numbers1.map(myFunction);

console.log(numbers2);

const numbersc1 = [4, 9, 16, 25, 29];

function myFunction(value) {
    return value > 18;
}

let firstc1 = numbers.find(myFunction);
console.log(firstc1);

const numbersc2 = [4, 9, 16, 25, 29];

function myFunction(value) {
    return value > 18;
}
let firstc2 = numbers.findIndex(myFunction);
console.log(firstc2);


const ages = [32, 33, 16, 40];

function checkAdult(age) {
    return age >= 18;
}
const result = ages.filter(checkAdult);  // returns the true values
console.log(result);



function checkAdult(age) {
    return age > 18;
}
let resulta = ages.some(checkAdult);
console.log(resulta); 


// Create an Array
const agesN = [32, 33, 16, 40];

// Create a Test Function
function checkAge(age) {
  return age > 18;
}

// Are all ages over 18?
let resultN = agesN.every(checkAge);
console.log(agesN);
