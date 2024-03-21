"use strict";
// Define an array of magician's names
let magicians = ["rahul", "rohit", "salman", "amir"];
// Define a function called show_magicians that takes an array as input and prints each name in the array
function show_magicians(names) {
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}
// Define a function called make_great that modifies the array of magicians by adding the phrase "the Great" to each magician's name
function make_great(names) {
    for (let i = 0; i < names.length; i++) {
        names[i] = names[i] + " the Great";
    }
}
// Call make_great function to modify the array of magicians
make_great(magicians);
// Call show_magicians to see the modified list
show_magicians(magicians);
