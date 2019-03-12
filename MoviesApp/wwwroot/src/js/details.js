import tmdb from "./api/tmdb";


const getUrlId = () => {
    let url = window.location.href;
    let id = url.substring(url.lastIndexOf('/') + 1);
    return id;
}

(function() {
    let id = getUrlId();

    let movieImage = document.getElementById("movie__image");
    
    let movieRating = document.getElementById("movie__rating");

    let movieTitle = document.getElementById("movie__title");

    let movieGenres = document.getElementById("movie__genres");

    let movieOverview = document.getElementById("movie__overview");

    tmdb.getMovie(id)
    .then(movie => {
        movieImage.src = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

        movieRating.innerHTML = "<span class='badge badge-secondary box-shadow'>" + movie.vote_average.toFixed(1) + "</span>";

        movieTitle.innerHTML = movie.title + "<small class='text-muted'> (" + movie.release_date + ")</small>"

        movie.genres.forEach(genre => {
            console.log(genre);
            let genreSpan = document.createElement("span");
            genreSpan.className = "badge badge-secondary mr-2 box-shadow";
            genreSpan.innerHTML = genre.name;
            movieGenres.appendChild(genreSpan);
        });

        movieOverview.innerHTML = movie.overview;
    });
})();