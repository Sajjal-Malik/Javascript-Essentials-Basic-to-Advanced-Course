import * as readline from "node:readline/promises";

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Running...");

// witout promises and functional readLine interface
// rl.question("What is your first name? ", fname => {
//     rl.question("What is your last name? ",lname => {
//         console.log(`Good afternoon, ${fname} ${lname}`);
//         rl.close();
//     });
// });


// with promises and simple readLine interface 
let run = async () => {  // simple promise function defined using async
    let fname = await rl.question("What is your first name? ");
    let lname = await rl.question("What is your last name? ");
    console.log(`Good afternoon, ${fname} ${lname}`);
    rl.close();
}
// function call
run();