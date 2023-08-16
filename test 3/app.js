// Q1: Create a block of code that you can use several times. 
// Q2: Write a function that takes first & last name and then it greets the user using his full name.
// Q3: Write a function that adds two numbers (input by user) and returns the sum of two numbers.
// Q4: Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the     desired result in your browser.
// Q5: Write a function that squares its argument.
// Q6: Write a function that computes factorial of a number.


// Q2:
function yourname(firstname , lastname) {
    console.log("your first name " + firstname + " your last name " + lastname + " ya ha");
}
yourname ( "hamza" , "asif" )


// Q3:

function number(num1 , num2) {
    let sum = num1 + num2
    console.log(sum);
}
number(20 , 60)


// Q4:

let num1 = +prompt("give your first value");
let num2 = +prompt("give your second value");
let operator = prompt("give your Operator");
switch(operator){
    case ("+"):
        let sum = num1 + num2
        console.log( sum );
        break
    case ("-"):
        let sub = num1 - num2
        console.log( sub );
        break   
    case ("*"):
        let multi = num1 * num2
        console.log( multi );
        break
    case ("/"):
        let divided = num1 / num2
        console.log( divided );
        break   
    default: 
    console.log("operator sahi dal bhai");                      
}
