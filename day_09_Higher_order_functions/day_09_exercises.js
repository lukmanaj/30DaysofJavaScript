// 30 Days of JavaScript
// Day 09
// Higher Order Functions

// Exercises Level One

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
// Explain the difference between forEach, map, filter, and reduce.
/*
forEach is used for iterating over an array and performing some action on each item, 
map is used for transforming an array into a new array based on some logic, 
filter is used for extracting specific elements from an array based on some condition, 
and reduce is used for reducing an array to a single value based on some calculation logic.
*/

// Define a callback function before you use it in forEach, map, filter or reduce.
// callback function
function square(num) {
    return num * num;
  }

const originalArray = [1, 2, 3, 4, 5];
// using the square callback function with map
const squaredArray = originalArray.map(square);
console.log(squaredArray); // [1, 4, 9, 16, 25]

// Use forEach to console.log each country in the countries array.
countries.forEach(country => console.log(country))

// Use forEach to console.log each name in the names array.
names.forEach(name => console.log(name))

// Use forEach to console.log each number in the numbers array.
numbers.forEach(number => console.log(number))

// Use map to create a new array by changing each country to uppercase in the countries array.
const capitalisedCountries = countries.map(country => country.toUpperCase())
console.log(capitalisedCountries)  // [ 'FINLAND', 'SWEDEN', 'DENMARK', 'NORWAY', 'ICELAND' ]

// Use map to create an array of countries length from countries array.
const countriesLength = countries.map(country => country.length)
console.log(countriesLength) // [ 7, 6, 7, 6, 7 ]

// Use map to create a new array by changing each number to square in the numbers array
const squaredNumbers = numbers.map(number => number ** 2)
console.log(squaredNumbers)   
/* [
    1,  4,  9, 16,  25,
   36, 49, 64, 81, 100
 ]
 */

// Use map to change to each name to uppercase in the names array
const capitalNames = names.map(name => name.toUpperCase())
console.log(capitalNames)  // [ 'ASABENEH', 'MATHIAS', 'ELIAS', 'BROOK' ]

// Use map to map the products array to its corresponding prices.
const productPrices = products.map(product => product.price)
console.log(productPrices) // [ 3, 6, ' ', 8, 10, '' ]

// Use filter to filter out countries containing land.
const nameHasLand = countries.filter(country => country.toLowerCase().includes('land')) 
console.log(nameHasLand)  // [ 'Finland', 'IceLand' ]

// Use filter to filter out countries having six character.
const sixCharName = countries.filter(country => country.length === 6)
console.log(sixCharName)  // [ 'Sweden', 'Norway' ]

// Use filter to filter out countries containing six letters and more in the country array.
const sixOrMoreLetters = countries.filter(country => country.length >=6) 
console.log(sixOrMoreLetters) 
// [ 'Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand' ]

// Use filter to filter out country start with 'E';
const startsWithE = countries.filter(country => country.startsWith('E'))
console.log(startsWithE) // [] none!
// Use filter to filter out only prices with values.
const actualPrices = productPrices.filter(price => price !== '' && price !== ' ')
console.log(actualPrices) // [ 3, 6, 8, 10 ]
/* Declare a function called getStringLists which takes an array as a parameter 
and then returns an array only with string items.
*/

function getStringLists(arr) {
    // Use filter to get only string items
    const stringList = arr.filter(item => typeof item === 'string');
    return stringList;
  }
console.log(getStringLists([1,2,'happy','coding','friends']))   // [ 'happy', 'coding', 'friends' ]

// Use reduce to sum all the numbers in the numbers array.
const sumNumbers = numbers.reduce((acc,cur) => acc + cur,0)
console.log(sumNumbers)  // 55
/* 
Use reduce to concatenate all the countries and to produce this sentence: 
Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
*/


const concatenatedCountries = countries.reduce((previousValue, currentValue, index) => {
  if (index === 0) {
    return currentValue;
  } else if (index === countries.length - 1) {
    return `${previousValue}, and ${currentValue}`;
  } else {
    return `${previousValue}, ${currentValue}`;
  }
});

const sentence = `${concatenatedCountries} are north European countries`;

console.log(sentence);

// Explain the difference between some and every
/*
some() method checks if at least one element in an array satisfies a given condition, 
while every() method checks if all elements in an array satisfy a given condition.
*/
// Use some to check if some names' length greater than seven in names array
const areSomeMoreThanSevenChars = names.some((name) => name.length > 7)
console.log(areSomeMoreThanSevenChars)  // true

// Use every to check if all the countries contain the word land
const allCountriesHaveLand = countries.every((country) => country.toLowerCase().includes('land'))
console.log(allCountriesHaveLand)  // false

// Explain the difference between find and findIndex.
/*
find() method returns the value of the first element in the array that satisfies a condition, 
while findIndex() method returns the index of the first element in the array that satisfies a condition.
*/

// Use find to find the first country containing only six letters in the countries array
const firstSixCharCountry = countries.find((country) => country.length === 6)
console.log(firstSixCharCountry)  // Sweden

// Use findIndex to find the position of the first country containing only six letters in the countries array
const firstSixCharCountryIndex = countries.findIndex((country) => country.length === 6)
console.log(firstSixCharCountryIndex) // 1

// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const norwayIndex = countries.findIndex((country) => country === 'Norway')
console.log(norwayIndex)  // 3

// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const russiaIndex = countries.findIndex((country) => country === 'Russia')
console.log(russiaIndex)  // doesn't exist, so -1 




// Exercises Level Two
/*
//Find the total price of products by chaining two or more array iterators
(eg. arr.map(callback).filter(callback).reduce(callback))
*/

const totalPrice = products.map((product) => product.price).filter((price) => typeof price === 'number').reduce((acc,cur) =>acc+cur,0)
console.log(totalPrice) // 27

// Find the sum of price of products using only reduce reduce(callback))
const totalPriceV2 = products.reduce((acc, product) => {
    if (typeof product.price === 'number' && product.price !== 0) {
      return acc + product.price;
    } else {
      return acc;
    }
  }, 0);
  
console.log(totalPriceV2); // 27


// Declare a function called categorizeCountries which returns an array of countries which have some common pattern
// importing the countriesArr array from the countries_array.js file
const countriesArr = require('./countries_array');


function categorizeCountries(pattern) {
    const matchingCountries = countriesArr.filter(country => country.toLowerCase().includes(pattern.toLowerCase()));
    const resultObject = { pattern, countries: matchingCountries };
    return resultObject.countries
  }
  
console.log(categorizeCountries('stan'))
console.log(categorizeCountries('land'))
console.log(categorizeCountries('ia'))

/* Create a function which return an array of objects, 
which is the letter and the number of times the letter use to start with a name of a country.
*/

function countStartingLetters() {
    const letterFrequencies = {};
    countriesArr.forEach(country => {
      const firstLetter = country[0].toUpperCase();
      if (letterFrequencies[firstLetter]) {
        letterFrequencies[firstLetter]++;
      } else {
        letterFrequencies[firstLetter] = 1;
      }
    });
    return Object.entries(letterFrequencies).map(([letter, count]) => ({ letter, count }));
  }
console.log(countStartingLetters())


/*
Declare a getFirstTenCountries function and return an array of ten countries.
Use different functional programming to work on the countries.js array
*/
function getFirstTenCountries() {
    return countriesArr.filter(country => country.length > 5) // filter out short country names
                    .map(country => country.toUpperCase()) // convert country names to uppercase
                    .slice(0, 10); // take the first ten countries
  }

console.log(getFirstTenCountries())

// Declare a getLastTenCountries function which which returns the last ten countries in the countries array.

function getLastTenCountries() {
    return countriesArr.slice(-10);
  }

console.log(getLastTenCountries())

// Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)


function mostCommonInitialLetter() {
    const initials = countriesArr.map(country => country.charAt(0));
    const frequency = {};
  
    for (const initial of initials) {
      if (frequency[initial]) {
        frequency[initial]++;
      } else {
        frequency[initial] = 1;
      }
    }
  
    let mostCommonInitial = '';
    let highestFrequency = 0;
  
    for (const initial in frequency) {
      if (frequency[initial] > highestFrequency) {
        highestFrequency = frequency[initial];
        mostCommonInitial = initial;
      }
    }
  
    return mostCommonInitial;
  }
  
console.log(mostCommonInitialLetter())  // S


// Exercises Level Three
const countries_data = require('./countries_data')

const countriesData = countries_data.slice()
// Use the countries information, in the data folder. Sort countries by name, by capital, by population

// by name
countriesData.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });


// by capital

countriesData.sort((a, b) => {
    if (a.capital < b.capital) {
      return -1;
    }
    if (a.capital > b.capital) {
      return 1;
    }
    return 0;
  });
console.log(countriesData.slice(3,7))
// by population
countriesData.sort((a, b) => (b.population - a.population))

console.log(countriesData.slice(3,7))

/*
Find the 10 most spoken languages:

// Your output should look like this
console.log(mostSpokenLanguages(countries, 10))
[
{country: 'English',count:91},
{country: 'French',count:45},
{country: 'Arabic',count:25},
{country: 'Spanish',count:24},
{country:'Russian',count:9},
{country:'Portuguese', count:9},
{country:'Dutch',count:8},
{country:'German',count:7},
{country:'Chinese',count:5},
{country:'Swahili',count:4}
]

// Your output should look like this
console.log(mostSpokenLanguages(countries, 3))
[
{country: 'English',count: 91},
{country: 'French',count: 45},
{country: 'Arabic',count: 25},
]
*/

function mostSpokenLanguages(countries, numLanguages) {
    const langCounts = {};
    for (const country of countries) {
      for (const lang of country.languages) {
        if (lang in langCounts) {
          langCounts[lang]++;
        } else {
          langCounts[lang] = 1;
        }
      }
    }
    const langArr = [];
    for (const lang in langCounts) {
      langArr.push({ country: lang, count: langCounts[lang] });
    }
    langArr.sort((a, b) => b.count - a.count);
    return langArr.slice(0, numLanguages);
  }
console.log(mostSpokenLanguages(countriesData,5))

/*
create a function which create the ten most populated countries

console.log(mostPopulatedCountries(countries, 10))

[
{country: 'China', population: 1377422166},
{country: 'India', population: 1295210000},
{country: 'United States of America', population: 323947000},
{country: 'Indonesia', population: 258705000},
{country: 'Brazil', population: 206135893},
{country: 'Pakistan', population: 194125062},
{country: 'Nigeria', population: 186988000},
{country: 'Bangladesh', population: 161006790},
{country: 'Russian Federation', population: 146599183},
{country: 'Japan', population: 126960000}
]

console.log(mostPopulatedCountries(countries, 3))
[
{country: 'China', population: 1377422166},
{country: 'India', population: 1295210000},
{country: 'United States of America', population: 323947000}
]

*/

function mostPopulatedCountries(countries, n) {
    return countries
      .sort((a, b) => b.population - a.population)
      .slice(0, n)
      .map(({ name, population }) => ({ country: name, population }));
  }
console.log(mostPopulatedCountries(countriesData,7))  


/*
 Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range() // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Variance: ',statistics.var()) // 17.5
console.log('Frequency Distribution: ',statistics.freqDist()) # [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
console.log(statistics.describe())
Count: 25
Sum:  744
Min:  24
Max:  38
Range:  14
Mean:  30
Median:  29
Mode:  (26, 5)
Variance:  17.5
Standard Deviation:  4.2
Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
*/

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

const statistics = {
    data: [],
    // Add data to the statistics object
    addData(data) {
    this.data = [...this.data, ...data];
    },
    count: function() {
      return this.data.length;
    },
    sum: function() {
      return this.data.reduce((acc, val) => acc + val, 0);
    },
    min: function() {
      return Math.min(...this.data);
    },
    max: function() {
      return Math.max(...this.data);
    },
    range: function() {
      return this.max() - this.min();
    },
    mean: function() {
      return this.sum() / this.count();
    },
    median: function() {
      const sorted = this.data.sort();
      const mid = Math.floor(this.count() / 2);
      return this.count() % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
    },
    mode: function() {
      const freq = {};
      this.data.forEach(val => freq[val] = (freq[val] || 0) + 1);
      let mode = [];
      let count = 0;
      for (const key in freq) {
        if (freq[key] > count) {
          mode = [key];
          count = freq[key];
        } else if (freq[key] === count) {
          mode.push(key);
        }
      }
      return {mode: mode.map(val => parseInt(val)), count: count};
    },
    var: function() {
      const mean = this.mean();
      return this.data.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / this.count();
    },
    std: function() {
      return Math.sqrt(this.var());
    },
    freqDist: function() {
      const freq = {};
      this.data.forEach(val => freq[val] = (freq[val] || 0) + 1);
      return Object.entries(freq).sort((a, b) => b[1] - a[1]).map(val => [val[1] / this.count() * 100, parseInt(val[0])]);
    },
    describe: function() {
      return {
        count: this.count(),
        sum: this.sum(),
        min: this.min(),
        max: this.max(),
        range: this.range(),
        mean: this.mean(),
        median: this.median(),
        mode: this.mode(),
        var: this.var(),
        std: this.std(),
        freqDist: this.freqDist()
      }
    }
  };
statistics.addData(ages)
console.log(statistics.describe())
