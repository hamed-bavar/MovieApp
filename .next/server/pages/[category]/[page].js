(() => {
var exports = {};
exports.id = 685;
exports.ids = [685];
exports.modules = {

/***/ 8158:
/***/ ((module) => {

// Exports
module.exports = {
	"category": "filter_category__2LW71"
};


/***/ }),

/***/ 6315:
/***/ ((module) => {

// Exports
module.exports = {
	"list": "pagination_list__17WGN",
	"btn": "pagination_btn__K5nor",
	"activeItem": "pagination_activeItem__1SIJ1",
	"listWrapper": "pagination_listWrapper__3tMfy",
	"item": "pagination_item__1UQ1-"
};


/***/ }),

/***/ 8516:
/***/ ((module) => {

// Exports
module.exports = {
	"homepageContainer": "home_homepageContainer__3GKoQ"
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

/***/ 6166:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _page_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Filter/filter.module.scss
var filter_module = __webpack_require__(8158);
var filter_module_default = /*#__PURE__*/__webpack_require__.n(filter_module);
// EXTERNAL MODULE: ./constants/headerConstants.ts
var headerConstants = __webpack_require__(4090);
;// CONCATENATED MODULE: ./components/Filter/Filter.tsx




const Filter = ({ category ="popular" , onChangeFilter  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
            onChange: onChangeFilter,
            defaultValue: category,
            name: "categoties",
            className: (filter_module_default()).category,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                    value: "popular",
                    children: headerConstants/* filterConstants.POPULAR */.b.POPULAR
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                    value: "now_playing",
                    children: headerConstants/* filterConstants.NOW_PLAYING */.b.NOW_PLAYING
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                    value: "top_rated",
                    children: headerConstants/* filterConstants.TOP_RATED */.b.TOP_RATED
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                    value: "upcoming",
                    children: headerConstants/* filterConstants.UPCOMING */.b.UPCOMING
                })
            ]
        })
    }));
};
/* harmony default export */ const Filter_Filter = (Filter);

// EXTERNAL MODULE: ./components/Cards/Cards.tsx + 1 modules
var Cards = __webpack_require__(8378);
// EXTERNAL MODULE: ./pages/[category]/[page]/home.module.scss
var home_module = __webpack_require__(8516);
var home_module_default = /*#__PURE__*/__webpack_require__.n(home_module);
// EXTERNAL MODULE: ./components/Pagination/pagination.module.scss
var pagination_module = __webpack_require__(6315);
var pagination_module_default = /*#__PURE__*/__webpack_require__.n(pagination_module);
;// CONCATENATED MODULE: external "react-icons/ai"
const ai_namespaceObject = require("react-icons/ai");
;// CONCATENATED MODULE: ./hooks/usePagination.ts

const usePagination = ({ numberOfPages , pageLimit =5 , onChangePage  })=>{
    const { 0: currentPage , 1: setCurrentPage  } = (0,external_react_.useState)(1);
    const { 0: pages  } = (0,external_react_.useState)(numberOfPages);
    function goToNextPage() {
        setCurrentPage((prev)=>{
            onChangePage(prev + 1);
            return prev + 1;
        });
    }
    function goToPreviousPage() {
        setCurrentPage((prev)=>{
            onChangePage(prev - 1);
            return prev - 1;
        });
    }
    function changePage(e, item) {
        onChangePage(item);
        setCurrentPage(item);
    }
    const getPaginationGroup = ()=>{
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill(0).map((_, idx)=>start + idx + 1
        );
    };
    return {
        currentPage,
        goToNextPage,
        goToPreviousPage,
        changePage,
        getPaginationGroup
    };
};

;// CONCATENATED MODULE: ./components/Pagination/Pagination.tsx





const Pagination = ({ numberOfPages , pageLimit =5 , onChangePage  })=>{
    const { currentPage , goToNextPage , goToPreviousPage , changePage , getPaginationGroup  } = usePagination({
        numberOfPages,
        pageLimit,
        onChangePage
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (pagination_module_default()).list,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                disabled: currentPage === 1,
                className: (pagination_module_default()).btn,
                onClick: goToPreviousPage,
                children: /*#__PURE__*/ jsx_runtime_.jsx(ai_namespaceObject.AiOutlineArrowLeft, {
                    cursor: "pointer"
                })
            }),
            getPaginationGroup().map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
                    onClick: (e)=>changePage(e, item)
                    ,
                    className: `${(pagination_module_default()).item} ${item === currentPage ? (pagination_module_default()).activeItem : ""}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: item
                    })
                }, index)
            ),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                disabled: currentPage === numberOfPages,
                onClick: goToNextPage,
                className: (pagination_module_default()).btn,
                children: /*#__PURE__*/ jsx_runtime_.jsx(ai_namespaceObject.AiOutlineArrowRight, {
                    cursor: "pointer"
                })
            })
        ]
    }));
};
/* harmony default export */ const Pagination_Pagination = (Pagination);

// EXTERNAL MODULE: ./services/movieService.ts
var movieService = __webpack_require__(8352);
;// CONCATENATED MODULE: ./utils/generateMoviePath.ts
const generatePath = ()=>{
    const cats = [
        "popular",
        "now_playing",
        "top_rated",
        "upcoming"
    ];
    const pages = [
        ...Array(10)
    ].map((_, i)=>i.toString()
    );
    const paths = [];
    for (const category of cats)for (const page of pages)paths.push({
        params: {
            category,
            page
        }
    });
    return paths;
};

// EXTERNAL MODULE: ./node_modules/next/dist/client/router.js
var client_router = __webpack_require__(387);
;// CONCATENATED MODULE: ./pages/[category]/[page]/index.tsx









const Index = ({ category: category1 , movies  })=>{
    const router = (0,client_router.useRouter)();
    const onChangeFilter = (e)=>{
        const category = e.target.value;
        router.push(`/${category}/1`);
    };
    const onChangePage = (page)=>{
        const category = router.query.category;
        router.push(`/${category}/${page}`);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (home_module_default()).homepageContainer,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Filter_Filter, {
                category: category1,
                onChangeFilter: onChangeFilter
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Cards/* default */.Z, {
                movies: movies
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Pagination_Pagination, {
                numberOfPages: 50,
                onChangePage: onChangePage
            })
        ]
    }));
};
const getStaticProps = async (context)=>{
    let movies = [];
    try {
        movies = await movieService/* default.getMovieByCatAndPage */.Z.getMovieByCatAndPage(context.params.category, +context.params.page);
        return {
            props: {
                movies: movies,
                category: context.params.category
            }
        };
    } catch (e) {
        return {
            notFound: true
        };
    }
};
const getStaticPaths = async ()=>{
    const paths = generatePath();
    return {
        paths: paths,
        fallback: true
    };
};
//get staticprops in next js
/* harmony default export */ const _page_ = (Index);


/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,285,705,352,378], () => (__webpack_exec__(6166)));
module.exports = __webpack_exports__;

})();