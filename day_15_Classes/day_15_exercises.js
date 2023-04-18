// 30 Days of JavaScript
// Day 15
// Classes

// Exercises Level One
// Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
    constructor(name,age,color,legs) {
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }
    getAnimalInfo() {
        return `${this.name} is a ${this.age} years old ${this.color} animal with ${this.legs} legs`
    }
    getAnimalName() {
        return this.name
    }
    getAnimalAge() {
        return this.age
    }
    setAnimalColor(newColor) {
        this.color = newColor
    }
}
const animal1 = new Animal('Dog',5,'red',4)
console.log(animal1)
console.log(animal1.getAnimalInfo())

// Create a Dog and Cat child class from the Animal Class.
class Dog extends Animal {
  constructor(name,age,color,legs,barkingSound){
    super(name,age,color,legs)
    this.barkingSound = barkingSound
  }
  description() {
    console.log('Dogs are also animals')
  }
  getDogInfo() {
    return `${this.name} is a ${this.age} years old ${this.color} ${this.legs} legged dog that barks like ${this.barkingSound} `
  }
}

class Cat extends Animal {
    constructor(name,age,color,legs,furrs,meow) {
        super(name,age,color,legs) 
        this.furrs = furrs
        this.meow = meow
    }
    
    description() {
        console.log('Cats are also animals')

    }
    getCatInfo() {
        return `${this.name} is a ${this.age} years old ${this.color} ${this.legs} legged cat that meows like ${this.meow}` 
    }
}  




const testCat = new Cat('Tom',3,'black',4,'thick furrs','meoowwww')
console.log(testCat)
console.log(testCat.getCatInfo())

const testDog = new Dog('Spike',4,'green',4,'wooh wooh')
console.log(testDog)
console.log(testDog.getDogInfo())


// Exercises Level Two

// Override the method you create in Animal class

// changing the getAnimalInfo method in the Animal class to fit a cat
class CatV2 extends Animal {
    constructor(name,age,color,legs,furrs,meow) {
        super(name,age,color,legs) 
        this.furrs = furrs
        this.meow = meow
    }
    getAnimalInfo() {
        return `${this.name} is a ${this.age} years old ${this.color} ${this.legs} legged cat that meows like ${this.meow}` 
    }
}

const testCat2  = new CatV2('Bruno',2,'blue',4,'thick','meoeow')
console.log(testCat2)
console.log(testCat2.getAnimalInfo())

// Exercises Level Three

/*
Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.
ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

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
console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
// you output should look like this
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

class Statistics {
    constructor(data = []) {
        this.data = data
    }
    // Add data to the statistics object
    addData(data) {
    this.data = [...this.data, ...data];
    };
    count(){
      return this.data.length;
    };
    sum() {
      return this.data.reduce((acc, val) => acc + val, 0);
    };
    min() {
      return Math.min(...this.data);
    };
    max() {
      return Math.max(...this.data);
    };
    range() {
      return this.max() - this.min();
    };
    mean() {
      return this.sum() / this.count();
    };
    median() {
      const sorted = this.data.sort();
      const mid = Math.floor(this.count() / 2);
      return this.count() % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
    };
    mode() {
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
    };
    var(){
      const mean = this.mean();
      return this.data.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / this.count();
    };
    std() {
      return Math.sqrt(this.var());
    };
    freqDist() {
      const freq = {};
      this.data.forEach(val => freq[val] = (freq[val] || 0) + 1);
      return Object.entries(freq).sort((a, b) => b[1] - a[1]).map(val => [val[1] / this.count() * 100, parseInt(val[0])]);
    };
    describe() {
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

agesStat = new Statistics(ages)
console.log(agesStat)
console.log(agesStat.describe())

/*
Create a class called PersonAccount.
 It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense,
accountInfo,addIncome, addExpense and accountBalance methods.
Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
*/

class PersonAccount {
    constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.incomes = new Map();
      this.expenses = new Map();
    }
  
    addIncome(description, amount) {
      this.incomes.set(description, amount);
    }
  
    addExpense(description, amount) {
      this.expenses.set(description, amount);
    }
  
    totalIncome() {
      let sum = 0;
      for (let value of this.incomes.values()) {
        sum += value;
      }
      return sum;
    }
  
    totalExpense() {
      let sum = 0;
      for (let value of this.expenses.values()) {
        sum += value;
      }
      return sum;
    }
  
    accountBalance() {
      return this.totalIncome() - this.totalExpense();
    }
  
    accountInfo() {
      return `${this.firstname} ${this.lastname}\nIncome: ${this.totalIncome()}\nExpense: ${this.totalExpense()}\nBalance: ${this.accountBalance()}`;
    }
  }

const lukman = new PersonAccount('Lukman', 'Aliyu')

console.log(lukman)
lukman.addExpense('Purchases',5000)
lukman.addExpense('Online course fees',40000)
lukman.addIncome('salary',70000)
lukman.addIncome('side hustle',100000)
// let's play around with  the console object to close this out. 
console.group('Expenses and Incomes')
console.table(lukman.expenses)
console.table(lukman.incomes)
console.groupEnd('Expenses and Purchases')


console.group('Total expenses')
console.log(lukman.totalExpense())
console.groupEnd('Total expenses')

console.group('Total income')
console.log(lukman.totalIncome())
console.groupEnd('Total income')

console.group('Account balance')
console.log(lukman.accountBalance())
console.groupEnd('Account balance')

console.group('Account Info')
console.log(lukman.accountInfo())
console.groupEnd('Account Info')

