// datatypes
/* Two types of datatypes, primitive - immutable and non-primitive data types
*/
let word = 'JavaScript'
word[0] = 'Y'
console.log(word)
console.log("Hello world")


let numOne = 3
let numTwo = 3

console.log(numOne == numTwo)      

let js = 'JavaScript'
let py = 'Python'

console.log(js == py)             

let lightOn = true
let lightOff = false

console.log(lightOn == lightOff) 

const pi = Math.PI
console.log(pi)

let randomNum = Math.random()         // generates 0 to 0.999
let numBtnZeroAndTen = randomNum * 11

console.log(numBtnZeroAndTen)         // this gives: min 0 and max 10.99

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
console.log(randomNumRoundToFloor)    // this gives between 0 and 10


let a = 2
let b = 3
console.log(`${a} is greater than ${b}: ${a > b}`)

let string = 'javascript'
console.log(string.toUpperCase())