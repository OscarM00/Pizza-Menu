// Global variables
 
// Get the button and pizza options from the page
let formButton = document.getElementById("btn");

var crust = document.getElementById("crust");
console.log(crust); // checking my work

var sauce = document.getElementById("sauce");
console.log(sauce); // checking my work

// event listener

formButton.addEventListener("click", function(event) {
    // keeps the page from refreshing when the form is submitted
    event.preventDefault();
    // start fresh so toppings from the last order don't carry over
    const toppings = [];
    let topping1 = document.getElementById("topping1").value;
    let topping2 = document.getElementById("topping2").value;
    let topping3 = document.getElementById("topping3").value;
    
    toppings.push(topping1);
    toppings.push(topping2);
    toppings.push(topping3);

calculateTotal(toppings);
});

// work out the price and show the finished order 
function calculateTotal(toppingArray) {
    let total = 0;
    let toppingCost = 2.50;
    let baseCost = 5.50; //cost of crust and sauce

    // order string concatenation
    let orderString = "Your Pizza Is: " + crust.value + " with " + sauce.value + " sauce";

    let toppingString = "Toppings: ";

    // for loop
    for (let i = 0; i < toppingArray.length; i++) {
        // don't charge for an empty field, even if someone typed spaces
        if (toppingArray[i].trim () === "") {
        console.log("This Is Empty")
        } else {
            toppingString += toppingArray[i] + " ";
            total = total + toppingCost;
        }
        
} 
    // total = baseCost + cost of all toppings
    total = baseCost + total;
    // Replace the last order and show the price with two decimal places 
    document.getElementById("total").textContent = "$" + total.toFixed(2);
    // Show what someone entered in plain text 
    document.getElementById("pizzaOrder").innerHTML = orderString
    document.getElementById("toppings").innerHTML = toppingString

}
