// API/TMDBApi.js

const API_TOKEN = "a41550321c0ad782e36e054d51c6a3b8";

export function getFilmsFromApiWithSearchedText (text) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text

    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}