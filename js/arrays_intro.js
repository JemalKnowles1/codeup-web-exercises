"use strict";


// declare an array
(function(){
    let emptyArr = [];
    console.log(Array.isArray(emptyArr))

    let cheeses = ["cheddar", "string", "bleu"]

    // let falsyValue = [0, "", false, undefined, null] // you may collect different data types in an array
// it may cause unintended results with loops/ iterative structure
    console.log(cheeses[1])// 1
    console.log(cheeses[0].indexOf("cheddar"))// 0
    console.log(cheeses.indexOf("random"))// -1
    console.log(cheeses.length)
    console.log(cheeses[cheeses.length -1]) // how to get the last element of an array

    // Creating a loop to print all cheese to console
    for(let i = cheeses.length -1; i >= 0; i--){
        console.log(cheeses[i])
    }
    //for each loop, elements are required, while indexes are optional
    cheeses.forEach(function (cheese,index,array) {
        console.log(`${index}: ${cheese}`);
        console.log(array)
        
    })
})();