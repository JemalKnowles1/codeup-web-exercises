"use strict";

(function () {
    // So far we have talked about arrays as if they are static, and unchanging. This isn't the case. Today we'll be talking about how we can change our arrays without just reassigning the values.

    /**
     * Audience: "But David, why would I need to know about that?"
     */

    // In the future, we may be interacting with our data in a way where we won't be able to see it directly, so it's important to keep these methods and functions in mind when we start to create bigger and bigger applications.

    /**
     * Audience: "So David, how can I add an element to an array?"
     */

        // Consider the following array:

    const cheeses = ["Brie", "Muenster", "Kraft American Singles", "Pepper Jack", "String", "Bleu de Gex"];

    // Quite the collection, if a bit incomplete. Where's cheddar?! Let add cheddar to the end of our array.

    cheeses.push("Cheddar");

    function logTheCheeses() {
        cheeses.forEach(function (cheese) {
            console.log(cheese);
        });
    }

    // POP QUIZ: What the return of the function above?!

    // logTheCheeses();

    // By using the push method I can add to the end of my array.

    // Well that's good and all, but let's also add Gouda to the front of the array.

    cheeses.unshift("Gouda");

    // logTheCheeses();

    // The unshift method will allow me to add to the front of my array.

    /**
     * Audience: "But David, surely we are able to add more than one element at a time."
     */

    // Yes, you're right. I can pass more than one argument through these two methods.

    cheeses.push("Colby Jack", "White Cheddar", "Havarti");
    cheeses.unshift("Red Windsor", "Ragstone", "Nut Rebel");

    // logTheCheeses();

    // console.log(cheeses);

    /**
     * Audience: "But David, just as you have showed us that we can create, can we not also
     * destroy? How can we remove an element from an array without reassigning the value."
     */

    // We have access to two methods that will allow us to remove elements as well.

    // You know, I haven't even tried Red Windsor. Let's remove it.

    cheeses.shift();

    // logTheCheeses();

    // Unlike unshift, shift will remove the first element of an array.

    // I never really liked Havarti, let's axe that too.

    cheeses.pop();

    // logTheCheeses();

    // Pop will lop off the last element of an array.

    // Here's a trick, let's shift Ragstone from the array.

    let removedCheese = cheeses.shift();
    let finalCheese = cheeses.pop();


    // console.log(removedCheese + " has been removed from cheeses array.");
    // console.log(finalCheese + " has been removed from cheeses array.");
    //
    // logTheCheeses();

    // It's important to note that the return from the pop and shift methods is the item being removed from the array.

    // Let's add Ragstone back to the end of the array.

    console.log(cheeses.push(finalCheese) + 'has been removed');
    console.log(cheeses.push(removedCheese) + 'has been removed');;

    // logTheCheeses();

    /**
     * Audience: "Golly David, there must be a way for me to locate an index of an element in an
     * array."
     */

        // Remember how with strings we were able to find the index of a pattern of characters?

        // console.log(removedCheese.indexOf("o"));

        // We can also use indexOf on arrays!

        // console.log(cheeses.indexOf("Kraft American Singles"));

        // Now I can locate the index of an element even if I'm not looking at it!

        // We also have access to the lastIndexOf method.

    const myFavNumbers = [19,34,22,10,19,19];

    // console.log(myFavNumbers.indexOf(19));
    // console.log(myFavNumbers.lastIndexOf(19));

    // We can now see where the last occurrence of a piece of data occurs.

    /**
     * Audience: "Hey David, what might that method be useful for?"
     */

        // We can use this method in conjunction with the slice method.

        // The slice method will work a lot like the substring method, in that it can return a value from either one or two arguments

    let myFavCheeses = cheeses.slice(cheeses.indexOf("Muenster"), cheeses.indexOf("Kraft American Singles") + 1);

    // By passing one argument, we start at the specified index and return an array to the end.
    let otherCheeses = cheeses.slice(7);

    // logTheCheeses();
    //
    // console.log(myFavCheeses);
    //
    // console.log(otherCheeses);

    // console.log(removedCheese.substring(removedCheese.indexOf("stone")));
    // console.log(removedCheese);

    // Notice that using the slice method didn't remove the cheeses I liked from the cheeses array. By assigning the return from the slice method to a variable I was able to call on it as its own value.

    function copyOfArray(array) {
        return array.slice();
    }

    let reversedCheeses = copyOfArray(cheeses);

    reversedCheeses.reverse();

    // logTheCheeses();
    //
    // console.log("//////////");
    //
    // reversedCheeses.forEach(function(cheese) {
    //     console.log(cheese);
    // });

    /**
     * Audience: "Hey David, that cheese array is a bit of a mess. Is there a way we can feng
     * shui that mess a bit prettier?"
     */

    // cheeses.sort();
    //
    // logTheCheeses();
    //
    // console.log(myFavNumbers.sort().reverse());
    //
    // console.log([6, 19, 55, "Walter", "Jesse", "Mike"].sort());

    /**
     * "Hey David, now that I understand how arrays work a lot better, can we get a bit more wild with it?"
     */

    let csvNames = 'David,Cody,Jeremy,Codey The Duck';

    let names = csvNames.split(",");

    console.log(names);

    csvNames = names.reverse().join(",");

     console.log(csvNames);





    // Secret time: Let's talk about joining two arrays together...

    var alphaTeam = ["David", "Jay", "Javier", "Justin", "Laura", "Cody", "Jeremy", "Trevor"];
    var goldTeam = ["Kenneth", "Farrukh", "Lola", "Issac", "Steve", "Jason", "Gonzalo", "Johnny"];

    var staff = alphaTeam.concat(goldTeam);

    // console.log(alphaTeam);
    // console.log(goldTeam);
    // console.log(staff);

    // Which I can use to build..

    function removeAtIndex(array, index) {
        var arr1 = array.slice(0, index);
        var arr2 = array.slice(index + 1);
        return arr1.concat(arr2);
    }

    console.log(removeAtIndex(cheeses, cheeses.indexOf("Kraft American Singles")));

    console.log(cheeses.splice(cheeses.indexOf("Kraft American Singles"),1));

    //Splice is the slice method, but destructive. Meaning it will remove the sliced fragment from the original array.

    logTheCheeses();
})();