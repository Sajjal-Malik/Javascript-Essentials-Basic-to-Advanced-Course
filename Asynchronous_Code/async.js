// Synchronous programming  -> LoadFileSync
// Consider the following code:

function makeGreeting(name) {
    return `Hello, my name is ${name}!`;
}

const name = "Miriam";
const greeting = makeGreeting(name);
console.log(greeting);
// "Hello, my name is Miriam!"


// Asynchronous Strategies
// 1. Callbacks
// 2. Promises
// 3. Async / Await  // latest way of doing things asynchronously
