import tmdb from "./tmdb";


const getUrlId = () => {
    let url = window.location.href;
    let id = url.substring(url.lastIndexOf('/') + 1);
    return id;
}

(function() {
    let id = getUrlId();
    let moviePoster = document.getElementById("movie__poster");
    let movieImage = document.createElement("img");
    movieImage.className = "rounded-lg box-shadow";

    let movieTitle = document.getElementById("movie__title");
    
    let movieRating = document.getElementById("movie__rating");

    let movieOverview = document.getElementById("movie__overview");

    tmdb.getMovie(id)
    .then(movie => {
        movieImage.src = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
        moviePoster.appendChild(movieImage);

        movieTitle.innerHTML = movie.title + "<small class='text-muted'> (" + movie.release_date + ")</small>"

        movieRating.innerHTML = "<i class='material-icons md-36'>star_border</i> <span class='badge badge-secondary box-shadow'>" + movie.vote_average.toFixed(1) + "</span>";
        movieOverview.innerHTML = movie.overview;
    });
})();