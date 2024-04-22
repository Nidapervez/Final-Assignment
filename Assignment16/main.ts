//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.


//Creating a guestlist array
let guestlist: any[] = ["Nida", "Hira", "Anum", "Umama"];
//making list for those guests who are not coming
let notComing: any[]=guestlist[1];
console.log(notComing,"is not coming");
//adding and removing value from lis
guestlist.splice(1,1,"tahira");
console.log("Good news !We Have found a  Bigger table for dinner.");
//adding name at the start of the list
guestlist.unshift("Naima");
//adding name at the end of the list
guestlist.push("Afshan");
//adding name at the middle of the list
guestlist.splice(3,0,"Saba");
console.log("Updated list of our guest");
guestlist.forEach(guests => console.log(`Hi! ${guests} would you like to dinner with me?`));
