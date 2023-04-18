// 30 Days of JavaScript
// Day 18
// Promises

const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// Exercises Level One

// Read the countries API using fetch and print the name of country, capital, languages, population and area.
import fetch from 'node-fetch'

fetch(countriesAPI)
  .then(response => response.json())
  .then(data => {
    data.forEach(country => {
      console.log(`Country: ${country.name}`);
      console.log(`Capital: ${country.capital}`);
      console.log(`Languages: ${country.languages.map(lang => lang.name).join(', ')}`);
      console.log(`Population: ${country.population}`);
      console.log(`Area: ${country.area}`);
      console.log('------------------------');
    });
  })
  .catch(error => console.error(error));

// Exercises Level 2

// Print out all the cat names in to catNames variable.
console.group('level 2')
fetch(catsAPI)
    .then(response => response.json())
    .then(data => {
      const catNames = data.map(cat => cat.name);
      console.log(catNames);
    })
    .catch(error => console.error(error));

console.groupEnd('level 2')
// Exercises Level Three

// Read the cats api and find the average weight of cat in metric unit.
console.group('level 3')
fetch(catsAPI)
  .then(response => response.json())
  .then(data => {
    const weights = data.map(cat => cat.weight.metric.split('-'));
    const sumWeights = weights.reduce((acc, [min, max]) => acc + (Number(min) + Number(max)) / 2, 0);
    const avgWeight = sumWeights / data.length;
    console.log(`The average weight of a cat in metric units is ${avgWeight} kg`);
  })
  .catch(error => console.error(error));

// The average weight of a cat in metric units is 4.708955223880597 kg


// Read the countries api and find out the 10 largest countries


fetch(countriesAPI)
  .then(response => response.json())
  .then(data => {
    const largestCountries = data
      .sort((a, b) => b.area - a.area)
      .slice(0, 10)
      .map(country => country.name);
    console.log(`The 10 largest countries are: ${largestCountries.join(', ')}`);
  })
  .catch(error => console.error(error));

// The 10 largest countries are: Antarctica, Canada, China, Brazil, Australia, India, Argentina, Kazakhstan, Algeria, Congo (Democratic Republic of the)



// Read the countries api and count total number of languages in the world used as officials.


fetch(countriesAPI)
  .then(response => response.json())
  .then(data => {
    const languages = data.flatMap(country => country.languages.map(lang => lang.name));
    const uniqueLanguages = [...new Set(languages)];
    console.log(`The total number of languages used as officials in the world is ${uniqueLanguages.length}`);
  })
  .catch(error => console.error(error));
// The total number of languages used as officials in the world is 123