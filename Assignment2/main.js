"use strict";
//Store a person’s name in a variable 
let personName = "Nida";
//Printing that person’s name in lowercase
console.log("Lowercase:", personName.toLowerCase());
//Printing that person’s name in Uppercase
console.log("Uppercase:", personName.toUpperCase());
//Printing that person’s name in Titlecase
console.log("Titlecase:", personName.replace(/\b\w/g, (char) => char.toUpperCase()));
