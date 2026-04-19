//event listener to trigger when DOM is loaded
document.addEventListener('DOMContentLoaded', async function() {
    const response = await fetch('https://m05backenddemo.onrender.com/api/songs');
    const songs = await response.json();

    let html = '';

    for (let song of songs) {
        html += `<li>${song.title} - ${song.artist}</li>`;
    }

    document.querySelector('#addedSongs').innerHTML = html;
});