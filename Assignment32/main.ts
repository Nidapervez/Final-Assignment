
//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.

//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.


//List of current users
let current_users = ["john", "emma", "alex", "sophia", "mike"];
// List of new users
let new_users = ["emma", "mike", "chris", "lucy", "julia"];
// Convert current_users to lowercase for case-insensitive comparison
let current_users_lower = current_users.map(user => user.toLowerCase());

// Loop through new_users list
for (let i = 0; i < new_users.length; i++) {
    // Convert new username to lowercase for case-insensitive comparison
    let new_username_lower = new_users[i].toLowerCase();
    
    // Check if the new username is in the list of current users
    if (current_users_lower.includes(new_username_lower)) {
        console.log(`Sorry, the username '${new_users[i]}' is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username '${new_users[i]}' is available.`);
    }
