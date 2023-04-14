// 30 Days of JavaScript
// Day 06
// Loops
// Exercises Level One

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']


// Iterate 0 to 10 using for loop, do the same using while and do while loop
let i = 0
while (i<=10){
    console.log(i)
    i++
}

i = 0
do {
    console.log(i)
    i++
}  while(i<=10)

// Iterate 10 to 0 using for loop, do the same using while and do while loop
// for loop
for (let i=10;i>=0;i--){
    console.log(i)
}

// while loop
i = 10
while (i>=0){
    console.log(i)
    i--
}
// Iterate 0 to 20 using for loop
for (let i =0 ; i<=20; i++){
    console.log(i)
}
/* Write a loop that makes the following pattern using console.log():

    #
    ##
    ###
    ####
    #####
    ######
    #######
*/
for (let i = 1; i <= 7; i++) {
    let line = '';
    for (let j = 1; j <= i; j++) {
      line += '#';
    }
    console.log(line);
  }
  
/*
Use loop to print the following pattern:

0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100
*/
for (let i = 0; i<11; i++){
    console.log(`${i} x ${i} = ${i*i}`)
}

/*
Using loop print the following pattern

 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000
*/

console.log('i\ti^2\ti^3');
for (let i = 0; i <= 10; i++) {
  console.log(`${i}\t${i**2}\t${i**3}`);
}

// Use for loop to iterate from 0 to 100 and print only even numbers
for (let i= 0; i <= 100; i++ ){
    if (i%2 === 0){
        console.log(i)
    }
}

// Use for loop to iterate from 0 to 100 and print only odd numbers
for (let i= 0; i <= 100; i++ ){
    if (i%2 != 0){
        console.log(i)
    }
}

// Use for loop to iterate from 0 to 100 and print only prime numbers
for (let i = 2; i <= 100; i++) {
    let isPrime = true;
    
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    
    if (isPrime) {
      console.log(i);
    }
  }

/*
Use for loop to iterate from 0 to 100 and print the sum of all numbers.

The sum of all numbers from 0 to 100 is 5050.
*/
let sum = 0
for (let i = 0; i <= 100; i++) {
    sum += i

}
console.log(`The sum of all numbers from 0 to 100 is ${sum}.`)

/* Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
*/
let sumEvens = 0
let sumOdds = 0
for (let i = 0; i <= 100; i++){
    if (i%2===0){
        sumEvens += i
    } else {
        sumOdds += i
    }
}
console.log(`The sum of all evens from 0 to 100 is ${sumEvens}. And the sum of all odds from 0 to 100 is ${sumOdds}.`)

/* Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. 
Print sum of evens and sum of odds as array
  [2550, 2500]
*/
console.log([sumEvens,sumOdds]) // done

// Develop a small script which generate array of 5 random numbers

let randomNumbers = [];

for (let i = 0; i < 5; i++) {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  randomNumbers.push(randomNumber);
}

console.log(randomNumbers);

// Develop a small script which generate array of 5 random numbers and the numbers must be unique
randomNumbers = []
for (let i = 0; i < 5; i++) {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    if (!randomNumbers.includes(randomNumber)){
        randomNumbers.push(randomNumber);
    }
    
  }
console.log(randomNumbers);

/*
Develop a small script which generate a six characters random id:

5j2khz
*/

let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let id = '';

for (let i = 0; i < 6; i++) {
  let randomIndex = Math.floor(Math.random() * characters.length);
  id += characters[randomIndex];
}

console.log(id);


// Exercises Level Two

/*
Develop a small script which generate any number of characters random id:

  fe3jo1gl124g
  xkqci4utda1lmbelpkm03rba
*/

function generateRandomId(length) {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
  
    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      id += characters[randomIndex];
    }
  
    return id;
  }
  
  console.log(generateRandomId(5))
  console.log(generateRandomId(10))

/* Write a script which generates a random hexadecimal number.

'#ee33df'
*/

let hexColor = '#';

for (let i = 0; i < 6; i++) {
    let randomDigit = Math.floor(Math.random() * 16);
    hexColor += randomDigit.toString(16);
  }

console.log(hexColor);

/* Write a script which generates a random rgb color number.

rgb(240,180,80)
*/

let red = Math.floor(Math.random() * 256);
let green = Math.floor(Math.random() * 256);
let blue = Math.floor(Math.random() * 256);

console.log(`rgb(${red}, ${green}, ${blue})`)

/*
Using the above countries array, create the following new array.

["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
*/
const newArr = []
for (const country of countries){
    newArr.push(country.toUpperCase())

}
console.log(newArr)

/*
Using the above countries array, create an array for countries length'.

[7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]

*/
const countriesLengthArr = []
for (const country of countries){
    countriesLengthArr.push(country.length)

}
console.log(countriesLengthArr)

/*
Use the countries array to create the following array of arrays:

  [
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Iceland', 'ICE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
]
*/

const arrArray = [];

for (let i = 0; i < countries.length; i++) {
  const countryName = countries[i];
  const countryCode = countryName.substring(0, 3).toUpperCase();
  const countryLength = countryName.length;
  
  arrArray.push([countryName, countryCode, countryLength]);
}

console.log(arrArray);

/*
In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

['Finland','Ireland', 'Iceland']
*/
const countriesWithLand = [];

for (let i = 0; i < countries.length; i++) {
  const countryName = countries[i];
  if (countryName.includes('land')) {
    countriesWithLand.push(countryName);
  }
}

if (countriesWithLand.length > 0) {
  console.log(countriesWithLand);
} else {
  console.log('All these countries are without land');
}
// [ 'Finland', 'Ireland' ]

/*
In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

['Albania', 'Bolivia','Ethiopia']
*/

const countriesWithIaEnding = [];

for (let i = 0; i < countries.length; i++) {
  const countryName = countries[i];
  if (countryName.endsWith('ia')) {
    countriesWithIaEnding.push(countryName);
  }
}

if (countriesWithIaEnding.length > 0) {
  console.log(countriesWithIaEnding);
} else {
  console.log('These are countries ends without ia');
}

/* Using the above countries array, find the country containing the biggest number of characters.

Ethiopia
*/
let countryWithMostChars = '';
let mostChars = 0;

for (const country of countries) {
  if (country.length > mostChars) {
    countryWithMostChars = country;
    mostChars = country.length;
  }
}

console.log(countryWithMostChars); // Ethiopia

/*
Using the above countries array, find the country containing only 5 characters.

['Japan', 'Kenya']
*/
let countriesWithOnly5Chars = [];
let numChars = 0
for (const country of countries){
   if (country.length === 5) {
    countriesWithOnly5Chars.push(country)
   }
}
console.log(countriesWithOnly5Chars) // [ 'Japan', 'Kenya' ]

// Find the longest word in the webTechs array
let longestWord = '';
let wordLength = 0
for (const word of webTechs){
    if(word.length > wordLength){
        longestWord = word;
        wordLength = word.length;
    }
}
console.log(longestWord)  // JavaScript

/*
Use the webTechs array to create the following array of arrays:

[["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
*/
const lengthArr = []
for (const word of webTechs) {
    const wordLength = word.length
    lengthArr.push([word,wordLength])
}
console.log(lengthArr)

/*
An application created using MongoDB, Express, React and Node is called a MERN stack app. 
Create the acronym MERN by using the array mernStack
*/
accronym = ''
for (const word of mernStack){
    accronym += word[0]
}
console.log(accronym) // MERN

/*
Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] 
using a for loop or for of loop and print out the items.
*/
const skills = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
// using for loop
for(let i = 0; i < skills.length; i++) {
    console.log(skills[i])
}
// using for of loop

for (const skill of skills){
    console.log(skill)
}

/* This is a fruit array , 
['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
*/
const revFruitArr = []
const fruitArr = ['banana', 'orange', 'mango', 'lemon'];
for (let i = fruitArr.length - 1; i >= 0; i--) {
  revFruitArr.push(fruitArr[i]);
}

console.log(revFruitArr); // ['lemon', 'mango', 'orange', 'banana']


/* Print all the elements of array as shown below.

  const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
*/
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]

// using nested for of loop
for (const item of fullStack){
    for (const content of item){
        console.log(content)
    }
} 

// using regular nested for loop
for (let i = 0; i < fullStack.length; i++) {
    for (let j = 0; j < fullStack[i].length; j++) {
      console.log(fullStack[i][j]);
    }
  }


// Exercises Level Three

// Copy countries array(Avoid mutation)
// Using spread operator
const countriesCopy = [...countries];
console.log(countriesCopy)
// using `Array.from()` method
const countriesCopy2 = Array.from(countries);
console.log(countriesCopy2) // same

/* 
Arrays are mutable. Create a copy of array which does not modify the original.
 Sort the copied array and store in a variable sortedCountries
 */
// sorting countriesCopy above
const sortedCountries = countriesCopy.sort()
console.log(sortedCountries)

// Sort the webTechs array and mernStack array
const webTechsCopy = Array.from(webTechs)
const mernStackCopy = Array.from(mernStack)
const sortedWebTechs = webTechsCopy.sort()
const sortedMernStack = mernStackCopy.sort()
console.log(sortedWebTechs)
console.log(sortedMernStack)

// Extract all the countries contain the word 'land' from the countries array and print it as array

const countriesArr = require('./countries_array');
const countriescontainingLand = []
for (country of countriesArr) {
    if (country.includes('land')) {
     countriescontainingLand.push(country)
    }
}
console.log(countriescontainingLand)
/* [
  'Finland',
  'Iceland',
  'Ireland',
  'Marshall Islands',
  'Netherlands',
  'New Zealand',
  'Poland',
  'Solomon Islands',
  'Swaziland',
  'Switzerland',
  'Thailand'
]
*/

// Find the country containing the hightest number of characters in the countries array
let countryWithMostChar = '';
let mostChar = 0;

for (const country of countriesArr) {
  if (country.length > mostChar) {
    countryWithMostChar = country;
    mostChar = country.length;
  }
}

console.log(countryWithMostChar); // Central African Republic

// Extract all the countries containing only four characters from the countries array and print it as array
const fourCharCountry = []
for (const country of countriesArr) {
    if (country.length === 4) {
    fourCharCountry.push(country)
    }
}
console.log(fourCharCountry)  
/*
[
  'Chad', 'Cuba',
  'Fiji', 'Iran',
  'Iraq', 'Laos',
  'Mali', 'Oman',
  'Peru', 'Togo'
]
*/

// Extract all the countries containing two or more words from the countries array and print it as array
const multipleWordCountries = []
for (const country of countriesArr) {
    if (country.split(' ').length >= 2) {
        multipleWordCountries.push(country)
    }
}
console.log(multipleWordCountries)

// Reverse the countries array and capitalize each country and store it as an array
// made a copy anyways
const countriesArrCopy = Array.from(countriesArr)
const reversedCountriesArr = []
for (let i = countriesArrCopy.length-1; i >= 0; i-- ){
    reversedCountriesArr.push(countriesArrCopy[i].toUpperCase())
}
console.log(reversedCountriesArr)

