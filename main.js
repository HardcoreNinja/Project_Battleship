/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../resources/fonts/Lato/Lato-Light.ttf */ "./src/resources/fonts/Lato/Lato-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../resources/fonts/Lato/Lato-Bold.ttf */ "./src/resources/fonts/Lato/Lato-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'Lato';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n@font-face {\n    font-family: 'LatoBold';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n* {\n    padding: 0px;\n    margin: 0px;\n    font-family: 'Lato';\n    color: white;\n}\n\nh1{\n    font-family: 'LatoBold';\n}\n\n:root{\n    background: rgb(36, 41, 46);\n}\n\n.material-symbols-outlined {\n    font-family: 'Material Symbols Outlined';\n    font-weight: normal;\n    font-style: normal;\n    font-size: 50px;\n    /* Preferred icon size */\n    display: inline-block;\n    line-height: 1;\n    text-transform: none;\n    letter-spacing: normal;\n    word-wrap: normal;\n    white-space: nowrap;\n    direction: ltr;\n}\n\n#bgOverlay{\n    display: flex;\n    position: fixed; /* Stay in place */\n    background: rgba(0, 0, 0, .7);\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    grid-row-start: 1;\n    grid-row-end: 3;\n    grid-column-start: 1;\n    grid-column-end: 3;\n}\n\n#modal{\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center center;\n    place-items: center center;\n    background-color: rgb(36, 41, 46);\n    margin: 15% auto; /* 15% from the top and centered */\n    padding: 20px;\n    border: 1px solid #888;\n    border-radius: 10px;\n    width: 80%; /* Could be more or less, depending on screen size */\n}\n\n#content {\n    display: grid;\n    grid-template-columns: 3fr 1fr;\n    grid-template-rows: 1fr 7fr;\n    background: black;\n    grid-template-areas:\n        'nav nav'\n        'shipBoard hud'\n    ;\n    min-width: 100vw;\n    min-height: 100vh;\n    background: rgb(36, 41, 46);\n}\n\n#nav {\n    grid-area: nav;\n    background: rgb(29\t31\t34);\n    display: flex;\n    flex-flow: row wrap;\n    place-content: center center;\n    place-items: center center;\n    gap: 20px;\n}\n\n#shipBoard {\n    grid-area: shipBoard;\n    background: rgb(37\t41\t46);\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-row: 1fr 1fr;\n    grid-template-areas:\n        'missileGridContainer'\n        'shipGridContainer'\n    ;\n}\n\n#shipBoardOverlay {\n    grid-row-start: 1;\n    grid-row-end: 3;\n    grid-column-start: 1;\n    grid-column-end: 1;\n    display: block;\n    width: 100%;\n    height: 100%;\n    background: rgba(81, 131, 248, .5);\n    z-index: 1;\n}\n\n.boardContainer {\n    display: flex;\n    background: rgb(31, 33, 37);;\n    place-content: flex-start flex-start;\n    place-items: flex-start flex-start;\n    flex-flow: row wrap;\n    min-width: 340px;\n    min-height: 340px;\n    max-width: 340px;\n    max-height: 340px;\n}\n\n.boardSquare {\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center center;\n    place-items: center center;\n    width: 32px;\n    height: 32px;\n    background: rgb(52, 122, 182);\n    border: 1px solid rgb(196, 41, 106);\n    transition: 0.75s all;\n    border-radius: 5px;\n}\n\n.boardSquare:hover {\n    transform: scale(1.1);\n    background: rgba(234, 255, 0, .75);\n\n}\n\n#missileGridContainer {\n    grid-area: missileGridContainer;\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center center;\n    place-items: center center;\n    padding: 5px;\n    z-index: 0;\n}\n\n#shipGridContainer {\n    grid-area: shipGridContainer;\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center center;\n    place-items: center center;\n    padding: 5px;\n    z-index: 0;\n}\n\n.front {\n    width: 28px;\n    height: 28px;\n    border-top-left-radius: 50%;\n    border-bottom-left-radius: 50%;\n    border-top-right-radius: 30%;\n    border-bottom-right-radius: 30%;\n    background-color: rgb(196, 41, 106);\n}\n\n.mid {\n    width: 28px;\n    height: 28px;\n    border-top-left-radius: 22%;\n    border-bottom-left-radius: 22%;\n    border-top-right-radius: 22%;\n    border-bottom-right-radius: 22%;\n    background-color: rgb(196, 41, 106);\n}\n\n#hud {\n    grid-area: hud;\n    background: rgb(36, 41, 46);\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 2fr 2fr;\n    grid-template-areas:\n        'orientationButtonContainer'\n        'shipsContainer'\n        'selectedShipContainer'\n    ;\n    gap: 20px;\n}\n\n#hudOverlay{\n    grid-row-start: 1;\n    grid-row-end: 4;\n    grid-column-start: 1;\n    grid-column-end: 1;\n    display: none;\n    width: 100%;\n    height: 100%;\n    background: rgba(81, 131, 248, .5);\n    z-index: 1;\n}\n\n#shipsOverlay {\n    grid-row-start: 2;\n    grid-row-end: 3;\n    grid-column-start: 1;\n    grid-column-end: 1;\n    display: none;\n    width: 100%;\n    height: 100%;\n    background: rgba(81, 131, 248, .5);\n    border-radius: 5px;\n    z-index: 1;\n}\n\n#shipsContainer {\n    grid-area: shipsContainer;\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center center;\n    place-items: center center;\n}\n\n#ships {\n    display: flex;\n    background: rgb(18, 19, 22);\n    place-content: center center;\n    place-items: center center;\n    flex-flow: column nowrap;\n    min-height: 25%;\n    border-radius: 5px;\n}\n\n#destroyer,\n#selected_destroyer {\n    display: flex;\n    place-content: center flex-start;\n    place-items: center flex-start;\n    width: 32px;\n    height: 32px;\n    background: rgb(18, 19, 22);\n    border: 1px solid transparent;\n}\n\n.destroyerIcon {\n    width: 30px;\n    height: 30px;\n    border-top-left-radius: 50%;\n    border-bottom-left-radius: 50%;\n    border-top-right-radius: 30%;\n    border-bottom-right-radius: 30%;\n    background-color: rgb(196, 41, 106);\n}\n\n#submarine,\n#selected_submarine {\n    display: flex;\n    place-content: center center;\n    place-items: center center;\n    flex-flow: row wrap;\n    width: 64px;\n    height: 32px;\n    background: rgb(18, 19, 22);\n    border: 1px solid transparent;\n}\n\n.submarineIcon {\n    width: 60px;\n    height: 30px;\n    border-top-left-radius: 50%;\n    border-bottom-left-radius: 50%;\n    border-top-right-radius: 25%;\n    border-bottom-right-radius: 25%;\n    background-color: rgb(196, 41, 106);\n}\n\n#cruiser,\n#selected_cruiser {\n    display: flex;\n    place-content: center center;\n    place-items: center center;\n    flex-flow: row wrap;\n    width: 96px;\n    height: 32px;\n    background: rgb(18, 19, 22);\n    border: 1px solid transparent;\n}\n\n.cruiserIcon {\n    width: 94px;\n    height: 30px;\n    border-top-left-radius: 50%;\n    border-bottom-left-radius: 50%;\n    border-top-right-radius: 25%;\n    border-bottom-right-radius: 25%;\n    background-color: rgb(196, 41, 106);\n}\n\n#battleship,\n#selected_battleship {\n    display: flex;\n    place-content: center center;\n    place-items: center center;\n    flex-flow: row wrap;\n    width: 128px;\n    height: 32px;\n    background: rgb(18,\t19,\t22);\n    border: 1px solid transparent;\n}\n\n.battleshipIcon {\n    width: 126px;\n    height: 30px;\n    border-top-left-radius: 50%;\n    border-bottom-left-radius: 50%;\n    border-top-right-radius: 25%;\n    border-bottom-right-radius: 25%;\n    background-color: rgb(196, 41, 106);\n}\n\n#carrier,\n#selected_carrier {\n    display: flex;\n    place-content: center center;\n    place-items: center center;\n    flex-flow: row wrap;\n    width: 160px;\n    height: 32px;\n    background: rgb(18,\t19,\t22);\n    border: 1px solid transparent;\n}\n\n.carrierIcon {\n    width: 158px;\n    height: 30px;\n    border-top-left-radius: 50%;\n    border-bottom-left-radius: 50%;\n    border-top-right-radius: 25%;\n    border-bottom-right-radius: 25%;\n    background-color: rgb(196, 41, 106);\n}\n\n#orientationButtonContainer {\n    grid-area: orientationButtonContainer;\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center center;\n    place-items: center center;\n}\n\n#orientationButton {\n    display: flex;\n    width: 160px;\n    height: 32px;\n}\n\nbutton {\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center center;\n    place-items: center center;\n    background: rgb(181, 17, 87);\n    outline-style: none;\n    border: 0px;\n    border-radius: 5px;\n    transition: .75s;\n}\n\nbutton:hover{\n    background: rgb(75,\t162,\t198);\n    box-shadow: 2px 2px 7px 4px rgb(0, 145, 200, 0.5);\n    outline-style: none;\n    border: 0px;\n    border-radius: 5px;\n    color: black;\n}\n\n#selectedShipContainer {\n    grid-area: selectedShipContainer;\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center center;\n    place-items: center center;\n}\n\n#selected_ShipContainer {\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center center;\n    place-items: center center;\n    gap: 70px;\n}\n\n#selectedShip {\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center flex-start;\n    place-items: center flex-start;\n    background: rgb(18, 19, 22);\n    border-radius: 5px;\n    width: 200px;\n    height: 200px;\n}", "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,4CAAkD;AACtD;AACA;IACI,uBAAuB;IACvB,4CAAiD;AACrD;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,wCAAwC;IACxC,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;IACf,wBAAwB;IACxB,qBAAqB;IACrB,cAAc;IACd,oBAAoB;IACpB,sBAAsB;IACtB,iBAAiB;IACjB,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,eAAe,EAAE,kBAAkB;IACnC,6BAA6B;IAC7B,UAAU,EAAE,eAAe;IAC3B,OAAO;IACP,MAAM;IACN,WAAW,EAAE,eAAe;IAC5B,YAAY,EAAE,gBAAgB;IAC9B,iBAAiB;IACjB,eAAe;IACf,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,4BAA4B;IAC5B,0BAA0B;IAC1B,iCAAiC;IACjC,gBAAgB,EAAE,kCAAkC;IACpD,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,UAAU,EAAE,oDAAoD;AACpE;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,2BAA2B;IAC3B,iBAAiB;IACjB;;;IAGA;IACA,gBAAgB;IAChB,iBAAiB;IACjB,2BAA2B;AAC/B;;AAEA;IACI,cAAc;IACd,yBAAyB;IACzB,aAAa;IACb,mBAAmB;IACnB,4BAA4B;IAC5B,0BAA0B;IAC1B,SAAS;AACb;;AAEA;IACI,oBAAoB;IACpB,yBAAyB;IACzB,aAAa;IACb,0BAA0B;IAC1B,iBAAiB;IACjB;;;IAGA;AACJ;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,oBAAoB;IACpB,kBAAkB;IAClB,cAAc;IACd,WAAW;IACX,YAAY;IACZ,kCAAkC;IAClC,UAAU;AACd;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,oCAAoC;IACpC,kCAAkC;IAClC,mBAAmB;IACnB,gBAAgB;IAChB,iBAAiB;IACjB,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,4BAA4B;IAC5B,0BAA0B;IAC1B,WAAW;IACX,YAAY;IACZ,6BAA6B;IAC7B,mCAAmC;IACnC,qBAAqB;IACrB,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,kCAAkC;;AAEtC;;AAEA;IACI,+BAA+B;IAC/B,aAAa;IACb,sBAAsB;IACtB,4BAA4B;IAC5B,0BAA0B;IAC1B,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,4BAA4B;IAC5B,aAAa;IACb,sBAAsB;IACtB,4BAA4B;IAC5B,0BAA0B;IAC1B,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,2BAA2B;IAC3B,8BAA8B;IAC9B,4BAA4B;IAC5B,+BAA+B;IAC/B,mCAAmC;AACvC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,2BAA2B;IAC3B,8BAA8B;IAC9B,4BAA4B;IAC5B,+BAA+B;IAC/B,mCAAmC;AACvC;;AAEA;IACI,cAAc;IACd,2BAA2B;IAC3B,aAAa;IACb,0BAA0B;IAC1B,+BAA+B;IAC/B;;;;IAIA;IACA,SAAS;AACb;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,oBAAoB;IACpB,kBAAkB;IAClB,aAAa;IACb,WAAW;IACX,YAAY;IACZ,kCAAkC;IAClC,UAAU;AACd;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,oBAAoB;IACpB,kBAAkB;IAClB,aAAa;IACb,WAAW;IACX,YAAY;IACZ,kCAAkC;IAClC,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,4BAA4B;IAC5B,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,4BAA4B;IAC5B,0BAA0B;IAC1B,wBAAwB;IACxB,eAAe;IACf,kBAAkB;AACtB;;AAEA;;IAEI,aAAa;IACb,gCAAgC;IAChC,8BAA8B;IAC9B,WAAW;IACX,YAAY;IACZ,2BAA2B;IAC3B,6BAA6B;AACjC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,2BAA2B;IAC3B,8BAA8B;IAC9B,4BAA4B;IAC5B,+BAA+B;IAC/B,mCAAmC;AACvC;;AAEA;;IAEI,aAAa;IACb,4BAA4B;IAC5B,0BAA0B;IAC1B,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,2BAA2B;IAC3B,6BAA6B;AACjC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,2BAA2B;IAC3B,8BAA8B;IAC9B,4BAA4B;IAC5B,+BAA+B;IAC/B,mCAAmC;AACvC;;AAEA;;IAEI,aAAa;IACb,4BAA4B;IAC5B,0BAA0B;IAC1B,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,2BAA2B;IAC3B,6BAA6B;AACjC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,2BAA2B;IAC3B,8BAA8B;IAC9B,4BAA4B;IAC5B,+BAA+B;IAC/B,mCAAmC;AACvC;;AAEA;;IAEI,aAAa;IACb,4BAA4B;IAC5B,0BAA0B;IAC1B,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,2BAA2B;IAC3B,6BAA6B;AACjC;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,2BAA2B;IAC3B,8BAA8B;IAC9B,4BAA4B;IAC5B,+BAA+B;IAC/B,mCAAmC;AACvC;;AAEA;;IAEI,aAAa;IACb,4BAA4B;IAC5B,0BAA0B;IAC1B,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,2BAA2B;IAC3B,6BAA6B;AACjC;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,2BAA2B;IAC3B,8BAA8B;IAC9B,4BAA4B;IAC5B,+BAA+B;IAC/B,mCAAmC;AACvC;;AAEA;IACI,qCAAqC;IACrC,aAAa;IACb,sBAAsB;IACtB,4BAA4B;IAC5B,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,4BAA4B;IAC5B,0BAA0B;IAC1B,4BAA4B;IAC5B,mBAAmB;IACnB,WAAW;IACX,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,6BAA6B;IAC7B,iDAAiD;IACjD,mBAAmB;IACnB,WAAW;IACX,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,gCAAgC;IAChC,aAAa;IACb,sBAAsB;IACtB,4BAA4B;IAC5B,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,4BAA4B;IAC5B,0BAA0B;IAC1B,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,gCAAgC;IAChC,8BAA8B;IAC9B,2BAA2B;IAC3B,kBAAkB;IAClB,YAAY;IACZ,aAAa;AACjB","sourcesContent":["@font-face {\n    font-family: 'Lato';\n    src: url('../resources/fonts/Lato/Lato-Light.ttf');\n}\n@font-face {\n    font-family: 'LatoBold';\n    src: url('../resources/fonts/Lato/Lato-Bold.ttf');\n}\n\n* {\n    padding: 0px;\n    margin: 0px;\n    font-family: 'Lato';\n    color: white;\n}\n\nh1{\n    font-family: 'LatoBold';\n}\n\n:root{\n    background: rgb(36, 41, 46);\n}\n\n.material-symbols-outlined {\n    font-family: 'Material Symbols Outlined';\n    font-weight: normal;\n    font-style: normal;\n    font-size: 50px;\n    /* Preferred icon size */\n    display: inline-block;\n    line-height: 1;\n    text-transform: none;\n    letter-spacing: normal;\n    word-wrap: normal;\n    white-space: nowrap;\n    direction: ltr;\n}\n\n#bgOverlay{\n    display: flex;\n    position: fixed; /* Stay in place */\n    background: rgba(0, 0, 0, .7);\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    grid-row-start: 1;\n    grid-row-end: 3;\n    grid-column-start: 1;\n    grid-column-end: 3;\n}\n\n#modal{\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center center;\n    place-items: center center;\n    background-color: rgb(36, 41, 46);\n    margin: 15% auto; /* 15% from the top and centered */\n    padding: 20px;\n    border: 1px solid #888;\n    border-radius: 10px;\n    width: 80%; /* Could be more or less, depending on screen size */\n}\n\n#content {\n    display: grid;\n    grid-template-columns: 3fr 1fr;\n    grid-template-rows: 1fr 7fr;\n    background: black;\n    grid-template-areas:\n        'nav nav'\n        'shipBoard hud'\n    ;\n    min-width: 100vw;\n    min-height: 100vh;\n    background: rgb(36, 41, 46);\n}\n\n#nav {\n    grid-area: nav;\n    background: rgb(29\t31\t34);\n    display: flex;\n    flex-flow: row wrap;\n    place-content: center center;\n    place-items: center center;\n    gap: 20px;\n}\n\n#shipBoard {\n    grid-area: shipBoard;\n    background: rgb(37\t41\t46);\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-row: 1fr 1fr;\n    grid-template-areas:\n        'missileGridContainer'\n        'shipGridContainer'\n    ;\n}\n\n#shipBoardOverlay {\n    grid-row-start: 1;\n    grid-row-end: 3;\n    grid-column-start: 1;\n    grid-column-end: 1;\n    display: block;\n    width: 100%;\n    height: 100%;\n    background: rgba(81, 131, 248, .5);\n    z-index: 1;\n}\n\n.boardContainer {\n    display: flex;\n    background: rgb(31, 33, 37);;\n    place-content: flex-start flex-start;\n    place-items: flex-start flex-start;\n    flex-flow: row wrap;\n    min-width: 340px;\n    min-height: 340px;\n    max-width: 340px;\n    max-height: 340px;\n}\n\n.boardSquare {\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center center;\n    place-items: center center;\n    width: 32px;\n    height: 32px;\n    background: rgb(52, 122, 182);\n    border: 1px solid rgb(196, 41, 106);\n    transition: 0.75s all;\n    border-radius: 5px;\n}\n\n.boardSquare:hover {\n    transform: scale(1.1);\n    background: rgba(234, 255, 0, .75);\n\n}\n\n#missileGridContainer {\n    grid-area: missileGridContainer;\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center center;\n    place-items: center center;\n    padding: 5px;\n    z-index: 0;\n}\n\n#shipGridContainer {\n    grid-area: shipGridContainer;\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center center;\n    place-items: center center;\n    padding: 5px;\n    z-index: 0;\n}\n\n.front {\n    width: 28px;\n    height: 28px;\n    border-top-left-radius: 50%;\n    border-bottom-left-radius: 50%;\n    border-top-right-radius: 30%;\n    border-bottom-right-radius: 30%;\n    background-color: rgb(196, 41, 106);\n}\n\n.mid {\n    width: 28px;\n    height: 28px;\n    border-top-left-radius: 22%;\n    border-bottom-left-radius: 22%;\n    border-top-right-radius: 22%;\n    border-bottom-right-radius: 22%;\n    background-color: rgb(196, 41, 106);\n}\n\n#hud {\n    grid-area: hud;\n    background: rgb(36, 41, 46);\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 2fr 2fr;\n    grid-template-areas:\n        'orientationButtonContainer'\n        'shipsContainer'\n        'selectedShipContainer'\n    ;\n    gap: 20px;\n}\n\n#hudOverlay{\n    grid-row-start: 1;\n    grid-row-end: 4;\n    grid-column-start: 1;\n    grid-column-end: 1;\n    display: none;\n    width: 100%;\n    height: 100%;\n    background: rgba(81, 131, 248, .5);\n    z-index: 1;\n}\n\n#shipsOverlay {\n    grid-row-start: 2;\n    grid-row-end: 3;\n    grid-column-start: 1;\n    grid-column-end: 1;\n    display: none;\n    width: 100%;\n    height: 100%;\n    background: rgba(81, 131, 248, .5);\n    border-radius: 5px;\n    z-index: 1;\n}\n\n#shipsContainer {\n    grid-area: shipsContainer;\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center center;\n    place-items: center center;\n}\n\n#ships {\n    display: flex;\n    background: rgb(18, 19, 22);\n    place-content: center center;\n    place-items: center center;\n    flex-flow: column nowrap;\n    min-height: 25%;\n    border-radius: 5px;\n}\n\n#destroyer,\n#selected_destroyer {\n    display: flex;\n    place-content: center flex-start;\n    place-items: center flex-start;\n    width: 32px;\n    height: 32px;\n    background: rgb(18, 19, 22);\n    border: 1px solid transparent;\n}\n\n.destroyerIcon {\n    width: 30px;\n    height: 30px;\n    border-top-left-radius: 50%;\n    border-bottom-left-radius: 50%;\n    border-top-right-radius: 30%;\n    border-bottom-right-radius: 30%;\n    background-color: rgb(196, 41, 106);\n}\n\n#submarine,\n#selected_submarine {\n    display: flex;\n    place-content: center center;\n    place-items: center center;\n    flex-flow: row wrap;\n    width: 64px;\n    height: 32px;\n    background: rgb(18, 19, 22);\n    border: 1px solid transparent;\n}\n\n.submarineIcon {\n    width: 60px;\n    height: 30px;\n    border-top-left-radius: 50%;\n    border-bottom-left-radius: 50%;\n    border-top-right-radius: 25%;\n    border-bottom-right-radius: 25%;\n    background-color: rgb(196, 41, 106);\n}\n\n#cruiser,\n#selected_cruiser {\n    display: flex;\n    place-content: center center;\n    place-items: center center;\n    flex-flow: row wrap;\n    width: 96px;\n    height: 32px;\n    background: rgb(18, 19, 22);\n    border: 1px solid transparent;\n}\n\n.cruiserIcon {\n    width: 94px;\n    height: 30px;\n    border-top-left-radius: 50%;\n    border-bottom-left-radius: 50%;\n    border-top-right-radius: 25%;\n    border-bottom-right-radius: 25%;\n    background-color: rgb(196, 41, 106);\n}\n\n#battleship,\n#selected_battleship {\n    display: flex;\n    place-content: center center;\n    place-items: center center;\n    flex-flow: row wrap;\n    width: 128px;\n    height: 32px;\n    background: rgb(18,\t19,\t22);\n    border: 1px solid transparent;\n}\n\n.battleshipIcon {\n    width: 126px;\n    height: 30px;\n    border-top-left-radius: 50%;\n    border-bottom-left-radius: 50%;\n    border-top-right-radius: 25%;\n    border-bottom-right-radius: 25%;\n    background-color: rgb(196, 41, 106);\n}\n\n#carrier,\n#selected_carrier {\n    display: flex;\n    place-content: center center;\n    place-items: center center;\n    flex-flow: row wrap;\n    width: 160px;\n    height: 32px;\n    background: rgb(18,\t19,\t22);\n    border: 1px solid transparent;\n}\n\n.carrierIcon {\n    width: 158px;\n    height: 30px;\n    border-top-left-radius: 50%;\n    border-bottom-left-radius: 50%;\n    border-top-right-radius: 25%;\n    border-bottom-right-radius: 25%;\n    background-color: rgb(196, 41, 106);\n}\n\n#orientationButtonContainer {\n    grid-area: orientationButtonContainer;\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center center;\n    place-items: center center;\n}\n\n#orientationButton {\n    display: flex;\n    width: 160px;\n    height: 32px;\n}\n\nbutton {\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center center;\n    place-items: center center;\n    background: rgb(181, 17, 87);\n    outline-style: none;\n    border: 0px;\n    border-radius: 5px;\n    transition: .75s;\n}\n\nbutton:hover{\n    background: rgb(75,\t162,\t198);\n    box-shadow: 2px 2px 7px 4px rgb(0, 145, 200, 0.5);\n    outline-style: none;\n    border: 0px;\n    border-radius: 5px;\n    color: black;\n}\n\n#selectedShipContainer {\n    grid-area: selectedShipContainer;\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center center;\n    place-items: center center;\n}\n\n#selected_ShipContainer {\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center center;\n    place-items: center center;\n    gap: 70px;\n}\n\n#selectedShip {\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center flex-start;\n    place-items: center flex-start;\n    background: rgb(18, 19, 22);\n    border-radius: 5px;\n    width: 200px;\n    height: 200px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/game/gameLogic.js":
/*!*******************************!*\
  !*** ./src/game/gameLogic.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ai": () => (/* binding */ ai),
/* harmony export */   "player1": () => (/* binding */ player1)
/* harmony export */ });
const Player = __webpack_require__(/*! ../test/player */ "./src/test/player.js");
const AI = __webpack_require__(/*! ../test/ai */ "./src/test/ai.js");

const player1 = new Player();
const ai = new AI();



/***/ }),

/***/ "./src/grid/grid.js":
/*!**************************!*\
  !*** ./src/grid/grid.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reusables_gridItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reusables/gridItems */ "./src/reusables/gridItems.js");
/* harmony import */ var _reusables_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusables/elements */ "./src/reusables/elements.js");



function createGrid() {
  const nav = (0,_reusables_elements__WEBPACK_IMPORTED_MODULE_1__.createDiv)();
  nav.setAttribute('id', 'nav');

  const shipBoard = (0,_reusables_elements__WEBPACK_IMPORTED_MODULE_1__.createDiv)();
  shipBoard.setAttribute('id', 'shipBoard');

  const hud = (0,_reusables_elements__WEBPACK_IMPORTED_MODULE_1__.createDiv)();
  hud.setAttribute('id', 'hud');

  (0,_reusables_gridItems__WEBPACK_IMPORTED_MODULE_0__.getContent)().append(nav, shipBoard, hud);
}

createGrid();


/***/ }),

/***/ "./src/head/head.js":
/*!**************************!*\
  !*** ./src/head/head.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resources_favicon_favicon_ico__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resources/favicon/favicon.ico */ "./src/resources/favicon/favicon.ico");


function createFavicon() {
  const head = document.querySelector('head');
  const link = document.createElement('link');
  link.rel = 'shortcut icon';
  link.href = _resources_favicon_favicon_ico__WEBPACK_IMPORTED_MODULE_0__;
  link.type = 'image/x-icon';
  head.append(link);
}

createFavicon();


/***/ }),

/***/ "./src/hud/hudContent.js":
/*!*******************************!*\
  !*** ./src/hud/hudContent.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reusables_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reusables/elements */ "./src/reusables/elements.js");
/* harmony import */ var _reusables_gridItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusables/gridItems */ "./src/reusables/gridItems.js");
/* harmony import */ var _hudLogic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hudLogic */ "./src/hud/hudLogic.js");




function addShips(container) {
  const numShips = 5;
  for (let i = 0; i < numShips; i++) {
    const ship = (0,_reusables_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
    if (i === 0) {
      ship.setAttribute('id', 'destroyer');
      const destroyerIcon = (0,_reusables_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
      destroyerIcon.classList.add('destroyerIcon');
      ship.append(destroyerIcon);
      container.append('Destroyer');
    } else if (i === 1) {
      ship.setAttribute('id', 'submarine');
      const submarineIcon = (0,_reusables_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
      submarineIcon.classList.add('submarineIcon');
      ship.append(submarineIcon);
      container.append('Submarine');
    } else if (i === 2) {
      ship.setAttribute('id', 'cruiser');
      const cruiserIcon = (0,_reusables_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
      cruiserIcon.classList.add('cruiserIcon');
      ship.append(cruiserIcon);
      container.append('Cruiser');
    } else if (i === 3) {
      ship.setAttribute('id', 'battleship');
      const battleshipIcon = (0,_reusables_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
      battleshipIcon.classList.add('battleshipIcon');
      ship.append(battleshipIcon);
      container.append('Battleship');
    } else if (i === 4) {
      ship.setAttribute('id', 'carrier');
      const carrierIcon = (0,_reusables_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
      carrierIcon.classList.add('carrierIcon');
      ship.append(carrierIcon);
      container.append('Carrier');
    }

    ship.addEventListener('mousedown', _hudLogic__WEBPACK_IMPORTED_MODULE_2__.selectShip);
    container.append(ship);
  }
}

const createShips = () => {
  const container = (0,_reusables_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
  container.setAttribute('id', 'shipsContainer');
  const ships = (0,_reusables_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
  ships.setAttribute('id', 'ships');
  addShips(ships);

  container.append('Ships', ships);
  return container;
};
const createOrientationButton = () => {
  const container = (0,_reusables_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
  container.setAttribute('id', 'orientationButtonContainer');

  const button = (0,_reusables_elements__WEBPACK_IMPORTED_MODULE_0__.createButton)();
  button.disabled = 'true';
  button.setAttribute('id', 'orientationButton');
  button.innerHTML = 'Vertical';
  button.addEventListener('mousedown', _hudLogic__WEBPACK_IMPORTED_MODULE_2__.changeOrientation);

  container.append('Orientation', button);
  return container;
};

function createSelectedShip() {
  const selectedShipContainer = (0,_reusables_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
  selectedShipContainer.setAttribute('id', 'selectedShipContainer');
  const selectedShip = (0,_reusables_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
  selectedShip.setAttribute('id', 'selectedShip');
  selectedShip.innerHTML = 'No Ship Selected...';
  selectedShipContainer.append('Selected Ship', selectedShip);
  return selectedShipContainer;
}

function createShipsOverlay() {
  const div = (0,_reusables_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
  div.setAttribute('id', 'shipsOverlay');
  return div;
}

function createHudOverlay() {
  const div = (0,_reusables_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
  div.setAttribute('id', 'hudOverlay');
  return div;
}

function appendToHUD() {
  (0,_reusables_gridItems__WEBPACK_IMPORTED_MODULE_1__.getHud)().append(
    createOrientationButton(),
    createShips(),
    createShipsOverlay(),
    createSelectedShip(),
    createHudOverlay(),
  );
}

appendToHUD();


/***/ }),

/***/ "./src/hud/hudLogic.js":
/*!*****************************!*\
  !*** ./src/hud/hudLogic.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeOrientation": () => (/* binding */ changeOrientation),
/* harmony export */   "selectShip": () => (/* binding */ selectShip),
/* harmony export */   "setNoShipSelected": () => (/* binding */ setNoShipSelected)
/* harmony export */ });
/* harmony import */ var _game_gameLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game/gameLogic */ "./src/game/gameLogic.js");
/* harmony import */ var _reusables_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusables/elements */ "./src/reusables/elements.js");
/* harmony import */ var _shipBoard_shipBoardContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shipBoard/shipBoardContent */ "./src/shipBoard/shipBoardContent.js");




function toggleOrientationButtonDisabled(disabled) {
  const orientationButton = document.getElementById('orientationButton');
  orientationButton.disabled = disabled;
}

function toggleShipsOverlayDisplay(display) {
  const overlay = document.getElementById('shipsOverlay');
  overlay.style.display = display;
}

function clearSelectedShip() {
  const selectedShip = document.getElementById('selectedShip');

  while (selectedShip.firstChild) {
    selectedShip.removeChild(selectedShip.firstChild);
  }
}

function setNoShipSelected() {
  const selectedShip = document.getElementById('selectedShip');
  selectedShip.innerHTML = 'No Ship Selected...';
}

function changeIconColor(name) {
  if (name === 'destroyer') {
    if (_game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.destroyerCount <= 0) {
      const destroyerIcon = document.querySelector('.destroyerIcon');
      destroyerIcon.style.background = 'gray';
    } else if (_game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.destroyerCount > 0) {
      const destroyerIcon = document.querySelector('.destroyerIcon');
      destroyerIcon.style.background = 'rgb(196 41 106)';
    }
  } else if (name === 'submarine') {
    if (_game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.submarineCount <= 0) {
      const submarineIcon = document.querySelector('.submarineIcon');
      submarineIcon.style.background = 'gray';
    } else if (_game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.submarineCount > 0) {
      const submarineIcon = document.querySelector('.submarineIcon');
      submarineIcon.style.background = 'rgb(196 41 106)';
    }
  } else if (name === 'cruiser') {
    if (_game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.cruiserCount <= 0) {
      const cruiserIcon = document.querySelector('.cruiserIcon');
      cruiserIcon.style.background = 'gray';
    } else if (_game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.cruiserCount > 0) {
      const cruiserIcon = document.querySelector('.cruiserIcon');
      cruiserIcon.style.background = 'rgb(196 41 106)';
    }
  } else if (name === 'battleship') {
    if (_game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.battleshipCount <= 0) {
      const battleshipIcon = document.querySelector('.battleshipIcon');
      battleshipIcon.style.background = 'gray';
    } else if (_game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.battleshipCount > 0) {
      const battleshipIcon = document.querySelector('.battleshipIcon');
      battleshipIcon.style.background = 'rgb(196 41 106)';
    }
  } else if (name === 'carrier') {
    if (_game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.carrierCount <= 0) {
      const carrierIcon = document.querySelector('.carrierIcon');
      carrierIcon.style.background = 'gray';
    } else if (_game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.carrierCount > 0) {
      const carrierIcon = document.querySelector('.carrierIcon');
      carrierIcon.style.background = 'rgb(196 41 106)';
    }
  }
}

function deselectShip() {
  const oldActiveShipName = _game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.activeShip.name;
  _game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.deselectShip();
  changeIconColor(oldActiveShipName);
  toggleShipsOverlayDisplay('none');
  clearSelectedShip();
  setNoShipSelected();
  (0,_shipBoard_shipBoardContent__WEBPACK_IMPORTED_MODULE_2__.toggleShipBoardOverlay)('3');
  toggleOrientationButtonDisabled(true);
}

function setSelectedShip(activeShip) {
  clearSelectedShip();
  const selectedShip = document.getElementById('selectedShip');
  const container = (0,_reusables_elements__WEBPACK_IMPORTED_MODULE_1__.createDiv)();
  container.setAttribute('id', 'selected_ShipContainer');
  const ship = (0,_reusables_elements__WEBPACK_IMPORTED_MODULE_1__.createDiv)();
  if (activeShip.name === 'destroyer') {
    ship.setAttribute('id', 'selected_destroyer');
    const destroyerIcon = (0,_reusables_elements__WEBPACK_IMPORTED_MODULE_1__.createDiv)();
    destroyerIcon.classList.add('destroyerIcon');
    ship.append(destroyerIcon);
    container.append('Destroyer');
  } else if (activeShip.name === 'submarine') {
    ship.setAttribute('id', 'selected_submarine');
    const submarineIcon = (0,_reusables_elements__WEBPACK_IMPORTED_MODULE_1__.createDiv)();
    submarineIcon.classList.add('submarineIcon');
    ship.append(submarineIcon);
    container.append('Submarine');
  } else if (activeShip.name === 'cruiser') {
    ship.setAttribute('id', 'selected_cruiser');
    const cruiserIcon = (0,_reusables_elements__WEBPACK_IMPORTED_MODULE_1__.createDiv)();
    cruiserIcon.classList.add('cruiserIcon');
    ship.append(cruiserIcon);
    container.append('Cruiser');
  } else if (activeShip.name === 'battleship') {
    ship.setAttribute('id', 'selected_battleship');
    const battleshipIcon = (0,_reusables_elements__WEBPACK_IMPORTED_MODULE_1__.createDiv)();
    battleshipIcon.classList.add('battleshipIcon');
    ship.append(battleshipIcon);
    container.append('Battleship');
  } else if (activeShip.name === 'carrier') {
    ship.setAttribute('id', 'selected_carrier');
    const carrierIcon = (0,_reusables_elements__WEBPACK_IMPORTED_MODULE_1__.createDiv)();
    carrierIcon.classList.add('carrierIcon');
    ship.append(carrierIcon);
    container.append('Carrier');
  }

  container.addEventListener('mousedown', deselectShip);
  container.append(ship);
  selectedShip.append(container);
}

function selectShip() {
  if ((this.getAttribute('id') === 'destroyer' && _game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.destroyerCount > 0)
    || (this.getAttribute('id') === 'submarine' && _game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.submarineCount > 0)
    || (this.getAttribute('id') === 'cruiser' && _game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.cruiserCount > 0)
    || (this.getAttribute('id') === 'battleship' && _game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.battleshipCount > 0)
    || (this.getAttribute('id') === 'carrier' && _game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.carrierCount > 0)
  ) {
    if (_game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.activeShip === null) {
      if (this.getAttribute('id') === 'destroyer') {
        _game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.selectShip('destroyer');
      } else if (this.getAttribute('id') === 'submarine') {
        _game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.selectShip('submarine');
      } else if (this.getAttribute('id') === 'cruiser') {
        _game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.selectShip('cruiser');
      } else if (this.getAttribute('id') === 'battleship') {
        _game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.selectShip('battleship');
      } else if (this.getAttribute('id') === 'carrier') {
        _game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.selectShip('carrier');
      }
      (0,_shipBoard_shipBoardContent__WEBPACK_IMPORTED_MODULE_2__.toggleShipBoardOverlay)('2');
    }

    changeIconColor(this.getAttribute('id'));
    toggleOrientationButtonDisabled(false);
    setSelectedShip(_game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.activeShip);
    toggleShipsOverlayDisplay('block');
    // console.log(player1.activeShip);
  }
}

function changeOrientation() {
  const activeShip = document.getElementById(`selected_${_game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.activeShip.name}`);
  if (_game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.activeShip !== null) {
    if (_game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.activeShip.horizontalVertical) {
      this.innerHTML = 'Horizontal';
      activeShip.style.transform = 'rotate(.25turn)';
    } else {
      this.innerHTML = 'Vertical';
      activeShip.style.transform = 'rotate(0turn)';
    }
    _game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.changeOrientation();
  }
}




/***/ }),

/***/ "./src/nav/navContent.js":
/*!*******************************!*\
  !*** ./src/nav/navContent.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reusables_gridItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reusables/gridItems */ "./src/reusables/gridItems.js");
/* harmony import */ var _reusables_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusables/elements */ "./src/reusables/elements.js");



function createTitle() {
  const nav = (0,_reusables_gridItems__WEBPACK_IMPORTED_MODULE_0__.getNav)();

  const h1 = (0,_reusables_elements__WEBPACK_IMPORTED_MODULE_1__.createH1)('Battleship');
  nav.append(h1, (0,_reusables_elements__WEBPACK_IMPORTED_MODULE_1__.createSymbol)('directions_boat'));
}

createTitle();


/***/ }),

/***/ "./src/reusables/elements.js":
/*!***********************************!*\
  !*** ./src/reusables/elements.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "blockShipBoard": () => (/* binding */ blockShipBoard),
/* harmony export */   "createButton": () => (/* binding */ createButton),
/* harmony export */   "createDiv": () => (/* binding */ createDiv),
/* harmony export */   "createH1": () => (/* binding */ createH1),
/* harmony export */   "createIcon": () => (/* binding */ createIcon),
/* harmony export */   "createModal": () => (/* binding */ createModal),
/* harmony export */   "createSymbol": () => (/* binding */ createSymbol)
/* harmony export */ });
function closeModal() {
  this.style.display = 'none';
}

function blockShipBoard(gridStart, gridEnd) {
  const overlay = document.getElementById('shipBoardOverlay');
  overlay.style.background = 'transparent';
  overlay.style.gridRowStart = gridStart;
  overlay.style.gridRowEnd = gridEnd;
}
const createH1 = (text) => {
  const h1 = document.createElement('h1');
  h1.innerHTML = text;
  return h1;
};
const createDiv = () => document.createElement('div');
const createButton = () => document.createElement('button');
const createModal = (text) => {
  const content = document.getElementById('content');
  const bg = createDiv();
  bg.setAttribute('id', 'bgOverlay');

  const modal = createDiv();
  modal.setAttribute('id', 'modal');
  const h1 = createH1(text);
  h1.style.textAlign = 'center';
  modal.append(h1);
  bg.append(modal);
  bg.addEventListener('mousedown', closeModal);
  content.append(bg);
};
const createIcon = (iconName) => {
  const span = document.createElement('span');
  span.classList.add('material-icons');
  span.innerHTML = iconName;
  return span;
};

const createSymbol = (symbolName) => {
  const span = document.createElement('span');
  span.classList.add('material-symbols-outlined');
  span.innerHTML = symbolName;
  return span;
};




/***/ }),

/***/ "./src/reusables/gridItems.js":
/*!************************************!*\
  !*** ./src/reusables/gridItems.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getContent": () => (/* binding */ getContent),
/* harmony export */   "getHud": () => (/* binding */ getHud),
/* harmony export */   "getNav": () => (/* binding */ getNav),
/* harmony export */   "getShipBoard": () => (/* binding */ getShipBoard)
/* harmony export */ });
const getNav = () => document.getElementById('nav');

const getContent = () => document.getElementById('content');

const getShipBoard = () => document.getElementById('shipBoard');

const getHud = () => document.getElementById('hud');




/***/ }),

/***/ "./src/shipBoard/shipBoardContent.js":
/*!*******************************************!*\
  !*** ./src/shipBoard/shipBoardContent.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toggleShipBoardOverlay": () => (/* binding */ toggleShipBoardOverlay)
/* harmony export */ });
/* harmony import */ var _reusables_gridItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reusables/gridItems */ "./src/reusables/gridItems.js");
/* harmony import */ var _reusables_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusables/elements */ "./src/reusables/elements.js");
/* harmony import */ var _shipBoardLogic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shipBoardLogic */ "./src/shipBoard/shipBoardLogic.js");
/* eslint-disable import/prefer-default-export */




function createShipBoard() {
  const container = (0,_reusables_elements__WEBPACK_IMPORTED_MODULE_1__.createDiv)();
  container.setAttribute('id', 'shipGridContainer');
  const board = (0,_reusables_elements__WEBPACK_IMPORTED_MODULE_1__.createDiv)();
  board.setAttribute('id', 'shipGrid');
  board.classList.add('boardContainer');
  let counter = 0;

  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
      const square = (0,_reusables_elements__WEBPACK_IMPORTED_MODULE_1__.createDiv)();
      square.setAttribute('id', `S_${counter}`);
      // square.innerHTML = `${counter}`;
      square.classList.add('boardSquare');
      square.addEventListener('mousedown', _shipBoardLogic__WEBPACK_IMPORTED_MODULE_2__.placeShip);
      board.append(square);
      counter++;
    }
  }

  container.append('Ship Grid', board);
  return container;
}

function createMissleBoard() {
  const container = (0,_reusables_elements__WEBPACK_IMPORTED_MODULE_1__.createDiv)();
  container.setAttribute('id', 'missileGridContainer');
  const board = (0,_reusables_elements__WEBPACK_IMPORTED_MODULE_1__.createDiv)();
  board.setAttribute('id', 'missleGrid');
  board.classList.add('boardContainer');
  let counter = 0;
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      const square = (0,_reusables_elements__WEBPACK_IMPORTED_MODULE_1__.createDiv)();
      square.setAttribute('id', `M_${counter}`);
      // square.innerHTML = `${counter}`;
      square.classList.add('boardSquare');
      square.addEventListener('mousedown', _shipBoardLogic__WEBPACK_IMPORTED_MODULE_2__.fire);
      board.append(square);
      counter++;
    }
  }

  container.append('Missle Grid', board);
  return container;
}

function createOverlay() {
  const div = (0,_reusables_elements__WEBPACK_IMPORTED_MODULE_1__.createDiv)();
  div.setAttribute('id', 'shipBoardOverlay');
  return div;
}

function appendToShipBoard() {
  (0,_reusables_gridItems__WEBPACK_IMPORTED_MODULE_0__.getShipBoard)().append(createMissleBoard(), createShipBoard(), createOverlay());
}

function toggleShipBoardOverlay(row) {
  const overlay = document.getElementById('shipBoardOverlay');
  overlay.style.gridRowEnd = row;
}


appendToShipBoard();


/***/ }),

/***/ "./src/shipBoard/shipBoardLogic.js":
/*!*****************************************!*\
  !*** ./src/shipBoard/shipBoardLogic.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fire": () => (/* binding */ fire),
/* harmony export */   "placeShip": () => (/* binding */ placeShip)
/* harmony export */ });
/* harmony import */ var _game_gameLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game/gameLogic */ "./src/game/gameLogic.js");
/* harmony import */ var _reusables_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusables/elements */ "./src/reusables/elements.js");



function toggleShipsOverlayDisplay(display) {
  const overlay = document.getElementById('shipsOverlay');
  overlay.style.display = display;
}

function toggleShipBoardOverlay(row) {
  const overlay = document.getElementById('shipBoardOverlay');
  overlay.style.gridRowEnd = row;
}

function toggleOrientationButtonDisabled(disabled) {
  const orientationButton = document.getElementById('orientationButton');
  orientationButton.disabled = disabled;
}

function clearSelectedShip() {
  const selectedShip = document.getElementById('selectedShip');

  while (selectedShip.firstChild) {
    selectedShip.removeChild(selectedShip.firstChild);
  }
}
function setNoShipSelected() {
  const selectedShip = document.getElementById('selectedShip');
  selectedShip.innerHTML = 'No Ship Selected...';
}

function defaultOrientationButtonCopy() {
  const orientationButton = document.getElementById('orientationButton');
  orientationButton.innerHTML = 'Vertical';
}

function isValid(id) {
  if (_game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.activeShip.horizontalVertical) {
    if ((parseInt(id, 10) % 10 > 9 && _game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.activeShip.name === 'destroyer')
      || (parseInt(id, 10) % 10 > 8 && _game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.activeShip.name === 'submarine')
      || (parseInt(id, 10) % 10 > 7 && _game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.activeShip.name === 'cruiser')
      || (parseInt(id, 10) % 10 > 6 && _game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.activeShip.name === 'battleship')
      || (parseInt(id, 10) % 10 > 5 && _game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.activeShip.name === 'carrier')) {
      return false;
    }
  } else if (!_game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.activeShip.horizontalVertical) {
    if ((_game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.gameBoard.getCoordinateFromIndex(id).coordinate[1] > 9 && _game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.activeShip.name === 'destroyer')
      || (_game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.gameBoard.getCoordinateFromIndex(id).coordinate[1] > 8 && _game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.activeShip.name === 'submarine')
      || (_game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.gameBoard.getCoordinateFromIndex(id).coordinate[1] > 7 && _game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.activeShip.name === 'cruiser')
      || (_game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.gameBoard.getCoordinateFromIndex(id).coordinate[1] > 6 && _game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.activeShip.name === 'battleship')
      || (_game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.gameBoard.getCoordinateFromIndex(id).coordinate[1] > 5 && _game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.activeShip.name === 'carrier')
    ) {
      return false;
    }
  }

  for (let i = 0; i < _game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.activeShip.length; i++) {
    if (_game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.activeShip.horizontalVertical) {
      if (_game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.gameBoard.getCoordinateFromIndex(`${parseInt(id, 10) + i}`).occupied) { return false; }
    } else if (_game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.gameBoard.getCoordinateFromIndex(`${parseInt(id, 10) + (i * 10)}`).occupied) { return false; }
  }

  return true;
}

function toggleHudOverlayDisplay(display) {
  const overlay = document.getElementById('hudOverlay');
  overlay.style.display = display;
}

function checkIfPlayerOutofShips() {
  if (_game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.destroyerCount <= 0
    && _game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.submarineCount <= 0
    && _game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.cruiserCount <= 0
    && _game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.battleshipCount <= 0
    && _game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.carrierCount <= 0) {
    toggleShipsOverlayDisplay('none');
    return true;
  }

  return false;
}

function drawShipToShipBoard(activeShip, array, shipSquare) {
  if (activeShip.name === 'destroyer') {
    const front = (0,_reusables_elements__WEBPACK_IMPORTED_MODULE_1__.createDiv)();
    front.classList.add('front');
    if (!activeShip.horizontalVertical) { front.style.transform = 'rotate(.25turn)'; }
    shipSquare.append(front);
  } else if (activeShip.name === 'submarine') {
    const front = (0,_reusables_elements__WEBPACK_IMPORTED_MODULE_1__.createDiv)();
    front.classList.add('front');
    const mid = (0,_reusables_elements__WEBPACK_IMPORTED_MODULE_1__.createDiv)();
    mid.classList.add('mid');

    if (!activeShip.horizontalVertical) {
      front.style.transform = 'rotate(.25turn)';
      mid.style.transform = 'rotate(.25turn)';
      shipSquare.append(front);
      const square1 = document.getElementById(`S_${parseInt(array[1], 10) + 10}`);
      square1.append(mid);
    } else {
      shipSquare.append(front);
      const square1 = document.getElementById(`S_${parseInt(array[1], 10) + 1}`);
      square1.append(mid);
    }
  } else if (activeShip.name === 'cruiser') {
    const front = (0,_reusables_elements__WEBPACK_IMPORTED_MODULE_1__.createDiv)();
    front.classList.add('front');
    const mid1 = (0,_reusables_elements__WEBPACK_IMPORTED_MODULE_1__.createDiv)();
    mid1.classList.add('mid');
    const mid2 = (0,_reusables_elements__WEBPACK_IMPORTED_MODULE_1__.createDiv)();
    mid2.classList.add('mid');

    if (!activeShip.horizontalVertical) {
      front.style.transform = 'rotate(.25turn)';
      mid1.style.transform = 'rotate(.25turn)';
      mid2.style.transform = 'rotate(.25turn)';

      shipSquare.append(front);
      const square1 = document.getElementById(`S_${parseInt(array[1], 10) + 10}`);
      square1.append(mid1);
      const square2 = document.getElementById(`S_${parseInt(array[1], 10) + 20}`);
      square2.append(mid2);
    } else if (activeShip.horizontalVertical) {
      shipSquare.append(front);
      const square1 = document.getElementById(`S_${parseInt(array[1], 10) + 1}`);
      square1.append(mid1);
      const square2 = document.getElementById(`S_${parseInt(array[1], 10) + 2}`);
      square2.append(mid2);
    }
  } else if (activeShip.name === 'battleship') {
    const front = (0,_reusables_elements__WEBPACK_IMPORTED_MODULE_1__.createDiv)();
    front.classList.add('front');
    const mid1 = (0,_reusables_elements__WEBPACK_IMPORTED_MODULE_1__.createDiv)();
    mid1.classList.add('mid');
    const mid2 = (0,_reusables_elements__WEBPACK_IMPORTED_MODULE_1__.createDiv)();
    mid2.classList.add('mid');
    const mid3 = (0,_reusables_elements__WEBPACK_IMPORTED_MODULE_1__.createDiv)();
    mid3.classList.add('mid');

    if (!activeShip.horizontalVertical) {
      front.style.transform = 'rotate(.25turn)';
      mid1.style.transform = 'rotate(.25turn)';
      mid2.style.transform = 'rotate(.25turn)';
      mid3.style.transform = 'rotate(.25turn)';

      shipSquare.append(front);
      const square1 = document.getElementById(`S_${parseInt(array[1], 10) + 10}`);
      square1.append(mid1);
      const square2 = document.getElementById(`S_${parseInt(array[1], 10) + 20}`);
      square2.append(mid2);
      const square3 = document.getElementById(`S_${parseInt(array[1], 10) + 30}`);
      square3.append(mid3);
    } else if (activeShip.horizontalVertical) {
      shipSquare.append(front);
      const square1 = document.getElementById(`S_${parseInt(array[1], 10) + 1}`);
      square1.append(mid1);
      const square2 = document.getElementById(`S_${parseInt(array[1], 10) + 2}`);
      square2.append(mid2);
      const square3 = document.getElementById(`S_${parseInt(array[1], 10) + 3}`);
      square3.append(mid3);
    }
  } else if (activeShip.name === 'carrier') {
    const front = (0,_reusables_elements__WEBPACK_IMPORTED_MODULE_1__.createDiv)();
    front.classList.add('front');
    const mid1 = (0,_reusables_elements__WEBPACK_IMPORTED_MODULE_1__.createDiv)();
    mid1.classList.add('mid');
    const mid2 = (0,_reusables_elements__WEBPACK_IMPORTED_MODULE_1__.createDiv)();
    mid2.classList.add('mid');
    const mid3 = (0,_reusables_elements__WEBPACK_IMPORTED_MODULE_1__.createDiv)();
    mid3.classList.add('mid');
    const mid4 = (0,_reusables_elements__WEBPACK_IMPORTED_MODULE_1__.createDiv)();
    mid4.classList.add('mid');

    if (!activeShip.horizontalVertical) {
      front.style.transform = 'rotate(.25turn)';
      mid1.style.transform = 'rotate(.25turn)';
      mid2.style.transform = 'rotate(.25turn)';
      mid3.style.transform = 'rotate(.25turn)';
      mid4.style.transform = 'rotate(.25turn)';

      shipSquare.append(front);
      const square1 = document.getElementById(`S_${parseInt(array[1], 10) + 10}`);
      square1.append(mid1);
      const square2 = document.getElementById(`S_${parseInt(array[1], 10) + 20}`);
      square2.append(mid2);
      const square3 = document.getElementById(`S_${parseInt(array[1], 10) + 30}`);
      square3.append(mid3);
      const square4 = document.getElementById(`S_${parseInt(array[1], 10) + 40}`);
      square4.append(mid4);
    } else if (activeShip.horizontalVertical) {
      shipSquare.append(front);
      const square1 = document.getElementById(`S_${parseInt(array[1], 10) + 1}`);
      square1.append(mid1);
      const square2 = document.getElementById(`S_${parseInt(array[1], 10) + 2}`);
      square2.append(mid2);
      const square3 = document.getElementById(`S_${parseInt(array[1], 10) + 3}`);
      square3.append(mid3);
      const square4 = document.getElementById(`S_${parseInt(array[1], 10) + 4}`);
      square4.append(mid4);
    }
  }
}

function placeShip() {
  const array = this.getAttribute('id').split('S_');
  if (isValid(array[1])) {
    const oldActiveShip = _game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.activeShip;
    _game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.placeShip(_game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.gameBoard.getCoordinateFromIndex(array[1]).coordinate);
    drawShipToShipBoard(oldActiveShip, array, this);
    if (!checkIfPlayerOutofShips()) {
      clearSelectedShip();
      setNoShipSelected();
      toggleShipsOverlayDisplay('none');
      toggleShipBoardOverlay('3');
      defaultOrientationButtonCopy();
      toggleOrientationButtonDisabled(true);
    } else {
      clearSelectedShip();
      setNoShipSelected();
      toggleHudOverlayDisplay('block');
      (0,_reusables_elements__WEBPACK_IMPORTED_MODULE_1__.blockShipBoard)('2', '3');
    }
  }
}

function checkForWinner() {
  if (_game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.score === 15) {
    (0,_reusables_elements__WEBPACK_IMPORTED_MODULE_1__.blockShipBoard)('1', '3');
    (0,_reusables_elements__WEBPACK_IMPORTED_MODULE_1__.createModal)('Mission Succeeded! <br> Player Won!');
  }
}

function fire() {
  const array = this.getAttribute('id').split('M_');
  if (!_game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.visitedMap.has(`${array[1]}`)) {
    _game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.visitedMap.set(`${array[1]}`, true);
    const index = parseInt(array[1], 10);
    _game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.ai.player.receiveFire(_game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.ai.player.gameBoard.getCoordinateFromIndex(index).coordinate);
    if (_game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.ai.player.gameBoard.getCoordinateFromIndex(index).hit
  && _game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.ai.player.gameBoard.getCoordinateFromIndex(index).occupied) {
      this.style.background = 'rgb(196, 36, 63)';
      this.style.borderColor = 'black';
      _game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1.score++;
      checkForWinner();
    } else {
      this.style.background = 'white';
    }

    _game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.ai.fire(_game_gameLogic__WEBPACK_IMPORTED_MODULE_0__.player1);
  }
}




/***/ }),

/***/ "./src/test/ai.js":
/*!************************!*\
  !*** ./src/test/ai.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

//#!/usr/bin/env node

const Player = __webpack_require__(/*! ./player */ "./src/test/player.js");
const GameBoard = __webpack_require__(/*! ./gameBoard */ "./src/test/gameBoard.js");
const { createDiv, createModal, blockShipBoard } = __webpack_require__(/*! ../reusables/elements */ "./src/reusables/elements.js");

class AI {
  constructor() {
    this.player = new Player();
    this.missleBoared = new GameBoard();
    this.placeShips();
    this.lastOccupied = null;
  }

  selectShip(name) {
    this.player.selectShip(name);
  }

  changeOrientation() {
    const randomNumber = Math.floor(Math.random() * 2);
    if (randomNumber === 1) this.player.changeOrientation();
  }

  findValidCoordinateAndPlaceShip() {
    while (this.player.activeShip !== null) {
      const randomNumber = Math.floor(Math.random() * 100);
      const coordinate = this.player.gameBoard.getCoordinateFromIndex(randomNumber);
      this.changeOrientation();
      this.player.placeShip(coordinate.coordinate);
    }
  }

  placeShips() {
    while (this.player.shipMap.size > 0) {
      const randomNumber = Math.floor(Math.random() * 5);
      switch (randomNumber) {
        case 0:
          if (this.player.destroyerCount > 0) { this.selectShip('destroyer'); }
          break;
        case 1:
          if (this.player.submarineCount > 0) { this.selectShip('submarine'); }
          break;
        case 2:
          if (this.player.cruiserCount > 0) { this.selectShip('cruiser'); }
          break;
        case 3:
          if (this.player.battleshipCount > 0) { this.selectShip('battleship'); }
          break;
        case 4:
          if (this.player.carrierCount > 0) { this.selectShip('carrier'); }
          break;
        default:
      }
      this.findValidCoordinateAndPlaceShip();
    }
  }

  analyzeLastOccupied(player = new Player()) {
    for (let i = 0; i < player.occupiedShipMap.get(this.lastOccupied.shipName).length; i++) {
      const index = player.gameBoard.getIndexOfCoordinate(
        player.occupiedShipMap.get(this.lastOccupied.shipName)[i].coordinate,
      );

      if (!this.player.visitedMap.has(`${index}`)) {
        this.player.visitedMap.set(`${index}`, true);
        return index;
      }
    }

    return null;
  }

  createModal(text) {
    const content = document.getElementById('content');
    const bg = createDiv();
    bg.setAttribute('id', 'bgOverlay');

    const modal = createDiv();
    modal.setAttribute('id', 'modal');
    modal.innerHTML = text;
    bg.append(modal);

    content.append(bg);
  }

  checkForWinner() {
    if (this.player.score === 15) {
      blockShipBoard('1', '3');
      createModal('Mission Failed... <br> AI Won...');
    }
  }

  fire(player = new Player()) {
    let index = Math.floor(Math.random() * 100);
    while (this.player.visitedMap.has(`${index}`)) {
      index = Math.floor(Math.random() * 100);
    }

    let betterIndex = null;
    if (this.lastOccupied !== null) { betterIndex = this.analyzeLastOccupied(player); }

    if (betterIndex === null) {
      this.lastOccupied = null;
      const shipBoardSquare = document.querySelector(`#S_${index}`);
      this.player.visitedMap.set(`${index}`, true);
      if (player.gameBoard.getCoordinateFromIndex(index).occupied) {
        this.lastOccupied = player.gameBoard.getCoordinateFromIndex(index);
        shipBoardSquare.style.background = 'red';
        this.player.score++;
        this.checkForWinner();
      } else {
        shipBoardSquare.style.background = 'white';
      }
    } else {
      const shipBoardSquare = document.querySelector(`#S_${betterIndex}`);
      this.player.visitedMap.set(`${betterIndex}`, true);
      if (player.gameBoard.getCoordinateFromIndex(betterIndex).occupied) {
        this.lastOccupied = player.gameBoard.getCoordinateFromIndex(betterIndex);
        shipBoardSquare.style.background = 'red';
        this.player.score++;
        this.checkForWinner();
      }
    }
  }
}

module.exports = AI;


/***/ }),

/***/ "./src/test/battleship.js":
/*!********************************!*\
  !*** ./src/test/battleship.js ***!
  \********************************/
/***/ ((module) => {

class BattleShip {
  constructor(name, length) {
    this.name = name;
    this.length = length;
    this.horizontalVertical = true;
  }

  changeOrientation() {
    this.horizontalVertical = !this.horizontalVertical;
  }
}

module.exports = BattleShip;


/***/ }),

/***/ "./src/test/coordinate.js":
/*!********************************!*\
  !*** ./src/test/coordinate.js ***!
  \********************************/
/***/ ((module) => {

class Coordinate {
  constructor(coordinate) {
    if (this.checkValid(coordinate)) { this.coordinate = coordinate; } else this.coordinate = null;
    this.hit = false;
    this.occupied = false;
    this.lengthNumber = 0;
    this.shipName = '';
    this.shipHorizontalVertical = true;
    this.player = null;
  }

  checkValid(coordinate) {
    if (coordinate[0] >= 0
        && coordinate[0] <= 9
        && coordinate[1] >= 0
        && coordinate[1] <= 9
    ) return true;

    return false;
  }

  // Setters
  setPlayer(player) {
    this.player = player;
  }

  setHit(hit) {
    this.hit = hit;
  }
}

module.exports = Coordinate;


/***/ }),

/***/ "./src/test/gameBoard.js":
/*!*******************************!*\
  !*** ./src/test/gameBoard.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

//#!/usr/bin/env node
const Coordinate = __webpack_require__(/*! ./coordinate */ "./src/test/coordinate.js");

class GameBoard {
  constructor() {
    this.gameBoard = this.createGameBoard();
  }

  // Init Functions
  createGameBoard() {
    const array = [];
    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {
        const coordinate = new Coordinate([x, y]);
        array.push(coordinate);
      }
    }
    return array;
  }

  isCoordinateValid(coordinate) {
    if (coordinate[0] >= 0
      && coordinate[0] <= 9
      && coordinate[1] >= 0
      && coordinate[1] <= 9
    ) return true;

    return false;
  }

  isIndexValid(index) {
    if (index >= 0 && index < this.gameBoard.length) return true;
    return false;
  }

  // Getters
  getGameBoard() {
    return this.gameBoard;
  }

  getIndexOfCoordinate(coordinate) {
    if (this.isCoordinateValid(coordinate)) {
      const findCoordinate = (element) => `${element.coordinate}` === `${coordinate}`;
      return this.gameBoard.findIndex(findCoordinate);
    }
    return null;
  }

  getCoordinateFromIndex(index) {
    if (this.isIndexValid(index)) { return this.gameBoard[index]; }
    return null;
  }

  getCoordinateFromCoordinate(coordinate) {
    if (this.isCoordinateValid(coordinate)) {
      return this.gameBoard[
        this.getIndexOfCoordinate(coordinate)];
    }
    return null;
  }

  // Setters
  setHitTrue(coordinate) {
    if (this.isCoordinateValid(coordinate)) {
      this.gameBoard[this.getIndexOfCoordinate(coordinate)].setHit(true);
    }
  }

  setHitFalse(coordinate) {
    if (this.isCoordinateValid(coordinate)) {
      this.gameBoard[this.getIndexOfCoordinate(coordinate)].setHit(false);
    }
  }

  getHit(coordinate) {
    if (this.isCoordinateValid(coordinate)) {
      return this.gameBoard[
        this.getIndexOfCoordinate(coordinate)].hit;
    }

    return null;
  }
}

module.exports = GameBoard;


/***/ }),

/***/ "./src/test/player.js":
/*!****************************!*\
  !*** ./src/test/player.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const GameBoard = __webpack_require__(/*! ./gameBoard */ "./src/test/gameBoard.js");
const BattleShip = __webpack_require__(/*! ./battleship */ "./src/test/battleship.js");

class Player {
  constructor() {
    this.gameBoard = new GameBoard();
    this.shipMap = this.createShipMap();
    this.activeShip = null;
    this.destroyerCount = this.shipMap.get('destroyer').length;
    this.submarineCount = this.shipMap.get('submarine').length;
    this.cruiserCount = this.shipMap.get('cruiser').length;
    this.battleshipCount = this.shipMap.get('battleship').length;
    this.carrierCount = this.shipMap.get('carrier').length;
    this.occupiedCoordinates = [];
    this.occupiedShipMap = new Map();
    this.score = 0;
    this.visitedMap = new Map();
  }

  createShipMap() {
    const map = new Map();
    map.set('destroyer', Array(1).fill(new BattleShip('destroyer', 1)));
    map.set('submarine', Array(1).fill(new BattleShip('submarine', 2)));
    map.set('cruiser', Array(1).fill(new BattleShip('cruiser', 3)));
    map.set('battleship', Array(1).fill(new BattleShip('battleship', 4)));
    map.set('carrier', Array(1).fill(new BattleShip('carrier', 5)));
    return map;
  }

  updateShipCounts(key) {
    if (key === 'destroyer') {
      this.destroyerCount = this.shipMap.get(key).length;
    } else if (key === 'submarine') {
      this.submarineCount = this.shipMap.get(key).length;
    } else if (key === 'cruiser') {
      this.cruiserCount = this.shipMap.get(key).length;
    } else if (key === 'battleship') {
      this.battleshipCount = this.shipMap.get(key).length;
    } else if (key === 'carrier') {
      this.carrierCount = this.shipMap.get(key).length;
    }
  }

  checkToDeleteShipMapObject(key) {
    if (this.shipMap.get(key).length === 0) { this.shipMap.delete(key); }
  }

  selectShip(key) {
    if (this.shipMap.has(key)) {
      if (this.shipMap.get(key).length !== 0) {
        this.activeShip = this.shipMap.get(key).shift();
        this.updateShipCounts(key);
      } else { this.activeShip = null; }
    }
  }

  deselectShip() {
    const key = this.activeShip.name;
    this.shipMap.get(this.activeShip.name).unshift(this.activeShip);
    this.activeShip = null;
    this.updateShipCounts(key);
  }

  changeOrientation() {
    this.activeShip.horizontalVertical = !this.activeShip.horizontalVertical;
  }

  isCoordinateValid(coordinate) {
    const index = this.gameBoard.getIndexOfCoordinate(coordinate);

    if (this.activeShip !== null
      && this.gameBoard.getCoordinateFromCoordinate(coordinate).occupied === false
      && coordinate[0] >= 0
      && coordinate[0] <= 9
      && coordinate[1] >= 0
      && coordinate[1] <= 9) {
      if (this.activeShip.horizontalVertical) {
        if ((parseInt(index, 10) % 10 > 9 && this.activeShip.name === 'destroyer')
          || (parseInt(index, 10) % 10 > 8 && this.activeShip.name === 'submarine')
          || (parseInt(index, 10) % 10 > 7 && this.activeShip.name === 'cruiser')
          || (parseInt(index, 10) % 10 > 6 && this.activeShip.name === 'battleship')
          || (parseInt(index, 10) % 10 > 5 && this.activeShip.name === 'carrier')) {
          return false;
        }
      } else if (!this.activeShip.horizontalVertical) {
        if ((coordinate[1] > 9 && this.activeShip.name === 'destroyer')
          || (coordinate[1] > 8 && this.activeShip.name === 'submarine')
          || (coordinate[1] > 7 && this.activeShip.name === 'cruiser')
          || (coordinate[1] > 6 && this.activeShip.name === 'battleship')
          || (coordinate[1] > 5 && this.activeShip.name === 'carrier')
        ) {
          return false;
        }
      }

      for (let i = 0; i < this.activeShip.length; i++) {
        if (this.activeShip.horizontalVertical) {
          if (this.gameBoard.getCoordinateFromIndex(`${parseInt(index, 10) + i}`).occupied) { return false; }
        } else if (!this.activeShip.horizontalVertical) {
          if (this.gameBoard.getCoordinateFromIndex(`${parseInt(index, 10) + (i * 10)}`).occupied) { return false; }
        }
      }
    } else return false;

    return true;
  }

  updateOccupiedCoordinates(coordinateArray) {
    this.occupiedCoordinates.push(coordinateArray);
    this.occupiedShipMap.set(`${this.activeShip.name}`, coordinateArray);
  }

  placeShip(coordinate) {
    if (this.isCoordinateValid(coordinate)) {
      const tempArray = [];
      for (let i = 0; i < this.activeShip.length; i++) {
        const newCoordinate = (this.activeShip.horizontalVertical)
          ? [coordinate[0] + i, coordinate[1]] : [coordinate[0], coordinate[1] + i];

        this.gameBoard.getCoordinateFromCoordinate(
          newCoordinate,
        ).lengthNumber = i;

        this.gameBoard.getCoordinateFromCoordinate(
          newCoordinate,
        ).occupied = true;

        this.gameBoard.getCoordinateFromCoordinate(
          newCoordinate,
        ).shipName = this.activeShip.name;

        this.gameBoard.getCoordinateFromCoordinate(
          newCoordinate,
        ).shipHorizontalVertical = this.activeShip.horizontalVertical;

        tempArray.push(this.gameBoard.getCoordinateFromCoordinate(
          newCoordinate,
        ));
      }
      this.updateOccupiedCoordinates(tempArray);
      this.checkToDeleteShipMapObject(this.activeShip.name);
      this.activeShip = null;
    }
  }

  receiveFire(coordinate) {
    const tempCoordinate = this.gameBoard.getCoordinateFromCoordinate(coordinate);

    if (tempCoordinate.occupied === true) {
      for (let i = 0; i < this.occupiedCoordinates.length; i++) {
        for (let j = 0; j < this.occupiedCoordinates[i].length; j++) {
          if (tempCoordinate.coordinate === this.occupiedCoordinates[i][j].coordinate) {
            this.occupiedCoordinates[i][j].hit = true;
          }
        }
      }
    }
    this.gameBoard.getCoordinateFromCoordinate(coordinate).hit = true;
  }

  checkPlayerLost() {
    for (let i = 0; i < this.occupiedCoordinates.length; i++) {
      for (let j = 0; j < this.occupiedCoordinates[i].length; j++) {
        if (this.occupiedCoordinates[i][j].hit === false) return false;
      }
    }

    return true;
  }
}

module.exports = Player;


/***/ }),

/***/ "./src/resources/favicon/favicon.ico":
/*!*******************************************!*\
  !*** ./src/resources/favicon/favicon.ico ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e7c88170e1b243421b70.ico";

/***/ }),

/***/ "./src/resources/fonts/Lato/Lato-Bold.ttf":
/*!************************************************!*\
  !*** ./src/resources/fonts/Lato/Lato-Bold.ttf ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "636be8de934918e38ed9.ttf";

/***/ }),

/***/ "./src/resources/fonts/Lato/Lato-Light.ttf":
/*!*************************************************!*\
  !*** ./src/resources/fonts/Lato/Lato-Light.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c7400fcad9e48ca9043f.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!****************************!*\
  !*** ./src/index/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _head_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../head/head */ "./src/head/head.js");
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/style.css */ "./src/style/style.css");
/* harmony import */ var _grid_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../grid/grid */ "./src/grid/grid.js");
/* harmony import */ var _nav_navContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nav/navContent */ "./src/nav/navContent.js");
/* harmony import */ var _shipBoard_shipBoardContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shipBoard/shipBoardContent */ "./src/shipBoard/shipBoardContent.js");
/* harmony import */ var _hud_hudContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hud/hudContent */ "./src/hud/hudContent.js");







})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLHNCQUFzQixhQUFhLHFCQUFxQixXQUFXLFVBQVUsb0JBQW9CLHVCQUF1QixhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEseUJBQXlCLFdBQVcsWUFBWSxhQUFhLHVCQUF1QixPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxRQUFRLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxRQUFRLEtBQUssTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxjQUFjLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsU0FBUyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FB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V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUNNO0FBQ047QUFDSztBQUNZO0FBQ1oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0X2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUvc3R5bGUuY3NzIiwid2VicGFjazovL3Byb2plY3RfYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUvc3R5bGUuY3NzP2M5ZjAiLCJ3ZWJwYWNrOi8vcHJvamVjdF9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Byb2plY3RfYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Byb2plY3RfYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS9nYW1lTG9naWMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF9iYXR0bGVzaGlwLy4vc3JjL2dyaWQvZ3JpZC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X2JhdHRsZXNoaXAvLi9zcmMvaGVhZC9oZWFkLmpzIiwid2VicGFjazovL3Byb2plY3RfYmF0dGxlc2hpcC8uL3NyYy9odWQvaHVkQ29udGVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X2JhdHRsZXNoaXAvLi9zcmMvaHVkL2h1ZExvZ2ljLmpzIiwid2VicGFjazovL3Byb2plY3RfYmF0dGxlc2hpcC8uL3NyYy9uYXYvbmF2Q29udGVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X2JhdHRsZXNoaXAvLi9zcmMvcmV1c2FibGVzL2VsZW1lbnRzLmpzIiwid2VicGFjazovL3Byb2plY3RfYmF0dGxlc2hpcC8uL3NyYy9yZXVzYWJsZXMvZ3JpZEl0ZW1zLmpzIiwid2VicGFjazovL3Byb2plY3RfYmF0dGxlc2hpcC8uL3NyYy9zaGlwQm9hcmQvc2hpcEJvYXJkQ29udGVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X2JhdHRsZXNoaXAvLi9zcmMvc2hpcEJvYXJkL3NoaXBCb2FyZExvZ2ljLmpzIiwid2VicGFjazovL3Byb2plY3RfYmF0dGxlc2hpcC8uL3NyYy90ZXN0L2FpLmpzIiwid2VicGFjazovL3Byb2plY3RfYmF0dGxlc2hpcC8uL3NyYy90ZXN0L2JhdHRsZXNoaXAuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF9iYXR0bGVzaGlwLy4vc3JjL3Rlc3QvY29vcmRpbmF0ZS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X2JhdHRsZXNoaXAvLi9zcmMvdGVzdC9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF9iYXR0bGVzaGlwLy4vc3JjL3Rlc3QvcGxheWVyLmpzIiwid2VicGFjazovL3Byb2plY3RfYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0X2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcHJvamVjdF9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0X2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wcm9qZWN0X2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0X2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0X2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcHJvamVjdF9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Byb2plY3RfYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcHJvamVjdF9iYXR0bGVzaGlwLy4vc3JjL2luZGV4L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9yZXNvdXJjZXMvZm9udHMvTGF0by9MYXRvLUxpZ2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL3Jlc291cmNlcy9mb250cy9MYXRvL0xhdG8tQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTGF0b0JvbGQnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcblxcbioge1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmgxe1xcbiAgICBmb250LWZhbWlseTogJ0xhdG9Cb2xkJztcXG59XFxuXFxuOnJvb3R7XFxuICAgIGJhY2tncm91bmQ6IHJnYigzNiwgNDEsIDQ2KTtcXG59XFxuXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcbiAgICBmb250LWZhbWlseTogJ01hdGVyaWFsIFN5bWJvbHMgT3V0bGluZWQnO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXG4gICAgLyogUHJlZmVycmVkIGljb24gc2l6ZSAqL1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcXG4gICAgd29yZC13cmFwOiBub3JtYWw7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGRpcmVjdGlvbjogbHRyO1xcbn1cXG5cXG4jYmdPdmVybGF5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuNyk7XFxuICAgIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgICBncmlkLXJvdy1lbmQ6IDM7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxufVxcblxcbiNtb2RhbHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlciBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNiwgNDEsIDQ2KTtcXG4gICAgbWFyZ2luOiAxNSUgYXV0bzsgLyogMTUlIGZyb20gdGhlIHRvcCBhbmQgY2VudGVyZWQgKi9cXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgd2lkdGg6IDgwJTsgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDdmcjtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICAnbmF2IG5hdidcXG4gICAgICAgICdzaGlwQm9hcmQgaHVkJ1xcbiAgICA7XFxuICAgIG1pbi13aWR0aDogMTAwdnc7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMzYsIDQxLCA0Nik7XFxufVxcblxcbiNuYXYge1xcbiAgICBncmlkLWFyZWE6IG5hdjtcXG4gICAgYmFja2dyb3VuZDogcmdiKDI5XFx0MzFcXHQzNCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXIgY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbiNzaGlwQm9hcmQge1xcbiAgICBncmlkLWFyZWE6IHNoaXBCb2FyZDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDM3XFx0NDFcXHQ0Nik7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXJvdzogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgICdtaXNzaWxlR3JpZENvbnRhaW5lcidcXG4gICAgICAgICdzaGlwR3JpZENvbnRhaW5lcidcXG4gICAgO1xcbn1cXG5cXG4jc2hpcEJvYXJkT3ZlcmxheSB7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgICBncmlkLXJvdy1lbmQ6IDM7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDE7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDgxLCAxMzEsIDI0OCwgLjUpO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uYm9hcmRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMzEsIDMzLCAzNyk7O1xcbiAgICBwbGFjZS1jb250ZW50OiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICAgIG1pbi13aWR0aDogMzQwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDM0MHB4O1xcbiAgICBtYXgtd2lkdGg6IDM0MHB4O1xcbiAgICBtYXgtaGVpZ2h0OiAzNDBweDtcXG59XFxuXFxuLmJvYXJkU3F1YXJlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlciBjZW50ZXI7XFxuICAgIHdpZHRoOiAzMnB4O1xcbiAgICBoZWlnaHQ6IDMycHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYig1MiwgMTIyLCAxODIpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTk2LCA0MSwgMTA2KTtcXG4gICAgdHJhbnNpdGlvbjogMC43NXMgYWxsO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5ib2FyZFNxdWFyZTpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMzQsIDI1NSwgMCwgLjc1KTtcXG5cXG59XFxuXFxuI21pc3NpbGVHcmlkQ29udGFpbmVyIHtcXG4gICAgZ3JpZC1hcmVhOiBtaXNzaWxlR3JpZENvbnRhaW5lcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlciBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgei1pbmRleDogMDtcXG59XFxuXFxuI3NoaXBHcmlkQ29udGFpbmVyIHtcXG4gICAgZ3JpZC1hcmVhOiBzaGlwR3JpZENvbnRhaW5lcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlciBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgei1pbmRleDogMDtcXG59XFxuXFxuLmZyb250IHtcXG4gICAgd2lkdGg6IDI4cHg7XFxuICAgIGhlaWdodDogMjhweDtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTAlO1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMCU7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTYsIDQxLCAxMDYpO1xcbn1cXG5cXG4ubWlkIHtcXG4gICAgd2lkdGg6IDI4cHg7XFxuICAgIGhlaWdodDogMjhweDtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjIlO1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMiU7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMiU7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMiU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTYsIDQxLCAxMDYpO1xcbn1cXG5cXG4jaHVkIHtcXG4gICAgZ3JpZC1hcmVhOiBodWQ7XFxuICAgIGJhY2tncm91bmQ6IHJnYigzNiwgNDEsIDQ2KTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAyZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICAnb3JpZW50YXRpb25CdXR0b25Db250YWluZXInXFxuICAgICAgICAnc2hpcHNDb250YWluZXInXFxuICAgICAgICAnc2VsZWN0ZWRTaGlwQ29udGFpbmVyJ1xcbiAgICA7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuI2h1ZE92ZXJsYXl7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgICBncmlkLXJvdy1lbmQ6IDQ7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDE7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoODEsIDEzMSwgMjQ4LCAuNSk7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbiNzaGlwc092ZXJsYXkge1xcbiAgICBncmlkLXJvdy1zdGFydDogMjtcXG4gICAgZ3JpZC1yb3ctZW5kOiAzO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAxO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDgxLCAxMzEsIDI0OCwgLjUpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbiNzaGlwc0NvbnRhaW5lciB7XFxuICAgIGdyaWQtYXJlYTogc2hpcHNDb250YWluZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXIgY2VudGVyO1xcbn1cXG5cXG4jc2hpcHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTgsIDE5LCAyMik7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXIgY2VudGVyO1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIG1pbi1oZWlnaHQ6IDI1JTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4jZGVzdHJveWVyLFxcbiNzZWxlY3RlZF9kZXN0cm95ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgZmxleC1zdGFydDtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlciBmbGV4LXN0YXJ0O1xcbiAgICB3aWR0aDogMzJweDtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTgsIDE5LCAyMik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uZGVzdHJveWVySWNvbiB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTAlO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzAlO1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMzAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk2LCA0MSwgMTA2KTtcXG59XFxuXFxuI3N1Ym1hcmluZSxcXG4jc2VsZWN0ZWRfc3VibWFyaW5lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlciBjZW50ZXI7XFxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICAgIHdpZHRoOiA2NHB4O1xcbiAgICBoZWlnaHQ6IDMycHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYigxOCwgMTksIDIyKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5zdWJtYXJpbmVJY29uIHtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTAlO1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNSU7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyNSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTYsIDQxLCAxMDYpO1xcbn1cXG5cXG4jY3J1aXNlcixcXG4jc2VsZWN0ZWRfY3J1aXNlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXIgY2VudGVyO1xcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAgICB3aWR0aDogOTZweDtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTgsIDE5LCAyMik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uY3J1aXNlckljb24ge1xcbiAgICB3aWR0aDogOTRweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1JTtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDI1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NiwgNDEsIDEwNik7XFxufVxcblxcbiNiYXR0bGVzaGlwLFxcbiNzZWxlY3RlZF9iYXR0bGVzaGlwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlciBjZW50ZXI7XFxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICAgIHdpZHRoOiAxMjhweDtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTgsXFx0MTksXFx0MjIpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmJhdHRsZXNoaXBJY29uIHtcXG4gICAgd2lkdGg6IDEyNnB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTAlO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjUlO1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk2LCA0MSwgMTA2KTtcXG59XFxuXFxuI2NhcnJpZXIsXFxuI3NlbGVjdGVkX2NhcnJpZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyIGNlbnRlcjtcXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gICAgd2lkdGg6IDE2MHB4O1xcbiAgICBoZWlnaHQ6IDMycHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYigxOCxcXHQxOSxcXHQyMik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uY2Fycmllckljb24ge1xcbiAgICB3aWR0aDogMTU4cHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTAlO1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNSU7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyNSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTYsIDQxLCAxMDYpO1xcbn1cXG5cXG4jb3JpZW50YXRpb25CdXR0b25Db250YWluZXIge1xcbiAgICBncmlkLWFyZWE6IG9yaWVudGF0aW9uQnV0dG9uQ29udGFpbmVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyIGNlbnRlcjtcXG59XFxuXFxuI29yaWVudGF0aW9uQnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDE2MHB4O1xcbiAgICBoZWlnaHQ6IDMycHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXIgY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTgxLCAxNywgODcpO1xcbiAgICBvdXRsaW5lLXN0eWxlOiBub25lO1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0cmFuc2l0aW9uOiAuNzVzO1xcbn1cXG5cXG5idXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQ6IHJnYig3NSxcXHQxNjIsXFx0MTk4KTtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA3cHggNHB4IHJnYigwLCAxNDUsIDIwMCwgMC41KTtcXG4gICAgb3V0bGluZS1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4jc2VsZWN0ZWRTaGlwQ29udGFpbmVyIHtcXG4gICAgZ3JpZC1hcmVhOiBzZWxlY3RlZFNoaXBDb250YWluZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXIgY2VudGVyO1xcbn1cXG5cXG4jc2VsZWN0ZWRfU2hpcENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXIgY2VudGVyO1xcbiAgICBnYXA6IDcwcHg7XFxufVxcblxcbiNzZWxlY3RlZFNoaXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgZmxleC1zdGFydDtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlciBmbGV4LXN0YXJ0O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTgsIDE5LCAyMik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLDRDQUFrRDtBQUN0RDtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDRDQUFpRDtBQUNyRDs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLHNC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ICdMYXRvJztcXG4gICAgc3JjOiB1cmwoJy4uL3Jlc291cmNlcy9mb250cy9MYXRvL0xhdG8tTGlnaHQudHRmJyk7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0xhdG9Cb2xkJztcXG4gICAgc3JjOiB1cmwoJy4uL3Jlc291cmNlcy9mb250cy9MYXRvL0xhdG8tQm9sZC50dGYnKTtcXG59XFxuXFxuKiB7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuaDF7XFxuICAgIGZvbnQtZmFtaWx5OiAnTGF0b0JvbGQnO1xcbn1cXG5cXG46cm9vdHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDM2LCA0MSwgNDYpO1xcbn1cXG5cXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgU3ltYm9scyBPdXRsaW5lZCc7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbiAgICAvKiBQcmVmZXJyZWQgaWNvbiBzaXplICovXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcbiAgICB3b3JkLXdyYXA6IG5vcm1hbDtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgZGlyZWN0aW9uOiBsdHI7XFxufVxcblxcbiNiZ092ZXJsYXl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC43KTtcXG4gICAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICAgIGdyaWQtcm93LWVuZDogMztcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcXG59XFxuXFxuI21vZGFse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyIGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM2LCA0MSwgNDYpO1xcbiAgICBtYXJnaW46IDE1JSBhdXRvOyAvKiAxNSUgZnJvbSB0aGUgdG9wIGFuZCBjZW50ZXJlZCAqL1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB3aWR0aDogODAlOyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgN2ZyO1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgICduYXYgbmF2J1xcbiAgICAgICAgJ3NoaXBCb2FyZCBodWQnXFxuICAgIDtcXG4gICAgbWluLXdpZHRoOiAxMDB2dztcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQ6IHJnYigzNiwgNDEsIDQ2KTtcXG59XFxuXFxuI25hdiB7XFxuICAgIGdyaWQtYXJlYTogbmF2O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjlcXHQzMVxcdDM0KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlciBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuI3NoaXBCb2FyZCB7XFxuICAgIGdyaWQtYXJlYTogc2hpcEJvYXJkO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMzdcXHQ0MVxcdDQ2KTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtcm93OiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgJ21pc3NpbGVHcmlkQ29udGFpbmVyJ1xcbiAgICAgICAgJ3NoaXBHcmlkQ29udGFpbmVyJ1xcbiAgICA7XFxufVxcblxcbiNzaGlwQm9hcmRPdmVybGF5IHtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICAgIGdyaWQtcm93LWVuZDogMztcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoODEsIDEzMSwgMjQ4LCAuNSk7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5ib2FyZENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQ6IHJnYigzMSwgMzMsIDM3KTs7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGZsZXgtc3RhcnQgZmxleC1zdGFydDtcXG4gICAgcGxhY2UtaXRlbXM6IGZsZXgtc3RhcnQgZmxleC1zdGFydDtcXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gICAgbWluLXdpZHRoOiAzNDBweDtcXG4gICAgbWluLWhlaWdodDogMzQwcHg7XFxuICAgIG1heC13aWR0aDogMzQwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDM0MHB4O1xcbn1cXG5cXG4uYm9hcmRTcXVhcmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyIGNlbnRlcjtcXG4gICAgd2lkdGg6IDMycHg7XFxuICAgIGhlaWdodDogMzJweDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDUyLCAxMjIsIDE4Mik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxOTYsIDQxLCAxMDYpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjc1cyBhbGw7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmJvYXJkU3F1YXJlOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzNCwgMjU1LCAwLCAuNzUpO1xcblxcbn1cXG5cXG4jbWlzc2lsZUdyaWRDb250YWluZXIge1xcbiAgICBncmlkLWFyZWE6IG1pc3NpbGVHcmlkQ29udGFpbmVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyIGNlbnRlcjtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB6LWluZGV4OiAwO1xcbn1cXG5cXG4jc2hpcEdyaWRDb250YWluZXIge1xcbiAgICBncmlkLWFyZWE6IHNoaXBHcmlkQ29udGFpbmVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyIGNlbnRlcjtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB6LWluZGV4OiAwO1xcbn1cXG5cXG4uZnJvbnQge1xcbiAgICB3aWR0aDogMjhweDtcXG4gICAgaGVpZ2h0OiAyOHB4O1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwJTtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDMwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NiwgNDEsIDEwNik7XFxufVxcblxcbi5taWQge1xcbiAgICB3aWR0aDogMjhweDtcXG4gICAgaGVpZ2h0OiAyOHB4O1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMiU7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIyJTtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIyJTtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIyJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NiwgNDEsIDEwNik7XFxufVxcblxcbiNodWQge1xcbiAgICBncmlkLWFyZWE6IGh1ZDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDM2LCA0MSwgNDYpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDJmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgICdvcmllbnRhdGlvbkJ1dHRvbkNvbnRhaW5lcidcXG4gICAgICAgICdzaGlwc0NvbnRhaW5lcidcXG4gICAgICAgICdzZWxlY3RlZFNoaXBDb250YWluZXInXFxuICAgIDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4jaHVkT3ZlcmxheXtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICAgIGdyaWQtcm93LWVuZDogNDtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSg4MSwgMTMxLCAyNDgsIC41KTtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuI3NoaXBzT3ZlcmxheSB7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xcbiAgICBncmlkLXJvdy1lbmQ6IDM7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDE7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoODEsIDEzMSwgMjQ4LCAuNSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuI3NoaXBzQ29udGFpbmVyIHtcXG4gICAgZ3JpZC1hcmVhOiBzaGlwc0NvbnRhaW5lcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlciBjZW50ZXI7XFxufVxcblxcbiNzaGlwcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQ6IHJnYigxOCwgMTksIDIyKTtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlciBjZW50ZXI7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAgbWluLWhlaWdodDogMjUlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbiNkZXN0cm95ZXIsXFxuI3NlbGVjdGVkX2Rlc3Ryb3llciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBmbGV4LXN0YXJ0O1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyIGZsZXgtc3RhcnQ7XFxuICAgIHdpZHRoOiAzMnB4O1xcbiAgICBoZWlnaHQ6IDMycHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYigxOCwgMTksIDIyKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5kZXN0cm95ZXJJY29uIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTAlO1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMCU7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTYsIDQxLCAxMDYpO1xcbn1cXG5cXG4jc3VibWFyaW5lLFxcbiNzZWxlY3RlZF9zdWJtYXJpbmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyIGNlbnRlcjtcXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gICAgd2lkdGg6IDY0cHg7XFxuICAgIGhlaWdodDogMzJweDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDE4LCAxOSwgMjIpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnN1Ym1hcmluZUljb24ge1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1JTtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDI1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NiwgNDEsIDEwNik7XFxufVxcblxcbiNjcnVpc2VyLFxcbiNzZWxlY3RlZF9jcnVpc2VyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlciBjZW50ZXI7XFxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICAgIHdpZHRoOiA5NnB4O1xcbiAgICBoZWlnaHQ6IDMycHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYigxOCwgMTksIDIyKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5jcnVpc2VySWNvbiB7XFxuICAgIHdpZHRoOiA5NHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTAlO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjUlO1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk2LCA0MSwgMTA2KTtcXG59XFxuXFxuI2JhdHRsZXNoaXAsXFxuI3NlbGVjdGVkX2JhdHRsZXNoaXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyIGNlbnRlcjtcXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gICAgd2lkdGg6IDEyOHB4O1xcbiAgICBoZWlnaHQ6IDMycHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYigxOCxcXHQxOSxcXHQyMik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uYmF0dGxlc2hpcEljb24ge1xcbiAgICB3aWR0aDogMTI2cHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTAlO1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNSU7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyNSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTYsIDQxLCAxMDYpO1xcbn1cXG5cXG4jY2FycmllcixcXG4jc2VsZWN0ZWRfY2FycmllciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXIgY2VudGVyO1xcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAgICB3aWR0aDogMTYwcHg7XFxuICAgIGhlaWdodDogMzJweDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDE4LFxcdDE5LFxcdDIyKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5jYXJyaWVySWNvbiB7XFxuICAgIHdpZHRoOiAxNThweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1JTtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDI1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NiwgNDEsIDEwNik7XFxufVxcblxcbiNvcmllbnRhdGlvbkJ1dHRvbkNvbnRhaW5lciB7XFxuICAgIGdyaWQtYXJlYTogb3JpZW50YXRpb25CdXR0b25Db250YWluZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXIgY2VudGVyO1xcbn1cXG5cXG4jb3JpZW50YXRpb25CdXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTYwcHg7XFxuICAgIGhlaWdodDogMzJweDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlciBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHJnYigxODEsIDE3LCA4Nyk7XFxuICAgIG91dGxpbmUtc3R5bGU6IG5vbmU7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHRyYW5zaXRpb246IC43NXM7XFxufVxcblxcbmJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZDogcmdiKDc1LFxcdDE2MixcXHQxOTgpO1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDdweCA0cHggcmdiKDAsIDE0NSwgMjAwLCAwLjUpO1xcbiAgICBvdXRsaW5lLXN0eWxlOiBub25lO1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbiNzZWxlY3RlZFNoaXBDb250YWluZXIge1xcbiAgICBncmlkLWFyZWE6IHNlbGVjdGVkU2hpcENvbnRhaW5lcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlciBjZW50ZXI7XFxufVxcblxcbiNzZWxlY3RlZF9TaGlwQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlciBjZW50ZXI7XFxuICAgIGdhcDogNzBweDtcXG59XFxuXFxuI3NlbGVjdGVkU2hpcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBmbGV4LXN0YXJ0O1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyIGZsZXgtc3RhcnQ7XFxuICAgIGJhY2tncm91bmQ6IHJnYigxOCwgMTksIDIyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogMjAwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBQbGF5ZXIgPSByZXF1aXJlKCcuLi90ZXN0L3BsYXllcicpO1xuY29uc3QgQUkgPSByZXF1aXJlKCcuLi90ZXN0L2FpJyk7XG5cbmNvbnN0IHBsYXllcjEgPSBuZXcgUGxheWVyKCk7XG5jb25zdCBhaSA9IG5ldyBBSSgpO1xuZXhwb3J0IHsgcGxheWVyMSwgYWkgfTtcbiIsImltcG9ydCB7IGdldENvbnRlbnQgfSBmcm9tICcuLi9yZXVzYWJsZXMvZ3JpZEl0ZW1zJztcbmltcG9ydCB7IGNyZWF0ZURpdiB9IGZyb20gJy4uL3JldXNhYmxlcy9lbGVtZW50cyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUdyaWQoKSB7XG4gIGNvbnN0IG5hdiA9IGNyZWF0ZURpdigpO1xuICBuYXYuc2V0QXR0cmlidXRlKCdpZCcsICduYXYnKTtcblxuICBjb25zdCBzaGlwQm9hcmQgPSBjcmVhdGVEaXYoKTtcbiAgc2hpcEJvYXJkLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2hpcEJvYXJkJyk7XG5cbiAgY29uc3QgaHVkID0gY3JlYXRlRGl2KCk7XG4gIGh1ZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2h1ZCcpO1xuXG4gIGdldENvbnRlbnQoKS5hcHBlbmQobmF2LCBzaGlwQm9hcmQsIGh1ZCk7XG59XG5cbmNyZWF0ZUdyaWQoKTtcbiIsImltcG9ydCBmYXZpY29uIGZyb20gJy4uL3Jlc291cmNlcy9mYXZpY29uL2Zhdmljb24uaWNvJztcblxuZnVuY3Rpb24gY3JlYXRlRmF2aWNvbigpIHtcbiAgY29uc3QgaGVhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWQnKTtcbiAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgbGluay5yZWwgPSAnc2hvcnRjdXQgaWNvbic7XG4gIGxpbmsuaHJlZiA9IGZhdmljb247XG4gIGxpbmsudHlwZSA9ICdpbWFnZS94LWljb24nO1xuICBoZWFkLmFwcGVuZChsaW5rKTtcbn1cblxuY3JlYXRlRmF2aWNvbigpO1xuIiwiaW1wb3J0IHsgY3JlYXRlRGl2LCBjcmVhdGVCdXR0b24gfSBmcm9tICcuLi9yZXVzYWJsZXMvZWxlbWVudHMnO1xuaW1wb3J0IHsgZ2V0SHVkIH0gZnJvbSAnLi4vcmV1c2FibGVzL2dyaWRJdGVtcyc7XG5pbXBvcnQgeyBjaGFuZ2VPcmllbnRhdGlvbiwgc2VsZWN0U2hpcCB9IGZyb20gJy4vaHVkTG9naWMnO1xuXG5mdW5jdGlvbiBhZGRTaGlwcyhjb250YWluZXIpIHtcbiAgY29uc3QgbnVtU2hpcHMgPSA1O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVNoaXBzOyBpKyspIHtcbiAgICBjb25zdCBzaGlwID0gY3JlYXRlRGl2KCk7XG4gICAgaWYgKGkgPT09IDApIHtcbiAgICAgIHNoaXAuc2V0QXR0cmlidXRlKCdpZCcsICdkZXN0cm95ZXInKTtcbiAgICAgIGNvbnN0IGRlc3Ryb3llckljb24gPSBjcmVhdGVEaXYoKTtcbiAgICAgIGRlc3Ryb3llckljb24uY2xhc3NMaXN0LmFkZCgnZGVzdHJveWVySWNvbicpO1xuICAgICAgc2hpcC5hcHBlbmQoZGVzdHJveWVySWNvbik7XG4gICAgICBjb250YWluZXIuYXBwZW5kKCdEZXN0cm95ZXInKTtcbiAgICB9IGVsc2UgaWYgKGkgPT09IDEpIHtcbiAgICAgIHNoaXAuc2V0QXR0cmlidXRlKCdpZCcsICdzdWJtYXJpbmUnKTtcbiAgICAgIGNvbnN0IHN1Ym1hcmluZUljb24gPSBjcmVhdGVEaXYoKTtcbiAgICAgIHN1Ym1hcmluZUljb24uY2xhc3NMaXN0LmFkZCgnc3VibWFyaW5lSWNvbicpO1xuICAgICAgc2hpcC5hcHBlbmQoc3VibWFyaW5lSWNvbik7XG4gICAgICBjb250YWluZXIuYXBwZW5kKCdTdWJtYXJpbmUnKTtcbiAgICB9IGVsc2UgaWYgKGkgPT09IDIpIHtcbiAgICAgIHNoaXAuc2V0QXR0cmlidXRlKCdpZCcsICdjcnVpc2VyJyk7XG4gICAgICBjb25zdCBjcnVpc2VySWNvbiA9IGNyZWF0ZURpdigpO1xuICAgICAgY3J1aXNlckljb24uY2xhc3NMaXN0LmFkZCgnY3J1aXNlckljb24nKTtcbiAgICAgIHNoaXAuYXBwZW5kKGNydWlzZXJJY29uKTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmQoJ0NydWlzZXInKTtcbiAgICB9IGVsc2UgaWYgKGkgPT09IDMpIHtcbiAgICAgIHNoaXAuc2V0QXR0cmlidXRlKCdpZCcsICdiYXR0bGVzaGlwJyk7XG4gICAgICBjb25zdCBiYXR0bGVzaGlwSWNvbiA9IGNyZWF0ZURpdigpO1xuICAgICAgYmF0dGxlc2hpcEljb24uY2xhc3NMaXN0LmFkZCgnYmF0dGxlc2hpcEljb24nKTtcbiAgICAgIHNoaXAuYXBwZW5kKGJhdHRsZXNoaXBJY29uKTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmQoJ0JhdHRsZXNoaXAnKTtcbiAgICB9IGVsc2UgaWYgKGkgPT09IDQpIHtcbiAgICAgIHNoaXAuc2V0QXR0cmlidXRlKCdpZCcsICdjYXJyaWVyJyk7XG4gICAgICBjb25zdCBjYXJyaWVySWNvbiA9IGNyZWF0ZURpdigpO1xuICAgICAgY2Fycmllckljb24uY2xhc3NMaXN0LmFkZCgnY2Fycmllckljb24nKTtcbiAgICAgIHNoaXAuYXBwZW5kKGNhcnJpZXJJY29uKTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmQoJ0NhcnJpZXInKTtcbiAgICB9XG5cbiAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHNlbGVjdFNoaXApO1xuICAgIGNvbnRhaW5lci5hcHBlbmQoc2hpcCk7XG4gIH1cbn1cblxuY29uc3QgY3JlYXRlU2hpcHMgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZURpdigpO1xuICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdzaGlwc0NvbnRhaW5lcicpO1xuICBjb25zdCBzaGlwcyA9IGNyZWF0ZURpdigpO1xuICBzaGlwcy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NoaXBzJyk7XG4gIGFkZFNoaXBzKHNoaXBzKTtcblxuICBjb250YWluZXIuYXBwZW5kKCdTaGlwcycsIHNoaXBzKTtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5jb25zdCBjcmVhdGVPcmllbnRhdGlvbkJ1dHRvbiA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRGl2KCk7XG4gIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ29yaWVudGF0aW9uQnV0dG9uQ29udGFpbmVyJyk7XG5cbiAgY29uc3QgYnV0dG9uID0gY3JlYXRlQnV0dG9uKCk7XG4gIGJ1dHRvbi5kaXNhYmxlZCA9ICd0cnVlJztcbiAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnb3JpZW50YXRpb25CdXR0b24nKTtcbiAgYnV0dG9uLmlubmVySFRNTCA9ICdWZXJ0aWNhbCc7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBjaGFuZ2VPcmllbnRhdGlvbik7XG5cbiAgY29udGFpbmVyLmFwcGVuZCgnT3JpZW50YXRpb24nLCBidXR0b24pO1xuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlU2VsZWN0ZWRTaGlwKCkge1xuICBjb25zdCBzZWxlY3RlZFNoaXBDb250YWluZXIgPSBjcmVhdGVEaXYoKTtcbiAgc2VsZWN0ZWRTaGlwQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2VsZWN0ZWRTaGlwQ29udGFpbmVyJyk7XG4gIGNvbnN0IHNlbGVjdGVkU2hpcCA9IGNyZWF0ZURpdigpO1xuICBzZWxlY3RlZFNoaXAuc2V0QXR0cmlidXRlKCdpZCcsICdzZWxlY3RlZFNoaXAnKTtcbiAgc2VsZWN0ZWRTaGlwLmlubmVySFRNTCA9ICdObyBTaGlwIFNlbGVjdGVkLi4uJztcbiAgc2VsZWN0ZWRTaGlwQ29udGFpbmVyLmFwcGVuZCgnU2VsZWN0ZWQgU2hpcCcsIHNlbGVjdGVkU2hpcCk7XG4gIHJldHVybiBzZWxlY3RlZFNoaXBDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNoaXBzT3ZlcmxheSgpIHtcbiAgY29uc3QgZGl2ID0gY3JlYXRlRGl2KCk7XG4gIGRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NoaXBzT3ZlcmxheScpO1xuICByZXR1cm4gZGl2O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIdWRPdmVybGF5KCkge1xuICBjb25zdCBkaXYgPSBjcmVhdGVEaXYoKTtcbiAgZGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnaHVkT3ZlcmxheScpO1xuICByZXR1cm4gZGl2O1xufVxuXG5mdW5jdGlvbiBhcHBlbmRUb0hVRCgpIHtcbiAgZ2V0SHVkKCkuYXBwZW5kKFxuICAgIGNyZWF0ZU9yaWVudGF0aW9uQnV0dG9uKCksXG4gICAgY3JlYXRlU2hpcHMoKSxcbiAgICBjcmVhdGVTaGlwc092ZXJsYXkoKSxcbiAgICBjcmVhdGVTZWxlY3RlZFNoaXAoKSxcbiAgICBjcmVhdGVIdWRPdmVybGF5KCksXG4gICk7XG59XG5cbmFwcGVuZFRvSFVEKCk7XG4iLCJpbXBvcnQgeyBwbGF5ZXIxIH0gZnJvbSAnLi4vZ2FtZS9nYW1lTG9naWMnO1xuaW1wb3J0IHsgY3JlYXRlRGl2IH0gZnJvbSAnLi4vcmV1c2FibGVzL2VsZW1lbnRzJztcbmltcG9ydCB7IHRvZ2dsZVNoaXBCb2FyZE92ZXJsYXkgfSBmcm9tICcuLi9zaGlwQm9hcmQvc2hpcEJvYXJkQ29udGVudCc7XG5cbmZ1bmN0aW9uIHRvZ2dsZU9yaWVudGF0aW9uQnV0dG9uRGlzYWJsZWQoZGlzYWJsZWQpIHtcbiAgY29uc3Qgb3JpZW50YXRpb25CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3JpZW50YXRpb25CdXR0b24nKTtcbiAgb3JpZW50YXRpb25CdXR0b24uZGlzYWJsZWQgPSBkaXNhYmxlZDtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlU2hpcHNPdmVybGF5RGlzcGxheShkaXNwbGF5KSB7XG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpcHNPdmVybGF5Jyk7XG4gIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyU2VsZWN0ZWRTaGlwKCkge1xuICBjb25zdCBzZWxlY3RlZFNoaXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0ZWRTaGlwJyk7XG5cbiAgd2hpbGUgKHNlbGVjdGVkU2hpcC5maXJzdENoaWxkKSB7XG4gICAgc2VsZWN0ZWRTaGlwLnJlbW92ZUNoaWxkKHNlbGVjdGVkU2hpcC5maXJzdENoaWxkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXROb1NoaXBTZWxlY3RlZCgpIHtcbiAgY29uc3Qgc2VsZWN0ZWRTaGlwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdGVkU2hpcCcpO1xuICBzZWxlY3RlZFNoaXAuaW5uZXJIVE1MID0gJ05vIFNoaXAgU2VsZWN0ZWQuLi4nO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VJY29uQ29sb3IobmFtZSkge1xuICBpZiAobmFtZSA9PT0gJ2Rlc3Ryb3llcicpIHtcbiAgICBpZiAocGxheWVyMS5kZXN0cm95ZXJDb3VudCA8PSAwKSB7XG4gICAgICBjb25zdCBkZXN0cm95ZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc3Ryb3llckljb24nKTtcbiAgICAgIGRlc3Ryb3llckljb24uc3R5bGUuYmFja2dyb3VuZCA9ICdncmF5JztcbiAgICB9IGVsc2UgaWYgKHBsYXllcjEuZGVzdHJveWVyQ291bnQgPiAwKSB7XG4gICAgICBjb25zdCBkZXN0cm95ZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc3Ryb3llckljb24nKTtcbiAgICAgIGRlc3Ryb3llckljb24uc3R5bGUuYmFja2dyb3VuZCA9ICdyZ2IoMTk2IDQxIDEwNiknO1xuICAgIH1cbiAgfSBlbHNlIGlmIChuYW1lID09PSAnc3VibWFyaW5lJykge1xuICAgIGlmIChwbGF5ZXIxLnN1Ym1hcmluZUNvdW50IDw9IDApIHtcbiAgICAgIGNvbnN0IHN1Ym1hcmluZUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWFyaW5lSWNvbicpO1xuICAgICAgc3VibWFyaW5lSWNvbi5zdHlsZS5iYWNrZ3JvdW5kID0gJ2dyYXknO1xuICAgIH0gZWxzZSBpZiAocGxheWVyMS5zdWJtYXJpbmVDb3VudCA+IDApIHtcbiAgICAgIGNvbnN0IHN1Ym1hcmluZUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWFyaW5lSWNvbicpO1xuICAgICAgc3VibWFyaW5lSWNvbi5zdHlsZS5iYWNrZ3JvdW5kID0gJ3JnYigxOTYgNDEgMTA2KSc7XG4gICAgfVxuICB9IGVsc2UgaWYgKG5hbWUgPT09ICdjcnVpc2VyJykge1xuICAgIGlmIChwbGF5ZXIxLmNydWlzZXJDb3VudCA8PSAwKSB7XG4gICAgICBjb25zdCBjcnVpc2VySWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcnVpc2VySWNvbicpO1xuICAgICAgY3J1aXNlckljb24uc3R5bGUuYmFja2dyb3VuZCA9ICdncmF5JztcbiAgICB9IGVsc2UgaWYgKHBsYXllcjEuY3J1aXNlckNvdW50ID4gMCkge1xuICAgICAgY29uc3QgY3J1aXNlckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3J1aXNlckljb24nKTtcbiAgICAgIGNydWlzZXJJY29uLnN0eWxlLmJhY2tncm91bmQgPSAncmdiKDE5NiA0MSAxMDYpJztcbiAgICB9XG4gIH0gZWxzZSBpZiAobmFtZSA9PT0gJ2JhdHRsZXNoaXAnKSB7XG4gICAgaWYgKHBsYXllcjEuYmF0dGxlc2hpcENvdW50IDw9IDApIHtcbiAgICAgIGNvbnN0IGJhdHRsZXNoaXBJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhdHRsZXNoaXBJY29uJyk7XG4gICAgICBiYXR0bGVzaGlwSWNvbi5zdHlsZS5iYWNrZ3JvdW5kID0gJ2dyYXknO1xuICAgIH0gZWxzZSBpZiAocGxheWVyMS5iYXR0bGVzaGlwQ291bnQgPiAwKSB7XG4gICAgICBjb25zdCBiYXR0bGVzaGlwSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYXR0bGVzaGlwSWNvbicpO1xuICAgICAgYmF0dGxlc2hpcEljb24uc3R5bGUuYmFja2dyb3VuZCA9ICdyZ2IoMTk2IDQxIDEwNiknO1xuICAgIH1cbiAgfSBlbHNlIGlmIChuYW1lID09PSAnY2FycmllcicpIHtcbiAgICBpZiAocGxheWVyMS5jYXJyaWVyQ291bnQgPD0gMCkge1xuICAgICAgY29uc3QgY2Fycmllckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fycmllckljb24nKTtcbiAgICAgIGNhcnJpZXJJY29uLnN0eWxlLmJhY2tncm91bmQgPSAnZ3JheSc7XG4gICAgfSBlbHNlIGlmIChwbGF5ZXIxLmNhcnJpZXJDb3VudCA+IDApIHtcbiAgICAgIGNvbnN0IGNhcnJpZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnJpZXJJY29uJyk7XG4gICAgICBjYXJyaWVySWNvbi5zdHlsZS5iYWNrZ3JvdW5kID0gJ3JnYigxOTYgNDEgMTA2KSc7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlc2VsZWN0U2hpcCgpIHtcbiAgY29uc3Qgb2xkQWN0aXZlU2hpcE5hbWUgPSBwbGF5ZXIxLmFjdGl2ZVNoaXAubmFtZTtcbiAgcGxheWVyMS5kZXNlbGVjdFNoaXAoKTtcbiAgY2hhbmdlSWNvbkNvbG9yKG9sZEFjdGl2ZVNoaXBOYW1lKTtcbiAgdG9nZ2xlU2hpcHNPdmVybGF5RGlzcGxheSgnbm9uZScpO1xuICBjbGVhclNlbGVjdGVkU2hpcCgpO1xuICBzZXROb1NoaXBTZWxlY3RlZCgpO1xuICB0b2dnbGVTaGlwQm9hcmRPdmVybGF5KCczJyk7XG4gIHRvZ2dsZU9yaWVudGF0aW9uQnV0dG9uRGlzYWJsZWQodHJ1ZSk7XG59XG5cbmZ1bmN0aW9uIHNldFNlbGVjdGVkU2hpcChhY3RpdmVTaGlwKSB7XG4gIGNsZWFyU2VsZWN0ZWRTaGlwKCk7XG4gIGNvbnN0IHNlbGVjdGVkU2hpcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3RlZFNoaXAnKTtcbiAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRGl2KCk7XG4gIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NlbGVjdGVkX1NoaXBDb250YWluZXInKTtcbiAgY29uc3Qgc2hpcCA9IGNyZWF0ZURpdigpO1xuICBpZiAoYWN0aXZlU2hpcC5uYW1lID09PSAnZGVzdHJveWVyJykge1xuICAgIHNoaXAuc2V0QXR0cmlidXRlKCdpZCcsICdzZWxlY3RlZF9kZXN0cm95ZXInKTtcbiAgICBjb25zdCBkZXN0cm95ZXJJY29uID0gY3JlYXRlRGl2KCk7XG4gICAgZGVzdHJveWVySWNvbi5jbGFzc0xpc3QuYWRkKCdkZXN0cm95ZXJJY29uJyk7XG4gICAgc2hpcC5hcHBlbmQoZGVzdHJveWVySWNvbik7XG4gICAgY29udGFpbmVyLmFwcGVuZCgnRGVzdHJveWVyJyk7XG4gIH0gZWxzZSBpZiAoYWN0aXZlU2hpcC5uYW1lID09PSAnc3VibWFyaW5lJykge1xuICAgIHNoaXAuc2V0QXR0cmlidXRlKCdpZCcsICdzZWxlY3RlZF9zdWJtYXJpbmUnKTtcbiAgICBjb25zdCBzdWJtYXJpbmVJY29uID0gY3JlYXRlRGl2KCk7XG4gICAgc3VibWFyaW5lSWNvbi5jbGFzc0xpc3QuYWRkKCdzdWJtYXJpbmVJY29uJyk7XG4gICAgc2hpcC5hcHBlbmQoc3VibWFyaW5lSWNvbik7XG4gICAgY29udGFpbmVyLmFwcGVuZCgnU3VibWFyaW5lJyk7XG4gIH0gZWxzZSBpZiAoYWN0aXZlU2hpcC5uYW1lID09PSAnY3J1aXNlcicpIHtcbiAgICBzaGlwLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2VsZWN0ZWRfY3J1aXNlcicpO1xuICAgIGNvbnN0IGNydWlzZXJJY29uID0gY3JlYXRlRGl2KCk7XG4gICAgY3J1aXNlckljb24uY2xhc3NMaXN0LmFkZCgnY3J1aXNlckljb24nKTtcbiAgICBzaGlwLmFwcGVuZChjcnVpc2VySWNvbik7XG4gICAgY29udGFpbmVyLmFwcGVuZCgnQ3J1aXNlcicpO1xuICB9IGVsc2UgaWYgKGFjdGl2ZVNoaXAubmFtZSA9PT0gJ2JhdHRsZXNoaXAnKSB7XG4gICAgc2hpcC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NlbGVjdGVkX2JhdHRsZXNoaXAnKTtcbiAgICBjb25zdCBiYXR0bGVzaGlwSWNvbiA9IGNyZWF0ZURpdigpO1xuICAgIGJhdHRsZXNoaXBJY29uLmNsYXNzTGlzdC5hZGQoJ2JhdHRsZXNoaXBJY29uJyk7XG4gICAgc2hpcC5hcHBlbmQoYmF0dGxlc2hpcEljb24pO1xuICAgIGNvbnRhaW5lci5hcHBlbmQoJ0JhdHRsZXNoaXAnKTtcbiAgfSBlbHNlIGlmIChhY3RpdmVTaGlwLm5hbWUgPT09ICdjYXJyaWVyJykge1xuICAgIHNoaXAuc2V0QXR0cmlidXRlKCdpZCcsICdzZWxlY3RlZF9jYXJyaWVyJyk7XG4gICAgY29uc3QgY2Fycmllckljb24gPSBjcmVhdGVEaXYoKTtcbiAgICBjYXJyaWVySWNvbi5jbGFzc0xpc3QuYWRkKCdjYXJyaWVySWNvbicpO1xuICAgIHNoaXAuYXBwZW5kKGNhcnJpZXJJY29uKTtcbiAgICBjb250YWluZXIuYXBwZW5kKCdDYXJyaWVyJyk7XG4gIH1cblxuICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZGVzZWxlY3RTaGlwKTtcbiAgY29udGFpbmVyLmFwcGVuZChzaGlwKTtcbiAgc2VsZWN0ZWRTaGlwLmFwcGVuZChjb250YWluZXIpO1xufVxuXG5mdW5jdGlvbiBzZWxlY3RTaGlwKCkge1xuICBpZiAoKHRoaXMuZ2V0QXR0cmlidXRlKCdpZCcpID09PSAnZGVzdHJveWVyJyAmJiBwbGF5ZXIxLmRlc3Ryb3llckNvdW50ID4gMClcbiAgICB8fCAodGhpcy5nZXRBdHRyaWJ1dGUoJ2lkJykgPT09ICdzdWJtYXJpbmUnICYmIHBsYXllcjEuc3VibWFyaW5lQ291bnQgPiAwKVxuICAgIHx8ICh0aGlzLmdldEF0dHJpYnV0ZSgnaWQnKSA9PT0gJ2NydWlzZXInICYmIHBsYXllcjEuY3J1aXNlckNvdW50ID4gMClcbiAgICB8fCAodGhpcy5nZXRBdHRyaWJ1dGUoJ2lkJykgPT09ICdiYXR0bGVzaGlwJyAmJiBwbGF5ZXIxLmJhdHRsZXNoaXBDb3VudCA+IDApXG4gICAgfHwgKHRoaXMuZ2V0QXR0cmlidXRlKCdpZCcpID09PSAnY2FycmllcicgJiYgcGxheWVyMS5jYXJyaWVyQ291bnQgPiAwKVxuICApIHtcbiAgICBpZiAocGxheWVyMS5hY3RpdmVTaGlwID09PSBudWxsKSB7XG4gICAgICBpZiAodGhpcy5nZXRBdHRyaWJ1dGUoJ2lkJykgPT09ICdkZXN0cm95ZXInKSB7XG4gICAgICAgIHBsYXllcjEuc2VsZWN0U2hpcCgnZGVzdHJveWVyJyk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZ2V0QXR0cmlidXRlKCdpZCcpID09PSAnc3VibWFyaW5lJykge1xuICAgICAgICBwbGF5ZXIxLnNlbGVjdFNoaXAoJ3N1Ym1hcmluZScpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmdldEF0dHJpYnV0ZSgnaWQnKSA9PT0gJ2NydWlzZXInKSB7XG4gICAgICAgIHBsYXllcjEuc2VsZWN0U2hpcCgnY3J1aXNlcicpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmdldEF0dHJpYnV0ZSgnaWQnKSA9PT0gJ2JhdHRsZXNoaXAnKSB7XG4gICAgICAgIHBsYXllcjEuc2VsZWN0U2hpcCgnYmF0dGxlc2hpcCcpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmdldEF0dHJpYnV0ZSgnaWQnKSA9PT0gJ2NhcnJpZXInKSB7XG4gICAgICAgIHBsYXllcjEuc2VsZWN0U2hpcCgnY2FycmllcicpO1xuICAgICAgfVxuICAgICAgdG9nZ2xlU2hpcEJvYXJkT3ZlcmxheSgnMicpO1xuICAgIH1cblxuICAgIGNoYW5nZUljb25Db2xvcih0aGlzLmdldEF0dHJpYnV0ZSgnaWQnKSk7XG4gICAgdG9nZ2xlT3JpZW50YXRpb25CdXR0b25EaXNhYmxlZChmYWxzZSk7XG4gICAgc2V0U2VsZWN0ZWRTaGlwKHBsYXllcjEuYWN0aXZlU2hpcCk7XG4gICAgdG9nZ2xlU2hpcHNPdmVybGF5RGlzcGxheSgnYmxvY2snKTtcbiAgICAvLyBjb25zb2xlLmxvZyhwbGF5ZXIxLmFjdGl2ZVNoaXApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZU9yaWVudGF0aW9uKCkge1xuICBjb25zdCBhY3RpdmVTaGlwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHNlbGVjdGVkXyR7cGxheWVyMS5hY3RpdmVTaGlwLm5hbWV9YCk7XG4gIGlmIChwbGF5ZXIxLmFjdGl2ZVNoaXAgIT09IG51bGwpIHtcbiAgICBpZiAocGxheWVyMS5hY3RpdmVTaGlwLmhvcml6b250YWxWZXJ0aWNhbCkge1xuICAgICAgdGhpcy5pbm5lckhUTUwgPSAnSG9yaXpvbnRhbCc7XG4gICAgICBhY3RpdmVTaGlwLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoLjI1dHVybiknO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlubmVySFRNTCA9ICdWZXJ0aWNhbCc7XG4gICAgICBhY3RpdmVTaGlwLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMHR1cm4pJztcbiAgICB9XG4gICAgcGxheWVyMS5jaGFuZ2VPcmllbnRhdGlvbigpO1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIHNlbGVjdFNoaXAsIGNoYW5nZU9yaWVudGF0aW9uLCBzZXROb1NoaXBTZWxlY3RlZCxcbn07XG4iLCJpbXBvcnQgeyBnZXROYXYgfSBmcm9tICcuLi9yZXVzYWJsZXMvZ3JpZEl0ZW1zJztcbmltcG9ydCB7IGNyZWF0ZUgxLCBjcmVhdGVTeW1ib2wgfSBmcm9tICcuLi9yZXVzYWJsZXMvZWxlbWVudHMnO1xuXG5mdW5jdGlvbiBjcmVhdGVUaXRsZSgpIHtcbiAgY29uc3QgbmF2ID0gZ2V0TmF2KCk7XG5cbiAgY29uc3QgaDEgPSBjcmVhdGVIMSgnQmF0dGxlc2hpcCcpO1xuICBuYXYuYXBwZW5kKGgxLCBjcmVhdGVTeW1ib2woJ2RpcmVjdGlvbnNfYm9hdCcpKTtcbn1cblxuY3JlYXRlVGl0bGUoKTtcbiIsImZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gIHRoaXMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuZnVuY3Rpb24gYmxvY2tTaGlwQm9hcmQoZ3JpZFN0YXJ0LCBncmlkRW5kKSB7XG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpcEJvYXJkT3ZlcmxheScpO1xuICBvdmVybGF5LnN0eWxlLmJhY2tncm91bmQgPSAndHJhbnNwYXJlbnQnO1xuICBvdmVybGF5LnN0eWxlLmdyaWRSb3dTdGFydCA9IGdyaWRTdGFydDtcbiAgb3ZlcmxheS5zdHlsZS5ncmlkUm93RW5kID0gZ3JpZEVuZDtcbn1cbmNvbnN0IGNyZWF0ZUgxID0gKHRleHQpID0+IHtcbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBoMS5pbm5lckhUTUwgPSB0ZXh0O1xuICByZXR1cm4gaDE7XG59O1xuY29uc3QgY3JlYXRlRGl2ID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBjcmVhdGVCdXR0b24gPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmNvbnN0IGNyZWF0ZU1vZGFsID0gKHRleHQpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnN0IGJnID0gY3JlYXRlRGl2KCk7XG4gIGJnLnNldEF0dHJpYnV0ZSgnaWQnLCAnYmdPdmVybGF5Jyk7XG5cbiAgY29uc3QgbW9kYWwgPSBjcmVhdGVEaXYoKTtcbiAgbW9kYWwuc2V0QXR0cmlidXRlKCdpZCcsICdtb2RhbCcpO1xuICBjb25zdCBoMSA9IGNyZWF0ZUgxKHRleHQpO1xuICBoMS5zdHlsZS50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgbW9kYWwuYXBwZW5kKGgxKTtcbiAgYmcuYXBwZW5kKG1vZGFsKTtcbiAgYmcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2xvc2VNb2RhbCk7XG4gIGNvbnRlbnQuYXBwZW5kKGJnKTtcbn07XG5jb25zdCBjcmVhdGVJY29uID0gKGljb25OYW1lKSA9PiB7XG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHNwYW4uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnKTtcbiAgc3Bhbi5pbm5lckhUTUwgPSBpY29uTmFtZTtcbiAgcmV0dXJuIHNwYW47XG59O1xuXG5jb25zdCBjcmVhdGVTeW1ib2wgPSAoc3ltYm9sTmFtZSkgPT4ge1xuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBzcGFuLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQnKTtcbiAgc3Bhbi5pbm5lckhUTUwgPSBzeW1ib2xOYW1lO1xuICByZXR1cm4gc3Bhbjtcbn07XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZURpdiwgY3JlYXRlQnV0dG9uLCBjcmVhdGVNb2RhbCwgYmxvY2tTaGlwQm9hcmQsIGNyZWF0ZUljb24sIGNyZWF0ZVN5bWJvbCwgY3JlYXRlSDEsXG59O1xuIiwiY29uc3QgZ2V0TmF2ID0gKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdicpO1xuXG5jb25zdCBnZXRDb250ZW50ID0gKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuY29uc3QgZ2V0U2hpcEJvYXJkID0gKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoaXBCb2FyZCcpO1xuXG5jb25zdCBnZXRIdWQgPSAoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVkJyk7XG5cbmV4cG9ydCB7XG4gIGdldE5hdiwgZ2V0Q29udGVudCwgZ2V0U2hpcEJvYXJkLCBnZXRIdWQsXG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuaW1wb3J0IHsgZ2V0U2hpcEJvYXJkIH0gZnJvbSAnLi4vcmV1c2FibGVzL2dyaWRJdGVtcyc7XG5pbXBvcnQgeyBjcmVhdGVEaXYgfSBmcm9tICcuLi9yZXVzYWJsZXMvZWxlbWVudHMnO1xuaW1wb3J0IHsgcGxhY2VTaGlwLCBmaXJlIH0gZnJvbSAnLi9zaGlwQm9hcmRMb2dpYyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNoaXBCb2FyZCgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRGl2KCk7XG4gIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NoaXBHcmlkQ29udGFpbmVyJyk7XG4gIGNvbnN0IGJvYXJkID0gY3JlYXRlRGl2KCk7XG4gIGJvYXJkLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2hpcEdyaWQnKTtcbiAgYm9hcmQuY2xhc3NMaXN0LmFkZCgnYm9hcmRDb250YWluZXInKTtcbiAgbGV0IGNvdW50ZXIgPSAwO1xuXG4gIGZvciAobGV0IHggPSAwOyB4IDwgMTA7IHgrKykge1xuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgMTA7IHkrKykge1xuICAgICAgY29uc3Qgc3F1YXJlID0gY3JlYXRlRGl2KCk7XG4gICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKCdpZCcsIGBTXyR7Y291bnRlcn1gKTtcbiAgICAgIC8vIHNxdWFyZS5pbm5lckhUTUwgPSBgJHtjb3VudGVyfWA7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnYm9hcmRTcXVhcmUnKTtcbiAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBwbGFjZVNoaXApO1xuICAgICAgYm9hcmQuYXBwZW5kKHNxdWFyZSk7XG4gICAgICBjb3VudGVyKys7XG4gICAgfVxuICB9XG5cbiAgY29udGFpbmVyLmFwcGVuZCgnU2hpcCBHcmlkJywgYm9hcmQpO1xuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNaXNzbGVCb2FyZCgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRGl2KCk7XG4gIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21pc3NpbGVHcmlkQ29udGFpbmVyJyk7XG4gIGNvbnN0IGJvYXJkID0gY3JlYXRlRGl2KCk7XG4gIGJvYXJkLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWlzc2xlR3JpZCcpO1xuICBib2FyZC5jbGFzc0xpc3QuYWRkKCdib2FyZENvbnRhaW5lcicpO1xuICBsZXQgY291bnRlciA9IDA7XG4gIGZvciAobGV0IHkgPSAwOyB5IDwgMTA7IHkrKykge1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgMTA7IHgrKykge1xuICAgICAgY29uc3Qgc3F1YXJlID0gY3JlYXRlRGl2KCk7XG4gICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKCdpZCcsIGBNXyR7Y291bnRlcn1gKTtcbiAgICAgIC8vIHNxdWFyZS5pbm5lckhUTUwgPSBgJHtjb3VudGVyfWA7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnYm9hcmRTcXVhcmUnKTtcbiAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmaXJlKTtcbiAgICAgIGJvYXJkLmFwcGVuZChzcXVhcmUpO1xuICAgICAgY291bnRlcisrO1xuICAgIH1cbiAgfVxuXG4gIGNvbnRhaW5lci5hcHBlbmQoJ01pc3NsZSBHcmlkJywgYm9hcmQpO1xuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVPdmVybGF5KCkge1xuICBjb25zdCBkaXYgPSBjcmVhdGVEaXYoKTtcbiAgZGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnc2hpcEJvYXJkT3ZlcmxheScpO1xuICByZXR1cm4gZGl2O1xufVxuXG5mdW5jdGlvbiBhcHBlbmRUb1NoaXBCb2FyZCgpIHtcbiAgZ2V0U2hpcEJvYXJkKCkuYXBwZW5kKGNyZWF0ZU1pc3NsZUJvYXJkKCksIGNyZWF0ZVNoaXBCb2FyZCgpLCBjcmVhdGVPdmVybGF5KCkpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVTaGlwQm9hcmRPdmVybGF5KHJvdykge1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoaXBCb2FyZE92ZXJsYXknKTtcbiAgb3ZlcmxheS5zdHlsZS5ncmlkUm93RW5kID0gcm93O1xufVxuXG5leHBvcnQgeyB0b2dnbGVTaGlwQm9hcmRPdmVybGF5IH07XG5hcHBlbmRUb1NoaXBCb2FyZCgpO1xuIiwiaW1wb3J0IHsgcGxheWVyMSwgYWkgfSBmcm9tICcuLi9nYW1lL2dhbWVMb2dpYyc7XG5pbXBvcnQgeyBjcmVhdGVEaXYsIGNyZWF0ZU1vZGFsLCBibG9ja1NoaXBCb2FyZCB9IGZyb20gJy4uL3JldXNhYmxlcy9lbGVtZW50cyc7XG5cbmZ1bmN0aW9uIHRvZ2dsZVNoaXBzT3ZlcmxheURpc3BsYXkoZGlzcGxheSkge1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoaXBzT3ZlcmxheScpO1xuICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5O1xufVxuXG5mdW5jdGlvbiB0b2dnbGVTaGlwQm9hcmRPdmVybGF5KHJvdykge1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoaXBCb2FyZE92ZXJsYXknKTtcbiAgb3ZlcmxheS5zdHlsZS5ncmlkUm93RW5kID0gcm93O1xufVxuXG5mdW5jdGlvbiB0b2dnbGVPcmllbnRhdGlvbkJ1dHRvbkRpc2FibGVkKGRpc2FibGVkKSB7XG4gIGNvbnN0IG9yaWVudGF0aW9uQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29yaWVudGF0aW9uQnV0dG9uJyk7XG4gIG9yaWVudGF0aW9uQnV0dG9uLmRpc2FibGVkID0gZGlzYWJsZWQ7XG59XG5cbmZ1bmN0aW9uIGNsZWFyU2VsZWN0ZWRTaGlwKCkge1xuICBjb25zdCBzZWxlY3RlZFNoaXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0ZWRTaGlwJyk7XG5cbiAgd2hpbGUgKHNlbGVjdGVkU2hpcC5maXJzdENoaWxkKSB7XG4gICAgc2VsZWN0ZWRTaGlwLnJlbW92ZUNoaWxkKHNlbGVjdGVkU2hpcC5maXJzdENoaWxkKTtcbiAgfVxufVxuZnVuY3Rpb24gc2V0Tm9TaGlwU2VsZWN0ZWQoKSB7XG4gIGNvbnN0IHNlbGVjdGVkU2hpcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3RlZFNoaXAnKTtcbiAgc2VsZWN0ZWRTaGlwLmlubmVySFRNTCA9ICdObyBTaGlwIFNlbGVjdGVkLi4uJztcbn1cblxuZnVuY3Rpb24gZGVmYXVsdE9yaWVudGF0aW9uQnV0dG9uQ29weSgpIHtcbiAgY29uc3Qgb3JpZW50YXRpb25CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3JpZW50YXRpb25CdXR0b24nKTtcbiAgb3JpZW50YXRpb25CdXR0b24uaW5uZXJIVE1MID0gJ1ZlcnRpY2FsJztcbn1cblxuZnVuY3Rpb24gaXNWYWxpZChpZCkge1xuICBpZiAocGxheWVyMS5hY3RpdmVTaGlwLmhvcml6b250YWxWZXJ0aWNhbCkge1xuICAgIGlmICgocGFyc2VJbnQoaWQsIDEwKSAlIDEwID4gOSAmJiBwbGF5ZXIxLmFjdGl2ZVNoaXAubmFtZSA9PT0gJ2Rlc3Ryb3llcicpXG4gICAgICB8fCAocGFyc2VJbnQoaWQsIDEwKSAlIDEwID4gOCAmJiBwbGF5ZXIxLmFjdGl2ZVNoaXAubmFtZSA9PT0gJ3N1Ym1hcmluZScpXG4gICAgICB8fCAocGFyc2VJbnQoaWQsIDEwKSAlIDEwID4gNyAmJiBwbGF5ZXIxLmFjdGl2ZVNoaXAubmFtZSA9PT0gJ2NydWlzZXInKVxuICAgICAgfHwgKHBhcnNlSW50KGlkLCAxMCkgJSAxMCA+IDYgJiYgcGxheWVyMS5hY3RpdmVTaGlwLm5hbWUgPT09ICdiYXR0bGVzaGlwJylcbiAgICAgIHx8IChwYXJzZUludChpZCwgMTApICUgMTAgPiA1ICYmIHBsYXllcjEuYWN0aXZlU2hpcC5uYW1lID09PSAnY2FycmllcicpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9IGVsc2UgaWYgKCFwbGF5ZXIxLmFjdGl2ZVNoaXAuaG9yaXpvbnRhbFZlcnRpY2FsKSB7XG4gICAgaWYgKChwbGF5ZXIxLmdhbWVCb2FyZC5nZXRDb29yZGluYXRlRnJvbUluZGV4KGlkKS5jb29yZGluYXRlWzFdID4gOSAmJiBwbGF5ZXIxLmFjdGl2ZVNoaXAubmFtZSA9PT0gJ2Rlc3Ryb3llcicpXG4gICAgICB8fCAocGxheWVyMS5nYW1lQm9hcmQuZ2V0Q29vcmRpbmF0ZUZyb21JbmRleChpZCkuY29vcmRpbmF0ZVsxXSA+IDggJiYgcGxheWVyMS5hY3RpdmVTaGlwLm5hbWUgPT09ICdzdWJtYXJpbmUnKVxuICAgICAgfHwgKHBsYXllcjEuZ2FtZUJvYXJkLmdldENvb3JkaW5hdGVGcm9tSW5kZXgoaWQpLmNvb3JkaW5hdGVbMV0gPiA3ICYmIHBsYXllcjEuYWN0aXZlU2hpcC5uYW1lID09PSAnY3J1aXNlcicpXG4gICAgICB8fCAocGxheWVyMS5nYW1lQm9hcmQuZ2V0Q29vcmRpbmF0ZUZyb21JbmRleChpZCkuY29vcmRpbmF0ZVsxXSA+IDYgJiYgcGxheWVyMS5hY3RpdmVTaGlwLm5hbWUgPT09ICdiYXR0bGVzaGlwJylcbiAgICAgIHx8IChwbGF5ZXIxLmdhbWVCb2FyZC5nZXRDb29yZGluYXRlRnJvbUluZGV4KGlkKS5jb29yZGluYXRlWzFdID4gNSAmJiBwbGF5ZXIxLmFjdGl2ZVNoaXAubmFtZSA9PT0gJ2NhcnJpZXInKVxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyMS5hY3RpdmVTaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHBsYXllcjEuYWN0aXZlU2hpcC5ob3Jpem9udGFsVmVydGljYWwpIHtcbiAgICAgIGlmIChwbGF5ZXIxLmdhbWVCb2FyZC5nZXRDb29yZGluYXRlRnJvbUluZGV4KGAke3BhcnNlSW50KGlkLCAxMCkgKyBpfWApLm9jY3VwaWVkKSB7IHJldHVybiBmYWxzZTsgfVxuICAgIH0gZWxzZSBpZiAocGxheWVyMS5nYW1lQm9hcmQuZ2V0Q29vcmRpbmF0ZUZyb21JbmRleChgJHtwYXJzZUludChpZCwgMTApICsgKGkgKiAxMCl9YCkub2NjdXBpZWQpIHsgcmV0dXJuIGZhbHNlOyB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlSHVkT3ZlcmxheURpc3BsYXkoZGlzcGxheSkge1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1ZE92ZXJsYXknKTtcbiAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheTtcbn1cblxuZnVuY3Rpb24gY2hlY2tJZlBsYXllck91dG9mU2hpcHMoKSB7XG4gIGlmIChwbGF5ZXIxLmRlc3Ryb3llckNvdW50IDw9IDBcbiAgICAmJiBwbGF5ZXIxLnN1Ym1hcmluZUNvdW50IDw9IDBcbiAgICAmJiBwbGF5ZXIxLmNydWlzZXJDb3VudCA8PSAwXG4gICAgJiYgcGxheWVyMS5iYXR0bGVzaGlwQ291bnQgPD0gMFxuICAgICYmIHBsYXllcjEuY2FycmllckNvdW50IDw9IDApIHtcbiAgICB0b2dnbGVTaGlwc092ZXJsYXlEaXNwbGF5KCdub25lJyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGRyYXdTaGlwVG9TaGlwQm9hcmQoYWN0aXZlU2hpcCwgYXJyYXksIHNoaXBTcXVhcmUpIHtcbiAgaWYgKGFjdGl2ZVNoaXAubmFtZSA9PT0gJ2Rlc3Ryb3llcicpIHtcbiAgICBjb25zdCBmcm9udCA9IGNyZWF0ZURpdigpO1xuICAgIGZyb250LmNsYXNzTGlzdC5hZGQoJ2Zyb250Jyk7XG4gICAgaWYgKCFhY3RpdmVTaGlwLmhvcml6b250YWxWZXJ0aWNhbCkgeyBmcm9udC5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKC4yNXR1cm4pJzsgfVxuICAgIHNoaXBTcXVhcmUuYXBwZW5kKGZyb250KTtcbiAgfSBlbHNlIGlmIChhY3RpdmVTaGlwLm5hbWUgPT09ICdzdWJtYXJpbmUnKSB7XG4gICAgY29uc3QgZnJvbnQgPSBjcmVhdGVEaXYoKTtcbiAgICBmcm9udC5jbGFzc0xpc3QuYWRkKCdmcm9udCcpO1xuICAgIGNvbnN0IG1pZCA9IGNyZWF0ZURpdigpO1xuICAgIG1pZC5jbGFzc0xpc3QuYWRkKCdtaWQnKTtcblxuICAgIGlmICghYWN0aXZlU2hpcC5ob3Jpem9udGFsVmVydGljYWwpIHtcbiAgICAgIGZyb250LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoLjI1dHVybiknO1xuICAgICAgbWlkLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoLjI1dHVybiknO1xuICAgICAgc2hpcFNxdWFyZS5hcHBlbmQoZnJvbnQpO1xuICAgICAgY29uc3Qgc3F1YXJlMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBTXyR7cGFyc2VJbnQoYXJyYXlbMV0sIDEwKSArIDEwfWApO1xuICAgICAgc3F1YXJlMS5hcHBlbmQobWlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2hpcFNxdWFyZS5hcHBlbmQoZnJvbnQpO1xuICAgICAgY29uc3Qgc3F1YXJlMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBTXyR7cGFyc2VJbnQoYXJyYXlbMV0sIDEwKSArIDF9YCk7XG4gICAgICBzcXVhcmUxLmFwcGVuZChtaWQpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChhY3RpdmVTaGlwLm5hbWUgPT09ICdjcnVpc2VyJykge1xuICAgIGNvbnN0IGZyb250ID0gY3JlYXRlRGl2KCk7XG4gICAgZnJvbnQuY2xhc3NMaXN0LmFkZCgnZnJvbnQnKTtcbiAgICBjb25zdCBtaWQxID0gY3JlYXRlRGl2KCk7XG4gICAgbWlkMS5jbGFzc0xpc3QuYWRkKCdtaWQnKTtcbiAgICBjb25zdCBtaWQyID0gY3JlYXRlRGl2KCk7XG4gICAgbWlkMi5jbGFzc0xpc3QuYWRkKCdtaWQnKTtcblxuICAgIGlmICghYWN0aXZlU2hpcC5ob3Jpem9udGFsVmVydGljYWwpIHtcbiAgICAgIGZyb250LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoLjI1dHVybiknO1xuICAgICAgbWlkMS5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKC4yNXR1cm4pJztcbiAgICAgIG1pZDIuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSguMjV0dXJuKSc7XG5cbiAgICAgIHNoaXBTcXVhcmUuYXBwZW5kKGZyb250KTtcbiAgICAgIGNvbnN0IHNxdWFyZTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgU18ke3BhcnNlSW50KGFycmF5WzFdLCAxMCkgKyAxMH1gKTtcbiAgICAgIHNxdWFyZTEuYXBwZW5kKG1pZDEpO1xuICAgICAgY29uc3Qgc3F1YXJlMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBTXyR7cGFyc2VJbnQoYXJyYXlbMV0sIDEwKSArIDIwfWApO1xuICAgICAgc3F1YXJlMi5hcHBlbmQobWlkMik7XG4gICAgfSBlbHNlIGlmIChhY3RpdmVTaGlwLmhvcml6b250YWxWZXJ0aWNhbCkge1xuICAgICAgc2hpcFNxdWFyZS5hcHBlbmQoZnJvbnQpO1xuICAgICAgY29uc3Qgc3F1YXJlMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBTXyR7cGFyc2VJbnQoYXJyYXlbMV0sIDEwKSArIDF9YCk7XG4gICAgICBzcXVhcmUxLmFwcGVuZChtaWQxKTtcbiAgICAgIGNvbnN0IHNxdWFyZTIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgU18ke3BhcnNlSW50KGFycmF5WzFdLCAxMCkgKyAyfWApO1xuICAgICAgc3F1YXJlMi5hcHBlbmQobWlkMik7XG4gICAgfVxuICB9IGVsc2UgaWYgKGFjdGl2ZVNoaXAubmFtZSA9PT0gJ2JhdHRsZXNoaXAnKSB7XG4gICAgY29uc3QgZnJvbnQgPSBjcmVhdGVEaXYoKTtcbiAgICBmcm9udC5jbGFzc0xpc3QuYWRkKCdmcm9udCcpO1xuICAgIGNvbnN0IG1pZDEgPSBjcmVhdGVEaXYoKTtcbiAgICBtaWQxLmNsYXNzTGlzdC5hZGQoJ21pZCcpO1xuICAgIGNvbnN0IG1pZDIgPSBjcmVhdGVEaXYoKTtcbiAgICBtaWQyLmNsYXNzTGlzdC5hZGQoJ21pZCcpO1xuICAgIGNvbnN0IG1pZDMgPSBjcmVhdGVEaXYoKTtcbiAgICBtaWQzLmNsYXNzTGlzdC5hZGQoJ21pZCcpO1xuXG4gICAgaWYgKCFhY3RpdmVTaGlwLmhvcml6b250YWxWZXJ0aWNhbCkge1xuICAgICAgZnJvbnQuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSguMjV0dXJuKSc7XG4gICAgICBtaWQxLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoLjI1dHVybiknO1xuICAgICAgbWlkMi5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKC4yNXR1cm4pJztcbiAgICAgIG1pZDMuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSguMjV0dXJuKSc7XG5cbiAgICAgIHNoaXBTcXVhcmUuYXBwZW5kKGZyb250KTtcbiAgICAgIGNvbnN0IHNxdWFyZTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgU18ke3BhcnNlSW50KGFycmF5WzFdLCAxMCkgKyAxMH1gKTtcbiAgICAgIHNxdWFyZTEuYXBwZW5kKG1pZDEpO1xuICAgICAgY29uc3Qgc3F1YXJlMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBTXyR7cGFyc2VJbnQoYXJyYXlbMV0sIDEwKSArIDIwfWApO1xuICAgICAgc3F1YXJlMi5hcHBlbmQobWlkMik7XG4gICAgICBjb25zdCBzcXVhcmUzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYFNfJHtwYXJzZUludChhcnJheVsxXSwgMTApICsgMzB9YCk7XG4gICAgICBzcXVhcmUzLmFwcGVuZChtaWQzKTtcbiAgICB9IGVsc2UgaWYgKGFjdGl2ZVNoaXAuaG9yaXpvbnRhbFZlcnRpY2FsKSB7XG4gICAgICBzaGlwU3F1YXJlLmFwcGVuZChmcm9udCk7XG4gICAgICBjb25zdCBzcXVhcmUxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYFNfJHtwYXJzZUludChhcnJheVsxXSwgMTApICsgMX1gKTtcbiAgICAgIHNxdWFyZTEuYXBwZW5kKG1pZDEpO1xuICAgICAgY29uc3Qgc3F1YXJlMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBTXyR7cGFyc2VJbnQoYXJyYXlbMV0sIDEwKSArIDJ9YCk7XG4gICAgICBzcXVhcmUyLmFwcGVuZChtaWQyKTtcbiAgICAgIGNvbnN0IHNxdWFyZTMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgU18ke3BhcnNlSW50KGFycmF5WzFdLCAxMCkgKyAzfWApO1xuICAgICAgc3F1YXJlMy5hcHBlbmQobWlkMyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGFjdGl2ZVNoaXAubmFtZSA9PT0gJ2NhcnJpZXInKSB7XG4gICAgY29uc3QgZnJvbnQgPSBjcmVhdGVEaXYoKTtcbiAgICBmcm9udC5jbGFzc0xpc3QuYWRkKCdmcm9udCcpO1xuICAgIGNvbnN0IG1pZDEgPSBjcmVhdGVEaXYoKTtcbiAgICBtaWQxLmNsYXNzTGlzdC5hZGQoJ21pZCcpO1xuICAgIGNvbnN0IG1pZDIgPSBjcmVhdGVEaXYoKTtcbiAgICBtaWQyLmNsYXNzTGlzdC5hZGQoJ21pZCcpO1xuICAgIGNvbnN0IG1pZDMgPSBjcmVhdGVEaXYoKTtcbiAgICBtaWQzLmNsYXNzTGlzdC5hZGQoJ21pZCcpO1xuICAgIGNvbnN0IG1pZDQgPSBjcmVhdGVEaXYoKTtcbiAgICBtaWQ0LmNsYXNzTGlzdC5hZGQoJ21pZCcpO1xuXG4gICAgaWYgKCFhY3RpdmVTaGlwLmhvcml6b250YWxWZXJ0aWNhbCkge1xuICAgICAgZnJvbnQuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSguMjV0dXJuKSc7XG4gICAgICBtaWQxLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoLjI1dHVybiknO1xuICAgICAgbWlkMi5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKC4yNXR1cm4pJztcbiAgICAgIG1pZDMuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSguMjV0dXJuKSc7XG4gICAgICBtaWQ0LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoLjI1dHVybiknO1xuXG4gICAgICBzaGlwU3F1YXJlLmFwcGVuZChmcm9udCk7XG4gICAgICBjb25zdCBzcXVhcmUxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYFNfJHtwYXJzZUludChhcnJheVsxXSwgMTApICsgMTB9YCk7XG4gICAgICBzcXVhcmUxLmFwcGVuZChtaWQxKTtcbiAgICAgIGNvbnN0IHNxdWFyZTIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgU18ke3BhcnNlSW50KGFycmF5WzFdLCAxMCkgKyAyMH1gKTtcbiAgICAgIHNxdWFyZTIuYXBwZW5kKG1pZDIpO1xuICAgICAgY29uc3Qgc3F1YXJlMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBTXyR7cGFyc2VJbnQoYXJyYXlbMV0sIDEwKSArIDMwfWApO1xuICAgICAgc3F1YXJlMy5hcHBlbmQobWlkMyk7XG4gICAgICBjb25zdCBzcXVhcmU0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYFNfJHtwYXJzZUludChhcnJheVsxXSwgMTApICsgNDB9YCk7XG4gICAgICBzcXVhcmU0LmFwcGVuZChtaWQ0KTtcbiAgICB9IGVsc2UgaWYgKGFjdGl2ZVNoaXAuaG9yaXpvbnRhbFZlcnRpY2FsKSB7XG4gICAgICBzaGlwU3F1YXJlLmFwcGVuZChmcm9udCk7XG4gICAgICBjb25zdCBzcXVhcmUxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYFNfJHtwYXJzZUludChhcnJheVsxXSwgMTApICsgMX1gKTtcbiAgICAgIHNxdWFyZTEuYXBwZW5kKG1pZDEpO1xuICAgICAgY29uc3Qgc3F1YXJlMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBTXyR7cGFyc2VJbnQoYXJyYXlbMV0sIDEwKSArIDJ9YCk7XG4gICAgICBzcXVhcmUyLmFwcGVuZChtaWQyKTtcbiAgICAgIGNvbnN0IHNxdWFyZTMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgU18ke3BhcnNlSW50KGFycmF5WzFdLCAxMCkgKyAzfWApO1xuICAgICAgc3F1YXJlMy5hcHBlbmQobWlkMyk7XG4gICAgICBjb25zdCBzcXVhcmU0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYFNfJHtwYXJzZUludChhcnJheVsxXSwgMTApICsgNH1gKTtcbiAgICAgIHNxdWFyZTQuYXBwZW5kKG1pZDQpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBwbGFjZVNoaXAoKSB7XG4gIGNvbnN0IGFycmF5ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2lkJykuc3BsaXQoJ1NfJyk7XG4gIGlmIChpc1ZhbGlkKGFycmF5WzFdKSkge1xuICAgIGNvbnN0IG9sZEFjdGl2ZVNoaXAgPSBwbGF5ZXIxLmFjdGl2ZVNoaXA7XG4gICAgcGxheWVyMS5wbGFjZVNoaXAocGxheWVyMS5nYW1lQm9hcmQuZ2V0Q29vcmRpbmF0ZUZyb21JbmRleChhcnJheVsxXSkuY29vcmRpbmF0ZSk7XG4gICAgZHJhd1NoaXBUb1NoaXBCb2FyZChvbGRBY3RpdmVTaGlwLCBhcnJheSwgdGhpcyk7XG4gICAgaWYgKCFjaGVja0lmUGxheWVyT3V0b2ZTaGlwcygpKSB7XG4gICAgICBjbGVhclNlbGVjdGVkU2hpcCgpO1xuICAgICAgc2V0Tm9TaGlwU2VsZWN0ZWQoKTtcbiAgICAgIHRvZ2dsZVNoaXBzT3ZlcmxheURpc3BsYXkoJ25vbmUnKTtcbiAgICAgIHRvZ2dsZVNoaXBCb2FyZE92ZXJsYXkoJzMnKTtcbiAgICAgIGRlZmF1bHRPcmllbnRhdGlvbkJ1dHRvbkNvcHkoKTtcbiAgICAgIHRvZ2dsZU9yaWVudGF0aW9uQnV0dG9uRGlzYWJsZWQodHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNsZWFyU2VsZWN0ZWRTaGlwKCk7XG4gICAgICBzZXROb1NoaXBTZWxlY3RlZCgpO1xuICAgICAgdG9nZ2xlSHVkT3ZlcmxheURpc3BsYXkoJ2Jsb2NrJyk7XG4gICAgICBibG9ja1NoaXBCb2FyZCgnMicsICczJyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrRm9yV2lubmVyKCkge1xuICBpZiAocGxheWVyMS5zY29yZSA9PT0gMTUpIHtcbiAgICBibG9ja1NoaXBCb2FyZCgnMScsICczJyk7XG4gICAgY3JlYXRlTW9kYWwoJ01pc3Npb24gU3VjY2VlZGVkISA8YnI+IFBsYXllciBXb24hJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmlyZSgpIHtcbiAgY29uc3QgYXJyYXkgPSB0aGlzLmdldEF0dHJpYnV0ZSgnaWQnKS5zcGxpdCgnTV8nKTtcbiAgaWYgKCFwbGF5ZXIxLnZpc2l0ZWRNYXAuaGFzKGAke2FycmF5WzFdfWApKSB7XG4gICAgcGxheWVyMS52aXNpdGVkTWFwLnNldChgJHthcnJheVsxXX1gLCB0cnVlKTtcbiAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KGFycmF5WzFdLCAxMCk7XG4gICAgYWkucGxheWVyLnJlY2VpdmVGaXJlKGFpLnBsYXllci5nYW1lQm9hcmQuZ2V0Q29vcmRpbmF0ZUZyb21JbmRleChpbmRleCkuY29vcmRpbmF0ZSk7XG4gICAgaWYgKGFpLnBsYXllci5nYW1lQm9hcmQuZ2V0Q29vcmRpbmF0ZUZyb21JbmRleChpbmRleCkuaGl0XG4gICYmIGFpLnBsYXllci5nYW1lQm9hcmQuZ2V0Q29vcmRpbmF0ZUZyb21JbmRleChpbmRleCkub2NjdXBpZWQpIHtcbiAgICAgIHRoaXMuc3R5bGUuYmFja2dyb3VuZCA9ICdyZ2IoMTk2LCAzNiwgNjMpJztcbiAgICAgIHRoaXMuc3R5bGUuYm9yZGVyQ29sb3IgPSAnYmxhY2snO1xuICAgICAgcGxheWVyMS5zY29yZSsrO1xuICAgICAgY2hlY2tGb3JXaW5uZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kID0gJ3doaXRlJztcbiAgICB9XG5cbiAgICBhaS5maXJlKHBsYXllcjEpO1xuICB9XG59XG5cbmV4cG9ydCB7IHBsYWNlU2hpcCwgZmlyZSB9O1xuIiwiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuXG5jb25zdCBQbGF5ZXIgPSByZXF1aXJlKCcuL3BsYXllcicpO1xuY29uc3QgR2FtZUJvYXJkID0gcmVxdWlyZSgnLi9nYW1lQm9hcmQnKTtcbmNvbnN0IHsgY3JlYXRlRGl2LCBjcmVhdGVNb2RhbCwgYmxvY2tTaGlwQm9hcmQgfSA9IHJlcXVpcmUoJy4uL3JldXNhYmxlcy9lbGVtZW50cycpO1xuXG5jbGFzcyBBSSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcigpO1xuICAgIHRoaXMubWlzc2xlQm9hcmVkID0gbmV3IEdhbWVCb2FyZCgpO1xuICAgIHRoaXMucGxhY2VTaGlwcygpO1xuICAgIHRoaXMubGFzdE9jY3VwaWVkID0gbnVsbDtcbiAgfVxuXG4gIHNlbGVjdFNoaXAobmFtZSkge1xuICAgIHRoaXMucGxheWVyLnNlbGVjdFNoaXAobmFtZSk7XG4gIH1cblxuICBjaGFuZ2VPcmllbnRhdGlvbigpIHtcbiAgICBjb25zdCByYW5kb21OdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgICBpZiAocmFuZG9tTnVtYmVyID09PSAxKSB0aGlzLnBsYXllci5jaGFuZ2VPcmllbnRhdGlvbigpO1xuICB9XG5cbiAgZmluZFZhbGlkQ29vcmRpbmF0ZUFuZFBsYWNlU2hpcCgpIHtcbiAgICB3aGlsZSAodGhpcy5wbGF5ZXIuYWN0aXZlU2hpcCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcmFuZG9tTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKTtcbiAgICAgIGNvbnN0IGNvb3JkaW5hdGUgPSB0aGlzLnBsYXllci5nYW1lQm9hcmQuZ2V0Q29vcmRpbmF0ZUZyb21JbmRleChyYW5kb21OdW1iZXIpO1xuICAgICAgdGhpcy5jaGFuZ2VPcmllbnRhdGlvbigpO1xuICAgICAgdGhpcy5wbGF5ZXIucGxhY2VTaGlwKGNvb3JkaW5hdGUuY29vcmRpbmF0ZSk7XG4gICAgfVxuICB9XG5cbiAgcGxhY2VTaGlwcygpIHtcbiAgICB3aGlsZSAodGhpcy5wbGF5ZXIuc2hpcE1hcC5zaXplID4gMCkge1xuICAgICAgY29uc3QgcmFuZG9tTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNSk7XG4gICAgICBzd2l0Y2ggKHJhbmRvbU51bWJlcikge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgaWYgKHRoaXMucGxheWVyLmRlc3Ryb3llckNvdW50ID4gMCkgeyB0aGlzLnNlbGVjdFNoaXAoJ2Rlc3Ryb3llcicpOyB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIuc3VibWFyaW5lQ291bnQgPiAwKSB7IHRoaXMuc2VsZWN0U2hpcCgnc3VibWFyaW5lJyk7IH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGlmICh0aGlzLnBsYXllci5jcnVpc2VyQ291bnQgPiAwKSB7IHRoaXMuc2VsZWN0U2hpcCgnY3J1aXNlcicpOyB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIuYmF0dGxlc2hpcENvdW50ID4gMCkgeyB0aGlzLnNlbGVjdFNoaXAoJ2JhdHRsZXNoaXAnKTsgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgaWYgKHRoaXMucGxheWVyLmNhcnJpZXJDb3VudCA+IDApIHsgdGhpcy5zZWxlY3RTaGlwKCdjYXJyaWVyJyk7IH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgIH1cbiAgICAgIHRoaXMuZmluZFZhbGlkQ29vcmRpbmF0ZUFuZFBsYWNlU2hpcCgpO1xuICAgIH1cbiAgfVxuXG4gIGFuYWx5emVMYXN0T2NjdXBpZWQocGxheWVyID0gbmV3IFBsYXllcigpKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXIub2NjdXBpZWRTaGlwTWFwLmdldCh0aGlzLmxhc3RPY2N1cGllZC5zaGlwTmFtZSkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gcGxheWVyLmdhbWVCb2FyZC5nZXRJbmRleE9mQ29vcmRpbmF0ZShcbiAgICAgICAgcGxheWVyLm9jY3VwaWVkU2hpcE1hcC5nZXQodGhpcy5sYXN0T2NjdXBpZWQuc2hpcE5hbWUpW2ldLmNvb3JkaW5hdGUsXG4gICAgICApO1xuXG4gICAgICBpZiAoIXRoaXMucGxheWVyLnZpc2l0ZWRNYXAuaGFzKGAke2luZGV4fWApKSB7XG4gICAgICAgIHRoaXMucGxheWVyLnZpc2l0ZWRNYXAuc2V0KGAke2luZGV4fWAsIHRydWUpO1xuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjcmVhdGVNb2RhbCh0ZXh0KSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29uc3QgYmcgPSBjcmVhdGVEaXYoKTtcbiAgICBiZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2JnT3ZlcmxheScpO1xuXG4gICAgY29uc3QgbW9kYWwgPSBjcmVhdGVEaXYoKTtcbiAgICBtb2RhbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21vZGFsJyk7XG4gICAgbW9kYWwuaW5uZXJIVE1MID0gdGV4dDtcbiAgICBiZy5hcHBlbmQobW9kYWwpO1xuXG4gICAgY29udGVudC5hcHBlbmQoYmcpO1xuICB9XG5cbiAgY2hlY2tGb3JXaW5uZXIoKSB7XG4gICAgaWYgKHRoaXMucGxheWVyLnNjb3JlID09PSAxNSkge1xuICAgICAgYmxvY2tTaGlwQm9hcmQoJzEnLCAnMycpO1xuICAgICAgY3JlYXRlTW9kYWwoJ01pc3Npb24gRmFpbGVkLi4uIDxicj4gQUkgV29uLi4uJyk7XG4gICAgfVxuICB9XG5cbiAgZmlyZShwbGF5ZXIgPSBuZXcgUGxheWVyKCkpIHtcbiAgICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuICAgIHdoaWxlICh0aGlzLnBsYXllci52aXNpdGVkTWFwLmhhcyhgJHtpbmRleH1gKSkge1xuICAgICAgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuICAgIH1cblxuICAgIGxldCBiZXR0ZXJJbmRleCA9IG51bGw7XG4gICAgaWYgKHRoaXMubGFzdE9jY3VwaWVkICE9PSBudWxsKSB7IGJldHRlckluZGV4ID0gdGhpcy5hbmFseXplTGFzdE9jY3VwaWVkKHBsYXllcik7IH1cblxuICAgIGlmIChiZXR0ZXJJbmRleCA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5sYXN0T2NjdXBpZWQgPSBudWxsO1xuICAgICAgY29uc3Qgc2hpcEJvYXJkU3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI1NfJHtpbmRleH1gKTtcbiAgICAgIHRoaXMucGxheWVyLnZpc2l0ZWRNYXAuc2V0KGAke2luZGV4fWAsIHRydWUpO1xuICAgICAgaWYgKHBsYXllci5nYW1lQm9hcmQuZ2V0Q29vcmRpbmF0ZUZyb21JbmRleChpbmRleCkub2NjdXBpZWQpIHtcbiAgICAgICAgdGhpcy5sYXN0T2NjdXBpZWQgPSBwbGF5ZXIuZ2FtZUJvYXJkLmdldENvb3JkaW5hdGVGcm9tSW5kZXgoaW5kZXgpO1xuICAgICAgICBzaGlwQm9hcmRTcXVhcmUuc3R5bGUuYmFja2dyb3VuZCA9ICdyZWQnO1xuICAgICAgICB0aGlzLnBsYXllci5zY29yZSsrO1xuICAgICAgICB0aGlzLmNoZWNrRm9yV2lubmVyKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaGlwQm9hcmRTcXVhcmUuc3R5bGUuYmFja2dyb3VuZCA9ICd3aGl0ZSc7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNoaXBCb2FyZFNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNTXyR7YmV0dGVySW5kZXh9YCk7XG4gICAgICB0aGlzLnBsYXllci52aXNpdGVkTWFwLnNldChgJHtiZXR0ZXJJbmRleH1gLCB0cnVlKTtcbiAgICAgIGlmIChwbGF5ZXIuZ2FtZUJvYXJkLmdldENvb3JkaW5hdGVGcm9tSW5kZXgoYmV0dGVySW5kZXgpLm9jY3VwaWVkKSB7XG4gICAgICAgIHRoaXMubGFzdE9jY3VwaWVkID0gcGxheWVyLmdhbWVCb2FyZC5nZXRDb29yZGluYXRlRnJvbUluZGV4KGJldHRlckluZGV4KTtcbiAgICAgICAgc2hpcEJvYXJkU3F1YXJlLnN0eWxlLmJhY2tncm91bmQgPSAncmVkJztcbiAgICAgICAgdGhpcy5wbGF5ZXIuc2NvcmUrKztcbiAgICAgICAgdGhpcy5jaGVja0Zvcldpbm5lcigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFJO1xuIiwiY2xhc3MgQmF0dGxlU2hpcCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGxlbmd0aCkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5ob3Jpem9udGFsVmVydGljYWwgPSB0cnVlO1xuICB9XG5cbiAgY2hhbmdlT3JpZW50YXRpb24oKSB7XG4gICAgdGhpcy5ob3Jpem9udGFsVmVydGljYWwgPSAhdGhpcy5ob3Jpem9udGFsVmVydGljYWw7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCYXR0bGVTaGlwO1xuIiwiY2xhc3MgQ29vcmRpbmF0ZSB7XG4gIGNvbnN0cnVjdG9yKGNvb3JkaW5hdGUpIHtcbiAgICBpZiAodGhpcy5jaGVja1ZhbGlkKGNvb3JkaW5hdGUpKSB7IHRoaXMuY29vcmRpbmF0ZSA9IGNvb3JkaW5hdGU7IH0gZWxzZSB0aGlzLmNvb3JkaW5hdGUgPSBudWxsO1xuICAgIHRoaXMuaGl0ID0gZmFsc2U7XG4gICAgdGhpcy5vY2N1cGllZCA9IGZhbHNlO1xuICAgIHRoaXMubGVuZ3RoTnVtYmVyID0gMDtcbiAgICB0aGlzLnNoaXBOYW1lID0gJyc7XG4gICAgdGhpcy5zaGlwSG9yaXpvbnRhbFZlcnRpY2FsID0gdHJ1ZTtcbiAgICB0aGlzLnBsYXllciA9IG51bGw7XG4gIH1cblxuICBjaGVja1ZhbGlkKGNvb3JkaW5hdGUpIHtcbiAgICBpZiAoY29vcmRpbmF0ZVswXSA+PSAwXG4gICAgICAgICYmIGNvb3JkaW5hdGVbMF0gPD0gOVxuICAgICAgICAmJiBjb29yZGluYXRlWzFdID49IDBcbiAgICAgICAgJiYgY29vcmRpbmF0ZVsxXSA8PSA5XG4gICAgKSByZXR1cm4gdHJ1ZTtcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIFNldHRlcnNcbiAgc2V0UGxheWVyKHBsYXllcikge1xuICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xuICB9XG5cbiAgc2V0SGl0KGhpdCkge1xuICAgIHRoaXMuaGl0ID0gaGl0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29vcmRpbmF0ZTtcbiIsIiMhL3Vzci9iaW4vZW52IG5vZGVcbmNvbnN0IENvb3JkaW5hdGUgPSByZXF1aXJlKCcuL2Nvb3JkaW5hdGUnKTtcblxuY2xhc3MgR2FtZUJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5nYW1lQm9hcmQgPSB0aGlzLmNyZWF0ZUdhbWVCb2FyZCgpO1xuICB9XG5cbiAgLy8gSW5pdCBGdW5jdGlvbnNcbiAgY3JlYXRlR2FtZUJvYXJkKCkge1xuICAgIGNvbnN0IGFycmF5ID0gW107XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCAxMDsgeSsrKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDEwOyB4KyspIHtcbiAgICAgICAgY29uc3QgY29vcmRpbmF0ZSA9IG5ldyBDb29yZGluYXRlKFt4LCB5XSk7XG4gICAgICAgIGFycmF5LnB1c2goY29vcmRpbmF0ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcnJheTtcbiAgfVxuXG4gIGlzQ29vcmRpbmF0ZVZhbGlkKGNvb3JkaW5hdGUpIHtcbiAgICBpZiAoY29vcmRpbmF0ZVswXSA+PSAwXG4gICAgICAmJiBjb29yZGluYXRlWzBdIDw9IDlcbiAgICAgICYmIGNvb3JkaW5hdGVbMV0gPj0gMFxuICAgICAgJiYgY29vcmRpbmF0ZVsxXSA8PSA5XG4gICAgKSByZXR1cm4gdHJ1ZTtcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlzSW5kZXhWYWxpZChpbmRleCkge1xuICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgdGhpcy5nYW1lQm9hcmQubGVuZ3RoKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIGdldEdhbWVCb2FyZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nYW1lQm9hcmQ7XG4gIH1cblxuICBnZXRJbmRleE9mQ29vcmRpbmF0ZShjb29yZGluYXRlKSB7XG4gICAgaWYgKHRoaXMuaXNDb29yZGluYXRlVmFsaWQoY29vcmRpbmF0ZSkpIHtcbiAgICAgIGNvbnN0IGZpbmRDb29yZGluYXRlID0gKGVsZW1lbnQpID0+IGAke2VsZW1lbnQuY29vcmRpbmF0ZX1gID09PSBgJHtjb29yZGluYXRlfWA7XG4gICAgICByZXR1cm4gdGhpcy5nYW1lQm9hcmQuZmluZEluZGV4KGZpbmRDb29yZGluYXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXRDb29yZGluYXRlRnJvbUluZGV4KGluZGV4KSB7XG4gICAgaWYgKHRoaXMuaXNJbmRleFZhbGlkKGluZGV4KSkgeyByZXR1cm4gdGhpcy5nYW1lQm9hcmRbaW5kZXhdOyB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXRDb29yZGluYXRlRnJvbUNvb3JkaW5hdGUoY29vcmRpbmF0ZSkge1xuICAgIGlmICh0aGlzLmlzQ29vcmRpbmF0ZVZhbGlkKGNvb3JkaW5hdGUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5nYW1lQm9hcmRbXG4gICAgICAgIHRoaXMuZ2V0SW5kZXhPZkNvb3JkaW5hdGUoY29vcmRpbmF0ZSldO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIFNldHRlcnNcbiAgc2V0SGl0VHJ1ZShjb29yZGluYXRlKSB7XG4gICAgaWYgKHRoaXMuaXNDb29yZGluYXRlVmFsaWQoY29vcmRpbmF0ZSkpIHtcbiAgICAgIHRoaXMuZ2FtZUJvYXJkW3RoaXMuZ2V0SW5kZXhPZkNvb3JkaW5hdGUoY29vcmRpbmF0ZSldLnNldEhpdCh0cnVlKTtcbiAgICB9XG4gIH1cblxuICBzZXRIaXRGYWxzZShjb29yZGluYXRlKSB7XG4gICAgaWYgKHRoaXMuaXNDb29yZGluYXRlVmFsaWQoY29vcmRpbmF0ZSkpIHtcbiAgICAgIHRoaXMuZ2FtZUJvYXJkW3RoaXMuZ2V0SW5kZXhPZkNvb3JkaW5hdGUoY29vcmRpbmF0ZSldLnNldEhpdChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0SGl0KGNvb3JkaW5hdGUpIHtcbiAgICBpZiAodGhpcy5pc0Nvb3JkaW5hdGVWYWxpZChjb29yZGluYXRlKSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2FtZUJvYXJkW1xuICAgICAgICB0aGlzLmdldEluZGV4T2ZDb29yZGluYXRlKGNvb3JkaW5hdGUpXS5oaXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lQm9hcmQ7XG4iLCJjb25zdCBHYW1lQm9hcmQgPSByZXF1aXJlKCcuL2dhbWVCb2FyZCcpO1xuY29uc3QgQmF0dGxlU2hpcCA9IHJlcXVpcmUoJy4vYmF0dGxlc2hpcCcpO1xuXG5jbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmdhbWVCb2FyZCA9IG5ldyBHYW1lQm9hcmQoKTtcbiAgICB0aGlzLnNoaXBNYXAgPSB0aGlzLmNyZWF0ZVNoaXBNYXAoKTtcbiAgICB0aGlzLmFjdGl2ZVNoaXAgPSBudWxsO1xuICAgIHRoaXMuZGVzdHJveWVyQ291bnQgPSB0aGlzLnNoaXBNYXAuZ2V0KCdkZXN0cm95ZXInKS5sZW5ndGg7XG4gICAgdGhpcy5zdWJtYXJpbmVDb3VudCA9IHRoaXMuc2hpcE1hcC5nZXQoJ3N1Ym1hcmluZScpLmxlbmd0aDtcbiAgICB0aGlzLmNydWlzZXJDb3VudCA9IHRoaXMuc2hpcE1hcC5nZXQoJ2NydWlzZXInKS5sZW5ndGg7XG4gICAgdGhpcy5iYXR0bGVzaGlwQ291bnQgPSB0aGlzLnNoaXBNYXAuZ2V0KCdiYXR0bGVzaGlwJykubGVuZ3RoO1xuICAgIHRoaXMuY2FycmllckNvdW50ID0gdGhpcy5zaGlwTWFwLmdldCgnY2FycmllcicpLmxlbmd0aDtcbiAgICB0aGlzLm9jY3VwaWVkQ29vcmRpbmF0ZXMgPSBbXTtcbiAgICB0aGlzLm9jY3VwaWVkU2hpcE1hcCA9IG5ldyBNYXAoKTtcbiAgICB0aGlzLnNjb3JlID0gMDtcbiAgICB0aGlzLnZpc2l0ZWRNYXAgPSBuZXcgTWFwKCk7XG4gIH1cblxuICBjcmVhdGVTaGlwTWFwKCkge1xuICAgIGNvbnN0IG1hcCA9IG5ldyBNYXAoKTtcbiAgICBtYXAuc2V0KCdkZXN0cm95ZXInLCBBcnJheSgxKS5maWxsKG5ldyBCYXR0bGVTaGlwKCdkZXN0cm95ZXInLCAxKSkpO1xuICAgIG1hcC5zZXQoJ3N1Ym1hcmluZScsIEFycmF5KDEpLmZpbGwobmV3IEJhdHRsZVNoaXAoJ3N1Ym1hcmluZScsIDIpKSk7XG4gICAgbWFwLnNldCgnY3J1aXNlcicsIEFycmF5KDEpLmZpbGwobmV3IEJhdHRsZVNoaXAoJ2NydWlzZXInLCAzKSkpO1xuICAgIG1hcC5zZXQoJ2JhdHRsZXNoaXAnLCBBcnJheSgxKS5maWxsKG5ldyBCYXR0bGVTaGlwKCdiYXR0bGVzaGlwJywgNCkpKTtcbiAgICBtYXAuc2V0KCdjYXJyaWVyJywgQXJyYXkoMSkuZmlsbChuZXcgQmF0dGxlU2hpcCgnY2FycmllcicsIDUpKSk7XG4gICAgcmV0dXJuIG1hcDtcbiAgfVxuXG4gIHVwZGF0ZVNoaXBDb3VudHMoa2V5KSB7XG4gICAgaWYgKGtleSA9PT0gJ2Rlc3Ryb3llcicpIHtcbiAgICAgIHRoaXMuZGVzdHJveWVyQ291bnQgPSB0aGlzLnNoaXBNYXAuZ2V0KGtleSkubGVuZ3RoO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnc3VibWFyaW5lJykge1xuICAgICAgdGhpcy5zdWJtYXJpbmVDb3VudCA9IHRoaXMuc2hpcE1hcC5nZXQoa2V5KS5sZW5ndGg7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdjcnVpc2VyJykge1xuICAgICAgdGhpcy5jcnVpc2VyQ291bnQgPSB0aGlzLnNoaXBNYXAuZ2V0KGtleSkubGVuZ3RoO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnYmF0dGxlc2hpcCcpIHtcbiAgICAgIHRoaXMuYmF0dGxlc2hpcENvdW50ID0gdGhpcy5zaGlwTWFwLmdldChrZXkpLmxlbmd0aDtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2NhcnJpZXInKSB7XG4gICAgICB0aGlzLmNhcnJpZXJDb3VudCA9IHRoaXMuc2hpcE1hcC5nZXQoa2V5KS5sZW5ndGg7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tUb0RlbGV0ZVNoaXBNYXBPYmplY3Qoa2V5KSB7XG4gICAgaWYgKHRoaXMuc2hpcE1hcC5nZXQoa2V5KS5sZW5ndGggPT09IDApIHsgdGhpcy5zaGlwTWFwLmRlbGV0ZShrZXkpOyB9XG4gIH1cblxuICBzZWxlY3RTaGlwKGtleSkge1xuICAgIGlmICh0aGlzLnNoaXBNYXAuaGFzKGtleSkpIHtcbiAgICAgIGlmICh0aGlzLnNoaXBNYXAuZ2V0KGtleSkubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlU2hpcCA9IHRoaXMuc2hpcE1hcC5nZXQoa2V5KS5zaGlmdCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZVNoaXBDb3VudHMoa2V5KTtcbiAgICAgIH0gZWxzZSB7IHRoaXMuYWN0aXZlU2hpcCA9IG51bGw7IH1cbiAgICB9XG4gIH1cblxuICBkZXNlbGVjdFNoaXAoKSB7XG4gICAgY29uc3Qga2V5ID0gdGhpcy5hY3RpdmVTaGlwLm5hbWU7XG4gICAgdGhpcy5zaGlwTWFwLmdldCh0aGlzLmFjdGl2ZVNoaXAubmFtZSkudW5zaGlmdCh0aGlzLmFjdGl2ZVNoaXApO1xuICAgIHRoaXMuYWN0aXZlU2hpcCA9IG51bGw7XG4gICAgdGhpcy51cGRhdGVTaGlwQ291bnRzKGtleSk7XG4gIH1cblxuICBjaGFuZ2VPcmllbnRhdGlvbigpIHtcbiAgICB0aGlzLmFjdGl2ZVNoaXAuaG9yaXpvbnRhbFZlcnRpY2FsID0gIXRoaXMuYWN0aXZlU2hpcC5ob3Jpem9udGFsVmVydGljYWw7XG4gIH1cblxuICBpc0Nvb3JkaW5hdGVWYWxpZChjb29yZGluYXRlKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdhbWVCb2FyZC5nZXRJbmRleE9mQ29vcmRpbmF0ZShjb29yZGluYXRlKTtcblxuICAgIGlmICh0aGlzLmFjdGl2ZVNoaXAgIT09IG51bGxcbiAgICAgICYmIHRoaXMuZ2FtZUJvYXJkLmdldENvb3JkaW5hdGVGcm9tQ29vcmRpbmF0ZShjb29yZGluYXRlKS5vY2N1cGllZCA9PT0gZmFsc2VcbiAgICAgICYmIGNvb3JkaW5hdGVbMF0gPj0gMFxuICAgICAgJiYgY29vcmRpbmF0ZVswXSA8PSA5XG4gICAgICAmJiBjb29yZGluYXRlWzFdID49IDBcbiAgICAgICYmIGNvb3JkaW5hdGVbMV0gPD0gOSkge1xuICAgICAgaWYgKHRoaXMuYWN0aXZlU2hpcC5ob3Jpem9udGFsVmVydGljYWwpIHtcbiAgICAgICAgaWYgKChwYXJzZUludChpbmRleCwgMTApICUgMTAgPiA5ICYmIHRoaXMuYWN0aXZlU2hpcC5uYW1lID09PSAnZGVzdHJveWVyJylcbiAgICAgICAgICB8fCAocGFyc2VJbnQoaW5kZXgsIDEwKSAlIDEwID4gOCAmJiB0aGlzLmFjdGl2ZVNoaXAubmFtZSA9PT0gJ3N1Ym1hcmluZScpXG4gICAgICAgICAgfHwgKHBhcnNlSW50KGluZGV4LCAxMCkgJSAxMCA+IDcgJiYgdGhpcy5hY3RpdmVTaGlwLm5hbWUgPT09ICdjcnVpc2VyJylcbiAgICAgICAgICB8fCAocGFyc2VJbnQoaW5kZXgsIDEwKSAlIDEwID4gNiAmJiB0aGlzLmFjdGl2ZVNoaXAubmFtZSA9PT0gJ2JhdHRsZXNoaXAnKVxuICAgICAgICAgIHx8IChwYXJzZUludChpbmRleCwgMTApICUgMTAgPiA1ICYmIHRoaXMuYWN0aXZlU2hpcC5uYW1lID09PSAnY2FycmllcicpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLmFjdGl2ZVNoaXAuaG9yaXpvbnRhbFZlcnRpY2FsKSB7XG4gICAgICAgIGlmICgoY29vcmRpbmF0ZVsxXSA+IDkgJiYgdGhpcy5hY3RpdmVTaGlwLm5hbWUgPT09ICdkZXN0cm95ZXInKVxuICAgICAgICAgIHx8IChjb29yZGluYXRlWzFdID4gOCAmJiB0aGlzLmFjdGl2ZVNoaXAubmFtZSA9PT0gJ3N1Ym1hcmluZScpXG4gICAgICAgICAgfHwgKGNvb3JkaW5hdGVbMV0gPiA3ICYmIHRoaXMuYWN0aXZlU2hpcC5uYW1lID09PSAnY3J1aXNlcicpXG4gICAgICAgICAgfHwgKGNvb3JkaW5hdGVbMV0gPiA2ICYmIHRoaXMuYWN0aXZlU2hpcC5uYW1lID09PSAnYmF0dGxlc2hpcCcpXG4gICAgICAgICAgfHwgKGNvb3JkaW5hdGVbMV0gPiA1ICYmIHRoaXMuYWN0aXZlU2hpcC5uYW1lID09PSAnY2FycmllcicpXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYWN0aXZlU2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVTaGlwLmhvcml6b250YWxWZXJ0aWNhbCkge1xuICAgICAgICAgIGlmICh0aGlzLmdhbWVCb2FyZC5nZXRDb29yZGluYXRlRnJvbUluZGV4KGAke3BhcnNlSW50KGluZGV4LCAxMCkgKyBpfWApLm9jY3VwaWVkKSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLmFjdGl2ZVNoaXAuaG9yaXpvbnRhbFZlcnRpY2FsKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZ2FtZUJvYXJkLmdldENvb3JkaW5hdGVGcm9tSW5kZXgoYCR7cGFyc2VJbnQoaW5kZXgsIDEwKSArIChpICogMTApfWApLm9jY3VwaWVkKSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHJldHVybiBmYWxzZTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgdXBkYXRlT2NjdXBpZWRDb29yZGluYXRlcyhjb29yZGluYXRlQXJyYXkpIHtcbiAgICB0aGlzLm9jY3VwaWVkQ29vcmRpbmF0ZXMucHVzaChjb29yZGluYXRlQXJyYXkpO1xuICAgIHRoaXMub2NjdXBpZWRTaGlwTWFwLnNldChgJHt0aGlzLmFjdGl2ZVNoaXAubmFtZX1gLCBjb29yZGluYXRlQXJyYXkpO1xuICB9XG5cbiAgcGxhY2VTaGlwKGNvb3JkaW5hdGUpIHtcbiAgICBpZiAodGhpcy5pc0Nvb3JkaW5hdGVWYWxpZChjb29yZGluYXRlKSkge1xuICAgICAgY29uc3QgdGVtcEFycmF5ID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYWN0aXZlU2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBuZXdDb29yZGluYXRlID0gKHRoaXMuYWN0aXZlU2hpcC5ob3Jpem9udGFsVmVydGljYWwpXG4gICAgICAgICAgPyBbY29vcmRpbmF0ZVswXSArIGksIGNvb3JkaW5hdGVbMV1dIDogW2Nvb3JkaW5hdGVbMF0sIGNvb3JkaW5hdGVbMV0gKyBpXTtcblxuICAgICAgICB0aGlzLmdhbWVCb2FyZC5nZXRDb29yZGluYXRlRnJvbUNvb3JkaW5hdGUoXG4gICAgICAgICAgbmV3Q29vcmRpbmF0ZSxcbiAgICAgICAgKS5sZW5ndGhOdW1iZXIgPSBpO1xuXG4gICAgICAgIHRoaXMuZ2FtZUJvYXJkLmdldENvb3JkaW5hdGVGcm9tQ29vcmRpbmF0ZShcbiAgICAgICAgICBuZXdDb29yZGluYXRlLFxuICAgICAgICApLm9jY3VwaWVkID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmdhbWVCb2FyZC5nZXRDb29yZGluYXRlRnJvbUNvb3JkaW5hdGUoXG4gICAgICAgICAgbmV3Q29vcmRpbmF0ZSxcbiAgICAgICAgKS5zaGlwTmFtZSA9IHRoaXMuYWN0aXZlU2hpcC5uYW1lO1xuXG4gICAgICAgIHRoaXMuZ2FtZUJvYXJkLmdldENvb3JkaW5hdGVGcm9tQ29vcmRpbmF0ZShcbiAgICAgICAgICBuZXdDb29yZGluYXRlLFxuICAgICAgICApLnNoaXBIb3Jpem9udGFsVmVydGljYWwgPSB0aGlzLmFjdGl2ZVNoaXAuaG9yaXpvbnRhbFZlcnRpY2FsO1xuXG4gICAgICAgIHRlbXBBcnJheS5wdXNoKHRoaXMuZ2FtZUJvYXJkLmdldENvb3JkaW5hdGVGcm9tQ29vcmRpbmF0ZShcbiAgICAgICAgICBuZXdDb29yZGluYXRlLFxuICAgICAgICApKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudXBkYXRlT2NjdXBpZWRDb29yZGluYXRlcyh0ZW1wQXJyYXkpO1xuICAgICAgdGhpcy5jaGVja1RvRGVsZXRlU2hpcE1hcE9iamVjdCh0aGlzLmFjdGl2ZVNoaXAubmFtZSk7XG4gICAgICB0aGlzLmFjdGl2ZVNoaXAgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHJlY2VpdmVGaXJlKGNvb3JkaW5hdGUpIHtcbiAgICBjb25zdCB0ZW1wQ29vcmRpbmF0ZSA9IHRoaXMuZ2FtZUJvYXJkLmdldENvb3JkaW5hdGVGcm9tQ29vcmRpbmF0ZShjb29yZGluYXRlKTtcblxuICAgIGlmICh0ZW1wQ29vcmRpbmF0ZS5vY2N1cGllZCA9PT0gdHJ1ZSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm9jY3VwaWVkQ29vcmRpbmF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLm9jY3VwaWVkQ29vcmRpbmF0ZXNbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBpZiAodGVtcENvb3JkaW5hdGUuY29vcmRpbmF0ZSA9PT0gdGhpcy5vY2N1cGllZENvb3JkaW5hdGVzW2ldW2pdLmNvb3JkaW5hdGUpIHtcbiAgICAgICAgICAgIHRoaXMub2NjdXBpZWRDb29yZGluYXRlc1tpXVtqXS5oaXQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmdhbWVCb2FyZC5nZXRDb29yZGluYXRlRnJvbUNvb3JkaW5hdGUoY29vcmRpbmF0ZSkuaGl0ID0gdHJ1ZTtcbiAgfVxuXG4gIGNoZWNrUGxheWVyTG9zdCgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub2NjdXBpZWRDb29yZGluYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLm9jY3VwaWVkQ29vcmRpbmF0ZXNbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKHRoaXMub2NjdXBpZWRDb29yZGluYXRlc1tpXVtqXS5oaXQgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQbGF5ZXI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuLi9oZWFkL2hlYWQnO1xuaW1wb3J0ICcuLi9zdHlsZS9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuLi9ncmlkL2dyaWQnO1xuaW1wb3J0ICcuLi9uYXYvbmF2Q29udGVudCc7XG5pbXBvcnQgJy4uL3NoaXBCb2FyZC9zaGlwQm9hcmRDb250ZW50JztcbmltcG9ydCAnLi4vaHVkL2h1ZENvbnRlbnQnO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9