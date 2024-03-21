var guestlist = ["Nida", "Hira", "Anum", "Umama"];
var notComing = guestlist[1];
console.log(notComing, "is not coming");
guestlist.splice(1, 1, "tahira");
guestlist.forEach(function (guests) { return console.log("Hi ".concat(guests, " would you like to dinner with me?")); });
