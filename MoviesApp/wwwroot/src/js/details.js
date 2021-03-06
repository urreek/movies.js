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

    let movieDirectors = document.getElementById("movie__directors");

    let movieCast = document.getElementById("movie__cast");

    let movieRecommendations = document.getElementById("movie__recommendations");

    let movieTrailers = document.getElementById("movie__trailers");
    
    tmdb.getMovie(id)
    .then(movie => {
        movieImage.src = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

        movieRating.innerHTML = "<span class='badge badge-secondary shadow-lg'>" + movie.vote_average.toFixed(1) + "</span>";

        movieTitle.innerHTML = movie.title + "<small class='text-muted'> (" + movie.release_date + ")</small>"

        movie.genres.forEach(genre => {
            let genreSpan = document.createElement("span");
            genreSpan.className = "badge badge-secondary mr-2 shadow-lg";
            genreSpan.innerHTML = genre.name;
            movieGenres.appendChild(genreSpan);
        });

        movieOverview.innerHTML = movie.overview;
        movie.videos.results.filter(video => video.type === "Trailer")
        .forEach(video => {
            let trailer = document.createElement("div");
            trailer.className ="movie__trailer m-2";
            trailer.innerHTML = `<div class="embed-responsive embed-responsive-16by9 shadow-lg rounded">
                                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/${video.key}" allowfullscreen></iframe>
                                </div>`;
            movieTrailers.appendChild(trailer);
        })

    });

    tmdb.getMovieCredits(id)
    .then(credits => {
        let directors = credits.crew.filter(crew => crew.job == "Director");
        let cast = credits.cast.slice(0, 6);

        directors.forEach((director, index) => {
            if(index < directors.length - 1){
                movieDirectors.innerHTML += director.name + ", ";
            }
            else {
                movieDirectors.innerHTML += director.name;
            }
        });

        cast.forEach(c => {
            let cast = document.createElement("div");
            cast.className ="card text-dark border-0 shadow-lg";
            cast.innerHTML = `<img src="https://image.tmdb.org/t/p/w185${c.profile_path}" class="card-img-top">
                                <div class="card-body">
                                    <h6 class="card-title mb-1">${c.name}</h5>
                                    <p class="card-text">${c.character}</p>
                                </div>`;
            movieCast.appendChild(cast);
        });
    });

    tmdb.getMovieRecommendations(id)
    .then(recommendations => {
        recommendations.slice(0, 8).forEach(movie => {
            let recommendedMovie = document.createElement("div");
            recommendedMovie.className ="card text-dark border-0 shadow-lg m-2";
            recommendedMovie.innerHTML = `<a href="/movies/${movie.id}">
                                            <img src="https://image.tmdb.org/t/p/w300${movie.backdrop_path}" class="card-img-top" alt="...">
                                            <div class="card-body">
                                                <h6 class="card-title">${movie.title}</h6>
                                            </div>
                                        </a>`;
            movieRecommendations.appendChild(recommendedMovie);
        });
    });
})();