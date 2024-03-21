//Making array of places that want to visit
let places:string[] =["Makka","Madina","Egypt","Paris","America"];
console.log("Original order",places);
//print array in alphaetical order without modifying actual array
console.log("Alphabetical order" , [...places].sort());
//print original array again to see changes if any
console.log("Original order" , places);
//print array in reverse order without changing original array
console.log("Reverse order",[...places].reverse());
//original array to show that it is not changes
console.log("Original array", places);
//reverse  order of original array 
console.log("Original Array changed", places.reverse());
//again in original order
console.log("Again in original position", places.reverse());
//Sort Alphabetically original array 
console.log("Sorted Alphabetically original array", places.sort());
//changed original array now in reverse order
console.log("Original array reversed again", places.reverse());