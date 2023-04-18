// 30 Days of JavaScript
// Day 13
// Console Object Methods

// Exercises Level One

// Display the countries array as a table
const countriesArr = require('./countries_array')
console.table(countriesArr)

// Display the countries object as a table
const countries_data = require('./countries_data')
console.table(countries_data)

// Use console.group() to group logs
const names = ['Asabeneh', 'Brook', 'David', 'John']
const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]

console.group('Names')
console.log(names)
console.groupEnd()

console.group('Countries')
console.log(countries)
console.groupEnd()

console.group('Users')
console.log(user)
console.log(users)
console.groupEnd()


// Exercises Level Two
// 10 > 2 * 10 use console.assert()
console.assert(10 > 2 * 10, 'Ten is most definitely less than twice ten!')

// Write a warning message using console.warn()
console.warn('Function has been deprecated and will not be supported in newer versions')

// Write an error message using console.error()
console.error('TypeError')

// Exercises Level Three
// Check the speed difference among the following loops: while, for, for of, forEach

// while loop
console.time('while loop')
let i = 0
while (i < countriesArr.length) {
   console.log(countriesArr[i])
   i++
}
console.timeEnd('while loop')  //  2.859ms

// for loop
console.time('for loop')
for (let i = 0; i < countriesArr.length; i++) {
    console.log(countriesArr[i])
}
console.timeEnd('for loop')  // 2.622ms

// for of loop
console.time('for of loop')
for (const country of countriesArr) {
    console.log(country)
}
console.timeEnd('for of loop')  // 2.718ms

//forEach
console.time('forEach loop')
countriesArr.forEach((country) => console.log(country))
console.timeEnd('forEach loop')  // 2.473ms

