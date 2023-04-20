"use strict"

let aNumber = parseFloat(prompt('Pick a number between 1 and 50, that is not even. :'))

while(true) {
    if (aNumber % 2 === 0 || aNumber > 50 || aNumber < 1) {
        alert('Your input is incorrect ')
        aNumber = parseFloat(prompt('Pick a number between 1 and 50:'))
    }else{
        break;
    }
}

for (let i = 1; i<= 49; i++){
    if(i % 2 === 0){
        continue;
    }
    if (i === 27) {
        console.log('Yikes skipping this number ' + i);
    }else{
        console.log('here is an odd number ' + i)
    }
}

let multiple = 2
while(multiple <= 65536){
    console.log(multiple)
    multiple ++ 
}