// finding min and max values in the array
let Arr1 = [50, 60, 20, 10, 40];
let minValue1 = Math.min(...Arr1);
let maxValue1 = Math.max(...Arr1);
console.log("Minimum element is:" + minValue1);
console.log("Maximum Element is:" + maxValue1);


let Arr = [50, 60, 20, 10, 40];
let minValue = Infinity;
let maxValue = -Infinity;

for (let item of Arr) {

    // Find minimum value
    if (item < minValue)
        minValue = item;

    // Find maximum value
    if (item > maxValue)
        maxValue = item;
    console.log("Minimum element is:" + minValue);
    console.log("Minimum element is:" + maxValue);
}

// Question 2: Removing duplicates from the array

let arr1 = ["apple", "mango", "apple",
    "orange", "mango", "mango"];

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates(arr1));


let arr = ["apple", "mango",
    "apple", "orange", "mango", "mango"];

function removeDuplicates(arr) {
    let unique = [];
    arr.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element);
        }
    });
    return unique;
}
console.log(removeDuplicates(arr));


