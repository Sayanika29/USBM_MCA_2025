function printname(){
    console.log('Sayanika');
}
// printname();

function printname(Sayanika){
    console.log('My name is ${Sayanika}');

}
// PName("Subhasmita");
// pName("Sudhanshu");


function myDetails(name,age,city){
    console.log('My name is ${name}, and age is $(age), and from $(city)');
}
 //myPersonalDetails('Sayanika',24,'Bhubaneswar');

 function myPersonalDetails(name,age,city){
    return (`My name is ${name} and age is ${age} and from ${city}`);

 }
 let usbm = myPersonalDetails('Sayanika',24,'Bhubaneswar')
 console.log(usbm);

 //syntax
 //before

 //refference error means variable not initialized in memory
 console.log(pName('mamun'));
 const pName = (name) =>{
    return `my name is ${name}`;

 }
console.log(pName('Mamun'));
