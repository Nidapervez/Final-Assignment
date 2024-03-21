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