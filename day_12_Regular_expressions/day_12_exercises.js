// 30 Days of JavaScript
// Day 12
// Regular Expressions

// Exercises Level One

/*
Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
*/
const text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
const stringNumArray = text.match(/\d+/g)
console.log(stringNumArray) // [ '4000', '10000', '5500' ]
const numArray = stringNumArray.map((element) => parseInt(element))
const [monthlySalary,annualBonus,monthlyOnlineCourseEarning] = numArray
console.log(monthlySalary)  // 4000 , worked
const totalAnnualIncome = 12 * monthlySalary + annualBonus + 12 * monthlyOnlineCourseEarning
console.log(totalAnnualIncome)  // 124000

/*
The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. 
Extract these numbers and find the distance between the two furthest particles.
points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
sortedPoints =  [-4, -3, -1, -1, 0, 2, 4, 8]
distance = 12
*/
const sentence = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.'
const stringpositions = sentence.match(/-\d|\d/g) // ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
console.log(stringpositions)
const numericPositions = stringpositions.map((item) => parseInt(item))
console.log(numericPositions) // [-1, 2, -4, -3, -1, 0, 4, 8]
numericPositions.sort((a,b)=>  a-b)
// has been sorted in place.
console.log(numericPositions)
const distance = numericPositions.slice(-1) - numericPositions[0]
console.log(distance)  // 12

/*
Write a pattern which identify if a string is a valid JavaScript variable

isValidVariable('first_name') # True
isValidVariable('first-name') # False
isValidVariable('1first_name') # False
isValidVariable('firstname') # True
*/

function isValidVariable(variableName) {
    // Check if the variable name starts with a letter, $ or _
    if (!variableName.match(/^[a-zA-Z$_]/)) {
      return false;
    }
    
    // Check if the variable name contains only letters, numbers, $ or _
    if (!variableName.match(/^[a-zA-Z0-9$_]*$/)) {
      return false;
    }
    
    // Check if the variable name is a reserved word
    if (['break', 'case', 'catch', 'continue', 'debugger', 'default', 'delete', 'do', 'else', 'finally', 'for', 'function', 'if', 'in', 'instanceof', 'new', 'return', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while', 'with'].indexOf(variableName) !== -1) {
      return false;
    }
    
    // If all checks pass, the variable name is valid
    return true;
 }
 console.log(isValidVariable('first_name')) // true
 console.log(isValidVariable('first-name')) // false
 console.log(isValidVariable('1first_name')) // false
 console.log(isValidVariable('firstname'))   // true


 // Exercises Level Two


 /*
 Write a function called tenMostFrequentWords which get the ten most frequent word from a string?

    paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
    console.log(tenMostFrequentWords(paragraph))
    [
    {word:'love', count:6},
    {word:'you', count:5},
    {word:'can', count:3},
    {word:'what', count:2},
    {word:'teaching', count:2},
    {word:'not', count:2},
    {word:'else', count:2},
    {word:'do', count:2},
    {word:'I', count:2},
    {word:'which', count:1},
    {word:'to', count:1},
    {word:'the', count:1},
    {word:'something', count:1},
    {word:'if', count:1},
    {word:'give', count:1},
    {word:'develop',count:1},
    {word:'capabilities',count:1},
    {word:'application', count:1},
    {word:'an',count:1},
    {word:'all',count:1},
    {word:'Python',count:1},
    {word:'If',count:1}]
console.log(tenMostFrequentWords(paragraph, 10))
[{word:'love', count:6},
{word:'you', count:5},
{word:'can', count:3},
{word:'what', count:2},
{word:'teaching', count:2},
{word:'not', count:2},
{word:'else', count:2},
{word:'do', count:2},
{word:'I', count:2},
{word:'which', count:1}
]
*/

paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`


function tenMostFrequentWords(paragraph, limit = 10) {
    // Remove all non-alphanumeric characters and convert to lowercase
    paragraph = paragraph.toLowerCase().replace(/[^a-z0-9 ]+/g, '');
    
    // Split the paragraph into words
    const words = paragraph.split(/\s+/);
    
    // Count the frequency of each word
    const frequencies = {};
    for (const word of words) {
      frequencies[word] = (frequencies[word] || 0) + 1;
    }
    
    // Convert the frequencies object into an array of {word, count} objects
    const entries = Object.entries(frequencies).map(([word, count]) => ({word, count}));
    
    // Sort the entries by count (descending)
    entries.sort((a, b) => b.count - a.count);
    
    // Return the first `limit` entries
    return entries.slice(0, limit);
  }
  
console.log(tenMostFrequentWords(paragraph, 5))

// Exercises Level Three


/*
Write a function which cleans text. Clean the following text.
  sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
  console.log(cleanText(sentence))
 I am a teacher and I love teaching There is nothing as more rewarding as educating and empowering people I found teaching more interesting than any other jobs Does this motivate you to be a teacher

*/

function cleanText(text) {
    // Remove all non-alphanumeric characters and convert to lowercase
    text = text.replace(/[^A-Za-z0-9 ]+/g, '');
    
    // Replace multiple spaces with a single space
    text = text.replace(/\s+/g, ' ');
    
    return text.trim();
  }
const sentence2 = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

console.log(cleanText(sentence2))  // worked
/* output
I am a teacher and I love teaching There is nothing as more rewarding as educating and empowering people I found teaching more interesting than any other jobs Does this motivate you to be a teacher
*/



/*
Write a function which find the most frequent words. After cleaning, count three most frequent words in the string.

 console.log(mostFrequentWords(cleanedText))
 [{word:'I', count:3}, {word:'teaching', count:2}, {word:'teacher', count:2}]

*/

function mostFrequentWords(text, limit = 3) {
    // Split the text into words
    const words = text.split(/\s+/);
    
    // Count the frequency of each word
    const frequencies = {};
    for (const word of words) {
      frequencies[word] = (frequencies[word] || 0) + 1;
    }
    
    // Convert the frequencies object into an array of {word, count} objects
    const entries = Object.entries(frequencies).map(([word, count]) => ({word, count}));
    
    // Sort the entries by count (descending)
    entries.sort((a, b) => b.count - a.count);
    
    // Return the first `limit` entries
    return entries.slice(0, limit);
  }

console.log(mostFrequentWords(cleanText(sentence2))) 

/* output
[
  { word: 'I', count: 3 },
  { word: 'a', count: 2 },
  { word: 'teacher', count: 2 }
]
*/