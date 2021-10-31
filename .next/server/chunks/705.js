"use strict";
exports.id = 705;
exports.ids = [705];
exports.modules = {

/***/ 1705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X_": () => (/* binding */ useWatchListContext),
/* harmony export */   "td": () => (/* binding */ WatchListProvider),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const WatchlistContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)([]);
const WatchListSet = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
});
const useWatchListContext = ()=>{
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(WatchlistContext);
};
const useWatchListSetContext = ()=>{
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(WatchListSet);
};
const WatchListProvider = ({ children  })=>{
    const { 0: state , 1: setstate  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let watchlistStorage = localStorage.getItem("watchlist");
        if (watchlistStorage) {
            setstate(JSON.parse(watchlistStorage));
        }
    }, []);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WatchlistContext.Provider, {
        value: state,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WatchListSet.Provider, {
            value: setstate,
            children: children
        })
    }));
};
const useWatchList = ()=>{
    const watchlistState = useWatchListContext();
    const setWatchlist = useWatchListSetContext();
    const add = (card)=>{
        let doExist = watchlistState.find((item)=>item.id === card.id
        );
        if (!doExist) {
            setWatchlist([
                ...watchlistState,
                card
            ]);
            localStorage.setItem("watchlist", JSON.stringify([
                ...watchlistState,
                card
            ]));
        }
    };
    const remove = (id)=>{
        const newlist = watchlistState.filter((item)=>item.id !== id
        );
        localStorage.setItem("watchlist", JSON.stringify(newlist));
        setWatchlist(newlist);
    };
    return {
        add,
        remove
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useWatchList);


/***/ })

};
;