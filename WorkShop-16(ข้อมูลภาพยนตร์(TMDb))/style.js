const apiKEY="0ad1ec8bc0c41754c5d024a28363bbda";
let years ="2026"
const url =`https://api.themoviedb.org/3/discover/movie?api_key=${apiKEY}&language=en-US&page=1&sort_by=popularity.desc&year=${years}}`;
const urlPoster =`https://image.tmdb.org/t/p/w500`;
const contents = document.getElementById('content');
const dropdown= document.getElementById('years');

async function displayMovies(url){
    const response =  await fetch(url);
    const movies = await response.json();
    while(contents.firstChild){
        contents.removeChild(contents.firstChild);
    }
    movies.results.forEach(data=>{
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        const title =document.createElement('h2');
        const poster = document.createElement('img');
        title.innerHTML=`${data.title.substring(0,24)}`;
        poster.src=`${urlPoster}${data.poster_path}`;
        movieEl.appendChild(title);
        movieEl.appendChild(poster);
        contents.appendChild(movieEl);
    });
    console.log(movies);
}

dropdown.addEventListener('change',()=>{
    years = dropdown.value;
    const updateUrl=`https://api.themoviedb.org/3/discover/movie?api_key=${apiKEY}&language=en-US&page=1&sort_by=popularity.desc&year=${years}}`;
    displayMovies(updateUrl);
});

displayMovies(url);