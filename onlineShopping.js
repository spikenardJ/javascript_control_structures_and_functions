// Question 1: Exploring Conditional Statements and Loops

// Task 1: Implement a conditional statement to check if a user is logged in

let loggedIn = true;
let cart = ['Shirts', 'Shoes', 'Bread', 'Cell Phone', 'Candy Corn', 'The Pragmatic Programmer: Your Journey To Mastery, 20th Anniversary Edition (2nd Edition)', 'Tomato']
let isAvailable = ['Shirts', 'Shoes', 'Bread', 'Cell Phone', 'Candy Corn','Tomato']

if (loggedIn) {
    console.log("User is logged in.");
    // Task 2: If they are logged in, loop over the 'cart' array and log the list of available products 
    // to the user. If they are not logged in, tell the user they will need to log in before they can view their cart
    console.log("Your cart contains the following items:");
    for (let i = 0; i < cart.length; i++) {
        console.log(cart[i]);
        } console.log("The items in your cart that are available include:");
        for (let i = 0; i < isAvailable.length; i++) {
            console.log(isAvailable[i]);
    }

} else {
    console.log("User is not logged in. You will need to log in to view your cart.");
}
