(() => {
var exports = {};
exports.id = 205;
exports.ids = [205];
exports.modules = {

/***/ 9884:
/***/ ((module) => {

// Exports
module.exports = {
	"gallery": "gallery_gallery__15XBi",
	"img": "gallery_img__20Tcm",
	"headGallery": "gallery_headGallery__1gyYo"
};


/***/ }),

/***/ 1172:
/***/ ((module) => {

// Exports
module.exports = {
	"notification": "notif_notification__1QEkG"
};


/***/ }),

/***/ 6833:
/***/ ((module) => {

// Exports
module.exports = {
	"movieDetailWrapper": "ShowDetails_movieDetailWrapper__4Cyu3",
	"bg": "ShowDetails_bg__JHnRQ",
	"imgWrapper": "ShowDetails_imgWrapper__1MZ6i",
	"img": "ShowDetails_img__3cT9H",
	"textWrapper": "ShowDetails_textWrapper__UTFdZ",
	"head": "ShowDetails_head__3kJNF",
	"overview": "ShowDetails_overview__pbCqT",
	"header": "ShowDetails_header__2ZK4O",
	"listItems": "ShowDetails_listItems__12Jl6"
};


/***/ }),

/***/ 7620:
/***/ ((module) => {

// Exports
module.exports = {
	"sliderContainer": "slider_sliderContainer__1v04I",
	"path": "slider_path__12SXp",
	"sliderItem": "slider_sliderItem__1zFKH",
	"name": "slider_name__37YoM"
};


/***/ }),

/***/ 2131:
/***/ ((module) => {

// Exports
module.exports = {
	"loaderWrapper": "spinner_loaderWrapper__ABNFd",
	"ldsRoller": "spinner_ldsRoller__3KM6S"
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

/***/ 4055:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./services/movieService.ts
var movieService = __webpack_require__(8352);
// EXTERNAL MODULE: ./components/ShowDetails/ShowDetails.module.scss
var ShowDetails_module = __webpack_require__(6833);
var ShowDetails_module_default = /*#__PURE__*/__webpack_require__.n(ShowDetails_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./hooks/useWatchList.tsx
var useWatchList = __webpack_require__(1705);
;// CONCATENATED MODULE: ./components/ShowDetails/ShowDetails.tsx





const ShowDetails = ({ backdrop_path , genres , original_title , overview , poster_path , release_date , spoken_languages , vote_average , id , addNotif ,  })=>{
    const { add  } = (0,useWatchList/* default */.ZP)();
    const numberId = Number(id);
    const numberVote = Number(vote_average);
    const addToList = ()=>{
        addNotif();
        add({
            id: numberId,
            poster_path,
            original_title,
            release_date,
            vote_average: numberVote
        });
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (ShowDetails_module_default()).movieDetailWrapper,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (ShowDetails_module_default()).bg,
                    style: {
                        backgroundImage: `url(https://movie-galaxy-proxy.herokuapp.com/movies/image${backdrop_path}/1280)`
                    }
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (ShowDetails_module_default()).imgWrapper,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        src: `https://movie-galaxy-proxy.herokuapp.com/movies/image${poster_path}/400`,
                        width: "100%",
                        height: "100%",
                        layout: "responsive",
                        objectFit: "cover",
                        className: (ShowDetails_module_default()).img
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (ShowDetails_module_default()).textWrapper,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (ShowDetails_module_default()).head,
                            children: original_title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: addToList,
                            children: "Add To Watch List"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: (ShowDetails_module_default()).overview,
                            children: overview
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(ShowList, {
                            head: "Genres",
                            list: genres
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(ShowList, {
                            head: "Spoken Languages",
                            list: spoken_languages
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(ShowList, {
                            head: "Release Date",
                            list: [
                                {
                                    name: release_date
                                }
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};
const ShowList = ({ head , list  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (ShowDetails_module_default()).header,
                children: head
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (ShowDetails_module_default()).listItems,
                children: list.map((item, index)=>{
                    return(/*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: item.name
                    }, index));
                })
            })
        ]
    }));
};
/* harmony default export */ const ShowDetails_ShowDetails = (ShowDetails);

// EXTERNAL MODULE: ./components/Slider/slider.module.scss
var slider_module = __webpack_require__(7620);
var slider_module_default = /*#__PURE__*/__webpack_require__.n(slider_module);
;// CONCATENATED MODULE: external "react-slick"
const external_react_slick_namespaceObject = require("react-slick");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_namespaceObject);
;// CONCATENATED MODULE: ./hooks/useSlider.ts



const useSlider = (id)=>{
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(true);
    const { 0: data , 1: setData  } = (0,external_react_.useState)(undefined);
    const { 0: error , 1: setError  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        (async ()=>{
            try {
                const res = await movieService/* default.getCredits */.Z.getCredits(id);
                setLoading(false);
                setData(res);
            } catch (e) {
                setError(true);
                setLoading(false);
            }
        })();
    }, [
        id
    ]);
    return {
        loading,
        data,
        error
    };
};
/* harmony default export */ const hooks_useSlider = (useSlider);

// EXTERNAL MODULE: ./components/Spinner/spinner.module.scss
var spinner_module = __webpack_require__(2131);
var spinner_module_default = /*#__PURE__*/__webpack_require__.n(spinner_module);
;// CONCATENATED MODULE: ./components/Spinner/Spinner.tsx


const Spinner = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (spinner_module_default()).loaderWrapper,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (spinner_module_default()).ldsRoller,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                })
            ]
        })
    }));
};
/* harmony default export */ const Spinner_Spinner = (Spinner);

// EXTERNAL MODULE: ./hooks/useDevice.ts
var useDevice = __webpack_require__(4367);
;// CONCATENATED MODULE: ./components/Slider/Slider.tsx








let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
};
const Slider = ({ id  })=>{
    const { loading , data , error  } = hooks_useSlider(id);
    const device = (0,useDevice/* useDevice */.F)();
    if (device && (device === null || device === void 0 ? void 0 : device.width) < 700) {
        settings.slidesToShow = 1;
    }
    if (device && (device === null || device === void 0 ? void 0 : device.width) > 700 && (device === null || device === void 0 ? void 0 : device.width) < 1100) {
        settings.slidesToShow = 3;
    }
    if (device && (device === null || device === void 0 ? void 0 : device.width) > 1400) {
        settings.slidesToShow = 4;
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (slider_module_default()).path,
                children: "Casts"
            }),
            loading && /*#__PURE__*/ jsx_runtime_.jsx(Spinner_Spinner, {
            }),
            error && "someThing bad happend",
            /*#__PURE__*/ jsx_runtime_.jsx((external_react_slick_default()), {
                ...settings,
                className: (slider_module_default()).sliderContainer,
                children: data && data.cast.map((item)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (slider_module_default()).sliderItem,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: `https://movie-galaxy-proxy.herokuapp.com/movies/image${item.profile_path}/500`,
                                layout: "responsive",
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                className: (slider_module_default()).img
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (slider_module_default()).name,
                                children: item.name
                            })
                        ]
                    }, item.id)
                )
            })
        ]
    }));
};
/* harmony default export */ const Slider_Slider = (Slider);

// EXTERNAL MODULE: ./components/Gallery/gallery.module.scss
var gallery_module = __webpack_require__(9884);
var gallery_module_default = /*#__PURE__*/__webpack_require__.n(gallery_module);
;// CONCATENATED MODULE: ./hooks/useGallery.ts



const useGallery = (id)=>{
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(true);
    const { 0: data , 1: setData  } = (0,external_react_.useState)(undefined);
    const { 0: error , 1: setError  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        (async ()=>{
            try {
                const res = await movieService/* default.getMovieGallery */.Z.getMovieGallery(id);
                setLoading(false);
                setData(res);
            } catch (e) {
                setError(true);
                setLoading(false);
            }
        })();
    }, [
        id
    ]);
    return {
        loading,
        data,
        error
    };
};
/* harmony default export */ const hooks_useGallery = (useGallery);

;// CONCATENATED MODULE: ./components/Gallery/Gallery.tsx






let Gallery_settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};
const Gallery = ({ id  })=>{
    const { loading , data , error  } = hooks_useGallery(id);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            loading && /*#__PURE__*/ jsx_runtime_.jsx(Spinner_Spinner, {
            }),
            error && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "someThing bad happend"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (gallery_module_default()).headGallery,
                children: "Gallery"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((external_react_slick_default()), {
                className: (gallery_module_default()).gallery,
                ...Gallery_settings,
                children: data === null || data === void 0 ? void 0 : data.backdrops.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: `https://movie-galaxy-proxy.herokuapp.com/movies/gallery${item.file_path}`,
                            width: "100%",
                            height: "100%",
                            className: (gallery_module_default()).img
                        })
                    }, item.file_path)
                )
            })
        ]
    }));
};
/* harmony default export */ const Gallery_Gallery = (Gallery);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./components/Notif/notif.module.scss
var notif_module = __webpack_require__(1172);
var notif_module_default = /*#__PURE__*/__webpack_require__.n(notif_module);
;// CONCATENATED MODULE: ./components/Notif/Notif.tsx



const Notif = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (notif_module_default()).notification,
        children: "Added"
    }));
};
/* harmony default export */ const Notif_Notif = (Notif);

;// CONCATENATED MODULE: ./pages/Movie/[id]/index.tsx








const Index = ({ movie  })=>{
    const router = (0,router_.useRouter)();
    const { 0: id , 1: setId  } = (0,external_react_.useState)(router.query.id);
    const { 0: notif , 1: setNotif  } = (0,external_react_.useState)(false);
    const addNotif = ()=>{
        setNotif(true);
        setTimeout(()=>{
            setNotif(false);
        }, 700);
    };
    (0,external_react_.useEffect)(()=>{
        setId(router.query.id);
    }, [
        router.query.id
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ShowDetails_ShowDetails, {
                ...movie,
                id: id,
                addNotif: addNotif
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Slider_Slider, {
                id: id
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Gallery_Gallery, {
                id: id
            }),
            notif && /*#__PURE__*/ jsx_runtime_.jsx(Notif_Notif, {
            })
        ]
    }));
};
const getServerSideProps = async (ctx)=>{
    const { id  } = ctx.query;
    const movie = await movieService/* default.getMovieById */.Z.getMovieById(id);
    return {
        props: {
            movie
        }
    };
};
/* harmony default export */ const _id_ = (Index);


/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

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

/***/ 3018:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [675,705,352], () => (__webpack_exec__(4055)));
module.exports = __webpack_exports__;

})();