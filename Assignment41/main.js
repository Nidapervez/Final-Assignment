"use strict";
// Define an array of magician's names
let magicians = ["rahul", "rohit", "salman", "amir"];
// Define a function called show_magicians that takes an array as input and prints each name in the array
function show_magicians(names) {
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}
// Call the show_magicians function with the magicians array
show_magicians(magicians);
