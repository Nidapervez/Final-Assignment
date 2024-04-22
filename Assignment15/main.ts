//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. 
//You’ll have to think of someone else to invite.

let guestlist: any[] = ["Nida", "Hira", "Anum", "Umama"];
let notComing: any[]=guestlist[1];
console.log(notComing,"is not coming");
guestlist.splice(1,1,"tahira");
guestlist.forEach(guests =>console.log(`Hi ${guests} would you like to dinner with me?`));
