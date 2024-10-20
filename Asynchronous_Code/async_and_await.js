// asyn function  -  Async functions always return a promise
// const getData = async () => {
//     let data = "Hello World";
//     return data;
// }

// getData().then(data => console.log(data));




// Async/Await Example   --------------------- >>>>>>>>>>>

// const getDataN = async () => {
//     let y = await "Hello World";  // The await keyword is used to wait for a promise to resolve
//     console.log(y);
// }

// console.log(1);
// getDataN();
// console.log(2);


function asynchronous_operational_method() {
    let first_promise =
        new Promise((resolve, reject) => resolve("Hello"));
    let second_promise =
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(" GeeksforGeeks..");
            }, 1000);
        });
    let combined_promise =
        Promise.all([first_promise, second_promise]);
    return combined_promise;
}

async function display() {
    let data = await asynchronous_operational_method();
    console.log(data);
}

display();



// Error Handling in Async/Await  --------------------- >>>>>>>>>>>
async function fetchData() {
    try {
        let response = await fetch('https://api.example.com/data');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
fetchData();