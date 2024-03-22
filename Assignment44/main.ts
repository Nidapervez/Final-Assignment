//function delaration
function orderSandwich(items:any) {
    console.log("You ordered a sandwich with:");
    for (let i = 0; i < items.length; i++) {
        console.log("- " + items[i]);
    }
    console.log("Enjoy your sandwich!");
}

// Call the function
orderSandwich(["chicken", "Cheese", "Chili", "Tomato"]);
orderSandwich(["Turkey", "chinese", "Mustard"]);
orderSandwich(["italian", "peproni"]);
