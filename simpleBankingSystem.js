// Question 2: Exploring Functions in JavaScript

// Task 1: Create a function to handle deposits into a bank account

let accountBalance = 0;

function deposit(amount) {
    if (amount > 0) {
        accountBalance += amount;
        console.log(`You deposited $${amount} into your bank account. Your new bank account balance is $${accountBalance}.`);
    } else {
        console.log("Your deposit must be greater than $0.00.");
    }
}

// Task 2: Implement a function to handle withdrawals from a bank account

function withdraw(amount) {
    if (amount <= accountBalance) {
        accountBalance -= amount;
        console.log(`You withdrew $${amount} from your bank account. Your new bank account balance is $${accountBalance}.`);
    } else {
        console.log("Insufficient funds.");
    }
}

// Task 3: Develop a function to check the current balance of the account

function checkBalance() {
    console.log(`Your bank account balance is $${accountBalance}.`);
}

deposit(3000);
withdraw(500);
checkBalance();