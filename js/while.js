

let multiple = 2
while(multiple <= 65536){
    console.log(multiple)
    multiple = multiple * 2
}


//Ice Cream Cone Proj

let conesLeft = Math.floor(Math.random() * 50) + 50;

do {
    let conesBought = Math.floor(Math.random() * 5) + 1;
         if(conesBought <= conesLeft){
        console.log(`customer bought ${conesBought} cones`);
        conesLeft -= conesBought
        console.log(`${conesLeft} Cones Left! `)
       }
    }
    while (conesLeft > 0) {
        console.log("No more cones left to sell.");
    }






