// 30 Days of JavaScript
// Day 03
// Booleans, Operators, Date
// Exercise Level One
// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

let firstName = 'Lukman'
let lastName = 'Aliyu'
let country = 'Nigeria'
let city = 'Kaduna'
let age = 29
let isMarried = false
let year01 = 2023
console.log(typeof firstName,typeof lastName,typeof country,typeof city,typeof age,typeof isMarried,typeof year01)
// string string string string number boolean number

// Check if type of '10' is equal to 10
console.log(typeof '10' == typeof 10) // false

// Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') == 10) // false

/*
Boolean value is either true or false.

Write three JavaScript statement which provide truthy value.
Write three JavaScript statement which provide falsy value.


*/
// truthy
const g = 9.8
let a = 'friend'
let bool = true

// falsy
let num = 0
let boole = false
let stri = ''

/*
Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

4 > 3
4 >= 3
4 < 3
4 <= 3
4 == 4
4 === 4
4 != 4
4 !== 4
4 != '4'
4 == '4'
4 === '4'
*/
console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4<=3)
console.log(4==4)
console.log(4===4)
console.log(4!=4)
console.log(4!==4)
console.log(4!='4')
console.log(4=='4')
console.log(4==='4')
// Find the length of python and jargon and make a falsy comparison statement.

let lengthOne = 'python'.length
let lengthTwo = 'jargon'.length
console.log(lengthOne != lengthTwo)

/*
Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

4 > 3 && 10 < 12
4 > 3 && 10 > 12
4 > 3 || 10 < 12
4 > 3 || 10 > 12
!(4 > 3)
!(4 < 3)
!(false)
!(4 > 3 && 10 < 12)
!(4 > 3 && 10 > 12)
!(4 === '4')
There is no 'on' in both dragon and python
*/
console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
// There is no 'on' in both dragon and python
console.log(!('dragon'.includes('on') && 'python'.includes('on')))
/*
Use the Date object to do the following activities

What is the year today?
What is the month today as a number?
What is the date today?
What is the day today as a number?
What is the hours now?
What is the minutes now?
Find out the numbers of seconds elapsed from January 1, 1970 to now.


*/
const now = new Date()
const year =  now.getFullYear() // 2023 
const month = now.getMonth() // 3
const date = now.getDate() // 12
const day = now.getDay() // 3
const hours = now.getHours() // 22
const minutes = now.getMinutes() // 9
const secondsFrom1970 = now.getTime() // 1681333777640

console.log(year,month,date,day,hours,minutes,secondsFrom1970)

/*
Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

Enter base: 20
Enter height: 10
The area of the triangle is 100

*/
// prompt user for base and height of the triangle
let base = prompt("Enter base: ")
let height = prompt("Enter height: ")
// convert user input to numbers
base = Number(base)
height = Number(height)
// calculate the area of the triangle
let tArea = 0.5 * base * height 
console.log(`The area of the triangle is ${tArea}`)

/*
Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

Enter side a: 5
Enter side b: 4
Enter side c: 3
The perimeter of the triangle is 12

*/
let sideA = prompt("Enter side a: ")
let sideB = prompt("Enter side b: ")
let sideC = prompt("Enter side c: ")
sideA = Number(sideA)
sideB = Number(sideB)
sideC = Number(sideC)
let perimeter = sideA + sideB + sideC
console.log(`The perimeter of the triangle is ${perimeter}`)

/*
Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

*/
let length = prompt("Enter length: ")
let width = prompt("Enter breadth: ")
length = Number(length)
width = Number(width)
let area  = length * width
console.log(`The area of the rectangle is ${area}`)

// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let radius = prompt("Enter the radius: ")
radius = Number(radius)
let cArea = Math.round(Math.PI * radius ** 2)
console.log(`The area of the circle is ${cArea}`)

/* Calculate the slope, x-intercept and y-intercept of y = 2x -2

Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

Compare the slope of above two questions.
*/

// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
let x = 0
x = -3
let y = x ** 2 + 6 * x + 9
console.log(`The value of y is ${y}`)

/* Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

Enter hours: 40
Enter rate per hour: 28
Your weekly earning is 1120
*/
let workHours = prompt("Enter the number of hours: ")
let ratePerHour = prompt("Enter rate per hour: ")
workHours = Number(workHours)
ratePerHour = Number(ratePerHour)
let weeklyEarning = workHours * ratePerHour
console.log(`Your weekly earning is ${weeklyEarning}`)


// If the length of your name is greater than 7 say, your name is long else say your name is short.
let name = 'Lukman'
name.length > 7 ?console.log("Your name is long"):console.log("Your name is short")




/*
Compare your first name length and your family name length and you should get this output.

let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
Your first name, Asabeneh is longer than your family name, Yetayeh
*/

let firstNames = 'Asabeneh'
let lastNames = 'Yetayeh'
firstNames.length > lastNames.length ?console.log(`Your first name, ${firstNames} is longer than your family name, ${lastNames}`):console.log(`Your first name, ${firstNames} is shorter than your family name, ${lastNames}`)






/*
Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let myAge = 250
let yourAge = 25
I am 225 years older than you.
*/

let myAge = 29
let yourAge = 25
myAge>yourAge ?console.log(`I am ${myAge-yourAge} years older than you`):console.log(`You are ${yourAge-myAge} years older than me`)


/*
Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

Enter birth year: 1995
You are 25. You are old enough to drive

Enter birth year: 2005
You are 15. You will be allowed to drive after 3 years.
*/
let birthYear = prompt('Enter birth year: ')
let currentDate = new Date();
let currentYear = currentDate.getFullYear();

let userAge = currentYear - Number(birthYear)
userAge >= 18 ?console.log('You are allowed to drive'):console.log(`You have to wait ${18-userAge} years before you can drive`)

/*
Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

Enter number of years you live: 100
You lived 3153600000 seconds.
*/
let yearsLived = prompt("Enter number of years you have lived: ")
yearsLived = Number(yearsLived)
let secondsLived = yearsLived * 365 * 24 * 60 * 60
console.log(`You have lived ${secondsLived} seconds`)

/*
Create a human readable time format using the Date time object

YYYY-MM-DD HH:mm
DD-MM-YYYY HH:mm
DD/MM/YYYY HH:mm


// YYYY-MM-DD HH:mm
let date = new Date();
let year = date.getFullYear();
let month = ('0' + (date.getMonth() + 1)).slice(-2);
let day = ('0' + date.getDate()).slice(-2);
let hour = ('0' + date.getHours()).slice(-2);
let minute = ('0' + date.getMinutes()).slice(-2);
let formattedDate1 = `${year}-${month}-${day} ${hour}:${minute}`;
console.log(formattedDate1); 

// DD-MM-YYYY HH:mm
let formattedDate2 = `${day}-${month}-${year} ${hour}:${minute}`;
console.log(formattedDate2); 

// DD/MM/YYYY HH:mm
let formattedDate3 = `${day}/${month}/${year} ${hour}:${minute}`;
console.log(formattedDate3); 

*/

// Exercise Level Three
/*
Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
YYY-MM-DD HH:mm eg. 2012-01-02 07:05



// Solution

let date = new Date();
let year = date.getFullYear();
let month = ('0' + (date.getMonth() + 1)).slice(-2);
let day = ('0' + date.getDate()).slice(-2);
let hour = ('0' + date.getHours()).slice(-2);
let minute = ('0' + date.getMinutes()).slice(-2);
let formattedDate = `${year}-${month}-${day} ${hour}:${minute}`;
console.log(formattedDate); // output: "2023-04-13 08:30"


*/
