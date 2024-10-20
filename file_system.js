import fs, { stat } from 'fs';

// fs.stat('./package.json', (err, stats) => {
//     console.log(`The file size is ${stats.size} bytes`);
// });

// Asynchronous read
fs.readFile("./input.txt", function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
});

// Synchronous read
// const data = fs.readFileSync('./input.txt');
// console.log("Synchronous read: " + data.toString());

// Asynchronous - Opening File
console.log("opening file!");
fs.open("input.txt", "r+", function (err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("File open successfully");
});

console.log("writing into existing file");
fs.writeFile("input.txt", "Geeks For Geeks", function (err) {
    if (err) {
        return console.error(err);
    }

    console.log("Data written successfully!");
    console.log("Let's read newly written data");

    fs.readFile("input.txt", function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("Asynchronous read: " + data.toString());
    });
});



// const data = "\nLearn Node.js";  //synchronously
// // Append data to file
// fs.appendFileSync("input.txt", data, "utf8");
// console.log("Data is appended to file successfully.");




let data = "\nLearn Node.js";    // asynchronously
// Append data to file
fs.appendFile(
    "input.txt", data, "utf8",
    // Callback function
    function (err) {
        if (err) throw err;

        // If no error
        console.log("Data is appended to file successfully.");
    }
);