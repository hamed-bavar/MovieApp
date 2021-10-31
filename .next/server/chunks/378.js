exports.id = 378;
exports.ids = [378];
exports.modules = {

/***/ 4484:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "card_card__j-M6W",
	"deleteIcon": "card_deleteIcon__3IclV",
	"cardContent": "card_cardContent__2eJQG",
	"imageConatiner": "card_imageConatiner__1pddM",
	"image": "card_image__15NGH",
	"date": "card_date__9C4zn",
	"rate": "card_rate__3pSQ5"
};


/***/ }),

/***/ 6802:
/***/ ((module) => {

// Exports
module.exports = {
	"cardsWrapper": "cards_cardsWrapper__26di_"
};


/***/ }),

/***/ 8378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Cards_Cards)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Cards/Card/card.module.scss
var card_module = __webpack_require__(4484);
var card_module_default = /*#__PURE__*/__webpack_require__.n(card_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./hooks/useWatchList.tsx
var useWatchList = __webpack_require__(1705);
;// CONCATENATED MODULE: ./components/Cards/Card/Card.tsx






const Card = ({ id , release_date , poster_path , original_title , vote_average , isWatchList ,  })=>{
    const { remove  } = (0,useWatchList/* default */.ZP)();
    const router = (0,router_.useRouter)();
    const srcImage = `https://movie-galaxy-proxy.herokuapp.com/movies/image${poster_path}/300`;
    const changePage = (e)=>{
        e.stopPropagation();
        router.push(`/Movie/${id}`);
    };
    const removeItem = (e)=>{
        e.stopPropagation();
        remove(id);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (card_module_default()).card,
        onClick: changePage,
        children: [
            isWatchList && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (card_module_default()).deleteIcon,
                onClick: removeItem,
                children: "remove"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (card_module_default()).imageConatiner,
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: srcImage,
                    className: (card_module_default()).image,
                    width: 250,
                    height: 350,
                    alt: original_title
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (card_module_default()).rate,
                children: vote_average
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: (card_module_default()).cardContent,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (card_module_default()).title,
                        children: original_title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (card_module_default()).date,
                        children: release_date
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const Card_Card = (Card);

// EXTERNAL MODULE: ./components/Cards/cards.module.scss
var cards_module = __webpack_require__(6802);
var cards_module_default = /*#__PURE__*/__webpack_require__.n(cards_module);
;// CONCATENATED MODULE: ./components/Cards/Cards.tsx




const Cards = ({ movies , isWatchList =false  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (cards_module_default()).cardsWrapper,
        children: movies && movies.map((e)=>/*#__PURE__*/ jsx_runtime_.jsx(Card_Card, {
                id: e.id,
                release_date: e.release_date,
                poster_path: e.poster_path,
                original_title: e.original_title,
                vote_average: e.vote_average,
                isWatchList: isWatchList
            }, e.id)
        )
    }));
};
/* harmony default export */ const Cards_Cards = (Cards);


/***/ })

};
;