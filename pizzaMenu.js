// Global variables

let formButton = document.getElementById("btn");

var crust = document.getElementById("crust");
console.log(crust); // checking my work

var sauce = document.getElementById("sauce");
console.log(sauce); // checking my work

let toppings = []; // toppings array



//event listener

formButton.addEventListener("click", function(event) {
    event.preventDefault();

    let topping1 = document.getElementById("topping1").value;
    let topping2 = document.getElementById("topping2").value;
    let topping3 = document.getElementById("topping3").value;
    
    toppings.push(topping1);
    toppings.push(topping2);
    toppings.push(topping3);

calculateTotal(toppings);
});

function calculateTotal(toppingArray) {
    let total = 0;
    let toppingCost = 2.50;
    let baseCost = 5.50; //cost of crust and sauce

    //order string concatenation
    let orderString = "Your Pizza Is: " + crust.value + " with " + sauce.value + " sauce";

    let toppingString = "Toppings: ";

    //for loop
    for (let i = 0; i < toppingArray.length; i++) {
        if (toppingArray[i] === " ") {
        console.log("This Is Empty")
        } else {
            toppingString += toppingArray[i] + " ";
            total = total + toppingCost;
        }
        
} 
    // total = baseCost + cost of all toppings
    total = baseCost + toppingCost;
    // set DOM total += total
    document.getElementById("total").innerHTML += total
    // use DOM: = orderString
    document.getElementById("pizzaOrder").innerHTML = orderString
    // use DOM: = toppingString
    document.getElementById("toppings").innerHTML = toppingString

}
