let guestlist: any[] = ["Nida", "Hira", "Anum", "Umama"];
let notComing: any[]=guestlist[1];
console.log(notComing,"is not coming");
guestlist.splice(1,1,"tahira");
guestlist.forEach(guests =>console.log(`Hi ${guests} would you like to dinner with me?`));