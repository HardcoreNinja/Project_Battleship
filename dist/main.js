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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'Lato';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n@font-face {\n    font-family: 'LatoBold';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n* {\n    padding: 0px;\n    margin: 0px;\n    font-family: 'Lato';\n    color: white;\n}\n\nh1{\n    font-family: 'LatoBold';\n}\n\n:root{\n    background: rgb(36, 41, 46);\n}\n\n.material-symbols-outlined {\n    font-family: 'Material Symbols Outlined';\n    font-weight: normal;\n    font-style: normal;\n    font-size: 50px;\n    /* Preferred icon size */\n    display: inline-block;\n    line-height: 1;\n    text-transform: none;\n    letter-spacing: normal;\n    word-wrap: normal;\n    white-space: nowrap;\n    direction: ltr;\n}\n\n#bgOverlay{\n    display: flex;\n    position: fixed; /* Stay in place */\n    background: rgba(0, 0, 0, .7);\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    grid-row-start: 1;\n    grid-row-end: 3;\n    grid-column-start: 1;\n    grid-column-end: 3;\n}\n\n#modal{\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center center;\n    place-items: center center;\n    background-color: rgb(36, 41, 46);\n    margin: 15% auto; /* 15% from the top and centered */\n    padding: 20px;\n    border: 1px solid #888;\n    border-radius: 10px;\n    width: 80%; /* Could be more or less, depending on screen size */\n}\n\n#content {\n    display: grid;\n    grid-template-columns: 3fr 1fr;\n    grid-template-rows: 1fr 7fr;\n    background: black;\n    grid-template-areas:\n        'nav nav'\n        'shipBoard hud'\n    ;\n    background: rgb(36, 41, 46);\n    min-width: 100vw;\n    min-height: 100vh;\n}\n\n#nav {\n    grid-area: nav;\n    background: rgb(29\t31\t34);\n    display: flex;\n    flex-flow: row wrap;\n    place-content: center center;\n    place-items: center center;\n    gap: 20px;\n}\n\n#shipBoard {\n    grid-area: shipBoard;\n    background: rgb(37\t41\t46);\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-row: 1fr 1fr;\n    grid-template-areas:\n        'missileGridContainer'\n        'shipGridContainer'\n    ;\n    min-height: 100vh;\n}\n\n#shipBoardOverlay {\n    grid-row-start: 1;\n    grid-row-end: 3;\n    grid-column-start: 1;\n    grid-column-end: 1;\n    display: block;\n    width: 100%;\n    height: 100%;\n    background: rgba(81, 131, 248, .5);\n    z-index: 1;\n}\n\n.boardContainer {\n    display: flex;\n    background: rgb(31, 33, 37);;\n    place-content: flex-start flex-start;\n    place-items: flex-start flex-start;\n    flex-flow: row wrap;\n    min-width: 340px;\n    min-height: 340px;\n    max-width: 340px;\n    max-height: 340px;\n}\n\n.boardSquare {\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center center;\n    place-items: center center;\n    width: 32px;\n    height: 32px;\n    background: rgb(52, 122, 182);\n    border: 1px solid rgb(196, 41, 106);\n    transition: 0.75s all;\n    border-radius: 5px;\n}\n\n.boardSquare:hover {\n    transform: scale(1.1);\n    background: rgba(234, 255, 0, .75);\n\n}\n\n#missileGridContainer {\n    grid-area: missileGridContainer;\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center center;\n    place-items: center center;\n    padding: 5px;\n    z-index: 0;\n}\n\n#shipGridContainer {\n    grid-area: shipGridContainer;\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center center;\n    place-items: center center;\n    padding: 5px;\n    z-index: 0;\n}\n\n.front {\n    width: 28px;\n    height: 28px;\n    border-top-left-radius: 50%;\n    border-bottom-left-radius: 50%;\n    border-top-right-radius: 30%;\n    border-bottom-right-radius: 30%;\n    background-color: rgb(196, 41, 106);\n}\n\n.mid {\n    width: 28px;\n    height: 28px;\n    border-top-left-radius: 22%;\n    border-bottom-left-radius: 22%;\n    border-top-right-radius: 22%;\n    border-bottom-right-radius: 22%;\n    background-color: rgb(196, 41, 106);\n}\n\n#hud {\n    grid-area: hud;\n    background: rgb(36, 41, 46);\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 2fr 2fr;\n    grid-template-areas:\n        'orientationButtonContainer'\n        'shipsContainer'\n        'selectedShipContainer'\n    ;\n    gap: 20px;\n    min-height: 100vh;\n}\n\n#hudOverlay{\n    grid-row-start: 1;\n    grid-row-end: 4;\n    grid-column-start: 1;\n    grid-column-end: 1;\n    display: none;\n    width: 100%;\n    height: 100%;\n    background: rgba(81, 131, 248, .5);\n    z-index: 1;\n}\n\n#shipsOverlay {\n    grid-row-start: 2;\n    grid-row-end: 3;\n    grid-column-start: 1;\n    grid-column-end: 1;\n    display: none;\n    width: 100%;\n    height: 100%;\n    background: rgba(81, 131, 248, .5);\n    border-radius: 5px;\n    z-index: 1;\n}\n\n#shipsContainer {\n    grid-area: shipsContainer;\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center center;\n    place-items: center center;\n}\n\n#ships {\n    display: flex;\n    background: rgb(18, 19, 22);\n    place-content: center center;\n    place-items: center center;\n    flex-flow: column nowrap;\n    min-height: 25%;\n    border-radius: 5px;\n}\n\n#destroyer,\n#selected_destroyer {\n    display: flex;\n    place-content: center flex-start;\n    place-items: center flex-start;\n    width: 32px;\n    height: 32px;\n    background: rgb(18, 19, 22);\n    border: 1px solid transparent;\n}\n\n.destroyerIcon {\n    width: 30px;\n    height: 30px;\n    border-top-left-radius: 50%;\n    border-bottom-left-radius: 50%;\n    border-top-right-radius: 30%;\n    border-bottom-right-radius: 30%;\n    background-color: rgb(196, 41, 106);\n}\n\n#submarine,\n#selected_submarine {\n    display: flex;\n    place-content: center center;\n    place-items: center center;\n    flex-flow: row wrap;\n    width: 64px;\n    height: 32px;\n    background: rgb(18, 19, 22);\n    border: 1px solid transparent;\n}\n\n.submarineIcon {\n    width: 60px;\n    height: 30px;\n    border-top-left-radius: 50%;\n    border-bottom-left-radius: 50%;\n    border-top-right-radius: 25%;\n    border-bottom-right-radius: 25%;\n    background-color: rgb(196, 41, 106);\n}\n\n#cruiser,\n#selected_cruiser {\n    display: flex;\n    place-content: center center;\n    place-items: center center;\n    flex-flow: row wrap;\n    width: 96px;\n    height: 32px;\n    background: rgb(18, 19, 22);\n    border: 1px solid transparent;\n}\n\n.cruiserIcon {\n    width: 94px;\n    height: 30px;\n    border-top-left-radius: 50%;\n    border-bottom-left-radius: 50%;\n    border-top-right-radius: 25%;\n    border-bottom-right-radius: 25%;\n    background-color: rgb(196, 41, 106);\n}\n\n#battleship,\n#selected_battleship {\n    display: flex;\n    place-content: center center;\n    place-items: center center;\n    flex-flow: row wrap;\n    width: 128px;\n    height: 32px;\n    background: rgb(18,\t19,\t22);\n    border: 1px solid transparent;\n}\n\n.battleshipIcon {\n    width: 126px;\n    height: 30px;\n    border-top-left-radius: 50%;\n    border-bottom-left-radius: 50%;\n    border-top-right-radius: 25%;\n    border-bottom-right-radius: 25%;\n    background-color: rgb(196, 41, 106);\n}\n\n#carrier,\n#selected_carrier {\n    display: flex;\n    place-content: center center;\n    place-items: center center;\n    flex-flow: row wrap;\n    width: 160px;\n    height: 32px;\n    background: rgb(18,\t19,\t22);\n    border: 1px solid transparent;\n}\n\n.carrierIcon {\n    width: 158px;\n    height: 30px;\n    border-top-left-radius: 50%;\n    border-bottom-left-radius: 50%;\n    border-top-right-radius: 25%;\n    border-bottom-right-radius: 25%;\n    background-color: rgb(196, 41, 106);\n}\n\n#orientationButtonContainer {\n    grid-area: orientationButtonContainer;\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center center;\n    place-items: center center;\n}\n\n#orientationButton {\n    display: flex;\n    width: 160px;\n    height: 32px;\n}\n\nbutton {\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center center;\n    place-items: center center;\n    background: rgb(181, 17, 87);\n    outline-style: none;\n    border: 0px;\n    border-radius: 5px;\n    transition: .75s;\n}\n\nbutton:hover{\n    background: rgb(75,\t162,\t198);\n    box-shadow: 2px 2px 7px 4px rgb(0, 145, 200, 0.5);\n    outline-style: none;\n    border: 0px;\n    border-radius: 5px;\n    color: black;\n}\n\n#selectedShipContainer {\n    grid-area: selectedShipContainer;\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center center;\n    place-items: center center;\n}\n\n#selected_ShipContainer {\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center center;\n    place-items: center center;\n    gap: 70px;\n}\n\n#selectedShip {\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center flex-start;\n    place-items: center flex-start;\n    background: rgb(18, 19, 22);\n    border-radius: 5px;\n    width: 200px;\n    height: 200px;\n}", "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'Lato';\n    src: url('../resources/fonts/Lato/Lato-Light.ttf');\n}\n@font-face {\n    font-family: 'LatoBold';\n    src: url('../resources/fonts/Lato/Lato-Bold.ttf');\n}\n\n* {\n    padding: 0px;\n    margin: 0px;\n    font-family: 'Lato';\n    color: white;\n}\n\nh1{\n    font-family: 'LatoBold';\n}\n\n:root{\n    background: rgb(36, 41, 46);\n}\n\n.material-symbols-outlined {\n    font-family: 'Material Symbols Outlined';\n    font-weight: normal;\n    font-style: normal;\n    font-size: 50px;\n    /* Preferred icon size */\n    display: inline-block;\n    line-height: 1;\n    text-transform: none;\n    letter-spacing: normal;\n    word-wrap: normal;\n    white-space: nowrap;\n    direction: ltr;\n}\n\n#bgOverlay{\n    display: flex;\n    position: fixed; /* Stay in place */\n    background: rgba(0, 0, 0, .7);\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    grid-row-start: 1;\n    grid-row-end: 3;\n    grid-column-start: 1;\n    grid-column-end: 3;\n}\n\n#modal{\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center center;\n    place-items: center center;\n    background-color: rgb(36, 41, 46);\n    margin: 15% auto; /* 15% from the top and centered */\n    padding: 20px;\n    border: 1px solid #888;\n    border-radius: 10px;\n    width: 80%; /* Could be more or less, depending on screen size */\n}\n\n#content {\n    display: grid;\n    grid-template-columns: 3fr 1fr;\n    grid-template-rows: 1fr 7fr;\n    background: black;\n    grid-template-areas:\n        'nav nav'\n        'shipBoard hud'\n    ;\n    background: rgb(36, 41, 46);\n    min-width: 100vw;\n    min-height: 100vh;\n}\n\n#nav {\n    grid-area: nav;\n    background: rgb(29\t31\t34);\n    display: flex;\n    flex-flow: row wrap;\n    place-content: center center;\n    place-items: center center;\n    gap: 20px;\n}\n\n#shipBoard {\n    grid-area: shipBoard;\n    background: rgb(37\t41\t46);\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-row: 1fr 1fr;\n    grid-template-areas:\n        'missileGridContainer'\n        'shipGridContainer'\n    ;\n    min-height: 100vh;\n}\n\n#shipBoardOverlay {\n    grid-row-start: 1;\n    grid-row-end: 3;\n    grid-column-start: 1;\n    grid-column-end: 1;\n    display: block;\n    width: 100%;\n    height: 100%;\n    background: rgba(81, 131, 248, .5);\n    z-index: 1;\n}\n\n.boardContainer {\n    display: flex;\n    background: rgb(31, 33, 37);;\n    place-content: flex-start flex-start;\n    place-items: flex-start flex-start;\n    flex-flow: row wrap;\n    min-width: 340px;\n    min-height: 340px;\n    max-width: 340px;\n    max-height: 340px;\n}\n\n.boardSquare {\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center center;\n    place-items: center center;\n    width: 32px;\n    height: 32px;\n    background: rgb(52, 122, 182);\n    border: 1px solid rgb(196, 41, 106);\n    transition: 0.75s all;\n    border-radius: 5px;\n}\n\n.boardSquare:hover {\n    transform: scale(1.1);\n    background: rgba(234, 255, 0, .75);\n\n}\n\n#missileGridContainer {\n    grid-area: missileGridContainer;\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center center;\n    place-items: center center;\n    padding: 5px;\n    z-index: 0;\n}\n\n#shipGridContainer {\n    grid-area: shipGridContainer;\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center center;\n    place-items: center center;\n    padding: 5px;\n    z-index: 0;\n}\n\n.front {\n    width: 28px;\n    height: 28px;\n    border-top-left-radius: 50%;\n    border-bottom-left-radius: 50%;\n    border-top-right-radius: 30%;\n    border-bottom-right-radius: 30%;\n    background-color: rgb(196, 41, 106);\n}\n\n.mid {\n    width: 28px;\n    height: 28px;\n    border-top-left-radius: 22%;\n    border-bottom-left-radius: 22%;\n    border-top-right-radius: 22%;\n    border-bottom-right-radius: 22%;\n    background-color: rgb(196, 41, 106);\n}\n\n#hud {\n    grid-area: hud;\n    background: rgb(36, 41, 46);\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 2fr 2fr;\n    grid-template-areas:\n        'orientationButtonContainer'\n        'shipsContainer'\n        'selectedShipContainer'\n    ;\n    gap: 20px;\n    min-height: 100vh;\n}\n\n#hudOverlay{\n    grid-row-start: 1;\n    grid-row-end: 4;\n    grid-column-start: 1;\n    grid-column-end: 1;\n    display: none;\n    width: 100%;\n    height: 100%;\n    background: rgba(81, 131, 248, .5);\n    z-index: 1;\n}\n\n#shipsOverlay {\n    grid-row-start: 2;\n    grid-row-end: 3;\n    grid-column-start: 1;\n    grid-column-end: 1;\n    display: none;\n    width: 100%;\n    height: 100%;\n    background: rgba(81, 131, 248, .5);\n    border-radius: 5px;\n    z-index: 1;\n}\n\n#shipsContainer {\n    grid-area: shipsContainer;\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center center;\n    place-items: center center;\n}\n\n#ships {\n    display: flex;\n    background: rgb(18, 19, 22);\n    place-content: center center;\n    place-items: center center;\n    flex-flow: column nowrap;\n    min-height: 25%;\n    border-radius: 5px;\n}\n\n#destroyer,\n#selected_destroyer {\n    display: flex;\n    place-content: center flex-start;\n    place-items: center flex-start;\n    width: 32px;\n    height: 32px;\n    background: rgb(18, 19, 22);\n    border: 1px solid transparent;\n}\n\n.destroyerIcon {\n    width: 30px;\n    height: 30px;\n    border-top-left-radius: 50%;\n    border-bottom-left-radius: 50%;\n    border-top-right-radius: 30%;\n    border-bottom-right-radius: 30%;\n    background-color: rgb(196, 41, 106);\n}\n\n#submarine,\n#selected_submarine {\n    display: flex;\n    place-content: center center;\n    place-items: center center;\n    flex-flow: row wrap;\n    width: 64px;\n    height: 32px;\n    background: rgb(18, 19, 22);\n    border: 1px solid transparent;\n}\n\n.submarineIcon {\n    width: 60px;\n    height: 30px;\n    border-top-left-radius: 50%;\n    border-bottom-left-radius: 50%;\n    border-top-right-radius: 25%;\n    border-bottom-right-radius: 25%;\n    background-color: rgb(196, 41, 106);\n}\n\n#cruiser,\n#selected_cruiser {\n    display: flex;\n    place-content: center center;\n    place-items: center center;\n    flex-flow: row wrap;\n    width: 96px;\n    height: 32px;\n    background: rgb(18, 19, 22);\n    border: 1px solid transparent;\n}\n\n.cruiserIcon {\n    width: 94px;\n    height: 30px;\n    border-top-left-radius: 50%;\n    border-bottom-left-radius: 50%;\n    border-top-right-radius: 25%;\n    border-bottom-right-radius: 25%;\n    background-color: rgb(196, 41, 106);\n}\n\n#battleship,\n#selected_battleship {\n    display: flex;\n    place-content: center center;\n    place-items: center center;\n    flex-flow: row wrap;\n    width: 128px;\n    height: 32px;\n    background: rgb(18,\t19,\t22);\n    border: 1px solid transparent;\n}\n\n.battleshipIcon {\n    width: 126px;\n    height: 30px;\n    border-top-left-radius: 50%;\n    border-bottom-left-radius: 50%;\n    border-top-right-radius: 25%;\n    border-bottom-right-radius: 25%;\n    background-color: rgb(196, 41, 106);\n}\n\n#carrier,\n#selected_carrier {\n    display: flex;\n    place-content: center center;\n    place-items: center center;\n    flex-flow: row wrap;\n    width: 160px;\n    height: 32px;\n    background: rgb(18,\t19,\t22);\n    border: 1px solid transparent;\n}\n\n.carrierIcon {\n    width: 158px;\n    height: 30px;\n    border-top-left-radius: 50%;\n    border-bottom-left-radius: 50%;\n    border-top-right-radius: 25%;\n    border-bottom-right-radius: 25%;\n    background-color: rgb(196, 41, 106);\n}\n\n#orientationButtonContainer {\n    grid-area: orientationButtonContainer;\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center center;\n    place-items: center center;\n}\n\n#orientationButton {\n    display: flex;\n    width: 160px;\n    height: 32px;\n}\n\nbutton {\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center center;\n    place-items: center center;\n    background: rgb(181, 17, 87);\n    outline-style: none;\n    border: 0px;\n    border-radius: 5px;\n    transition: .75s;\n}\n\nbutton:hover{\n    background: rgb(75,\t162,\t198);\n    box-shadow: 2px 2px 7px 4px rgb(0, 145, 200, 0.5);\n    outline-style: none;\n    border: 0px;\n    border-radius: 5px;\n    color: black;\n}\n\n#selectedShipContainer {\n    grid-area: selectedShipContainer;\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center center;\n    place-items: center center;\n}\n\n#selected_ShipContainer {\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center center;\n    place-items: center center;\n    gap: 70px;\n}\n\n#selectedShip {\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center flex-start;\n    place-items: center flex-start;\n    background: rgb(18, 19, 22);\n    border-radius: 5px;\n    width: 200px;\n    height: 200px;\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _resources_ico_favicon_ico__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resources/ico/favicon.ico */ "./src/resources/ico/favicon.ico");


function createFavicon() {
  const head = document.querySelector('head');
  const link = document.createElement('link');
  link.rel = 'shortcut icon';
  link.href = _resources_ico_favicon_ico__WEBPACK_IMPORTED_MODULE_0__;
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

/***/ }),

/***/ "./src/resources/ico/favicon.ico":
/*!***************************************!*\
  !*** ./src/resources/ico/favicon.ico ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e7c88170e1b243421b70.ico";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsc0JBQXNCLGFBQWEscUJBQXFCLFdBQVcsVUFBVSxvQkFBb0IsdUJBQXVCLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSx5QkFBeUIsV0FBVyxZQUFZLGFBQWEsdUJBQXVCLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFFBQVEsS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFFBQVEsS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksY0FBYyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFNBQVMsS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLHNDQUFzQywwQkFBMEIseURBQXlELEdBQUcsY0FBYyw4QkFBOEIsd0RBQXdELEdBQUcsT0FBTyxtQkFB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V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ007QUFDTjtBQUNLO0FBQ1k7QUFDWiIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3RfYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdF9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Byb2plY3RfYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Byb2plY3RfYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS9zdHlsZS5jc3M/YzlmMCIsIndlYnBhY2s6Ly9wcm9qZWN0X2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Byb2plY3RfYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Byb2plY3RfYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Byb2plY3RfYmF0dGxlc2hpcC8uL3NyYy9nYW1lL2dhbWVMb2dpYy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X2JhdHRsZXNoaXAvLi9zcmMvZ3JpZC9ncmlkLmpzIiwid2VicGFjazovL3Byb2plY3RfYmF0dGxlc2hpcC8uL3NyYy9oZWFkL2hlYWQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF9iYXR0bGVzaGlwLy4vc3JjL2h1ZC9odWRDb250ZW50LmpzIiwid2VicGFjazovL3Byb2plY3RfYmF0dGxlc2hpcC8uL3NyYy9odWQvaHVkTG9naWMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF9iYXR0bGVzaGlwLy4vc3JjL25hdi9uYXZDb250ZW50LmpzIiwid2VicGFjazovL3Byb2plY3RfYmF0dGxlc2hpcC8uL3NyYy9yZXVzYWJsZXMvZWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF9iYXR0bGVzaGlwLy4vc3JjL3JldXNhYmxlcy9ncmlkSXRlbXMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF9iYXR0bGVzaGlwLy4vc3JjL3NoaXBCb2FyZC9zaGlwQm9hcmRDb250ZW50LmpzIiwid2VicGFjazovL3Byb2plY3RfYmF0dGxlc2hpcC8uL3NyYy9zaGlwQm9hcmQvc2hpcEJvYXJkTG9naWMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF9iYXR0bGVzaGlwLy4vc3JjL3Rlc3QvYWkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF9iYXR0bGVzaGlwLy4vc3JjL3Rlc3QvYmF0dGxlc2hpcC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X2JhdHRsZXNoaXAvLi9zcmMvdGVzdC9jb29yZGluYXRlLmpzIiwid2VicGFjazovL3Byb2plY3RfYmF0dGxlc2hpcC8uL3NyYy90ZXN0L2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X2JhdHRsZXNoaXAvLi9zcmMvdGVzdC9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3RfYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wcm9qZWN0X2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3RfYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Byb2plY3RfYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3RfYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3RfYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wcm9qZWN0X2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcHJvamVjdF9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wcm9qZWN0X2JhdHRsZXNoaXAvLi9zcmMvaW5kZXgvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL3Jlc291cmNlcy9mb250cy9MYXRvL0xhdG8tTGlnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vcmVzb3VyY2VzL2ZvbnRzL0xhdG8vTGF0by1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvQm9sZCc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuXFxuKiB7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuaDF7XFxuICAgIGZvbnQtZmFtaWx5OiAnTGF0b0JvbGQnO1xcbn1cXG5cXG46cm9vdHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDM2LCA0MSwgNDYpO1xcbn1cXG5cXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgU3ltYm9scyBPdXRsaW5lZCc7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbiAgICAvKiBQcmVmZXJyZWQgaWNvbiBzaXplICovXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcbiAgICB3b3JkLXdyYXA6IG5vcm1hbDtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgZGlyZWN0aW9uOiBsdHI7XFxufVxcblxcbiNiZ092ZXJsYXl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC43KTtcXG4gICAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICAgIGdyaWQtcm93LWVuZDogMztcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcXG59XFxuXFxuI21vZGFse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyIGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM2LCA0MSwgNDYpO1xcbiAgICBtYXJnaW46IDE1JSBhdXRvOyAvKiAxNSUgZnJvbSB0aGUgdG9wIGFuZCBjZW50ZXJlZCAqL1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB3aWR0aDogODAlOyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgN2ZyO1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgICduYXYgbmF2J1xcbiAgICAgICAgJ3NoaXBCb2FyZCBodWQnXFxuICAgIDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDM2LCA0MSwgNDYpO1xcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI25hdiB7XFxuICAgIGdyaWQtYXJlYTogbmF2O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjlcXHQzMVxcdDM0KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlciBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuI3NoaXBCb2FyZCB7XFxuICAgIGdyaWQtYXJlYTogc2hpcEJvYXJkO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMzdcXHQ0MVxcdDQ2KTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtcm93OiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgJ21pc3NpbGVHcmlkQ29udGFpbmVyJ1xcbiAgICAgICAgJ3NoaXBHcmlkQ29udGFpbmVyJ1xcbiAgICA7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jc2hpcEJvYXJkT3ZlcmxheSB7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgICBncmlkLXJvdy1lbmQ6IDM7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDE7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDgxLCAxMzEsIDI0OCwgLjUpO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uYm9hcmRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMzEsIDMzLCAzNyk7O1xcbiAgICBwbGFjZS1jb250ZW50OiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICAgIG1pbi13aWR0aDogMzQwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDM0MHB4O1xcbiAgICBtYXgtd2lkdGg6IDM0MHB4O1xcbiAgICBtYXgtaGVpZ2h0OiAzNDBweDtcXG59XFxuXFxuLmJvYXJkU3F1YXJlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlciBjZW50ZXI7XFxuICAgIHdpZHRoOiAzMnB4O1xcbiAgICBoZWlnaHQ6IDMycHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYig1MiwgMTIyLCAxODIpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTk2LCA0MSwgMTA2KTtcXG4gICAgdHJhbnNpdGlvbjogMC43NXMgYWxsO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5ib2FyZFNxdWFyZTpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMzQsIDI1NSwgMCwgLjc1KTtcXG5cXG59XFxuXFxuI21pc3NpbGVHcmlkQ29udGFpbmVyIHtcXG4gICAgZ3JpZC1hcmVhOiBtaXNzaWxlR3JpZENvbnRhaW5lcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlciBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgei1pbmRleDogMDtcXG59XFxuXFxuI3NoaXBHcmlkQ29udGFpbmVyIHtcXG4gICAgZ3JpZC1hcmVhOiBzaGlwR3JpZENvbnRhaW5lcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlciBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgei1pbmRleDogMDtcXG59XFxuXFxuLmZyb250IHtcXG4gICAgd2lkdGg6IDI4cHg7XFxuICAgIGhlaWdodDogMjhweDtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTAlO1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMCU7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTYsIDQxLCAxMDYpO1xcbn1cXG5cXG4ubWlkIHtcXG4gICAgd2lkdGg6IDI4cHg7XFxuICAgIGhlaWdodDogMjhweDtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjIlO1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMiU7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMiU7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMiU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTYsIDQxLCAxMDYpO1xcbn1cXG5cXG4jaHVkIHtcXG4gICAgZ3JpZC1hcmVhOiBodWQ7XFxuICAgIGJhY2tncm91bmQ6IHJnYigzNiwgNDEsIDQ2KTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAyZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICAnb3JpZW50YXRpb25CdXR0b25Db250YWluZXInXFxuICAgICAgICAnc2hpcHNDb250YWluZXInXFxuICAgICAgICAnc2VsZWN0ZWRTaGlwQ29udGFpbmVyJ1xcbiAgICA7XFxuICAgIGdhcDogMjBweDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbiNodWRPdmVybGF5e1xcbiAgICBncmlkLXJvdy1zdGFydDogMTtcXG4gICAgZ3JpZC1yb3ctZW5kOiA0O1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAxO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDgxLCAxMzEsIDI0OCwgLjUpO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4jc2hpcHNPdmVybGF5IHtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICAgIGdyaWQtcm93LWVuZDogMztcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSg4MSwgMTMxLCAyNDgsIC41KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4jc2hpcHNDb250YWluZXIge1xcbiAgICBncmlkLWFyZWE6IHNoaXBzQ29udGFpbmVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyIGNlbnRlcjtcXG59XFxuXFxuI3NoaXBzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDE4LCAxOSwgMjIpO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyIGNlbnRlcjtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBtaW4taGVpZ2h0OiAyNSU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuI2Rlc3Ryb3llcixcXG4jc2VsZWN0ZWRfZGVzdHJveWVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGZsZXgtc3RhcnQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXIgZmxleC1zdGFydDtcXG4gICAgd2lkdGg6IDMycHg7XFxuICAgIGhlaWdodDogMzJweDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDE4LCAxOSwgMjIpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmRlc3Ryb3llckljb24ge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwJTtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDMwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NiwgNDEsIDEwNik7XFxufVxcblxcbiNzdWJtYXJpbmUsXFxuI3NlbGVjdGVkX3N1Ym1hcmluZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXIgY2VudGVyO1xcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAgICB3aWR0aDogNjRweDtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTgsIDE5LCAyMik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uc3VibWFyaW5lSWNvbiB7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTAlO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjUlO1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk2LCA0MSwgMTA2KTtcXG59XFxuXFxuI2NydWlzZXIsXFxuI3NlbGVjdGVkX2NydWlzZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyIGNlbnRlcjtcXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gICAgd2lkdGg6IDk2cHg7XFxuICAgIGhlaWdodDogMzJweDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDE4LCAxOSwgMjIpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmNydWlzZXJJY29uIHtcXG4gICAgd2lkdGg6IDk0cHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTAlO1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNSU7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyNSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTYsIDQxLCAxMDYpO1xcbn1cXG5cXG4jYmF0dGxlc2hpcCxcXG4jc2VsZWN0ZWRfYmF0dGxlc2hpcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXIgY2VudGVyO1xcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAgICB3aWR0aDogMTI4cHg7XFxuICAgIGhlaWdodDogMzJweDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDE4LFxcdDE5LFxcdDIyKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5iYXR0bGVzaGlwSWNvbiB7XFxuICAgIHdpZHRoOiAxMjZweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1JTtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDI1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NiwgNDEsIDEwNik7XFxufVxcblxcbiNjYXJyaWVyLFxcbiNzZWxlY3RlZF9jYXJyaWVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlciBjZW50ZXI7XFxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICAgIHdpZHRoOiAxNjBweDtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTgsXFx0MTksXFx0MjIpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmNhcnJpZXJJY29uIHtcXG4gICAgd2lkdGg6IDE1OHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTAlO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjUlO1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk2LCA0MSwgMTA2KTtcXG59XFxuXFxuI29yaWVudGF0aW9uQnV0dG9uQ29udGFpbmVyIHtcXG4gICAgZ3JpZC1hcmVhOiBvcmllbnRhdGlvbkJ1dHRvbkNvbnRhaW5lcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlciBjZW50ZXI7XFxufVxcblxcbiNvcmllbnRhdGlvbkJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxNjBweDtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyIGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDogcmdiKDE4MSwgMTcsIDg3KTtcXG4gICAgb3V0bGluZS1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgdHJhbnNpdGlvbjogLjc1cztcXG59XFxuXFxuYnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNzUsXFx0MTYyLFxcdDE5OCk7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggN3B4IDRweCByZ2IoMCwgMTQ1LCAyMDAsIDAuNSk7XFxuICAgIG91dGxpbmUtc3R5bGU6IG5vbmU7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuI3NlbGVjdGVkU2hpcENvbnRhaW5lciB7XFxuICAgIGdyaWQtYXJlYTogc2VsZWN0ZWRTaGlwQ29udGFpbmVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyIGNlbnRlcjtcXG59XFxuXFxuI3NlbGVjdGVkX1NoaXBDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyIGNlbnRlcjtcXG4gICAgZ2FwOiA3MHB4O1xcbn1cXG5cXG4jc2VsZWN0ZWRTaGlwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGZsZXgtc3RhcnQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXIgZmxleC1zdGFydDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDE4LCAxOSwgMjIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQiw0Q0FBa0Q7QUFDdEQ7QUFDQTtJQUNJLHVCQUF1QjtJQUN2Qiw0Q0FBaUQ7QUFDckQ7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hD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QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcXG4gICAgc3JjOiB1cmwoJy4uL3Jlc291cmNlcy9mb250cy9MYXRvL0xhdG8tTGlnaHQudHRmJyk7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0xhdG9Cb2xkJztcXG4gICAgc3JjOiB1cmwoJy4uL3Jlc291cmNlcy9mb250cy9MYXRvL0xhdG8tQm9sZC50dGYnKTtcXG59XFxuXFxuKiB7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuaDF7XFxuICAgIGZvbnQtZmFtaWx5OiAnTGF0b0JvbGQnO1xcbn1cXG5cXG46cm9vdHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDM2LCA0MSwgNDYpO1xcbn1cXG5cXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgU3ltYm9scyBPdXRsaW5lZCc7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbiAgICAvKiBQcmVmZXJyZWQgaWNvbiBzaXplICovXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcbiAgICB3b3JkLXdyYXA6IG5vcm1hbDtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgZGlyZWN0aW9uOiBsdHI7XFxufVxcblxcbiNiZ092ZXJsYXl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC43KTtcXG4gICAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICAgIGdyaWQtcm93LWVuZDogMztcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcXG59XFxuXFxuI21vZGFse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyIGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM2LCA0MSwgNDYpO1xcbiAgICBtYXJnaW46IDE1JSBhdXRvOyAvKiAxNSUgZnJvbSB0aGUgdG9wIGFuZCBjZW50ZXJlZCAqL1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB3aWR0aDogODAlOyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgN2ZyO1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgICduYXYgbmF2J1xcbiAgICAgICAgJ3NoaXBCb2FyZCBodWQnXFxuICAgIDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDM2LCA0MSwgNDYpO1xcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI25hdiB7XFxuICAgIGdyaWQtYXJlYTogbmF2O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjlcXHQzMVxcdDM0KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlciBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuI3NoaXBCb2FyZCB7XFxuICAgIGdyaWQtYXJlYTogc2hpcEJvYXJkO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMzdcXHQ0MVxcdDQ2KTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtcm93OiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgJ21pc3NpbGVHcmlkQ29udGFpbmVyJ1xcbiAgICAgICAgJ3NoaXBHcmlkQ29udGFpbmVyJ1xcbiAgICA7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jc2hpcEJvYXJkT3ZlcmxheSB7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgICBncmlkLXJvdy1lbmQ6IDM7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDE7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDgxLCAxMzEsIDI0OCwgLjUpO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uYm9hcmRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMzEsIDMzLCAzNyk7O1xcbiAgICBwbGFjZS1jb250ZW50OiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICAgIG1pbi13aWR0aDogMzQwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDM0MHB4O1xcbiAgICBtYXgtd2lkdGg6IDM0MHB4O1xcbiAgICBtYXgtaGVpZ2h0OiAzNDBweDtcXG59XFxuXFxuLmJvYXJkU3F1YXJlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlciBjZW50ZXI7XFxuICAgIHdpZHRoOiAzMnB4O1xcbiAgICBoZWlnaHQ6IDMycHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYig1MiwgMTIyLCAxODIpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTk2LCA0MSwgMTA2KTtcXG4gICAgdHJhbnNpdGlvbjogMC43NXMgYWxsO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5ib2FyZFNxdWFyZTpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMzQsIDI1NSwgMCwgLjc1KTtcXG5cXG59XFxuXFxuI21pc3NpbGVHcmlkQ29udGFpbmVyIHtcXG4gICAgZ3JpZC1hcmVhOiBtaXNzaWxlR3JpZENvbnRhaW5lcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlciBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgei1pbmRleDogMDtcXG59XFxuXFxuI3NoaXBHcmlkQ29udGFpbmVyIHtcXG4gICAgZ3JpZC1hcmVhOiBzaGlwR3JpZENvbnRhaW5lcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlciBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgei1pbmRleDogMDtcXG59XFxuXFxuLmZyb250IHtcXG4gICAgd2lkdGg6IDI4cHg7XFxuICAgIGhlaWdodDogMjhweDtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTAlO1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMCU7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTYsIDQxLCAxMDYpO1xcbn1cXG5cXG4ubWlkIHtcXG4gICAgd2lkdGg6IDI4cHg7XFxuICAgIGhlaWdodDogMjhweDtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjIlO1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMiU7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMiU7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMiU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTYsIDQxLCAxMDYpO1xcbn1cXG5cXG4jaHVkIHtcXG4gICAgZ3JpZC1hcmVhOiBodWQ7XFxuICAgIGJhY2tncm91bmQ6IHJnYigzNiwgNDEsIDQ2KTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAyZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICAnb3JpZW50YXRpb25CdXR0b25Db250YWluZXInXFxuICAgICAgICAnc2hpcHNDb250YWluZXInXFxuICAgICAgICAnc2VsZWN0ZWRTaGlwQ29udGFpbmVyJ1xcbiAgICA7XFxuICAgIGdhcDogMjBweDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbiNodWRPdmVybGF5e1xcbiAgICBncmlkLXJvdy1zdGFydDogMTtcXG4gICAgZ3JpZC1yb3ctZW5kOiA0O1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAxO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDgxLCAxMzEsIDI0OCwgLjUpO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4jc2hpcHNPdmVybGF5IHtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICAgIGdyaWQtcm93LWVuZDogMztcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSg4MSwgMTMxLCAyNDgsIC41KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4jc2hpcHNDb250YWluZXIge1xcbiAgICBncmlkLWFyZWE6IHNoaXBzQ29udGFpbmVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyIGNlbnRlcjtcXG59XFxuXFxuI3NoaXBzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDE4LCAxOSwgMjIpO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyIGNlbnRlcjtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBtaW4taGVpZ2h0OiAyNSU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuI2Rlc3Ryb3llcixcXG4jc2VsZWN0ZWRfZGVzdHJveWVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGZsZXgtc3RhcnQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXIgZmxleC1zdGFydDtcXG4gICAgd2lkdGg6IDMycHg7XFxuICAgIGhlaWdodDogMzJweDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDE4LCAxOSwgMjIpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmRlc3Ryb3llckljb24ge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwJTtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDMwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NiwgNDEsIDEwNik7XFxufVxcblxcbiNzdWJtYXJpbmUsXFxuI3NlbGVjdGVkX3N1Ym1hcmluZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXIgY2VudGVyO1xcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAgICB3aWR0aDogNjRweDtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTgsIDE5LCAyMik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uc3VibWFyaW5lSWNvbiB7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTAlO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjUlO1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk2LCA0MSwgMTA2KTtcXG59XFxuXFxuI2NydWlzZXIsXFxuI3NlbGVjdGVkX2NydWlzZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyIGNlbnRlcjtcXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gICAgd2lkdGg6IDk2cHg7XFxuICAgIGhlaWdodDogMzJweDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDE4LCAxOSwgMjIpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmNydWlzZXJJY29uIHtcXG4gICAgd2lkdGg6IDk0cHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTAlO1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNSU7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyNSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTYsIDQxLCAxMDYpO1xcbn1cXG5cXG4jYmF0dGxlc2hpcCxcXG4jc2VsZWN0ZWRfYmF0dGxlc2hpcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXIgY2VudGVyO1xcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAgICB3aWR0aDogMTI4cHg7XFxuICAgIGhlaWdodDogMzJweDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDE4LFxcdDE5LFxcdDIyKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5iYXR0bGVzaGlwSWNvbiB7XFxuICAgIHdpZHRoOiAxMjZweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1JTtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDI1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NiwgNDEsIDEwNik7XFxufVxcblxcbiNjYXJyaWVyLFxcbiNzZWxlY3RlZF9jYXJyaWVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlciBjZW50ZXI7XFxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICAgIHdpZHRoOiAxNjBweDtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTgsXFx0MTksXFx0MjIpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmNhcnJpZXJJY29uIHtcXG4gICAgd2lkdGg6IDE1OHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTAlO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjUlO1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk2LCA0MSwgMTA2KTtcXG59XFxuXFxuI29yaWVudGF0aW9uQnV0dG9uQ29udGFpbmVyIHtcXG4gICAgZ3JpZC1hcmVhOiBvcmllbnRhdGlvbkJ1dHRvbkNvbnRhaW5lcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlciBjZW50ZXI7XFxufVxcblxcbiNvcmllbnRhdGlvbkJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxNjBweDtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyIGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDogcmdiKDE4MSwgMTcsIDg3KTtcXG4gICAgb3V0bGluZS1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgdHJhbnNpdGlvbjogLjc1cztcXG59XFxuXFxuYnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNzUsXFx0MTYyLFxcdDE5OCk7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggN3B4IDRweCByZ2IoMCwgMTQ1LCAyMDAsIDAuNSk7XFxuICAgIG91dGxpbmUtc3R5bGU6IG5vbmU7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuI3NlbGVjdGVkU2hpcENvbnRhaW5lciB7XFxuICAgIGdyaWQtYXJlYTogc2VsZWN0ZWRTaGlwQ29udGFpbmVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyIGNlbnRlcjtcXG59XFxuXFxuI3NlbGVjdGVkX1NoaXBDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyIGNlbnRlcjtcXG4gICAgZ2FwOiA3MHB4O1xcbn1cXG5cXG4jc2VsZWN0ZWRTaGlwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGZsZXgtc3RhcnQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXIgZmxleC1zdGFydDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDE4LCAxOSwgMjIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IFBsYXllciA9IHJlcXVpcmUoJy4uL3Rlc3QvcGxheWVyJyk7XG5jb25zdCBBSSA9IHJlcXVpcmUoJy4uL3Rlc3QvYWknKTtcblxuY29uc3QgcGxheWVyMSA9IG5ldyBQbGF5ZXIoKTtcbmNvbnN0IGFpID0gbmV3IEFJKCk7XG5leHBvcnQgeyBwbGF5ZXIxLCBhaSB9O1xuIiwiaW1wb3J0IHsgZ2V0Q29udGVudCB9IGZyb20gJy4uL3JldXNhYmxlcy9ncmlkSXRlbXMnO1xuaW1wb3J0IHsgY3JlYXRlRGl2IH0gZnJvbSAnLi4vcmV1c2FibGVzL2VsZW1lbnRzJztcblxuZnVuY3Rpb24gY3JlYXRlR3JpZCgpIHtcbiAgY29uc3QgbmF2ID0gY3JlYXRlRGl2KCk7XG4gIG5hdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hdicpO1xuXG4gIGNvbnN0IHNoaXBCb2FyZCA9IGNyZWF0ZURpdigpO1xuICBzaGlwQm9hcmQuc2V0QXR0cmlidXRlKCdpZCcsICdzaGlwQm9hcmQnKTtcblxuICBjb25zdCBodWQgPSBjcmVhdGVEaXYoKTtcbiAgaHVkLnNldEF0dHJpYnV0ZSgnaWQnLCAnaHVkJyk7XG5cbiAgZ2V0Q29udGVudCgpLmFwcGVuZChuYXYsIHNoaXBCb2FyZCwgaHVkKTtcbn1cblxuY3JlYXRlR3JpZCgpO1xuIiwiaW1wb3J0IGZhdmljb24gZnJvbSAnLi4vcmVzb3VyY2VzL2ljby9mYXZpY29uLmljbyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUZhdmljb24oKSB7XG4gIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJyk7XG4gIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gIGxpbmsucmVsID0gJ3Nob3J0Y3V0IGljb24nO1xuICBsaW5rLmhyZWYgPSBmYXZpY29uO1xuICBsaW5rLnR5cGUgPSAnaW1hZ2UveC1pY29uJztcbiAgaGVhZC5hcHBlbmQobGluayk7XG59XG5cbmNyZWF0ZUZhdmljb24oKTtcbiIsImltcG9ydCB7IGNyZWF0ZURpdiwgY3JlYXRlQnV0dG9uIH0gZnJvbSAnLi4vcmV1c2FibGVzL2VsZW1lbnRzJztcbmltcG9ydCB7IGdldEh1ZCB9IGZyb20gJy4uL3JldXNhYmxlcy9ncmlkSXRlbXMnO1xuaW1wb3J0IHsgY2hhbmdlT3JpZW50YXRpb24sIHNlbGVjdFNoaXAgfSBmcm9tICcuL2h1ZExvZ2ljJztcblxuZnVuY3Rpb24gYWRkU2hpcHMoY29udGFpbmVyKSB7XG4gIGNvbnN0IG51bVNoaXBzID0gNTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1TaGlwczsgaSsrKSB7XG4gICAgY29uc3Qgc2hpcCA9IGNyZWF0ZURpdigpO1xuICAgIGlmIChpID09PSAwKSB7XG4gICAgICBzaGlwLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzdHJveWVyJyk7XG4gICAgICBjb25zdCBkZXN0cm95ZXJJY29uID0gY3JlYXRlRGl2KCk7XG4gICAgICBkZXN0cm95ZXJJY29uLmNsYXNzTGlzdC5hZGQoJ2Rlc3Ryb3llckljb24nKTtcbiAgICAgIHNoaXAuYXBwZW5kKGRlc3Ryb3llckljb24pO1xuICAgICAgY29udGFpbmVyLmFwcGVuZCgnRGVzdHJveWVyJyk7XG4gICAgfSBlbHNlIGlmIChpID09PSAxKSB7XG4gICAgICBzaGlwLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VibWFyaW5lJyk7XG4gICAgICBjb25zdCBzdWJtYXJpbmVJY29uID0gY3JlYXRlRGl2KCk7XG4gICAgICBzdWJtYXJpbmVJY29uLmNsYXNzTGlzdC5hZGQoJ3N1Ym1hcmluZUljb24nKTtcbiAgICAgIHNoaXAuYXBwZW5kKHN1Ym1hcmluZUljb24pO1xuICAgICAgY29udGFpbmVyLmFwcGVuZCgnU3VibWFyaW5lJyk7XG4gICAgfSBlbHNlIGlmIChpID09PSAyKSB7XG4gICAgICBzaGlwLnNldEF0dHJpYnV0ZSgnaWQnLCAnY3J1aXNlcicpO1xuICAgICAgY29uc3QgY3J1aXNlckljb24gPSBjcmVhdGVEaXYoKTtcbiAgICAgIGNydWlzZXJJY29uLmNsYXNzTGlzdC5hZGQoJ2NydWlzZXJJY29uJyk7XG4gICAgICBzaGlwLmFwcGVuZChjcnVpc2VySWNvbik7XG4gICAgICBjb250YWluZXIuYXBwZW5kKCdDcnVpc2VyJyk7XG4gICAgfSBlbHNlIGlmIChpID09PSAzKSB7XG4gICAgICBzaGlwLnNldEF0dHJpYnV0ZSgnaWQnLCAnYmF0dGxlc2hpcCcpO1xuICAgICAgY29uc3QgYmF0dGxlc2hpcEljb24gPSBjcmVhdGVEaXYoKTtcbiAgICAgIGJhdHRsZXNoaXBJY29uLmNsYXNzTGlzdC5hZGQoJ2JhdHRsZXNoaXBJY29uJyk7XG4gICAgICBzaGlwLmFwcGVuZChiYXR0bGVzaGlwSWNvbik7XG4gICAgICBjb250YWluZXIuYXBwZW5kKCdCYXR0bGVzaGlwJyk7XG4gICAgfSBlbHNlIGlmIChpID09PSA0KSB7XG4gICAgICBzaGlwLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2FycmllcicpO1xuICAgICAgY29uc3QgY2Fycmllckljb24gPSBjcmVhdGVEaXYoKTtcbiAgICAgIGNhcnJpZXJJY29uLmNsYXNzTGlzdC5hZGQoJ2NhcnJpZXJJY29uJyk7XG4gICAgICBzaGlwLmFwcGVuZChjYXJyaWVySWNvbik7XG4gICAgICBjb250YWluZXIuYXBwZW5kKCdDYXJyaWVyJyk7XG4gICAgfVxuXG4gICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBzZWxlY3RTaGlwKTtcbiAgICBjb250YWluZXIuYXBwZW5kKHNoaXApO1xuICB9XG59XG5cbmNvbnN0IGNyZWF0ZVNoaXBzID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVEaXYoKTtcbiAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2hpcHNDb250YWluZXInKTtcbiAgY29uc3Qgc2hpcHMgPSBjcmVhdGVEaXYoKTtcbiAgc2hpcHMuc2V0QXR0cmlidXRlKCdpZCcsICdzaGlwcycpO1xuICBhZGRTaGlwcyhzaGlwcyk7XG5cbiAgY29udGFpbmVyLmFwcGVuZCgnU2hpcHMnLCBzaGlwcyk7XG4gIHJldHVybiBjb250YWluZXI7XG59O1xuY29uc3QgY3JlYXRlT3JpZW50YXRpb25CdXR0b24gPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZURpdigpO1xuICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdvcmllbnRhdGlvbkJ1dHRvbkNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbigpO1xuICBidXR0b24uZGlzYWJsZWQgPSAndHJ1ZSc7XG4gIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ29yaWVudGF0aW9uQnV0dG9uJyk7XG4gIGJ1dHRvbi5pbm5lckhUTUwgPSAnVmVydGljYWwnO1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2hhbmdlT3JpZW50YXRpb24pO1xuXG4gIGNvbnRhaW5lci5hcHBlbmQoJ09yaWVudGF0aW9uJywgYnV0dG9uKTtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVNlbGVjdGVkU2hpcCgpIHtcbiAgY29uc3Qgc2VsZWN0ZWRTaGlwQ29udGFpbmVyID0gY3JlYXRlRGl2KCk7XG4gIHNlbGVjdGVkU2hpcENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NlbGVjdGVkU2hpcENvbnRhaW5lcicpO1xuICBjb25zdCBzZWxlY3RlZFNoaXAgPSBjcmVhdGVEaXYoKTtcbiAgc2VsZWN0ZWRTaGlwLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2VsZWN0ZWRTaGlwJyk7XG4gIHNlbGVjdGVkU2hpcC5pbm5lckhUTUwgPSAnTm8gU2hpcCBTZWxlY3RlZC4uLic7XG4gIHNlbGVjdGVkU2hpcENvbnRhaW5lci5hcHBlbmQoJ1NlbGVjdGVkIFNoaXAnLCBzZWxlY3RlZFNoaXApO1xuICByZXR1cm4gc2VsZWN0ZWRTaGlwQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTaGlwc092ZXJsYXkoKSB7XG4gIGNvbnN0IGRpdiA9IGNyZWF0ZURpdigpO1xuICBkaXYuc2V0QXR0cmlidXRlKCdpZCcsICdzaGlwc092ZXJsYXknKTtcbiAgcmV0dXJuIGRpdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSHVkT3ZlcmxheSgpIHtcbiAgY29uc3QgZGl2ID0gY3JlYXRlRGl2KCk7XG4gIGRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2h1ZE92ZXJsYXknKTtcbiAgcmV0dXJuIGRpdjtcbn1cblxuZnVuY3Rpb24gYXBwZW5kVG9IVUQoKSB7XG4gIGdldEh1ZCgpLmFwcGVuZChcbiAgICBjcmVhdGVPcmllbnRhdGlvbkJ1dHRvbigpLFxuICAgIGNyZWF0ZVNoaXBzKCksXG4gICAgY3JlYXRlU2hpcHNPdmVybGF5KCksXG4gICAgY3JlYXRlU2VsZWN0ZWRTaGlwKCksXG4gICAgY3JlYXRlSHVkT3ZlcmxheSgpLFxuICApO1xufVxuXG5hcHBlbmRUb0hVRCgpO1xuIiwiaW1wb3J0IHsgcGxheWVyMSB9IGZyb20gJy4uL2dhbWUvZ2FtZUxvZ2ljJztcbmltcG9ydCB7IGNyZWF0ZURpdiB9IGZyb20gJy4uL3JldXNhYmxlcy9lbGVtZW50cyc7XG5pbXBvcnQgeyB0b2dnbGVTaGlwQm9hcmRPdmVybGF5IH0gZnJvbSAnLi4vc2hpcEJvYXJkL3NoaXBCb2FyZENvbnRlbnQnO1xuXG5mdW5jdGlvbiB0b2dnbGVPcmllbnRhdGlvbkJ1dHRvbkRpc2FibGVkKGRpc2FibGVkKSB7XG4gIGNvbnN0IG9yaWVudGF0aW9uQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29yaWVudGF0aW9uQnV0dG9uJyk7XG4gIG9yaWVudGF0aW9uQnV0dG9uLmRpc2FibGVkID0gZGlzYWJsZWQ7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVNoaXBzT3ZlcmxheURpc3BsYXkoZGlzcGxheSkge1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoaXBzT3ZlcmxheScpO1xuICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5O1xufVxuXG5mdW5jdGlvbiBjbGVhclNlbGVjdGVkU2hpcCgpIHtcbiAgY29uc3Qgc2VsZWN0ZWRTaGlwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdGVkU2hpcCcpO1xuXG4gIHdoaWxlIChzZWxlY3RlZFNoaXAuZmlyc3RDaGlsZCkge1xuICAgIHNlbGVjdGVkU2hpcC5yZW1vdmVDaGlsZChzZWxlY3RlZFNoaXAuZmlyc3RDaGlsZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0Tm9TaGlwU2VsZWN0ZWQoKSB7XG4gIGNvbnN0IHNlbGVjdGVkU2hpcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3RlZFNoaXAnKTtcbiAgc2VsZWN0ZWRTaGlwLmlubmVySFRNTCA9ICdObyBTaGlwIFNlbGVjdGVkLi4uJztcbn1cblxuZnVuY3Rpb24gY2hhbmdlSWNvbkNvbG9yKG5hbWUpIHtcbiAgaWYgKG5hbWUgPT09ICdkZXN0cm95ZXInKSB7XG4gICAgaWYgKHBsYXllcjEuZGVzdHJveWVyQ291bnQgPD0gMCkge1xuICAgICAgY29uc3QgZGVzdHJveWVySWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXN0cm95ZXJJY29uJyk7XG4gICAgICBkZXN0cm95ZXJJY29uLnN0eWxlLmJhY2tncm91bmQgPSAnZ3JheSc7XG4gICAgfSBlbHNlIGlmIChwbGF5ZXIxLmRlc3Ryb3llckNvdW50ID4gMCkge1xuICAgICAgY29uc3QgZGVzdHJveWVySWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXN0cm95ZXJJY29uJyk7XG4gICAgICBkZXN0cm95ZXJJY29uLnN0eWxlLmJhY2tncm91bmQgPSAncmdiKDE5NiA0MSAxMDYpJztcbiAgICB9XG4gIH0gZWxzZSBpZiAobmFtZSA9PT0gJ3N1Ym1hcmluZScpIHtcbiAgICBpZiAocGxheWVyMS5zdWJtYXJpbmVDb3VudCA8PSAwKSB7XG4gICAgICBjb25zdCBzdWJtYXJpbmVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1hcmluZUljb24nKTtcbiAgICAgIHN1Ym1hcmluZUljb24uc3R5bGUuYmFja2dyb3VuZCA9ICdncmF5JztcbiAgICB9IGVsc2UgaWYgKHBsYXllcjEuc3VibWFyaW5lQ291bnQgPiAwKSB7XG4gICAgICBjb25zdCBzdWJtYXJpbmVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1hcmluZUljb24nKTtcbiAgICAgIHN1Ym1hcmluZUljb24uc3R5bGUuYmFja2dyb3VuZCA9ICdyZ2IoMTk2IDQxIDEwNiknO1xuICAgIH1cbiAgfSBlbHNlIGlmIChuYW1lID09PSAnY3J1aXNlcicpIHtcbiAgICBpZiAocGxheWVyMS5jcnVpc2VyQ291bnQgPD0gMCkge1xuICAgICAgY29uc3QgY3J1aXNlckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3J1aXNlckljb24nKTtcbiAgICAgIGNydWlzZXJJY29uLnN0eWxlLmJhY2tncm91bmQgPSAnZ3JheSc7XG4gICAgfSBlbHNlIGlmIChwbGF5ZXIxLmNydWlzZXJDb3VudCA+IDApIHtcbiAgICAgIGNvbnN0IGNydWlzZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNydWlzZXJJY29uJyk7XG4gICAgICBjcnVpc2VySWNvbi5zdHlsZS5iYWNrZ3JvdW5kID0gJ3JnYigxOTYgNDEgMTA2KSc7XG4gICAgfVxuICB9IGVsc2UgaWYgKG5hbWUgPT09ICdiYXR0bGVzaGlwJykge1xuICAgIGlmIChwbGF5ZXIxLmJhdHRsZXNoaXBDb3VudCA8PSAwKSB7XG4gICAgICBjb25zdCBiYXR0bGVzaGlwSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYXR0bGVzaGlwSWNvbicpO1xuICAgICAgYmF0dGxlc2hpcEljb24uc3R5bGUuYmFja2dyb3VuZCA9ICdncmF5JztcbiAgICB9IGVsc2UgaWYgKHBsYXllcjEuYmF0dGxlc2hpcENvdW50ID4gMCkge1xuICAgICAgY29uc3QgYmF0dGxlc2hpcEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmF0dGxlc2hpcEljb24nKTtcbiAgICAgIGJhdHRsZXNoaXBJY29uLnN0eWxlLmJhY2tncm91bmQgPSAncmdiKDE5NiA0MSAxMDYpJztcbiAgICB9XG4gIH0gZWxzZSBpZiAobmFtZSA9PT0gJ2NhcnJpZXInKSB7XG4gICAgaWYgKHBsYXllcjEuY2FycmllckNvdW50IDw9IDApIHtcbiAgICAgIGNvbnN0IGNhcnJpZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnJpZXJJY29uJyk7XG4gICAgICBjYXJyaWVySWNvbi5zdHlsZS5iYWNrZ3JvdW5kID0gJ2dyYXknO1xuICAgIH0gZWxzZSBpZiAocGxheWVyMS5jYXJyaWVyQ291bnQgPiAwKSB7XG4gICAgICBjb25zdCBjYXJyaWVySWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJyaWVySWNvbicpO1xuICAgICAgY2Fycmllckljb24uc3R5bGUuYmFja2dyb3VuZCA9ICdyZ2IoMTk2IDQxIDEwNiknO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkZXNlbGVjdFNoaXAoKSB7XG4gIGNvbnN0IG9sZEFjdGl2ZVNoaXBOYW1lID0gcGxheWVyMS5hY3RpdmVTaGlwLm5hbWU7XG4gIHBsYXllcjEuZGVzZWxlY3RTaGlwKCk7XG4gIGNoYW5nZUljb25Db2xvcihvbGRBY3RpdmVTaGlwTmFtZSk7XG4gIHRvZ2dsZVNoaXBzT3ZlcmxheURpc3BsYXkoJ25vbmUnKTtcbiAgY2xlYXJTZWxlY3RlZFNoaXAoKTtcbiAgc2V0Tm9TaGlwU2VsZWN0ZWQoKTtcbiAgdG9nZ2xlU2hpcEJvYXJkT3ZlcmxheSgnMycpO1xuICB0b2dnbGVPcmllbnRhdGlvbkJ1dHRvbkRpc2FibGVkKHRydWUpO1xufVxuXG5mdW5jdGlvbiBzZXRTZWxlY3RlZFNoaXAoYWN0aXZlU2hpcCkge1xuICBjbGVhclNlbGVjdGVkU2hpcCgpO1xuICBjb25zdCBzZWxlY3RlZFNoaXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0ZWRTaGlwJyk7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZURpdigpO1xuICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdzZWxlY3RlZF9TaGlwQ29udGFpbmVyJyk7XG4gIGNvbnN0IHNoaXAgPSBjcmVhdGVEaXYoKTtcbiAgaWYgKGFjdGl2ZVNoaXAubmFtZSA9PT0gJ2Rlc3Ryb3llcicpIHtcbiAgICBzaGlwLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2VsZWN0ZWRfZGVzdHJveWVyJyk7XG4gICAgY29uc3QgZGVzdHJveWVySWNvbiA9IGNyZWF0ZURpdigpO1xuICAgIGRlc3Ryb3llckljb24uY2xhc3NMaXN0LmFkZCgnZGVzdHJveWVySWNvbicpO1xuICAgIHNoaXAuYXBwZW5kKGRlc3Ryb3llckljb24pO1xuICAgIGNvbnRhaW5lci5hcHBlbmQoJ0Rlc3Ryb3llcicpO1xuICB9IGVsc2UgaWYgKGFjdGl2ZVNoaXAubmFtZSA9PT0gJ3N1Ym1hcmluZScpIHtcbiAgICBzaGlwLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2VsZWN0ZWRfc3VibWFyaW5lJyk7XG4gICAgY29uc3Qgc3VibWFyaW5lSWNvbiA9IGNyZWF0ZURpdigpO1xuICAgIHN1Ym1hcmluZUljb24uY2xhc3NMaXN0LmFkZCgnc3VibWFyaW5lSWNvbicpO1xuICAgIHNoaXAuYXBwZW5kKHN1Ym1hcmluZUljb24pO1xuICAgIGNvbnRhaW5lci5hcHBlbmQoJ1N1Ym1hcmluZScpO1xuICB9IGVsc2UgaWYgKGFjdGl2ZVNoaXAubmFtZSA9PT0gJ2NydWlzZXInKSB7XG4gICAgc2hpcC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NlbGVjdGVkX2NydWlzZXInKTtcbiAgICBjb25zdCBjcnVpc2VySWNvbiA9IGNyZWF0ZURpdigpO1xuICAgIGNydWlzZXJJY29uLmNsYXNzTGlzdC5hZGQoJ2NydWlzZXJJY29uJyk7XG4gICAgc2hpcC5hcHBlbmQoY3J1aXNlckljb24pO1xuICAgIGNvbnRhaW5lci5hcHBlbmQoJ0NydWlzZXInKTtcbiAgfSBlbHNlIGlmIChhY3RpdmVTaGlwLm5hbWUgPT09ICdiYXR0bGVzaGlwJykge1xuICAgIHNoaXAuc2V0QXR0cmlidXRlKCdpZCcsICdzZWxlY3RlZF9iYXR0bGVzaGlwJyk7XG4gICAgY29uc3QgYmF0dGxlc2hpcEljb24gPSBjcmVhdGVEaXYoKTtcbiAgICBiYXR0bGVzaGlwSWNvbi5jbGFzc0xpc3QuYWRkKCdiYXR0bGVzaGlwSWNvbicpO1xuICAgIHNoaXAuYXBwZW5kKGJhdHRsZXNoaXBJY29uKTtcbiAgICBjb250YWluZXIuYXBwZW5kKCdCYXR0bGVzaGlwJyk7XG4gIH0gZWxzZSBpZiAoYWN0aXZlU2hpcC5uYW1lID09PSAnY2FycmllcicpIHtcbiAgICBzaGlwLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2VsZWN0ZWRfY2FycmllcicpO1xuICAgIGNvbnN0IGNhcnJpZXJJY29uID0gY3JlYXRlRGl2KCk7XG4gICAgY2Fycmllckljb24uY2xhc3NMaXN0LmFkZCgnY2Fycmllckljb24nKTtcbiAgICBzaGlwLmFwcGVuZChjYXJyaWVySWNvbik7XG4gICAgY29udGFpbmVyLmFwcGVuZCgnQ2FycmllcicpO1xuICB9XG5cbiAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGRlc2VsZWN0U2hpcCk7XG4gIGNvbnRhaW5lci5hcHBlbmQoc2hpcCk7XG4gIHNlbGVjdGVkU2hpcC5hcHBlbmQoY29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0U2hpcCgpIHtcbiAgaWYgKCh0aGlzLmdldEF0dHJpYnV0ZSgnaWQnKSA9PT0gJ2Rlc3Ryb3llcicgJiYgcGxheWVyMS5kZXN0cm95ZXJDb3VudCA+IDApXG4gICAgfHwgKHRoaXMuZ2V0QXR0cmlidXRlKCdpZCcpID09PSAnc3VibWFyaW5lJyAmJiBwbGF5ZXIxLnN1Ym1hcmluZUNvdW50ID4gMClcbiAgICB8fCAodGhpcy5nZXRBdHRyaWJ1dGUoJ2lkJykgPT09ICdjcnVpc2VyJyAmJiBwbGF5ZXIxLmNydWlzZXJDb3VudCA+IDApXG4gICAgfHwgKHRoaXMuZ2V0QXR0cmlidXRlKCdpZCcpID09PSAnYmF0dGxlc2hpcCcgJiYgcGxheWVyMS5iYXR0bGVzaGlwQ291bnQgPiAwKVxuICAgIHx8ICh0aGlzLmdldEF0dHJpYnV0ZSgnaWQnKSA9PT0gJ2NhcnJpZXInICYmIHBsYXllcjEuY2FycmllckNvdW50ID4gMClcbiAgKSB7XG4gICAgaWYgKHBsYXllcjEuYWN0aXZlU2hpcCA9PT0gbnVsbCkge1xuICAgICAgaWYgKHRoaXMuZ2V0QXR0cmlidXRlKCdpZCcpID09PSAnZGVzdHJveWVyJykge1xuICAgICAgICBwbGF5ZXIxLnNlbGVjdFNoaXAoJ2Rlc3Ryb3llcicpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmdldEF0dHJpYnV0ZSgnaWQnKSA9PT0gJ3N1Ym1hcmluZScpIHtcbiAgICAgICAgcGxheWVyMS5zZWxlY3RTaGlwKCdzdWJtYXJpbmUnKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5nZXRBdHRyaWJ1dGUoJ2lkJykgPT09ICdjcnVpc2VyJykge1xuICAgICAgICBwbGF5ZXIxLnNlbGVjdFNoaXAoJ2NydWlzZXInKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5nZXRBdHRyaWJ1dGUoJ2lkJykgPT09ICdiYXR0bGVzaGlwJykge1xuICAgICAgICBwbGF5ZXIxLnNlbGVjdFNoaXAoJ2JhdHRsZXNoaXAnKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5nZXRBdHRyaWJ1dGUoJ2lkJykgPT09ICdjYXJyaWVyJykge1xuICAgICAgICBwbGF5ZXIxLnNlbGVjdFNoaXAoJ2NhcnJpZXInKTtcbiAgICAgIH1cbiAgICAgIHRvZ2dsZVNoaXBCb2FyZE92ZXJsYXkoJzInKTtcbiAgICB9XG5cbiAgICBjaGFuZ2VJY29uQ29sb3IodGhpcy5nZXRBdHRyaWJ1dGUoJ2lkJykpO1xuICAgIHRvZ2dsZU9yaWVudGF0aW9uQnV0dG9uRGlzYWJsZWQoZmFsc2UpO1xuICAgIHNldFNlbGVjdGVkU2hpcChwbGF5ZXIxLmFjdGl2ZVNoaXApO1xuICAgIHRvZ2dsZVNoaXBzT3ZlcmxheURpc3BsYXkoJ2Jsb2NrJyk7XG4gICAgLy8gY29uc29sZS5sb2cocGxheWVyMS5hY3RpdmVTaGlwKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VPcmllbnRhdGlvbigpIHtcbiAgY29uc3QgYWN0aXZlU2hpcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBzZWxlY3RlZF8ke3BsYXllcjEuYWN0aXZlU2hpcC5uYW1lfWApO1xuICBpZiAocGxheWVyMS5hY3RpdmVTaGlwICE9PSBudWxsKSB7XG4gICAgaWYgKHBsYXllcjEuYWN0aXZlU2hpcC5ob3Jpem9udGFsVmVydGljYWwpIHtcbiAgICAgIHRoaXMuaW5uZXJIVE1MID0gJ0hvcml6b250YWwnO1xuICAgICAgYWN0aXZlU2hpcC5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKC4yNXR1cm4pJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbm5lckhUTUwgPSAnVmVydGljYWwnO1xuICAgICAgYWN0aXZlU2hpcC5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDB0dXJuKSc7XG4gICAgfVxuICAgIHBsYXllcjEuY2hhbmdlT3JpZW50YXRpb24oKTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBzZWxlY3RTaGlwLCBjaGFuZ2VPcmllbnRhdGlvbiwgc2V0Tm9TaGlwU2VsZWN0ZWQsXG59O1xuIiwiaW1wb3J0IHsgZ2V0TmF2IH0gZnJvbSAnLi4vcmV1c2FibGVzL2dyaWRJdGVtcyc7XG5pbXBvcnQgeyBjcmVhdGVIMSwgY3JlYXRlU3ltYm9sIH0gZnJvbSAnLi4vcmV1c2FibGVzL2VsZW1lbnRzJztcblxuZnVuY3Rpb24gY3JlYXRlVGl0bGUoKSB7XG4gIGNvbnN0IG5hdiA9IGdldE5hdigpO1xuXG4gIGNvbnN0IGgxID0gY3JlYXRlSDEoJ0JhdHRsZXNoaXAnKTtcbiAgbmF2LmFwcGVuZChoMSwgY3JlYXRlU3ltYm9sKCdkaXJlY3Rpb25zX2JvYXQnKSk7XG59XG5cbmNyZWF0ZVRpdGxlKCk7XG4iLCJmdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xuICB0aGlzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbmZ1bmN0aW9uIGJsb2NrU2hpcEJvYXJkKGdyaWRTdGFydCwgZ3JpZEVuZCkge1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoaXBCb2FyZE92ZXJsYXknKTtcbiAgb3ZlcmxheS5zdHlsZS5iYWNrZ3JvdW5kID0gJ3RyYW5zcGFyZW50JztcbiAgb3ZlcmxheS5zdHlsZS5ncmlkUm93U3RhcnQgPSBncmlkU3RhcnQ7XG4gIG92ZXJsYXkuc3R5bGUuZ3JpZFJvd0VuZCA9IGdyaWRFbmQ7XG59XG5jb25zdCBjcmVhdGVIMSA9ICh0ZXh0KSA9PiB7XG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaDEuaW5uZXJIVE1MID0gdGV4dDtcbiAgcmV0dXJuIGgxO1xufTtcbmNvbnN0IGNyZWF0ZURpdiA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgY3JlYXRlQnV0dG9uID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5jb25zdCBjcmVhdGVNb2RhbCA9ICh0ZXh0KSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb25zdCBiZyA9IGNyZWF0ZURpdigpO1xuICBiZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2JnT3ZlcmxheScpO1xuXG4gIGNvbnN0IG1vZGFsID0gY3JlYXRlRGl2KCk7XG4gIG1vZGFsLnNldEF0dHJpYnV0ZSgnaWQnLCAnbW9kYWwnKTtcbiAgY29uc3QgaDEgPSBjcmVhdGVIMSh0ZXh0KTtcbiAgaDEuc3R5bGUudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gIG1vZGFsLmFwcGVuZChoMSk7XG4gIGJnLmFwcGVuZChtb2RhbCk7XG4gIGJnLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNsb3NlTW9kYWwpO1xuICBjb250ZW50LmFwcGVuZChiZyk7XG59O1xuY29uc3QgY3JlYXRlSWNvbiA9IChpY29uTmFtZSkgPT4ge1xuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBzcGFuLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJyk7XG4gIHNwYW4uaW5uZXJIVE1MID0gaWNvbk5hbWU7XG4gIHJldHVybiBzcGFuO1xufTtcblxuY29uc3QgY3JlYXRlU3ltYm9sID0gKHN5bWJvbE5hbWUpID0+IHtcbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgc3Bhbi5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkJyk7XG4gIHNwYW4uaW5uZXJIVE1MID0gc3ltYm9sTmFtZTtcbiAgcmV0dXJuIHNwYW47XG59O1xuXG5leHBvcnQge1xuICBjcmVhdGVEaXYsIGNyZWF0ZUJ1dHRvbiwgY3JlYXRlTW9kYWwsIGJsb2NrU2hpcEJvYXJkLCBjcmVhdGVJY29uLCBjcmVhdGVTeW1ib2wsIGNyZWF0ZUgxLFxufTtcbiIsImNvbnN0IGdldE5hdiA9ICgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYnKTtcblxuY29uc3QgZ2V0Q29udGVudCA9ICgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbmNvbnN0IGdldFNoaXBCb2FyZCA9ICgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGlwQm9hcmQnKTtcblxuY29uc3QgZ2V0SHVkID0gKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1ZCcpO1xuXG5leHBvcnQge1xuICBnZXROYXYsIGdldENvbnRlbnQsIGdldFNoaXBCb2FyZCwgZ2V0SHVkLFxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmltcG9ydCB7IGdldFNoaXBCb2FyZCB9IGZyb20gJy4uL3JldXNhYmxlcy9ncmlkSXRlbXMnO1xuaW1wb3J0IHsgY3JlYXRlRGl2IH0gZnJvbSAnLi4vcmV1c2FibGVzL2VsZW1lbnRzJztcbmltcG9ydCB7IHBsYWNlU2hpcCwgZmlyZSB9IGZyb20gJy4vc2hpcEJvYXJkTG9naWMnO1xuXG5mdW5jdGlvbiBjcmVhdGVTaGlwQm9hcmQoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZURpdigpO1xuICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdzaGlwR3JpZENvbnRhaW5lcicpO1xuICBjb25zdCBib2FyZCA9IGNyZWF0ZURpdigpO1xuICBib2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NoaXBHcmlkJyk7XG4gIGJvYXJkLmNsYXNzTGlzdC5hZGQoJ2JvYXJkQ29udGFpbmVyJyk7XG4gIGxldCBjb3VudGVyID0gMDtcblxuICBmb3IgKGxldCB4ID0gMDsgeCA8IDEwOyB4KyspIHtcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IDEwOyB5KyspIHtcbiAgICAgIGNvbnN0IHNxdWFyZSA9IGNyZWF0ZURpdigpO1xuICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZSgnaWQnLCBgU18ke2NvdW50ZXJ9YCk7XG4gICAgICAvLyBzcXVhcmUuaW5uZXJIVE1MID0gYCR7Y291bnRlcn1gO1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2JvYXJkU3F1YXJlJyk7XG4gICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgcGxhY2VTaGlwKTtcbiAgICAgIGJvYXJkLmFwcGVuZChzcXVhcmUpO1xuICAgICAgY291bnRlcisrO1xuICAgIH1cbiAgfVxuXG4gIGNvbnRhaW5lci5hcHBlbmQoJ1NoaXAgR3JpZCcsIGJvYXJkKTtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWlzc2xlQm9hcmQoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZURpdigpO1xuICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdtaXNzaWxlR3JpZENvbnRhaW5lcicpO1xuICBjb25zdCBib2FyZCA9IGNyZWF0ZURpdigpO1xuICBib2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21pc3NsZUdyaWQnKTtcbiAgYm9hcmQuY2xhc3NMaXN0LmFkZCgnYm9hcmRDb250YWluZXInKTtcbiAgbGV0IGNvdW50ZXIgPSAwO1xuICBmb3IgKGxldCB5ID0gMDsgeSA8IDEwOyB5KyspIHtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDEwOyB4KyspIHtcbiAgICAgIGNvbnN0IHNxdWFyZSA9IGNyZWF0ZURpdigpO1xuICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZSgnaWQnLCBgTV8ke2NvdW50ZXJ9YCk7XG4gICAgICAvLyBzcXVhcmUuaW5uZXJIVE1MID0gYCR7Y291bnRlcn1gO1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2JvYXJkU3F1YXJlJyk7XG4gICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZmlyZSk7XG4gICAgICBib2FyZC5hcHBlbmQoc3F1YXJlKTtcbiAgICAgIGNvdW50ZXIrKztcbiAgICB9XG4gIH1cblxuICBjb250YWluZXIuYXBwZW5kKCdNaXNzbGUgR3JpZCcsIGJvYXJkKTtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlT3ZlcmxheSgpIHtcbiAgY29uc3QgZGl2ID0gY3JlYXRlRGl2KCk7XG4gIGRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NoaXBCb2FyZE92ZXJsYXknKTtcbiAgcmV0dXJuIGRpdjtcbn1cblxuZnVuY3Rpb24gYXBwZW5kVG9TaGlwQm9hcmQoKSB7XG4gIGdldFNoaXBCb2FyZCgpLmFwcGVuZChjcmVhdGVNaXNzbGVCb2FyZCgpLCBjcmVhdGVTaGlwQm9hcmQoKSwgY3JlYXRlT3ZlcmxheSgpKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlU2hpcEJvYXJkT3ZlcmxheShyb3cpIHtcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGlwQm9hcmRPdmVybGF5Jyk7XG4gIG92ZXJsYXkuc3R5bGUuZ3JpZFJvd0VuZCA9IHJvdztcbn1cblxuZXhwb3J0IHsgdG9nZ2xlU2hpcEJvYXJkT3ZlcmxheSB9O1xuYXBwZW5kVG9TaGlwQm9hcmQoKTtcbiIsImltcG9ydCB7IHBsYXllcjEsIGFpIH0gZnJvbSAnLi4vZ2FtZS9nYW1lTG9naWMnO1xuaW1wb3J0IHsgY3JlYXRlRGl2LCBjcmVhdGVNb2RhbCwgYmxvY2tTaGlwQm9hcmQgfSBmcm9tICcuLi9yZXVzYWJsZXMvZWxlbWVudHMnO1xuXG5mdW5jdGlvbiB0b2dnbGVTaGlwc092ZXJsYXlEaXNwbGF5KGRpc3BsYXkpIHtcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGlwc092ZXJsYXknKTtcbiAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlU2hpcEJvYXJkT3ZlcmxheShyb3cpIHtcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGlwQm9hcmRPdmVybGF5Jyk7XG4gIG92ZXJsYXkuc3R5bGUuZ3JpZFJvd0VuZCA9IHJvdztcbn1cblxuZnVuY3Rpb24gdG9nZ2xlT3JpZW50YXRpb25CdXR0b25EaXNhYmxlZChkaXNhYmxlZCkge1xuICBjb25zdCBvcmllbnRhdGlvbkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcmllbnRhdGlvbkJ1dHRvbicpO1xuICBvcmllbnRhdGlvbkJ1dHRvbi5kaXNhYmxlZCA9IGRpc2FibGVkO1xufVxuXG5mdW5jdGlvbiBjbGVhclNlbGVjdGVkU2hpcCgpIHtcbiAgY29uc3Qgc2VsZWN0ZWRTaGlwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdGVkU2hpcCcpO1xuXG4gIHdoaWxlIChzZWxlY3RlZFNoaXAuZmlyc3RDaGlsZCkge1xuICAgIHNlbGVjdGVkU2hpcC5yZW1vdmVDaGlsZChzZWxlY3RlZFNoaXAuZmlyc3RDaGlsZCk7XG4gIH1cbn1cbmZ1bmN0aW9uIHNldE5vU2hpcFNlbGVjdGVkKCkge1xuICBjb25zdCBzZWxlY3RlZFNoaXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0ZWRTaGlwJyk7XG4gIHNlbGVjdGVkU2hpcC5pbm5lckhUTUwgPSAnTm8gU2hpcCBTZWxlY3RlZC4uLic7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRPcmllbnRhdGlvbkJ1dHRvbkNvcHkoKSB7XG4gIGNvbnN0IG9yaWVudGF0aW9uQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29yaWVudGF0aW9uQnV0dG9uJyk7XG4gIG9yaWVudGF0aW9uQnV0dG9uLmlubmVySFRNTCA9ICdWZXJ0aWNhbCc7XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWQoaWQpIHtcbiAgaWYgKHBsYXllcjEuYWN0aXZlU2hpcC5ob3Jpem9udGFsVmVydGljYWwpIHtcbiAgICBpZiAoKHBhcnNlSW50KGlkLCAxMCkgJSAxMCA+IDkgJiYgcGxheWVyMS5hY3RpdmVTaGlwLm5hbWUgPT09ICdkZXN0cm95ZXInKVxuICAgICAgfHwgKHBhcnNlSW50KGlkLCAxMCkgJSAxMCA+IDggJiYgcGxheWVyMS5hY3RpdmVTaGlwLm5hbWUgPT09ICdzdWJtYXJpbmUnKVxuICAgICAgfHwgKHBhcnNlSW50KGlkLCAxMCkgJSAxMCA+IDcgJiYgcGxheWVyMS5hY3RpdmVTaGlwLm5hbWUgPT09ICdjcnVpc2VyJylcbiAgICAgIHx8IChwYXJzZUludChpZCwgMTApICUgMTAgPiA2ICYmIHBsYXllcjEuYWN0aXZlU2hpcC5uYW1lID09PSAnYmF0dGxlc2hpcCcpXG4gICAgICB8fCAocGFyc2VJbnQoaWQsIDEwKSAlIDEwID4gNSAmJiBwbGF5ZXIxLmFjdGl2ZVNoaXAubmFtZSA9PT0gJ2NhcnJpZXInKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSBlbHNlIGlmICghcGxheWVyMS5hY3RpdmVTaGlwLmhvcml6b250YWxWZXJ0aWNhbCkge1xuICAgIGlmICgocGxheWVyMS5nYW1lQm9hcmQuZ2V0Q29vcmRpbmF0ZUZyb21JbmRleChpZCkuY29vcmRpbmF0ZVsxXSA+IDkgJiYgcGxheWVyMS5hY3RpdmVTaGlwLm5hbWUgPT09ICdkZXN0cm95ZXInKVxuICAgICAgfHwgKHBsYXllcjEuZ2FtZUJvYXJkLmdldENvb3JkaW5hdGVGcm9tSW5kZXgoaWQpLmNvb3JkaW5hdGVbMV0gPiA4ICYmIHBsYXllcjEuYWN0aXZlU2hpcC5uYW1lID09PSAnc3VibWFyaW5lJylcbiAgICAgIHx8IChwbGF5ZXIxLmdhbWVCb2FyZC5nZXRDb29yZGluYXRlRnJvbUluZGV4KGlkKS5jb29yZGluYXRlWzFdID4gNyAmJiBwbGF5ZXIxLmFjdGl2ZVNoaXAubmFtZSA9PT0gJ2NydWlzZXInKVxuICAgICAgfHwgKHBsYXllcjEuZ2FtZUJvYXJkLmdldENvb3JkaW5hdGVGcm9tSW5kZXgoaWQpLmNvb3JkaW5hdGVbMV0gPiA2ICYmIHBsYXllcjEuYWN0aXZlU2hpcC5uYW1lID09PSAnYmF0dGxlc2hpcCcpXG4gICAgICB8fCAocGxheWVyMS5nYW1lQm9hcmQuZ2V0Q29vcmRpbmF0ZUZyb21JbmRleChpZCkuY29vcmRpbmF0ZVsxXSA+IDUgJiYgcGxheWVyMS5hY3RpdmVTaGlwLm5hbWUgPT09ICdjYXJyaWVyJylcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllcjEuYWN0aXZlU2hpcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChwbGF5ZXIxLmFjdGl2ZVNoaXAuaG9yaXpvbnRhbFZlcnRpY2FsKSB7XG4gICAgICBpZiAocGxheWVyMS5nYW1lQm9hcmQuZ2V0Q29vcmRpbmF0ZUZyb21JbmRleChgJHtwYXJzZUludChpZCwgMTApICsgaX1gKS5vY2N1cGllZCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICB9IGVsc2UgaWYgKHBsYXllcjEuZ2FtZUJvYXJkLmdldENvb3JkaW5hdGVGcm9tSW5kZXgoYCR7cGFyc2VJbnQoaWQsIDEwKSArIChpICogMTApfWApLm9jY3VwaWVkKSB7IHJldHVybiBmYWxzZTsgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUh1ZE92ZXJsYXlEaXNwbGF5KGRpc3BsYXkpIHtcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodWRPdmVybGF5Jyk7XG4gIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrSWZQbGF5ZXJPdXRvZlNoaXBzKCkge1xuICBpZiAocGxheWVyMS5kZXN0cm95ZXJDb3VudCA8PSAwXG4gICAgJiYgcGxheWVyMS5zdWJtYXJpbmVDb3VudCA8PSAwXG4gICAgJiYgcGxheWVyMS5jcnVpc2VyQ291bnQgPD0gMFxuICAgICYmIHBsYXllcjEuYmF0dGxlc2hpcENvdW50IDw9IDBcbiAgICAmJiBwbGF5ZXIxLmNhcnJpZXJDb3VudCA8PSAwKSB7XG4gICAgdG9nZ2xlU2hpcHNPdmVybGF5RGlzcGxheSgnbm9uZScpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBkcmF3U2hpcFRvU2hpcEJvYXJkKGFjdGl2ZVNoaXAsIGFycmF5LCBzaGlwU3F1YXJlKSB7XG4gIGlmIChhY3RpdmVTaGlwLm5hbWUgPT09ICdkZXN0cm95ZXInKSB7XG4gICAgY29uc3QgZnJvbnQgPSBjcmVhdGVEaXYoKTtcbiAgICBmcm9udC5jbGFzc0xpc3QuYWRkKCdmcm9udCcpO1xuICAgIGlmICghYWN0aXZlU2hpcC5ob3Jpem9udGFsVmVydGljYWwpIHsgZnJvbnQuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSguMjV0dXJuKSc7IH1cbiAgICBzaGlwU3F1YXJlLmFwcGVuZChmcm9udCk7XG4gIH0gZWxzZSBpZiAoYWN0aXZlU2hpcC5uYW1lID09PSAnc3VibWFyaW5lJykge1xuICAgIGNvbnN0IGZyb250ID0gY3JlYXRlRGl2KCk7XG4gICAgZnJvbnQuY2xhc3NMaXN0LmFkZCgnZnJvbnQnKTtcbiAgICBjb25zdCBtaWQgPSBjcmVhdGVEaXYoKTtcbiAgICBtaWQuY2xhc3NMaXN0LmFkZCgnbWlkJyk7XG5cbiAgICBpZiAoIWFjdGl2ZVNoaXAuaG9yaXpvbnRhbFZlcnRpY2FsKSB7XG4gICAgICBmcm9udC5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKC4yNXR1cm4pJztcbiAgICAgIG1pZC5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKC4yNXR1cm4pJztcbiAgICAgIHNoaXBTcXVhcmUuYXBwZW5kKGZyb250KTtcbiAgICAgIGNvbnN0IHNxdWFyZTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgU18ke3BhcnNlSW50KGFycmF5WzFdLCAxMCkgKyAxMH1gKTtcbiAgICAgIHNxdWFyZTEuYXBwZW5kKG1pZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNoaXBTcXVhcmUuYXBwZW5kKGZyb250KTtcbiAgICAgIGNvbnN0IHNxdWFyZTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgU18ke3BhcnNlSW50KGFycmF5WzFdLCAxMCkgKyAxfWApO1xuICAgICAgc3F1YXJlMS5hcHBlbmQobWlkKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoYWN0aXZlU2hpcC5uYW1lID09PSAnY3J1aXNlcicpIHtcbiAgICBjb25zdCBmcm9udCA9IGNyZWF0ZURpdigpO1xuICAgIGZyb250LmNsYXNzTGlzdC5hZGQoJ2Zyb250Jyk7XG4gICAgY29uc3QgbWlkMSA9IGNyZWF0ZURpdigpO1xuICAgIG1pZDEuY2xhc3NMaXN0LmFkZCgnbWlkJyk7XG4gICAgY29uc3QgbWlkMiA9IGNyZWF0ZURpdigpO1xuICAgIG1pZDIuY2xhc3NMaXN0LmFkZCgnbWlkJyk7XG5cbiAgICBpZiAoIWFjdGl2ZVNoaXAuaG9yaXpvbnRhbFZlcnRpY2FsKSB7XG4gICAgICBmcm9udC5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKC4yNXR1cm4pJztcbiAgICAgIG1pZDEuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSguMjV0dXJuKSc7XG4gICAgICBtaWQyLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoLjI1dHVybiknO1xuXG4gICAgICBzaGlwU3F1YXJlLmFwcGVuZChmcm9udCk7XG4gICAgICBjb25zdCBzcXVhcmUxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYFNfJHtwYXJzZUludChhcnJheVsxXSwgMTApICsgMTB9YCk7XG4gICAgICBzcXVhcmUxLmFwcGVuZChtaWQxKTtcbiAgICAgIGNvbnN0IHNxdWFyZTIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgU18ke3BhcnNlSW50KGFycmF5WzFdLCAxMCkgKyAyMH1gKTtcbiAgICAgIHNxdWFyZTIuYXBwZW5kKG1pZDIpO1xuICAgIH0gZWxzZSBpZiAoYWN0aXZlU2hpcC5ob3Jpem9udGFsVmVydGljYWwpIHtcbiAgICAgIHNoaXBTcXVhcmUuYXBwZW5kKGZyb250KTtcbiAgICAgIGNvbnN0IHNxdWFyZTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgU18ke3BhcnNlSW50KGFycmF5WzFdLCAxMCkgKyAxfWApO1xuICAgICAgc3F1YXJlMS5hcHBlbmQobWlkMSk7XG4gICAgICBjb25zdCBzcXVhcmUyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYFNfJHtwYXJzZUludChhcnJheVsxXSwgMTApICsgMn1gKTtcbiAgICAgIHNxdWFyZTIuYXBwZW5kKG1pZDIpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChhY3RpdmVTaGlwLm5hbWUgPT09ICdiYXR0bGVzaGlwJykge1xuICAgIGNvbnN0IGZyb250ID0gY3JlYXRlRGl2KCk7XG4gICAgZnJvbnQuY2xhc3NMaXN0LmFkZCgnZnJvbnQnKTtcbiAgICBjb25zdCBtaWQxID0gY3JlYXRlRGl2KCk7XG4gICAgbWlkMS5jbGFzc0xpc3QuYWRkKCdtaWQnKTtcbiAgICBjb25zdCBtaWQyID0gY3JlYXRlRGl2KCk7XG4gICAgbWlkMi5jbGFzc0xpc3QuYWRkKCdtaWQnKTtcbiAgICBjb25zdCBtaWQzID0gY3JlYXRlRGl2KCk7XG4gICAgbWlkMy5jbGFzc0xpc3QuYWRkKCdtaWQnKTtcblxuICAgIGlmICghYWN0aXZlU2hpcC5ob3Jpem9udGFsVmVydGljYWwpIHtcbiAgICAgIGZyb250LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoLjI1dHVybiknO1xuICAgICAgbWlkMS5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKC4yNXR1cm4pJztcbiAgICAgIG1pZDIuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSguMjV0dXJuKSc7XG4gICAgICBtaWQzLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoLjI1dHVybiknO1xuXG4gICAgICBzaGlwU3F1YXJlLmFwcGVuZChmcm9udCk7XG4gICAgICBjb25zdCBzcXVhcmUxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYFNfJHtwYXJzZUludChhcnJheVsxXSwgMTApICsgMTB9YCk7XG4gICAgICBzcXVhcmUxLmFwcGVuZChtaWQxKTtcbiAgICAgIGNvbnN0IHNxdWFyZTIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgU18ke3BhcnNlSW50KGFycmF5WzFdLCAxMCkgKyAyMH1gKTtcbiAgICAgIHNxdWFyZTIuYXBwZW5kKG1pZDIpO1xuICAgICAgY29uc3Qgc3F1YXJlMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBTXyR7cGFyc2VJbnQoYXJyYXlbMV0sIDEwKSArIDMwfWApO1xuICAgICAgc3F1YXJlMy5hcHBlbmQobWlkMyk7XG4gICAgfSBlbHNlIGlmIChhY3RpdmVTaGlwLmhvcml6b250YWxWZXJ0aWNhbCkge1xuICAgICAgc2hpcFNxdWFyZS5hcHBlbmQoZnJvbnQpO1xuICAgICAgY29uc3Qgc3F1YXJlMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBTXyR7cGFyc2VJbnQoYXJyYXlbMV0sIDEwKSArIDF9YCk7XG4gICAgICBzcXVhcmUxLmFwcGVuZChtaWQxKTtcbiAgICAgIGNvbnN0IHNxdWFyZTIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgU18ke3BhcnNlSW50KGFycmF5WzFdLCAxMCkgKyAyfWApO1xuICAgICAgc3F1YXJlMi5hcHBlbmQobWlkMik7XG4gICAgICBjb25zdCBzcXVhcmUzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYFNfJHtwYXJzZUludChhcnJheVsxXSwgMTApICsgM31gKTtcbiAgICAgIHNxdWFyZTMuYXBwZW5kKG1pZDMpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChhY3RpdmVTaGlwLm5hbWUgPT09ICdjYXJyaWVyJykge1xuICAgIGNvbnN0IGZyb250ID0gY3JlYXRlRGl2KCk7XG4gICAgZnJvbnQuY2xhc3NMaXN0LmFkZCgnZnJvbnQnKTtcbiAgICBjb25zdCBtaWQxID0gY3JlYXRlRGl2KCk7XG4gICAgbWlkMS5jbGFzc0xpc3QuYWRkKCdtaWQnKTtcbiAgICBjb25zdCBtaWQyID0gY3JlYXRlRGl2KCk7XG4gICAgbWlkMi5jbGFzc0xpc3QuYWRkKCdtaWQnKTtcbiAgICBjb25zdCBtaWQzID0gY3JlYXRlRGl2KCk7XG4gICAgbWlkMy5jbGFzc0xpc3QuYWRkKCdtaWQnKTtcbiAgICBjb25zdCBtaWQ0ID0gY3JlYXRlRGl2KCk7XG4gICAgbWlkNC5jbGFzc0xpc3QuYWRkKCdtaWQnKTtcblxuICAgIGlmICghYWN0aXZlU2hpcC5ob3Jpem9udGFsVmVydGljYWwpIHtcbiAgICAgIGZyb250LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoLjI1dHVybiknO1xuICAgICAgbWlkMS5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKC4yNXR1cm4pJztcbiAgICAgIG1pZDIuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSguMjV0dXJuKSc7XG4gICAgICBtaWQzLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoLjI1dHVybiknO1xuICAgICAgbWlkNC5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKC4yNXR1cm4pJztcblxuICAgICAgc2hpcFNxdWFyZS5hcHBlbmQoZnJvbnQpO1xuICAgICAgY29uc3Qgc3F1YXJlMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBTXyR7cGFyc2VJbnQoYXJyYXlbMV0sIDEwKSArIDEwfWApO1xuICAgICAgc3F1YXJlMS5hcHBlbmQobWlkMSk7XG4gICAgICBjb25zdCBzcXVhcmUyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYFNfJHtwYXJzZUludChhcnJheVsxXSwgMTApICsgMjB9YCk7XG4gICAgICBzcXVhcmUyLmFwcGVuZChtaWQyKTtcbiAgICAgIGNvbnN0IHNxdWFyZTMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgU18ke3BhcnNlSW50KGFycmF5WzFdLCAxMCkgKyAzMH1gKTtcbiAgICAgIHNxdWFyZTMuYXBwZW5kKG1pZDMpO1xuICAgICAgY29uc3Qgc3F1YXJlNCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBTXyR7cGFyc2VJbnQoYXJyYXlbMV0sIDEwKSArIDQwfWApO1xuICAgICAgc3F1YXJlNC5hcHBlbmQobWlkNCk7XG4gICAgfSBlbHNlIGlmIChhY3RpdmVTaGlwLmhvcml6b250YWxWZXJ0aWNhbCkge1xuICAgICAgc2hpcFNxdWFyZS5hcHBlbmQoZnJvbnQpO1xuICAgICAgY29uc3Qgc3F1YXJlMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBTXyR7cGFyc2VJbnQoYXJyYXlbMV0sIDEwKSArIDF9YCk7XG4gICAgICBzcXVhcmUxLmFwcGVuZChtaWQxKTtcbiAgICAgIGNvbnN0IHNxdWFyZTIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgU18ke3BhcnNlSW50KGFycmF5WzFdLCAxMCkgKyAyfWApO1xuICAgICAgc3F1YXJlMi5hcHBlbmQobWlkMik7XG4gICAgICBjb25zdCBzcXVhcmUzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYFNfJHtwYXJzZUludChhcnJheVsxXSwgMTApICsgM31gKTtcbiAgICAgIHNxdWFyZTMuYXBwZW5kKG1pZDMpO1xuICAgICAgY29uc3Qgc3F1YXJlNCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBTXyR7cGFyc2VJbnQoYXJyYXlbMV0sIDEwKSArIDR9YCk7XG4gICAgICBzcXVhcmU0LmFwcGVuZChtaWQ0KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcGxhY2VTaGlwKCkge1xuICBjb25zdCBhcnJheSA9IHRoaXMuZ2V0QXR0cmlidXRlKCdpZCcpLnNwbGl0KCdTXycpO1xuICBpZiAoaXNWYWxpZChhcnJheVsxXSkpIHtcbiAgICBjb25zdCBvbGRBY3RpdmVTaGlwID0gcGxheWVyMS5hY3RpdmVTaGlwO1xuICAgIHBsYXllcjEucGxhY2VTaGlwKHBsYXllcjEuZ2FtZUJvYXJkLmdldENvb3JkaW5hdGVGcm9tSW5kZXgoYXJyYXlbMV0pLmNvb3JkaW5hdGUpO1xuICAgIGRyYXdTaGlwVG9TaGlwQm9hcmQob2xkQWN0aXZlU2hpcCwgYXJyYXksIHRoaXMpO1xuICAgIGlmICghY2hlY2tJZlBsYXllck91dG9mU2hpcHMoKSkge1xuICAgICAgY2xlYXJTZWxlY3RlZFNoaXAoKTtcbiAgICAgIHNldE5vU2hpcFNlbGVjdGVkKCk7XG4gICAgICB0b2dnbGVTaGlwc092ZXJsYXlEaXNwbGF5KCdub25lJyk7XG4gICAgICB0b2dnbGVTaGlwQm9hcmRPdmVybGF5KCczJyk7XG4gICAgICBkZWZhdWx0T3JpZW50YXRpb25CdXR0b25Db3B5KCk7XG4gICAgICB0b2dnbGVPcmllbnRhdGlvbkJ1dHRvbkRpc2FibGVkKHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjbGVhclNlbGVjdGVkU2hpcCgpO1xuICAgICAgc2V0Tm9TaGlwU2VsZWN0ZWQoKTtcbiAgICAgIHRvZ2dsZUh1ZE92ZXJsYXlEaXNwbGF5KCdibG9jaycpO1xuICAgICAgYmxvY2tTaGlwQm9hcmQoJzInLCAnMycpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja0Zvcldpbm5lcigpIHtcbiAgaWYgKHBsYXllcjEuc2NvcmUgPT09IDE1KSB7XG4gICAgYmxvY2tTaGlwQm9hcmQoJzEnLCAnMycpO1xuICAgIGNyZWF0ZU1vZGFsKCdNaXNzaW9uIFN1Y2NlZWRlZCEgPGJyPiBQbGF5ZXIgV29uIScpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpcmUoKSB7XG4gIGNvbnN0IGFycmF5ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2lkJykuc3BsaXQoJ01fJyk7XG4gIGlmICghcGxheWVyMS52aXNpdGVkTWFwLmhhcyhgJHthcnJheVsxXX1gKSkge1xuICAgIHBsYXllcjEudmlzaXRlZE1hcC5zZXQoYCR7YXJyYXlbMV19YCwgdHJ1ZSk7XG4gICAgY29uc3QgaW5kZXggPSBwYXJzZUludChhcnJheVsxXSwgMTApO1xuICAgIGFpLnBsYXllci5yZWNlaXZlRmlyZShhaS5wbGF5ZXIuZ2FtZUJvYXJkLmdldENvb3JkaW5hdGVGcm9tSW5kZXgoaW5kZXgpLmNvb3JkaW5hdGUpO1xuICAgIGlmIChhaS5wbGF5ZXIuZ2FtZUJvYXJkLmdldENvb3JkaW5hdGVGcm9tSW5kZXgoaW5kZXgpLmhpdFxuICAmJiBhaS5wbGF5ZXIuZ2FtZUJvYXJkLmdldENvb3JkaW5hdGVGcm9tSW5kZXgoaW5kZXgpLm9jY3VwaWVkKSB7XG4gICAgICB0aGlzLnN0eWxlLmJhY2tncm91bmQgPSAncmdiKDE5NiwgMzYsIDYzKSc7XG4gICAgICB0aGlzLnN0eWxlLmJvcmRlckNvbG9yID0gJ2JsYWNrJztcbiAgICAgIHBsYXllcjEuc2NvcmUrKztcbiAgICAgIGNoZWNrRm9yV2lubmVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3R5bGUuYmFja2dyb3VuZCA9ICd3aGl0ZSc7XG4gICAgfVxuXG4gICAgYWkuZmlyZShwbGF5ZXIxKTtcbiAgfVxufVxuXG5leHBvcnQgeyBwbGFjZVNoaXAsIGZpcmUgfTtcbiIsIiMhL3Vzci9iaW4vZW52IG5vZGVcblxuY29uc3QgUGxheWVyID0gcmVxdWlyZSgnLi9wbGF5ZXInKTtcbmNvbnN0IEdhbWVCb2FyZCA9IHJlcXVpcmUoJy4vZ2FtZUJvYXJkJyk7XG5jb25zdCB7IGNyZWF0ZURpdiwgY3JlYXRlTW9kYWwsIGJsb2NrU2hpcEJvYXJkIH0gPSByZXF1aXJlKCcuLi9yZXVzYWJsZXMvZWxlbWVudHMnKTtcblxuY2xhc3MgQUkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoKTtcbiAgICB0aGlzLm1pc3NsZUJvYXJlZCA9IG5ldyBHYW1lQm9hcmQoKTtcbiAgICB0aGlzLnBsYWNlU2hpcHMoKTtcbiAgICB0aGlzLmxhc3RPY2N1cGllZCA9IG51bGw7XG4gIH1cblxuICBzZWxlY3RTaGlwKG5hbWUpIHtcbiAgICB0aGlzLnBsYXllci5zZWxlY3RTaGlwKG5hbWUpO1xuICB9XG5cbiAgY2hhbmdlT3JpZW50YXRpb24oKSB7XG4gICAgY29uc3QgcmFuZG9tTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gICAgaWYgKHJhbmRvbU51bWJlciA9PT0gMSkgdGhpcy5wbGF5ZXIuY2hhbmdlT3JpZW50YXRpb24oKTtcbiAgfVxuXG4gIGZpbmRWYWxpZENvb3JkaW5hdGVBbmRQbGFjZVNoaXAoKSB7XG4gICAgd2hpbGUgKHRoaXMucGxheWVyLmFjdGl2ZVNoaXAgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJhbmRvbU51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCk7XG4gICAgICBjb25zdCBjb29yZGluYXRlID0gdGhpcy5wbGF5ZXIuZ2FtZUJvYXJkLmdldENvb3JkaW5hdGVGcm9tSW5kZXgocmFuZG9tTnVtYmVyKTtcbiAgICAgIHRoaXMuY2hhbmdlT3JpZW50YXRpb24oKTtcbiAgICAgIHRoaXMucGxheWVyLnBsYWNlU2hpcChjb29yZGluYXRlLmNvb3JkaW5hdGUpO1xuICAgIH1cbiAgfVxuXG4gIHBsYWNlU2hpcHMoKSB7XG4gICAgd2hpbGUgKHRoaXMucGxheWVyLnNoaXBNYXAuc2l6ZSA+IDApIHtcbiAgICAgIGNvbnN0IHJhbmRvbU51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUpO1xuICAgICAgc3dpdGNoIChyYW5kb21OdW1iZXIpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIGlmICh0aGlzLnBsYXllci5kZXN0cm95ZXJDb3VudCA+IDApIHsgdGhpcy5zZWxlY3RTaGlwKCdkZXN0cm95ZXInKTsgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaWYgKHRoaXMucGxheWVyLnN1Ym1hcmluZUNvdW50ID4gMCkgeyB0aGlzLnNlbGVjdFNoaXAoJ3N1Ym1hcmluZScpOyB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIuY3J1aXNlckNvdW50ID4gMCkgeyB0aGlzLnNlbGVjdFNoaXAoJ2NydWlzZXInKTsgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgaWYgKHRoaXMucGxheWVyLmJhdHRsZXNoaXBDb3VudCA+IDApIHsgdGhpcy5zZWxlY3RTaGlwKCdiYXR0bGVzaGlwJyk7IH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIGlmICh0aGlzLnBsYXllci5jYXJyaWVyQ291bnQgPiAwKSB7IHRoaXMuc2VsZWN0U2hpcCgnY2FycmllcicpOyB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICB9XG4gICAgICB0aGlzLmZpbmRWYWxpZENvb3JkaW5hdGVBbmRQbGFjZVNoaXAoKTtcbiAgICB9XG4gIH1cblxuICBhbmFseXplTGFzdE9jY3VwaWVkKHBsYXllciA9IG5ldyBQbGF5ZXIoKSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyLm9jY3VwaWVkU2hpcE1hcC5nZXQodGhpcy5sYXN0T2NjdXBpZWQuc2hpcE5hbWUpLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpbmRleCA9IHBsYXllci5nYW1lQm9hcmQuZ2V0SW5kZXhPZkNvb3JkaW5hdGUoXG4gICAgICAgIHBsYXllci5vY2N1cGllZFNoaXBNYXAuZ2V0KHRoaXMubGFzdE9jY3VwaWVkLnNoaXBOYW1lKVtpXS5jb29yZGluYXRlLFxuICAgICAgKTtcblxuICAgICAgaWYgKCF0aGlzLnBsYXllci52aXNpdGVkTWFwLmhhcyhgJHtpbmRleH1gKSkge1xuICAgICAgICB0aGlzLnBsYXllci52aXNpdGVkTWFwLnNldChgJHtpbmRleH1gLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY3JlYXRlTW9kYWwodGV4dCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnN0IGJnID0gY3JlYXRlRGl2KCk7XG4gICAgYmcuc2V0QXR0cmlidXRlKCdpZCcsICdiZ092ZXJsYXknKTtcblxuICAgIGNvbnN0IG1vZGFsID0gY3JlYXRlRGl2KCk7XG4gICAgbW9kYWwuc2V0QXR0cmlidXRlKCdpZCcsICdtb2RhbCcpO1xuICAgIG1vZGFsLmlubmVySFRNTCA9IHRleHQ7XG4gICAgYmcuYXBwZW5kKG1vZGFsKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kKGJnKTtcbiAgfVxuXG4gIGNoZWNrRm9yV2lubmVyKCkge1xuICAgIGlmICh0aGlzLnBsYXllci5zY29yZSA9PT0gMTUpIHtcbiAgICAgIGJsb2NrU2hpcEJvYXJkKCcxJywgJzMnKTtcbiAgICAgIGNyZWF0ZU1vZGFsKCdNaXNzaW9uIEZhaWxlZC4uLiA8YnI+IEFJIFdvbi4uLicpO1xuICAgIH1cbiAgfVxuXG4gIGZpcmUocGxheWVyID0gbmV3IFBsYXllcigpKSB7XG4gICAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKTtcbiAgICB3aGlsZSAodGhpcy5wbGF5ZXIudmlzaXRlZE1hcC5oYXMoYCR7aW5kZXh9YCkpIHtcbiAgICAgIGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKTtcbiAgICB9XG5cbiAgICBsZXQgYmV0dGVySW5kZXggPSBudWxsO1xuICAgIGlmICh0aGlzLmxhc3RPY2N1cGllZCAhPT0gbnVsbCkgeyBiZXR0ZXJJbmRleCA9IHRoaXMuYW5hbHl6ZUxhc3RPY2N1cGllZChwbGF5ZXIpOyB9XG5cbiAgICBpZiAoYmV0dGVySW5kZXggPT09IG51bGwpIHtcbiAgICAgIHRoaXMubGFzdE9jY3VwaWVkID0gbnVsbDtcbiAgICAgIGNvbnN0IHNoaXBCb2FyZFNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNTXyR7aW5kZXh9YCk7XG4gICAgICB0aGlzLnBsYXllci52aXNpdGVkTWFwLnNldChgJHtpbmRleH1gLCB0cnVlKTtcbiAgICAgIGlmIChwbGF5ZXIuZ2FtZUJvYXJkLmdldENvb3JkaW5hdGVGcm9tSW5kZXgoaW5kZXgpLm9jY3VwaWVkKSB7XG4gICAgICAgIHRoaXMubGFzdE9jY3VwaWVkID0gcGxheWVyLmdhbWVCb2FyZC5nZXRDb29yZGluYXRlRnJvbUluZGV4KGluZGV4KTtcbiAgICAgICAgc2hpcEJvYXJkU3F1YXJlLnN0eWxlLmJhY2tncm91bmQgPSAncmVkJztcbiAgICAgICAgdGhpcy5wbGF5ZXIuc2NvcmUrKztcbiAgICAgICAgdGhpcy5jaGVja0Zvcldpbm5lcigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2hpcEJvYXJkU3F1YXJlLnN0eWxlLmJhY2tncm91bmQgPSAnd2hpdGUnO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzaGlwQm9hcmRTcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjU18ke2JldHRlckluZGV4fWApO1xuICAgICAgdGhpcy5wbGF5ZXIudmlzaXRlZE1hcC5zZXQoYCR7YmV0dGVySW5kZXh9YCwgdHJ1ZSk7XG4gICAgICBpZiAocGxheWVyLmdhbWVCb2FyZC5nZXRDb29yZGluYXRlRnJvbUluZGV4KGJldHRlckluZGV4KS5vY2N1cGllZCkge1xuICAgICAgICB0aGlzLmxhc3RPY2N1cGllZCA9IHBsYXllci5nYW1lQm9hcmQuZ2V0Q29vcmRpbmF0ZUZyb21JbmRleChiZXR0ZXJJbmRleCk7XG4gICAgICAgIHNoaXBCb2FyZFNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kID0gJ3JlZCc7XG4gICAgICAgIHRoaXMucGxheWVyLnNjb3JlKys7XG4gICAgICAgIHRoaXMuY2hlY2tGb3JXaW5uZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBSTtcbiIsImNsYXNzIEJhdHRsZVNoaXAge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBsZW5ndGgpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMuaG9yaXpvbnRhbFZlcnRpY2FsID0gdHJ1ZTtcbiAgfVxuXG4gIGNoYW5nZU9yaWVudGF0aW9uKCkge1xuICAgIHRoaXMuaG9yaXpvbnRhbFZlcnRpY2FsID0gIXRoaXMuaG9yaXpvbnRhbFZlcnRpY2FsO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQmF0dGxlU2hpcDtcbiIsImNsYXNzIENvb3JkaW5hdGUge1xuICBjb25zdHJ1Y3Rvcihjb29yZGluYXRlKSB7XG4gICAgaWYgKHRoaXMuY2hlY2tWYWxpZChjb29yZGluYXRlKSkgeyB0aGlzLmNvb3JkaW5hdGUgPSBjb29yZGluYXRlOyB9IGVsc2UgdGhpcy5jb29yZGluYXRlID0gbnVsbDtcbiAgICB0aGlzLmhpdCA9IGZhbHNlO1xuICAgIHRoaXMub2NjdXBpZWQgPSBmYWxzZTtcbiAgICB0aGlzLmxlbmd0aE51bWJlciA9IDA7XG4gICAgdGhpcy5zaGlwTmFtZSA9ICcnO1xuICAgIHRoaXMuc2hpcEhvcml6b250YWxWZXJ0aWNhbCA9IHRydWU7XG4gICAgdGhpcy5wbGF5ZXIgPSBudWxsO1xuICB9XG5cbiAgY2hlY2tWYWxpZChjb29yZGluYXRlKSB7XG4gICAgaWYgKGNvb3JkaW5hdGVbMF0gPj0gMFxuICAgICAgICAmJiBjb29yZGluYXRlWzBdIDw9IDlcbiAgICAgICAgJiYgY29vcmRpbmF0ZVsxXSA+PSAwXG4gICAgICAgICYmIGNvb3JkaW5hdGVbMV0gPD0gOVxuICAgICkgcmV0dXJuIHRydWU7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBTZXR0ZXJzXG4gIHNldFBsYXllcihwbGF5ZXIpIHtcbiAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcbiAgfVxuXG4gIHNldEhpdChoaXQpIHtcbiAgICB0aGlzLmhpdCA9IGhpdDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvb3JkaW5hdGU7XG4iLCIjIS91c3IvYmluL2VudiBub2RlXG5jb25zdCBDb29yZGluYXRlID0gcmVxdWlyZSgnLi9jb29yZGluYXRlJyk7XG5cbmNsYXNzIEdhbWVCb2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZ2FtZUJvYXJkID0gdGhpcy5jcmVhdGVHYW1lQm9hcmQoKTtcbiAgfVxuXG4gIC8vIEluaXQgRnVuY3Rpb25zXG4gIGNyZWF0ZUdhbWVCb2FyZCgpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdO1xuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgMTA7IHkrKykge1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCAxMDsgeCsrKSB7XG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGUgPSBuZXcgQ29vcmRpbmF0ZShbeCwgeV0pO1xuICAgICAgICBhcnJheS5wdXNoKGNvb3JkaW5hdGUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXk7XG4gIH1cblxuICBpc0Nvb3JkaW5hdGVWYWxpZChjb29yZGluYXRlKSB7XG4gICAgaWYgKGNvb3JkaW5hdGVbMF0gPj0gMFxuICAgICAgJiYgY29vcmRpbmF0ZVswXSA8PSA5XG4gICAgICAmJiBjb29yZGluYXRlWzFdID49IDBcbiAgICAgICYmIGNvb3JkaW5hdGVbMV0gPD0gOVxuICAgICkgcmV0dXJuIHRydWU7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpc0luZGV4VmFsaWQoaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8IHRoaXMuZ2FtZUJvYXJkLmxlbmd0aCkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBnZXRHYW1lQm9hcmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2FtZUJvYXJkO1xuICB9XG5cbiAgZ2V0SW5kZXhPZkNvb3JkaW5hdGUoY29vcmRpbmF0ZSkge1xuICAgIGlmICh0aGlzLmlzQ29vcmRpbmF0ZVZhbGlkKGNvb3JkaW5hdGUpKSB7XG4gICAgICBjb25zdCBmaW5kQ29vcmRpbmF0ZSA9IChlbGVtZW50KSA9PiBgJHtlbGVtZW50LmNvb3JkaW5hdGV9YCA9PT0gYCR7Y29vcmRpbmF0ZX1gO1xuICAgICAgcmV0dXJuIHRoaXMuZ2FtZUJvYXJkLmZpbmRJbmRleChmaW5kQ29vcmRpbmF0ZSk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0Q29vcmRpbmF0ZUZyb21JbmRleChpbmRleCkge1xuICAgIGlmICh0aGlzLmlzSW5kZXhWYWxpZChpbmRleCkpIHsgcmV0dXJuIHRoaXMuZ2FtZUJvYXJkW2luZGV4XTsgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0Q29vcmRpbmF0ZUZyb21Db29yZGluYXRlKGNvb3JkaW5hdGUpIHtcbiAgICBpZiAodGhpcy5pc0Nvb3JkaW5hdGVWYWxpZChjb29yZGluYXRlKSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2FtZUJvYXJkW1xuICAgICAgICB0aGlzLmdldEluZGV4T2ZDb29yZGluYXRlKGNvb3JkaW5hdGUpXTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvLyBTZXR0ZXJzXG4gIHNldEhpdFRydWUoY29vcmRpbmF0ZSkge1xuICAgIGlmICh0aGlzLmlzQ29vcmRpbmF0ZVZhbGlkKGNvb3JkaW5hdGUpKSB7XG4gICAgICB0aGlzLmdhbWVCb2FyZFt0aGlzLmdldEluZGV4T2ZDb29yZGluYXRlKGNvb3JkaW5hdGUpXS5zZXRIaXQodHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgc2V0SGl0RmFsc2UoY29vcmRpbmF0ZSkge1xuICAgIGlmICh0aGlzLmlzQ29vcmRpbmF0ZVZhbGlkKGNvb3JkaW5hdGUpKSB7XG4gICAgICB0aGlzLmdhbWVCb2FyZFt0aGlzLmdldEluZGV4T2ZDb29yZGluYXRlKGNvb3JkaW5hdGUpXS5zZXRIaXQoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIGdldEhpdChjb29yZGluYXRlKSB7XG4gICAgaWYgKHRoaXMuaXNDb29yZGluYXRlVmFsaWQoY29vcmRpbmF0ZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLmdhbWVCb2FyZFtcbiAgICAgICAgdGhpcy5nZXRJbmRleE9mQ29vcmRpbmF0ZShjb29yZGluYXRlKV0uaGl0O1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZUJvYXJkO1xuIiwiY29uc3QgR2FtZUJvYXJkID0gcmVxdWlyZSgnLi9nYW1lQm9hcmQnKTtcbmNvbnN0IEJhdHRsZVNoaXAgPSByZXF1aXJlKCcuL2JhdHRsZXNoaXAnKTtcblxuY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5nYW1lQm9hcmQgPSBuZXcgR2FtZUJvYXJkKCk7XG4gICAgdGhpcy5zaGlwTWFwID0gdGhpcy5jcmVhdGVTaGlwTWFwKCk7XG4gICAgdGhpcy5hY3RpdmVTaGlwID0gbnVsbDtcbiAgICB0aGlzLmRlc3Ryb3llckNvdW50ID0gdGhpcy5zaGlwTWFwLmdldCgnZGVzdHJveWVyJykubGVuZ3RoO1xuICAgIHRoaXMuc3VibWFyaW5lQ291bnQgPSB0aGlzLnNoaXBNYXAuZ2V0KCdzdWJtYXJpbmUnKS5sZW5ndGg7XG4gICAgdGhpcy5jcnVpc2VyQ291bnQgPSB0aGlzLnNoaXBNYXAuZ2V0KCdjcnVpc2VyJykubGVuZ3RoO1xuICAgIHRoaXMuYmF0dGxlc2hpcENvdW50ID0gdGhpcy5zaGlwTWFwLmdldCgnYmF0dGxlc2hpcCcpLmxlbmd0aDtcbiAgICB0aGlzLmNhcnJpZXJDb3VudCA9IHRoaXMuc2hpcE1hcC5nZXQoJ2NhcnJpZXInKS5sZW5ndGg7XG4gICAgdGhpcy5vY2N1cGllZENvb3JkaW5hdGVzID0gW107XG4gICAgdGhpcy5vY2N1cGllZFNoaXBNYXAgPSBuZXcgTWFwKCk7XG4gICAgdGhpcy5zY29yZSA9IDA7XG4gICAgdGhpcy52aXNpdGVkTWFwID0gbmV3IE1hcCgpO1xuICB9XG5cbiAgY3JlYXRlU2hpcE1hcCgpIHtcbiAgICBjb25zdCBtYXAgPSBuZXcgTWFwKCk7XG4gICAgbWFwLnNldCgnZGVzdHJveWVyJywgQXJyYXkoMSkuZmlsbChuZXcgQmF0dGxlU2hpcCgnZGVzdHJveWVyJywgMSkpKTtcbiAgICBtYXAuc2V0KCdzdWJtYXJpbmUnLCBBcnJheSgxKS5maWxsKG5ldyBCYXR0bGVTaGlwKCdzdWJtYXJpbmUnLCAyKSkpO1xuICAgIG1hcC5zZXQoJ2NydWlzZXInLCBBcnJheSgxKS5maWxsKG5ldyBCYXR0bGVTaGlwKCdjcnVpc2VyJywgMykpKTtcbiAgICBtYXAuc2V0KCdiYXR0bGVzaGlwJywgQXJyYXkoMSkuZmlsbChuZXcgQmF0dGxlU2hpcCgnYmF0dGxlc2hpcCcsIDQpKSk7XG4gICAgbWFwLnNldCgnY2FycmllcicsIEFycmF5KDEpLmZpbGwobmV3IEJhdHRsZVNoaXAoJ2NhcnJpZXInLCA1KSkpO1xuICAgIHJldHVybiBtYXA7XG4gIH1cblxuICB1cGRhdGVTaGlwQ291bnRzKGtleSkge1xuICAgIGlmIChrZXkgPT09ICdkZXN0cm95ZXInKSB7XG4gICAgICB0aGlzLmRlc3Ryb3llckNvdW50ID0gdGhpcy5zaGlwTWFwLmdldChrZXkpLmxlbmd0aDtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3N1Ym1hcmluZScpIHtcbiAgICAgIHRoaXMuc3VibWFyaW5lQ291bnQgPSB0aGlzLnNoaXBNYXAuZ2V0KGtleSkubGVuZ3RoO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnY3J1aXNlcicpIHtcbiAgICAgIHRoaXMuY3J1aXNlckNvdW50ID0gdGhpcy5zaGlwTWFwLmdldChrZXkpLmxlbmd0aDtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2JhdHRsZXNoaXAnKSB7XG4gICAgICB0aGlzLmJhdHRsZXNoaXBDb3VudCA9IHRoaXMuc2hpcE1hcC5nZXQoa2V5KS5sZW5ndGg7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdjYXJyaWVyJykge1xuICAgICAgdGhpcy5jYXJyaWVyQ291bnQgPSB0aGlzLnNoaXBNYXAuZ2V0KGtleSkubGVuZ3RoO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrVG9EZWxldGVTaGlwTWFwT2JqZWN0KGtleSkge1xuICAgIGlmICh0aGlzLnNoaXBNYXAuZ2V0KGtleSkubGVuZ3RoID09PSAwKSB7IHRoaXMuc2hpcE1hcC5kZWxldGUoa2V5KTsgfVxuICB9XG5cbiAgc2VsZWN0U2hpcChrZXkpIHtcbiAgICBpZiAodGhpcy5zaGlwTWFwLmhhcyhrZXkpKSB7XG4gICAgICBpZiAodGhpcy5zaGlwTWFwLmdldChrZXkpLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICB0aGlzLmFjdGl2ZVNoaXAgPSB0aGlzLnNoaXBNYXAuZ2V0KGtleSkuc2hpZnQoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTaGlwQ291bnRzKGtleSk7XG4gICAgICB9IGVsc2UgeyB0aGlzLmFjdGl2ZVNoaXAgPSBudWxsOyB9XG4gICAgfVxuICB9XG5cbiAgZGVzZWxlY3RTaGlwKCkge1xuICAgIGNvbnN0IGtleSA9IHRoaXMuYWN0aXZlU2hpcC5uYW1lO1xuICAgIHRoaXMuc2hpcE1hcC5nZXQodGhpcy5hY3RpdmVTaGlwLm5hbWUpLnVuc2hpZnQodGhpcy5hY3RpdmVTaGlwKTtcbiAgICB0aGlzLmFjdGl2ZVNoaXAgPSBudWxsO1xuICAgIHRoaXMudXBkYXRlU2hpcENvdW50cyhrZXkpO1xuICB9XG5cbiAgY2hhbmdlT3JpZW50YXRpb24oKSB7XG4gICAgdGhpcy5hY3RpdmVTaGlwLmhvcml6b250YWxWZXJ0aWNhbCA9ICF0aGlzLmFjdGl2ZVNoaXAuaG9yaXpvbnRhbFZlcnRpY2FsO1xuICB9XG5cbiAgaXNDb29yZGluYXRlVmFsaWQoY29vcmRpbmF0ZSkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nYW1lQm9hcmQuZ2V0SW5kZXhPZkNvb3JkaW5hdGUoY29vcmRpbmF0ZSk7XG5cbiAgICBpZiAodGhpcy5hY3RpdmVTaGlwICE9PSBudWxsXG4gICAgICAmJiB0aGlzLmdhbWVCb2FyZC5nZXRDb29yZGluYXRlRnJvbUNvb3JkaW5hdGUoY29vcmRpbmF0ZSkub2NjdXBpZWQgPT09IGZhbHNlXG4gICAgICAmJiBjb29yZGluYXRlWzBdID49IDBcbiAgICAgICYmIGNvb3JkaW5hdGVbMF0gPD0gOVxuICAgICAgJiYgY29vcmRpbmF0ZVsxXSA+PSAwXG4gICAgICAmJiBjb29yZGluYXRlWzFdIDw9IDkpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZVNoaXAuaG9yaXpvbnRhbFZlcnRpY2FsKSB7XG4gICAgICAgIGlmICgocGFyc2VJbnQoaW5kZXgsIDEwKSAlIDEwID4gOSAmJiB0aGlzLmFjdGl2ZVNoaXAubmFtZSA9PT0gJ2Rlc3Ryb3llcicpXG4gICAgICAgICAgfHwgKHBhcnNlSW50KGluZGV4LCAxMCkgJSAxMCA+IDggJiYgdGhpcy5hY3RpdmVTaGlwLm5hbWUgPT09ICdzdWJtYXJpbmUnKVxuICAgICAgICAgIHx8IChwYXJzZUludChpbmRleCwgMTApICUgMTAgPiA3ICYmIHRoaXMuYWN0aXZlU2hpcC5uYW1lID09PSAnY3J1aXNlcicpXG4gICAgICAgICAgfHwgKHBhcnNlSW50KGluZGV4LCAxMCkgJSAxMCA+IDYgJiYgdGhpcy5hY3RpdmVTaGlwLm5hbWUgPT09ICdiYXR0bGVzaGlwJylcbiAgICAgICAgICB8fCAocGFyc2VJbnQoaW5kZXgsIDEwKSAlIDEwID4gNSAmJiB0aGlzLmFjdGl2ZVNoaXAubmFtZSA9PT0gJ2NhcnJpZXInKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICghdGhpcy5hY3RpdmVTaGlwLmhvcml6b250YWxWZXJ0aWNhbCkge1xuICAgICAgICBpZiAoKGNvb3JkaW5hdGVbMV0gPiA5ICYmIHRoaXMuYWN0aXZlU2hpcC5uYW1lID09PSAnZGVzdHJveWVyJylcbiAgICAgICAgICB8fCAoY29vcmRpbmF0ZVsxXSA+IDggJiYgdGhpcy5hY3RpdmVTaGlwLm5hbWUgPT09ICdzdWJtYXJpbmUnKVxuICAgICAgICAgIHx8IChjb29yZGluYXRlWzFdID4gNyAmJiB0aGlzLmFjdGl2ZVNoaXAubmFtZSA9PT0gJ2NydWlzZXInKVxuICAgICAgICAgIHx8IChjb29yZGluYXRlWzFdID4gNiAmJiB0aGlzLmFjdGl2ZVNoaXAubmFtZSA9PT0gJ2JhdHRsZXNoaXAnKVxuICAgICAgICAgIHx8IChjb29yZGluYXRlWzFdID4gNSAmJiB0aGlzLmFjdGl2ZVNoaXAubmFtZSA9PT0gJ2NhcnJpZXInKVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFjdGl2ZVNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlU2hpcC5ob3Jpem9udGFsVmVydGljYWwpIHtcbiAgICAgICAgICBpZiAodGhpcy5nYW1lQm9hcmQuZ2V0Q29vcmRpbmF0ZUZyb21JbmRleChgJHtwYXJzZUludChpbmRleCwgMTApICsgaX1gKS5vY2N1cGllZCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5hY3RpdmVTaGlwLmhvcml6b250YWxWZXJ0aWNhbCkge1xuICAgICAgICAgIGlmICh0aGlzLmdhbWVCb2FyZC5nZXRDb29yZGluYXRlRnJvbUluZGV4KGAke3BhcnNlSW50KGluZGV4LCAxMCkgKyAoaSAqIDEwKX1gKS5vY2N1cGllZCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSByZXR1cm4gZmFsc2U7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHVwZGF0ZU9jY3VwaWVkQ29vcmRpbmF0ZXMoY29vcmRpbmF0ZUFycmF5KSB7XG4gICAgdGhpcy5vY2N1cGllZENvb3JkaW5hdGVzLnB1c2goY29vcmRpbmF0ZUFycmF5KTtcbiAgICB0aGlzLm9jY3VwaWVkU2hpcE1hcC5zZXQoYCR7dGhpcy5hY3RpdmVTaGlwLm5hbWV9YCwgY29vcmRpbmF0ZUFycmF5KTtcbiAgfVxuXG4gIHBsYWNlU2hpcChjb29yZGluYXRlKSB7XG4gICAgaWYgKHRoaXMuaXNDb29yZGluYXRlVmFsaWQoY29vcmRpbmF0ZSkpIHtcbiAgICAgIGNvbnN0IHRlbXBBcnJheSA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFjdGl2ZVNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbmV3Q29vcmRpbmF0ZSA9ICh0aGlzLmFjdGl2ZVNoaXAuaG9yaXpvbnRhbFZlcnRpY2FsKVxuICAgICAgICAgID8gW2Nvb3JkaW5hdGVbMF0gKyBpLCBjb29yZGluYXRlWzFdXSA6IFtjb29yZGluYXRlWzBdLCBjb29yZGluYXRlWzFdICsgaV07XG5cbiAgICAgICAgdGhpcy5nYW1lQm9hcmQuZ2V0Q29vcmRpbmF0ZUZyb21Db29yZGluYXRlKFxuICAgICAgICAgIG5ld0Nvb3JkaW5hdGUsXG4gICAgICAgICkubGVuZ3RoTnVtYmVyID0gaTtcblxuICAgICAgICB0aGlzLmdhbWVCb2FyZC5nZXRDb29yZGluYXRlRnJvbUNvb3JkaW5hdGUoXG4gICAgICAgICAgbmV3Q29vcmRpbmF0ZSxcbiAgICAgICAgKS5vY2N1cGllZCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5nYW1lQm9hcmQuZ2V0Q29vcmRpbmF0ZUZyb21Db29yZGluYXRlKFxuICAgICAgICAgIG5ld0Nvb3JkaW5hdGUsXG4gICAgICAgICkuc2hpcE5hbWUgPSB0aGlzLmFjdGl2ZVNoaXAubmFtZTtcblxuICAgICAgICB0aGlzLmdhbWVCb2FyZC5nZXRDb29yZGluYXRlRnJvbUNvb3JkaW5hdGUoXG4gICAgICAgICAgbmV3Q29vcmRpbmF0ZSxcbiAgICAgICAgKS5zaGlwSG9yaXpvbnRhbFZlcnRpY2FsID0gdGhpcy5hY3RpdmVTaGlwLmhvcml6b250YWxWZXJ0aWNhbDtcblxuICAgICAgICB0ZW1wQXJyYXkucHVzaCh0aGlzLmdhbWVCb2FyZC5nZXRDb29yZGluYXRlRnJvbUNvb3JkaW5hdGUoXG4gICAgICAgICAgbmV3Q29vcmRpbmF0ZSxcbiAgICAgICAgKSk7XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZU9jY3VwaWVkQ29vcmRpbmF0ZXModGVtcEFycmF5KTtcbiAgICAgIHRoaXMuY2hlY2tUb0RlbGV0ZVNoaXBNYXBPYmplY3QodGhpcy5hY3RpdmVTaGlwLm5hbWUpO1xuICAgICAgdGhpcy5hY3RpdmVTaGlwID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICByZWNlaXZlRmlyZShjb29yZGluYXRlKSB7XG4gICAgY29uc3QgdGVtcENvb3JkaW5hdGUgPSB0aGlzLmdhbWVCb2FyZC5nZXRDb29yZGluYXRlRnJvbUNvb3JkaW5hdGUoY29vcmRpbmF0ZSk7XG5cbiAgICBpZiAodGVtcENvb3JkaW5hdGUub2NjdXBpZWQgPT09IHRydWUpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5vY2N1cGllZENvb3JkaW5hdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5vY2N1cGllZENvb3JkaW5hdGVzW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgaWYgKHRlbXBDb29yZGluYXRlLmNvb3JkaW5hdGUgPT09IHRoaXMub2NjdXBpZWRDb29yZGluYXRlc1tpXVtqXS5jb29yZGluYXRlKSB7XG4gICAgICAgICAgICB0aGlzLm9jY3VwaWVkQ29vcmRpbmF0ZXNbaV1bal0uaGl0ID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5nYW1lQm9hcmQuZ2V0Q29vcmRpbmF0ZUZyb21Db29yZGluYXRlKGNvb3JkaW5hdGUpLmhpdCA9IHRydWU7XG4gIH1cblxuICBjaGVja1BsYXllckxvc3QoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm9jY3VwaWVkQ29vcmRpbmF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5vY2N1cGllZENvb3JkaW5hdGVzW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmICh0aGlzLm9jY3VwaWVkQ29vcmRpbmF0ZXNbaV1bal0uaGl0ID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGxheWVyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi4vaGVhZC9oZWFkJztcbmltcG9ydCAnLi4vc3R5bGUvc3R5bGUuY3NzJztcbmltcG9ydCAnLi4vZ3JpZC9ncmlkJztcbmltcG9ydCAnLi4vbmF2L25hdkNvbnRlbnQnO1xuaW1wb3J0ICcuLi9zaGlwQm9hcmQvc2hpcEJvYXJkQ29udGVudCc7XG5pbXBvcnQgJy4uL2h1ZC9odWRDb250ZW50JztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==