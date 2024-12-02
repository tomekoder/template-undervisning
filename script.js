// General examples of the use of arrays:

// Flat Array:
const fruitBowl = ["Apple", "Pear", "Grapes"];

fruitBowl.push("Banana");
fruitBowl.push("Orange");
fruitBowl.pop();

fruitBowl.toString();

console.log(fruitBowl.toString());

//oppgave:
const appleColors = [];

appleColors.push("Green");
appleColors.push("Yellow");
appleColors.push("Red");

appleColors.toString();

console.log(appleColors.toString());

//
console.log("________________________________________________");
//

// hente inn elementer/fetch elements
const inputField = document.querySelector("#inputField")
const addFront = document.querySelector("#addFront")
const removeFront = document.querySelector("#removeFront")
const addBack = document.querySelector("#addBack")
const removeBack = document.querySelector("#removeBack")
const outputField = document.querySelector("#outputField")

console.log(inputField, addFront, removeFront, addBack, removeBack, outputField)

const outputArray = [];

// gir elementer hendelser/give elements events

addFront.addEventListener("click", function () {
    console.log("button clicked!!");
  outputArray.unshift(inputField.value);

     console.log(outputArray);

  outputField.textContent = outputArray
})

removeFront.addEventListener("click", function() {
  console.log("buton click")
  outputArray.pop(inputField.value);
  console.log(outputArray);
  outputField.textContent = outputArray
})
















/*
// Object with Arrays:
const biggerFruitBowl = {
  fruit: ["Apple", "Pear", "Grapes"],
  berries: ["Banana", "Strawberry"],
};

// Nested Arrays in Objects
const evenBiggerFruitBowl = {
  fruit: [
    { apple: ["Red apple", "Green Apple", "Yellow Apples"] },
    "Pear",
    "Grapes",
  ],
  berries: ["Banana", "Strawberry"],
}; 
*/
