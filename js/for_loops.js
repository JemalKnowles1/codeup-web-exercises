"use strict"

function showMultiplicationTable(){
    for(let i = 0; i <= 10; i++){
        console.log(`${5} * ${i} = ${5 * i}`);
    }
}
showMultiplicationTable()

    for(let i = 0; i < 10; i++){
    let randomNum = Math.floor(Math.random() * (200 - 20 + 1)) + 20;
        if(randomNum % 2 === 0 ){
            console.log(randomNum + ' is even')
        }else{
            console.log(randomNum + ' is odd')
        }
}


    for(let i = 0; i <= 9; i++){
        console.log(String(i).repeat(i))
    }


    for (let i = 100; i >= 5; i -= 5){
        console.log(i)
    }