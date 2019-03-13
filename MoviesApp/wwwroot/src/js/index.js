import tmdb from './api/tmdb';

function createMovieBlock(movie) {
    let col = document.createElement("div");
    col.className = "col-6 col-sm-2 mb-5";

    let movieWrapper = document.createElement("div");
    movieWrapper.className = "movieWrapper rounded shadow-lg";
    let movieImage = document.createElement("img");
    movieImage.className = "rounded";
    movieImage.src = "https://image.tmdb.org/t/p/w185" + movie.poster_path;
    movieWrapper.appendChild(movieImage);

    let movieRating = document.createElement("div");
    movieRating.className = "movieWrapper__rating";
    movieRating.innerHTML = '<span class="badge badge-secondary shadow-lg">' + (movie.vote_average).toFixed(1) + '</span>';
    movieWrapper.append(movieRating);

    let movieDate = document.createElement("div");
    movieDate.className = "movieWrapper__date";
    movieDate.innerHTML = '<span class="badge badge-secondary shadow-lg">' + movie.release_date + '</span>';
    movieWrapper.append(movieDate);

    let link = document.createElement("a");
    link.href = "/movies/" + movie.id;
    link.appendChild(movieWrapper);
    col.appendChild(link);

    return col;
}

tmdb.getNowplayingMovies()
    .then(movies => {
        movies.map((movie, index) => {
            let carouselItem = document.createElement("div");
            carouselItem.classList.add("carousel-item");
            if (index == 0) {
                carouselItem.classList.add("active");
            }
            let movieImage = document.createElement("img");
            movieImage.className = "d-block w-100";
            movieImage.src = "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
            carouselItem.appendChild(movieImage);

            let overlay = document.createElement("div");
            overlay.className = "dark-overlay";
            carouselItem.append(overlay);

            let carouselCaption = document.createElement("div");
            carouselCaption.className = "carousel-caption d-none d-md-block";
            let movieTitle = document.createElement("h5");
            movieTitle.innerHTML = movie.title;
            let movieOverview = document.createElement("p");
            movieOverview.innerHTML = movie.overview;
            carouselCaption.appendChild(movieTitle);
            carouselCaption.appendChild(movieOverview);
            carouselItem.appendChild(carouselCaption);
            let innerCarousel = document.getElementById("inner-carousel");
            innerCarousel.appendChild(carouselItem);

        });
    });


tmdb.getPopularMovies()
    .then(movies => {
        movies.slice(0, 12).map(movie => {
            let movieBlock = createMovieBlock(movie);
            let popularMovies = document.getElementById("popularMovies");
            popularMovies.appendChild(movieBlock);
        });
    });

tmdb.getUpcomingMovies()
    .then(movies => {
        movies.slice(0, 12).map(movie => {
            let movieBlock = createMovieBlock(movie);
            let upcomingMovies = document.getElementById("upcomingMovies");
            upcomingMovies.appendChild(movieBlock);
        });
    });