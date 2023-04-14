"use strict"
console.log('hello from external JS');

alert("Hello, welcome to my website!");

var userInput = prompt('What is your favorite color?');
console.log('The user entered: ' + userInput);

alert(userInput + "! That is also my favorite color!");

var userInput1 = prompt('You have rented the lil Merm for how days?');
console.log('The user entered: ' + userInput1);
var userInput2 = prompt('You have rented Brotha Bear for how many days:');
console.log('The user entered: ' + userInput2);
var userInput3 = prompt('You have rented Hercs for how many days');
console.log('The user entered: ' + userInput3);

var price = (Number(userInput1) + Number(userInput2) + Number(userInput3)) * 3

alert('Price is ' + price + '$' );

var userInput4 = prompt('Google Pays?');
console.log('The user entered: ' + userInput4);
var userInput5 = prompt('AWS Pays?');
console.log('The user entered: ' + userInput5);
var userInput6 = prompt('Facebook Pays?');
console.log('The user entered: ' + userInput6);

var totalpay = (Number(userInput4) + Number(userInput5) + Number(userInput6)) * 20

alert('Total Pay is '+ totalpay + '$')

function schedule(){
    var noConflict = confirm('If class is not currently full click ok! ');
    var conflict = confirm(' Does this conflict with your schedule? Click Ok If Not. ');
    if(noConflict === true && conflict === true) {
        alert('You will attend class!');
    } else {
        alert('You will not attend class');

    }
}
schedule()

function product(){
            var customerBuy = confirm('Has customer bought more than two items? Click Ok For Yes. ');
            var offer = confirm('Has the Offer expired? Click Cancel for Yes.');
            if(customerBuy === true && offer === true) {
                alert('You may continue with the order! ')
            } else {
                alert('Order will be canceled')
        {
            var premium = confirm('Are you premium customer? Click Ok For Yes. ');
            if(premium === true) {
                alert('You may continue with order! Thank you for being a premium member! ')
            } else {
                alert(' this order will be terminated. ')
            }
        }
    }

}
product()

