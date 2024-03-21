// List of animals
let animals = ["dog", "cat", "rabbit"];

// Loop through the list to print the name of each animal
console.log("Animals:");
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

// Modify the loop to print a statement about each animal
console.log("\nStatements about animals:");
for (let i = 0; i < animals.length; i++) {
    let animal = animals[i];
    console.log("A " + animal + " would make a great pet.");
}

// Print a statement about what these animals have in common
console.log("\nAny of these animals would make a great pet!");