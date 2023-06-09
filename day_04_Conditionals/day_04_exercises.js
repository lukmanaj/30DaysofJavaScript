// 30 Days of JavaScript
// Day 04
// Conditionals
// Exercise Level One

/* 
Get user input using prompt(“Enter your age:”). 
If user is 18 or older , give feedback:'You are old enough to drive' 
but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

Enter your age: 30
You are old enough to drive.

Enter your age:15
You are left with 3 years to drive.
*/
let age = prompt("Enter your age: ")
age = Number(age)
if (age > 18) { 
  console.log("You are old enough to drive")
} else {
  console.log(`It will take ${18-age} more years before you can drive`)
}

/*
Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). 
Use prompt(“Enter your age:”) to get the age as input.

Enter your age: 30
You are 5 years older than me. 
*/
let myAge = 29
let yourAge = prompt("Enter your age: ")
yourAge = Number(yourAge)
if (myAge<yourAge){
  if (yourAge-myAge ===1){
    console.log('You are one year older than me')
  } else {
  console.log(`You are ${yourAge - myAge} years older than me`)}
} else if (myAge === yourAge) {
  console.log('We are the same age')
} else {
  if (myAge-yourAge ===1){
    console.log('You are one year younger than me')}
    else {
  console.log(`You are ${myAge-yourAge} years younger than me`)}
}

/*
If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

using if else
ternary operator.
  let a = 4
  let b = 3
  4 is greater than 3

*/
// if else
let a = 4
let b = 3
if (a>b){
  console.log(`${a} is greater than ${b}`)
} else {
  console.log(`${a} is less than ${b}`)
}

// ternary operator
a > b ?console.log(`${a} is greater than ${b}`):console.log(`${a} is less than ${b}`)

/*
Even numbers are divisible by 2 and the remainder is zero. 
How do you check, if a number is even or not using JavaScript?

Enter a number: 2
2 is an even number

Enter a number: 9
9 is is an odd number.
*/
let num = Number(prompt('Enter a number: '))
if (num % 2 == 0){
  console.log(`${num} is an even number`)
} else {
  console.log(`${num} is an odd number`)
}

// Exercises Level Two
/*
Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F
*/

let scores = 40
let grade
switch (true){
  case scores>=80 && scores <=100:
  grade = 'A'
  break
  case scores >=70 && scores <=89:
  grade = 'B'
  break
  case scores >=60 && scores <=69:
  grade = 'C'
  break
  case scores >=50 && scores <=59:
  grade = 'D'
  break
  default:
  grade = 'F'
}
// finally print the grade to the console
console.log(grade)


/*
Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer
*/

let enteredMonth = prompt('Enter a month of the year: ').toLowerCase()
let season;
switch(true){
  case ['september','october','november'].includes(enteredMonth):
  season = 'Autumn'
  break
  case ['december','january','february'].includes(enteredMonth):
  season = 'Winter'
  break
  case ['march','april','may'].includes(enteredMonth):
  season = 'Spring'
  break
  case ['june','july','august'].includes(enteredMonth):
  season = 'Summer'
}
console.log(`${enteredMonth.charAt(0).toUpperCase() + enteredMonth.slice(1)} is in ${season}`)

/*
Check if a day is weekend day or a working day. Your script will take day as an input.
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.
*/
let enteredDay = prompt('What is the day today? ').toLowerCase() // best practice to convert input to lowercase
if (['monday','tuesday','wednesday','thursday','friday'].includes(enteredDay)) {
  console.log(enteredDay.charAt(0).toUpperCase() + enteredDay.slice(1) + ' is a working day.')
} else {
  console.log(enteredDay.charAt(0).toUpperCase() + enteredDay.slice(1) + ' is a weekend.')
}


// Exercises Level Three
/*
Write a program which tells the number of days in a month.
  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days.

*/
let month = prompt("Enter a month: ").toLowerCase(); // convert input to lowercase
let days;

if (month === "february") {
  days = "28 days.";
} else if (["april", "june", "september", "november"].includes(month)) {
  days = "30 days.";
} else if (["january", "march", "may", "july", "august", "october", "december"].includes(month)) {
  days = "31 days.";
} else {
  days = "Invalid month entered.";
}

console.log(month.charAt(0).toUpperCase() + month.slice(1) + " has " + days);


// considering leap year
// using a function; too early, I know. 
function getDaysInMonth(monthName) {
  const monthDays = {
    january: 31,
    february: 28,
    march: 31,
    april: 30,
    may: 31,
    june: 30,
    july: 31,
    august: 31,
    september: 30,
    october: 31,
    november: 30,
    december: 31
  };
  
  const isLeapYear = year => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  const currentYear = new Date().getFullYear();
  
  if(monthName.toLowerCase() === 'february') {
    return isLeapYear(currentYear) ? 29 : 28;
  } else {
    return monthDays[monthName.toLowerCase()];
  }
}

const monthName = 'February';
const daysInMonth = getDaysInMonth(monthName);
console.log(`${monthName} has ${daysInMonth} days.`);
