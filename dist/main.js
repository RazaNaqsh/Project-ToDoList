/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Great+Vibes&family=Josefin+Sans:wght@400;600;700&family=Marck+Script&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: hsl(235deg, 21%, 11%);\n  font-family: \"Josefin Sans\", sans-serif;\n  overflow: hidden;\n  color: hsl(236deg, 33%, 92%);\n}\n\n.header {\n  background: linear-gradient(hsl(192deg, 100%, 67%), hsl(280deg, 87%, 65%));\n  grid-column: 2/3;\n  grid-row: 1/2;\n  animation: slide-down 450ms ease-in-out 1 normal;\n}\n@keyframes slide-down {\n  0% {\n    transform: translateY(-500px);\n    opacity: 0;\n  }\n  40% {\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n\n.sideBar {\n  display: flex;\n  flex-direction: column;\n  background-color: hsl(235deg, 24%, 19%);\n  gap: 1rem;\n  grid-column: 1/2;\n  grid-row: 1/3;\n  border-right: 1px solid hsl(236deg, 33%, 92%);\n  padding: 1rem 1rem 0 1rem;\n  animation: slide-in 450ms ease-in-out 1 normal;\n}\n@keyframes slide-in {\n  0% {\n    transform: translateX(-500px);\n    opacity: 0;\n  }\n  40% {\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n.sideBar__title {\n  color: hsl(234deg, 39%, 85%);\n  letter-spacing: 2px;\n}\n.sideBar__upper {\n  margin-top: 1rem;\n  border-bottom: 1px solid hsl(236deg, 33%, 92%);\n}\n.sideBar__tab {\n  padding: 0.85rem 0.3rem;\n  cursor: pointer;\n  transition: all 150ms ease-in-out;\n}\n.sideBar__tab:hover {\n  background: hsl(235deg, 21%, 11%);\n  color: hsl(234deg, 39%, 85%);\n}\n.sideBar__tab--active {\n  background: hsl(235deg, 21%, 11%);\n  color: hsl(234deg, 39%, 85%);\n}\n.sideBar__project {\n  border-bottom: 1px solid hsl(236deg, 33%, 92%);\n}\n.sideBar__addProject {\n  cursor: pointer;\n  margin: 1.5rem 0 0.5rem;\n}\n\n.listContainer {\n  grid-column: 2/3;\n  grid-row: 2/3;\n  background-color: hsl(235deg, 24%, 19%);\n  display: grid;\n  grid-template-rows: 6fr 1fr;\n  animation: slide-up 450ms ease-in-out 1 normal;\n}\n@keyframes slide-up {\n  0% {\n    transform: translateY(500px);\n    opacity: 0;\n  }\n  40% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.listContainer__lists {\n  padding: 1rem 2rem;\n}\n.listContainer__listItem {\n  background-color: hsl(235deg, 21%, 11%);\n  display: flex;\n  align-items: baseline;\n  padding: 1rem;\n  margin-top: 0.5rem;\n  gap: 2rem;\n}\n.listContainer__listItem p {\n  align-self: center;\n}\n.listContainer__addTask {\n  position: relative;\n}\n.listContainer__addTask__addBtn {\n  background: hsl(236deg, 33%, 92%);\n  position: absolute;\n  top: 1rem;\n  right: 1.5rem;\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 150ms ease-in-out;\n}\n.listContainer__addTask__addBtn:hover {\n  transform: scale(0.95);\n  background-color: hsl(234deg, 39%, 85%);\n}\n\n.container {\n  display: grid;\n  margin-inline: auto;\n  height: 85vh;\n  width: 70vw;\n  transform: translateY(9.5%);\n  grid-template-columns: 1fr 2.8fr;\n  grid-template-rows: 1.15fr 4fr;\n}", "",{"version":3,"sources":["webpack://./src/scss/globals/_boilerplate.scss","webpack://./src/scss/style.scss","webpack://./src/scss/utilities/_variables.scss","webpack://./src/scss/layouts/_header.scss","webpack://./src/scss/layouts/_sideBar.scss","webpack://./src/scss/layouts/_listContainer.scss","webpack://./src/scss/layouts/_container.scss"],"names":[],"mappings":"AACA;;;EAGC,SAAA;EACA,UAAA;EACA,sBAAA;ACCD;;ADCA;EACC,uCECc;EFAd,uCEPe;EFQf,gBAAA;EACA,4BECkB;ADCnB;;AEZA;EACC,0EDIiB;ECHjB,gBAAA;EACA,aAAA;EACA,gDAAA;AFeD;AEdC;EACC;IACC,6BAAA;IACA,UAAA;EFgBD;EEdA;IACC,UAAA;EFgBD;EEdA;IACC,wBAAA;IACA,UAAA;EFgBD;AACF;;AGhCA;EACC,aAAA;EACA,sBAAA;EACA,uCFMyB;EELzB,SAAA;EACA,gBAAA;EACA,aAAA;EACA,6CAAA;EACA,yBAAA;EACA,8CAAA;AHmCD;AGjCC;EACC;IACC,6BAAA;IACA,UAAA;EHmCD;EGjCA;IACC,UAAA;EHmCD;EGjCA;IACC,wBAAA;IACA,UAAA;EHmCD;AACF;AGjCC;EACC,4BFfsB;EEgBtB,mBAAA;AHmCF;AGhCC;EACC,gBAAA;EACA,8CAAA;AHkCF;AG9BC;EACC,uBAAA;EAEA,eAAA;EACA,iCAAA;AH+BF;AG9BE;EACC,iCFjCY;EEkCZ,4BFhCqB;ADgExB;AG9BE;EACC,iCFrCY;EEsCZ,4BFpCqB;ADoExB;AG5BC;EACC,8CAAA;AH8BF;AG5BC;EACC,eAAA;EACA,uBAAA;AH8BF;;AIrFA;EACC,gBAAA;EACA,aAAA;EACA,uCHMyB;EGLzB,aAAA;EACA,2BAAA;EACA,8CAAA;AJwFD;AIvFC;EACC;IACC,4BAAA;IACA,UAAA;EJyFD;EIvFA;IACC,UAAA;EJyFD;EIvFA;IACC,UAAA;IACA,wBAAA;EJyFD;AACF;AIvFC;EACC,kBAAA;AJyFF;AIvFC;EACC,uCHhBa;EGiBb,aAAA;EACA,qBAAA;EAEA,aAAA;EACA,kBAAA;EACA,SAAA;AJwFF;AIvFE;EACC,kBAAA;AJyFH;AItFC;EACC,kBAAA;AJwFF;AIvFE;EACC,iCH3BgB;EG4BhB,kBAAA;EACA,SAAA;EACA,aAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,iCAAA;AJyFH;AIxFG;EACC,sBAAA;EACA,uCHvCoB;ADiIxB;;AK3IA;EACC,aAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,2BAAA;EACA,gCAAA;EACA,8BAAA;AL8ID","sourcesContent":["@use \"../utilities\" as *;\n*,\n*::after,\n*::before {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n}\nbody {\n\tbackground-color: $VeryDarkBlue;\n\tfont-family: $baseFontStyle;\n\toverflow: hidden;\n\tcolor: $LightGrayishBlue;\n}\n","@import url(\"https://fonts.googleapis.com/css2?family=Great+Vibes&family=Josefin+Sans:wght@400;600;700&family=Marck+Script&display=swap\");\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: hsl(235deg, 21%, 11%);\n  font-family: \"Josefin Sans\", sans-serif;\n  overflow: hidden;\n  color: hsl(236deg, 33%, 92%);\n}\n\n.header {\n  background: linear-gradient(hsl(192deg, 100%, 67%), hsl(280deg, 87%, 65%));\n  grid-column: 2/3;\n  grid-row: 1/2;\n  animation: slide-down 450ms ease-in-out 1 normal;\n}\n@keyframes slide-down {\n  0% {\n    transform: translateY(-500px);\n    opacity: 0;\n  }\n  40% {\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n\n.sideBar {\n  display: flex;\n  flex-direction: column;\n  background-color: hsl(235deg, 24%, 19%);\n  gap: 1rem;\n  grid-column: 1/2;\n  grid-row: 1/3;\n  border-right: 1px solid hsl(236deg, 33%, 92%);\n  padding: 1rem 1rem 0 1rem;\n  animation: slide-in 450ms ease-in-out 1 normal;\n}\n@keyframes slide-in {\n  0% {\n    transform: translateX(-500px);\n    opacity: 0;\n  }\n  40% {\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n.sideBar__title {\n  color: hsl(234deg, 39%, 85%);\n  letter-spacing: 2px;\n}\n.sideBar__upper {\n  margin-top: 1rem;\n  border-bottom: 1px solid hsl(236deg, 33%, 92%);\n}\n.sideBar__tab {\n  padding: 0.85rem 0.3rem;\n  cursor: pointer;\n  transition: all 150ms ease-in-out;\n}\n.sideBar__tab:hover {\n  background: hsl(235deg, 21%, 11%);\n  color: hsl(234deg, 39%, 85%);\n}\n.sideBar__tab--active {\n  background: hsl(235deg, 21%, 11%);\n  color: hsl(234deg, 39%, 85%);\n}\n.sideBar__project {\n  border-bottom: 1px solid hsl(236deg, 33%, 92%);\n}\n.sideBar__addProject {\n  cursor: pointer;\n  margin: 1.5rem 0 0.5rem;\n}\n\n.listContainer {\n  grid-column: 2/3;\n  grid-row: 2/3;\n  background-color: hsl(235deg, 24%, 19%);\n  display: grid;\n  grid-template-rows: 6fr 1fr;\n  animation: slide-up 450ms ease-in-out 1 normal;\n}\n@keyframes slide-up {\n  0% {\n    transform: translateY(500px);\n    opacity: 0;\n  }\n  40% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.listContainer__lists {\n  padding: 1rem 2rem;\n}\n.listContainer__listItem {\n  background-color: hsl(235deg, 21%, 11%);\n  display: flex;\n  align-items: baseline;\n  padding: 1rem;\n  margin-top: 0.5rem;\n  gap: 2rem;\n}\n.listContainer__listItem p {\n  align-self: center;\n}\n.listContainer__addTask {\n  position: relative;\n}\n.listContainer__addTask__addBtn {\n  background: hsl(236deg, 33%, 92%);\n  position: absolute;\n  top: 1rem;\n  right: 1.5rem;\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 150ms ease-in-out;\n}\n.listContainer__addTask__addBtn:hover {\n  transform: scale(0.95);\n  background-color: hsl(234deg, 39%, 85%);\n}\n\n.container {\n  display: grid;\n  margin-inline: auto;\n  height: 85vh;\n  width: 70vw;\n  transform: translateY(9.5%);\n  grid-template-columns: 1fr 2.8fr;\n  grid-template-rows: 1.15fr 4fr;\n}","@import url(\"https://fonts.googleapis.com/css2?family=Great+Vibes&family=Josefin+Sans:wght@400;600;700&family=Marck+Script&display=swap\");\n\n// font styles\n$baseFontStyle: \"Josefin Sans\", sans-serif;\n\n// primary colors\n$BrightBlue: hsl(220, 98%, 61%);\n$CheckBackground: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));\n\n// darkmode colors\n$VeryDarkBlue: hsl(235, 21%, 11%);\n$VeryDarkDesaturatedBlue: hsl(235, 24%, 19%);\n$LightGrayishBlueHover: hsl(234, 39%, 85%);\n$LightGrayishBlue: hsl(236, 33%, 92%);\n$DarkGrayishBlue: hsl(234, 11%, 52%);\n$VeryDarkGrayishBlue: hsl(233, 14%, 35%);\n$VeryDarkGrayishBlue: hsl(237, 14%, 26%);\n","@use \"../utilities\" as *;\n\n.header {\n\tbackground: $CheckBackground;\n\tgrid-column: 2/3;\n\tgrid-row: 1/2;\n\tanimation: slide-down 450ms ease-in-out 1 normal;\n\t@keyframes slide-down {\n\t\t0% {\n\t\t\ttransform: translateY(-500px);\n\t\t\topacity: 0;\n\t\t}\n\t\t40% {\n\t\t\topacity: 0;\n\t\t}\n\t\t100% {\n\t\t\ttransform: translateY(0);\n\t\t\topacity: 1;\n\t\t}\n\t}\n}\n","@use \"../utilities\" as *;\n\n.sideBar {\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-color: $VeryDarkDesaturatedBlue;\n\tgap: 1rem;\n\tgrid-column: 1/2;\n\tgrid-row: 1/3;\n\tborder-right: 1px solid $LightGrayishBlue;\n\tpadding: 1rem 1rem 0 1rem;\n\tanimation: slide-in 450ms ease-in-out 1 normal;\n\n\t@keyframes slide-in {\n\t\t0% {\n\t\t\ttransform: translateX(-500px);\n\t\t\topacity: 0;\n\t\t}\n\t\t40% {\n\t\t\topacity: 0;\n\t\t}\n\t\t100% {\n\t\t\ttransform: translateX(0);\n\t\t\topacity: 1;\n\t\t}\n\t}\n\t&__title {\n\t\tcolor: $LightGrayishBlueHover;\n\t\tletter-spacing: 2px;\n\t}\n\n\t&__upper {\n\t\tmargin-top: 1rem;\n\t\tborder-bottom: 1px solid $LightGrayishBlue;\n\t}\n\t&__lower {\n\t}\n\t&__tab {\n\t\tpadding: 0.85rem 0.3rem;\n\t\t// border-radius: 5px;\n\t\tcursor: pointer;\n\t\ttransition: all 150ms ease-in-out;\n\t\t&:hover {\n\t\t\tbackground: $VeryDarkBlue;\n\t\t\tcolor: $LightGrayishBlueHover;\n\t\t}\n\t\t&--active {\n\t\t\tbackground: $VeryDarkBlue;\n\t\t\tcolor: $LightGrayishBlueHover;\n\t\t}\n\t}\n\n\t&__project {\n\t\tborder-bottom: 1px solid $LightGrayishBlue;\n\t}\n\t&__addProject {\n\t\tcursor: pointer;\n\t\tmargin: 1.5rem 0 0.5rem;\n\t}\n}\n","@use \"../utilities\" as *;\n\n.listContainer {\n\tgrid-column: 2/3;\n\tgrid-row: 2/3;\n\tbackground-color: $VeryDarkDesaturatedBlue;\n\tdisplay: grid;\n\tgrid-template-rows: 6fr 1fr;\n\tanimation: slide-up 450ms ease-in-out 1 normal;\n\t@keyframes slide-up {\n\t\t0% {\n\t\t\ttransform: translateY(500px);\n\t\t\topacity: 0;\n\t\t}\n\t\t40% {\n\t\t\topacity: 0;\n\t\t}\n\t\t100% {\n\t\t\topacity: 1;\n\t\t\ttransform: translateY(0);\n\t\t}\n\t}\n\t&__lists {\n\t\tpadding: 1rem 2rem;\n\t}\n\t&__listItem {\n\t\tbackground-color: $VeryDarkBlue;\n\t\tdisplay: flex;\n\t\talign-items: baseline;\n\n\t\tpadding: 1rem;\n\t\tmargin-top: 0.5rem;\n\t\tgap: 2rem;\n\t\tp {\n\t\t\talign-self: center;\n\t\t}\n\t}\n\t&__addTask {\n\t\tposition: relative;\n\t\t&__addBtn {\n\t\t\tbackground: $LightGrayishBlue;\n\t\t\tposition: absolute;\n\t\t\ttop: 1rem;\n\t\t\tright: 1.5rem;\n\t\t\theight: 50px;\n\t\t\twidth: 50px;\n\t\t\tborder-radius: 50%;\n\t\t\tcursor: pointer;\n\t\t\ttransition: all 150ms ease-in-out;\n\t\t\t&:hover {\n\t\t\t\ttransform: scale(0.95);\n\t\t\t\tbackground-color: $LightGrayishBlueHover;\n\t\t\t}\n\t\t}\n\t}\n}\n","@use \"../utilities\" as *;\n\n.container {\n\tdisplay: grid;\n\tmargin-inline: auto;\n\theight: 85vh;\n\twidth: 70vw;\n\ttransform: translateY(9.5%);\n\tgrid-template-columns: 1fr 2.8fr;\n\tgrid-template-rows: 1.15fr 4fr;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ "./src/scss/style.scss");


console.log("webpack here");

// show the tasks in screen, will probably be in array
// now in what ways we can have arrays?
// single array? or multiple for different screens,
//  one way can be having different arrays for each tab and then displaying it, then for inbox, make a array which adds all others and display

// Basic Plan:-

// The INBOX DISPLAY
// 1-store data in array(probably)
// 2-display in screen(the inbox, all task shown)
// 3-Add button makes a screen popup to enter data and creates a task object and adds to array
// 4-array is updated and display that newly added object
// 5-when checked, the task gets deleted or strikethroughed(which we might store it somewhere to be displayed as completed task)
// 6-when task is deleted, it shouldnt be stored, just remove from array and dom

// WHEN TAB CHANGES
// 7-The task from those tabs should be displayed(might be empty at first)
// Today, this week tabs shudnt display add button
// 8-Add button should add task only to that current tab
// 9-New Project should create new tabs in project section
// Projects shud be editable as well

// TASK
// 10-Task should have title desc, due date, priority(optional for now)
// 11-when clicked(not checkbox, but on edit icon itself) it should expand(maybe in right side) and one can also edit its details as well and submit to update the task

// END STAGES
// Local storage

// STEPS PLAN:-
// 1- Store data.
// i- probably array? yea, might be easier to do so,
// ii-what properties should the object have? - Title, description, due date(will be afunction returning the chosen date), priority(for later)

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7O0FDQTJCOztBQUUzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lc2xpbnRwcmV0dGllci8uL3NyYy9zY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZXNsaW50cHJldHRpZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2VzbGludHByZXR0aWVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZXNsaW50cHJldHRpZXIvLi9zcmMvc2Nzcy9zdHlsZS5zY3NzPzJlNGQiLCJ3ZWJwYWNrOi8vZXNsaW50cHJldHRpZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZXNsaW50cHJldHRpZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2VzbGludHByZXR0aWVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2VzbGludHByZXR0aWVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2VzbGludHByZXR0aWVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZXNsaW50cHJldHRpZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9lc2xpbnRwcmV0dGllci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lc2xpbnRwcmV0dGllci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9lc2xpbnRwcmV0dGllci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXNsaW50cHJldHRpZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9lc2xpbnRwcmV0dGllci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2VzbGludHByZXR0aWVyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9lc2xpbnRwcmV0dGllci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUdyZWF0K1ZpYmVzJmZhbWlseT1Kb3NlZmluK1NhbnM6d2dodEA0MDA7NjAwOzcwMCZmYW1pbHk9TWFyY2srU2NyaXB0JmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMzVkZWcsIDIxJSwgMTElKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSm9zZWZpbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBjb2xvcjogaHNsKDIzNmRlZywgMzMlLCA5MiUpO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChoc2woMTkyZGVnLCAxMDAlLCA2NyUpLCBoc2woMjgwZGVnLCA4NyUsIDY1JSkpO1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBhbmltYXRpb246IHNsaWRlLWRvd24gNDUwbXMgZWFzZS1pbi1vdXQgMSBub3JtYWw7XFxufVxcbkBrZXlmcmFtZXMgc2xpZGUtZG93biB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAwcHgpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgNDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbi5zaWRlQmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIzNWRlZywgMjQlLCAxOSUpO1xcbiAgZ2FwOiAxcmVtO1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGdyaWQtcm93OiAxLzM7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBoc2woMjM2ZGVnLCAzMyUsIDkyJSk7XFxuICBwYWRkaW5nOiAxcmVtIDFyZW0gMCAxcmVtO1xcbiAgYW5pbWF0aW9uOiBzbGlkZS1pbiA0NTBtcyBlYXNlLWluLW91dCAxIG5vcm1hbDtcXG59XFxuQGtleWZyYW1lcyBzbGlkZS1pbiB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAwcHgpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgNDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbi5zaWRlQmFyX190aXRsZSB7XFxuICBjb2xvcjogaHNsKDIzNGRlZywgMzklLCA4NSUpO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG59XFxuLnNpZGVCYXJfX3VwcGVyIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgaHNsKDIzNmRlZywgMzMlLCA5MiUpO1xcbn1cXG4uc2lkZUJhcl9fdGFiIHtcXG4gIHBhZGRpbmc6IDAuODVyZW0gMC4zcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW4tb3V0O1xcbn1cXG4uc2lkZUJhcl9fdGFiOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IGhzbCgyMzVkZWcsIDIxJSwgMTElKTtcXG4gIGNvbG9yOiBoc2woMjM0ZGVnLCAzOSUsIDg1JSk7XFxufVxcbi5zaWRlQmFyX190YWItLWFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiBoc2woMjM1ZGVnLCAyMSUsIDExJSk7XFxuICBjb2xvcjogaHNsKDIzNGRlZywgMzklLCA4NSUpO1xcbn1cXG4uc2lkZUJhcl9fcHJvamVjdCB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgaHNsKDIzNmRlZywgMzMlLCA5MiUpO1xcbn1cXG4uc2lkZUJhcl9fYWRkUHJvamVjdCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW46IDEuNXJlbSAwIDAuNXJlbTtcXG59XFxuXFxuLmxpc3RDb250YWluZXIge1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGdyaWQtcm93OiAyLzM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjM1ZGVnLCAyNCUsIDE5JSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2ZnIgMWZyO1xcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCA0NTBtcyBlYXNlLWluLW91dCAxIG5vcm1hbDtcXG59XFxuQGtleWZyYW1lcyBzbGlkZS11cCB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MDBweCk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICA0MCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gIH1cXG59XFxuLmxpc3RDb250YWluZXJfX2xpc3RzIHtcXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG59XFxuLmxpc3RDb250YWluZXJfX2xpc3RJdGVtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMzVkZWcsIDIxJSwgMTElKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgZ2FwOiAycmVtO1xcbn1cXG4ubGlzdENvbnRhaW5lcl9fbGlzdEl0ZW0gcCB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbi5saXN0Q29udGFpbmVyX19hZGRUYXNrIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmxpc3RDb250YWluZXJfX2FkZFRhc2tfX2FkZEJ0biB7XFxuICBiYWNrZ3JvdW5kOiBoc2woMjM2ZGVnLCAzMyUsIDkyJSk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDFyZW07XFxuICByaWdodDogMS41cmVtO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDUwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1pbi1vdXQ7XFxufVxcbi5saXN0Q29udGFpbmVyX19hZGRUYXNrX19hZGRCdG46aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMzRkZWcsIDM5JSwgODUlKTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gIGhlaWdodDogODV2aDtcXG4gIHdpZHRoOiA3MHZ3O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDkuNSUpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMi44ZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEuMTVmciA0ZnI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2dsb2JhbHMvX2JvaWxlcnBsYXRlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3V0aWxpdGllcy9fdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2xheW91dHMvX2hlYWRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9sYXlvdXRzL19zaWRlQmFyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2xheW91dHMvX2xpc3RDb250YWluZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvbGF5b3V0cy9fY29udGFpbmVyLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7OztFQUdDLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUNDRDs7QURDQTtFQUNDLHVDRUNjO0VGQWQsdUNFUGU7RUZRZixnQkFBQTtFQUNBLDRCRUNrQjtBRENuQjs7QUVaQTtFQUNDLDBFRElpQjtFQ0hqQixnQkFBQTtFQUNBLGFBQUE7RUFDQSxnREFBQTtBRmVEO0FFZEM7RUFDQztJQUNDLDZCQUFBO0lBQ0EsVUFBQTtFRmdCRDtFRWRBO0lBQ0MsVUFBQTtFRmdCRDtFRWRBO0lBQ0Msd0JBQUE7SUFDQSxVQUFBO0VGZ0JEO0FBQ0Y7O0FHaENBO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUNGTXlCO0VFTHpCLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSw2Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsOENBQUE7QUhtQ0Q7QUdqQ0M7RUFDQztJQUNDLDZCQUFBO0lBQ0EsVUFBQTtFSG1DRDtFR2pDQTtJQUNDLFVBQUE7RUhtQ0Q7RUdqQ0E7SUFDQyx3QkFBQTtJQUNBLFVBQUE7RUhtQ0Q7QUFDRjtBR2pDQztFQUNDLDRCRmZzQjtFRWdCdEIsbUJBQUE7QUhtQ0Y7QUdoQ0M7RUFDQyxnQkFBQTtFQUNBLDhDQUFBO0FIa0NGO0FHOUJDO0VBQ0MsdUJBQUE7RUFFQSxlQUFBO0VBQ0EsaUNBQUE7QUgrQkY7QUc5QkU7RUFDQyxpQ0ZqQ1k7RUVrQ1osNEJGaENxQjtBRGdFeEI7QUc5QkU7RUFDQyxpQ0ZyQ1k7RUVzQ1osNEJGcENxQjtBRG9FeEI7QUc1QkM7RUFDQyw4Q0FBQTtBSDhCRjtBRzVCQztFQUNDLGVBQUE7RUFDQSx1QkFBQTtBSDhCRjs7QUlyRkE7RUFDQyxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1Q0hNeUI7RUdMekIsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsOENBQUE7QUp3RkQ7QUl2RkM7RUFDQztJQUNDLDRCQUFBO0lBQ0EsVUFBQTtFSnlGRDtFSXZGQTtJQUNDLFVBQUE7RUp5RkQ7RUl2RkE7SUFDQyxVQUFBO0lBQ0Esd0JBQUE7RUp5RkQ7QUFDRjtBSXZGQztFQUNDLGtCQUFBO0FKeUZGO0FJdkZDO0VBQ0MsdUNIaEJhO0VHaUJiLGFBQUE7RUFDQSxxQkFBQTtFQUVBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUp3RkY7QUl2RkU7RUFDQyxrQkFBQTtBSnlGSDtBSXRGQztFQUNDLGtCQUFBO0FKd0ZGO0FJdkZFO0VBQ0MsaUNIM0JnQjtFRzRCaEIsa0JBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUp5Rkg7QUl4Rkc7RUFDQyxzQkFBQTtFQUNBLHVDSHZDb0I7QURpSXhCOztBSzNJQTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQ0FBQTtFQUNBLDhCQUFBO0FMOElEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB1c2UgXFxcIi4uL3V0aWxpdGllc1xcXCIgYXMgKjtcXG4qLFxcbio6OmFmdGVyLFxcbio6OmJlZm9yZSB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuYm9keSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogJFZlcnlEYXJrQmx1ZTtcXG5cXHRmb250LWZhbWlseTogJGJhc2VGb250U3R5bGU7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHRjb2xvcjogJExpZ2h0R3JheWlzaEJsdWU7XFxufVxcblwiLFwiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9R3JlYXQrVmliZXMmZmFtaWx5PUpvc2VmaW4rU2Fuczp3Z2h0QDQwMDs2MDA7NzAwJmZhbWlseT1NYXJjaytTY3JpcHQmZGlzcGxheT1zd2FwXFxcIik7XFxuKixcXG4qOjphZnRlcixcXG4qOjpiZWZvcmUge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIzNWRlZywgMjElLCAxMSUpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJKb3NlZmluIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGNvbG9yOiBoc2woMjM2ZGVnLCAzMyUsIDkyJSk7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KGhzbCgxOTJkZWcsIDEwMCUsIDY3JSksIGhzbCgyODBkZWcsIDg3JSwgNjUlKSk7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGFuaW1hdGlvbjogc2xpZGUtZG93biA0NTBtcyBlYXNlLWluLW91dCAxIG5vcm1hbDtcXG59XFxuQGtleWZyYW1lcyBzbGlkZS1kb3duIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MDBweCk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICA0MCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuLnNpZGVCYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjM1ZGVnLCAyNCUsIDE5JSk7XFxuICBnYXA6IDFyZW07XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgZ3JpZC1yb3c6IDEvMztcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGhzbCgyMzZkZWcsIDMzJSwgOTIlKTtcXG4gIHBhZGRpbmc6IDFyZW0gMXJlbSAwIDFyZW07XFxuICBhbmltYXRpb246IHNsaWRlLWluIDQ1MG1zIGVhc2UtaW4tb3V0IDEgbm9ybWFsO1xcbn1cXG5Aa2V5ZnJhbWVzIHNsaWRlLWluIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MDBweCk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICA0MCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuLnNpZGVCYXJfX3RpdGxlIHtcXG4gIGNvbG9yOiBoc2woMjM0ZGVnLCAzOSUsIDg1JSk7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbn1cXG4uc2lkZUJhcl9fdXBwZXIge1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBoc2woMjM2ZGVnLCAzMyUsIDkyJSk7XFxufVxcbi5zaWRlQmFyX190YWIge1xcbiAgcGFkZGluZzogMC44NXJlbSAwLjNyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1pbi1vdXQ7XFxufVxcbi5zaWRlQmFyX190YWI6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogaHNsKDIzNWRlZywgMjElLCAxMSUpO1xcbiAgY29sb3I6IGhzbCgyMzRkZWcsIDM5JSwgODUlKTtcXG59XFxuLnNpZGVCYXJfX3RhYi0tYWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6IGhzbCgyMzVkZWcsIDIxJSwgMTElKTtcXG4gIGNvbG9yOiBoc2woMjM0ZGVnLCAzOSUsIDg1JSk7XFxufVxcbi5zaWRlQmFyX19wcm9qZWN0IHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBoc2woMjM2ZGVnLCAzMyUsIDkyJSk7XFxufVxcbi5zaWRlQmFyX19hZGRQcm9qZWN0IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMS41cmVtIDAgMC41cmVtO1xcbn1cXG5cXG4ubGlzdENvbnRhaW5lciB7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgZ3JpZC1yb3c6IDIvMztcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMzVkZWcsIDI0JSwgMTklKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDZmciAxZnI7XFxuICBhbmltYXRpb246IHNsaWRlLXVwIDQ1MG1zIGVhc2UtaW4tb3V0IDEgbm9ybWFsO1xcbn1cXG5Aa2V5ZnJhbWVzIHNsaWRlLXVwIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwMHB4KTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDQwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgfVxcbn1cXG4ubGlzdENvbnRhaW5lcl9fbGlzdHMge1xcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcbn1cXG4ubGlzdENvbnRhaW5lcl9fbGlzdEl0ZW0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIzNWRlZywgMjElLCAxMSUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICBnYXA6IDJyZW07XFxufVxcbi5saXN0Q29udGFpbmVyX19saXN0SXRlbSBwIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuLmxpc3RDb250YWluZXJfX2FkZFRhc2sge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubGlzdENvbnRhaW5lcl9fYWRkVGFza19fYWRkQnRuIHtcXG4gIGJhY2tncm91bmQ6IGhzbCgyMzZkZWcsIDMzJSwgOTIlKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMXJlbTtcXG4gIHJpZ2h0OiAxLjVyZW07XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcXG59XFxuLmxpc3RDb250YWluZXJfX2FkZFRhc2tfX2FkZEJ0bjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIzNGRlZywgMzklLCA4NSUpO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgaGVpZ2h0OiA4NXZoO1xcbiAgd2lkdGg6IDcwdnc7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOS41JSk7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyLjhmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMS4xNWZyIDRmcjtcXG59XCIsXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1HcmVhdCtWaWJlcyZmYW1pbHk9Sm9zZWZpbitTYW5zOndnaHRANDAwOzYwMDs3MDAmZmFtaWx5PU1hcmNrK1NjcmlwdCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG4vLyBmb250IHN0eWxlc1xcbiRiYXNlRm9udFN0eWxlOiBcXFwiSm9zZWZpbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG5cXG4vLyBwcmltYXJ5IGNvbG9yc1xcbiRCcmlnaHRCbHVlOiBoc2woMjIwLCA5OCUsIDYxJSk7XFxuJENoZWNrQmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KGhzbCgxOTIsIDEwMCUsIDY3JSksIGhzbCgyODAsIDg3JSwgNjUlKSk7XFxuXFxuLy8gZGFya21vZGUgY29sb3JzXFxuJFZlcnlEYXJrQmx1ZTogaHNsKDIzNSwgMjElLCAxMSUpO1xcbiRWZXJ5RGFya0Rlc2F0dXJhdGVkQmx1ZTogaHNsKDIzNSwgMjQlLCAxOSUpO1xcbiRMaWdodEdyYXlpc2hCbHVlSG92ZXI6IGhzbCgyMzQsIDM5JSwgODUlKTtcXG4kTGlnaHRHcmF5aXNoQmx1ZTogaHNsKDIzNiwgMzMlLCA5MiUpO1xcbiREYXJrR3JheWlzaEJsdWU6IGhzbCgyMzQsIDExJSwgNTIlKTtcXG4kVmVyeURhcmtHcmF5aXNoQmx1ZTogaHNsKDIzMywgMTQlLCAzNSUpO1xcbiRWZXJ5RGFya0dyYXlpc2hCbHVlOiBoc2woMjM3LCAxNCUsIDI2JSk7XFxuXCIsXCJAdXNlIFxcXCIuLi91dGlsaXRpZXNcXFwiIGFzICo7XFxuXFxuLmhlYWRlciB7XFxuXFx0YmFja2dyb3VuZDogJENoZWNrQmFja2dyb3VuZDtcXG5cXHRncmlkLWNvbHVtbjogMi8zO1xcblxcdGdyaWQtcm93OiAxLzI7XFxuXFx0YW5pbWF0aW9uOiBzbGlkZS1kb3duIDQ1MG1zIGVhc2UtaW4tb3V0IDEgbm9ybWFsO1xcblxcdEBrZXlmcmFtZXMgc2xpZGUtZG93biB7XFxuXFx0XFx0MCUge1xcblxcdFxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAwcHgpO1xcblxcdFxcdFxcdG9wYWNpdHk6IDA7XFxuXFx0XFx0fVxcblxcdFxcdDQwJSB7XFxuXFx0XFx0XFx0b3BhY2l0eTogMDtcXG5cXHRcXHR9XFxuXFx0XFx0MTAwJSB7XFxuXFx0XFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcblxcdFxcdFxcdG9wYWNpdHk6IDE7XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXCIsXCJAdXNlIFxcXCIuLi91dGlsaXRpZXNcXFwiIGFzICo7XFxuXFxuLnNpZGVCYXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAkVmVyeURhcmtEZXNhdHVyYXRlZEJsdWU7XFxuXFx0Z2FwOiAxcmVtO1xcblxcdGdyaWQtY29sdW1uOiAxLzI7XFxuXFx0Z3JpZC1yb3c6IDEvMztcXG5cXHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAkTGlnaHRHcmF5aXNoQmx1ZTtcXG5cXHRwYWRkaW5nOiAxcmVtIDFyZW0gMCAxcmVtO1xcblxcdGFuaW1hdGlvbjogc2xpZGUtaW4gNDUwbXMgZWFzZS1pbi1vdXQgMSBub3JtYWw7XFxuXFxuXFx0QGtleWZyYW1lcyBzbGlkZS1pbiB7XFxuXFx0XFx0MCUge1xcblxcdFxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAwcHgpO1xcblxcdFxcdFxcdG9wYWNpdHk6IDA7XFxuXFx0XFx0fVxcblxcdFxcdDQwJSB7XFxuXFx0XFx0XFx0b3BhY2l0eTogMDtcXG5cXHRcXHR9XFxuXFx0XFx0MTAwJSB7XFxuXFx0XFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcblxcdFxcdFxcdG9wYWNpdHk6IDE7XFxuXFx0XFx0fVxcblxcdH1cXG5cXHQmX190aXRsZSB7XFxuXFx0XFx0Y29sb3I6ICRMaWdodEdyYXlpc2hCbHVlSG92ZXI7XFxuXFx0XFx0bGV0dGVyLXNwYWNpbmc6IDJweDtcXG5cXHR9XFxuXFxuXFx0Jl9fdXBwZXIge1xcblxcdFxcdG1hcmdpbi10b3A6IDFyZW07XFxuXFx0XFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRMaWdodEdyYXlpc2hCbHVlO1xcblxcdH1cXG5cXHQmX19sb3dlciB7XFxuXFx0fVxcblxcdCZfX3RhYiB7XFxuXFx0XFx0cGFkZGluZzogMC44NXJlbSAwLjNyZW07XFxuXFx0XFx0Ly8gYm9yZGVyLXJhZGl1czogNXB4O1xcblxcdFxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRcXHR0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1pbi1vdXQ7XFxuXFx0XFx0Jjpob3ZlciB7XFxuXFx0XFx0XFx0YmFja2dyb3VuZDogJFZlcnlEYXJrQmx1ZTtcXG5cXHRcXHRcXHRjb2xvcjogJExpZ2h0R3JheWlzaEJsdWVIb3ZlcjtcXG5cXHRcXHR9XFxuXFx0XFx0Ji0tYWN0aXZlIHtcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kOiAkVmVyeURhcmtCbHVlO1xcblxcdFxcdFxcdGNvbG9yOiAkTGlnaHRHcmF5aXNoQmx1ZUhvdmVyO1xcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0Jl9fcHJvamVjdCB7XFxuXFx0XFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRMaWdodEdyYXlpc2hCbHVlO1xcblxcdH1cXG5cXHQmX19hZGRQcm9qZWN0IHtcXG5cXHRcXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0XFx0bWFyZ2luOiAxLjVyZW0gMCAwLjVyZW07XFxuXFx0fVxcbn1cXG5cIixcIkB1c2UgXFxcIi4uL3V0aWxpdGllc1xcXCIgYXMgKjtcXG5cXG4ubGlzdENvbnRhaW5lciB7XFxuXFx0Z3JpZC1jb2x1bW46IDIvMztcXG5cXHRncmlkLXJvdzogMi8zO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICRWZXJ5RGFya0Rlc2F0dXJhdGVkQmx1ZTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogNmZyIDFmcjtcXG5cXHRhbmltYXRpb246IHNsaWRlLXVwIDQ1MG1zIGVhc2UtaW4tb3V0IDEgbm9ybWFsO1xcblxcdEBrZXlmcmFtZXMgc2xpZGUtdXAge1xcblxcdFxcdDAlIHtcXG5cXHRcXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAwcHgpO1xcblxcdFxcdFxcdG9wYWNpdHk6IDA7XFxuXFx0XFx0fVxcblxcdFxcdDQwJSB7XFxuXFx0XFx0XFx0b3BhY2l0eTogMDtcXG5cXHRcXHR9XFxuXFx0XFx0MTAwJSB7XFxuXFx0XFx0XFx0b3BhY2l0eTogMTtcXG5cXHRcXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuXFx0XFx0fVxcblxcdH1cXG5cXHQmX19saXN0cyB7XFxuXFx0XFx0cGFkZGluZzogMXJlbSAycmVtO1xcblxcdH1cXG5cXHQmX19saXN0SXRlbSB7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogJFZlcnlEYXJrQmx1ZTtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG5cXG5cXHRcXHRwYWRkaW5nOiAxcmVtO1xcblxcdFxcdG1hcmdpbi10b3A6IDAuNXJlbTtcXG5cXHRcXHRnYXA6IDJyZW07XFxuXFx0XFx0cCB7XFxuXFx0XFx0XFx0YWxpZ24tc2VsZjogY2VudGVyO1xcblxcdFxcdH1cXG5cXHR9XFxuXFx0Jl9fYWRkVGFzayB7XFxuXFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdFxcdCZfX2FkZEJ0biB7XFxuXFx0XFx0XFx0YmFja2dyb3VuZDogJExpZ2h0R3JheWlzaEJsdWU7XFxuXFx0XFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdFxcdFxcdHRvcDogMXJlbTtcXG5cXHRcXHRcXHRyaWdodDogMS41cmVtO1xcblxcdFxcdFxcdGhlaWdodDogNTBweDtcXG5cXHRcXHRcXHR3aWR0aDogNTBweDtcXG5cXHRcXHRcXHRib3JkZXItcmFkaXVzOiA1MCU7XFxuXFx0XFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdFxcdFxcdHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcXG5cXHRcXHRcXHQmOmhvdmVyIHtcXG5cXHRcXHRcXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcblxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRMaWdodEdyYXlpc2hCbHVlSG92ZXI7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXHR9XFxufVxcblwiLFwiQHVzZSBcXFwiLi4vdXRpbGl0aWVzXFxcIiBhcyAqO1xcblxcbi5jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0bWFyZ2luLWlubGluZTogYXV0bztcXG5cXHRoZWlnaHQ6IDg1dmg7XFxuXFx0d2lkdGg6IDcwdnc7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDkuNSUpO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDIuOGZyO1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogMS4xNWZyIDRmcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc2Nzcy9zdHlsZS5zY3NzXCI7XG5cbmNvbnNvbGUubG9nKFwid2VicGFjayBoZXJlXCIpO1xuXG4vLyBzaG93IHRoZSB0YXNrcyBpbiBzY3JlZW4sIHdpbGwgcHJvYmFibHkgYmUgaW4gYXJyYXlcbi8vIG5vdyBpbiB3aGF0IHdheXMgd2UgY2FuIGhhdmUgYXJyYXlzP1xuLy8gc2luZ2xlIGFycmF5PyBvciBtdWx0aXBsZSBmb3IgZGlmZmVyZW50IHNjcmVlbnMsXG4vLyAgb25lIHdheSBjYW4gYmUgaGF2aW5nIGRpZmZlcmVudCBhcnJheXMgZm9yIGVhY2ggdGFiIGFuZCB0aGVuIGRpc3BsYXlpbmcgaXQsIHRoZW4gZm9yIGluYm94LCBtYWtlIGEgYXJyYXkgd2hpY2ggYWRkcyBhbGwgb3RoZXJzIGFuZCBkaXNwbGF5XG5cbi8vIEJhc2ljIFBsYW46LVxuXG4vLyBUaGUgSU5CT1ggRElTUExBWVxuLy8gMS1zdG9yZSBkYXRhIGluIGFycmF5KHByb2JhYmx5KVxuLy8gMi1kaXNwbGF5IGluIHNjcmVlbih0aGUgaW5ib3gsIGFsbCB0YXNrIHNob3duKVxuLy8gMy1BZGQgYnV0dG9uIG1ha2VzIGEgc2NyZWVuIHBvcHVwIHRvIGVudGVyIGRhdGEgYW5kIGNyZWF0ZXMgYSB0YXNrIG9iamVjdCBhbmQgYWRkcyB0byBhcnJheVxuLy8gNC1hcnJheSBpcyB1cGRhdGVkIGFuZCBkaXNwbGF5IHRoYXQgbmV3bHkgYWRkZWQgb2JqZWN0XG4vLyA1LXdoZW4gY2hlY2tlZCwgdGhlIHRhc2sgZ2V0cyBkZWxldGVkIG9yIHN0cmlrZXRocm91Z2hlZCh3aGljaCB3ZSBtaWdodCBzdG9yZSBpdCBzb21ld2hlcmUgdG8gYmUgZGlzcGxheWVkIGFzIGNvbXBsZXRlZCB0YXNrKVxuLy8gNi13aGVuIHRhc2sgaXMgZGVsZXRlZCwgaXQgc2hvdWxkbnQgYmUgc3RvcmVkLCBqdXN0IHJlbW92ZSBmcm9tIGFycmF5IGFuZCBkb21cblxuLy8gV0hFTiBUQUIgQ0hBTkdFU1xuLy8gNy1UaGUgdGFzayBmcm9tIHRob3NlIHRhYnMgc2hvdWxkIGJlIGRpc3BsYXllZChtaWdodCBiZSBlbXB0eSBhdCBmaXJzdClcbi8vIFRvZGF5LCB0aGlzIHdlZWsgdGFicyBzaHVkbnQgZGlzcGxheSBhZGQgYnV0dG9uXG4vLyA4LUFkZCBidXR0b24gc2hvdWxkIGFkZCB0YXNrIG9ubHkgdG8gdGhhdCBjdXJyZW50IHRhYlxuLy8gOS1OZXcgUHJvamVjdCBzaG91bGQgY3JlYXRlIG5ldyB0YWJzIGluIHByb2plY3Qgc2VjdGlvblxuLy8gUHJvamVjdHMgc2h1ZCBiZSBlZGl0YWJsZSBhcyB3ZWxsXG5cbi8vIFRBU0tcbi8vIDEwLVRhc2sgc2hvdWxkIGhhdmUgdGl0bGUgZGVzYywgZHVlIGRhdGUsIHByaW9yaXR5KG9wdGlvbmFsIGZvciBub3cpXG4vLyAxMS13aGVuIGNsaWNrZWQobm90IGNoZWNrYm94LCBidXQgb24gZWRpdCBpY29uIGl0c2VsZikgaXQgc2hvdWxkIGV4cGFuZChtYXliZSBpbiByaWdodCBzaWRlKSBhbmQgb25lIGNhbiBhbHNvIGVkaXQgaXRzIGRldGFpbHMgYXMgd2VsbCBhbmQgc3VibWl0IHRvIHVwZGF0ZSB0aGUgdGFza1xuXG4vLyBFTkQgU1RBR0VTXG4vLyBMb2NhbCBzdG9yYWdlXG5cbi8vIFNURVBTIFBMQU46LVxuLy8gMS0gU3RvcmUgZGF0YS5cbi8vIGktIHByb2JhYmx5IGFycmF5PyB5ZWEsIG1pZ2h0IGJlIGVhc2llciB0byBkbyBzbyxcbi8vIGlpLXdoYXQgcHJvcGVydGllcyBzaG91bGQgdGhlIG9iamVjdCBoYXZlPyAtIFRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlIGRhdGUod2lsbCBiZSBhZnVuY3Rpb24gcmV0dXJuaW5nIHRoZSBjaG9zZW4gZGF0ZSksIHByaW9yaXR5KGZvciBsYXRlcilcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==