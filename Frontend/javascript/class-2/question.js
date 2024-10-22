// Question 1:
let foodprice= 450;
let drinkprice= 275;
// calculate total bill
let totalbill= foodprice + drinkprice;
console.log("totalbill is:"+totalbill); //725
let tip= totalbill * 0.10;
console.log("tip is:"+tip);  //72.5
//with tip
let finalamount= totalbill+tip; //797.5
console.log(`final amount including tip is: ${finalamount}`);


//question2

let originalprice = 15000;
let discountprice = 1000;
let finalprice = originalprice - discountprice ;//14000
console.log(`final price of the product is:${finalprice}`);//14000


 //Question 3:
 let productprice = 2500;
 let salestaxrate = 8;
 let salestax = (productprice * salestaxrate)/100;
 console.log("salestax is: "+ salestax);
 let totalprice = productprice +salestax ;
 console.log(`the total price after adding sales tax is:${totalprice}`); //2700
