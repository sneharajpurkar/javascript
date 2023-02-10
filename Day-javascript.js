console.log("first")
var number1 = 10;
var number2 = 10;
console.log("second")
var number3 = 10;
var number4 = 10;
console.log("third")


var number1 = 10;
var number2 = 20;
if(number2 > number1){
    console.log("Number 2 is greater than Number 1");
}else {
    console.log("for False");
}

var number1 = 10;
var number2 = 20;
if(number2 <= number1){
        console.log("number2 is greater than number1");
}else{
        console.log("its false");
}

// Q- Check is user applicable for licence or not?

var userage = 18;
if(userage > 18){
    console.log("user is applicable for liecence")
}else if(userage == 18){
    console.log("user is applicable for learning liecence")
}else{
    console.log("user is not applicable for liecence")
}

var userage = 21;
if(userage > 18){
    console.log("user is applicable for liecence")
}else if(userage == 18){
    console.log("user is applicable for learning liecence")
}else{
    console.log("user is not applicable for liecence")
}

var userage = 0;
if(userage > 18){
    console.log("user is applicable for liecence")
}else if(userage == 18){
    console.log("user is applicable for learning liecence")
}else{
    console.log("user is not applicable for liecence")
}

// Q- check given number is even or odd and display the result

var userNumber = 89;
if((userNumber % 2) == 0 ){
    console.log("Provided number is Even !");
}else{
    console.log("Provided number is Odd !");
}

var userNumber = 80;
if((userNumber % 2) == 0 ){
    console.log("Provided number is Even !");
}else{
    console.log("Provided number is Odd !");
}

// switch

var number = 2;
switch(number){
    case number == 1:
        console.log("Number is 1!");
        break;
    case number == 2:
        console.log("Number is 2!");
        break;
    case number == 3:
        console.log("Number is 3!");
        break;
    default:
        console.log("Number is different from 1,2,3!");   
}

var number = 2;
switch(number){
    case 1:
        console.log("Number is 1!");
        break;
    case 2:
        console.log("Number is 2!");
        break;
    case 3:
        console.log("Number is 3!");
        // break;
        break;
    default:
        console.log("Number is different from 1,2,3!");   
}

var expr = 'papayas';
switch (expr) {
    case 'oranges':
        console.log('oranges');
        break;
    case 'papayas':
        console.log('papayas');
        break;
    default:
        console.log(`sorry, we are out of ${expr}.`);
        break;
}

// template literals

var myName = 'Sneha';
var myCity = 'Mangaon';
console.log("My name is",myName, "and i'm from mangaon!")
console.log(`my name is ${myName}  and i'm from ${myCity}!`)