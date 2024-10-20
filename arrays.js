const cars = [];
cars[0] = "Saab";
cars[1] = "Volvo";
cars[2] = "BMW";

// changing the value of the array index value
cars[0] = "Opel";


const dynamicTypeArray = [1, 5.6, "Numbers", false, { obj: 'hello', obj2: 'world' }];


// let numbers = new Array(10, 5, 4);
let numbers = [10, 50, 40];

// console.log(numbers[2]);
// console.log(numbers[4]);

// iterating over array of numbers using foreach loop
// console.log("Array values are: ");
// numbers.forEach(value => console.log(value));

// numbers.push(99);  // method to add the value to the end of the array

// console.log(numbers);

// numbers.pop();

// console.log(numbers);  // method to remove the value from the end of the array

// console.log("The length of the array:", numbers.length);

let myArray = [1, "hello", { 1: "one" }, true];

// console.log(myArray);
// console.log(myArray[1]); // using indexs to print the array elements

// myArray.push(100);
// console.log(myArray);

// myArray.push(false);
// console.log(myArray);

// myArray.pop();
// console.log(myArray);

// console.log(myArray.length);


let arr1 = [1, 2, 3];
let arr2 = [10, 20, 30];

// console.log(arr1.concat(arr2));
// console.log(arr1.concat(100).concat(200).concat(arr2));

// spread operator
// console.log(...arr1, ...arr2);
// console.log([arr1, arr2]);
// console.log([...arr1,100,200,300,...arr2])

let arr1Copy = [...arr1];  // this is the copy array
let arr1Referenced = arr1;  // this is the reference array


function add(x, y) {
    return x + y;
}

// console.log(add(1, 2));

function addAll(...numbers) {
    let sum = 0;
    for (let n of numbers) {
        sum += n;
    }
    return sum;
}

// console.log(addAll(1, 3, 4, 5, 6));
// console.log(addAll(1, 2, 3, 3, 4, 5, 6, 7, 8, 8, 9, 10));

let newArray = [1, 2, 3];
function add3ValArr(x, y, z) {
    return x + y + z;
}
// console.log(add3ValArr(newArray));  // wrong way
// console.log(add3ValArr(...newArray));  // right way


let arrOne = [1, 2, 3];
let arrTwo = [4, 5, 6];
let strArrOne = ['1', '2', '3'];

// console.log(arrOne == arrTwo);  // compare by value
// console.log(arrOne === arrTwo);  // compare by value and type

// console.log(arrOne == strArrOne);

arrOne[1] = [100];
let arrThree = arrOne;

// console.log(arrOne);
// console.log(arrThree);

const constArr = [1, 2];
constArr.push("Value");

// console.log(constArr);


// function printArray(arr) {
//     for (let x of arr) {
//         console.log(x);
//     }
// }

// printArray([3,4,5,6]);

function double(number) {
    return x * 2;
}

let x = 5;
// double(x);  // numbers, floats and boolean are passed by value in javascript.
// console.log(x);


// let arrN1 = [1, 2, 3];
// let arrN2 = [1, 2, 3];
// let arrN11 = [1, 2, [3, 4]];
// let arrN22 = [1, 2, [3, 4]];
// let arrN2 = [1, 2, 3, 4, 5, 6];

function checkEqualArray(arr1, arr2) {
    let isEqual = true;

    if (arrN1.length != arrN2.length) {
        return false;
    }

    for (let [index, x] of arrN1.entries()) {
        isEqual = x === arrN2[index];
        if (!isEqual) {
            break;
        }
    }
    return isEqual;
}

// console.log(checkEqualArray(arrN1, arrN2));
// console.log(checkEqualArray(arrN11, arrN22));
