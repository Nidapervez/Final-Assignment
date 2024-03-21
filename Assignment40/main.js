"use strict";
function make_album(artist, title, tracks) {
    let album = {
        artist: artist,
        title: title
    };
    // Check if tracks parameter is provided and add it to the album object if it exists
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Making three dictionaries representing different albums
let album1 = make_album("Bilal", "doobraha");
let album2 = make_album("Atifaslam", "wo laamhay", 12);
let album3 = make_album("Taylor Swift", "1989");
// Printing each return value to show that objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
