console.log("Running code in 1.5 seconds...");

// let x = 5;
// setTimeout(
//     // This is a callback function
//     function() {
//         console.log("Hello from callback");
//         x = 100;
//     },
//     // delay in milliseconds
//     1500,
// )

// setTimeout(
//     function() {
//         console.log(x);
//     },
//     2000,
// )

// console.log(x);


let fileContents;

loadFile(
    function(data){
        fileContents = data;
    },
    2000,
)

for (let item in fileContents) {
    console.log(item);
}