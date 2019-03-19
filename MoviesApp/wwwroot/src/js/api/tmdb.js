const API_KEY = "b616193ba38eec32e0603fae57f97cbe";
const API_OPTIONS = "&language=en-US&append_to_response=videos"

const tmdb = (function () {
    let getNowplayingMovies = async function() {
        const res = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=' + API_KEY + API_OPTIONS + '&region=US&with_release_type=2|3');
        const data = await res.json();
        return data.results;
    }

    let getPopularMovies = async function() {
        const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=' + API_KEY + API_OPTIONS + '&region=US&with_release_type=2|3');
        const data = await res.json();
        return data.results;
    }

    let getUpcomingMovies = async function() {
        const res = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=' + API_KEY + API_OPTIONS + '&region=US&with_release_type=2|3');
        const data = await res.json();
        return data.results;
    }

    let getMovie = async function(id) {
        const res = await fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_KEY + API_OPTIONS);
        const data = await res.json();
        return data;
    }

    let getMovieCredits = async function(id) {
        const res = await fetch('https://api.themoviedb.org/3/movie/' + id + '/credits?api_key=' + API_KEY + API_OPTIONS);
        const data = await res.json();
        return data;
    }

    let getMovieRecommendations = async function(id) {
        const res = await fetch('https://api.themoviedb.org/3/movie/' + id + '/recommendations?api_key=' + API_KEY + API_OPTIONS);
        const data = await res.json();
        return data.results;
    }

    return {
        getNowplayingMovies: getNowplayingMovies,
        getPopularMovies: getPopularMovies,
        getUpcomingMovies: getUpcomingMovies,
        getMovie: getMovie,
        getMovieCredits: getMovieCredits,
        getMovieRecommendations: getMovieRecommendations
    }
})();

export default tmdb;