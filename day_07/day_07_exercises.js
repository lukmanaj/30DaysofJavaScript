// 30 Days of JavaScript
// Day 07
// Functions
// Exercises Level One

// Declare a function fullName and it print out your full name.
function fullName() {
    let firstName = 'Lukman'
    let lastName = 'Aliyu'
    console.log(`${firstName} ${lastName}`)
}
fullName()  // Lukman Aliyu

// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullNameV2(firstName,lastName) {
    let fullName = `${firstName} ${lastName}`
    return fullName
}
console.log(fullNameV2('Lukman','Aliyu'))  // Lukman Aliyu

// Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(num1,num2) {
    let sum = num1 + num2
    return sum
}
console.log(addNumbers(4,5)) // 9

/* An area of a rectangle is calculated as follows: area = length x width.
 Write a function which calculates areaOfRectangle.
 */
function areaOfRectangle(length,width){
    let area = length * width
    return area
}
console.log(areaOfRectangle(7,8)) // 56

/* A perimeter of a rectangle is calculated as follows:
 perimeter= 2x(length + width). 
 Write a function which calculates perimeterOfRectangle.
 */
function perimeterOfRectangle(length,width) {
    let perimeter = 2 * (length + width)
    return perimeter
}
console.log(perimeterOfRectangle(9,11)) // 40

/*
A volume of a rectangular prism is calculated as follows: volume = length x width x height. 
Write a function which calculates volumeOfRectPrism.
*/
function volumeOfRectPrism(length,width,height) {
    let volume = length * width * height
    return volume
}
console.log(volumeOfRectPrism(5,4,3)) // 60

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(r) {
    let area = Math.round(Math.PI * r ** 2)
    return area
}
console.log(areaOfCircle(7))  // 154

/* Circumference of a circle is calculated as follows:
 circumference = 2πr. 
Write a function which calculates circumOfCircle
*/
function circumOfCircle(r) {
    let circumference = Math.round(2 * Math.PI * r)
    return circumference
}
console.log(circumOfCircle(7)) //44

// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function density(mass,volume) {
    let density = mass / volume
    return density
}
console.log(density(15,3)) // 5

/*
Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. 
Write a function which calculates a speed of a moving object, speed.
*/
function speedOfObject(distance,time) {
    let speed = distance / time 
    return speed
}
console.log(speedOfObject(20,5)) // 4

// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function weightOfSubtance(mass) {
    const gravity = 9.81
    let weight = mass * gravity
    return weight
}
console.log(weightOfSubtance(30))  // 294.3

/*
Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. 
Write a function which convert oC to oF convertCelsiusToFahrenheit.
*/
function convertCelsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32
    return fahrenheit
}
console.log(convertCelsiusToFahrenheit(0)) // 32

/*
Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. 
Write a function which calculates bmi. 
BMI is used to broadly define different weight groups in adults 20 years old or older.
Check if a person is underweight, normal, overweight or obese based the information given below.

The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more
*/
function calculateBodyMassIndex(weight,height) {
    let bmi = weight/ height ** 2
    return bmi
}
console.log(calculateBodyMassIndex(67,1.76))  //21.63

function checkWeightGroup(bmi) {
    let weightGroup;
    if (bmi < 18.5) {
        weightGroup = 'Underweight'
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        weightGroup = 'Normal'
    } else if (bmi >= 25 && bmi <= 29.9) {
        weightGroup = 'Overweight'
    } else {
        weightGroup = 'Obese'
    }
    return weightGroup
}
console.log(checkWeightGroup(calculateBodyMassIndex(70,1.7))) // normal

/* Write a function called checkSeason, 
it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
*/
function checkSeason(month) {
    month = month.toLowerCase()
    let season;
    switch(true){
       case ['september','october','november'].includes(month):
       season = 'Autumn'
       break
       case ['december','january','february'].includes(month):
       season = 'Winter'
       break
       case ['march','april','may'].includes(month):
       season = 'Spring'
       break
       case ['june','july','august'].includes(month):
       season = 'Summer'
}
   return season
}
console.log(checkSeason('SEPtember')) // autumn

/*
Math.max returns its largest argument. 
Write a function findMax that takes three arguments and returns their maximum without using Math.max method.

console.log(findMax(0, 10, 5))
10
console.log(findMax(0, -10, -2))
0
*/
function findMax(a,b,c) {
    const arr = [a,b,c]
    let max = 0
    for (const item of arr) {
        if (item > max){
            max = item
        }
    }
  return max
}
console.log(findMax(2000,500,9)) // 2000

// Exercises Level Two
/*
Linear equation is calculated as follows: ax + by + c = 0. 
Write a function which calculates value of a linear equation, solveLinEquation.
*/
function solveLinEquation(a,b,c,x,y) {
    let solution = a * x + b * y + c  
    return solution
}
console.log(solveLinEquation(1,2,3,5,6)) // 20

/*
Quadratic equation is calculated as follows: ax2 + bx + c = 0.
 Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}
*/

function solveQuadEquation(a,b,c) {
    let x1, x2;
    let result;
    x1 = (-b + Math.sqrt( b ** 2 - 4 * a * c))/ (2 * a)
    x2 = (-b - Math.sqrt( b ** 2 - 4 * a * c))/ (2 * a)
    if (x1 === x2) {
        result = x1
    } else {
        result = [x1,x2]
    }
    return result
}
console.log(solveQuadEquation(1,-6,9)) // 3
console.log(solveQuadEquation(1,5,6)) // [ -2, -3 ]

// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array
function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
printArray(['a','b','c'])
/*
Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

showDateTime()
08/01/2020 04:08
*/

function showDateTime(){
    let date = new Date();
    let year = date.getFullYear();
    let month = ('0' + (date.getMonth() + 1)).slice(-2);
    let day = ('0' + date.getDate()).slice(-2);
    let hour = ('0' + date.getHours()).slice(-2);
    let minute = ('0' + date.getMinutes()).slice(-2);
    let formattedDate = `${day}/${month}/${year} ${hour}:${minute}`;
    return formattedDate
}
console.log(showDateTime()) // 15/04/2023 18:42

/* Declare a function named swapValues. This function swaps value of x to y.

swapValues(3, 4) // x => 4, y=>3
swapValues(4, 5) // x = 5, y = 4
*/

/* Declare a function named reverseArray. 
It takes array as a parameter and it returns the reverse of the array (don't use method).

console.log(reverseArray([1, 2, 3, 4, 5]))
//[5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C']))
//['C', 'B', 'A']
*/
function reverseArray(arr) {
  const revArr = []
  for (let i = arr.length-1; i >= 0; i--) {
    revArr.push(arr[i])
  }
  return revArr
}
console.log(reverseArray([1, 2, 3, 4, 5]))
console.log(reverseArray(['A', 'B', 'C']))

// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizeArray(arr) {
   const capArr = []
   for (const item of arr) {
    capArr.push(item.toUpperCase())
   }
   return capArr
}

console.log(capitalizeArray(['coding','is','fun']))

// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem(arr,item) {
    arr.push(item)
    return arr
}
console.log(addItem([1,2,3,4],5))

// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
function removeItem(arr,index) {
    arr.splice(index,1)
    return arr
}
console.log(removeItem([1,2,3,4],3))

// Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers(num){
    let sum = 0
    for (let i = 0; i <= num; i++){
        sum += i
    }
    return sum
}
console.log(sumOfNumbers(9))

// Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
function sumOfOdds(num) {
    let sumOdds = 0
    for (let i = 0; i <= num; i++){
    if (i % 2 === 1) {
        sumOdds += i
    }
    }
    return sumOdds
}
console.log(sumOfOdds(9))

// Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
function sumOfEvens(num) {
    let sumEvens = 0
    for (let i = 0; i <= num; i++){
        if (i % 2 === 0) {
            sumEvens += i
        }
        }
    return sumEvens
}
console.log(sumOfEvens(9))

/*
Declare a function name evensAndOdds . 
It takes a positive integer as parameter and it counts number of evens and odds in the number.

evensAndOdds(100);
The number of odds are 50.
The number of evens are 51.
*/
function evensAndOdds(num) {
    let numEvens = 0
    let numOdds = 0
    for (let i = 0; i <= num; i++) {
        if (i % 2 === 0) {
            numEvens += 1
        } else {
            numOdds += 1
        }
        
    }
    return `The number of odds are ${numOdds}.\nThe number of evens are ${numEvens}`
}
console.log(evensAndOdds(100))

/*
Write a function which takes any number of arguments and return the sum of the arguments

sum(1, 2, 3) // -> 6
sum(1, 2, 3, 4) // -> 10
*/

function sum() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
    return sum
}
console.log(sum(1,2,3)) // 6
console.log(sum(1,2,3,4)) // 10


// Write a function which generates a randomUserIp
function randomUserIp() {
    const maxOctetValue = 255;
    const octets = [];
    for (let i = 0; i < 4; i++) {
        octets.push(Math.floor(Math.random() * (maxOctetValue + 1)));
    }
    const ip = octets.join('.');
    return ip
}
console.log(randomUserIp()) // 120.243.72.155

// Write a function which generates a randomMacAddress
function randomMacAddress() {
    const hexValues = '0123456789ABCDEF';
    const octets = [];
    for (let i = 0; i < 6; i++) {
        let hexString = ''
        for (let j = 0; j < 2; j++) {
            hexString += hexValues.charAt(Math.floor(Math.random() * hexValues.length));
        }
        octets.push(hexString)
    }
    const mac = octets.join(':');
    return mac

}
console.log(randomMacAddress())  // 29:20:9C:0D:CC:F7
/*
Declare a function name randomHexaNumberGenerator. 
When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

console.log(randomHexaNumberGenerator());
'#ee33df'
*/
function randomHexaNumberGenerator() {
    let hexnum = '#';
   for (let i = 0; i < 6; i++) {
       let randomDigit = Math.floor(Math.random() * 16);
        hexnum += randomDigit.toString(16);
  }
  return hexnum

}
console.log(randomHexaNumberGenerator());  // #b96def




/*
Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

console.log(userIdGenerator());
41XTDbE
*/

function userIdGenerator() {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
  
    for (let i = 0; i < 7; i++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      id += characters[randomIndex];
    }
  
    return id;
}
console.log(userIdGenerator());  // WUq4hUA


// Exercises Level Three

/*
Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. 
It doesn’t take any parameter but it takes two inputs using prompt(). 
One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

userIdGeneratedByUser()
'kcsy2
SMFYb
bWmeq
ZXOYh
2Rgxf
'
userIdGeneratedByUser()
'1GCSgPLMaBAVQZ26
YD7eFwNQKNs7qXaT
ycArC5yrRupyG00S
UbGxOFI7UXSWAyKN
dIV0SSUTgAdKwStr
'
*/
function userIdGeneratedByUser() {
    const numChars = parseInt(prompt('Enter the numbet of characters: '))
    const numIds =  parseInt(prompt('Enter the number of ids required: '))
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const userIds = []
    for (let i = 0; i < numIds; i++) {
        let id = '';

    
    for (let j = 0; j < numChars; j++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      id += characters[randomIndex];
    }
    userIds.push(id)
}
    return userIds
}

// userIdGeneratedByUser()

/*
Write a function name rgbColorGenerator and it generates rgb colors.

rgbColorGenerator()
rgb(125,244,255)
*/
function rgbColorGenerator() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let rgbColor = `rgb(${red}, ${green}, ${blue})`

    return rgbColor

}
console.log(rgbColorGenerator())  // rgb(12, 130, 1)

// Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

function arrayOfHexaColors(numColors) {
  const hexValues = '0123456789ABCDEF';
  const colors = [];
  for (let i = 0; i < numColors; i++) {
    let color = '#';
    for (let j = 0; j < 6; j++) {
        color += hexValues.charAt(Math.floor(Math.random() * hexValues.length));
    }
    colors.push(color) ;
  }
  return colors;
}
console.log(arrayOfHexaColors(5)) // [ '#D3B47B', '#97F359', '#B26086', '#ADAAFF', '#1B4964' ]

// Write a function arrayOfRgbColors which return any number of RGB colors in an array.

function arrayOfRgbColors(numColors) {
    
    const rgbColorArray = []
    
    for (let i = 0; i < numColors; i++) {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        let rgbColor = `rgb(${red}, ${green}, ${blue})`
        rgbColorArray[i] = rgbColor
    }

    return rgbColorArray

}
console.log(arrayOfRgbColors(4)) //
/*
[
  'rgb(152, 253, 125)',
  'rgb(6, 218, 173)',
  'rgb(123, 82, 83)',
  'rgb(76, 77, 141)'
]
*/

// Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

function convertHexaToRgb(hexColor) {
    // remove the # from the beginning of the color code
    hexColor = hexColor.replace('#','');
    // convert the hex color to RGB values
    const red = parseInt(hexColor.substring(0,2),16);
    const green = parseInt(hexColor.substring(2,4),16);
    const blue = parseInt(hexColor.substring(4,6),16);

    const rgbColor = `rgb(${red}, ${green}, ${blue})`

    // return the RBG color string
    return rgbColor
}
console.log(convertHexaToRgb('#FF0000')) // rgb(255, 0, 0)

// Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

function convertRgbToHexa(rgbColor) {
        const rgbValues = rgbColor.match(/\d+/g);
        const r = parseInt(rgbValues[0]).toString(16).padStart(2, '0');
        const g = parseInt(rgbValues[1]).toString(16).padStart(2, '0');
        const b = parseInt(rgbValues[2]).toString(16).padStart(2, '0');
        return '#' + r + g + b;
      }
      


console.log(convertRgbToHexa('rgb(255,0,0)')) // ff0000


/* Write a function generateColors which can generate any number of hexa or rgb colors.

console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors('hexa', 1)) // '#b334ef'
console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
*/

function generateColors(colorType,numColors) {
    let colors;
    if (colorType === 'hexa') {
      colors = arrayOfHexaColors(numColors)
    } else if(colorType === 'rgb') {
      colors = arrayOfRgbColors(numColors)
    }
    return colors
}
console.log(generateColors('hexa',5))   // [ '#9C0A3A', '#AD919C', '#5CBF9E', '#5FC678', '#E254D8' ]
console.log(generateColors('rgb',4)) 
/*
[
  'rgb(83, 20, 64)',
  'rgb(80, 235, 6)',
  'rgb(252, 141, 61)',
  'rgb(93, 76, 201)'
]
*/


// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  }
console.log(shuffleArray([1,2,3,4,5]))
  
// Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
function factorial(num) {
    let product = 1
    for (let i = 1; i <= num; i++){
        product *= i
    }
    return product

    }
console.log(factorial(5)) // 120

// Call your function isEmpty, it takes a parameter and it checks if it is empty or not
function isEmpty(value) {
    if (value === null || value === undefined) {
      return true;
    }
    if (typeof value === 'string' || Array.isArray(value) || typeof value.splice === 'function') {
      return value.length === 0;
    }
    if (typeof value === 'object') {
      return Object.keys(value).length === 0;
    }
    return false;
  }
console.log(isEmpty('')) // true 

// Call your function sum, it takes any number of arguments and it returns the sum.
function sum() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
    return sum
}



/* Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. 
Check if all the array items are number types. If not give return reasonable feedback.
*/

function sumOfArrayItems(arr) {
    let sum = 0
    for (const item of arr) {
    if (typeof item !== 'number') {
        return 'Error: All items in the array must be numbers.';
          }
        sum += item
    }
    return sum
}
console.log(sumOfArrayItems([1,2,3,4,5])) // 15
console.log(sumOfArrayItems([1,2,'c'])) 
/*
Write a function called average, it takes an array parameter and returns the average of the items. 
Check if all the array items are number types. If not give return reasonable feedback.
*/
function average(arr) {
    let sum = 0
    let avg 
    for (const elem of arr) {
     if (typeof elem !== 'number') {
        return 'All items in the array must be numbers'
     }
        sum += elem
    }
    avg = sum/ arr.length
    return avg
}
console.log(average([1,2,3])) // 2
console.log(average([1,2,3,'r'])) // 2


/*
Write a function called modifyArray takes array as parameter and modifies the 
fifth item of the array and return the array.
If the array length is less than five it return 'item not found'.

console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
  'Not Found'
*/
function modifyArray(arr) {
    if (arr.length < 5) {
       return 'item not found'
    } else {
    arr[4] = arr[4].toUpperCase()
    return arr
    }
}
console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']))
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']))

// Write a function called isPrime, which checks if a number is prime number.
function isPrime(num) {
    // Check if the number is less than 2 (not a prime number)
    if (num < 2) {
      return false;
    }
    
    // Check if the number is 2 (a prime number)
    if (num === 2) {
      return true;
    }
    
    // Check if the number is even (not a prime number)
    if (num % 2 === 0) {
      return false;
    }
    
    // Check if the number is divisible by any odd number less than its square root
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) {
        return false;
      }
    }
    
    // If the number has passed all the checks, it is a prime number
    return true;
  }
console.log('checking primes: ')
console.log(isPrime(9))


// Write a functions which checks if all items are unique in the array.
function areAllItemsUnique(arr) {
    // Create a new Set object from the array (which will remove duplicates)
    const uniqueItems = new Set(arr);
    
    // Compare the size of the array to the size of the Set object
    // If they are equal, all items in the array are unique
    return uniqueItems.size === arr.length;
  }
  
console.log(areAllItemsUnique([1,2,3,4,4,5]))
console.log(areAllItemsUnique([1,2,3]))

// Write a function which checks if all the items of the array are the same data type.
function areAllItemsSameType(arr) {
    // Get the data type of the first item in the array
    const type = typeof arr[0];
    
    // Iterate through the array, checking if each item has the same data type as the first
    for (let i = 1; i < arr.length; i++) {
      if (typeof arr[i] !== type) {
        return false;
      }
    }
    
    // If all items have the same data type, return true
    return true;
  }
console.log(areAllItemsSameType([1,2,3,4,5]))
console.log(areAllItemsSameType([1,2,3,4,'c']))
 

/*
JavaScript variable name does not support special characters or symbols except $ or _. 
Write a function isValidVariable which check if a variable is valid or invalid variable.
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
console.log(isValidVariable('3cv'))
console.log(isValidVariable('cv'))


/*
Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.

sevenRandomNumbers()
[(1, 4, 5, 7, 9, 8, 0)]
*/
function sevenRandomNumbers() {
    const arr = [];
    while (arr.length < 7) {
      let randomNumber = Math.floor(Math.random() * 10);
      if (arr.indexOf(randomNumber) === -1) {
        arr.push(randomNumber);
      }
    }
    return arr;
  }
  

console.log(sevenRandomNumbers()) 



/*
Write a function called reverseCountries,
 it takes countries array and first it copy the array and returns the reverse of the original array
*/
function reverseCountries(countries) {
    // Copy the array
    const copiedCountries = countries.slice();
    
    // Reverse the copied array
    const reversedCountries = copiedCountries.reverse();
    
    // Return the reversed array
    return reversedCountries;
  }
// importing the countriesArr array from the countries_array.js file
const countriesArr = require('./countries_array');

// passing the newly imported array to the minted function
console.log(reverseCountries(countriesArr))
