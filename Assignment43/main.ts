//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names.
//Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.



// Define an array of magician's names
let magicians = ["rahul", "rohit", "salman", "amir"];

// Define a function called show_magicians that takes an array as input and prints each name in the array
function show_magicians(names:any) {
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}

// Define a function called make_great that modifies a copy of the array of magicians by adding the phrase "the Great" to each magician's name
function make_great(names:any) {
    let newNames = names.slice(); // Create a copy of the original array
    for (let i = 0; i < newNames.length; i++) {
        newNames[i] = newNames[i] + " the Great";
    }
    return newNames; // Return the modified copy of the array
}

// Call make_great function with a copy of the array of magicians' names
let greatMagicians = make_great(magicians);

// Call show_magicians to see the original list
console.log("Original list:");
show_magicians(magicians);

// Call show_magicians to see the modified list
console.log("\nList with 'the Great' added:");
show_magicians(greatMagicians);
