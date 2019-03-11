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
/******/ 	return __webpack_require__(__webpack_require__.s = "./wwwroot/src/js/details.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wwwroot/src/js/details.js":
/*!***********************************!*\
  !*** ./wwwroot/src/js/details.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _tmdb = __webpack_require__(/*! ./tmdb */ "./wwwroot/src/js/tmdb.js");

var _tmdb2 = _interopRequireDefault(_tmdb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getUrlId = function getUrlId() {
    var url = window.location.href;
    var id = url.substring(url.lastIndexOf('/') + 1);
    return id;
};

(function () {
    var id = getUrlId();
    var moviePoster = document.getElementById("movie__poster");
    var movieImage = document.createElement("img");
    movieImage.className = "rounded-lg box-shadow";

    var movieInfo = document.getElementById("movie__info");
    var movieTitle = document.getElementById("movie__title");

    var movieRating = document.getElementById("movie__rating");

    var movieOverview = document.getElementById("movie__overview");

    _tmdb2.default.getMovie(id).then(function (movie) {
        movieImage.src = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
        moviePoster.appendChild(movieImage);

        movieTitle.innerHTML = movie.title + "<small class='text-muted'> (" + movie.release_date + ")</small>";

        movieRating.innerHTML = "<i class='material-icons md-36'>star_border</i> <span class='badge badge-secondary box-shadow'>" + movie.vote_average.toFixed(1) + "</span>";
        movieOverview.innerHTML = movie.overview;
    });
})();

/***/ }),

/***/ "./wwwroot/src/js/tmdb.js":
/*!********************************!*\
  !*** ./wwwroot/src/js/tmdb.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var API_KEY = "b616193ba38eec32e0603fae57f97cbe";

var tmdb = function () {
    var getNowplayingMovies = async function getNowplayingMovies() {
        var res = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=' + API_KEY + '&region=US&with_release_type=2|3');
        var data = await res.json();
        return data.results;
    };

    var getPopularMovies = async function getPopularMovies() {
        var res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=' + API_KEY + '&region=US&with_release_type=2|3');
        var data = await res.json();
        return data.results;
    };

    var getUpcomingMovies = async function getUpcomingMovies() {
        var res = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=' + API_KEY + '&region=US&with_release_type=2|3');
        var data = await res.json();
        return data.results;
    };

    var getMovie = async function getMovie(id) {
        var res = await fetch('https://api.themoviedb.org/3/movie/' + id + '?language=en-US&api_key=' + API_KEY);
        var data = await res.json();
        return data;
    };

    return {
        getNowplayingMovies: getNowplayingMovies,
        getPopularMovies: getPopularMovies,
        getUpcomingMovies: getUpcomingMovies,
        getMovie: getMovie
    };
}();

exports.default = tmdb;

/***/ })

/******/ });
//# sourceMappingURL=details.bundle.js.map