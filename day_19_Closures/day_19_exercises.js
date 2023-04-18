// 30 Days of JavaScript
// Day 19
// Closures

// Exercises Level One

function counter() {
    let count = 0;
  
    function increment() {
      count++;
      console.log(`Count: ${count}`);
    }
  
    return increment;
  }
  
  // Create a closure
  const myCounter = counter();
  
  // Call the increment function multiple times
  myCounter(); // Output: Count: 1
  myCounter(); // Output: Count: 2
  myCounter(); // Output: Count: 3

// Exercises Level Two
// Create a closure which has three inner functions
function outer() {
    let counter = 0;
  
    function increment() {
      counter++;
    }
  
    function decrement() {
      counter--;
    }
  
    function display() {
      console.log(`Counter: ${counter}`);
    }
  
    return {
      increment,
      decrement,
      display
    };
  }
  
  // Create a closure
  const Counter = outer();
  
  // Call the inner functions to modify and display the counter value
  Counter.increment();
  Counter.increment();
  Counter.display(); // Output: Counter: 2
  
  Counter.decrement();
  Counter.display(); // Output: Counter: 1

// Exercises Level Three

/*
Create a personAccount out function. 
It has firstname, lastname, incomes, expenses inner variables. 
It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. 
Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
*/
function personAccount(firstName, lastName) {
    let incomes = [];
    let expenses = [];
    
    function addIncome(income, description) {
      incomes.push({
        amount: income,
        description: description
      });
    }
  
    function addExpense(expense, description) {
      expenses.push({
        amount: expense,
        description: description
      });
    }
  
    function totalIncome() {
      let sum = 0;
      for (let i = 0; i < incomes.length; i++) {
        sum += incomes[i].amount;
      }
      return sum;
    }
  
    function totalExpense() {
      let sum = 0;
      for (let i = 0; i < expenses.length; i++) {
        sum += expenses[i].amount;
      }
      return sum;
    }
  
    function accountInfo() {
      console.log(`Name: ${firstName} ${lastName}\nTotal Income: ${totalIncome()}\nTotal Expense: ${totalExpense()}`);
    }
  
    function accountBalance() {
      return totalIncome() - totalExpense();
    }
  
    return {
      addIncome,
      addExpense,
      accountInfo,
      accountBalance
    };
  }
  
  // Create a new person account
  const myAccount = personAccount("Lukman", "Aliyu");
  
  // Add some income and expenses
  myAccount.addIncome(1000, "Salary");
  myAccount.addIncome(200, "Bonus");
  myAccount.addExpense(500, "Rent");
  myAccount.addExpense(300, "Food");
  
  // Display the account information and balance
  myAccount.accountInfo(); // Output: Name: Lukman Aliyu, Total Income: 1200, Total Expense: 800
  console.log(`Account Balance: ${myAccount.accountBalance()}`); // Output: Account Balance: 400
  