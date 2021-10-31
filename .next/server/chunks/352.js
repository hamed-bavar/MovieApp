"use strict";
exports.id = 352;
exports.ids = [352];
exports.modules = {

/***/ 8352:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

class MovieService {
    async getMovieByCatAndPage(category, pageNumber) {
        const actualReq = this.newUrl.replace("category", category).replace("pageNumber", pageNumber.toString());
        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(actualReq);
        return response.data.results;
    }
    async getMovieById(id) {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://movie-galaxy-proxy.herokuapp.com/moviebyid/${id}`);
        return response.data;
    }
    async getCredits(id1) {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://movie-galaxy-proxy.herokuapp.com/getCredits/${id1}`);
        return response.data;
    }
    async getMovieGallery(id2) {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://movie-galaxy-proxy.herokuapp.com/getMovieGallery/${id2}`);
        return response.data;
    }
    async searchByName(searchText) {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://movie-galaxy-proxy.herokuapp.com/searchByText/${searchText}`);
        return response.data;
    }
    constructor(){
        this.url = `https://api.themoviedb.org/3/movie/category?api_key=c46e93100eb64667d419552d00b518d6&language=en-US&page=pageNumber`;
        this.newUrl = `https://movie-galaxy-proxy.herokuapp.com/movies/category/pageNumber`;
    }
}
const movieService = new MovieService();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (movieService);


/***/ })

};
;