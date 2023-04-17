// 30 Days of JavaScript
// Day 11
// Destructuring and Spreading

// Exercises Level One

const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]

// Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants
console.log([e, pi, gravity, humanBodyTemp, waterBoilingTemp])  // [ 2.72, 3.14, 9.81, 37, 100 ]

// Destructure and assign the elements of countries array to fin, est, sw, den, nor
const [fin, est, sw, den, nor] = countries
console.log([fin, est, sw, den, nor])  // [ 'Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway' ]

// Destructure the rectangle object by its properties or keys.
let {width,height,area,perimeter} = rectangle
console.log(width,height,area,perimeter)  // 20 10 200 60

// Exercises Level Two

// Iterate through the users array and get all the keys of the object using destructuring
// can't use destructuring for the keys
for (const user of users) {
    const keys = Object.keys(user);
    console.log(keys);
  }

// However, for the values we can do that as follows:
for (const {name, scores, skills, age} of users) {
    console.log(name, scores, skills, age);
  }
/*
Brook 75 [ 'HTM', 'CSS', 'JS' ] 16
Alex 80 [ 'HTM', 'CSS', 'JS' ] 18
David 75 [ 'HTM', 'CSS' ] 22
John 85 [ 'HTML' ] 25
Sara 95 [ 'HTM', 'CSS', 'JS' ] 26
Martha 80 [ 'HTM', 'CSS', 'JS' ] 18
Thomas 90 [ 'HTM', 'CSS', 'JS' ] 20
*/
// Find the persons who have less than two skills
const lessThanTwoSkills = []
for (const {name,scores,skills,age} of users) {
    if (skills.length < 2) {
    lessThanTwoSkills.push(name)
    }
}
console.log(lessThanTwoSkills) // [ 'John' ]

// Exercises Level Three
const countries_data = require('./countries_data')
// Destructure the countries object print name, capital, population and languages of all countries
for (const{name,capital,population,languages} of countries_data) {
    console.log(name,capital,population,languages)
}

/*
A junior developer structure student name, skills and score in array of arrays which may not easy to read. 
Destructure the following array name to name, skills array to skills, scores array to scores, 
JavaScript score to jsScore and React score to reactScore variable in one line.
  const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
  console.log(name, skills, jsScore, reactScore)
David (4) ["HTM", "CSS", "JS", "React"] 90 95
*/
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
const [name,skills,scores] = student
const [,,jsScore,reactScore] = scores
console.log(name, skills, jsScore, reactScore)  // David [ 'HTM', 'CSS', 'JS', 'React' ] 90 95

/*
Write a function called convertArrayToObject which can convert the array to a structure object.
    const students = [
        ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
        ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
      ]

    console.log(convertArrayToObject(students))
    [
      {
        name: 'David',
        skills: ['HTM','CSS','JS','React'],
        scores: [98,85,90,95]
      },
      {
        name: 'John',
        skills: ['HTM','CSS','JS','React'],
        scores: [85, 80,85,80]
      }
    ]
*/

const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ]

function convertArrayToObject(students) {
    return students.map(([name, skills, scores]) => ({ name, skills, scores }));
  }
console.log(convertArrayToObject(students))


/*
Copy the student object to newStudent without mutating the original object. In the new object add the following ?
Add Bootstrap with level 8 to the front end skill sets
Add Express with level 9 to the back end skill sets
Add SQL with level 8 to the data base skill sets
Add SQL without level to the data science skill sets
    const student = {
      name: 'David',
      age: 25,
      skills: {
        frontEnd: [
          { skill: 'HTML', level: 10 },
          { skill: 'CSS', level: 8 },
          { skill: 'JS', level: 8 },
          { skill: 'React', level: 9 }
        ],
        backEnd: [
          { skill: 'Node',level: 7 },
          { skill: 'GraphQL', level: 8 },
        ],
        dataBase:[
          { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience:['Python', 'R', 'D3.js']
      }
    }
The copied object output should look like this:

    {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        {skill: 'HTML',level: 10},
        {skill: 'CSS',level: 8},
        {skill: 'JS',level: 8},
        {skill: 'React',level: 9},
        {skill: 'BootStrap',level: 8}
      ],
      backEnd: [
        {skill: 'Node',level: 7},
        {skill: 'GraphQL',level: 8},
        {skill: 'Express',level: 9}
      ],
      dataBase: [
        { skill: 'MongoDB',level: 7.5},
        { skill: 'SQL',level: 8}
      ],
      dataScience: ['Python','R','D3.js','SQL']
    }
  }

*/

const studentV3 = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
  }



const newStudent = {
    ...studentV3,
    skills: {
      ...studentV3.skills,
      frontEnd: [
        { skill: 'Bootstrap', level: 8 },
        ...studentV3.skills.frontEnd,
      ],
      backEnd: [
        { skill: 'Express', level: 9 },
        ...studentV3.skills.backEnd,
      ],
      dataBase: [
        { skill: 'SQL', level: 8 },
        ...studentV3.skills.dataBase,
      ],
      dataScience: [
        ...studentV3.skills.dataScience,
        'SQL',
      ],
    },
  };
  
console.log(newStudent)