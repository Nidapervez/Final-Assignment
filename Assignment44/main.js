"use strict";
function orderSandwich(items) {
    console.log("You ordered a sandwich with:");
    for (let i = 0; i < items.length; i++) {
        console.log("- " + items[i]);
    }
    console.log("Enjoy your sandwich!");
}
// Call the function three times with different numbers of arguments
orderSandwich(["chicken", "Cheese", "Chili", "Tomato"]);
orderSandwich(["Turkey", "Swiss cheese", "Mustard"]);
orderSandwich(["italian", "Jelly"]);
