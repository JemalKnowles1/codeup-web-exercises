(() => {
// EC6 Coding
    const add2 = function (num) {
        return num + 2
    }

    const add3 = num => num + 3

    console.log(add2(6))
    console.log(add3(6));

    const addition = (x, y) => x + y;

    console.log(addition(5, 4));

    const sayHello = (name = "DRAGON!") => {
        if (typeof name === "string" && isNaN(name)) {
            return `Hello, ${name}
            !`;
        } else {
            return "Hello, World!";
        }
    }
    console.log(sayHello('jeff'));
    console.log(sayHello(true));
    console.log(sayHello(".25"));
    console.log(sayHello());

    // without block scope
    if (true) {
        let myName = 'codeup';
    }
    let myName = "Jeff";
    console.log(myName);

    //arrays with for of loop
    const arr = ["Bill", "Dale", "Hank", "Boom"]
    //arr.forEach(name => console.log(name));
    for (const name of arr) {
        console.log(name)
        if (name === 'Dale') {
            console.log("POCKET SAND!");
            break;
        }
    }
// SHORT HAND
const userName = prompt("What is your username")
    let randomId = Math.floor(Math.random()*10) + 1;
    const user = {
         userName,
        id: randomId
    }
    console.log(user);


    //destructuring
    const anakin = {
        name: "Anakin",
        height: 7,
        fur: ['white', 'black'],
        gender: 'Male',
        dateOfBirth: "Aug 17th"
    };
    let {name, height} = anakin;
    console.log(name);
    console.log(height);
    anakin.name = "ben"
    console.log(anakin.name);
    // to the power of
    console.log(Math.pow(4,2))
    console.log(2**3)

})();
