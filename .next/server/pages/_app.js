(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6176:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "Header_header__2ysmU",
	"container": "Header_container__3n0_L",
	"group": "Header_group__1Mtjo",
	"title": "Header_title__1bA5f",
	"btn": "Header_btn__3qVJy",
	"searchBar": "Header_searchBar__2rrr-"
};


/***/ }),

/***/ 8662:
/***/ ((module) => {

// Exports
module.exports = {
	"searchBar": "search_searchBar__2Guix",
	"resultContainer": "search_resultContainer__2xI3d",
	"item": "search_item__1xsmB"
};


/***/ }),

/***/ 3014:
/***/ ((module) => {

// Exports
module.exports = {
	"layout": "layout_layout__BkE7M"
};


/***/ }),

/***/ 4090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ headerConstants),
/* harmony export */   "b": () => (/* binding */ filterConstants)
/* harmony export */ });
const headerConstants = {
    HEADER_TITLE: "MovieGalaxy",
    WATCH_LIST: "WatchList",
    GITHUB: "GitHub",
    SEARCHBAR: "Search Movie ..."
};
const filterConstants = {
    POPULAR: "Popular",
    TOP_RATED: "Top Rated",
    UPCOMING: "Upcoming",
    NOW_PLAYING: "Now Playing"
};


/***/ }),

/***/ 4367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ useDevice)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useDevice = ()=>{
    //useDevice hook
    const { 0: device , 1: setDevice  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const handleResize = ()=>{
            setDevice({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return ()=>window.removeEventListener("resize", handleResize)
        ;
    }, []);
    return device;
};


/***/ }),

/***/ 620:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Layout/Header/Header.module.scss
var Header_module = __webpack_require__(6176);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
// EXTERNAL MODULE: ./constants/headerConstants.ts
var headerConstants = __webpack_require__(4090);
// EXTERNAL MODULE: ./hooks/useDevice.ts
var useDevice = __webpack_require__(4367);
// EXTERNAL MODULE: ./components/Layout/Search/search.module.scss
var search_module = __webpack_require__(8662);
var search_module_default = /*#__PURE__*/__webpack_require__.n(search_module);
;// CONCATENATED MODULE: external "lodash.debounce"
const external_lodash_debounce_namespaceObject = require("lodash.debounce");
var external_lodash_debounce_default = /*#__PURE__*/__webpack_require__.n(external_lodash_debounce_namespaceObject);
// EXTERNAL MODULE: ./services/movieService.ts
var movieService = __webpack_require__(8352);
;// CONCATENATED MODULE: ./hooks/useSearch.ts


const useSearch = ()=>{
    const search = async (name)=>{
        return await movieService/* default.searchByName */.Z.searchByName(name);
    };
    return {
        search
    };
};
/* harmony default export */ const hooks_useSearch = (useSearch);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/Layout/Search/Search.tsx







//debounce in loadash
const Search = ()=>{
    const { 0: text , 1: setSearchText  } = (0,external_react_.useState)("");
    const { 0: results , 1: setResults  } = (0,external_react_.useState)();
    const { search  } = hooks_useSearch();
    const router = (0,router_.useRouter)();
    const onSearch = async (event)=>{
        setSearchText(event.target.value);
        if (event.target.value.trim() !== "") {
            const data = await search(event.target.value);
            setResults(data);
        } else {
            setResults(undefined);
        }
    };
    const changePage = (event, id)=>{
        setResults(undefined);
        router.push(`/Movie/${id}`);
    };
    const debounceHandleSearch = external_lodash_debounce_default()(onSearch, 500);
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (search_module_default()).searchBar,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    type: "text",
                    placeholder: headerConstants/* headerConstants.SEARCHBAR */.h.SEARCHBAR,
                    onChange: debounceHandleSearch
                }),
                results && results.results.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (search_module_default()).resultContainer,
                    children: results && results.results.length > 0 && results.results.map((result)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: (search_module_default()).item,
                            onClick: (e)=>changePage(e, result.id)
                            ,
                            children: result.title
                        }, result.id)
                    )
                })
            ]
        })
    }));
};
/* harmony default export */ const Search_Search = (Search);

;// CONCATENATED MODULE: ./components/Layout/Header/Header.tsx







const Header = ()=>{
    const device = (0,useDevice/* useDevice */.F)();
    const router = (0,router_.useRouter)();
    const goToWatchlist = ()=>{
        router.push("/WatchList");
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Header_module_default()).header,
        children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
            className: (Header_module_default()).container,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Header_module_default()).group,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: (Header_module_default()).btn,
                                onClick: goToWatchlist,
                                children: headerConstants/* headerConstants.WATCH_LIST */.h.WATCH_LIST
                            }),
                            device && device.width >= 770 && /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: (Header_module_default()).btn,
                                href: "https://github.com/hamed-bavar/MovieApp",
                                children: headerConstants/* headerConstants.GITHUB */.h.GITHUB
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: device && device.width >= 770 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (Header_module_default()).title,
                            children: headerConstants/* headerConstants.HEADER_TITLE */.h.HEADER_TITLE
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Search_Search, {
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const Header_Header = (Header);

// EXTERNAL MODULE: ./components/Layout/layout.module.scss
var layout_module = __webpack_require__(3014);
var layout_module_default = /*#__PURE__*/__webpack_require__.n(layout_module);
;// CONCATENATED MODULE: ./components/Layout/Layout.tsx




const Layout = ({ children  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (layout_module_default()).layout,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header_Header, {
            }),
            children
        ]
    }));
};
/* harmony default export */ const Layout_Layout = (Layout);

// EXTERNAL MODULE: ./hooks/useWatchList.tsx
var useWatchList = __webpack_require__(1705);
;// CONCATENATED MODULE: ./pages/_app.tsx






function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(useWatchList/* WatchListProvider */.td, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Layout_Layout, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [705,352], () => (__webpack_exec__(620)));
module.exports = __webpack_exports__;

})();