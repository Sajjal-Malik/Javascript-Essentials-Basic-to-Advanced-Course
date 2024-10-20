import _ from "lodash";

let numbers = [1, 2, 3, 4, 5];
let obj = [1, 2, 3];

console.log(_.map(numbers, (number, index) => number * index));  // 2nd argument will be the index of the value
console.log(_.map(numbers, (number, index, arr) => number * index));
console.log(_.forEach(obj, (value, key) => value + key));
console.log();

// console.log("print using array");
// numbers.forEach(x =>{
//     console.log(x);
// })

// console.log("print using lodash");
// _.forEach(obj, x =>{
//     console.log(x);
// })

let doubleNumbers = numbers.map(x => x * 2); // it will return an array
// console.log(doubleNumbers);

// let doubleNumbers2 = _.map(numbers, function(n) {return x * 2});
let doubleNumbers2 = _.map(numbers, x => x * 2);
// console.log(doubleNumbers2);

// let sum = numbers.reduce((acc, x)  => acc + x, 0);
let sum = _.reduce(numbers, (acc, x) => acc + x, 0);
// console.log(sum);


let nums = [1, 2, 3, 4, 5, 6];
let strs = ["Hi", "Hello", "Hey", "Howdy"];

// let arr_of_nums = _.filter(_.pull(nums, 2,4,5), x => x > 3);
// console.log(arr_of_nums == nums);

// let arr_of_nums = _.pull(nums, 2,4,5);
let arr_of_nums = _.pullAll(nums, [2, 4, 5]);
// console.log(arr_of_nums);
// console.log(nums);

let arr_of_strs = _.pullAll(strs, ["Hi", "Hello", "Goodbye"]);
// console.log(arr_of_strs);
// console.log(strs);

let mynums = [1, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 7, 7, 7];
let mystr = ["Hi", "Hello", "Hey", "Howdy", "Hello", "Hey", "Howdy", "Hello", "Hey", "Howdy", "Hello", "Hey", "Howdy"];

let mystrNoDuplicates = _.uniq(mystr);
console.log(mystrNoDuplicates);

let mynumNoDuplicates = _.uniq(mynums);
console.log(mynumNoDuplicates);
console.log();
console.log();

let myarr1 = [1, 3, 5, 7, 9];
let myarr2 = [1, 4, 9];
let myarr3 = [1, 4, 8, 9];

// let result = _.intersection(myarr1, myarr2);
let result = _.intersection(myarr1, myarr2, myarr3);
console.log(result);


let people1 = [{ id: '20', name: 'John' }, { id: '21', name: 'David' }, { id: '22', name: 'Eric' }];
let people2 = [{ id: '20', name: 'John' }, { id: '21', name: 'David' }, { id: '22', name: 'Erickson' }];

// let resultp = _.intersection(people1, people2, 'id');
let resultp = _.map(_.intersectionBy(people1, people2, 'id'),
    person => {
        return {
            ...person,
            ..._.find(people2, p => p.id === person.id),
        }
    });
console.log(resultp);




// Original array
let array = ["a", 2, 3];

// Values to be removed from
// the original array 
let values = []
let newArray = _.difference(array, values);
console.log("Before: ", array);

// Printing array 
console.log("After: ", newArray);



const array0 = [{ property: 1, property: 2 }];
const values0 = [{ property: 1 }];
_.differenceBy(array0, values0, 'property');



// Use of _.union() method 
let gfg = _.union([20, 12], [8, 15, 6]);

// Printing the output  
console.log(gfg);

// Use of _.union() method 
let gfgf = _.union([1, 2, 3],
    [3, 4, 5],
    [6, 2, 7]);

// Printing the output  
console.log(gfgf);


let x = [3, 10, 100]
let y = [100, 10, 2];
let z = [10, 500, 3];

let symmetricDifference = _.xor(x, y, z);
console.log(symmetricDifference);

let js = ['web', 'mobile-app'];
let python = ['machine-learning', 'web'];
let c = ['basic-programming', 'system-app'];
let java = ['mobile-app', 'web', 'basic-programming'];

let symmetricDifferenceN = _.xor(js, python, c, java);
console.log(symmetricDifferenceN);


let numbers1 = [100, 42, 31, 4, 5];
let strings1 = ["Hello", "World", "Malik", "Force", "Ahmed", "Bhatti"];

let sortedNumbers = numbers1.sort((a, b) => a - b);
let sortedStrings = strings1.sort();

console.log(sortedNumbers);
console.log(sortedStrings);

let reverseSortedNumbers = numbers1.reverse();
let reverseSortedStrings = strings1.reverse();

console.log(reverseSortedNumbers);
console.log(reverseSortedStrings);

let compSortNumbers = numbers1.sort(function (a, b) {

    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1
    }
    return 0;
});

let compSortStrings = strings1.sort(function (a, b) {

    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1
    }
    return 0;
});


// Original array 
let object = [
    { 'obj': 'moto', 'price': 19999 },
    { 'obj': 'oppo', 'price': 18999 },
    { 'obj': 'moto', 'price': 17999 },
    { 'obj': 'oppo', 'price': 15999 }];

// Use of _.sortBy() method
let sorted_array = _.sortBy(object, ['obj', 'price']);

// Printing the output 
console.log(sorted_array);


// Original array 
let users = [
    { 'employee': 'hunny', 'salary': 60000 },
    { 'employee': 'munny', 'salary': 40000 },
    { 'employee': 'hunny', 'salary': 55000 },
    { 'employee': 'munny', 'salary': 36000 }
];

// Use of _.orderBy() method
// Sort by `employee` in ascending order
// and by `salary` in descending order

let sorted_array_users = _.orderBy(users, ['employee',
    'salary'], ['asc', 'desc']);

// Printing the output 
console.log(sorted_array_users);
console.log();
console.log();


let ar1 = [1, [2, [3, 4, [5]]]];

let flattenArray1 = _.flattenDeep(ar1);

console.log(flattenArray1);

let ar2 = [1, [2, [3, 4, [5]]]];

let flattenArray2 = _.flattenDepth(ar2, 1);

console.log(flattenArray2);
console.log();



let arrN = [1, 2, 3, 4, 5, 6,
    "a", "b", "c", "d"];
console.log("Before: ", arrN)
// Making chunks of size 3
console.log("After: ", _.chunk(arrN, 3))
console.log();
console.log();


let arrN1 = [
    [1, 2, 3],
    [4, 5, 6, 7, 8],
    [9, 10, 1, 2]
];

console.log("Before: ", arrN1)
console.log("After: ", _.chunk(arrN1, 2))
console.log();
console.log();


let arrN2 = [
    { "a": 1, "b": 2, "c": 3 },
    { "d": 1, "e": 2, "f": 3 },
    { "d": 1, "e": 2, "f": 3 }
];

// Array before breaking in to chunks
console.log("Before: ", arrN2)

// Printing the first element 
// of the chunk as size 1
console.log("After: ", _.chunk(arrN2, 1)[0]);
console.log();
console.log();


// Original array 
let usersObj = [
    { 'customer': 'john', 'age': 26, 'active': false },
    { 'customer': 'jonny', 'age': 34, 'active': true },
    { 'customer': 'johnson', 'age': 12, 'active': false }
];

// Use of _.partition() method

let gfgObj = _.partition(usersObj, function (o) { return o.active; });

// Printing the output 
console.log(gfgObj);
console.log();
console.log();



// Original array 
let usersObj1 = [
    { 'customer': 'john', 'age': 26, 'active': false },
    { 'customer': 'jonny', 'age': 34, 'active': true },
    { 'customer': 'johnson', 'age': 12, 'active': false }
];

// Use of _.partition() method
// The `_.matches` iteratee shorthand

let gfgObj1 = _.partition(usersObj1, {
    'age': 12, 'active': false
});

// Printing the output 
console.log(gfgObj1);
console.log();
console.log();

// Use of _.zip() method 
let gfgZip = _.zip(['a', 'b', 'c'],
    [1, 2, 3],
    [true, false, true]);

// Printing the output  
console.log(gfgZip);
console.log();
console.log();


// Use of _.zip()  
// method 
let gfgZip1 = _.zip(['Amit', 'Akash', 'Avijit'],
    [1, 2, 3],
    ['pass', 'pass', 'fail']);

// Printing the output  
console.log(gfgZip1);
console.log();
console.log();



// Original array 
let zipped = _.zip(['a', 'b'], [1, 2], [true,
    false]);
console.log(zipped);

// Use of _.zip() 
// method
let gfgunzipped = _.unzip(zipped);

// Printing the output 
console.log(gfgunzipped);
console.log();
console.log();


function Fb() {
    this.id = 2045;
    this.username = 'fb_myself';
    this.password = 'fb1234';
}
 
// This will not be included in the array
Fb.prototype.email = 'myself@gmail.com';
 
// Use of _.toPairs() method 
console.log(_.toPairs(new Fb));
console.log();
console.log();

let GfG = {
    'x': 1,
    'y': 2
}
 
// Use of _.toPairs() method 
console.log(_.toPairs(GfG));
console.log();
console.log();


let pairs1 = [['x', 1], ['y', 2], ['z', 3]]
let obj1 = _.fromPairs(pairs1);
console.log(obj1);

let pairs2 = [['one', 1], ['two', 2], ['three', 3]]
let obj2 = _.fromPairs(pairs2);
console.log(obj2);


let pairs3 = [
    ['name', 'lodash'],
    ['live', 'npm'],
    ['used', 'nodejs']
]
let obj3 = _.fromPairs(pairs3);
console.log(obj3);
console.log();


// Original array 

let obj11 = ([6.1, 4.2, 6.3, 5, 7.9, 5.3, 5.1, 7.3 ]);

// Use of _.countBy() method
let yy = _.countBy(obj11, Math.floor);
    

// Printing the output 
console.log(yy);
console.log();


// Original array 

let obj12 = (['one', 'two', 'three', 'five', 'eleven', 'twelve'] );

// Use of _.countBy() 
// method
 
// The `_.property` iteratee shorthand.
let yyy = _.countBy(obj12, 'length');    

// Printing the output 
console.log(yyy);
console.log();


// Original array 
let usersG = (['eight', 'nine', 'four', 'seven']);

// Using of _.groupBy() method
// with the `_.property` iteratee shorthand 
let grouped_data = _.groupBy(usersG, 'length')

console.log(grouped_data);
console.log();