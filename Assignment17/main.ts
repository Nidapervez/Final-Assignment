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
//Informing that only two guests are invited
console.log("Unfortunately,the new dinner table wont ariive on time ,So i can only invite two guests at a time");
//using whileloop to remove name of guests untill two remains in list
while(guestlist.length>2){
    let removedGuest:string = guestlist.pop();
    console.log(`Sorry ${removedGuest} I cant invite you for dinner`);

}
console.log("Invitation for the last two guests");
guestlist.forEach(guests=>console.log(`lucky ${guests},you are still invited to dinner`));