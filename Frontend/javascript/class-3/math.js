 //Mathematical Operator:
 let num1 = 5;
 let num2 = 3;
  let result = num1 + num2; // addition
  let result1 = num1 - num2; // substraction
  let result2 = num1 * num2; // multiplication
  let result3 = num1 / num2; // division

// Modulo Operator :
// To find out remainder

 let num3 = 30;
 let even = num3 % 2;
 console.log(even);

//  Exponentiation Operator

let square = 2 ** 2;
let cube = 2 ** 3;
 console.log(square);
 console.log(cube); 

// Relational Operator :
// To compare two values
// `!` --> Not Operator
 console.log(10 > 5); // Boolean
 console.log(10 < 5); // Boolean
 console.log(5 >= 5); // Boolean
 console.log(10 > !5); // Boolean
 console.log(!5); // Boolean

// Equality Operator :
// `==` : Value check
// `===` : Value and Data type check

 console.log(15 == 15); // Boolean
 console.log(15 == 6);
 console.log(15 == "15");
 console.log(15 === "15");
 console.log(15 != "115");
 console.log(15 !== "15");

// Conditional
// if (condition) {
// true code to be executed here
// }

// Falsy value :
// false, 0, -0, "",``,'', null, undefined, NaN

 if (-0.0505) {
   console.log("It is true");
 }

// Task-1:
// Given total_bill, discount_start_price if you satisfy the condition Print Discount
// Availaible Otherwise print No Discount

 let total_bill = 750;
 if (total_bill > 500) {
   console.log("Discount Available");
} else {
   console.log("No Discount");
 }

// Task-2 :
 let age = 60;
 if (age >= 60) {
 console.log("Senior");
} else if (age >= 18) {
   console.log("Adult");
} else {
  console.log("Minor");
}

// Task-3
// Check if (male) and then check (22+) then he can able to marry

let age1 = 24;
let gender = "female";

if (gender === "female") {
    if (age == 24) {
      console.log("She can marry");
    } else {
      console.log("She can't marry now");
    }
  } else {
    console.log("He is a male");
  }



// Check the vowel(a,e,i,o,u)

 let char = "c";

switch (char) {
   case "a":
    console.log("It's vowel");
    break; // to break the flow
   case "e":
    console.log("It's vowel");
    break;
   case "i":
    console.log("It's vowel");
    break;
   case "o":
     console.log("It's vowel");
     break;
   case "u":
     console.log("It's vowel");
     break;

   default:
    console.log("It's not a vowel");
    break;
 }

//week
let week = "wednesday";
switch (week){
    case "sunday":
        console.log("it is sunday");
        break;
    case  "monday":
        console.log("it is tuesday");
        break;
    case "wednesday":
        console.log("it is wednesday");
        break;

    case "thursday":
        console.log("it is thursday");
        break;
    case "friday":
        console.log("it is friday");
        break; 
    case "saturday":
        console.log("it is saturday");
        break;
    default:
        console.log("it is not a day");

}

// print all month

let monthnumber = 7;
switch (monthnumber) {
  case 1:
    console.log("january");
    break;
  case 2:
    console.log("february");
    break;
  case 3:
    console.log("march");
    break;
  case 4:
    console.log("april");
    break;
  case 5:
    console.log("may");
    break;
  case 6:
    console.log("june");
    break;
  case 7:
    console.log("july");
    break;
  case 8:
    console.log("august");
    break;
  case 9:
    console.log("september");
    break;
  case 10:
    console.log("october");
    break;
  case 11:
    console.log("november");
    break;
  case 12:
    console.log("december");
    break;
  default:
    console.log("invalid month number");
}