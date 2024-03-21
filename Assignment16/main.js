"use strict";
//Creating a guestlist array
let guestlist = ["Nida", "Hira", "Anum", "Umama"];
//making list for those guests who are not coming
let notComing = guestlist[1];
console.log(notComing, "is not coming");
//adding and removing value from lis
guestlist.splice(1, 1, "tahira");
console.log("Good news !We Have found a  Bigger table for dinner.");
//adding name at the start of the list
guestlist.unshift("Naima");
//adding name at the end of the list
guestlist.push("Afshan");
//adding name at the middle of the list
guestlist.splice(3, 0, "Saba");
console.log("Updated list of our guest");
guestlist.forEach(guests => console.log(`Hi! ${guests} would you like to dinner with me?`));
