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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'Lato';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n@font-face {\n    font-family: 'LatoBold';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n* {\n    padding: 0px;\n    margin: 0px;\n    font-family: 'Lato';\n    color: white;\n}\n\nh1{\n    font-family: 'LatoBold';\n}\n\n:root{\n    background: rgb(36, 41, 46);\n}\n\n.material-symbols-outlined {\n    font-family: 'Material Symbols Outlined';\n    font-weight: normal;\n    font-style: normal;\n    font-size: 50px;\n    /* Preferred icon size */\n    display: inline-block;\n    line-height: 1;\n    text-transform: none;\n    letter-spacing: normal;\n    word-wrap: normal;\n    white-space: nowrap;\n    direction: ltr;\n}\n\n#bgOverlay{\n    display: flex;\n    position: fixed; /* Stay in place */\n    background: rgba(0, 0, 0, .7);\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    grid-row-start: 1;\n    grid-row-end: 3;\n    grid-column-start: 1;\n    grid-column-end: 3;\n}\n\n#modal{\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center center;\n    place-items: center center;\n    background-color: rgb(36, 41, 46);\n    margin: 15% auto; /* 15% from the top and centered */\n    padding: 20px;\n    border: 1px solid #888;\n    border-radius: 10px;\n    width: 80%; /* Could be more or less, depending on screen size */\n}\n\n#content {\n    display: grid;\n    grid-template-columns: 3fr 1fr;\n    grid-template-rows: 1fr 7fr;\n    background: black;\n    grid-template-areas:\n        'nav nav'\n        'shipBoard hud'\n    ;\n    min-width: 100vw;\n    min-height: 100vh;\n    background: rgb(36, 41, 46);\n}\n\n#nav {\n    grid-area: nav;\n    background: rgb(29\t31\t34);\n    display: flex;\n    flex-flow: row wrap;\n    place-content: center center;\n    place-items: center center;\n    gap: 20px;\n}\n\n#shipBoard {\n    grid-area: shipBoard;\n    background: rgb(37\t41\t46);\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-row: 1fr 1fr;\n    grid-template-areas:\n        'missileGridContainer'\n        'shipGridContainer'\n    ;\n}\n\n#shipBoardOverlay {\n    grid-row-start: 1;\n    grid-row-end: 3;\n    grid-column-start: 1;\n    grid-column-end: 1;\n    display: block;\n    width: 100%;\n    height: 100%;\n    background: rgba(81, 131, 248, .5);\n    z-index: 1;\n}\n\n.boardContainer {\n    display: flex;\n    background: rgb(31, 33, 37);;\n    place-content: flex-start flex-start;\n    place-items: flex-start flex-start;\n    flex-flow: row wrap;\n    min-width: 340px;\n    min-height: 340px;\n    max-width: 340px;\n    max-height: 340px;\n}\n\n.boardSquare {\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center center;\n    place-items: center center;\n    width: 32px;\n    height: 32px;\n    background: rgb(52, 122, 182);\n    border: 1px solid rgb(196, 41, 106);\n    transition: 0.75s all;\n    border-radius: 5px;\n}\n\n.boardSquare:hover {\n    transform: scale(1.1);\n    background: rgba(234, 255, 0, .75);\n\n}\n\n#missileGridContainer {\n    grid-area: missileGridContainer;\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center center;\n    place-items: center center;\n    padding: 5px;\n    z-index: 0;\n}\n\n#shipGridContainer {\n    grid-area: shipGridContainer;\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center center;\n    place-items: center center;\n    padding: 5px;\n    z-index: 0;\n}\n\n.front {\n    width: 28px;\n    height: 28px;\n    border-top-left-radius: 50%;\n    border-bottom-left-radius: 50%;\n    border-top-right-radius: 30%;\n    border-bottom-right-radius: 30%;\n    background-color: rgb(196, 41, 106);\n}\n\n.mid {\n    width: 28px;\n    height: 28px;\n    border-top-left-radius: 22%;\n    border-bottom-left-radius: 22%;\n    border-top-right-radius: 22%;\n    border-bottom-right-radius: 22%;\n    background-color: rgb(196, 41, 106);\n}\n\n#hud {\n    grid-area: hud;\n    background: rgb(36, 41, 46);\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 2fr 2fr;\n    grid-template-areas:\n        'orientationButtonContainer'\n        'shipsContainer'\n        'selectedShipContainer'\n    ;\n    gap: 20px;\n}\n\n#hudOverlay{\n    grid-row-start: 1;\n    grid-row-end: 4;\n    grid-column-start: 1;\n    grid-column-end: 1;\n    display: none;\n    width: 100%;\n    height: 100%;\n    background: rgba(81, 131, 248, .5);\n    z-index: 1;\n}\n\n#shipsOverlay {\n    grid-row-start: 2;\n    grid-row-end: 3;\n    grid-column-start: 1;\n    grid-column-end: 1;\n    display: none;\n    width: 100%;\n    height: 100%;\n    background: rgba(81, 131, 248, .5);\n    border-radius: 5px;\n    z-index: 1;\n}\n\n#shipsContainer {\n    grid-area: shipsContainer;\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center center;\n    place-items: center center;\n}\n\n#ships {\n    display: flex;\n    background: rgb(18, 19, 22);\n    place-content: center center;\n    place-items: center center;\n    flex-flow: column nowrap;\n    min-height: 25%;\n    border-radius: 5px;\n}\n\n#destroyer,\n#selected_destroyer {\n    display: flex;\n    place-content: center flex-start;\n    place-items: center flex-start;\n    width: 32px;\n    height: 32px;\n    background: rgb(18, 19, 22);\n    border: 1px solid transparent;\n}\n\n.destroyerIcon {\n    width: 30px;\n    height: 30px;\n    border-top-left-radius: 50%;\n    border-bottom-left-radius: 50%;\n    border-top-right-radius: 30%;\n    border-bottom-right-radius: 30%;\n    background-color: rgb(196, 41, 106);\n}\n\n#submarine,\n#selected_submarine {\n    display: flex;\n    place-content: center center;\n    place-items: center center;\n    flex-flow: row wrap;\n    width: 64px;\n    height: 32px;\n    background: rgb(18, 19, 22);\n    border: 1px solid transparent;\n}\n\n.submarineIcon {\n    width: 60px;\n    height: 30px;\n    border-top-left-radius: 50%;\n    border-bottom-left-radius: 50%;\n    border-top-right-radius: 25%;\n    border-bottom-right-radius: 25%;\n    background-color: rgb(196, 41, 106);\n}\n\n#cruiser,\n#selected_cruiser {\n    display: flex;\n    place-content: center center;\n    place-items: center center;\n    flex-flow: row wrap;\n    width: 96px;\n    height: 32px;\n    background: rgb(18, 19, 22);\n    border: 1px solid transparent;\n}\n\n.cruiserIcon {\n    width: 94px;\n    height: 30px;\n    border-top-left-radius: 50%;\n    border-bottom-left-radius: 50%;\n    border-top-right-radius: 25%;\n    border-bottom-right-radius: 25%;\n    background-color: rgb(196, 41, 106);\n}\n\n#battleship,\n#selected_battleship {\n    display: flex;\n    place-content: center center;\n    place-items: center center;\n    flex-flow: row wrap;\n    width: 128px;\n    height: 32px;\n    background: rgb(18,\t19,\t22);\n    border: 1px solid transparent;\n}\n\n.battleshipIcon {\n    width: 126px;\n    height: 30px;\n    border-top-left-radius: 50%;\n    border-bottom-left-radius: 50%;\n    border-top-right-radius: 25%;\n    border-bottom-right-radius: 25%;\n    background-color: rgb(196, 41, 106);\n}\n\n#carrier,\n#selected_carrier {\n    display: flex;\n    place-content: center center;\n    place-items: center center;\n    flex-flow: row wrap;\n    width: 160px;\n    height: 32px;\n    background: rgb(18,\t19,\t22);\n    border: 1px solid transparent;\n}\n\n.carrierIcon {\n    width: 158px;\n    height: 30px;\n    border-top-left-radius: 50%;\n    border-bottom-left-radius: 50%;\n    border-top-right-radius: 25%;\n    border-bottom-right-radius: 25%;\n    background-color: rgb(196, 41, 106);\n}\n\n#orientationButtonContainer {\n    grid-area: orientationButtonContainer;\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center center;\n    place-items: center center;\n}\n\n#orientationButton {\n    display: flex;\n    width: 160px;\n    height: 32px;\n}\n\nbutton {\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center center;\n    place-items: center center;\n    background: rgb(181, 17, 87);\n    outline-style: none;\n    border: 0px;\n    border-radius: 5px;\n    transition: .75s;\n}\n\nbutton:hover{\n    background: rgb(75,\t162,\t198);\n    box-shadow: 2px 2px 7px 4px rgb(0, 145, 200, 0.5);\n    outline-style: none;\n    border: 0px;\n    border-radius: 5px;\n    color: black;\n}\n\n#selectedShipContainer {\n    grid-area: selectedShipContainer;\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center center;\n    place-items: center center;\n}\n\n#selected_ShipContainer {\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center center;\n    place-items: center center;\n    gap: 70px;\n}\n\n#selectedShip {\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center flex-start;\n    place-items: center flex-start;\n    background: rgb(18, 19, 22);\n    border-radius: 5px;\n    width: 200px;\n    height: 200px;\n}", "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'Lato';\n    src: url('../resources/fonts/Lato/Lato-Light.ttf');\n}\n@font-face {\n    font-family: 'LatoBold';\n    src: url('../resources/fonts/Lato/Lato-Bold.ttf');\n}\n\n* {\n    padding: 0px;\n    margin: 0px;\n    font-family: 'Lato';\n    color: white;\n}\n\nh1{\n    font-family: 'LatoBold';\n}\n\n:root{\n    background: rgb(36, 41, 46);\n}\n\n.material-symbols-outlined {\n    font-family: 'Material Symbols Outlined';\n    font-weight: normal;\n    font-style: normal;\n    font-size: 50px;\n    /* Preferred icon size */\n    display: inline-block;\n    line-height: 1;\n    text-transform: none;\n    letter-spacing: normal;\n    word-wrap: normal;\n    white-space: nowrap;\n    direction: ltr;\n}\n\n#bgOverlay{\n    display: flex;\n    position: fixed; /* Stay in place */\n    background: rgba(0, 0, 0, .7);\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    grid-row-start: 1;\n    grid-row-end: 3;\n    grid-column-start: 1;\n    grid-column-end: 3;\n}\n\n#modal{\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center center;\n    place-items: center center;\n    background-color: rgb(36, 41, 46);\n    margin: 15% auto; /* 15% from the top and centered */\n    padding: 20px;\n    border: 1px solid #888;\n    border-radius: 10px;\n    width: 80%; /* Could be more or less, depending on screen size */\n}\n\n#content {\n    display: grid;\n    grid-template-columns: 3fr 1fr;\n    grid-template-rows: 1fr 7fr;\n    background: black;\n    grid-template-areas:\n        'nav nav'\n        'shipBoard hud'\n    ;\n    min-width: 100vw;\n    min-height: 100vh;\n    background: rgb(36, 41, 46);\n}\n\n#nav {\n    grid-area: nav;\n    background: rgb(29\t31\t34);\n    display: flex;\n    flex-flow: row wrap;\n    place-content: center center;\n    place-items: center center;\n    gap: 20px;\n}\n\n#shipBoard {\n    grid-area: shipBoard;\n    background: rgb(37\t41\t46);\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-row: 1fr 1fr;\n    grid-template-areas:\n        'missileGridContainer'\n        'shipGridContainer'\n    ;\n}\n\n#shipBoardOverlay {\n    grid-row-start: 1;\n    grid-row-end: 3;\n    grid-column-start: 1;\n    grid-column-end: 1;\n    display: block;\n    width: 100%;\n    height: 100%;\n    background: rgba(81, 131, 248, .5);\n    z-index: 1;\n}\n\n.boardContainer {\n    display: flex;\n    background: rgb(31, 33, 37);;\n    place-content: flex-start flex-start;\n    place-items: flex-start flex-start;\n    flex-flow: row wrap;\n    min-width: 340px;\n    min-height: 340px;\n    max-width: 340px;\n    max-height: 340px;\n}\n\n.boardSquare {\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center center;\n    place-items: center center;\n    width: 32px;\n    height: 32px;\n    background: rgb(52, 122, 182);\n    border: 1px solid rgb(196, 41, 106);\n    transition: 0.75s all;\n    border-radius: 5px;\n}\n\n.boardSquare:hover {\n    transform: scale(1.1);\n    background: rgba(234, 255, 0, .75);\n\n}\n\n#missileGridContainer {\n    grid-area: missileGridContainer;\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center center;\n    place-items: center center;\n    padding: 5px;\n    z-index: 0;\n}\n\n#shipGridContainer {\n    grid-area: shipGridContainer;\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center center;\n    place-items: center center;\n    padding: 5px;\n    z-index: 0;\n}\n\n.front {\n    width: 28px;\n    height: 28px;\n    border-top-left-radius: 50%;\n    border-bottom-left-radius: 50%;\n    border-top-right-radius: 30%;\n    border-bottom-right-radius: 30%;\n    background-color: rgb(196, 41, 106);\n}\n\n.mid {\n    width: 28px;\n    height: 28px;\n    border-top-left-radius: 22%;\n    border-bottom-left-radius: 22%;\n    border-top-right-radius: 22%;\n    border-bottom-right-radius: 22%;\n    background-color: rgb(196, 41, 106);\n}\n\n#hud {\n    grid-area: hud;\n    background: rgb(36, 41, 46);\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 2fr 2fr;\n    grid-template-areas:\n        'orientationButtonContainer'\n        'shipsContainer'\n        'selectedShipContainer'\n    ;\n    gap: 20px;\n}\n\n#hudOverlay{\n    grid-row-start: 1;\n    grid-row-end: 4;\n    grid-column-start: 1;\n    grid-column-end: 1;\n    display: none;\n    width: 100%;\n    height: 100%;\n    background: rgba(81, 131, 248, .5);\n    z-index: 1;\n}\n\n#shipsOverlay {\n    grid-row-start: 2;\n    grid-row-end: 3;\n    grid-column-start: 1;\n    grid-column-end: 1;\n    display: none;\n    width: 100%;\n    height: 100%;\n    background: rgba(81, 131, 248, .5);\n    border-radius: 5px;\n    z-index: 1;\n}\n\n#shipsContainer {\n    grid-area: shipsContainer;\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center center;\n    place-items: center center;\n}\n\n#ships {\n    display: flex;\n    background: rgb(18, 19, 22);\n    place-content: center center;\n    place-items: center center;\n    flex-flow: column nowrap;\n    min-height: 25%;\n    border-radius: 5px;\n}\n\n#destroyer,\n#selected_destroyer {\n    display: flex;\n    place-content: center flex-start;\n    place-items: center flex-start;\n    width: 32px;\n    height: 32px;\n    background: rgb(18, 19, 22);\n    border: 1px solid transparent;\n}\n\n.destroyerIcon {\n    width: 30px;\n    height: 30px;\n    border-top-left-radius: 50%;\n    border-bottom-left-radius: 50%;\n    border-top-right-radius: 30%;\n    border-bottom-right-radius: 30%;\n    background-color: rgb(196, 41, 106);\n}\n\n#submarine,\n#selected_submarine {\n    display: flex;\n    place-content: center center;\n    place-items: center center;\n    flex-flow: row wrap;\n    width: 64px;\n    height: 32px;\n    background: rgb(18, 19, 22);\n    border: 1px solid transparent;\n}\n\n.submarineIcon {\n    width: 60px;\n    height: 30px;\n    border-top-left-radius: 50%;\n    border-bottom-left-radius: 50%;\n    border-top-right-radius: 25%;\n    border-bottom-right-radius: 25%;\n    background-color: rgb(196, 41, 106);\n}\n\n#cruiser,\n#selected_cruiser {\n    display: flex;\n    place-content: center center;\n    place-items: center center;\n    flex-flow: row wrap;\n    width: 96px;\n    height: 32px;\n    background: rgb(18, 19, 22);\n    border: 1px solid transparent;\n}\n\n.cruiserIcon {\n    width: 94px;\n    height: 30px;\n    border-top-left-radius: 50%;\n    border-bottom-left-radius: 50%;\n    border-top-right-radius: 25%;\n    border-bottom-right-radius: 25%;\n    background-color: rgb(196, 41, 106);\n}\n\n#battleship,\n#selected_battleship {\n    display: flex;\n    place-content: center center;\n    place-items: center center;\n    flex-flow: row wrap;\n    width: 128px;\n    height: 32px;\n    background: rgb(18,\t19,\t22);\n    border: 1px solid transparent;\n}\n\n.battleshipIcon {\n    width: 126px;\n    height: 30px;\n    border-top-left-radius: 50%;\n    border-bottom-left-radius: 50%;\n    border-top-right-radius: 25%;\n    border-bottom-right-radius: 25%;\n    background-color: rgb(196, 41, 106);\n}\n\n#carrier,\n#selected_carrier {\n    display: flex;\n    place-content: center center;\n    place-items: center center;\n    flex-flow: row wrap;\n    width: 160px;\n    height: 32px;\n    background: rgb(18,\t19,\t22);\n    border: 1px solid transparent;\n}\n\n.carrierIcon {\n    width: 158px;\n    height: 30px;\n    border-top-left-radius: 50%;\n    border-bottom-left-radius: 50%;\n    border-top-right-radius: 25%;\n    border-bottom-right-radius: 25%;\n    background-color: rgb(196, 41, 106);\n}\n\n#orientationButtonContainer {\n    grid-area: orientationButtonContainer;\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center center;\n    place-items: center center;\n}\n\n#orientationButton {\n    display: flex;\n    width: 160px;\n    height: 32px;\n}\n\nbutton {\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center center;\n    place-items: center center;\n    background: rgb(181, 17, 87);\n    outline-style: none;\n    border: 0px;\n    border-radius: 5px;\n    transition: .75s;\n}\n\nbutton:hover{\n    background: rgb(75,\t162,\t198);\n    box-shadow: 2px 2px 7px 4px rgb(0, 145, 200, 0.5);\n    outline-style: none;\n    border: 0px;\n    border-radius: 5px;\n    color: black;\n}\n\n#selectedShipContainer {\n    grid-area: selectedShipContainer;\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center center;\n    place-items: center center;\n}\n\n#selected_ShipContainer {\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center center;\n    place-items: center center;\n    gap: 70px;\n}\n\n#selectedShip {\n    display: flex;\n    flex-flow: column wrap;\n    place-content: center flex-start;\n    place-items: center flex-start;\n    background: rgb(18, 19, 22);\n    border-radius: 5px;\n    width: 200px;\n    height: 200px;\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/style.css */ "./src/style/style.css");
/* harmony import */ var _grid_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../grid/grid */ "./src/grid/grid.js");
/* harmony import */ var _nav_navContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nav/navContent */ "./src/nav/navContent.js");
/* harmony import */ var _shipBoard_shipBoardContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shipBoard/shipBoardContent */ "./src/shipBoard/shipBoardContent.js");
/* harmony import */ var _hud_hudContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hud/hudContent */ "./src/hud/hudContent.js");






})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLHNCQUFzQixhQUFhLHFCQUFxQixXQUFXLFVBQVUsb0JBQW9CLHVCQUF1QixhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEseUJBQXlCLFdBQVcsWUFBWSxhQUFhLHVCQUF1QixPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxRQUFRLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxRQUFRLEtBQUssTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxjQUFjLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsU0FBUyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FB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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTRCO0FBQ047QUFDSztBQUNZO0FBQ1oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0X2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUvc3R5bGUuY3NzIiwid2VicGFjazovL3Byb2plY3RfYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUvc3R5bGUuY3NzP2M5ZjAiLCJ3ZWJwYWNrOi8vcHJvamVjdF9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Byb2plY3RfYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Byb2plY3RfYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS9nYW1lTG9naWMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF9iYXR0bGVzaGlwLy4vc3JjL2dyaWQvZ3JpZC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X2JhdHRsZXNoaXAvLi9zcmMvaHVkL2h1ZENvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF9iYXR0bGVzaGlwLy4vc3JjL2h1ZC9odWRMb2dpYy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X2JhdHRsZXNoaXAvLi9zcmMvbmF2L25hdkNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF9iYXR0bGVzaGlwLy4vc3JjL3JldXNhYmxlcy9lbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X2JhdHRsZXNoaXAvLi9zcmMvcmV1c2FibGVzL2dyaWRJdGVtcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X2JhdHRsZXNoaXAvLi9zcmMvc2hpcEJvYXJkL3NoaXBCb2FyZENvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF9iYXR0bGVzaGlwLy4vc3JjL3NoaXBCb2FyZC9zaGlwQm9hcmRMb2dpYy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X2JhdHRsZXNoaXAvLi9zcmMvdGVzdC9haS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X2JhdHRsZXNoaXAvLi9zcmMvdGVzdC9iYXR0bGVzaGlwLmpzIiwid2VicGFjazovL3Byb2plY3RfYmF0dGxlc2hpcC8uL3NyYy90ZXN0L2Nvb3JkaW5hdGUuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF9iYXR0bGVzaGlwLy4vc3JjL3Rlc3QvZ2FtZUJvYXJkLmpzIiwid2VicGFjazovL3Byb2plY3RfYmF0dGxlc2hpcC8uL3NyYy90ZXN0L3BsYXllci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdF9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Byb2plY3RfYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdF9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcHJvamVjdF9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdF9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdF9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Byb2plY3RfYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9wcm9qZWN0X2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Byb2plY3RfYmF0dGxlc2hpcC8uL3NyYy9pbmRleC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vcmVzb3VyY2VzL2ZvbnRzL0xhdG8vTGF0by1MaWdodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9yZXNvdXJjZXMvZm9udHMvTGF0by9MYXRvLUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0xhdG9Cb2xkJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG4qIHtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5oMXtcXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvQm9sZCc7XFxufVxcblxcbjpyb290e1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMzYsIDQxLCA0Nik7XFxufVxcblxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXG4gICAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBTeW1ib2xzIE91dGxpbmVkJztcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxuICAgIC8qIFByZWZlcnJlZCBpY29uIHNpemUgKi9cXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxuICAgIHdvcmQtd3JhcDogbm9ybWFsO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBkaXJlY3Rpb246IGx0cjtcXG59XFxuXFxuI2JnT3ZlcmxheXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjcpO1xcbiAgICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcbiAgICBncmlkLXJvdy1zdGFydDogMTtcXG4gICAgZ3JpZC1yb3ctZW5kOiAzO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbn1cXG5cXG4jbW9kYWx7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXIgY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzYsIDQxLCA0Nik7XFxuICAgIG1hcmdpbjogMTUlIGF1dG87IC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHdpZHRoOiA4MCU7IC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA3ZnI7XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgJ25hdiBuYXYnXFxuICAgICAgICAnc2hpcEJvYXJkIGh1ZCdcXG4gICAgO1xcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDM2LCA0MSwgNDYpO1xcbn1cXG5cXG4jbmF2IHtcXG4gICAgZ3JpZC1hcmVhOiBuYXY7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyOVxcdDMxXFx0MzQpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyIGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4jc2hpcEJvYXJkIHtcXG4gICAgZ3JpZC1hcmVhOiBzaGlwQm9hcmQ7XFxuICAgIGJhY2tncm91bmQ6IHJnYigzN1xcdDQxXFx0NDYpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC1yb3c6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICAnbWlzc2lsZUdyaWRDb250YWluZXInXFxuICAgICAgICAnc2hpcEdyaWRDb250YWluZXInXFxuICAgIDtcXG59XFxuXFxuI3NoaXBCb2FyZE92ZXJsYXkge1xcbiAgICBncmlkLXJvdy1zdGFydDogMTtcXG4gICAgZ3JpZC1yb3ctZW5kOiAzO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAxO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSg4MSwgMTMxLCAyNDgsIC41KTtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLmJvYXJkQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDMxLCAzMywgMzcpOztcXG4gICAgcGxhY2UtY29udGVudDogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcbiAgICBwbGFjZS1pdGVtczogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAgICBtaW4td2lkdGg6IDM0MHB4O1xcbiAgICBtaW4taGVpZ2h0OiAzNDBweDtcXG4gICAgbWF4LXdpZHRoOiAzNDBweDtcXG4gICAgbWF4LWhlaWdodDogMzQwcHg7XFxufVxcblxcbi5ib2FyZFNxdWFyZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXIgY2VudGVyO1xcbiAgICB3aWR0aDogMzJweDtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNTIsIDEyMiwgMTgyKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE5NiwgNDEsIDEwNik7XFxuICAgIHRyYW5zaXRpb246IDAuNzVzIGFsbDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uYm9hcmRTcXVhcmU6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjM0LCAyNTUsIDAsIC43NSk7XFxuXFxufVxcblxcbiNtaXNzaWxlR3JpZENvbnRhaW5lciB7XFxuICAgIGdyaWQtYXJlYTogbWlzc2lsZUdyaWRDb250YWluZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXIgY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHotaW5kZXg6IDA7XFxufVxcblxcbiNzaGlwR3JpZENvbnRhaW5lciB7XFxuICAgIGdyaWQtYXJlYTogc2hpcEdyaWRDb250YWluZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXIgY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHotaW5kZXg6IDA7XFxufVxcblxcbi5mcm9udCB7XFxuICAgIHdpZHRoOiAyOHB4O1xcbiAgICBoZWlnaHQ6IDI4cHg7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTAlO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzAlO1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMzAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk2LCA0MSwgMTA2KTtcXG59XFxuXFxuLm1pZCB7XFxuICAgIHdpZHRoOiAyOHB4O1xcbiAgICBoZWlnaHQ6IDI4cHg7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIyJTtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjIlO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjIlO1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjIlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk2LCA0MSwgMTA2KTtcXG59XFxuXFxuI2h1ZCB7XFxuICAgIGdyaWQtYXJlYTogaHVkO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMzYsIDQxLCA0Nik7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgMmZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgJ29yaWVudGF0aW9uQnV0dG9uQ29udGFpbmVyJ1xcbiAgICAgICAgJ3NoaXBzQ29udGFpbmVyJ1xcbiAgICAgICAgJ3NlbGVjdGVkU2hpcENvbnRhaW5lcidcXG4gICAgO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbiNodWRPdmVybGF5e1xcbiAgICBncmlkLXJvdy1zdGFydDogMTtcXG4gICAgZ3JpZC1yb3ctZW5kOiA0O1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAxO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDgxLCAxMzEsIDI0OCwgLjUpO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4jc2hpcHNPdmVybGF5IHtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICAgIGdyaWQtcm93LWVuZDogMztcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSg4MSwgMTMxLCAyNDgsIC41KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4jc2hpcHNDb250YWluZXIge1xcbiAgICBncmlkLWFyZWE6IHNoaXBzQ29udGFpbmVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyIGNlbnRlcjtcXG59XFxuXFxuI3NoaXBzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDE4LCAxOSwgMjIpO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyIGNlbnRlcjtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBtaW4taGVpZ2h0OiAyNSU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuI2Rlc3Ryb3llcixcXG4jc2VsZWN0ZWRfZGVzdHJveWVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGZsZXgtc3RhcnQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXIgZmxleC1zdGFydDtcXG4gICAgd2lkdGg6IDMycHg7XFxuICAgIGhlaWdodDogMzJweDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDE4LCAxOSwgMjIpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmRlc3Ryb3llckljb24ge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwJTtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDMwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NiwgNDEsIDEwNik7XFxufVxcblxcbiNzdWJtYXJpbmUsXFxuI3NlbGVjdGVkX3N1Ym1hcmluZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXIgY2VudGVyO1xcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAgICB3aWR0aDogNjRweDtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTgsIDE5LCAyMik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uc3VibWFyaW5lSWNvbiB7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTAlO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjUlO1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk2LCA0MSwgMTA2KTtcXG59XFxuXFxuI2NydWlzZXIsXFxuI3NlbGVjdGVkX2NydWlzZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyIGNlbnRlcjtcXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gICAgd2lkdGg6IDk2cHg7XFxuICAgIGhlaWdodDogMzJweDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDE4LCAxOSwgMjIpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmNydWlzZXJJY29uIHtcXG4gICAgd2lkdGg6IDk0cHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTAlO1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNSU7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyNSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTYsIDQxLCAxMDYpO1xcbn1cXG5cXG4jYmF0dGxlc2hpcCxcXG4jc2VsZWN0ZWRfYmF0dGxlc2hpcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXIgY2VudGVyO1xcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAgICB3aWR0aDogMTI4cHg7XFxuICAgIGhlaWdodDogMzJweDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDE4LFxcdDE5LFxcdDIyKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5iYXR0bGVzaGlwSWNvbiB7XFxuICAgIHdpZHRoOiAxMjZweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1JTtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDI1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NiwgNDEsIDEwNik7XFxufVxcblxcbiNjYXJyaWVyLFxcbiNzZWxlY3RlZF9jYXJyaWVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlciBjZW50ZXI7XFxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICAgIHdpZHRoOiAxNjBweDtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTgsXFx0MTksXFx0MjIpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmNhcnJpZXJJY29uIHtcXG4gICAgd2lkdGg6IDE1OHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTAlO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjUlO1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk2LCA0MSwgMTA2KTtcXG59XFxuXFxuI29yaWVudGF0aW9uQnV0dG9uQ29udGFpbmVyIHtcXG4gICAgZ3JpZC1hcmVhOiBvcmllbnRhdGlvbkJ1dHRvbkNvbnRhaW5lcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlciBjZW50ZXI7XFxufVxcblxcbiNvcmllbnRhdGlvbkJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxNjBweDtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyIGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDogcmdiKDE4MSwgMTcsIDg3KTtcXG4gICAgb3V0bGluZS1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgdHJhbnNpdGlvbjogLjc1cztcXG59XFxuXFxuYnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNzUsXFx0MTYyLFxcdDE5OCk7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggN3B4IDRweCByZ2IoMCwgMTQ1LCAyMDAsIDAuNSk7XFxuICAgIG91dGxpbmUtc3R5bGU6IG5vbmU7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuI3NlbGVjdGVkU2hpcENvbnRhaW5lciB7XFxuICAgIGdyaWQtYXJlYTogc2VsZWN0ZWRTaGlwQ29udGFpbmVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyIGNlbnRlcjtcXG59XFxuXFxuI3NlbGVjdGVkX1NoaXBDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyIGNlbnRlcjtcXG4gICAgZ2FwOiA3MHB4O1xcbn1cXG5cXG4jc2VsZWN0ZWRTaGlwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGZsZXgtc3RhcnQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXIgZmxleC1zdGFydDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDE4LCAxOSwgMjIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQiw0Q0FBa0Q7QUFDdEQ7QUFDQTtJQUNJLHVCQUF1QjtJQUN2Qiw0Q0FBaUQ7QUFDckQ7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWUsRUFBRSxrQkFBa0I7SUFDbkMsNkJBQTZCO0lBQzdCLFVBQVUsRUFBRSxlQUFlO0lBQzNCLE9BQU87SUFDUCxNQUFNO0lBQ04s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O0lBQ1osMkJBQTJCO0lBQzNCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLDhCQUE4QjtJQUM5Qiw0QkFBNEI7SUFDNUIsK0JBQStCO0lBQy9CLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QiwwQkFBMEI7SUFDMUIsNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixpREFBaUQ7SUFDakQsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QiwwQkFBMEI7SUFDMUIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQ0FBZ0M7SUFDaEMsOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XFxuICAgIHNyYzogdXJsKCcuLi9yZXNvdXJjZXMvZm9udHMvTGF0by9MYXRvLUxpZ2h0LnR0ZicpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvQm9sZCc7XFxuICAgIHNyYzogdXJsKCcuLi9yZXNvdXJjZXMvZm9udHMvTGF0by9MYXRvLUJvbGQudHRmJyk7XFxufVxcblxcbioge1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmgxe1xcbiAgICBmb250LWZhbWlseTogJ0xhdG9Cb2xkJztcXG59XFxuXFxuOnJvb3R7XFxuICAgIGJhY2tncm91bmQ6IHJnYigzNiwgNDEsIDQ2KTtcXG59XFxuXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcbiAgICBmb250LWZhbWlseTogJ01hdGVyaWFsIFN5bWJvbHMgT3V0bGluZWQnO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXG4gICAgLyogUHJlZmVycmVkIGljb24gc2l6ZSAqL1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcXG4gICAgd29yZC13cmFwOiBub3JtYWw7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGRpcmVjdGlvbjogbHRyO1xcbn1cXG5cXG4jYmdPdmVybGF5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuNyk7XFxuICAgIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgICBncmlkLXJvdy1lbmQ6IDM7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxufVxcblxcbiNtb2RhbHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlciBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNiwgNDEsIDQ2KTtcXG4gICAgbWFyZ2luOiAxNSUgYXV0bzsgLyogMTUlIGZyb20gdGhlIHRvcCBhbmQgY2VudGVyZWQgKi9cXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgd2lkdGg6IDgwJTsgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDdmcjtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICAnbmF2IG5hdidcXG4gICAgICAgICdzaGlwQm9hcmQgaHVkJ1xcbiAgICA7XFxuICAgIG1pbi13aWR0aDogMTAwdnc7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMzYsIDQxLCA0Nik7XFxufVxcblxcbiNuYXYge1xcbiAgICBncmlkLWFyZWE6IG5hdjtcXG4gICAgYmFja2dyb3VuZDogcmdiKDI5XFx0MzFcXHQzNCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXIgY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbiNzaGlwQm9hcmQge1xcbiAgICBncmlkLWFyZWE6IHNoaXBCb2FyZDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDM3XFx0NDFcXHQ0Nik7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXJvdzogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgICdtaXNzaWxlR3JpZENvbnRhaW5lcidcXG4gICAgICAgICdzaGlwR3JpZENvbnRhaW5lcidcXG4gICAgO1xcbn1cXG5cXG4jc2hpcEJvYXJkT3ZlcmxheSB7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgICBncmlkLXJvdy1lbmQ6IDM7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDE7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDgxLCAxMzEsIDI0OCwgLjUpO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uYm9hcmRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMzEsIDMzLCAzNyk7O1xcbiAgICBwbGFjZS1jb250ZW50OiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICAgIG1pbi13aWR0aDogMzQwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDM0MHB4O1xcbiAgICBtYXgtd2lkdGg6IDM0MHB4O1xcbiAgICBtYXgtaGVpZ2h0OiAzNDBweDtcXG59XFxuXFxuLmJvYXJkU3F1YXJlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlciBjZW50ZXI7XFxuICAgIHdpZHRoOiAzMnB4O1xcbiAgICBoZWlnaHQ6IDMycHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYig1MiwgMTIyLCAxODIpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTk2LCA0MSwgMTA2KTtcXG4gICAgdHJhbnNpdGlvbjogMC43NXMgYWxsO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5ib2FyZFNxdWFyZTpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMzQsIDI1NSwgMCwgLjc1KTtcXG5cXG59XFxuXFxuI21pc3NpbGVHcmlkQ29udGFpbmVyIHtcXG4gICAgZ3JpZC1hcmVhOiBtaXNzaWxlR3JpZENvbnRhaW5lcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlciBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgei1pbmRleDogMDtcXG59XFxuXFxuI3NoaXBHcmlkQ29udGFpbmVyIHtcXG4gICAgZ3JpZC1hcmVhOiBzaGlwR3JpZENvbnRhaW5lcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlciBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgei1pbmRleDogMDtcXG59XFxuXFxuLmZyb250IHtcXG4gICAgd2lkdGg6IDI4cHg7XFxuICAgIGhlaWdodDogMjhweDtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTAlO1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMCU7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTYsIDQxLCAxMDYpO1xcbn1cXG5cXG4ubWlkIHtcXG4gICAgd2lkdGg6IDI4cHg7XFxuICAgIGhlaWdodDogMjhweDtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjIlO1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMiU7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMiU7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMiU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTYsIDQxLCAxMDYpO1xcbn1cXG5cXG4jaHVkIHtcXG4gICAgZ3JpZC1hcmVhOiBodWQ7XFxuICAgIGJhY2tncm91bmQ6IHJnYigzNiwgNDEsIDQ2KTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAyZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICAnb3JpZW50YXRpb25CdXR0b25Db250YWluZXInXFxuICAgICAgICAnc2hpcHNDb250YWluZXInXFxuICAgICAgICAnc2VsZWN0ZWRTaGlwQ29udGFpbmVyJ1xcbiAgICA7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuI2h1ZE92ZXJsYXl7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgICBncmlkLXJvdy1lbmQ6IDQ7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDE7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoODEsIDEzMSwgMjQ4LCAuNSk7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbiNzaGlwc092ZXJsYXkge1xcbiAgICBncmlkLXJvdy1zdGFydDogMjtcXG4gICAgZ3JpZC1yb3ctZW5kOiAzO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAxO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDgxLCAxMzEsIDI0OCwgLjUpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbiNzaGlwc0NvbnRhaW5lciB7XFxuICAgIGdyaWQtYXJlYTogc2hpcHNDb250YWluZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXIgY2VudGVyO1xcbn1cXG5cXG4jc2hpcHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTgsIDE5LCAyMik7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXIgY2VudGVyO1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIG1pbi1oZWlnaHQ6IDI1JTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4jZGVzdHJveWVyLFxcbiNzZWxlY3RlZF9kZXN0cm95ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgZmxleC1zdGFydDtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlciBmbGV4LXN0YXJ0O1xcbiAgICB3aWR0aDogMzJweDtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTgsIDE5LCAyMik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uZGVzdHJveWVySWNvbiB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTAlO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzAlO1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMzAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk2LCA0MSwgMTA2KTtcXG59XFxuXFxuI3N1Ym1hcmluZSxcXG4jc2VsZWN0ZWRfc3VibWFyaW5lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlciBjZW50ZXI7XFxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICAgIHdpZHRoOiA2NHB4O1xcbiAgICBoZWlnaHQ6IDMycHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYigxOCwgMTksIDIyKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5zdWJtYXJpbmVJY29uIHtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTAlO1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNSU7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyNSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTYsIDQxLCAxMDYpO1xcbn1cXG5cXG4jY3J1aXNlcixcXG4jc2VsZWN0ZWRfY3J1aXNlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXIgY2VudGVyO1xcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAgICB3aWR0aDogOTZweDtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTgsIDE5LCAyMik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uY3J1aXNlckljb24ge1xcbiAgICB3aWR0aDogOTRweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1JTtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDI1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NiwgNDEsIDEwNik7XFxufVxcblxcbiNiYXR0bGVzaGlwLFxcbiNzZWxlY3RlZF9iYXR0bGVzaGlwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlciBjZW50ZXI7XFxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICAgIHdpZHRoOiAxMjhweDtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTgsXFx0MTksXFx0MjIpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmJhdHRsZXNoaXBJY29uIHtcXG4gICAgd2lkdGg6IDEyNnB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTAlO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjUlO1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk2LCA0MSwgMTA2KTtcXG59XFxuXFxuI2NhcnJpZXIsXFxuI3NlbGVjdGVkX2NhcnJpZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyIGNlbnRlcjtcXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gICAgd2lkdGg6IDE2MHB4O1xcbiAgICBoZWlnaHQ6IDMycHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYigxOCxcXHQxOSxcXHQyMik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uY2Fycmllckljb24ge1xcbiAgICB3aWR0aDogMTU4cHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTAlO1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNSU7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyNSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTYsIDQxLCAxMDYpO1xcbn1cXG5cXG4jb3JpZW50YXRpb25CdXR0b25Db250YWluZXIge1xcbiAgICBncmlkLWFyZWE6IG9yaWVudGF0aW9uQnV0dG9uQ29udGFpbmVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyIGNlbnRlcjtcXG59XFxuXFxuI29yaWVudGF0aW9uQnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDE2MHB4O1xcbiAgICBoZWlnaHQ6IDMycHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXIgY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTgxLCAxNywgODcpO1xcbiAgICBvdXRsaW5lLXN0eWxlOiBub25lO1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0cmFuc2l0aW9uOiAuNzVzO1xcbn1cXG5cXG5idXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQ6IHJnYig3NSxcXHQxNjIsXFx0MTk4KTtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA3cHggNHB4IHJnYigwLCAxNDUsIDIwMCwgMC41KTtcXG4gICAgb3V0bGluZS1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4jc2VsZWN0ZWRTaGlwQ29udGFpbmVyIHtcXG4gICAgZ3JpZC1hcmVhOiBzZWxlY3RlZFNoaXBDb250YWluZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXIgY2VudGVyO1xcbn1cXG5cXG4jc2VsZWN0ZWRfU2hpcENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXIgY2VudGVyO1xcbiAgICBnYXA6IDcwcHg7XFxufVxcblxcbiNzZWxlY3RlZFNoaXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgZmxleC1zdGFydDtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlciBmbGV4LXN0YXJ0O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTgsIDE5LCAyMik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgUGxheWVyID0gcmVxdWlyZSgnLi4vdGVzdC9wbGF5ZXInKTtcbmNvbnN0IEFJID0gcmVxdWlyZSgnLi4vdGVzdC9haScpO1xuXG5jb25zdCBwbGF5ZXIxID0gbmV3IFBsYXllcigpO1xuY29uc3QgYWkgPSBuZXcgQUkoKTtcbmV4cG9ydCB7IHBsYXllcjEsIGFpIH07XG4iLCJpbXBvcnQgeyBnZXRDb250ZW50IH0gZnJvbSAnLi4vcmV1c2FibGVzL2dyaWRJdGVtcyc7XG5pbXBvcnQgeyBjcmVhdGVEaXYgfSBmcm9tICcuLi9yZXVzYWJsZXMvZWxlbWVudHMnO1xuXG5mdW5jdGlvbiBjcmVhdGVHcmlkKCkge1xuICBjb25zdCBuYXYgPSBjcmVhdGVEaXYoKTtcbiAgbmF2LnNldEF0dHJpYnV0ZSgnaWQnLCAnbmF2Jyk7XG5cbiAgY29uc3Qgc2hpcEJvYXJkID0gY3JlYXRlRGl2KCk7XG4gIHNoaXBCb2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NoaXBCb2FyZCcpO1xuXG4gIGNvbnN0IGh1ZCA9IGNyZWF0ZURpdigpO1xuICBodWQuc2V0QXR0cmlidXRlKCdpZCcsICdodWQnKTtcblxuICBnZXRDb250ZW50KCkuYXBwZW5kKG5hdiwgc2hpcEJvYXJkLCBodWQpO1xufVxuXG5jcmVhdGVHcmlkKCk7XG4iLCJpbXBvcnQgeyBjcmVhdGVEaXYsIGNyZWF0ZUJ1dHRvbiB9IGZyb20gJy4uL3JldXNhYmxlcy9lbGVtZW50cyc7XG5pbXBvcnQgeyBnZXRIdWQgfSBmcm9tICcuLi9yZXVzYWJsZXMvZ3JpZEl0ZW1zJztcbmltcG9ydCB7IGNoYW5nZU9yaWVudGF0aW9uLCBzZWxlY3RTaGlwIH0gZnJvbSAnLi9odWRMb2dpYyc7XG5cbmZ1bmN0aW9uIGFkZFNoaXBzKGNvbnRhaW5lcikge1xuICBjb25zdCBudW1TaGlwcyA9IDU7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtU2hpcHM7IGkrKykge1xuICAgIGNvbnN0IHNoaXAgPSBjcmVhdGVEaXYoKTtcbiAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgc2hpcC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Rlc3Ryb3llcicpO1xuICAgICAgY29uc3QgZGVzdHJveWVySWNvbiA9IGNyZWF0ZURpdigpO1xuICAgICAgZGVzdHJveWVySWNvbi5jbGFzc0xpc3QuYWRkKCdkZXN0cm95ZXJJY29uJyk7XG4gICAgICBzaGlwLmFwcGVuZChkZXN0cm95ZXJJY29uKTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmQoJ0Rlc3Ryb3llcicpO1xuICAgIH0gZWxzZSBpZiAoaSA9PT0gMSkge1xuICAgICAgc2hpcC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1Ym1hcmluZScpO1xuICAgICAgY29uc3Qgc3VibWFyaW5lSWNvbiA9IGNyZWF0ZURpdigpO1xuICAgICAgc3VibWFyaW5lSWNvbi5jbGFzc0xpc3QuYWRkKCdzdWJtYXJpbmVJY29uJyk7XG4gICAgICBzaGlwLmFwcGVuZChzdWJtYXJpbmVJY29uKTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmQoJ1N1Ym1hcmluZScpO1xuICAgIH0gZWxzZSBpZiAoaSA9PT0gMikge1xuICAgICAgc2hpcC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NydWlzZXInKTtcbiAgICAgIGNvbnN0IGNydWlzZXJJY29uID0gY3JlYXRlRGl2KCk7XG4gICAgICBjcnVpc2VySWNvbi5jbGFzc0xpc3QuYWRkKCdjcnVpc2VySWNvbicpO1xuICAgICAgc2hpcC5hcHBlbmQoY3J1aXNlckljb24pO1xuICAgICAgY29udGFpbmVyLmFwcGVuZCgnQ3J1aXNlcicpO1xuICAgIH0gZWxzZSBpZiAoaSA9PT0gMykge1xuICAgICAgc2hpcC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2JhdHRsZXNoaXAnKTtcbiAgICAgIGNvbnN0IGJhdHRsZXNoaXBJY29uID0gY3JlYXRlRGl2KCk7XG4gICAgICBiYXR0bGVzaGlwSWNvbi5jbGFzc0xpc3QuYWRkKCdiYXR0bGVzaGlwSWNvbicpO1xuICAgICAgc2hpcC5hcHBlbmQoYmF0dGxlc2hpcEljb24pO1xuICAgICAgY29udGFpbmVyLmFwcGVuZCgnQmF0dGxlc2hpcCcpO1xuICAgIH0gZWxzZSBpZiAoaSA9PT0gNCkge1xuICAgICAgc2hpcC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NhcnJpZXInKTtcbiAgICAgIGNvbnN0IGNhcnJpZXJJY29uID0gY3JlYXRlRGl2KCk7XG4gICAgICBjYXJyaWVySWNvbi5jbGFzc0xpc3QuYWRkKCdjYXJyaWVySWNvbicpO1xuICAgICAgc2hpcC5hcHBlbmQoY2Fycmllckljb24pO1xuICAgICAgY29udGFpbmVyLmFwcGVuZCgnQ2FycmllcicpO1xuICAgIH1cblxuICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgc2VsZWN0U2hpcCk7XG4gICAgY29udGFpbmVyLmFwcGVuZChzaGlwKTtcbiAgfVxufVxuXG5jb25zdCBjcmVhdGVTaGlwcyA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRGl2KCk7XG4gIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NoaXBzQ29udGFpbmVyJyk7XG4gIGNvbnN0IHNoaXBzID0gY3JlYXRlRGl2KCk7XG4gIHNoaXBzLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2hpcHMnKTtcbiAgYWRkU2hpcHMoc2hpcHMpO1xuXG4gIGNvbnRhaW5lci5hcHBlbmQoJ1NoaXBzJywgc2hpcHMpO1xuICByZXR1cm4gY29udGFpbmVyO1xufTtcbmNvbnN0IGNyZWF0ZU9yaWVudGF0aW9uQnV0dG9uID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVEaXYoKTtcbiAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnb3JpZW50YXRpb25CdXR0b25Db250YWluZXInKTtcblxuICBjb25zdCBidXR0b24gPSBjcmVhdGVCdXR0b24oKTtcbiAgYnV0dG9uLmRpc2FibGVkID0gJ3RydWUnO1xuICBidXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdvcmllbnRhdGlvbkJ1dHRvbicpO1xuICBidXR0b24uaW5uZXJIVE1MID0gJ1ZlcnRpY2FsJztcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNoYW5nZU9yaWVudGF0aW9uKTtcblxuICBjb250YWluZXIuYXBwZW5kKCdPcmllbnRhdGlvbicsIGJ1dHRvbik7XG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVTZWxlY3RlZFNoaXAoKSB7XG4gIGNvbnN0IHNlbGVjdGVkU2hpcENvbnRhaW5lciA9IGNyZWF0ZURpdigpO1xuICBzZWxlY3RlZFNoaXBDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdzZWxlY3RlZFNoaXBDb250YWluZXInKTtcbiAgY29uc3Qgc2VsZWN0ZWRTaGlwID0gY3JlYXRlRGl2KCk7XG4gIHNlbGVjdGVkU2hpcC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NlbGVjdGVkU2hpcCcpO1xuICBzZWxlY3RlZFNoaXAuaW5uZXJIVE1MID0gJ05vIFNoaXAgU2VsZWN0ZWQuLi4nO1xuICBzZWxlY3RlZFNoaXBDb250YWluZXIuYXBwZW5kKCdTZWxlY3RlZCBTaGlwJywgc2VsZWN0ZWRTaGlwKTtcbiAgcmV0dXJuIHNlbGVjdGVkU2hpcENvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2hpcHNPdmVybGF5KCkge1xuICBjb25zdCBkaXYgPSBjcmVhdGVEaXYoKTtcbiAgZGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnc2hpcHNPdmVybGF5Jyk7XG4gIHJldHVybiBkaXY7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUh1ZE92ZXJsYXkoKSB7XG4gIGNvbnN0IGRpdiA9IGNyZWF0ZURpdigpO1xuICBkaXYuc2V0QXR0cmlidXRlKCdpZCcsICdodWRPdmVybGF5Jyk7XG4gIHJldHVybiBkaXY7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZFRvSFVEKCkge1xuICBnZXRIdWQoKS5hcHBlbmQoXG4gICAgY3JlYXRlT3JpZW50YXRpb25CdXR0b24oKSxcbiAgICBjcmVhdGVTaGlwcygpLFxuICAgIGNyZWF0ZVNoaXBzT3ZlcmxheSgpLFxuICAgIGNyZWF0ZVNlbGVjdGVkU2hpcCgpLFxuICAgIGNyZWF0ZUh1ZE92ZXJsYXkoKSxcbiAgKTtcbn1cblxuYXBwZW5kVG9IVUQoKTtcbiIsImltcG9ydCB7IHBsYXllcjEgfSBmcm9tICcuLi9nYW1lL2dhbWVMb2dpYyc7XG5pbXBvcnQgeyBjcmVhdGVEaXYgfSBmcm9tICcuLi9yZXVzYWJsZXMvZWxlbWVudHMnO1xuaW1wb3J0IHsgdG9nZ2xlU2hpcEJvYXJkT3ZlcmxheSB9IGZyb20gJy4uL3NoaXBCb2FyZC9zaGlwQm9hcmRDb250ZW50JztcblxuZnVuY3Rpb24gdG9nZ2xlT3JpZW50YXRpb25CdXR0b25EaXNhYmxlZChkaXNhYmxlZCkge1xuICBjb25zdCBvcmllbnRhdGlvbkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcmllbnRhdGlvbkJ1dHRvbicpO1xuICBvcmllbnRhdGlvbkJ1dHRvbi5kaXNhYmxlZCA9IGRpc2FibGVkO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVTaGlwc092ZXJsYXlEaXNwbGF5KGRpc3BsYXkpIHtcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGlwc092ZXJsYXknKTtcbiAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheTtcbn1cblxuZnVuY3Rpb24gY2xlYXJTZWxlY3RlZFNoaXAoKSB7XG4gIGNvbnN0IHNlbGVjdGVkU2hpcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3RlZFNoaXAnKTtcblxuICB3aGlsZSAoc2VsZWN0ZWRTaGlwLmZpcnN0Q2hpbGQpIHtcbiAgICBzZWxlY3RlZFNoaXAucmVtb3ZlQ2hpbGQoc2VsZWN0ZWRTaGlwLmZpcnN0Q2hpbGQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldE5vU2hpcFNlbGVjdGVkKCkge1xuICBjb25zdCBzZWxlY3RlZFNoaXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0ZWRTaGlwJyk7XG4gIHNlbGVjdGVkU2hpcC5pbm5lckhUTUwgPSAnTm8gU2hpcCBTZWxlY3RlZC4uLic7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUljb25Db2xvcihuYW1lKSB7XG4gIGlmIChuYW1lID09PSAnZGVzdHJveWVyJykge1xuICAgIGlmIChwbGF5ZXIxLmRlc3Ryb3llckNvdW50IDw9IDApIHtcbiAgICAgIGNvbnN0IGRlc3Ryb3llckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzdHJveWVySWNvbicpO1xuICAgICAgZGVzdHJveWVySWNvbi5zdHlsZS5iYWNrZ3JvdW5kID0gJ2dyYXknO1xuICAgIH0gZWxzZSBpZiAocGxheWVyMS5kZXN0cm95ZXJDb3VudCA+IDApIHtcbiAgICAgIGNvbnN0IGRlc3Ryb3llckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzdHJveWVySWNvbicpO1xuICAgICAgZGVzdHJveWVySWNvbi5zdHlsZS5iYWNrZ3JvdW5kID0gJ3JnYigxOTYgNDEgMTA2KSc7XG4gICAgfVxuICB9IGVsc2UgaWYgKG5hbWUgPT09ICdzdWJtYXJpbmUnKSB7XG4gICAgaWYgKHBsYXllcjEuc3VibWFyaW5lQ291bnQgPD0gMCkge1xuICAgICAgY29uc3Qgc3VibWFyaW5lSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtYXJpbmVJY29uJyk7XG4gICAgICBzdWJtYXJpbmVJY29uLnN0eWxlLmJhY2tncm91bmQgPSAnZ3JheSc7XG4gICAgfSBlbHNlIGlmIChwbGF5ZXIxLnN1Ym1hcmluZUNvdW50ID4gMCkge1xuICAgICAgY29uc3Qgc3VibWFyaW5lSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtYXJpbmVJY29uJyk7XG4gICAgICBzdWJtYXJpbmVJY29uLnN0eWxlLmJhY2tncm91bmQgPSAncmdiKDE5NiA0MSAxMDYpJztcbiAgICB9XG4gIH0gZWxzZSBpZiAobmFtZSA9PT0gJ2NydWlzZXInKSB7XG4gICAgaWYgKHBsYXllcjEuY3J1aXNlckNvdW50IDw9IDApIHtcbiAgICAgIGNvbnN0IGNydWlzZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNydWlzZXJJY29uJyk7XG4gICAgICBjcnVpc2VySWNvbi5zdHlsZS5iYWNrZ3JvdW5kID0gJ2dyYXknO1xuICAgIH0gZWxzZSBpZiAocGxheWVyMS5jcnVpc2VyQ291bnQgPiAwKSB7XG4gICAgICBjb25zdCBjcnVpc2VySWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcnVpc2VySWNvbicpO1xuICAgICAgY3J1aXNlckljb24uc3R5bGUuYmFja2dyb3VuZCA9ICdyZ2IoMTk2IDQxIDEwNiknO1xuICAgIH1cbiAgfSBlbHNlIGlmIChuYW1lID09PSAnYmF0dGxlc2hpcCcpIHtcbiAgICBpZiAocGxheWVyMS5iYXR0bGVzaGlwQ291bnQgPD0gMCkge1xuICAgICAgY29uc3QgYmF0dGxlc2hpcEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmF0dGxlc2hpcEljb24nKTtcbiAgICAgIGJhdHRsZXNoaXBJY29uLnN0eWxlLmJhY2tncm91bmQgPSAnZ3JheSc7XG4gICAgfSBlbHNlIGlmIChwbGF5ZXIxLmJhdHRsZXNoaXBDb3VudCA+IDApIHtcbiAgICAgIGNvbnN0IGJhdHRsZXNoaXBJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhdHRsZXNoaXBJY29uJyk7XG4gICAgICBiYXR0bGVzaGlwSWNvbi5zdHlsZS5iYWNrZ3JvdW5kID0gJ3JnYigxOTYgNDEgMTA2KSc7XG4gICAgfVxuICB9IGVsc2UgaWYgKG5hbWUgPT09ICdjYXJyaWVyJykge1xuICAgIGlmIChwbGF5ZXIxLmNhcnJpZXJDb3VudCA8PSAwKSB7XG4gICAgICBjb25zdCBjYXJyaWVySWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJyaWVySWNvbicpO1xuICAgICAgY2Fycmllckljb24uc3R5bGUuYmFja2dyb3VuZCA9ICdncmF5JztcbiAgICB9IGVsc2UgaWYgKHBsYXllcjEuY2FycmllckNvdW50ID4gMCkge1xuICAgICAgY29uc3QgY2Fycmllckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fycmllckljb24nKTtcbiAgICAgIGNhcnJpZXJJY29uLnN0eWxlLmJhY2tncm91bmQgPSAncmdiKDE5NiA0MSAxMDYpJztcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVzZWxlY3RTaGlwKCkge1xuICBjb25zdCBvbGRBY3RpdmVTaGlwTmFtZSA9IHBsYXllcjEuYWN0aXZlU2hpcC5uYW1lO1xuICBwbGF5ZXIxLmRlc2VsZWN0U2hpcCgpO1xuICBjaGFuZ2VJY29uQ29sb3Iob2xkQWN0aXZlU2hpcE5hbWUpO1xuICB0b2dnbGVTaGlwc092ZXJsYXlEaXNwbGF5KCdub25lJyk7XG4gIGNsZWFyU2VsZWN0ZWRTaGlwKCk7XG4gIHNldE5vU2hpcFNlbGVjdGVkKCk7XG4gIHRvZ2dsZVNoaXBCb2FyZE92ZXJsYXkoJzMnKTtcbiAgdG9nZ2xlT3JpZW50YXRpb25CdXR0b25EaXNhYmxlZCh0cnVlKTtcbn1cblxuZnVuY3Rpb24gc2V0U2VsZWN0ZWRTaGlwKGFjdGl2ZVNoaXApIHtcbiAgY2xlYXJTZWxlY3RlZFNoaXAoKTtcbiAgY29uc3Qgc2VsZWN0ZWRTaGlwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdGVkU2hpcCcpO1xuICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVEaXYoKTtcbiAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2VsZWN0ZWRfU2hpcENvbnRhaW5lcicpO1xuICBjb25zdCBzaGlwID0gY3JlYXRlRGl2KCk7XG4gIGlmIChhY3RpdmVTaGlwLm5hbWUgPT09ICdkZXN0cm95ZXInKSB7XG4gICAgc2hpcC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NlbGVjdGVkX2Rlc3Ryb3llcicpO1xuICAgIGNvbnN0IGRlc3Ryb3llckljb24gPSBjcmVhdGVEaXYoKTtcbiAgICBkZXN0cm95ZXJJY29uLmNsYXNzTGlzdC5hZGQoJ2Rlc3Ryb3llckljb24nKTtcbiAgICBzaGlwLmFwcGVuZChkZXN0cm95ZXJJY29uKTtcbiAgICBjb250YWluZXIuYXBwZW5kKCdEZXN0cm95ZXInKTtcbiAgfSBlbHNlIGlmIChhY3RpdmVTaGlwLm5hbWUgPT09ICdzdWJtYXJpbmUnKSB7XG4gICAgc2hpcC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NlbGVjdGVkX3N1Ym1hcmluZScpO1xuICAgIGNvbnN0IHN1Ym1hcmluZUljb24gPSBjcmVhdGVEaXYoKTtcbiAgICBzdWJtYXJpbmVJY29uLmNsYXNzTGlzdC5hZGQoJ3N1Ym1hcmluZUljb24nKTtcbiAgICBzaGlwLmFwcGVuZChzdWJtYXJpbmVJY29uKTtcbiAgICBjb250YWluZXIuYXBwZW5kKCdTdWJtYXJpbmUnKTtcbiAgfSBlbHNlIGlmIChhY3RpdmVTaGlwLm5hbWUgPT09ICdjcnVpc2VyJykge1xuICAgIHNoaXAuc2V0QXR0cmlidXRlKCdpZCcsICdzZWxlY3RlZF9jcnVpc2VyJyk7XG4gICAgY29uc3QgY3J1aXNlckljb24gPSBjcmVhdGVEaXYoKTtcbiAgICBjcnVpc2VySWNvbi5jbGFzc0xpc3QuYWRkKCdjcnVpc2VySWNvbicpO1xuICAgIHNoaXAuYXBwZW5kKGNydWlzZXJJY29uKTtcbiAgICBjb250YWluZXIuYXBwZW5kKCdDcnVpc2VyJyk7XG4gIH0gZWxzZSBpZiAoYWN0aXZlU2hpcC5uYW1lID09PSAnYmF0dGxlc2hpcCcpIHtcbiAgICBzaGlwLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2VsZWN0ZWRfYmF0dGxlc2hpcCcpO1xuICAgIGNvbnN0IGJhdHRsZXNoaXBJY29uID0gY3JlYXRlRGl2KCk7XG4gICAgYmF0dGxlc2hpcEljb24uY2xhc3NMaXN0LmFkZCgnYmF0dGxlc2hpcEljb24nKTtcbiAgICBzaGlwLmFwcGVuZChiYXR0bGVzaGlwSWNvbik7XG4gICAgY29udGFpbmVyLmFwcGVuZCgnQmF0dGxlc2hpcCcpO1xuICB9IGVsc2UgaWYgKGFjdGl2ZVNoaXAubmFtZSA9PT0gJ2NhcnJpZXInKSB7XG4gICAgc2hpcC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NlbGVjdGVkX2NhcnJpZXInKTtcbiAgICBjb25zdCBjYXJyaWVySWNvbiA9IGNyZWF0ZURpdigpO1xuICAgIGNhcnJpZXJJY29uLmNsYXNzTGlzdC5hZGQoJ2NhcnJpZXJJY29uJyk7XG4gICAgc2hpcC5hcHBlbmQoY2Fycmllckljb24pO1xuICAgIGNvbnRhaW5lci5hcHBlbmQoJ0NhcnJpZXInKTtcbiAgfVxuXG4gIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBkZXNlbGVjdFNoaXApO1xuICBjb250YWluZXIuYXBwZW5kKHNoaXApO1xuICBzZWxlY3RlZFNoaXAuYXBwZW5kKGNvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdFNoaXAoKSB7XG4gIGlmICgodGhpcy5nZXRBdHRyaWJ1dGUoJ2lkJykgPT09ICdkZXN0cm95ZXInICYmIHBsYXllcjEuZGVzdHJveWVyQ291bnQgPiAwKVxuICAgIHx8ICh0aGlzLmdldEF0dHJpYnV0ZSgnaWQnKSA9PT0gJ3N1Ym1hcmluZScgJiYgcGxheWVyMS5zdWJtYXJpbmVDb3VudCA+IDApXG4gICAgfHwgKHRoaXMuZ2V0QXR0cmlidXRlKCdpZCcpID09PSAnY3J1aXNlcicgJiYgcGxheWVyMS5jcnVpc2VyQ291bnQgPiAwKVxuICAgIHx8ICh0aGlzLmdldEF0dHJpYnV0ZSgnaWQnKSA9PT0gJ2JhdHRsZXNoaXAnICYmIHBsYXllcjEuYmF0dGxlc2hpcENvdW50ID4gMClcbiAgICB8fCAodGhpcy5nZXRBdHRyaWJ1dGUoJ2lkJykgPT09ICdjYXJyaWVyJyAmJiBwbGF5ZXIxLmNhcnJpZXJDb3VudCA+IDApXG4gICkge1xuICAgIGlmIChwbGF5ZXIxLmFjdGl2ZVNoaXAgPT09IG51bGwpIHtcbiAgICAgIGlmICh0aGlzLmdldEF0dHJpYnV0ZSgnaWQnKSA9PT0gJ2Rlc3Ryb3llcicpIHtcbiAgICAgICAgcGxheWVyMS5zZWxlY3RTaGlwKCdkZXN0cm95ZXInKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5nZXRBdHRyaWJ1dGUoJ2lkJykgPT09ICdzdWJtYXJpbmUnKSB7XG4gICAgICAgIHBsYXllcjEuc2VsZWN0U2hpcCgnc3VibWFyaW5lJyk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZ2V0QXR0cmlidXRlKCdpZCcpID09PSAnY3J1aXNlcicpIHtcbiAgICAgICAgcGxheWVyMS5zZWxlY3RTaGlwKCdjcnVpc2VyJyk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZ2V0QXR0cmlidXRlKCdpZCcpID09PSAnYmF0dGxlc2hpcCcpIHtcbiAgICAgICAgcGxheWVyMS5zZWxlY3RTaGlwKCdiYXR0bGVzaGlwJyk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZ2V0QXR0cmlidXRlKCdpZCcpID09PSAnY2FycmllcicpIHtcbiAgICAgICAgcGxheWVyMS5zZWxlY3RTaGlwKCdjYXJyaWVyJyk7XG4gICAgICB9XG4gICAgICB0b2dnbGVTaGlwQm9hcmRPdmVybGF5KCcyJyk7XG4gICAgfVxuXG4gICAgY2hhbmdlSWNvbkNvbG9yKHRoaXMuZ2V0QXR0cmlidXRlKCdpZCcpKTtcbiAgICB0b2dnbGVPcmllbnRhdGlvbkJ1dHRvbkRpc2FibGVkKGZhbHNlKTtcbiAgICBzZXRTZWxlY3RlZFNoaXAocGxheWVyMS5hY3RpdmVTaGlwKTtcbiAgICB0b2dnbGVTaGlwc092ZXJsYXlEaXNwbGF5KCdibG9jaycpO1xuICAgIC8vIGNvbnNvbGUubG9nKHBsYXllcjEuYWN0aXZlU2hpcCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hhbmdlT3JpZW50YXRpb24oKSB7XG4gIGNvbnN0IGFjdGl2ZVNoaXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgc2VsZWN0ZWRfJHtwbGF5ZXIxLmFjdGl2ZVNoaXAubmFtZX1gKTtcbiAgaWYgKHBsYXllcjEuYWN0aXZlU2hpcCAhPT0gbnVsbCkge1xuICAgIGlmIChwbGF5ZXIxLmFjdGl2ZVNoaXAuaG9yaXpvbnRhbFZlcnRpY2FsKSB7XG4gICAgICB0aGlzLmlubmVySFRNTCA9ICdIb3Jpem9udGFsJztcbiAgICAgIGFjdGl2ZVNoaXAuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSguMjV0dXJuKSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5uZXJIVE1MID0gJ1ZlcnRpY2FsJztcbiAgICAgIGFjdGl2ZVNoaXAuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwdHVybiknO1xuICAgIH1cbiAgICBwbGF5ZXIxLmNoYW5nZU9yaWVudGF0aW9uKCk7XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgc2VsZWN0U2hpcCwgY2hhbmdlT3JpZW50YXRpb24sIHNldE5vU2hpcFNlbGVjdGVkLFxufTtcbiIsImltcG9ydCB7IGdldE5hdiB9IGZyb20gJy4uL3JldXNhYmxlcy9ncmlkSXRlbXMnO1xuaW1wb3J0IHsgY3JlYXRlSDEsIGNyZWF0ZVN5bWJvbCB9IGZyb20gJy4uL3JldXNhYmxlcy9lbGVtZW50cyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRpdGxlKCkge1xuICBjb25zdCBuYXYgPSBnZXROYXYoKTtcblxuICBjb25zdCBoMSA9IGNyZWF0ZUgxKCdCYXR0bGVzaGlwJyk7XG4gIG5hdi5hcHBlbmQoaDEsIGNyZWF0ZVN5bWJvbCgnZGlyZWN0aW9uc19ib2F0JykpO1xufVxuXG5jcmVhdGVUaXRsZSgpO1xuIiwiZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgdGhpcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG5mdW5jdGlvbiBibG9ja1NoaXBCb2FyZChncmlkU3RhcnQsIGdyaWRFbmQpIHtcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGlwQm9hcmRPdmVybGF5Jyk7XG4gIG92ZXJsYXkuc3R5bGUuYmFja2dyb3VuZCA9ICd0cmFuc3BhcmVudCc7XG4gIG92ZXJsYXkuc3R5bGUuZ3JpZFJvd1N0YXJ0ID0gZ3JpZFN0YXJ0O1xuICBvdmVybGF5LnN0eWxlLmdyaWRSb3dFbmQgPSBncmlkRW5kO1xufVxuY29uc3QgY3JlYXRlSDEgPSAodGV4dCkgPT4ge1xuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGgxLmlubmVySFRNTCA9IHRleHQ7XG4gIHJldHVybiBoMTtcbn07XG5jb25zdCBjcmVhdGVEaXYgPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGNyZWF0ZUJ1dHRvbiA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuY29uc3QgY3JlYXRlTW9kYWwgPSAodGV4dCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgY29uc3QgYmcgPSBjcmVhdGVEaXYoKTtcbiAgYmcuc2V0QXR0cmlidXRlKCdpZCcsICdiZ092ZXJsYXknKTtcblxuICBjb25zdCBtb2RhbCA9IGNyZWF0ZURpdigpO1xuICBtb2RhbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21vZGFsJyk7XG4gIGNvbnN0IGgxID0gY3JlYXRlSDEodGV4dCk7XG4gIGgxLnN0eWxlLnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICBtb2RhbC5hcHBlbmQoaDEpO1xuICBiZy5hcHBlbmQobW9kYWwpO1xuICBiZy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBjbG9zZU1vZGFsKTtcbiAgY29udGVudC5hcHBlbmQoYmcpO1xufTtcbmNvbnN0IGNyZWF0ZUljb24gPSAoaWNvbk5hbWUpID0+IHtcbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgc3Bhbi5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucycpO1xuICBzcGFuLmlubmVySFRNTCA9IGljb25OYW1lO1xuICByZXR1cm4gc3Bhbjtcbn07XG5cbmNvbnN0IGNyZWF0ZVN5bWJvbCA9IChzeW1ib2xOYW1lKSA9PiB7XG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHNwYW4uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCcpO1xuICBzcGFuLmlubmVySFRNTCA9IHN5bWJvbE5hbWU7XG4gIHJldHVybiBzcGFuO1xufTtcblxuZXhwb3J0IHtcbiAgY3JlYXRlRGl2LCBjcmVhdGVCdXR0b24sIGNyZWF0ZU1vZGFsLCBibG9ja1NoaXBCb2FyZCwgY3JlYXRlSWNvbiwgY3JlYXRlU3ltYm9sLCBjcmVhdGVIMSxcbn07XG4iLCJjb25zdCBnZXROYXYgPSAoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2Jyk7XG5cbmNvbnN0IGdldENvbnRlbnQgPSAoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5jb25zdCBnZXRTaGlwQm9hcmQgPSAoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpcEJvYXJkJyk7XG5cbmNvbnN0IGdldEh1ZCA9ICgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodWQnKTtcblxuZXhwb3J0IHtcbiAgZ2V0TmF2LCBnZXRDb250ZW50LCBnZXRTaGlwQm9hcmQsIGdldEh1ZCxcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5pbXBvcnQgeyBnZXRTaGlwQm9hcmQgfSBmcm9tICcuLi9yZXVzYWJsZXMvZ3JpZEl0ZW1zJztcbmltcG9ydCB7IGNyZWF0ZURpdiB9IGZyb20gJy4uL3JldXNhYmxlcy9lbGVtZW50cyc7XG5pbXBvcnQgeyBwbGFjZVNoaXAsIGZpcmUgfSBmcm9tICcuL3NoaXBCb2FyZExvZ2ljJztcblxuZnVuY3Rpb24gY3JlYXRlU2hpcEJvYXJkKCkge1xuICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVEaXYoKTtcbiAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2hpcEdyaWRDb250YWluZXInKTtcbiAgY29uc3QgYm9hcmQgPSBjcmVhdGVEaXYoKTtcbiAgYm9hcmQuc2V0QXR0cmlidXRlKCdpZCcsICdzaGlwR3JpZCcpO1xuICBib2FyZC5jbGFzc0xpc3QuYWRkKCdib2FyZENvbnRhaW5lcicpO1xuICBsZXQgY291bnRlciA9IDA7XG5cbiAgZm9yIChsZXQgeCA9IDA7IHggPCAxMDsgeCsrKSB7XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCAxMDsgeSsrKSB7XG4gICAgICBjb25zdCBzcXVhcmUgPSBjcmVhdGVEaXYoKTtcbiAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoJ2lkJywgYFNfJHtjb3VudGVyfWApO1xuICAgICAgLy8gc3F1YXJlLmlubmVySFRNTCA9IGAke2NvdW50ZXJ9YDtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdib2FyZFNxdWFyZScpO1xuICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHBsYWNlU2hpcCk7XG4gICAgICBib2FyZC5hcHBlbmQoc3F1YXJlKTtcbiAgICAgIGNvdW50ZXIrKztcbiAgICB9XG4gIH1cblxuICBjb250YWluZXIuYXBwZW5kKCdTaGlwIEdyaWQnLCBib2FyZCk7XG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1pc3NsZUJvYXJkKCkge1xuICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVEaXYoKTtcbiAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWlzc2lsZUdyaWRDb250YWluZXInKTtcbiAgY29uc3QgYm9hcmQgPSBjcmVhdGVEaXYoKTtcbiAgYm9hcmQuc2V0QXR0cmlidXRlKCdpZCcsICdtaXNzbGVHcmlkJyk7XG4gIGJvYXJkLmNsYXNzTGlzdC5hZGQoJ2JvYXJkQ29udGFpbmVyJyk7XG4gIGxldCBjb3VudGVyID0gMDtcbiAgZm9yIChsZXQgeSA9IDA7IHkgPCAxMDsgeSsrKSB7XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCAxMDsgeCsrKSB7XG4gICAgICBjb25zdCBzcXVhcmUgPSBjcmVhdGVEaXYoKTtcbiAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoJ2lkJywgYE1fJHtjb3VudGVyfWApO1xuICAgICAgLy8gc3F1YXJlLmlubmVySFRNTCA9IGAke2NvdW50ZXJ9YDtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdib2FyZFNxdWFyZScpO1xuICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZpcmUpO1xuICAgICAgYm9hcmQuYXBwZW5kKHNxdWFyZSk7XG4gICAgICBjb3VudGVyKys7XG4gICAgfVxuICB9XG5cbiAgY29udGFpbmVyLmFwcGVuZCgnTWlzc2xlIEdyaWQnLCBib2FyZCk7XG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU92ZXJsYXkoKSB7XG4gIGNvbnN0IGRpdiA9IGNyZWF0ZURpdigpO1xuICBkaXYuc2V0QXR0cmlidXRlKCdpZCcsICdzaGlwQm9hcmRPdmVybGF5Jyk7XG4gIHJldHVybiBkaXY7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZFRvU2hpcEJvYXJkKCkge1xuICBnZXRTaGlwQm9hcmQoKS5hcHBlbmQoY3JlYXRlTWlzc2xlQm9hcmQoKSwgY3JlYXRlU2hpcEJvYXJkKCksIGNyZWF0ZU92ZXJsYXkoKSk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVNoaXBCb2FyZE92ZXJsYXkocm93KSB7XG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpcEJvYXJkT3ZlcmxheScpO1xuICBvdmVybGF5LnN0eWxlLmdyaWRSb3dFbmQgPSByb3c7XG59XG5cbmV4cG9ydCB7IHRvZ2dsZVNoaXBCb2FyZE92ZXJsYXkgfTtcbmFwcGVuZFRvU2hpcEJvYXJkKCk7XG4iLCJpbXBvcnQgeyBwbGF5ZXIxLCBhaSB9IGZyb20gJy4uL2dhbWUvZ2FtZUxvZ2ljJztcbmltcG9ydCB7IGNyZWF0ZURpdiwgY3JlYXRlTW9kYWwsIGJsb2NrU2hpcEJvYXJkIH0gZnJvbSAnLi4vcmV1c2FibGVzL2VsZW1lbnRzJztcblxuZnVuY3Rpb24gdG9nZ2xlU2hpcHNPdmVybGF5RGlzcGxheShkaXNwbGF5KSB7XG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpcHNPdmVybGF5Jyk7XG4gIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVNoaXBCb2FyZE92ZXJsYXkocm93KSB7XG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpcEJvYXJkT3ZlcmxheScpO1xuICBvdmVybGF5LnN0eWxlLmdyaWRSb3dFbmQgPSByb3c7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZU9yaWVudGF0aW9uQnV0dG9uRGlzYWJsZWQoZGlzYWJsZWQpIHtcbiAgY29uc3Qgb3JpZW50YXRpb25CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3JpZW50YXRpb25CdXR0b24nKTtcbiAgb3JpZW50YXRpb25CdXR0b24uZGlzYWJsZWQgPSBkaXNhYmxlZDtcbn1cblxuZnVuY3Rpb24gY2xlYXJTZWxlY3RlZFNoaXAoKSB7XG4gIGNvbnN0IHNlbGVjdGVkU2hpcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3RlZFNoaXAnKTtcblxuICB3aGlsZSAoc2VsZWN0ZWRTaGlwLmZpcnN0Q2hpbGQpIHtcbiAgICBzZWxlY3RlZFNoaXAucmVtb3ZlQ2hpbGQoc2VsZWN0ZWRTaGlwLmZpcnN0Q2hpbGQpO1xuICB9XG59XG5mdW5jdGlvbiBzZXROb1NoaXBTZWxlY3RlZCgpIHtcbiAgY29uc3Qgc2VsZWN0ZWRTaGlwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdGVkU2hpcCcpO1xuICBzZWxlY3RlZFNoaXAuaW5uZXJIVE1MID0gJ05vIFNoaXAgU2VsZWN0ZWQuLi4nO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0T3JpZW50YXRpb25CdXR0b25Db3B5KCkge1xuICBjb25zdCBvcmllbnRhdGlvbkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcmllbnRhdGlvbkJ1dHRvbicpO1xuICBvcmllbnRhdGlvbkJ1dHRvbi5pbm5lckhUTUwgPSAnVmVydGljYWwnO1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkKGlkKSB7XG4gIGlmIChwbGF5ZXIxLmFjdGl2ZVNoaXAuaG9yaXpvbnRhbFZlcnRpY2FsKSB7XG4gICAgaWYgKChwYXJzZUludChpZCwgMTApICUgMTAgPiA5ICYmIHBsYXllcjEuYWN0aXZlU2hpcC5uYW1lID09PSAnZGVzdHJveWVyJylcbiAgICAgIHx8IChwYXJzZUludChpZCwgMTApICUgMTAgPiA4ICYmIHBsYXllcjEuYWN0aXZlU2hpcC5uYW1lID09PSAnc3VibWFyaW5lJylcbiAgICAgIHx8IChwYXJzZUludChpZCwgMTApICUgMTAgPiA3ICYmIHBsYXllcjEuYWN0aXZlU2hpcC5uYW1lID09PSAnY3J1aXNlcicpXG4gICAgICB8fCAocGFyc2VJbnQoaWQsIDEwKSAlIDEwID4gNiAmJiBwbGF5ZXIxLmFjdGl2ZVNoaXAubmFtZSA9PT0gJ2JhdHRsZXNoaXAnKVxuICAgICAgfHwgKHBhcnNlSW50KGlkLCAxMCkgJSAxMCA+IDUgJiYgcGxheWVyMS5hY3RpdmVTaGlwLm5hbWUgPT09ICdjYXJyaWVyJykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoIXBsYXllcjEuYWN0aXZlU2hpcC5ob3Jpem9udGFsVmVydGljYWwpIHtcbiAgICBpZiAoKHBsYXllcjEuZ2FtZUJvYXJkLmdldENvb3JkaW5hdGVGcm9tSW5kZXgoaWQpLmNvb3JkaW5hdGVbMV0gPiA5ICYmIHBsYXllcjEuYWN0aXZlU2hpcC5uYW1lID09PSAnZGVzdHJveWVyJylcbiAgICAgIHx8IChwbGF5ZXIxLmdhbWVCb2FyZC5nZXRDb29yZGluYXRlRnJvbUluZGV4KGlkKS5jb29yZGluYXRlWzFdID4gOCAmJiBwbGF5ZXIxLmFjdGl2ZVNoaXAubmFtZSA9PT0gJ3N1Ym1hcmluZScpXG4gICAgICB8fCAocGxheWVyMS5nYW1lQm9hcmQuZ2V0Q29vcmRpbmF0ZUZyb21JbmRleChpZCkuY29vcmRpbmF0ZVsxXSA+IDcgJiYgcGxheWVyMS5hY3RpdmVTaGlwLm5hbWUgPT09ICdjcnVpc2VyJylcbiAgICAgIHx8IChwbGF5ZXIxLmdhbWVCb2FyZC5nZXRDb29yZGluYXRlRnJvbUluZGV4KGlkKS5jb29yZGluYXRlWzFdID4gNiAmJiBwbGF5ZXIxLmFjdGl2ZVNoaXAubmFtZSA9PT0gJ2JhdHRsZXNoaXAnKVxuICAgICAgfHwgKHBsYXllcjEuZ2FtZUJvYXJkLmdldENvb3JkaW5hdGVGcm9tSW5kZXgoaWQpLmNvb3JkaW5hdGVbMV0gPiA1ICYmIHBsYXllcjEuYWN0aXZlU2hpcC5uYW1lID09PSAnY2FycmllcicpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXIxLmFjdGl2ZVNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocGxheWVyMS5hY3RpdmVTaGlwLmhvcml6b250YWxWZXJ0aWNhbCkge1xuICAgICAgaWYgKHBsYXllcjEuZ2FtZUJvYXJkLmdldENvb3JkaW5hdGVGcm9tSW5kZXgoYCR7cGFyc2VJbnQoaWQsIDEwKSArIGl9YCkub2NjdXBpZWQpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgfSBlbHNlIGlmIChwbGF5ZXIxLmdhbWVCb2FyZC5nZXRDb29yZGluYXRlRnJvbUluZGV4KGAke3BhcnNlSW50KGlkLCAxMCkgKyAoaSAqIDEwKX1gKS5vY2N1cGllZCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVIdWRPdmVybGF5RGlzcGxheShkaXNwbGF5KSB7XG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVkT3ZlcmxheScpO1xuICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5O1xufVxuXG5mdW5jdGlvbiBjaGVja0lmUGxheWVyT3V0b2ZTaGlwcygpIHtcbiAgaWYgKHBsYXllcjEuZGVzdHJveWVyQ291bnQgPD0gMFxuICAgICYmIHBsYXllcjEuc3VibWFyaW5lQ291bnQgPD0gMFxuICAgICYmIHBsYXllcjEuY3J1aXNlckNvdW50IDw9IDBcbiAgICAmJiBwbGF5ZXIxLmJhdHRsZXNoaXBDb3VudCA8PSAwXG4gICAgJiYgcGxheWVyMS5jYXJyaWVyQ291bnQgPD0gMCkge1xuICAgIHRvZ2dsZVNoaXBzT3ZlcmxheURpc3BsYXkoJ25vbmUnKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZHJhd1NoaXBUb1NoaXBCb2FyZChhY3RpdmVTaGlwLCBhcnJheSwgc2hpcFNxdWFyZSkge1xuICBpZiAoYWN0aXZlU2hpcC5uYW1lID09PSAnZGVzdHJveWVyJykge1xuICAgIGNvbnN0IGZyb250ID0gY3JlYXRlRGl2KCk7XG4gICAgZnJvbnQuY2xhc3NMaXN0LmFkZCgnZnJvbnQnKTtcbiAgICBpZiAoIWFjdGl2ZVNoaXAuaG9yaXpvbnRhbFZlcnRpY2FsKSB7IGZyb250LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoLjI1dHVybiknOyB9XG4gICAgc2hpcFNxdWFyZS5hcHBlbmQoZnJvbnQpO1xuICB9IGVsc2UgaWYgKGFjdGl2ZVNoaXAubmFtZSA9PT0gJ3N1Ym1hcmluZScpIHtcbiAgICBjb25zdCBmcm9udCA9IGNyZWF0ZURpdigpO1xuICAgIGZyb250LmNsYXNzTGlzdC5hZGQoJ2Zyb250Jyk7XG4gICAgY29uc3QgbWlkID0gY3JlYXRlRGl2KCk7XG4gICAgbWlkLmNsYXNzTGlzdC5hZGQoJ21pZCcpO1xuXG4gICAgaWYgKCFhY3RpdmVTaGlwLmhvcml6b250YWxWZXJ0aWNhbCkge1xuICAgICAgZnJvbnQuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSguMjV0dXJuKSc7XG4gICAgICBtaWQuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSguMjV0dXJuKSc7XG4gICAgICBzaGlwU3F1YXJlLmFwcGVuZChmcm9udCk7XG4gICAgICBjb25zdCBzcXVhcmUxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYFNfJHtwYXJzZUludChhcnJheVsxXSwgMTApICsgMTB9YCk7XG4gICAgICBzcXVhcmUxLmFwcGVuZChtaWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaGlwU3F1YXJlLmFwcGVuZChmcm9udCk7XG4gICAgICBjb25zdCBzcXVhcmUxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYFNfJHtwYXJzZUludChhcnJheVsxXSwgMTApICsgMX1gKTtcbiAgICAgIHNxdWFyZTEuYXBwZW5kKG1pZCk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGFjdGl2ZVNoaXAubmFtZSA9PT0gJ2NydWlzZXInKSB7XG4gICAgY29uc3QgZnJvbnQgPSBjcmVhdGVEaXYoKTtcbiAgICBmcm9udC5jbGFzc0xpc3QuYWRkKCdmcm9udCcpO1xuICAgIGNvbnN0IG1pZDEgPSBjcmVhdGVEaXYoKTtcbiAgICBtaWQxLmNsYXNzTGlzdC5hZGQoJ21pZCcpO1xuICAgIGNvbnN0IG1pZDIgPSBjcmVhdGVEaXYoKTtcbiAgICBtaWQyLmNsYXNzTGlzdC5hZGQoJ21pZCcpO1xuXG4gICAgaWYgKCFhY3RpdmVTaGlwLmhvcml6b250YWxWZXJ0aWNhbCkge1xuICAgICAgZnJvbnQuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSguMjV0dXJuKSc7XG4gICAgICBtaWQxLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoLjI1dHVybiknO1xuICAgICAgbWlkMi5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKC4yNXR1cm4pJztcblxuICAgICAgc2hpcFNxdWFyZS5hcHBlbmQoZnJvbnQpO1xuICAgICAgY29uc3Qgc3F1YXJlMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBTXyR7cGFyc2VJbnQoYXJyYXlbMV0sIDEwKSArIDEwfWApO1xuICAgICAgc3F1YXJlMS5hcHBlbmQobWlkMSk7XG4gICAgICBjb25zdCBzcXVhcmUyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYFNfJHtwYXJzZUludChhcnJheVsxXSwgMTApICsgMjB9YCk7XG4gICAgICBzcXVhcmUyLmFwcGVuZChtaWQyKTtcbiAgICB9IGVsc2UgaWYgKGFjdGl2ZVNoaXAuaG9yaXpvbnRhbFZlcnRpY2FsKSB7XG4gICAgICBzaGlwU3F1YXJlLmFwcGVuZChmcm9udCk7XG4gICAgICBjb25zdCBzcXVhcmUxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYFNfJHtwYXJzZUludChhcnJheVsxXSwgMTApICsgMX1gKTtcbiAgICAgIHNxdWFyZTEuYXBwZW5kKG1pZDEpO1xuICAgICAgY29uc3Qgc3F1YXJlMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBTXyR7cGFyc2VJbnQoYXJyYXlbMV0sIDEwKSArIDJ9YCk7XG4gICAgICBzcXVhcmUyLmFwcGVuZChtaWQyKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoYWN0aXZlU2hpcC5uYW1lID09PSAnYmF0dGxlc2hpcCcpIHtcbiAgICBjb25zdCBmcm9udCA9IGNyZWF0ZURpdigpO1xuICAgIGZyb250LmNsYXNzTGlzdC5hZGQoJ2Zyb250Jyk7XG4gICAgY29uc3QgbWlkMSA9IGNyZWF0ZURpdigpO1xuICAgIG1pZDEuY2xhc3NMaXN0LmFkZCgnbWlkJyk7XG4gICAgY29uc3QgbWlkMiA9IGNyZWF0ZURpdigpO1xuICAgIG1pZDIuY2xhc3NMaXN0LmFkZCgnbWlkJyk7XG4gICAgY29uc3QgbWlkMyA9IGNyZWF0ZURpdigpO1xuICAgIG1pZDMuY2xhc3NMaXN0LmFkZCgnbWlkJyk7XG5cbiAgICBpZiAoIWFjdGl2ZVNoaXAuaG9yaXpvbnRhbFZlcnRpY2FsKSB7XG4gICAgICBmcm9udC5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKC4yNXR1cm4pJztcbiAgICAgIG1pZDEuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSguMjV0dXJuKSc7XG4gICAgICBtaWQyLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoLjI1dHVybiknO1xuICAgICAgbWlkMy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKC4yNXR1cm4pJztcblxuICAgICAgc2hpcFNxdWFyZS5hcHBlbmQoZnJvbnQpO1xuICAgICAgY29uc3Qgc3F1YXJlMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBTXyR7cGFyc2VJbnQoYXJyYXlbMV0sIDEwKSArIDEwfWApO1xuICAgICAgc3F1YXJlMS5hcHBlbmQobWlkMSk7XG4gICAgICBjb25zdCBzcXVhcmUyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYFNfJHtwYXJzZUludChhcnJheVsxXSwgMTApICsgMjB9YCk7XG4gICAgICBzcXVhcmUyLmFwcGVuZChtaWQyKTtcbiAgICAgIGNvbnN0IHNxdWFyZTMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgU18ke3BhcnNlSW50KGFycmF5WzFdLCAxMCkgKyAzMH1gKTtcbiAgICAgIHNxdWFyZTMuYXBwZW5kKG1pZDMpO1xuICAgIH0gZWxzZSBpZiAoYWN0aXZlU2hpcC5ob3Jpem9udGFsVmVydGljYWwpIHtcbiAgICAgIHNoaXBTcXVhcmUuYXBwZW5kKGZyb250KTtcbiAgICAgIGNvbnN0IHNxdWFyZTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgU18ke3BhcnNlSW50KGFycmF5WzFdLCAxMCkgKyAxfWApO1xuICAgICAgc3F1YXJlMS5hcHBlbmQobWlkMSk7XG4gICAgICBjb25zdCBzcXVhcmUyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYFNfJHtwYXJzZUludChhcnJheVsxXSwgMTApICsgMn1gKTtcbiAgICAgIHNxdWFyZTIuYXBwZW5kKG1pZDIpO1xuICAgICAgY29uc3Qgc3F1YXJlMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBTXyR7cGFyc2VJbnQoYXJyYXlbMV0sIDEwKSArIDN9YCk7XG4gICAgICBzcXVhcmUzLmFwcGVuZChtaWQzKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoYWN0aXZlU2hpcC5uYW1lID09PSAnY2FycmllcicpIHtcbiAgICBjb25zdCBmcm9udCA9IGNyZWF0ZURpdigpO1xuICAgIGZyb250LmNsYXNzTGlzdC5hZGQoJ2Zyb250Jyk7XG4gICAgY29uc3QgbWlkMSA9IGNyZWF0ZURpdigpO1xuICAgIG1pZDEuY2xhc3NMaXN0LmFkZCgnbWlkJyk7XG4gICAgY29uc3QgbWlkMiA9IGNyZWF0ZURpdigpO1xuICAgIG1pZDIuY2xhc3NMaXN0LmFkZCgnbWlkJyk7XG4gICAgY29uc3QgbWlkMyA9IGNyZWF0ZURpdigpO1xuICAgIG1pZDMuY2xhc3NMaXN0LmFkZCgnbWlkJyk7XG4gICAgY29uc3QgbWlkNCA9IGNyZWF0ZURpdigpO1xuICAgIG1pZDQuY2xhc3NMaXN0LmFkZCgnbWlkJyk7XG5cbiAgICBpZiAoIWFjdGl2ZVNoaXAuaG9yaXpvbnRhbFZlcnRpY2FsKSB7XG4gICAgICBmcm9udC5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKC4yNXR1cm4pJztcbiAgICAgIG1pZDEuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSguMjV0dXJuKSc7XG4gICAgICBtaWQyLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoLjI1dHVybiknO1xuICAgICAgbWlkMy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKC4yNXR1cm4pJztcbiAgICAgIG1pZDQuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSguMjV0dXJuKSc7XG5cbiAgICAgIHNoaXBTcXVhcmUuYXBwZW5kKGZyb250KTtcbiAgICAgIGNvbnN0IHNxdWFyZTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgU18ke3BhcnNlSW50KGFycmF5WzFdLCAxMCkgKyAxMH1gKTtcbiAgICAgIHNxdWFyZTEuYXBwZW5kKG1pZDEpO1xuICAgICAgY29uc3Qgc3F1YXJlMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBTXyR7cGFyc2VJbnQoYXJyYXlbMV0sIDEwKSArIDIwfWApO1xuICAgICAgc3F1YXJlMi5hcHBlbmQobWlkMik7XG4gICAgICBjb25zdCBzcXVhcmUzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYFNfJHtwYXJzZUludChhcnJheVsxXSwgMTApICsgMzB9YCk7XG4gICAgICBzcXVhcmUzLmFwcGVuZChtaWQzKTtcbiAgICAgIGNvbnN0IHNxdWFyZTQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgU18ke3BhcnNlSW50KGFycmF5WzFdLCAxMCkgKyA0MH1gKTtcbiAgICAgIHNxdWFyZTQuYXBwZW5kKG1pZDQpO1xuICAgIH0gZWxzZSBpZiAoYWN0aXZlU2hpcC5ob3Jpem9udGFsVmVydGljYWwpIHtcbiAgICAgIHNoaXBTcXVhcmUuYXBwZW5kKGZyb250KTtcbiAgICAgIGNvbnN0IHNxdWFyZTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgU18ke3BhcnNlSW50KGFycmF5WzFdLCAxMCkgKyAxfWApO1xuICAgICAgc3F1YXJlMS5hcHBlbmQobWlkMSk7XG4gICAgICBjb25zdCBzcXVhcmUyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYFNfJHtwYXJzZUludChhcnJheVsxXSwgMTApICsgMn1gKTtcbiAgICAgIHNxdWFyZTIuYXBwZW5kKG1pZDIpO1xuICAgICAgY29uc3Qgc3F1YXJlMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBTXyR7cGFyc2VJbnQoYXJyYXlbMV0sIDEwKSArIDN9YCk7XG4gICAgICBzcXVhcmUzLmFwcGVuZChtaWQzKTtcbiAgICAgIGNvbnN0IHNxdWFyZTQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgU18ke3BhcnNlSW50KGFycmF5WzFdLCAxMCkgKyA0fWApO1xuICAgICAgc3F1YXJlNC5hcHBlbmQobWlkNCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHBsYWNlU2hpcCgpIHtcbiAgY29uc3QgYXJyYXkgPSB0aGlzLmdldEF0dHJpYnV0ZSgnaWQnKS5zcGxpdCgnU18nKTtcbiAgaWYgKGlzVmFsaWQoYXJyYXlbMV0pKSB7XG4gICAgY29uc3Qgb2xkQWN0aXZlU2hpcCA9IHBsYXllcjEuYWN0aXZlU2hpcDtcbiAgICBwbGF5ZXIxLnBsYWNlU2hpcChwbGF5ZXIxLmdhbWVCb2FyZC5nZXRDb29yZGluYXRlRnJvbUluZGV4KGFycmF5WzFdKS5jb29yZGluYXRlKTtcbiAgICBkcmF3U2hpcFRvU2hpcEJvYXJkKG9sZEFjdGl2ZVNoaXAsIGFycmF5LCB0aGlzKTtcbiAgICBpZiAoIWNoZWNrSWZQbGF5ZXJPdXRvZlNoaXBzKCkpIHtcbiAgICAgIGNsZWFyU2VsZWN0ZWRTaGlwKCk7XG4gICAgICBzZXROb1NoaXBTZWxlY3RlZCgpO1xuICAgICAgdG9nZ2xlU2hpcHNPdmVybGF5RGlzcGxheSgnbm9uZScpO1xuICAgICAgdG9nZ2xlU2hpcEJvYXJkT3ZlcmxheSgnMycpO1xuICAgICAgZGVmYXVsdE9yaWVudGF0aW9uQnV0dG9uQ29weSgpO1xuICAgICAgdG9nZ2xlT3JpZW50YXRpb25CdXR0b25EaXNhYmxlZCh0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2xlYXJTZWxlY3RlZFNoaXAoKTtcbiAgICAgIHNldE5vU2hpcFNlbGVjdGVkKCk7XG4gICAgICB0b2dnbGVIdWRPdmVybGF5RGlzcGxheSgnYmxvY2snKTtcbiAgICAgIGJsb2NrU2hpcEJvYXJkKCcyJywgJzMnKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tGb3JXaW5uZXIoKSB7XG4gIGlmIChwbGF5ZXIxLnNjb3JlID09PSAxNSkge1xuICAgIGJsb2NrU2hpcEJvYXJkKCcxJywgJzMnKTtcbiAgICBjcmVhdGVNb2RhbCgnTWlzc2lvbiBTdWNjZWVkZWQhIDxicj4gUGxheWVyIFdvbiEnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaXJlKCkge1xuICBjb25zdCBhcnJheSA9IHRoaXMuZ2V0QXR0cmlidXRlKCdpZCcpLnNwbGl0KCdNXycpO1xuICBpZiAoIXBsYXllcjEudmlzaXRlZE1hcC5oYXMoYCR7YXJyYXlbMV19YCkpIHtcbiAgICBwbGF5ZXIxLnZpc2l0ZWRNYXAuc2V0KGAke2FycmF5WzFdfWAsIHRydWUpO1xuICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQoYXJyYXlbMV0sIDEwKTtcbiAgICBhaS5wbGF5ZXIucmVjZWl2ZUZpcmUoYWkucGxheWVyLmdhbWVCb2FyZC5nZXRDb29yZGluYXRlRnJvbUluZGV4KGluZGV4KS5jb29yZGluYXRlKTtcbiAgICBpZiAoYWkucGxheWVyLmdhbWVCb2FyZC5nZXRDb29yZGluYXRlRnJvbUluZGV4KGluZGV4KS5oaXRcbiAgJiYgYWkucGxheWVyLmdhbWVCb2FyZC5nZXRDb29yZGluYXRlRnJvbUluZGV4KGluZGV4KS5vY2N1cGllZCkge1xuICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kID0gJ3JnYigxOTYsIDM2LCA2MyknO1xuICAgICAgdGhpcy5zdHlsZS5ib3JkZXJDb2xvciA9ICdibGFjayc7XG4gICAgICBwbGF5ZXIxLnNjb3JlKys7XG4gICAgICBjaGVja0Zvcldpbm5lcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0eWxlLmJhY2tncm91bmQgPSAnd2hpdGUnO1xuICAgIH1cblxuICAgIGFpLmZpcmUocGxheWVyMSk7XG4gIH1cbn1cblxuZXhwb3J0IHsgcGxhY2VTaGlwLCBmaXJlIH07XG4iLCIjIS91c3IvYmluL2VudiBub2RlXG5cbmNvbnN0IFBsYXllciA9IHJlcXVpcmUoJy4vcGxheWVyJyk7XG5jb25zdCBHYW1lQm9hcmQgPSByZXF1aXJlKCcuL2dhbWVCb2FyZCcpO1xuY29uc3QgeyBjcmVhdGVEaXYsIGNyZWF0ZU1vZGFsLCBibG9ja1NoaXBCb2FyZCB9ID0gcmVxdWlyZSgnLi4vcmV1c2FibGVzL2VsZW1lbnRzJyk7XG5cbmNsYXNzIEFJIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKCk7XG4gICAgdGhpcy5taXNzbGVCb2FyZWQgPSBuZXcgR2FtZUJvYXJkKCk7XG4gICAgdGhpcy5wbGFjZVNoaXBzKCk7XG4gICAgdGhpcy5sYXN0T2NjdXBpZWQgPSBudWxsO1xuICB9XG5cbiAgc2VsZWN0U2hpcChuYW1lKSB7XG4gICAgdGhpcy5wbGF5ZXIuc2VsZWN0U2hpcChuYW1lKTtcbiAgfVxuXG4gIGNoYW5nZU9yaWVudGF0aW9uKCkge1xuICAgIGNvbnN0IHJhbmRvbU51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuICAgIGlmIChyYW5kb21OdW1iZXIgPT09IDEpIHRoaXMucGxheWVyLmNoYW5nZU9yaWVudGF0aW9uKCk7XG4gIH1cblxuICBmaW5kVmFsaWRDb29yZGluYXRlQW5kUGxhY2VTaGlwKCkge1xuICAgIHdoaWxlICh0aGlzLnBsYXllci5hY3RpdmVTaGlwICE9PSBudWxsKSB7XG4gICAgICBjb25zdCByYW5kb21OdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuICAgICAgY29uc3QgY29vcmRpbmF0ZSA9IHRoaXMucGxheWVyLmdhbWVCb2FyZC5nZXRDb29yZGluYXRlRnJvbUluZGV4KHJhbmRvbU51bWJlcik7XG4gICAgICB0aGlzLmNoYW5nZU9yaWVudGF0aW9uKCk7XG4gICAgICB0aGlzLnBsYXllci5wbGFjZVNoaXAoY29vcmRpbmF0ZS5jb29yZGluYXRlKTtcbiAgICB9XG4gIH1cblxuICBwbGFjZVNoaXBzKCkge1xuICAgIHdoaWxlICh0aGlzLnBsYXllci5zaGlwTWFwLnNpemUgPiAwKSB7XG4gICAgICBjb25zdCByYW5kb21OdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1KTtcbiAgICAgIHN3aXRjaCAocmFuZG9tTnVtYmVyKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIuZGVzdHJveWVyQ291bnQgPiAwKSB7IHRoaXMuc2VsZWN0U2hpcCgnZGVzdHJveWVyJyk7IH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGlmICh0aGlzLnBsYXllci5zdWJtYXJpbmVDb3VudCA+IDApIHsgdGhpcy5zZWxlY3RTaGlwKCdzdWJtYXJpbmUnKTsgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaWYgKHRoaXMucGxheWVyLmNydWlzZXJDb3VudCA+IDApIHsgdGhpcy5zZWxlY3RTaGlwKCdjcnVpc2VyJyk7IH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGlmICh0aGlzLnBsYXllci5iYXR0bGVzaGlwQ291bnQgPiAwKSB7IHRoaXMuc2VsZWN0U2hpcCgnYmF0dGxlc2hpcCcpOyB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIuY2FycmllckNvdW50ID4gMCkgeyB0aGlzLnNlbGVjdFNoaXAoJ2NhcnJpZXInKTsgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgfVxuICAgICAgdGhpcy5maW5kVmFsaWRDb29yZGluYXRlQW5kUGxhY2VTaGlwKCk7XG4gICAgfVxuICB9XG5cbiAgYW5hbHl6ZUxhc3RPY2N1cGllZChwbGF5ZXIgPSBuZXcgUGxheWVyKCkpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllci5vY2N1cGllZFNoaXBNYXAuZ2V0KHRoaXMubGFzdE9jY3VwaWVkLnNoaXBOYW1lKS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaW5kZXggPSBwbGF5ZXIuZ2FtZUJvYXJkLmdldEluZGV4T2ZDb29yZGluYXRlKFxuICAgICAgICBwbGF5ZXIub2NjdXBpZWRTaGlwTWFwLmdldCh0aGlzLmxhc3RPY2N1cGllZC5zaGlwTmFtZSlbaV0uY29vcmRpbmF0ZSxcbiAgICAgICk7XG5cbiAgICAgIGlmICghdGhpcy5wbGF5ZXIudmlzaXRlZE1hcC5oYXMoYCR7aW5kZXh9YCkpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIudmlzaXRlZE1hcC5zZXQoYCR7aW5kZXh9YCwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNyZWF0ZU1vZGFsKHRleHQpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb25zdCBiZyA9IGNyZWF0ZURpdigpO1xuICAgIGJnLnNldEF0dHJpYnV0ZSgnaWQnLCAnYmdPdmVybGF5Jyk7XG5cbiAgICBjb25zdCBtb2RhbCA9IGNyZWF0ZURpdigpO1xuICAgIG1vZGFsLnNldEF0dHJpYnV0ZSgnaWQnLCAnbW9kYWwnKTtcbiAgICBtb2RhbC5pbm5lckhUTUwgPSB0ZXh0O1xuICAgIGJnLmFwcGVuZChtb2RhbCk7XG5cbiAgICBjb250ZW50LmFwcGVuZChiZyk7XG4gIH1cblxuICBjaGVja0Zvcldpbm5lcigpIHtcbiAgICBpZiAodGhpcy5wbGF5ZXIuc2NvcmUgPT09IDE1KSB7XG4gICAgICBibG9ja1NoaXBCb2FyZCgnMScsICczJyk7XG4gICAgICBjcmVhdGVNb2RhbCgnTWlzc2lvbiBGYWlsZWQuLi4gPGJyPiBBSSBXb24uLi4nKTtcbiAgICB9XG4gIH1cblxuICBmaXJlKHBsYXllciA9IG5ldyBQbGF5ZXIoKSkge1xuICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCk7XG4gICAgd2hpbGUgKHRoaXMucGxheWVyLnZpc2l0ZWRNYXAuaGFzKGAke2luZGV4fWApKSB7XG4gICAgICBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCk7XG4gICAgfVxuXG4gICAgbGV0IGJldHRlckluZGV4ID0gbnVsbDtcbiAgICBpZiAodGhpcy5sYXN0T2NjdXBpZWQgIT09IG51bGwpIHsgYmV0dGVySW5kZXggPSB0aGlzLmFuYWx5emVMYXN0T2NjdXBpZWQocGxheWVyKTsgfVxuXG4gICAgaWYgKGJldHRlckluZGV4ID09PSBudWxsKSB7XG4gICAgICB0aGlzLmxhc3RPY2N1cGllZCA9IG51bGw7XG4gICAgICBjb25zdCBzaGlwQm9hcmRTcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjU18ke2luZGV4fWApO1xuICAgICAgdGhpcy5wbGF5ZXIudmlzaXRlZE1hcC5zZXQoYCR7aW5kZXh9YCwgdHJ1ZSk7XG4gICAgICBpZiAocGxheWVyLmdhbWVCb2FyZC5nZXRDb29yZGluYXRlRnJvbUluZGV4KGluZGV4KS5vY2N1cGllZCkge1xuICAgICAgICB0aGlzLmxhc3RPY2N1cGllZCA9IHBsYXllci5nYW1lQm9hcmQuZ2V0Q29vcmRpbmF0ZUZyb21JbmRleChpbmRleCk7XG4gICAgICAgIHNoaXBCb2FyZFNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kID0gJ3JlZCc7XG4gICAgICAgIHRoaXMucGxheWVyLnNjb3JlKys7XG4gICAgICAgIHRoaXMuY2hlY2tGb3JXaW5uZXIoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNoaXBCb2FyZFNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kID0gJ3doaXRlJztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc2hpcEJvYXJkU3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI1NfJHtiZXR0ZXJJbmRleH1gKTtcbiAgICAgIHRoaXMucGxheWVyLnZpc2l0ZWRNYXAuc2V0KGAke2JldHRlckluZGV4fWAsIHRydWUpO1xuICAgICAgaWYgKHBsYXllci5nYW1lQm9hcmQuZ2V0Q29vcmRpbmF0ZUZyb21JbmRleChiZXR0ZXJJbmRleCkub2NjdXBpZWQpIHtcbiAgICAgICAgdGhpcy5sYXN0T2NjdXBpZWQgPSBwbGF5ZXIuZ2FtZUJvYXJkLmdldENvb3JkaW5hdGVGcm9tSW5kZXgoYmV0dGVySW5kZXgpO1xuICAgICAgICBzaGlwQm9hcmRTcXVhcmUuc3R5bGUuYmFja2dyb3VuZCA9ICdyZWQnO1xuICAgICAgICB0aGlzLnBsYXllci5zY29yZSsrO1xuICAgICAgICB0aGlzLmNoZWNrRm9yV2lubmVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQUk7XG4iLCJjbGFzcyBCYXR0bGVTaGlwIHtcbiAgY29uc3RydWN0b3IobmFtZSwgbGVuZ3RoKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICB0aGlzLmhvcml6b250YWxWZXJ0aWNhbCA9IHRydWU7XG4gIH1cblxuICBjaGFuZ2VPcmllbnRhdGlvbigpIHtcbiAgICB0aGlzLmhvcml6b250YWxWZXJ0aWNhbCA9ICF0aGlzLmhvcml6b250YWxWZXJ0aWNhbDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJhdHRsZVNoaXA7XG4iLCJjbGFzcyBDb29yZGluYXRlIHtcbiAgY29uc3RydWN0b3IoY29vcmRpbmF0ZSkge1xuICAgIGlmICh0aGlzLmNoZWNrVmFsaWQoY29vcmRpbmF0ZSkpIHsgdGhpcy5jb29yZGluYXRlID0gY29vcmRpbmF0ZTsgfSBlbHNlIHRoaXMuY29vcmRpbmF0ZSA9IG51bGw7XG4gICAgdGhpcy5oaXQgPSBmYWxzZTtcbiAgICB0aGlzLm9jY3VwaWVkID0gZmFsc2U7XG4gICAgdGhpcy5sZW5ndGhOdW1iZXIgPSAwO1xuICAgIHRoaXMuc2hpcE5hbWUgPSAnJztcbiAgICB0aGlzLnNoaXBIb3Jpem9udGFsVmVydGljYWwgPSB0cnVlO1xuICAgIHRoaXMucGxheWVyID0gbnVsbDtcbiAgfVxuXG4gIGNoZWNrVmFsaWQoY29vcmRpbmF0ZSkge1xuICAgIGlmIChjb29yZGluYXRlWzBdID49IDBcbiAgICAgICAgJiYgY29vcmRpbmF0ZVswXSA8PSA5XG4gICAgICAgICYmIGNvb3JkaW5hdGVbMV0gPj0gMFxuICAgICAgICAmJiBjb29yZGluYXRlWzFdIDw9IDlcbiAgICApIHJldHVybiB0cnVlO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gU2V0dGVyc1xuICBzZXRQbGF5ZXIocGxheWVyKSB7XG4gICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XG4gIH1cblxuICBzZXRIaXQoaGl0KSB7XG4gICAgdGhpcy5oaXQgPSBoaXQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb29yZGluYXRlO1xuIiwiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuY29uc3QgQ29vcmRpbmF0ZSA9IHJlcXVpcmUoJy4vY29vcmRpbmF0ZScpO1xuXG5jbGFzcyBHYW1lQm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmdhbWVCb2FyZCA9IHRoaXMuY3JlYXRlR2FtZUJvYXJkKCk7XG4gIH1cblxuICAvLyBJbml0IEZ1bmN0aW9uc1xuICBjcmVhdGVHYW1lQm9hcmQoKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXTtcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IDEwOyB5KyspIHtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgMTA7IHgrKykge1xuICAgICAgICBjb25zdCBjb29yZGluYXRlID0gbmV3IENvb3JkaW5hdGUoW3gsIHldKTtcbiAgICAgICAgYXJyYXkucHVzaChjb29yZGluYXRlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFycmF5O1xuICB9XG5cbiAgaXNDb29yZGluYXRlVmFsaWQoY29vcmRpbmF0ZSkge1xuICAgIGlmIChjb29yZGluYXRlWzBdID49IDBcbiAgICAgICYmIGNvb3JkaW5hdGVbMF0gPD0gOVxuICAgICAgJiYgY29vcmRpbmF0ZVsxXSA+PSAwXG4gICAgICAmJiBjb29yZGluYXRlWzFdIDw9IDlcbiAgICApIHJldHVybiB0cnVlO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaXNJbmRleFZhbGlkKGluZGV4KSB7XG4gICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCB0aGlzLmdhbWVCb2FyZC5sZW5ndGgpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEdldHRlcnNcbiAgZ2V0R2FtZUJvYXJkKCkge1xuICAgIHJldHVybiB0aGlzLmdhbWVCb2FyZDtcbiAgfVxuXG4gIGdldEluZGV4T2ZDb29yZGluYXRlKGNvb3JkaW5hdGUpIHtcbiAgICBpZiAodGhpcy5pc0Nvb3JkaW5hdGVWYWxpZChjb29yZGluYXRlKSkge1xuICAgICAgY29uc3QgZmluZENvb3JkaW5hdGUgPSAoZWxlbWVudCkgPT4gYCR7ZWxlbWVudC5jb29yZGluYXRlfWAgPT09IGAke2Nvb3JkaW5hdGV9YDtcbiAgICAgIHJldHVybiB0aGlzLmdhbWVCb2FyZC5maW5kSW5kZXgoZmluZENvb3JkaW5hdGUpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGdldENvb3JkaW5hdGVGcm9tSW5kZXgoaW5kZXgpIHtcbiAgICBpZiAodGhpcy5pc0luZGV4VmFsaWQoaW5kZXgpKSB7IHJldHVybiB0aGlzLmdhbWVCb2FyZFtpbmRleF07IH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGdldENvb3JkaW5hdGVGcm9tQ29vcmRpbmF0ZShjb29yZGluYXRlKSB7XG4gICAgaWYgKHRoaXMuaXNDb29yZGluYXRlVmFsaWQoY29vcmRpbmF0ZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLmdhbWVCb2FyZFtcbiAgICAgICAgdGhpcy5nZXRJbmRleE9mQ29vcmRpbmF0ZShjb29yZGluYXRlKV07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy8gU2V0dGVyc1xuICBzZXRIaXRUcnVlKGNvb3JkaW5hdGUpIHtcbiAgICBpZiAodGhpcy5pc0Nvb3JkaW5hdGVWYWxpZChjb29yZGluYXRlKSkge1xuICAgICAgdGhpcy5nYW1lQm9hcmRbdGhpcy5nZXRJbmRleE9mQ29vcmRpbmF0ZShjb29yZGluYXRlKV0uc2V0SGl0KHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIHNldEhpdEZhbHNlKGNvb3JkaW5hdGUpIHtcbiAgICBpZiAodGhpcy5pc0Nvb3JkaW5hdGVWYWxpZChjb29yZGluYXRlKSkge1xuICAgICAgdGhpcy5nYW1lQm9hcmRbdGhpcy5nZXRJbmRleE9mQ29vcmRpbmF0ZShjb29yZGluYXRlKV0uc2V0SGl0KGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBnZXRIaXQoY29vcmRpbmF0ZSkge1xuICAgIGlmICh0aGlzLmlzQ29vcmRpbmF0ZVZhbGlkKGNvb3JkaW5hdGUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5nYW1lQm9hcmRbXG4gICAgICAgIHRoaXMuZ2V0SW5kZXhPZkNvb3JkaW5hdGUoY29vcmRpbmF0ZSldLmhpdDtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVCb2FyZDtcbiIsImNvbnN0IEdhbWVCb2FyZCA9IHJlcXVpcmUoJy4vZ2FtZUJvYXJkJyk7XG5jb25zdCBCYXR0bGVTaGlwID0gcmVxdWlyZSgnLi9iYXR0bGVzaGlwJyk7XG5cbmNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZ2FtZUJvYXJkID0gbmV3IEdhbWVCb2FyZCgpO1xuICAgIHRoaXMuc2hpcE1hcCA9IHRoaXMuY3JlYXRlU2hpcE1hcCgpO1xuICAgIHRoaXMuYWN0aXZlU2hpcCA9IG51bGw7XG4gICAgdGhpcy5kZXN0cm95ZXJDb3VudCA9IHRoaXMuc2hpcE1hcC5nZXQoJ2Rlc3Ryb3llcicpLmxlbmd0aDtcbiAgICB0aGlzLnN1Ym1hcmluZUNvdW50ID0gdGhpcy5zaGlwTWFwLmdldCgnc3VibWFyaW5lJykubGVuZ3RoO1xuICAgIHRoaXMuY3J1aXNlckNvdW50ID0gdGhpcy5zaGlwTWFwLmdldCgnY3J1aXNlcicpLmxlbmd0aDtcbiAgICB0aGlzLmJhdHRsZXNoaXBDb3VudCA9IHRoaXMuc2hpcE1hcC5nZXQoJ2JhdHRsZXNoaXAnKS5sZW5ndGg7XG4gICAgdGhpcy5jYXJyaWVyQ291bnQgPSB0aGlzLnNoaXBNYXAuZ2V0KCdjYXJyaWVyJykubGVuZ3RoO1xuICAgIHRoaXMub2NjdXBpZWRDb29yZGluYXRlcyA9IFtdO1xuICAgIHRoaXMub2NjdXBpZWRTaGlwTWFwID0gbmV3IE1hcCgpO1xuICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgIHRoaXMudmlzaXRlZE1hcCA9IG5ldyBNYXAoKTtcbiAgfVxuXG4gIGNyZWF0ZVNoaXBNYXAoKSB7XG4gICAgY29uc3QgbWFwID0gbmV3IE1hcCgpO1xuICAgIG1hcC5zZXQoJ2Rlc3Ryb3llcicsIEFycmF5KDEpLmZpbGwobmV3IEJhdHRsZVNoaXAoJ2Rlc3Ryb3llcicsIDEpKSk7XG4gICAgbWFwLnNldCgnc3VibWFyaW5lJywgQXJyYXkoMSkuZmlsbChuZXcgQmF0dGxlU2hpcCgnc3VibWFyaW5lJywgMikpKTtcbiAgICBtYXAuc2V0KCdjcnVpc2VyJywgQXJyYXkoMSkuZmlsbChuZXcgQmF0dGxlU2hpcCgnY3J1aXNlcicsIDMpKSk7XG4gICAgbWFwLnNldCgnYmF0dGxlc2hpcCcsIEFycmF5KDEpLmZpbGwobmV3IEJhdHRsZVNoaXAoJ2JhdHRsZXNoaXAnLCA0KSkpO1xuICAgIG1hcC5zZXQoJ2NhcnJpZXInLCBBcnJheSgxKS5maWxsKG5ldyBCYXR0bGVTaGlwKCdjYXJyaWVyJywgNSkpKTtcbiAgICByZXR1cm4gbWFwO1xuICB9XG5cbiAgdXBkYXRlU2hpcENvdW50cyhrZXkpIHtcbiAgICBpZiAoa2V5ID09PSAnZGVzdHJveWVyJykge1xuICAgICAgdGhpcy5kZXN0cm95ZXJDb3VudCA9IHRoaXMuc2hpcE1hcC5nZXQoa2V5KS5sZW5ndGg7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdzdWJtYXJpbmUnKSB7XG4gICAgICB0aGlzLnN1Ym1hcmluZUNvdW50ID0gdGhpcy5zaGlwTWFwLmdldChrZXkpLmxlbmd0aDtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2NydWlzZXInKSB7XG4gICAgICB0aGlzLmNydWlzZXJDb3VudCA9IHRoaXMuc2hpcE1hcC5nZXQoa2V5KS5sZW5ndGg7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdiYXR0bGVzaGlwJykge1xuICAgICAgdGhpcy5iYXR0bGVzaGlwQ291bnQgPSB0aGlzLnNoaXBNYXAuZ2V0KGtleSkubGVuZ3RoO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnY2FycmllcicpIHtcbiAgICAgIHRoaXMuY2FycmllckNvdW50ID0gdGhpcy5zaGlwTWFwLmdldChrZXkpLmxlbmd0aDtcbiAgICB9XG4gIH1cblxuICBjaGVja1RvRGVsZXRlU2hpcE1hcE9iamVjdChrZXkpIHtcbiAgICBpZiAodGhpcy5zaGlwTWFwLmdldChrZXkpLmxlbmd0aCA9PT0gMCkgeyB0aGlzLnNoaXBNYXAuZGVsZXRlKGtleSk7IH1cbiAgfVxuXG4gIHNlbGVjdFNoaXAoa2V5KSB7XG4gICAgaWYgKHRoaXMuc2hpcE1hcC5oYXMoa2V5KSkge1xuICAgICAgaWYgKHRoaXMuc2hpcE1hcC5nZXQoa2V5KS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgdGhpcy5hY3RpdmVTaGlwID0gdGhpcy5zaGlwTWFwLmdldChrZXkpLnNoaWZ0KCk7XG4gICAgICAgIHRoaXMudXBkYXRlU2hpcENvdW50cyhrZXkpO1xuICAgICAgfSBlbHNlIHsgdGhpcy5hY3RpdmVTaGlwID0gbnVsbDsgfVxuICAgIH1cbiAgfVxuXG4gIGRlc2VsZWN0U2hpcCgpIHtcbiAgICBjb25zdCBrZXkgPSB0aGlzLmFjdGl2ZVNoaXAubmFtZTtcbiAgICB0aGlzLnNoaXBNYXAuZ2V0KHRoaXMuYWN0aXZlU2hpcC5uYW1lKS51bnNoaWZ0KHRoaXMuYWN0aXZlU2hpcCk7XG4gICAgdGhpcy5hY3RpdmVTaGlwID0gbnVsbDtcbiAgICB0aGlzLnVwZGF0ZVNoaXBDb3VudHMoa2V5KTtcbiAgfVxuXG4gIGNoYW5nZU9yaWVudGF0aW9uKCkge1xuICAgIHRoaXMuYWN0aXZlU2hpcC5ob3Jpem9udGFsVmVydGljYWwgPSAhdGhpcy5hY3RpdmVTaGlwLmhvcml6b250YWxWZXJ0aWNhbDtcbiAgfVxuXG4gIGlzQ29vcmRpbmF0ZVZhbGlkKGNvb3JkaW5hdGUpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2FtZUJvYXJkLmdldEluZGV4T2ZDb29yZGluYXRlKGNvb3JkaW5hdGUpO1xuXG4gICAgaWYgKHRoaXMuYWN0aXZlU2hpcCAhPT0gbnVsbFxuICAgICAgJiYgdGhpcy5nYW1lQm9hcmQuZ2V0Q29vcmRpbmF0ZUZyb21Db29yZGluYXRlKGNvb3JkaW5hdGUpLm9jY3VwaWVkID09PSBmYWxzZVxuICAgICAgJiYgY29vcmRpbmF0ZVswXSA+PSAwXG4gICAgICAmJiBjb29yZGluYXRlWzBdIDw9IDlcbiAgICAgICYmIGNvb3JkaW5hdGVbMV0gPj0gMFxuICAgICAgJiYgY29vcmRpbmF0ZVsxXSA8PSA5KSB7XG4gICAgICBpZiAodGhpcy5hY3RpdmVTaGlwLmhvcml6b250YWxWZXJ0aWNhbCkge1xuICAgICAgICBpZiAoKHBhcnNlSW50KGluZGV4LCAxMCkgJSAxMCA+IDkgJiYgdGhpcy5hY3RpdmVTaGlwLm5hbWUgPT09ICdkZXN0cm95ZXInKVxuICAgICAgICAgIHx8IChwYXJzZUludChpbmRleCwgMTApICUgMTAgPiA4ICYmIHRoaXMuYWN0aXZlU2hpcC5uYW1lID09PSAnc3VibWFyaW5lJylcbiAgICAgICAgICB8fCAocGFyc2VJbnQoaW5kZXgsIDEwKSAlIDEwID4gNyAmJiB0aGlzLmFjdGl2ZVNoaXAubmFtZSA9PT0gJ2NydWlzZXInKVxuICAgICAgICAgIHx8IChwYXJzZUludChpbmRleCwgMTApICUgMTAgPiA2ICYmIHRoaXMuYWN0aXZlU2hpcC5uYW1lID09PSAnYmF0dGxlc2hpcCcpXG4gICAgICAgICAgfHwgKHBhcnNlSW50KGluZGV4LCAxMCkgJSAxMCA+IDUgJiYgdGhpcy5hY3RpdmVTaGlwLm5hbWUgPT09ICdjYXJyaWVyJykpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMuYWN0aXZlU2hpcC5ob3Jpem9udGFsVmVydGljYWwpIHtcbiAgICAgICAgaWYgKChjb29yZGluYXRlWzFdID4gOSAmJiB0aGlzLmFjdGl2ZVNoaXAubmFtZSA9PT0gJ2Rlc3Ryb3llcicpXG4gICAgICAgICAgfHwgKGNvb3JkaW5hdGVbMV0gPiA4ICYmIHRoaXMuYWN0aXZlU2hpcC5uYW1lID09PSAnc3VibWFyaW5lJylcbiAgICAgICAgICB8fCAoY29vcmRpbmF0ZVsxXSA+IDcgJiYgdGhpcy5hY3RpdmVTaGlwLm5hbWUgPT09ICdjcnVpc2VyJylcbiAgICAgICAgICB8fCAoY29vcmRpbmF0ZVsxXSA+IDYgJiYgdGhpcy5hY3RpdmVTaGlwLm5hbWUgPT09ICdiYXR0bGVzaGlwJylcbiAgICAgICAgICB8fCAoY29vcmRpbmF0ZVsxXSA+IDUgJiYgdGhpcy5hY3RpdmVTaGlwLm5hbWUgPT09ICdjYXJyaWVyJylcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hY3RpdmVTaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZVNoaXAuaG9yaXpvbnRhbFZlcnRpY2FsKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZ2FtZUJvYXJkLmdldENvb3JkaW5hdGVGcm9tSW5kZXgoYCR7cGFyc2VJbnQoaW5kZXgsIDEwKSArIGl9YCkub2NjdXBpZWQpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuYWN0aXZlU2hpcC5ob3Jpem9udGFsVmVydGljYWwpIHtcbiAgICAgICAgICBpZiAodGhpcy5nYW1lQm9hcmQuZ2V0Q29vcmRpbmF0ZUZyb21JbmRleChgJHtwYXJzZUludChpbmRleCwgMTApICsgKGkgKiAxMCl9YCkub2NjdXBpZWQpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICB1cGRhdGVPY2N1cGllZENvb3JkaW5hdGVzKGNvb3JkaW5hdGVBcnJheSkge1xuICAgIHRoaXMub2NjdXBpZWRDb29yZGluYXRlcy5wdXNoKGNvb3JkaW5hdGVBcnJheSk7XG4gICAgdGhpcy5vY2N1cGllZFNoaXBNYXAuc2V0KGAke3RoaXMuYWN0aXZlU2hpcC5uYW1lfWAsIGNvb3JkaW5hdGVBcnJheSk7XG4gIH1cblxuICBwbGFjZVNoaXAoY29vcmRpbmF0ZSkge1xuICAgIGlmICh0aGlzLmlzQ29vcmRpbmF0ZVZhbGlkKGNvb3JkaW5hdGUpKSB7XG4gICAgICBjb25zdCB0ZW1wQXJyYXkgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hY3RpdmVTaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG5ld0Nvb3JkaW5hdGUgPSAodGhpcy5hY3RpdmVTaGlwLmhvcml6b250YWxWZXJ0aWNhbClcbiAgICAgICAgICA/IFtjb29yZGluYXRlWzBdICsgaSwgY29vcmRpbmF0ZVsxXV0gOiBbY29vcmRpbmF0ZVswXSwgY29vcmRpbmF0ZVsxXSArIGldO1xuXG4gICAgICAgIHRoaXMuZ2FtZUJvYXJkLmdldENvb3JkaW5hdGVGcm9tQ29vcmRpbmF0ZShcbiAgICAgICAgICBuZXdDb29yZGluYXRlLFxuICAgICAgICApLmxlbmd0aE51bWJlciA9IGk7XG5cbiAgICAgICAgdGhpcy5nYW1lQm9hcmQuZ2V0Q29vcmRpbmF0ZUZyb21Db29yZGluYXRlKFxuICAgICAgICAgIG5ld0Nvb3JkaW5hdGUsXG4gICAgICAgICkub2NjdXBpZWQgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuZ2FtZUJvYXJkLmdldENvb3JkaW5hdGVGcm9tQ29vcmRpbmF0ZShcbiAgICAgICAgICBuZXdDb29yZGluYXRlLFxuICAgICAgICApLnNoaXBOYW1lID0gdGhpcy5hY3RpdmVTaGlwLm5hbWU7XG5cbiAgICAgICAgdGhpcy5nYW1lQm9hcmQuZ2V0Q29vcmRpbmF0ZUZyb21Db29yZGluYXRlKFxuICAgICAgICAgIG5ld0Nvb3JkaW5hdGUsXG4gICAgICAgICkuc2hpcEhvcml6b250YWxWZXJ0aWNhbCA9IHRoaXMuYWN0aXZlU2hpcC5ob3Jpem9udGFsVmVydGljYWw7XG5cbiAgICAgICAgdGVtcEFycmF5LnB1c2godGhpcy5nYW1lQm9hcmQuZ2V0Q29vcmRpbmF0ZUZyb21Db29yZGluYXRlKFxuICAgICAgICAgIG5ld0Nvb3JkaW5hdGUsXG4gICAgICAgICkpO1xuICAgICAgfVxuICAgICAgdGhpcy51cGRhdGVPY2N1cGllZENvb3JkaW5hdGVzKHRlbXBBcnJheSk7XG4gICAgICB0aGlzLmNoZWNrVG9EZWxldGVTaGlwTWFwT2JqZWN0KHRoaXMuYWN0aXZlU2hpcC5uYW1lKTtcbiAgICAgIHRoaXMuYWN0aXZlU2hpcCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcmVjZWl2ZUZpcmUoY29vcmRpbmF0ZSkge1xuICAgIGNvbnN0IHRlbXBDb29yZGluYXRlID0gdGhpcy5nYW1lQm9hcmQuZ2V0Q29vcmRpbmF0ZUZyb21Db29yZGluYXRlKGNvb3JkaW5hdGUpO1xuXG4gICAgaWYgKHRlbXBDb29yZGluYXRlLm9jY3VwaWVkID09PSB0cnVlKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub2NjdXBpZWRDb29yZGluYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMub2NjdXBpZWRDb29yZGluYXRlc1tpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGlmICh0ZW1wQ29vcmRpbmF0ZS5jb29yZGluYXRlID09PSB0aGlzLm9jY3VwaWVkQ29vcmRpbmF0ZXNbaV1bal0uY29vcmRpbmF0ZSkge1xuICAgICAgICAgICAgdGhpcy5vY2N1cGllZENvb3JkaW5hdGVzW2ldW2pdLmhpdCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZ2FtZUJvYXJkLmdldENvb3JkaW5hdGVGcm9tQ29vcmRpbmF0ZShjb29yZGluYXRlKS5oaXQgPSB0cnVlO1xuICB9XG5cbiAgY2hlY2tQbGF5ZXJMb3N0KCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5vY2N1cGllZENvb3JkaW5hdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMub2NjdXBpZWRDb29yZGluYXRlc1tpXS5sZW5ndGg7IGorKykge1xuICAgICAgICBpZiAodGhpcy5vY2N1cGllZENvb3JkaW5hdGVzW2ldW2pdLmhpdCA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBsYXllcjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4uL3N0eWxlL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4uL2dyaWQvZ3JpZCc7XG5pbXBvcnQgJy4uL25hdi9uYXZDb250ZW50JztcbmltcG9ydCAnLi4vc2hpcEJvYXJkL3NoaXBCb2FyZENvbnRlbnQnO1xuaW1wb3J0ICcuLi9odWQvaHVkQ29udGVudCc7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=