// 30 Days of JavaScript
// Day 17
// Web Storages

// Exercises Level One
// Store you first name, last name, age, country, city in your browser localStorage.
localStorage.setItem('firstName','Lukman')
localStorage.setItem('lastName','Aliyu')
localStorage.setItem('age',29)
localStorage.setItem('country','Nigeria')
localStorage.setItem('city','Kaduna')

// Exercises Level Two
/*Create a student object. 
The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. 
Store the student object in your browser localStorage.
*/
const student = new Object()
student.firstName = 'Aminu'
student.lastName = 'Aliyu'
student.age = 28
student.skills = ['html','css','JavaScript','matlab','Python','Julia','R']
console.log(student)
const studentJson = JSON.stringify(student)
localStorage.setItem('student',studentJson)

// Exercises Level Three

/*
Create an object called personAccount. 
It has firstname, lastname, incomes, expenses properties 
and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. 
Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
Store the personAccount object in your browser localStorage
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
lukman.addExpense('Purchases',5000)
lukman.addExpense('Online course fees',40000)
lukman.addIncome('salary',70000)
lukman.addIncome('side hustle',100000)
// stringify before adding to the localStorage
const lukmanJson = JSON.stringify(lukman)
localStorage.setItem('lukman',lukmanJson)

/* As a reminder these are the other methods, all simple by the way
localStorage - to display the localStorage object
localStorage.clear() - to remove everything in the local storage
localStorage.setItem() - to store data in the localStorage. It takes a key and a value parameters.
localStorage.getItem() - to display data stored in the localStorage. It takes a key as a parameter.
localStorage.removeItem() - to remove stored item form a localStorage. It takes key as a parameter.
localStorage.key() - to display a data stored in a localStorage. It takes index as a parameter.
*/
