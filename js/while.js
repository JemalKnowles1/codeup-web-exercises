"use strict";


let multiple = 2
while(multiple <= 65536){
    console.log(multiple)
    multiple = multiple * 2
}


//Ice Cream Cone Proj

let conesLeft = Math.floor(Math.random() * 50) + 50;

do{
    let conesBought = Math.floor(Math.random() * 5) + 1;
    if (conesBought <= conesLeft){
        conesLeft -= conesBought
        console.log(`${conesLeft} cones have been sold... `)
    }else {
        console.log(`if there are enough cones Cannot sell you ${conesBought} cones! i only have ${conesLeft} `)
    }
    } while(conesLeft > 0)
        console.log("No more cones left to sell.");




