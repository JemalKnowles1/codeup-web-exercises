setTimeout(function (){
    document.getElementById("heading").innerText = "howdy"
}, 2000)
let listItems = document.getElementsByClassName("list-item");
console.log(listItems);
listItems.style = "background-color: yellow";

//to iterate through HTML list use a for loop
for (let i=0; i < listItems.length; i++){
    listItems[i].style = "background-color: yellow"
}
//another way to use a list
document.querySelector("p.lorem")
let lorem = document.querySelector("lorem:nth-last-of-type(2)")
console.log(lorem);
// .innerHTML = "<h1>hello from java script</h1>"


