(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
let names = ["anakin", "ahsoka", "revan", "Obi"]

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log(names.length)
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(names[0])
    console.log(names[1])
    console.log(names[2])

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for(let i = 0; i < names.length; i++){
        console.log(names[i])
    }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach(function (names,index,array) {
        console.log(`${names}: ${index}`)
        console.log(array);

    })
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    console.log(names.indexOf('anakin'))
    console.log(names.indexOf('ahsoka'))
    console.log(names.indexOf('Obi'))
    console.log(names.length -1)

    function  first(arr){
        return arr[0]
     }
     console.log(first(1,2,3,4))

    function second(arr){
        return arr[1]
    }
    console.log(second(1,2,3,4))

    function last(arr){
        return [arr.length -1]
    }
    console.log(last(1,2,3,4,5))


})();