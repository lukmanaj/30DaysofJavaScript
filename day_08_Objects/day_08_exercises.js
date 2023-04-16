// 30 Days of JavaScript
// Day 08
// Objects

// Exercises Level One
// Create an empty object called dog
const dog = {}
// Print the the dog object on the console
console.log(dog)
/* Add name, legs, color, age and bark properties for the dog object. 
The bark property is a method which return woof woof
*/
dog.name = 'Spike'
dog.legs = 4
dog.color = 'black'
dog.age = 5
dog.barkProperty = function() {
    return 'woof woof'
}
// Get name, legs, color, age and bark value from the dog object
console.log(dog.name)
console.log(dog.legs)
console.log(dog.color)
console.log(dog.age)
console.log(dog.barkProperty())
// Set new properties the dog object: breed, getDogInfo
dog.breed = 'exotic'
dog.getDogInfo = function() {
    return `${this.name} is a ${this.age} years old ${this.color} ${this.breed} dog that has ${this.legs} legs, and barks ${this.barkProperty()}`
}
console.log(dog)
console.log(dog.getDogInfo())


// Exercises Level Two

// users Object

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

// Find the person who has many skills in the users object.
let mostSkilledUser = null;
let maxSkills = 0;

for (const user in users) {
  if (users[user].skills.length > maxSkills) {
    maxSkills = users[user].skills.length;
    mostSkilledUser = user;
  }
}

console.log(mostSkilledUser); // Asab


// Count logged in users, count users having greater than equal to 50 points from the following object.
let loggedInUsers = 0;
let usersWith50PointsOrMore = 0;

for (const user in users) {
  if (users[user].isLoggedIn) {
    loggedInUsers++;
  }

  if (users[user].points >= 50) {
    usersWith50PointsOrMore++;
  }
}

console.log(loggedInUsers); // 2
console.log(usersWith50PointsOrMore); // 3


//Find people who are MERN stack developer from the users object
const mernStackDevelopers = [];

for (const user in users) {
  if (
    users[user].skills.includes('MongoDB') &&
    users[user].skills.includes('Express') &&
    users[user].skills.includes('React') &&
    users[user].skills.includes('Node')
  ) {
    mernStackDevelopers.push(user);
  }
}

console.log(mernStackDevelopers); // ['Asab', 'Paul']

// Set your name in the users object without modifying the original users object

const myDetails = {
    name: 'Lukman ',
    email: 'lukman.j.aliyu@gmail.com',
    skills: ['HTML', 'CSS', 'JavaScript','Python','R','Julia'],
    age: 29,
    isLoggedIn: true,
    points: 60
  };
  
  const updatedUsers = {
    ...users,
    [myDetails.name]: myDetails
  };
  
  console.log(updatedUsers);
  
// Get all keys or properties of users object
const keys = Object.keys(users);
console.log(keys); // ['Alex', 'Asab', 'Brook', 'Daniel', 'John', 'Thomas', 'Paul']

// Get all the values of users object
const values = Object.values(users);
console.log(values);
// Use the countries object to print a country name, capital, populations and languages.
const countries_data = require('./countries_data');
for (let i = 0; i < countries_data.length; i++) {
    let country = countries_data[i];
    console.log("Country Name:", country.name);
    console.log("Capital:", country.capital);
    console.log("Population:", country.population);
    console.log("Languages:", country.languages.join(", "));
    console.log();
}


// Exercises Level Three

/* Create an object literal called personAccount. 
It has firstName, lastName, incomes, expenses properties and it has totalIncome, 
totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. 
Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
*/

const personAccount = {
    firstName: "Lukman",
    lastName: "Aliyu",
    incomes: [],
    expenses: [],
    totalIncome: function() {
        let total = 0;
        for (let i = 0; i < this.incomes.length; i++) {
            total += this.incomes[i].amount;
        }
        return total;
    },
    totalExpense: function() {
        let total = 0;
        for (let i = 0; i < this.expenses.length; i++) {
            total += this.expenses[i].amount;
        }
        return total;
    },
    accountInfo: function() {
        return "Name: " + this.firstName + " " + this.lastName + ", Income: " + this.totalIncome() + ", Expense: " + this.totalExpense();
    },
    addIncome: function(description, amount) {
        this.incomes.push({description: description, amount: amount});
    },
    addExpense: function(description, amount) {
        this.expenses.push({description: description, amount: amount});
    },
    accountBalance: function() {
        return this.totalIncome() - this.totalExpense();
    }
};
console.log(personAccount)

// The remaining questions are based on the following two arrays:users and products ()

const usersV2 = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];



const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

/*
Imagine you are getting the above users collection from a MongoDB database.
 a. Create a function called signUp which allows user to add to the collection.
If user exists, inform the user that he has already an account.
*/
function signUp(username, email, password) {
  // Check if user already exists in collection
  const userExists = usersV2.some(user => user.email === email);
  if (userExists) {
    console.log(`User with email ${email} already exists.`);
  } else {
    // Generate new user object
    const newUser = {
      _id: Math.random().toString(36).substr(2, 7), // Generate random ID
      username,
      email,
      password,
      createdAt: new Date().toLocaleString(), // Get current date and time
      isLoggedIn: false
    };
    // Add new user to collection
    usersV2.push(newUser);
    console.log(`User ${username} has been added.`);
  }
}

signUp('lukmanaj','lukman.j.aliyu@gmail.com',12345)
console.log(usersV2)

// b. Create a function called signIn which allows user to sign in to the application

function signIn(email, password) {
    // Check if user with given email and password exists in collection
    const user = usersV2.find(user => user.email === email && user.password === password);
    if (user) {
      user.isLoggedIn = true;
      console.log(`Welcome back, ${user.username}!`);
    } else {
      console.log('Invalid email or password.');
    }
  }
  
signIn('lukman.j.aliyu@gmail.com',12345)
/*
The products array has three elements and each of them has six properties. 
a. Create a function called rateProduct which rates the product 
b. Create a function called averageRating which calculate the average rating of a product
*/
function rateProduct(productId, userId, rating) {
    const product = products.find(p => p._id === productId);
    if (!product) {
      console.log("Product not found");
      return;
    }
  
    const userRatingIndex = product.ratings.findIndex(r => r.userId === userId);
    if (userRatingIndex !== -1) {
      // User has already rated the product, update their rating
      product.ratings[userRatingIndex].rate = rating;
    } else {
      // User has not yet rated the product, add their rating
      product.ratings.push({ userId, rate: rating });
    }
  }
rateProduct('aegfal','w1hratw',5)
console.log(products)
  
function averageRating(productId) {
    const product = products.find(p => p._id === productId);
    if (!product || !product.ratings.length) {
      console.log("Product not found or has no ratings");
      return;
    }
  
    const totalRating = product.ratings.reduce((acc, r) => acc + r.rate, 0);
    const avgRating = totalRating / product.ratings.length;
    return avgRating.toFixed(1);
  }
  
console.log(averageRating('eedfcf'))
/*
Create a function called likeProduct. 
This function will helps to like to the product if it is not liked and remove like if it was liked.
*/

function likeProduct(productId, userId) {
    const product = products.find(p => p._id === productId);
    if (!product) {
      console.log("Product not found");
      return;
    }
  
    const userLikedIndex = product.likes.indexOf(userId);
    if (userLikedIndex !== -1) {
      // User has already liked the product, remove their like
      product.likes.splice(userLikedIndex, 1);
      console.log("Removed like from product");
    } else {
      // User has not yet liked the product, add their like
      product.likes.push(userId);
      console.log("Liked product");
    }
  }
  

likeProduct('aegfal','w1hratw')

