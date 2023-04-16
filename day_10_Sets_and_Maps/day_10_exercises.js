// 30 Days of JavaScript
// Day 10
// Sets and Maps

// Exercises Level One

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

// create an empty set
const firstSet = new Set()
console.log(firstSet)

// Create a set containing 0 to 10 using loop
const mySet = new Set();
for (let i = 0; i <= 10; i++) {
  mySet.add(i);
}
console.log(mySet); // Set { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }

// Remove an element from a set
mySet.delete(5)
console.log(mySet) // Set { 0, 1, 2, 3, 4, 6, 7, 8, 9, 10 }
// Clear a set
mySet.clear()
console.log(mySet) // Set {}
// Create a set of 5 string elements from array
const arr = ['apple', 'banana', 'orange', 'grape', 'pear'];
const stringSet = new Set(arr)
console.log(stringSet) // Set { 'apple', 'banana', 'orange', 'grape', 'pear' }


// Create a map of countries and number of characters of a country
const countryCharCountMap = new Map();

for (const country of countries) {
  const charCount = country.length;
  countryCharCountMap.set(country, charCount);
}

console.log(countryCharCountMap); // Map { 'Finland' => 7, 'Sweden' => 6, 'Norway' => 6 }

// Exercises Level Two

// Find a union b

// getting union using spread operator
let A = new Set(a)
let B = new Set(b)
// C will be the union of sets A and B
let c = [...a,...b]
let C = new Set(c)
console.log(C)  // Set { 4, 5, 8, 9, 3, 7 }  union of A and B


// Find a intersection b

// The code below ensures that only elements that are in both a and set B are included, then changing to set. 
let inter = a.filter((num) => B.has(num))
let intersect = new Set(inter)  
console.log(intersect) // Set { 4, 5 }


// Find a with b
let diff = a.filter((num) => !B.has(num))
let aDiffB = new Set(diff)
console.log(aDiffB) // Set { 8, 9 }

// // Exercises Level Three
const countries_data = require('./countries_data')

// How many languages are there in the countries object file.
const languages = []
for (const country of countries_data) {
    for (const lang of country.languages) {
        languages.push(lang)
    }
}
const languagesSet = new Set(languages)
console.log(languagesSet)
console.log(languagesSet.size)  // 123




/*
Use the countries data to find the 10 most spoken languages:

   // Your output should look like this
   console.log(mostSpokenLanguages(countries, 10))
   [
     { English: 91 },
     { French: 45 },
     { Arabic: 25 },
     { Spanish: 24 },
     { Russian: 9 },
     { Portuguese: 9 },
     { Dutch: 8 },
     { German: 7 },
     { Chinese: 5 },
     { Swahili: 4 },
     { Serbian: 4 }
   ]

  // Your output should look like this
  console.log(mostSpokenLanguages(countries, 3))
  [
  {English:91},
  {French:45},
  {Arabic:25}
  ]
*/


function mostSpokenLanguages(countries, numLanguages) {
    const langCounts = new Map();
    for (const country of countries) {
      for (const lang of country.languages) {
        if (langCounts.has(lang)) {
          langCounts.set(lang, langCounts.get(lang) + 1);
        } else {
          langCounts.set(lang, 1);
        }
      }
    }
    const langArr = [];
    for (const [lang, count] of langCounts) {
      langArr.push({ [lang]: count });
    }
    langArr.sort((a, b) => Object.values(b)[0] - Object.values(a)[0]);
    return langArr.slice(0, numLanguages);
  }
console.log(mostSpokenLanguages(countries_data,10))  
/*
[
  { English: 91 },
  { French: 45 },
  { Arabic: 25 },
  { Spanish: 24 },
  { Portuguese: 10 },
  { Russian: 8 },
  { Dutch: 8 },
  { German: 7 },
  { Chinese: 5 },
  { Serbian: 4 }
]
*/