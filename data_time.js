const dateT = new Date();
console.log(dateT);
console.log();

const dateC = new Date(2023, 8, 10, 23, 15, 34, 0);
console.log(dateC);
console.log();

// Omitted seconds and milliseconds
console.log(new Date(2023, 8, 10, 23, 15)); // Sun Sep 10 2023 23:15:00
console.log();

// Omitted hour, minute, seconds and milliseconds
console.log(new Date(2023, 8, 10)); // Sun Sep 10 2023 00:00:00
console.log();

// Passed only Year and Month
console.log(new Date(2023, 8)); // Fri Sep 01 2023 00:00:00
console.log();

// Attention Please!!!
console.log(new Date(2023)); // Thu Jan 01 1970 05:30:02
console.log();

const dateCT = new Date("2013-09-10T13:24:00");
console.log(dateCT); // Tue Sep 10 2013 13:24:00 GMT+0530 (India Standard Time)
console.log();

const date = new Date();

const day = date.getDate();
const month = date.getMonth() + 1; // The month index starts from 0
const year = date.getFullYear();

let currentDate = `${day}/${month}/${year}`;
console.log(currentDate); // 10/9/2023
console.log();

console.log(Date.now()); // Mon Sep 11 2023 08:01:44 GMT+0530 (India Standard Time)
console.log();

const dateL = new Date().toLocaleDateString();
console.log(dateL);


// Define two Date objects representing the start and end dates
const startDate = new Date('2023-08-15T00:00:00');
const endDate = Date.now(); // Current date and time in milliseconds

// Calculate the time difference in milliseconds
const timeDifferenceMS = endDate - startDate;

// Calculate the elapsed time in seconds, minutes, hours, and days
const timeDifferenceSecs = Math.floor(timeDifferenceMS / 1000);
const timeDifferenceMins = Math.floor(timeDifferenceMS / 60000);
const timeDifferenceHours = Math.floor(timeDifferenceMS / 3600000);
const timeDifferenceDays = Math.floor(timeDifferenceMS / 86400000);

console.log(`Time difference in milliseconds: ${timeDifferenceMS}`);
console.log(`Time difference in seconds: ${timeDifferenceSecs}`);
console.log(`Time difference in minutes: ${timeDifferenceMins}`);
console.log(`Time difference in hours: ${timeDifferenceHours}`);
console.log(`Time difference in days: ${timeDifferenceDays}`);


// const theBigDay = new Date(1962, 6, 7, 12); // noon of 1962-07-07 (7th of July 1962, month is 0-indexed)
// const theBigDay2 = new Date(theBigDay).setDate(24); // 1962-07-24 (24th of July 1962)
// const theBigDay3 = new Date(theBigDay).setDate(32); // 1962-08-01 (1st of August 1962)
// const theBigDay4 = new Date(theBigDay).setDate(22); // 1962-07-22 (22nd of July 1962)
// const theBigDay5 = new Date(theBigDay).setDate(0); // 1962-06-30 (30th of June 1962)
// const theBigDay6 = new Date(theBigDay).setDate(98); // 1962-10-06 (6th of October 1962)
// const theBigDay7 = new Date(theBigDay).setDate(-50); // 1962-05-11 (11th of May 1962)

const theBigDay = new Date();
theBigDay.setFullYear(1997);
theBigDay.setHours(7);
theBigDay.setMilliseconds(100);
theBigDay.setMinutes(45);
theBigDay.setMonth(6);
theBigDay.setSeconds(30);
console.log(theBigDay);