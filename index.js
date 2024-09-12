//TASK: Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    //TASK: Feel free to add even more songs
    { title: "Mr. Blue Sky", artist: "Electric Light Orchestra", genre: "R&B" },
    { title: "The Chain", artist: "Fleetwood Mac", genre: "Rock" },
    { title: "Come and Get Your Love (Rerecorded)", artist: "Redbone", genre: "R&B" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Bring It On Home to Me", artist: "Sam Cooke", genre: "Pop" }
];


//TASK: Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    //TASK: Add preferences for Drax, Rocket, and Groot
    "Drax" : "R&B",
    "Rocket" : "Rock",
    "Groot" : "R&B",
    "Mantis" : "Pop"
};

//TASK: Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    //TASK: Use the map() function to create playlists for each Guardian
    return Object.entries(guardians).map(([person, genre]) => {
        //Search through the songs array for songs that mach genre preference
        const playlist = songs.filter((song) => (genre) === song.genre);
        return { person, playlist }      
        }
    );
}

//TASK: Call generatePlaylist and display the playlists for each Guardian
const playlists = generatePlaylist(guardians, songs);

document.querySelector('#playlists').innerHTML = playlists.map(
  (entry) => 
    //Add some layout/styling and use map() to add a listitem for each songin the output
  ` <p><strong>${entry.person}'s Playlist:</strong></p>
    <ul style="list-style-type: none">
      ${entry.playlist.map(song => `<li>${song.title} (${song.genre})</li>`).join('')}
    </ul>
  `
).join('');