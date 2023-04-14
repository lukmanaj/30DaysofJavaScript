// 30 Days of JavaScript
// Day 05
// Arrays
// Exercises Level One

/* const countries = [
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
*/
// Declare an empty array;
  const arrOne = Array()

// Declare an array with more than 5 number of elements
const arrTwo = ['abubakar','umar','uthman','aliyu','sa\'ad','sa\'eed','abu ubaidah','abdurrahman bn auf','dalhah']

// Find the length of your array
console.log(`The length of arrTwo is ${arrTwo.length}`)

// Get the first item, the middle item and the last item of the array
let firstArrItem = arrTwo[0]
let midArrItem = arrTwo[(arrTwo.length-1)/2]
let lastArrItem = arrTwo[arrTwo.length-1]
console.log(`The first, middle and last items of arrTwo are respectively ${firstArrItem},${midArrItem} and ${lastArrItem}`)

/* Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. 
The array size should be greater than 5
*/
const mixedDataTypes = ['lukman','pharmacist',29,true,1.76,null]
console.log(`The length of mixedDataTypes is ${mixedDataTypes.length}`)

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// Print the array using console.log()
console.log('itCompanies: ',itCompanies)

// Print the number of companies in the array
console.log(`The number of companies in itCompanies is ${itCompanies.length}`)

// Print the first company, middle and last company
let firstComp = itCompanies[0]
let midComp = itCompanies[(itCompanies.length-1)/2]
let lastComp = itCompanies[itCompanies.length-1]
console.log(`The first, middle and last companies are respectively ${firstComp},${midComp} and ${lastComp}`)

// Print out each company
console.log('The companies in the array are as follows: \n')
for (let i = 0; i<itCompanies.length;i++){
    console.log(itCompanies[i])
}

// Change each company name to uppercase one by one and print them out
console.log('The companies in uppercase: ')
console.log(itCompanies[0].toUpperCase())
console.log(itCompanies[1].toUpperCase())
console.log(itCompanies[2].toUpperCase())
console.log(itCompanies[3].toUpperCase())
console.log(itCompanies[4].toUpperCase())
console.log(itCompanies[5].toUpperCase())
console.log(itCompanies[6].toUpperCase())

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(`${itCompanies.slice(0,6)} and ${itCompanies.splice(6)} are big IT companies.`)

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let index = itCompanies.indexOf('Facebook')
if (index === -1) {
    console.log('Company not in itCompanies array')
} else {
    console.log(itCompanies[index])
}

// Filter out companies which have more than one 'o' without the filter method
const filteredArr = [];
for (let i = 0; i < itCompanies.length; i++){
    const item = itCompanies[i];
    const count = (item.match(/o/g) || []).length;
    if (count > 1) {
        filteredArr.push(item)
    }
}
console.log(filteredArr)

// Sort the array using sort() method
console.log('sorted arr: ', itCompanies.sort())

// Reverse the array using reverse() method
console.log('Reversed array: ',itCompanies.reverse())

// Slice out the first 3 companies from the array
console.log(`first three companies: ${itCompanies.slice(0,3)}`)

// Slice out the last 3 companies from the array
console.log(`last three companies: ${itCompanies.slice(-3)}`)

// Slice out the middle IT company or companies from the array
console.log(itCompanies.slice((itCompanies.length-1)/2,(itCompanies.length-1)/2+2))

// Remove the first IT company from the array
console.log(itCompanies.shift())

// Remove the middle IT company or companies from the array
const midIndex = Math.floor(itCompanies.length/2)
itCompanies.splice(midIndex,1)
console.log(itCompanies)
// Remove the last IT company from the array
console.log(itCompanies.pop())
// Remove all IT companies
console.log(itCompanies.splice(0,itCompanies.length))
// confirming
console.log(itCompanies) // worked []



// Exercises Level Two
/* Create a separate countries.js file and store the countries array in to this file, 
create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
*/
const countries = require('./countries');
const webTechs = require('./web_techs');
/*
First remove all the punctuations and change the string to array and count the number of words in the array

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(words)
console.log(words.length)
["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

13

*/
let text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python."
let words = text.replace(/^\w^\s/g,' ').split(' ')
console.log(words)
console.log(words.length)

/*
In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
add 'Meat' in the beginning of your shopping cart if it has not been already added
add Sugar at the end of you shopping cart if it has not been already added
remove 'Honey' if you are allergic to honey
modify Tea to 'Green Tea'
*/
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
if (!shoppingCart.includes('Meat')){
    shoppingCart.unshift('Meat')
}
console.log(shoppingCart)
if (!shoppingCart.includes('Sugar')){
    shoppingCart.push('Sugar')
}
console.log(shoppingCart)

let allergic = true
if (allergic){
    shoppingCart.splice(shoppingCart.indexOf('Honey'),1)
}
console.log(shoppingCart)

shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea'
console.log(shoppingCart)

/* In the countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. 
If it does not exist add to the countries list.
*/
if (countries.includes('Ethiopia')){
    console.log('ETHIOPIA')
} else {
    countries.push('Ethiopia')
}
console.log(countries)

/* In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'.
 If it does not exist add Sass to the array and print the array.
 */
if (webTechs.includes('Sass')){
    console.log('Sass is a CSS preprocess')
} else {
    webTechs.push('Sass')
    console.log(`The array: ${webTechs}`)
}

/*
Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

console.log(fullStack)
["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
*/

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)


// Exercises Level Three

// The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
ages.sort()
console.log(ages)
// Find the median age(one middle item or two middle items divided by two)
let middleIndex;
let midItems
let midItem;
if (ages.length %2 ===0){
     middleIndex = ages.length / 2;
 midItems = ages.slice(middleIndex - 1, middleIndex + 1);
console.log(midItems)
} else {
   middleIndex = Math.floor(ages.length / 2);
  midItem = ages[middleIndex];
console.log(midItem);
}
// medians = [24,24]

// Find the average age(all items divided by number of items)
const sum = ages.reduce((total, num) => total + num);
const avg = sum / ages.length;
console.log(avg) // 22.8
// Find the range of the ages(max minus min)
// since the array has been sorted, we can just subtract the edges
const max = ages[ages.length-1]
const min = ages[0]
const range = max - min 
console.log(range) // 7
// Compare the value of (min - average) and (max - average), use abs() method 
console.log(Math.abs(min - avg) === Math.abs(max-avg)) // false: not equal
console.log(Math.abs(min - avg) > Math.abs(max-avg)) // true: min- avg is numerically greater


// Slice the first ten countries from the countries array
const countriesArr = require('./countries_array');
const firstTenCountries = countriesArr.slice(0,10)
console.log(`first ten countries are: ${firstTenCountries}`)
// Find the middle country(ies) in the countries array
if (countriesArr.length %2 ===0){
    middleIndex = countriesArr.length / 2;
midItems = countriesArr.slice(middleIndex - 1, middleIndex + 1);
console.log(midItems)
} else {
  middleIndex = Math.floor(countriesArr.length / 2);
 midItem = countriesArr[middleIndex];
console.log(midItem);
}
// Lesotho 

/* Divide the countries array into two equal arrays if it is even. 
If countries array is not even , one more country for the first half.
*/
const medianIndex = countriesArr.length / 2;
const firstHalf = countriesArr.slice(0, medianIndex);
const secondHalf = countriesArr.slice(medianIndex);

console.log(firstHalf);
console.log(secondHalf);
