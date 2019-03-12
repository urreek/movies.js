const API_KEY = "b616193ba38eec32e0603fae57f97cbe";

const tmdb = (function () {
    let getNowplayingMovies = async function() {
        const res = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=' + API_KEY + '&region=US&with_release_type=2|3');
        const data = await res.json();
        return data.results;
    }

    let getPopularMovies = async function() {
        const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=' + API_KEY + '&region=US&with_release_type=2|3');
        const data = await res.json();
        return data.results;
    }

    let getUpcomingMovies = async function() {
        const res = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=' + API_KEY + '&region=US&with_release_type=2|3');
        const data = await res.json();
        return data.results;
    }

    let getMovie = async function(id) {
        const res = await fetch('https://api.themoviedb.org/3/movie/' + id + '?language=en-US&api_key=' + API_KEY);
        const data = await res.json();
        return data;
    }

    return {
        getNowplayingMovies: getNowplayingMovies,
        getPopularMovies: getPopularMovies,
        getUpcomingMovies: getUpcomingMovies,
        getMovie: getMovie
    }
})();

export default tmdb;