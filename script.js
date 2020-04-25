const form = document.getElementById('form');
const search = document.getElementById('result');
const more = document.getElementById('more');

const apiURL = 'https://api.lyrics.ovh';

// search by song or artist 
function searchSong(term) {
fetch('${apiURL}/suggest/${term}').then(res => res.json())
.then(data => Console.log(data))
}

// event listener 
form.addEventListener('submit', e =>{
    e.preventDefault();

    const searchTerm = search.nodeValue.trim();
    if (!searchTerm) {
        alert('please type in a search term ');
    } else {
        searchSongs(searchTerm);
    }
} );