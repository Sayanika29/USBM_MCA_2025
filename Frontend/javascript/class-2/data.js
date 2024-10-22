// Null
//let user;

let user = null;

console.log(typeof null); //object
console.log(user);

let data;
console.log(typeof data);
console.log(data);

//Number
//Number represents both integers and floating-point numbers in java
//Scriptprocessornode

 
/*
dynamically typed - java script
static, dynamic and hybrid web site
integers = whole number.
whole number = positive number + negative number
floating number in javascript


*/

let number = 50;
let decimal_number = 1.0001;
let pi = 3.141;
let roll_no = 144;
console.log(typeof number);
console.log(typeof decimal_number);
console.log(typeof pi);
console.log(typeof roll_no);

//Addition
let num1 = 30;
let num2 = 20;
let sum = num1 + num2;
console.log("Addition" + sum);

//Substraction
let sub = num1 - num2;

//Multiplication
let mul = num1 * num2;

//Division
let div = num1 / num2;

//Modulus
let mod = num1 % num2;

console.log("Substraction" +sub+" \n Multiplication "+mul+" \n Division" +div+"\n Modulus "+mod);

let num = 283838383838383844444444444444444444444444444444444;
console.log(typeof num);
console.log(num);

let symbol1 = Symbol("sym1");
let symbol2 = Symbol("sym2");
console.log(symbol1 === symbol2);
let num5 = 0;
let num6 = 0;
let num7 = num5/num6;
console.log(num7);

let num8 = "Sushree";
let num9 = 50;
let num10 = num8/num9;
console.log(num10);

let num11 = 10;
let num12 = 0;
let num14 = num11/num12;
console.log(num14);
let num30 = num12/num11;
console.log(num30);


//Boolean
/*

*/
let ismarried = false;
let issingle = true;
console.log(typeof ismarried);
console.log(typeof issingle);

let name = "Sayanika";
console.log(name);
let name1 ="Sayu$07" ;
let nam2 = "Sayanika29";
console.log(name1+nam2);
console.log(typeof nam2);
console.log(nam2, name1);


let myName = "My name is Sushree Sayanika Nayak";
console.log('HYy ${myName} !');
let city = "Bhubaneswar";
let batch = "2025";
let college = "USBM";
console.log('  \n \n HYy! ${MyName}. I am from ${city}. I am studying in ${college}, of batch ${batch}'); //using template literal
console.log(city.length);
