// import fs from 'fs';
import {promises as fs} from 'fs';

// fs.readFile('messages.txt', 'utf-8', (err, data) => {
//     if (err) 
//     {
//         return console.log('Uh oh! An Error!');
//     }
//     console.log(data);

//     makeRequest('https://myapi...', (err, response) => {
//         fs.writeFile('messages.txt', response, (err, result) => {
//             // Callback Hell
//         });
//     })
// });

fs.readFile('messages.txt', 'utf-8')
    .then(data => {
        console.log(data);
        return makeNoRequest(data)
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => console.log("uh oh! An Error"));

