/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./wwwroot/src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wwwroot/src/js/api/tmdb.js":
/*!************************************!*\
  !*** ./wwwroot/src/js/api/tmdb.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var API_KEY = "b616193ba38eec32e0603fae57f97cbe";
var API_OPTIONS = "&language=en-US&append_to_response=videos";

var tmdb = function () {
    var getNowplayingMovies = async function getNowplayingMovies() {
        var res = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=' + API_KEY + API_OPTIONS + '&region=US&with_release_type=2|3');
        var data = await res.json();
        return data.results;
    };

    var getPopularMovies = async function getPopularMovies() {
        var res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=' + API_KEY + API_OPTIONS + '&region=US&with_release_type=2|3');
        var data = await res.json();
        return data.results;
    };

    var getUpcomingMovies = async function getUpcomingMovies() {
        var res = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=' + API_KEY + API_OPTIONS + '&region=US&with_release_type=2|3');
        var data = await res.json();
        return data.results;
    };

    var getMovie = async function getMovie(id) {
        var res = await fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_KEY + API_OPTIONS);
        var data = await res.json();
        return data;
    };

    var getMovieCredits = async function getMovieCredits(id) {
        var res = await fetch('https://api.themoviedb.org/3/movie/' + id + '/credits?api_key=' + API_KEY + API_OPTIONS);
        var data = await res.json();
        return data;
    };

    var getMovieRecommendations = async function getMovieRecommendations(id) {
        var res = await fetch('https://api.themoviedb.org/3/movie/' + id + '/recommendations?api_key=' + API_KEY + API_OPTIONS);
        var data = await res.json();
        return data.results;
    };

    return {
        getNowplayingMovies: getNowplayingMovies,
        getPopularMovies: getPopularMovies,
        getUpcomingMovies: getUpcomingMovies,
        getMovie: getMovie,
        getMovieCredits: getMovieCredits,
        getMovieRecommendations: getMovieRecommendations
    };
}();

exports.default = tmdb;

/***/ }),

/***/ "./wwwroot/src/js/index.js":
/*!*********************************!*\
  !*** ./wwwroot/src/js/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _tmdb = __webpack_require__(/*! ./api/tmdb */ "./wwwroot/src/js/api/tmdb.js");

var _tmdb2 = _interopRequireDefault(_tmdb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createMovieBlock(movie) {
    var col = document.createElement("div");
    col.className = "col-6 col-sm-2 mb-5";

    var movieWrapper = document.createElement("div");
    movieWrapper.className = "movieWrapper rounded shadow-lg";
    var movieImage = document.createElement("img");
    movieImage.className = "rounded";
    movieImage.src = "https://image.tmdb.org/t/p/w185" + movie.poster_path;
    movieWrapper.appendChild(movieImage);

    var movieRating = document.createElement("div");
    movieRating.className = "movieWrapper__rating";
    movieRating.innerHTML = '<span class="badge badge-secondary shadow-lg">' + movie.vote_average.toFixed(1) + '</span>';
    movieWrapper.append(movieRating);

    var movieDate = document.createElement("div");
    movieDate.className = "movieWrapper__date";
    movieDate.innerHTML = '<span class="badge badge-secondary shadow-lg">' + movie.release_date + '</span>';
    movieWrapper.append(movieDate);

    var link = document.createElement("a");
    link.href = "/movies/" + movie.id;
    link.appendChild(movieWrapper);
    col.appendChild(link);

    return col;
}

_tmdb2.default.getNowplayingMovies().then(function (movies) {
    movies.map(function (movie, index) {
        var carouselItem = document.createElement("div");
        carouselItem.classList.add("carousel-item");
        if (index == 0) {
            carouselItem.classList.add("active");
        }
        var movieImage = document.createElement("img");
        movieImage.className = "d-block w-100";
        movieImage.src = "https://image.tmdb.org/t/p/w780" + movie.backdrop_path;
        carouselItem.appendChild(movieImage);

        var overlay = document.createElement("div");
        overlay.className = "dark-overlay";
        carouselItem.append(overlay);

        var carouselCaption = document.createElement("div");
        carouselCaption.className = "carousel-caption d-none d-md-block";
        var movieTitle = document.createElement("h5");
        movieTitle.innerHTML = movie.title;
        var movieOverview = document.createElement("p");
        movieOverview.innerHTML = movie.overview;
        carouselCaption.appendChild(movieTitle);
        carouselCaption.appendChild(movieOverview);
        carouselItem.appendChild(carouselCaption);
        var innerCarousel = document.getElementById("inner-carousel");
        innerCarousel.appendChild(carouselItem);
    });
});

_tmdb2.default.getPopularMovies().then(function (movies) {
    movies.slice(0, 12).map(function (movie) {
        var movieBlock = createMovieBlock(movie);
        var popularMovies = document.getElementById("popularMovies");
        popularMovies.appendChild(movieBlock);
    });
});

_tmdb2.default.getUpcomingMovies().then(function (movies) {
    movies.slice(0, 12).map(function (movie) {
        var movieBlock = createMovieBlock(movie);
        var upcomingMovies = document.getElementById("upcomingMovies");
        upcomingMovies.appendChild(movieBlock);
    });
});

/***/ })

/******/ });
//# sourceMappingURL=index.bundle.js.map