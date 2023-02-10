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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: hsl(235deg, 21%, 11%);\n  font-family: \"Josefin Sans\", sans-serif;\n  overflow: hidden;\n  color: hsl(236deg, 33%, 92%);\n}\n\ninput {\n  accent-color: hsl(234deg, 39%, 85%);\n}\n\ninput[type=text] {\n  background-color: hsl(235deg, 24%, 19%);\n  color: hsl(236deg, 33%, 92%);\n  font-family: inherit;\n  padding: 1rem;\n  margin-top: 1rem;\n  width: 100%;\n  border: none;\n  transition: all 450ms ease-in-out;\n}\ninput[type=text]:focus {\n  outline: 2px solid hsl(220deg, 98%, 61%);\n}\n\nbutton {\n  margin-top: 1.5rem;\n  margin-inline: auto;\n  width: fit-content;\n  padding: 0.6rem 1rem;\n  background-color: hsl(235deg, 24%, 19%);\n  color: hsl(236deg, 33%, 92%);\n  font-family: inherit;\n  border: none;\n  border-radius: 2px;\n  transition: all 100ms ease-in-out;\n}\nbutton:hover {\n  transform: scale(0.95);\n}\nbutton:active {\n  transform: scale(0.98);\n}\n\n.header {\n  background: linear-gradient(hsl(192deg, 100%, 67%), hsl(280deg, 87%, 65%));\n  grid-column: 2/3;\n  grid-row: 1/2;\n  animation: slide-down 450ms ease-in-out 1 normal;\n}\n@keyframes slide-down {\n  0% {\n    transform: translateY(-500px);\n    opacity: 0;\n  }\n  40% {\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n\n.sideBar {\n  display: flex;\n  flex-direction: column;\n  background-color: hsl(235deg, 24%, 19%);\n  gap: 1rem;\n  grid-column: 1/2;\n  grid-row: 1/3;\n  border-right: 1px solid hsl(236deg, 33%, 92%);\n  padding: 1rem 1rem 0 1rem;\n  animation: slide-in 450ms ease-in-out 1 normal;\n}\n@keyframes slide-in {\n  0% {\n    transform: translateX(-500px);\n    opacity: 0;\n  }\n  40% {\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n.sideBar .active {\n  background: hsl(235deg, 21%, 11%);\n  color: hsl(234deg, 39%, 85%);\n}\n.sideBar__title {\n  color: hsl(234deg, 39%, 85%);\n  letter-spacing: 2px;\n}\n.sideBar__upper {\n  margin-top: 1rem;\n  border-bottom: 1px solid hsl(236deg, 33%, 92%);\n}\n.sideBar__tab {\n  padding: 0.85rem 0.3rem;\n  cursor: pointer;\n  transition: all 150ms ease-in-out;\n  animation: slide-in 350ms ease-in-out 1 normal;\n}\n.sideBar__tab:hover {\n  background: hsl(235deg, 21%, 11%);\n  color: hsl(234deg, 39%, 85%);\n}\n.sideBar__project {\n  border-bottom: 1px solid hsl(236deg, 33%, 92%);\n  max-height: 15rem;\n  overflow: auto;\n  transition: all 200ms ease-in-out;\n}\n.sideBar__addProject {\n  cursor: pointer;\n  margin: 1.5rem 0 0.5rem;\n  transition: all 200ms ease-in-out;\n}\n.sideBar__addProject:hover {\n  color: #22d3ee;\n}\n\n.listContainer {\n  grid-column: 2/3;\n  grid-row: 2/3;\n  display: grid;\n  position: relative;\n  background-color: hsl(235deg, 24%, 19%);\n  grid-template-rows: 6fr 1fr;\n  z-index: 0;\n  animation: slide-up 450ms ease-in-out 1 normal;\n}\n@keyframes slide-up {\n  0% {\n    transform: translateY(500px);\n    opacity: 0;\n  }\n  40% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.listContainer__lists {\n  padding: 1rem 2rem;\n  transition: all 150ms ease-in-out;\n}\n.listContainer__listItem {\n  background-color: hsl(235deg, 21%, 11%);\n  display: flex;\n  align-items: baseline;\n  padding: 1rem;\n  margin-top: 0.5rem;\n  gap: 2rem;\n  transition: all 150ms ease-out;\n  animation: slide-left 450ms ease-in-out 1 normal;\n}\n@keyframes slide-left {\n  0% {\n    transform: translateX(500px);\n    opacity: 0;\n  }\n  40% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.listContainer__listItem p {\n  align-self: center;\n}\n.listContainer__addTask {\n  position: relative;\n}\n.listContainer__addTask__addBtn {\n  background: hsl(236deg, 33%, 92%);\n  position: absolute;\n  top: 1rem;\n  right: 1.5rem;\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 150ms ease-in-out;\n}\n.listContainer__addTask__addBtn:hover {\n  transform: scale(0.95);\n  background-color: hsl(234deg, 39%, 85%);\n}\n.listContainer__createTaskModal {\n  position: absolute;\n  display: none;\n  flex-direction: column;\n  background: hsl(235deg, 21%, 11%);\n  height: 20vh;\n  width: 30vw;\n  padding: 1rem;\n  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;\n  top: 7.5rem;\n  left: 12.5rem;\n  z-index: 1;\n  animation: pop-up 200ms ease-in-out 1 normal;\n}\n.listContainer__createProjectModal {\n  position: absolute;\n  display: none;\n  flex-direction: column;\n  background: hsl(235deg, 21%, 11%);\n  height: 22.5vh;\n  width: 22.5vw;\n  padding: 1rem;\n  top: 7.5rem;\n  left: 17.5rem;\n  z-index: 1;\n  animation: pop-up 200ms ease-in-out 1 normal;\n}\n@keyframes pop-up {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n.container {\n  display: grid;\n  margin-inline: auto;\n  height: 85vh;\n  width: 70vw;\n  transform: translateY(9.5%);\n  grid-template-columns: 1fr 2.8fr;\n  grid-template-rows: 1.15fr 4fr;\n}", "",{"version":3,"sources":["webpack://./src/scss/globals/_boilerplate.scss","webpack://./src/scss/style.scss","webpack://./src/scss/utilities/_variables.scss","webpack://./src/scss/layouts/_header.scss","webpack://./src/scss/layouts/_sideBar.scss","webpack://./src/scss/layouts/_listContainer.scss","webpack://./src/scss/layouts/_container.scss"],"names":[],"mappings":"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","sourcesContent":["@use \"../utilities\" as *;\n*,\n*::after,\n*::before {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n}\n\nbody {\n\tbackground-color: $VeryDarkBlue;\n\tfont-family: $baseFontStyle;\n\toverflow: hidden;\n\tcolor: $LightGrayishBlue;\n}\ninput {\n\taccent-color: $LightGrayishBlueHover;\n}\n\ninput[type=\"text\"] {\n\tbackground-color: $VeryDarkDesaturatedBlue;\n\tcolor: $LightGrayishBlue;\n\tfont-family: inherit;\n\tpadding: 1rem;\n\tmargin-top: 1rem;\n\twidth: 100%;\n\tborder: none;\n\ttransition: all 450ms ease-in-out;\n\t&:focus {\n\t\toutline: 2px solid $BrightBlue;\n\t}\n}\nbutton {\n\tmargin-top: 1.5rem;\n\tmargin-inline: auto;\n\twidth: fit-content;\n\tpadding: 0.6rem 1rem;\n\tbackground-color: $VeryDarkDesaturatedBlue;\n\tcolor: $LightGrayishBlue;\n\tfont-family: inherit;\n\tborder: none;\n\tborder-radius: 2px;\n\ttransition: all 100ms ease-in-out;\n\t&:hover {\n\t\ttransform: scale(0.95);\n\t}\n\t&:active {\n\t\ttransform: scale(0.98);\n\t}\n}\n","@import url(\"https://fonts.googleapis.com/css2?family=Great+Vibes&family=Josefin+Sans:wght@400;600;700&family=Marck+Script&display=swap\");\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: hsl(235deg, 21%, 11%);\n  font-family: \"Josefin Sans\", sans-serif;\n  overflow: hidden;\n  color: hsl(236deg, 33%, 92%);\n}\n\ninput {\n  accent-color: hsl(234deg, 39%, 85%);\n}\n\ninput[type=text] {\n  background-color: hsl(235deg, 24%, 19%);\n  color: hsl(236deg, 33%, 92%);\n  font-family: inherit;\n  padding: 1rem;\n  margin-top: 1rem;\n  width: 100%;\n  border: none;\n  transition: all 450ms ease-in-out;\n}\ninput[type=text]:focus {\n  outline: 2px solid hsl(220deg, 98%, 61%);\n}\n\nbutton {\n  margin-top: 1.5rem;\n  margin-inline: auto;\n  width: fit-content;\n  padding: 0.6rem 1rem;\n  background-color: hsl(235deg, 24%, 19%);\n  color: hsl(236deg, 33%, 92%);\n  font-family: inherit;\n  border: none;\n  border-radius: 2px;\n  transition: all 100ms ease-in-out;\n}\nbutton:hover {\n  transform: scale(0.95);\n}\nbutton:active {\n  transform: scale(0.98);\n}\n\n.header {\n  background: linear-gradient(hsl(192deg, 100%, 67%), hsl(280deg, 87%, 65%));\n  grid-column: 2/3;\n  grid-row: 1/2;\n  animation: slide-down 450ms ease-in-out 1 normal;\n}\n@keyframes slide-down {\n  0% {\n    transform: translateY(-500px);\n    opacity: 0;\n  }\n  40% {\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n\n.sideBar {\n  display: flex;\n  flex-direction: column;\n  background-color: hsl(235deg, 24%, 19%);\n  gap: 1rem;\n  grid-column: 1/2;\n  grid-row: 1/3;\n  border-right: 1px solid hsl(236deg, 33%, 92%);\n  padding: 1rem 1rem 0 1rem;\n  animation: slide-in 450ms ease-in-out 1 normal;\n}\n@keyframes slide-in {\n  0% {\n    transform: translateX(-500px);\n    opacity: 0;\n  }\n  40% {\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n.sideBar .active {\n  background: hsl(235deg, 21%, 11%);\n  color: hsl(234deg, 39%, 85%);\n}\n.sideBar__title {\n  color: hsl(234deg, 39%, 85%);\n  letter-spacing: 2px;\n}\n.sideBar__upper {\n  margin-top: 1rem;\n  border-bottom: 1px solid hsl(236deg, 33%, 92%);\n}\n.sideBar__tab {\n  padding: 0.85rem 0.3rem;\n  cursor: pointer;\n  transition: all 150ms ease-in-out;\n  animation: slide-in 350ms ease-in-out 1 normal;\n}\n.sideBar__tab:hover {\n  background: hsl(235deg, 21%, 11%);\n  color: hsl(234deg, 39%, 85%);\n}\n.sideBar__project {\n  border-bottom: 1px solid hsl(236deg, 33%, 92%);\n  max-height: 15rem;\n  overflow: auto;\n  transition: all 200ms ease-in-out;\n}\n.sideBar__addProject {\n  cursor: pointer;\n  margin: 1.5rem 0 0.5rem;\n  transition: all 200ms ease-in-out;\n}\n.sideBar__addProject:hover {\n  color: #22d3ee;\n}\n\n.listContainer {\n  grid-column: 2/3;\n  grid-row: 2/3;\n  display: grid;\n  position: relative;\n  background-color: hsl(235deg, 24%, 19%);\n  grid-template-rows: 6fr 1fr;\n  z-index: 0;\n  animation: slide-up 450ms ease-in-out 1 normal;\n}\n@keyframes slide-up {\n  0% {\n    transform: translateY(500px);\n    opacity: 0;\n  }\n  40% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.listContainer__lists {\n  padding: 1rem 2rem;\n  transition: all 150ms ease-in-out;\n}\n.listContainer__listItem {\n  background-color: hsl(235deg, 21%, 11%);\n  display: flex;\n  align-items: baseline;\n  padding: 1rem;\n  margin-top: 0.5rem;\n  gap: 2rem;\n  transition: all 150ms ease-out;\n  animation: slide-left 450ms ease-in-out 1 normal;\n}\n@keyframes slide-left {\n  0% {\n    transform: translateX(500px);\n    opacity: 0;\n  }\n  40% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.listContainer__listItem p {\n  align-self: center;\n}\n.listContainer__addTask {\n  position: relative;\n}\n.listContainer__addTask__addBtn {\n  background: hsl(236deg, 33%, 92%);\n  position: absolute;\n  top: 1rem;\n  right: 1.5rem;\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 150ms ease-in-out;\n}\n.listContainer__addTask__addBtn:hover {\n  transform: scale(0.95);\n  background-color: hsl(234deg, 39%, 85%);\n}\n.listContainer__createTaskModal {\n  position: absolute;\n  display: none;\n  flex-direction: column;\n  background: hsl(235deg, 21%, 11%);\n  height: 20vh;\n  width: 30vw;\n  padding: 1rem;\n  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;\n  top: 7.5rem;\n  left: 12.5rem;\n  z-index: 1;\n  animation: pop-up 200ms ease-in-out 1 normal;\n}\n.listContainer__createProjectModal {\n  position: absolute;\n  display: none;\n  flex-direction: column;\n  background: hsl(235deg, 21%, 11%);\n  height: 22.5vh;\n  width: 22.5vw;\n  padding: 1rem;\n  top: 7.5rem;\n  left: 17.5rem;\n  z-index: 1;\n  animation: pop-up 200ms ease-in-out 1 normal;\n}\n@keyframes pop-up {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n.container {\n  display: grid;\n  margin-inline: auto;\n  height: 85vh;\n  width: 70vw;\n  transform: translateY(9.5%);\n  grid-template-columns: 1fr 2.8fr;\n  grid-template-rows: 1.15fr 4fr;\n}","@import url(\"https://fonts.googleapis.com/css2?family=Great+Vibes&family=Josefin+Sans:wght@400;600;700&family=Marck+Script&display=swap\");\n\n// font styles\n$baseFontStyle: \"Josefin Sans\", sans-serif;\n\n// primary colors\n$BrightBlue: hsl(220, 98%, 61%);\n$CheckBackground: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));\n$lightAqua: #22d3ee;\n\n// darkmode colors\n$VeryDarkBlue: hsl(235, 21%, 11%);\n$VeryDarkDesaturatedBlue: hsl(235, 24%, 19%);\n$LightGrayishBlueHover: hsl(234, 39%, 85%);\n$LightGrayishBlue: hsl(236, 33%, 92%);\n$DarkGrayishBlue: hsl(234, 11%, 52%);\n$VeryDarkGrayishBlue: hsl(233, 14%, 35%);\n$VeryDarkGrayishBlue: hsl(237, 14%, 26%);\n","@use \"../utilities\" as *;\n\n.header {\n\tbackground: $CheckBackground;\n\tgrid-column: 2/3;\n\tgrid-row: 1/2;\n\tanimation: slide-down 450ms ease-in-out 1 normal;\n\t@keyframes slide-down {\n\t\t0% {\n\t\t\ttransform: translateY(-500px);\n\t\t\topacity: 0;\n\t\t}\n\t\t40% {\n\t\t\topacity: 0;\n\t\t}\n\t\t100% {\n\t\t\ttransform: translateY(0);\n\t\t\topacity: 1;\n\t\t}\n\t}\n}\n","@use \"../utilities\" as *;\n\n.sideBar {\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-color: $VeryDarkDesaturatedBlue;\n\tgap: 1rem;\n\tgrid-column: 1/2;\n\tgrid-row: 1/3;\n\tborder-right: 1px solid $LightGrayishBlue;\n\tpadding: 1rem 1rem 0 1rem;\n\tanimation: slide-in 450ms ease-in-out 1 normal;\n\n\t@keyframes slide-in {\n\t\t0% {\n\t\t\ttransform: translateX(-500px);\n\t\t\topacity: 0;\n\t\t}\n\t\t40% {\n\t\t\topacity: 0;\n\t\t}\n\t\t100% {\n\t\t\ttransform: translateX(0);\n\t\t\topacity: 1;\n\t\t}\n\t}\n\t& .active {\n\t\tbackground: $VeryDarkBlue;\n\t\tcolor: $LightGrayishBlueHover;\n\t}\n\t&__title {\n\t\tcolor: $LightGrayishBlueHover;\n\t\tletter-spacing: 2px;\n\t}\n\n\t&__upper {\n\t\tmargin-top: 1rem;\n\t\tborder-bottom: 1px solid $LightGrayishBlue;\n\t}\n\n\t&__tab {\n\t\tpadding: 0.85rem 0.3rem;\n\t\t// border-radius: 5px;\n\t\tcursor: pointer;\n\t\ttransition: all 150ms ease-in-out;\n\t\tanimation: slide-in 350ms ease-in-out 1 normal;\n\t\t&:hover {\n\t\t\tbackground: $VeryDarkBlue;\n\t\t\tcolor: $LightGrayishBlueHover;\n\t\t}\n\t}\n\n\t&__project {\n\t\tborder-bottom: 1px solid $LightGrayishBlue;\n\t\tmax-height: 15rem;\n\t\toverflow: auto;\n\t\ttransition: all 200ms ease-in-out;\n\t}\n\t&__addProject {\n\t\tcursor: pointer;\n\t\tmargin: 1.5rem 0 0.5rem;\n\t\ttransition: all 200ms ease-in-out;\n\t\t&:hover {\n\t\t\tcolor: $lightAqua;\n\t\t}\n\t}\n}\n","@use \"../utilities\" as *;\n\n.listContainer {\n\tgrid-column: 2/3;\n\tgrid-row: 2/3;\n\tdisplay: grid;\n\tposition: relative;\n\tbackground-color: $VeryDarkDesaturatedBlue;\n\tgrid-template-rows: 6fr 1fr;\n\tz-index: 0;\n\tanimation: slide-up 450ms ease-in-out 1 normal;\n\t@keyframes slide-up {\n\t\t0% {\n\t\t\ttransform: translateY(500px);\n\t\t\topacity: 0;\n\t\t}\n\t\t40% {\n\t\t\topacity: 0;\n\t\t}\n\t\t100% {\n\t\t\topacity: 1;\n\t\t\ttransform: translateY(0);\n\t\t}\n\t}\n\t&__lists {\n\t\tpadding: 1rem 2rem;\n\t\ttransition: all 150ms ease-in-out;\n\t}\n\t&__listItem {\n\t\tbackground-color: $VeryDarkBlue;\n\t\tdisplay: flex;\n\t\talign-items: baseline;\n\t\tpadding: 1rem;\n\t\tmargin-top: 0.5rem;\n\t\tgap: 2rem;\n\t\ttransition: all 150ms ease-out;\n\t\tanimation: slide-left 450ms ease-in-out 1 normal;\n\t\t@keyframes slide-left {\n\t\t\t0% {\n\t\t\t\ttransform: translateX(500px);\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t\t40% {\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t\t100% {\n\t\t\t\topacity: 1;\n\t\t\t\ttransform: translateX(0);\n\t\t\t}\n\t\t}\n\t\tp {\n\t\t\talign-self: center;\n\t\t}\n\t}\n\t&__addTask {\n\t\tposition: relative;\n\t\t&__addBtn {\n\t\t\tbackground: $LightGrayishBlue;\n\t\t\tposition: absolute;\n\t\t\ttop: 1rem;\n\t\t\tright: 1.5rem;\n\t\t\theight: 50px;\n\t\t\twidth: 50px;\n\t\t\tborder-radius: 50%;\n\t\t\tcursor: pointer;\n\t\t\ttransition: all 150ms ease-in-out;\n\t\t\t&:hover {\n\t\t\t\ttransform: scale(0.95);\n\t\t\t\tbackground-color: $LightGrayishBlueHover;\n\t\t\t}\n\t\t}\n\t}\n\t&__createTaskModal {\n\t\tposition: absolute;\n\t\tdisplay: none;\n\t\tflex-direction: column;\n\t\tbackground: $VeryDarkBlue;\n\t\theight: 20vh;\n\t\twidth: 30vw;\n\t\tpadding: 1rem;\n\t\tbox-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,\n\t\t\trgba(60, 64, 67, 0.15) 0px 2px 6px 2px;\n\t\ttop: 7.5rem;\n\t\tleft: 12.5rem;\n\t\tz-index: 1;\n\t\tanimation: pop-up 200ms ease-in-out 1 normal;\n\t}\n\t&__createProjectModal {\n\t\tposition: absolute;\n\t\tdisplay: none;\n\t\tflex-direction: column;\n\t\tbackground: $VeryDarkBlue;\n\t\theight: 22.5vh;\n\t\twidth: 22.5vw;\n\t\tpadding: 1rem;\n\t\ttop: 7.5rem;\n\t\tleft: 17.5rem;\n\t\tz-index: 1;\n\t\tanimation: pop-up 200ms ease-in-out 1 normal;\n\t}\n\t@keyframes pop-up {\n\t\t0% {\n\t\t\ttransform: scale(0);\n\t\t}\n\t\t100% {\n\t\t\ttransform: scale(1);\n\t\t}\n\t}\n}\n","@use \"../utilities\" as *;\n\n.container {\n\tdisplay: grid;\n\tmargin-inline: auto;\n\theight: 85vh;\n\twidth: 70vw;\n\ttransform: translateY(9.5%);\n\tgrid-template-columns: 1fr 2.8fr;\n\tgrid-template-rows: 1.15fr 4fr;\n}\n"],"sourceRoot":""}]);
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

/***/ }),

/***/ "./src/completeTask.js":
/*!*****************************!*\
  !*** ./src/completeTask.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ taskComplete)
/* harmony export */ });
function taskStatusCheck(e) {
	const siblingPara = e.target.nextSibling;
	const parentDiv = e.target.parentElement;

	const isCompleted = siblingPara.style.textDecoration === "line-through";

	siblingPara.style.textDecoration = isCompleted ? "none" : "line-through";
	parentDiv.style.opacity = isCompleted ? "1" : "0.6";
}

function handleEvent(taskItem) {
	taskItem.addEventListener("click", taskStatusCheck);
	// taskItem.addEventListener("click", transferCompletedTask);
}

function taskComplete() {
	const taskCheckbox = document.querySelectorAll(".taskCheckbox");
	taskCheckbox.forEach(handleEvent);
}


/***/ }),

/***/ "./src/defaultTab.js":
/*!***************************!*\
  !*** ./src/defaultTab.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ defaultTab)
/* harmony export */ });
/* harmony import */ var _completeTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./completeTask */ "./src/completeTask.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./src/task.js");




function defaultTab() {
	// task.clearTaskScreen();
	_task__WEBPACK_IMPORTED_MODULE_2__["default"].create();
	_task__WEBPACK_IMPORTED_MODULE_2__["default"].displayToDom(_storage__WEBPACK_IMPORTED_MODULE_1__["default"].inbox);
	(0,_completeTask__WEBPACK_IMPORTED_MODULE_0__["default"])();
}


/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const storage = (() => {
	const inbox = [
		{
			title: "testttt",
			tab: "Inbox",
		},
		{
			title: "teoostttt",
			tab: "Inbox",
		},
	];
	return {
		inbox,
	};
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storage);


/***/ }),

/***/ "./src/tabs.js":
/*!*********************!*\
  !*** ./src/tabs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ tabs)
/* harmony export */ });
/* harmony import */ var _defaultTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultTab */ "./src/defaultTab.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var _completeTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./completeTask */ "./src/completeTask.js");





const projectArray = ["Family", "Personal", "Secret"];

const projectTab = document.getElementById("projects");

const sideBar = document.querySelector(".sideBar");
const list = document.querySelector("#lists");

const newProjectBtn = document.getElementById("newProject");
const projectModal = document.getElementById("createProjectModal");

//  display project section and setup
function addEvent(project, projectItem) {
	project.addEventListener("click", () => {
		_task__WEBPACK_IMPORTED_MODULE_1__["default"].current(projectItem);
		_task__WEBPACK_IMPORTED_MODULE_1__["default"].clearTaskScreen();
		_task__WEBPACK_IMPORTED_MODULE_1__["default"].create();
		const projectPersonalArray = _storage__WEBPACK_IMPORTED_MODULE_2__["default"].inbox.filter(
			(item) => item.tab === projectItem
		);
		_task__WEBPACK_IMPORTED_MODULE_1__["default"].displayToDom(projectPersonalArray);
		(0,_completeTask__WEBPACK_IMPORTED_MODULE_3__["default"])();
	});
}

function projectFactory(projectItem, index) {
	const project = document.createElement("div");
	project.classList.add("sideBar__tab");
	project.setAttribute("data-index", `${index}`);
	projectTab.append(project);

	const projectName = document.createElement("h3");
	projectName.textContent = `${projectItem}`;
	project.append(projectName);

	addEvent(project, projectItem);
}

function displayProjects() {
	projectArray.forEach((projectItem, index) => {
		projectFactory(projectItem, index);
	});
}

//  Create Project section
function resetProjectScreen() {
	list.style.opacity = "1";
	document.getElementById("projectTitle").value = "";
	list.style.pointerEvents = "auto";
	sideBar.style.pointerEvents = "auto";
	projectModal.style.display = "none";
}

function closeWindow(e) {
	const outsideClick =
		!projectModal.contains(e.target) && !newProjectBtn.contains(e.target);
	if (outsideClick) {
		resetProjectScreen();
		document.removeEventListener("click", closeWindow);
	}
}

function createProjectModal() {
	list.style.opacity = "0.7";
	list.style.pointerEvents = "none";
	sideBar.style.pointerEvents = "none";
	projectModal.style.display = "flex";
	document.addEventListener("click", closeWindow);
}

function addToArray(e) {
	e.preventDefault();
	const projectTitle = document.getElementById("projectTitle").value;
	const isEmpty = projectTitle === "";
	if (!isEmpty) {
		const projectItem = projectTitle;
		projectArray.push(projectItem);
		resetProjectScreen();
		projectFactory(projectItem, projectArray.indexOf(projectItem));
		(0,_completeTask__WEBPACK_IMPORTED_MODULE_3__["default"])();
	}
}
function submitProjectData() {
	const createProjectBtn = document.getElementById("createProjectBtn");
	createProjectBtn.addEventListener("click", addToArray);
}
function createNewProject() {
	createProjectModal();
	submitProjectData();
}

function tabs() {
	const inboxTab = document.getElementById("defaultTab");

	inboxTab.addEventListener("click", _defaultTab__WEBPACK_IMPORTED_MODULE_0__["default"]);
	displayProjects();
	newProjectBtn.addEventListener("click", createNewProject);
}


/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _completeTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./completeTask */ "./src/completeTask.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/storage.js");



class TaskCreator {
	constructor(title, currentTab) {
		this.title = title;
		this.tab = currentTab;
	}
}
let currentTab;

const taskModal = document.getElementById("createTaskModal");
const addTaskBtn = document.getElementById("addTask");
const list = document.querySelector("#lists");
const sideBar = document.querySelector(".sideBar");

function domFactory(item, index) {
	const divItem = document.createElement("div");
	divItem.classList.add("listContainer__listItem");
	divItem.setAttribute("data-index", `${index}`);

	const inputCheck = document.createElement("input");
	inputCheck.type = "checkbox";
	inputCheck.classList.add("taskCheckbox");

	const para = document.createElement("p");
	para.textContent = `${item.title}`;

	divItem.append(inputCheck, para);
	list.append(divItem);
}

function resetScreen() {
	list.style.opacity = "1";
	document.getElementById("taskTitle").value = "";
	list.style.pointerEvents = "auto";
	sideBar.style.pointerEvents = "auto";
	taskModal.style.display = "none";
}

function addToArray(e) {
	e.preventDefault();
	const taskTitle = document.getElementById("taskTitle").value;
	const isEmpty = taskTitle === "";
	if (!isEmpty) {
		const taskItem = new TaskCreator(taskTitle, currentTab);
		_storage__WEBPACK_IMPORTED_MODULE_1__["default"].inbox.push(taskItem);
		// console.log(storage.inbox);
		resetScreen();
		domFactory(taskItem, _storage__WEBPACK_IMPORTED_MODULE_1__["default"].inbox.indexOf(taskItem));
		(0,_completeTask__WEBPACK_IMPORTED_MODULE_0__["default"])();
	}
}
// function cancelScreen() {
// 	document.querySelector(".container").addEventListener("click", (e) => {
// 		if (taskModal.contains(e.target)) {
// 			// Clicked in box
// 			console.log("inside");
// 		} else {
// 			// Clicked outside the box
// 			console.log("outside");
// 			// resetScreen();
// 		}
// 	});
// }
function closeWindow(e) {
	const outsideClick =
		!taskModal.contains(e.target) && !addTaskBtn.contains(e.target);
	if (outsideClick) {
		resetScreen();
		document.removeEventListener("click", closeWindow);
	}
}
function newTaskModal() {
	list.style.opacity = "0.7";
	list.style.pointerEvents = "none";
	sideBar.style.pointerEvents = "none";
	taskModal.style.display = "flex";
	document.addEventListener("click", closeWindow);
}

function submitTaskData() {
	const submitTaskBtn = document.getElementById("createTaskBtn");
	submitTaskBtn.addEventListener("click", addToArray);
}

function createTask() {
	newTaskModal();
	submitTaskData();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function task() {
	const current = (tab) => {
		currentTab = tab || "Inbox";
		// console.log(currentTab);
		return currentTab;
	};

	const create = () => addTaskBtn.addEventListener("click", createTask);

	function displayToDom(storageArray) {
		storageArray.forEach((item, index) => {
			domFactory(item, index);
		});
	}
	const clearTaskScreen = () => {
		let child = list.lastElementChild;

		while (child) {
			list.removeChild(child);
			child = list.lastElementChild;
		}
	};

	// displayToDom();
	return {
		create,
		displayToDom,
		clearTaskScreen,
		current,
	};
})());


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
/* harmony import */ var _completeTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./completeTask */ "./src/completeTask.js");
/* harmony import */ var _defaultTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultTab */ "./src/defaultTab.js");
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs */ "./src/tabs.js");





// console.log("webpack here");

(0,_tabs__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_defaultTab__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_completeTask__WEBPACK_IMPORTED_MODULE_1__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLGFBQWEsZUFBZSxhQUFhLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLE1BQU0sTUFBTSxZQUFZLFlBQVksVUFBVSxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxNQUFNLFVBQVUsV0FBVyxZQUFZLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sS0FBSyxNQUFNLFlBQVksYUFBYSxPQUFPLE1BQU0sYUFBYSxhQUFhLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFlBQVksY0FBYyxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsWUFBWSxZQUFZLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxhQUFhLGFBQWEsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxhQUFhLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFB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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEdBQUcsRUFBQzs7Ozs7OztVQ3pITDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQTJCO0FBQ2U7QUFDSjtBQUNaOztBQUUxQjs7QUFFQSxpREFBSTtBQUNKLHVEQUFVO0FBQ1YseURBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lc2xpbnRwcmV0dGllci8uL3NyYy9zY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZXNsaW50cHJldHRpZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2VzbGludHByZXR0aWVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZXNsaW50cHJldHRpZXIvLi9zcmMvc2Nzcy9zdHlsZS5zY3NzPzJlNGQiLCJ3ZWJwYWNrOi8vZXNsaW50cHJldHRpZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZXNsaW50cHJldHRpZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2VzbGludHByZXR0aWVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2VzbGludHByZXR0aWVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2VzbGludHByZXR0aWVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZXNsaW50cHJldHRpZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9lc2xpbnRwcmV0dGllci8uL3NyYy9jb21wbGV0ZVRhc2suanMiLCJ3ZWJwYWNrOi8vZXNsaW50cHJldHRpZXIvLi9zcmMvZGVmYXVsdFRhYi5qcyIsIndlYnBhY2s6Ly9lc2xpbnRwcmV0dGllci8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL2VzbGludHByZXR0aWVyLy4vc3JjL3RhYnMuanMiLCJ3ZWJwYWNrOi8vZXNsaW50cHJldHRpZXIvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly9lc2xpbnRwcmV0dGllci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lc2xpbnRwcmV0dGllci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9lc2xpbnRwcmV0dGllci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXNsaW50cHJldHRpZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9lc2xpbnRwcmV0dGllci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2VzbGludHByZXR0aWVyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9lc2xpbnRwcmV0dGllci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUdyZWF0K1ZpYmVzJmZhbWlseT1Kb3NlZmluK1NhbnM6d2dodEA0MDA7NjAwOzcwMCZmYW1pbHk9TWFyY2srU2NyaXB0JmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMzVkZWcsIDIxJSwgMTElKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSm9zZWZpbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBjb2xvcjogaHNsKDIzNmRlZywgMzMlLCA5MiUpO1xcbn1cXG5cXG5pbnB1dCB7XFxuICBhY2NlbnQtY29sb3I6IGhzbCgyMzRkZWcsIDM5JSwgODUlKTtcXG59XFxuXFxuaW5wdXRbdHlwZT10ZXh0XSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjM1ZGVnLCAyNCUsIDE5JSk7XFxuICBjb2xvcjogaHNsKDIzNmRlZywgMzMlLCA5MiUpO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdHJhbnNpdGlvbjogYWxsIDQ1MG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzIHtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCBoc2woMjIwZGVnLCA5OCUsIDYxJSk7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiAxLjVyZW07XFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgcGFkZGluZzogMC42cmVtIDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjM1ZGVnLCAyNCUsIDE5JSk7XFxuICBjb2xvcjogaHNsKDIzNmRlZywgMzMlLCA5MiUpO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcbmJ1dHRvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbn1cXG5idXR0b246YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KGhzbCgxOTJkZWcsIDEwMCUsIDY3JSksIGhzbCgyODBkZWcsIDg3JSwgNjUlKSk7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGFuaW1hdGlvbjogc2xpZGUtZG93biA0NTBtcyBlYXNlLWluLW91dCAxIG5vcm1hbDtcXG59XFxuQGtleWZyYW1lcyBzbGlkZS1kb3duIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MDBweCk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICA0MCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuLnNpZGVCYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjM1ZGVnLCAyNCUsIDE5JSk7XFxuICBnYXA6IDFyZW07XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgZ3JpZC1yb3c6IDEvMztcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGhzbCgyMzZkZWcsIDMzJSwgOTIlKTtcXG4gIHBhZGRpbmc6IDFyZW0gMXJlbSAwIDFyZW07XFxuICBhbmltYXRpb246IHNsaWRlLWluIDQ1MG1zIGVhc2UtaW4tb3V0IDEgbm9ybWFsO1xcbn1cXG5Aa2V5ZnJhbWVzIHNsaWRlLWluIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MDBweCk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICA0MCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuLnNpZGVCYXIgLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiBoc2woMjM1ZGVnLCAyMSUsIDExJSk7XFxuICBjb2xvcjogaHNsKDIzNGRlZywgMzklLCA4NSUpO1xcbn1cXG4uc2lkZUJhcl9fdGl0bGUge1xcbiAgY29sb3I6IGhzbCgyMzRkZWcsIDM5JSwgODUlKTtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxufVxcbi5zaWRlQmFyX191cHBlciB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGhzbCgyMzZkZWcsIDMzJSwgOTIlKTtcXG59XFxuLnNpZGVCYXJfX3RhYiB7XFxuICBwYWRkaW5nOiAwLjg1cmVtIDAuM3JlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcXG4gIGFuaW1hdGlvbjogc2xpZGUtaW4gMzUwbXMgZWFzZS1pbi1vdXQgMSBub3JtYWw7XFxufVxcbi5zaWRlQmFyX190YWI6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogaHNsKDIzNWRlZywgMjElLCAxMSUpO1xcbiAgY29sb3I6IGhzbCgyMzRkZWcsIDM5JSwgODUlKTtcXG59XFxuLnNpZGVCYXJfX3Byb2plY3Qge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGhzbCgyMzZkZWcsIDMzJSwgOTIlKTtcXG4gIG1heC1oZWlnaHQ6IDE1cmVtO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcbi5zaWRlQmFyX19hZGRQcm9qZWN0IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMS41cmVtIDAgMC41cmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG4uc2lkZUJhcl9fYWRkUHJvamVjdDpob3ZlciB7XFxuICBjb2xvcjogIzIyZDNlZTtcXG59XFxuXFxuLmxpc3RDb250YWluZXIge1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGdyaWQtcm93OiAyLzM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIzNWRlZywgMjQlLCAxOSUpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2ZnIgMWZyO1xcbiAgei1pbmRleDogMDtcXG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgNDUwbXMgZWFzZS1pbi1vdXQgMSBub3JtYWw7XFxufVxcbkBrZXlmcmFtZXMgc2xpZGUtdXAge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAwcHgpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgNDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICB9XFxufVxcbi5saXN0Q29udGFpbmVyX19saXN0cyB7XFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1pbi1vdXQ7XFxufVxcbi5saXN0Q29udGFpbmVyX19saXN0SXRlbSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjM1ZGVnLCAyMSUsIDExJSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gIGdhcDogMnJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLW91dDtcXG4gIGFuaW1hdGlvbjogc2xpZGUtbGVmdCA0NTBtcyBlYXNlLWluLW91dCAxIG5vcm1hbDtcXG59XFxuQGtleWZyYW1lcyBzbGlkZS1sZWZ0IHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwMHB4KTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDQwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgfVxcbn1cXG4ubGlzdENvbnRhaW5lcl9fbGlzdEl0ZW0gcCB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbi5saXN0Q29udGFpbmVyX19hZGRUYXNrIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmxpc3RDb250YWluZXJfX2FkZFRhc2tfX2FkZEJ0biB7XFxuICBiYWNrZ3JvdW5kOiBoc2woMjM2ZGVnLCAzMyUsIDkyJSk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDFyZW07XFxuICByaWdodDogMS41cmVtO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDUwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1pbi1vdXQ7XFxufVxcbi5saXN0Q29udGFpbmVyX19hZGRUYXNrX19hZGRCdG46aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMzRkZWcsIDM5JSwgODUlKTtcXG59XFxuLmxpc3RDb250YWluZXJfX2NyZWF0ZVRhc2tNb2RhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQ6IGhzbCgyMzVkZWcsIDIxJSwgMTElKTtcXG4gIGhlaWdodDogMjB2aDtcXG4gIHdpZHRoOiAzMHZ3O1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoNjAsIDY0LCA2NywgMC4zKSAwcHggMXB4IDJweCAwcHgsIHJnYmEoNjAsIDY0LCA2NywgMC4xNSkgMHB4IDJweCA2cHggMnB4O1xcbiAgdG9wOiA3LjVyZW07XFxuICBsZWZ0OiAxMi41cmVtO1xcbiAgei1pbmRleDogMTtcXG4gIGFuaW1hdGlvbjogcG9wLXVwIDIwMG1zIGVhc2UtaW4tb3V0IDEgbm9ybWFsO1xcbn1cXG4ubGlzdENvbnRhaW5lcl9fY3JlYXRlUHJvamVjdE1vZGFsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZDogaHNsKDIzNWRlZywgMjElLCAxMSUpO1xcbiAgaGVpZ2h0OiAyMi41dmg7XFxuICB3aWR0aDogMjIuNXZ3O1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHRvcDogNy41cmVtO1xcbiAgbGVmdDogMTcuNXJlbTtcXG4gIHotaW5kZXg6IDE7XFxuICBhbmltYXRpb246IHBvcC11cCAyMDBtcyBlYXNlLWluLW91dCAxIG5vcm1hbDtcXG59XFxuQGtleWZyYW1lcyBwb3AtdXAge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICBoZWlnaHQ6IDg1dmg7XFxuICB3aWR0aDogNzB2dztcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg5LjUlKTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDIuOGZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxLjE1ZnIgNGZyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9nbG9iYWxzL19ib2lsZXJwbGF0ZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9zdHlsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy91dGlsaXRpZXMvX3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9sYXlvdXRzL19oZWFkZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvbGF5b3V0cy9fc2lkZUJhci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9sYXlvdXRzL19saXN0Q29udGFpbmVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2xheW91dHMvX2NvbnRhaW5lci5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBOzs7RUFHQyxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FDQ0Q7O0FERUE7RUFDQyx1Q0VDYztFRkFkLHVDRVJlO0VGU2YsZ0JBQUE7RUFDQSw0QkVDa0I7QURBbkI7O0FEQ0E7RUFDQyxtQ0VIdUI7QURLeEI7O0FEQ0E7RUFDQyx1Q0VSeUI7RUZTekIsNEJFUGtCO0VGUWxCLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtBQ0VEO0FEREM7RUFDQyx3Q0FBQTtBQ0dGOztBREFBO0VBQ0Msa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1Q0V6QnlCO0VGMEJ6Qiw0QkV4QmtCO0VGeUJsQixvQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0FDR0Q7QURGQztFQUNDLHNCQUFBO0FDSUY7QURGQztFQUNDLHNCQUFBO0FDSUY7O0FFakRBO0VBQ0MsMEVESWlCO0VDSGpCLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdEQUFBO0FGb0REO0FFbkRDO0VBQ0M7SUFDQyw2QkFBQTtJQUNBLFVBQUE7RUZxREQ7RUVuREE7SUFDQyxVQUFBO0VGcUREO0VFbkRBO0lBQ0Msd0JBQUE7SUFDQSxVQUFBO0VGcUREO0FBQ0Y7O0FHckVBO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUNGT3lCO0VFTnpCLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSw2Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsOENBQUE7QUh3RUQ7QUd0RUM7RUFDQztJQUNDLDZCQUFBO0lBQ0EsVUFBQTtFSHdFRDtFR3RFQTtJQUNDLFVBQUE7RUh3RUQ7RUd0RUE7SUFDQyx3QkFBQTtJQUNBLFVBQUE7RUh3RUQ7QUFDRjtBR3RFQztFQUNDLGlDRmhCYTtFRWlCYiw0QkZmc0I7QUR1RnhCO0FHdEVDO0VBQ0MsNEJGbEJzQjtFRW1CdEIsbUJBQUE7QUh3RUY7QUdyRUM7RUFDQyxnQkFBQTtFQUNBLDhDQUFBO0FIdUVGO0FHcEVDO0VBQ0MsdUJBQUE7RUFFQSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSw4Q0FBQTtBSHFFRjtBR3BFRTtFQUNDLGlDRnBDWTtFRXFDWiw0QkZuQ3FCO0FEeUd4QjtBR2xFQztFQUNDLDhDQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7QUhvRUY7QUdsRUM7RUFDQyxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQ0FBQTtBSG9FRjtBR25FRTtFQUNDLGNGdkRTO0FENEhaOztBSWxJQTtFQUNDLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVDSEt5QjtFR0p6QiwyQkFBQTtFQUNBLFVBQUE7RUFDQSw4Q0FBQTtBSnFJRDtBSXBJQztFQUNDO0lBQ0MsNEJBQUE7SUFDQSxVQUFBO0VKc0lEO0VJcElBO0lBQ0MsVUFBQTtFSnNJRDtFSXBJQTtJQUNDLFVBQUE7SUFDQSx3QkFBQTtFSnNJRDtBQUNGO0FJcElDO0VBQ0Msa0JBQUE7RUFDQSxpQ0FBQTtBSnNJRjtBSXBJQztFQUNDLHVDSGxCYTtFR21CYixhQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7RUFDQSxnREFBQTtBSnNJRjtBSXJJRTtFQUNDO0lBQ0MsNEJBQUE7SUFDQSxVQUFBO0VKdUlGO0VJcklDO0lBQ0MsVUFBQTtFSnVJRjtFSXJJQztJQUNDLFVBQUE7SUFDQSx3QkFBQTtFSnVJRjtBQUNGO0FJcklFO0VBQ0Msa0JBQUE7QUp1SUg7QUlwSUM7RUFDQyxrQkFBQTtBSnNJRjtBSXJJRTtFQUNDLGlDSDNDZ0I7RUc0Q2hCLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FKdUlIO0FJdElHO0VBQ0Msc0JBQUE7RUFDQSx1Q0h2RG9CO0FEK0x4QjtBSXBJQztFQUNDLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNIakVhO0VHa0ViLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlGQUFBO0VBRUEsV0FBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsNENBQUE7QUpxSUY7QUluSUM7RUFDQyxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlDSGhGYTtFR2lGYixjQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSw0Q0FBQTtBSnFJRjtBSW5JQztFQUNDO0lBQ0MsbUJBQUE7RUpxSUQ7RUluSUE7SUFDQyxtQkFBQTtFSnFJRDtBQUNGOztBSzdPQTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQ0FBQTtFQUNBLDhCQUFBO0FMZ1BEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB1c2UgXFxcIi4uL3V0aWxpdGllc1xcXCIgYXMgKjtcXG4qLFxcbio6OmFmdGVyLFxcbio6OmJlZm9yZSB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogJFZlcnlEYXJrQmx1ZTtcXG5cXHRmb250LWZhbWlseTogJGJhc2VGb250U3R5bGU7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHRjb2xvcjogJExpZ2h0R3JheWlzaEJsdWU7XFxufVxcbmlucHV0IHtcXG5cXHRhY2NlbnQtY29sb3I6ICRMaWdodEdyYXlpc2hCbHVlSG92ZXI7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogJFZlcnlEYXJrRGVzYXR1cmF0ZWRCbHVlO1xcblxcdGNvbG9yOiAkTGlnaHRHcmF5aXNoQmx1ZTtcXG5cXHRmb250LWZhbWlseTogaW5oZXJpdDtcXG5cXHRwYWRkaW5nOiAxcmVtO1xcblxcdG1hcmdpbi10b3A6IDFyZW07XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdHRyYW5zaXRpb246IGFsbCA0NTBtcyBlYXNlLWluLW91dDtcXG5cXHQmOmZvY3VzIHtcXG5cXHRcXHRvdXRsaW5lOiAycHggc29saWQgJEJyaWdodEJsdWU7XFxuXFx0fVxcbn1cXG5idXR0b24ge1xcblxcdG1hcmdpbi10b3A6IDEuNXJlbTtcXG5cXHRtYXJnaW4taW5saW5lOiBhdXRvO1xcblxcdHdpZHRoOiBmaXQtY29udGVudDtcXG5cXHRwYWRkaW5nOiAwLjZyZW0gMXJlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAkVmVyeURhcmtEZXNhdHVyYXRlZEJsdWU7XFxuXFx0Y29sb3I6ICRMaWdodEdyYXlpc2hCbHVlO1xcblxcdGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiAycHg7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2UtaW4tb3V0O1xcblxcdCY6aG92ZXIge1xcblxcdFxcdHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuXFx0fVxcblxcdCY6YWN0aXZlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xcblxcdH1cXG59XFxuXCIsXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1HcmVhdCtWaWJlcyZmYW1pbHk9Sm9zZWZpbitTYW5zOndnaHRANDAwOzYwMDs3MDAmZmFtaWx5PU1hcmNrK1NjcmlwdCZkaXNwbGF5PXN3YXBcXFwiKTtcXG4qLFxcbio6OmFmdGVyLFxcbio6OmJlZm9yZSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjM1ZGVnLCAyMSUsIDExJSk7XFxuICBmb250LWZhbWlseTogXFxcIkpvc2VmaW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgY29sb3I6IGhzbCgyMzZkZWcsIDMzJSwgOTIlKTtcXG59XFxuXFxuaW5wdXQge1xcbiAgYWNjZW50LWNvbG9yOiBoc2woMjM0ZGVnLCAzOSUsIDg1JSk7XFxufVxcblxcbmlucHV0W3R5cGU9dGV4dF0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIzNWRlZywgMjQlLCAxOSUpO1xcbiAgY29sb3I6IGhzbCgyMzZkZWcsIDMzJSwgOTIlKTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRyYW5zaXRpb246IGFsbCA0NTBtcyBlYXNlLWluLW91dDtcXG59XFxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XFxuICBvdXRsaW5lOiAycHggc29saWQgaHNsKDIyMGRlZywgOTglLCA2MSUpO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIHBhZGRpbmc6IDAuNnJlbSAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIzNWRlZywgMjQlLCAxOSUpO1xcbiAgY29sb3I6IGhzbCgyMzZkZWcsIDMzJSwgOTIlKTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5idXR0b246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG59XFxuYnV0dG9uOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChoc2woMTkyZGVnLCAxMDAlLCA2NyUpLCBoc2woMjgwZGVnLCA4NyUsIDY1JSkpO1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBhbmltYXRpb246IHNsaWRlLWRvd24gNDUwbXMgZWFzZS1pbi1vdXQgMSBub3JtYWw7XFxufVxcbkBrZXlmcmFtZXMgc2xpZGUtZG93biB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAwcHgpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgNDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbi5zaWRlQmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIzNWRlZywgMjQlLCAxOSUpO1xcbiAgZ2FwOiAxcmVtO1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGdyaWQtcm93OiAxLzM7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBoc2woMjM2ZGVnLCAzMyUsIDkyJSk7XFxuICBwYWRkaW5nOiAxcmVtIDFyZW0gMCAxcmVtO1xcbiAgYW5pbWF0aW9uOiBzbGlkZS1pbiA0NTBtcyBlYXNlLWluLW91dCAxIG5vcm1hbDtcXG59XFxuQGtleWZyYW1lcyBzbGlkZS1pbiB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAwcHgpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgNDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbi5zaWRlQmFyIC5hY3RpdmUge1xcbiAgYmFja2dyb3VuZDogaHNsKDIzNWRlZywgMjElLCAxMSUpO1xcbiAgY29sb3I6IGhzbCgyMzRkZWcsIDM5JSwgODUlKTtcXG59XFxuLnNpZGVCYXJfX3RpdGxlIHtcXG4gIGNvbG9yOiBoc2woMjM0ZGVnLCAzOSUsIDg1JSk7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbn1cXG4uc2lkZUJhcl9fdXBwZXIge1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBoc2woMjM2ZGVnLCAzMyUsIDkyJSk7XFxufVxcbi5zaWRlQmFyX190YWIge1xcbiAgcGFkZGluZzogMC44NXJlbSAwLjNyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1pbi1vdXQ7XFxuICBhbmltYXRpb246IHNsaWRlLWluIDM1MG1zIGVhc2UtaW4tb3V0IDEgbm9ybWFsO1xcbn1cXG4uc2lkZUJhcl9fdGFiOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IGhzbCgyMzVkZWcsIDIxJSwgMTElKTtcXG4gIGNvbG9yOiBoc2woMjM0ZGVnLCAzOSUsIDg1JSk7XFxufVxcbi5zaWRlQmFyX19wcm9qZWN0IHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBoc2woMjM2ZGVnLCAzMyUsIDkyJSk7XFxuICBtYXgtaGVpZ2h0OiAxNXJlbTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG4uc2lkZUJhcl9fYWRkUHJvamVjdCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW46IDEuNXJlbSAwIDAuNXJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluLW91dDtcXG59XFxuLnNpZGVCYXJfX2FkZFByb2plY3Q6aG92ZXIge1xcbiAgY29sb3I6ICMyMmQzZWU7XFxufVxcblxcbi5saXN0Q29udGFpbmVyIHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMi8zO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMzVkZWcsIDI0JSwgMTklKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNmZyIDFmcjtcXG4gIHotaW5kZXg6IDA7XFxuICBhbmltYXRpb246IHNsaWRlLXVwIDQ1MG1zIGVhc2UtaW4tb3V0IDEgbm9ybWFsO1xcbn1cXG5Aa2V5ZnJhbWVzIHNsaWRlLXVwIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwMHB4KTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDQwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgfVxcbn1cXG4ubGlzdENvbnRhaW5lcl9fbGlzdHMge1xcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW4tb3V0O1xcbn1cXG4ubGlzdENvbnRhaW5lcl9fbGlzdEl0ZW0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIzNWRlZywgMjElLCAxMSUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICBnYXA6IDJyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1vdXQ7XFxuICBhbmltYXRpb246IHNsaWRlLWxlZnQgNDUwbXMgZWFzZS1pbi1vdXQgMSBub3JtYWw7XFxufVxcbkBrZXlmcmFtZXMgc2xpZGUtbGVmdCB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MDBweCk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICA0MCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gIH1cXG59XFxuLmxpc3RDb250YWluZXJfX2xpc3RJdGVtIHAge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG4ubGlzdENvbnRhaW5lcl9fYWRkVGFzayB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5saXN0Q29udGFpbmVyX19hZGRUYXNrX19hZGRCdG4ge1xcbiAgYmFja2dyb3VuZDogaHNsKDIzNmRlZywgMzMlLCA5MiUpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxcmVtO1xcbiAgcmlnaHQ6IDEuNXJlbTtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW4tb3V0O1xcbn1cXG4ubGlzdENvbnRhaW5lcl9fYWRkVGFza19fYWRkQnRuOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjM0ZGVnLCAzOSUsIDg1JSk7XFxufVxcbi5saXN0Q29udGFpbmVyX19jcmVhdGVUYXNrTW9kYWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kOiBoc2woMjM1ZGVnLCAyMSUsIDExJSk7XFxuICBoZWlnaHQ6IDIwdmg7XFxuICB3aWR0aDogMzB2dztcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3gtc2hhZG93OiByZ2JhKDYwLCA2NCwgNjcsIDAuMykgMHB4IDFweCAycHggMHB4LCByZ2JhKDYwLCA2NCwgNjcsIDAuMTUpIDBweCAycHggNnB4IDJweDtcXG4gIHRvcDogNy41cmVtO1xcbiAgbGVmdDogMTIuNXJlbTtcXG4gIHotaW5kZXg6IDE7XFxuICBhbmltYXRpb246IHBvcC11cCAyMDBtcyBlYXNlLWluLW91dCAxIG5vcm1hbDtcXG59XFxuLmxpc3RDb250YWluZXJfX2NyZWF0ZVByb2plY3RNb2RhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQ6IGhzbCgyMzVkZWcsIDIxJSwgMTElKTtcXG4gIGhlaWdodDogMjIuNXZoO1xcbiAgd2lkdGg6IDIyLjV2dztcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB0b3A6IDcuNXJlbTtcXG4gIGxlZnQ6IDE3LjVyZW07XFxuICB6LWluZGV4OiAxO1xcbiAgYW5pbWF0aW9uOiBwb3AtdXAgMjAwbXMgZWFzZS1pbi1vdXQgMSBub3JtYWw7XFxufVxcbkBrZXlmcmFtZXMgcG9wLXVwIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgaGVpZ2h0OiA4NXZoO1xcbiAgd2lkdGg6IDcwdnc7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOS41JSk7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyLjhmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMS4xNWZyIDRmcjtcXG59XCIsXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1HcmVhdCtWaWJlcyZmYW1pbHk9Sm9zZWZpbitTYW5zOndnaHRANDAwOzYwMDs3MDAmZmFtaWx5PU1hcmNrK1NjcmlwdCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG4vLyBmb250IHN0eWxlc1xcbiRiYXNlRm9udFN0eWxlOiBcXFwiSm9zZWZpbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG5cXG4vLyBwcmltYXJ5IGNvbG9yc1xcbiRCcmlnaHRCbHVlOiBoc2woMjIwLCA5OCUsIDYxJSk7XFxuJENoZWNrQmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KGhzbCgxOTIsIDEwMCUsIDY3JSksIGhzbCgyODAsIDg3JSwgNjUlKSk7XFxuJGxpZ2h0QXF1YTogIzIyZDNlZTtcXG5cXG4vLyBkYXJrbW9kZSBjb2xvcnNcXG4kVmVyeURhcmtCbHVlOiBoc2woMjM1LCAyMSUsIDExJSk7XFxuJFZlcnlEYXJrRGVzYXR1cmF0ZWRCbHVlOiBoc2woMjM1LCAyNCUsIDE5JSk7XFxuJExpZ2h0R3JheWlzaEJsdWVIb3ZlcjogaHNsKDIzNCwgMzklLCA4NSUpO1xcbiRMaWdodEdyYXlpc2hCbHVlOiBoc2woMjM2LCAzMyUsIDkyJSk7XFxuJERhcmtHcmF5aXNoQmx1ZTogaHNsKDIzNCwgMTElLCA1MiUpO1xcbiRWZXJ5RGFya0dyYXlpc2hCbHVlOiBoc2woMjMzLCAxNCUsIDM1JSk7XFxuJFZlcnlEYXJrR3JheWlzaEJsdWU6IGhzbCgyMzcsIDE0JSwgMjYlKTtcXG5cIixcIkB1c2UgXFxcIi4uL3V0aWxpdGllc1xcXCIgYXMgKjtcXG5cXG4uaGVhZGVyIHtcXG5cXHRiYWNrZ3JvdW5kOiAkQ2hlY2tCYWNrZ3JvdW5kO1xcblxcdGdyaWQtY29sdW1uOiAyLzM7XFxuXFx0Z3JpZC1yb3c6IDEvMjtcXG5cXHRhbmltYXRpb246IHNsaWRlLWRvd24gNDUwbXMgZWFzZS1pbi1vdXQgMSBub3JtYWw7XFxuXFx0QGtleWZyYW1lcyBzbGlkZS1kb3duIHtcXG5cXHRcXHQwJSB7XFxuXFx0XFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MDBweCk7XFxuXFx0XFx0XFx0b3BhY2l0eTogMDtcXG5cXHRcXHR9XFxuXFx0XFx0NDAlIHtcXG5cXHRcXHRcXHRvcGFjaXR5OiAwO1xcblxcdFxcdH1cXG5cXHRcXHQxMDAlIHtcXG5cXHRcXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuXFx0XFx0XFx0b3BhY2l0eTogMTtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cIixcIkB1c2UgXFxcIi4uL3V0aWxpdGllc1xcXCIgYXMgKjtcXG5cXG4uc2lkZUJhciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICRWZXJ5RGFya0Rlc2F0dXJhdGVkQmx1ZTtcXG5cXHRnYXA6IDFyZW07XFxuXFx0Z3JpZC1jb2x1bW46IDEvMjtcXG5cXHRncmlkLXJvdzogMS8zO1xcblxcdGJvcmRlci1yaWdodDogMXB4IHNvbGlkICRMaWdodEdyYXlpc2hCbHVlO1xcblxcdHBhZGRpbmc6IDFyZW0gMXJlbSAwIDFyZW07XFxuXFx0YW5pbWF0aW9uOiBzbGlkZS1pbiA0NTBtcyBlYXNlLWluLW91dCAxIG5vcm1hbDtcXG5cXG5cXHRAa2V5ZnJhbWVzIHNsaWRlLWluIHtcXG5cXHRcXHQwJSB7XFxuXFx0XFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MDBweCk7XFxuXFx0XFx0XFx0b3BhY2l0eTogMDtcXG5cXHRcXHR9XFxuXFx0XFx0NDAlIHtcXG5cXHRcXHRcXHRvcGFjaXR5OiAwO1xcblxcdFxcdH1cXG5cXHRcXHQxMDAlIHtcXG5cXHRcXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuXFx0XFx0XFx0b3BhY2l0eTogMTtcXG5cXHRcXHR9XFxuXFx0fVxcblxcdCYgLmFjdGl2ZSB7XFxuXFx0XFx0YmFja2dyb3VuZDogJFZlcnlEYXJrQmx1ZTtcXG5cXHRcXHRjb2xvcjogJExpZ2h0R3JheWlzaEJsdWVIb3ZlcjtcXG5cXHR9XFxuXFx0Jl9fdGl0bGUge1xcblxcdFxcdGNvbG9yOiAkTGlnaHRHcmF5aXNoQmx1ZUhvdmVyO1xcblxcdFxcdGxldHRlci1zcGFjaW5nOiAycHg7XFxuXFx0fVxcblxcblxcdCZfX3VwcGVyIHtcXG5cXHRcXHRtYXJnaW4tdG9wOiAxcmVtO1xcblxcdFxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkTGlnaHRHcmF5aXNoQmx1ZTtcXG5cXHR9XFxuXFxuXFx0Jl9fdGFiIHtcXG5cXHRcXHRwYWRkaW5nOiAwLjg1cmVtIDAuM3JlbTtcXG5cXHRcXHQvLyBib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdFxcdHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcXG5cXHRcXHRhbmltYXRpb246IHNsaWRlLWluIDM1MG1zIGVhc2UtaW4tb3V0IDEgbm9ybWFsO1xcblxcdFxcdCY6aG92ZXIge1xcblxcdFxcdFxcdGJhY2tncm91bmQ6ICRWZXJ5RGFya0JsdWU7XFxuXFx0XFx0XFx0Y29sb3I6ICRMaWdodEdyYXlpc2hCbHVlSG92ZXI7XFxuXFx0XFx0fVxcblxcdH1cXG5cXG5cXHQmX19wcm9qZWN0IHtcXG5cXHRcXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgJExpZ2h0R3JheWlzaEJsdWU7XFxuXFx0XFx0bWF4LWhlaWdodDogMTVyZW07XFxuXFx0XFx0b3ZlcmZsb3c6IGF1dG87XFxuXFx0XFx0dHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0O1xcblxcdH1cXG5cXHQmX19hZGRQcm9qZWN0IHtcXG5cXHRcXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0XFx0bWFyZ2luOiAxLjVyZW0gMCAwLjVyZW07XFxuXFx0XFx0dHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0O1xcblxcdFxcdCY6aG92ZXIge1xcblxcdFxcdFxcdGNvbG9yOiAkbGlnaHRBcXVhO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblwiLFwiQHVzZSBcXFwiLi4vdXRpbGl0aWVzXFxcIiBhcyAqO1xcblxcbi5saXN0Q29udGFpbmVyIHtcXG5cXHRncmlkLWNvbHVtbjogMi8zO1xcblxcdGdyaWQtcm93OiAyLzM7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogJFZlcnlEYXJrRGVzYXR1cmF0ZWRCbHVlO1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogNmZyIDFmcjtcXG5cXHR6LWluZGV4OiAwO1xcblxcdGFuaW1hdGlvbjogc2xpZGUtdXAgNDUwbXMgZWFzZS1pbi1vdXQgMSBub3JtYWw7XFxuXFx0QGtleWZyYW1lcyBzbGlkZS11cCB7XFxuXFx0XFx0MCUge1xcblxcdFxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MDBweCk7XFxuXFx0XFx0XFx0b3BhY2l0eTogMDtcXG5cXHRcXHR9XFxuXFx0XFx0NDAlIHtcXG5cXHRcXHRcXHRvcGFjaXR5OiAwO1xcblxcdFxcdH1cXG5cXHRcXHQxMDAlIHtcXG5cXHRcXHRcXHRvcGFjaXR5OiAxO1xcblxcdFxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG5cXHRcXHR9XFxuXFx0fVxcblxcdCZfX2xpc3RzIHtcXG5cXHRcXHRwYWRkaW5nOiAxcmVtIDJyZW07XFxuXFx0XFx0dHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW4tb3V0O1xcblxcdH1cXG5cXHQmX19saXN0SXRlbSB7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogJFZlcnlEYXJrQmx1ZTtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG5cXHRcXHRwYWRkaW5nOiAxcmVtO1xcblxcdFxcdG1hcmdpbi10b3A6IDAuNXJlbTtcXG5cXHRcXHRnYXA6IDJyZW07XFxuXFx0XFx0dHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2Utb3V0O1xcblxcdFxcdGFuaW1hdGlvbjogc2xpZGUtbGVmdCA0NTBtcyBlYXNlLWluLW91dCAxIG5vcm1hbDtcXG5cXHRcXHRAa2V5ZnJhbWVzIHNsaWRlLWxlZnQge1xcblxcdFxcdFxcdDAlIHtcXG5cXHRcXHRcXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAwcHgpO1xcblxcdFxcdFxcdFxcdG9wYWNpdHk6IDA7XFxuXFx0XFx0XFx0fVxcblxcdFxcdFxcdDQwJSB7XFxuXFx0XFx0XFx0XFx0b3BhY2l0eTogMDtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0XFx0MTAwJSB7XFxuXFx0XFx0XFx0XFx0b3BhY2l0eTogMTtcXG5cXHRcXHRcXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXHRcXHRwIHtcXG5cXHRcXHRcXHRhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFx0XFx0fVxcblxcdH1cXG5cXHQmX19hZGRUYXNrIHtcXG5cXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0XFx0Jl9fYWRkQnRuIHtcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kOiAkTGlnaHRHcmF5aXNoQmx1ZTtcXG5cXHRcXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0XFx0XFx0dG9wOiAxcmVtO1xcblxcdFxcdFxcdHJpZ2h0OiAxLjVyZW07XFxuXFx0XFx0XFx0aGVpZ2h0OiA1MHB4O1xcblxcdFxcdFxcdHdpZHRoOiA1MHB4O1xcblxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXHRcXHRcXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0XFx0XFx0dHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW4tb3V0O1xcblxcdFxcdFxcdCY6aG92ZXIge1xcblxcdFxcdFxcdFxcdHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuXFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogJExpZ2h0R3JheWlzaEJsdWVIb3ZlcjtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcdH1cXG5cXHQmX19jcmVhdGVUYXNrTW9kYWwge1xcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRcXHRkaXNwbGF5OiBub25lO1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0YmFja2dyb3VuZDogJFZlcnlEYXJrQmx1ZTtcXG5cXHRcXHRoZWlnaHQ6IDIwdmg7XFxuXFx0XFx0d2lkdGg6IDMwdnc7XFxuXFx0XFx0cGFkZGluZzogMXJlbTtcXG5cXHRcXHRib3gtc2hhZG93OiByZ2JhKDYwLCA2NCwgNjcsIDAuMykgMHB4IDFweCAycHggMHB4LFxcblxcdFxcdFxcdHJnYmEoNjAsIDY0LCA2NywgMC4xNSkgMHB4IDJweCA2cHggMnB4O1xcblxcdFxcdHRvcDogNy41cmVtO1xcblxcdFxcdGxlZnQ6IDEyLjVyZW07XFxuXFx0XFx0ei1pbmRleDogMTtcXG5cXHRcXHRhbmltYXRpb246IHBvcC11cCAyMDBtcyBlYXNlLWluLW91dCAxIG5vcm1hbDtcXG5cXHR9XFxuXFx0Jl9fY3JlYXRlUHJvamVjdE1vZGFsIHtcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0XFx0ZGlzcGxheTogbm9uZTtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdGJhY2tncm91bmQ6ICRWZXJ5RGFya0JsdWU7XFxuXFx0XFx0aGVpZ2h0OiAyMi41dmg7XFxuXFx0XFx0d2lkdGg6IDIyLjV2dztcXG5cXHRcXHRwYWRkaW5nOiAxcmVtO1xcblxcdFxcdHRvcDogNy41cmVtO1xcblxcdFxcdGxlZnQ6IDE3LjVyZW07XFxuXFx0XFx0ei1pbmRleDogMTtcXG5cXHRcXHRhbmltYXRpb246IHBvcC11cCAyMDBtcyBlYXNlLWluLW91dCAxIG5vcm1hbDtcXG5cXHR9XFxuXFx0QGtleWZyYW1lcyBwb3AtdXAge1xcblxcdFxcdDAlIHtcXG5cXHRcXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDApO1xcblxcdFxcdH1cXG5cXHRcXHQxMDAlIHtcXG5cXHRcXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDEpO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblwiLFwiQHVzZSBcXFwiLi4vdXRpbGl0aWVzXFxcIiBhcyAqO1xcblxcbi5jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0bWFyZ2luLWlubGluZTogYXV0bztcXG5cXHRoZWlnaHQ6IDg1dmg7XFxuXFx0d2lkdGg6IDcwdnc7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDkuNSUpO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDIuOGZyO1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogMS4xNWZyIDRmcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIHRhc2tTdGF0dXNDaGVjayhlKSB7XG5cdGNvbnN0IHNpYmxpbmdQYXJhID0gZS50YXJnZXQubmV4dFNpYmxpbmc7XG5cdGNvbnN0IHBhcmVudERpdiA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG5cblx0Y29uc3QgaXNDb21wbGV0ZWQgPSBzaWJsaW5nUGFyYS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9PT0gXCJsaW5lLXRocm91Z2hcIjtcblxuXHRzaWJsaW5nUGFyYS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IGlzQ29tcGxldGVkID8gXCJub25lXCIgOiBcImxpbmUtdGhyb3VnaFwiO1xuXHRwYXJlbnREaXYuc3R5bGUub3BhY2l0eSA9IGlzQ29tcGxldGVkID8gXCIxXCIgOiBcIjAuNlwiO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVFdmVudCh0YXNrSXRlbSkge1xuXHR0YXNrSXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGFza1N0YXR1c0NoZWNrKTtcblx0Ly8gdGFza0l0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRyYW5zZmVyQ29tcGxldGVkVGFzayk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRhc2tDb21wbGV0ZSgpIHtcblx0Y29uc3QgdGFza0NoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrQ2hlY2tib3hcIik7XG5cdHRhc2tDaGVja2JveC5mb3JFYWNoKGhhbmRsZUV2ZW50KTtcbn1cbiIsImltcG9ydCB0YXNrQ29tcGxldGUgZnJvbSBcIi4vY29tcGxldGVUYXNrXCI7XG5pbXBvcnQgc3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5pbXBvcnQgdGFzayBmcm9tIFwiLi90YXNrXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlZmF1bHRUYWIoKSB7XG5cdC8vIHRhc2suY2xlYXJUYXNrU2NyZWVuKCk7XG5cdHRhc2suY3JlYXRlKCk7XG5cdHRhc2suZGlzcGxheVRvRG9tKHN0b3JhZ2UuaW5ib3gpO1xuXHR0YXNrQ29tcGxldGUoKTtcbn1cbiIsImNvbnN0IHN0b3JhZ2UgPSAoKCkgPT4ge1xuXHRjb25zdCBpbmJveCA9IFtcblx0XHR7XG5cdFx0XHR0aXRsZTogXCJ0ZXN0dHR0XCIsXG5cdFx0XHR0YWI6IFwiSW5ib3hcIixcblx0XHR9LFxuXHRcdHtcblx0XHRcdHRpdGxlOiBcInRlb29zdHR0dFwiLFxuXHRcdFx0dGFiOiBcIkluYm94XCIsXG5cdFx0fSxcblx0XTtcblx0cmV0dXJuIHtcblx0XHRpbmJveCxcblx0fTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JhZ2U7XG4iLCJpbXBvcnQgZGVmYXVsdFRhYiBmcm9tIFwiLi9kZWZhdWx0VGFiXCI7XG5pbXBvcnQgdGFzayBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQgc3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5pbXBvcnQgdGFza0NvbXBsZXRlIGZyb20gXCIuL2NvbXBsZXRlVGFza1wiO1xuXG5jb25zdCBwcm9qZWN0QXJyYXkgPSBbXCJGYW1pbHlcIiwgXCJQZXJzb25hbFwiLCBcIlNlY3JldFwiXTtcblxuY29uc3QgcHJvamVjdFRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHNcIik7XG5cbmNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGVCYXJcIik7XG5jb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsaXN0c1wiKTtcblxuY29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UHJvamVjdFwiKTtcbmNvbnN0IHByb2plY3RNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlUHJvamVjdE1vZGFsXCIpO1xuXG4vLyAgZGlzcGxheSBwcm9qZWN0IHNlY3Rpb24gYW5kIHNldHVwXG5mdW5jdGlvbiBhZGRFdmVudChwcm9qZWN0LCBwcm9qZWN0SXRlbSkge1xuXHRwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0dGFzay5jdXJyZW50KHByb2plY3RJdGVtKTtcblx0XHR0YXNrLmNsZWFyVGFza1NjcmVlbigpO1xuXHRcdHRhc2suY3JlYXRlKCk7XG5cdFx0Y29uc3QgcHJvamVjdFBlcnNvbmFsQXJyYXkgPSBzdG9yYWdlLmluYm94LmZpbHRlcihcblx0XHRcdChpdGVtKSA9PiBpdGVtLnRhYiA9PT0gcHJvamVjdEl0ZW1cblx0XHQpO1xuXHRcdHRhc2suZGlzcGxheVRvRG9tKHByb2plY3RQZXJzb25hbEFycmF5KTtcblx0XHR0YXNrQ29tcGxldGUoKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIHByb2plY3RGYWN0b3J5KHByb2plY3RJdGVtLCBpbmRleCkge1xuXHRjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0cHJvamVjdC5jbGFzc0xpc3QuYWRkKFwic2lkZUJhcl9fdGFiXCIpO1xuXHRwcm9qZWN0LnNldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIiwgYCR7aW5kZXh9YCk7XG5cdHByb2plY3RUYWIuYXBwZW5kKHByb2plY3QpO1xuXG5cdGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuXHRwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IGAke3Byb2plY3RJdGVtfWA7XG5cdHByb2plY3QuYXBwZW5kKHByb2plY3ROYW1lKTtcblxuXHRhZGRFdmVudChwcm9qZWN0LCBwcm9qZWN0SXRlbSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0cygpIHtcblx0cHJvamVjdEFycmF5LmZvckVhY2goKHByb2plY3RJdGVtLCBpbmRleCkgPT4ge1xuXHRcdHByb2plY3RGYWN0b3J5KHByb2plY3RJdGVtLCBpbmRleCk7XG5cdH0pO1xufVxuXG4vLyAgQ3JlYXRlIFByb2plY3Qgc2VjdGlvblxuZnVuY3Rpb24gcmVzZXRQcm9qZWN0U2NyZWVuKCkge1xuXHRsaXN0LnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0VGl0bGVcIikudmFsdWUgPSBcIlwiO1xuXHRsaXN0LnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImF1dG9cIjtcblx0c2lkZUJhci5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJhdXRvXCI7XG5cdHByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG5cbmZ1bmN0aW9uIGNsb3NlV2luZG93KGUpIHtcblx0Y29uc3Qgb3V0c2lkZUNsaWNrID1cblx0XHQhcHJvamVjdE1vZGFsLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhbmV3UHJvamVjdEJ0bi5jb250YWlucyhlLnRhcmdldCk7XG5cdGlmIChvdXRzaWRlQ2xpY2spIHtcblx0XHRyZXNldFByb2plY3RTY3JlZW4oKTtcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VXaW5kb3cpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RNb2RhbCgpIHtcblx0bGlzdC5zdHlsZS5vcGFjaXR5ID0gXCIwLjdcIjtcblx0bGlzdC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG5cdHNpZGVCYXIuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuXHRwcm9qZWN0TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VXaW5kb3cpO1xufVxuXG5mdW5jdGlvbiBhZGRUb0FycmF5KGUpIHtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RUaXRsZVwiKS52YWx1ZTtcblx0Y29uc3QgaXNFbXB0eSA9IHByb2plY3RUaXRsZSA9PT0gXCJcIjtcblx0aWYgKCFpc0VtcHR5KSB7XG5cdFx0Y29uc3QgcHJvamVjdEl0ZW0gPSBwcm9qZWN0VGl0bGU7XG5cdFx0cHJvamVjdEFycmF5LnB1c2gocHJvamVjdEl0ZW0pO1xuXHRcdHJlc2V0UHJvamVjdFNjcmVlbigpO1xuXHRcdHByb2plY3RGYWN0b3J5KHByb2plY3RJdGVtLCBwcm9qZWN0QXJyYXkuaW5kZXhPZihwcm9qZWN0SXRlbSkpO1xuXHRcdHRhc2tDb21wbGV0ZSgpO1xuXHR9XG59XG5mdW5jdGlvbiBzdWJtaXRQcm9qZWN0RGF0YSgpIHtcblx0Y29uc3QgY3JlYXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlUHJvamVjdEJ0blwiKTtcblx0Y3JlYXRlUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkVG9BcnJheSk7XG59XG5mdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KCkge1xuXHRjcmVhdGVQcm9qZWN0TW9kYWwoKTtcblx0c3VibWl0UHJvamVjdERhdGEoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGFicygpIHtcblx0Y29uc3QgaW5ib3hUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlZmF1bHRUYWJcIik7XG5cblx0aW5ib3hUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlZmF1bHRUYWIpO1xuXHRkaXNwbGF5UHJvamVjdHMoKTtcblx0bmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlTmV3UHJvamVjdCk7XG59XG4iLCJpbXBvcnQgdGFza0NvbXBsZXRlIGZyb20gXCIuL2NvbXBsZXRlVGFza1wiO1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSBcIi4vc3RvcmFnZVwiO1xuXG5jbGFzcyBUYXNrQ3JlYXRvciB7XG5cdGNvbnN0cnVjdG9yKHRpdGxlLCBjdXJyZW50VGFiKSB7XG5cdFx0dGhpcy50aXRsZSA9IHRpdGxlO1xuXHRcdHRoaXMudGFiID0gY3VycmVudFRhYjtcblx0fVxufVxubGV0IGN1cnJlbnRUYWI7XG5cbmNvbnN0IHRhc2tNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlVGFza01vZGFsXCIpO1xuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVGFza1wiKTtcbmNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xpc3RzXCIpO1xuY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZUJhclwiKTtcblxuZnVuY3Rpb24gZG9tRmFjdG9yeShpdGVtLCBpbmRleCkge1xuXHRjb25zdCBkaXZJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0ZGl2SXRlbS5jbGFzc0xpc3QuYWRkKFwibGlzdENvbnRhaW5lcl9fbGlzdEl0ZW1cIik7XG5cdGRpdkl0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiLCBgJHtpbmRleH1gKTtcblxuXHRjb25zdCBpbnB1dENoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRpbnB1dENoZWNrLnR5cGUgPSBcImNoZWNrYm94XCI7XG5cdGlucHV0Q2hlY2suY2xhc3NMaXN0LmFkZChcInRhc2tDaGVja2JveFwiKTtcblxuXHRjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdHBhcmEudGV4dENvbnRlbnQgPSBgJHtpdGVtLnRpdGxlfWA7XG5cblx0ZGl2SXRlbS5hcHBlbmQoaW5wdXRDaGVjaywgcGFyYSk7XG5cdGxpc3QuYXBwZW5kKGRpdkl0ZW0pO1xufVxuXG5mdW5jdGlvbiByZXNldFNjcmVlbigpIHtcblx0bGlzdC5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza1RpdGxlXCIpLnZhbHVlID0gXCJcIjtcblx0bGlzdC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJhdXRvXCI7XG5cdHNpZGVCYXIuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiYXV0b1wiO1xuXHR0YXNrTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufVxuXG5mdW5jdGlvbiBhZGRUb0FycmF5KGUpIHtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tUaXRsZVwiKS52YWx1ZTtcblx0Y29uc3QgaXNFbXB0eSA9IHRhc2tUaXRsZSA9PT0gXCJcIjtcblx0aWYgKCFpc0VtcHR5KSB7XG5cdFx0Y29uc3QgdGFza0l0ZW0gPSBuZXcgVGFza0NyZWF0b3IodGFza1RpdGxlLCBjdXJyZW50VGFiKTtcblx0XHRzdG9yYWdlLmluYm94LnB1c2godGFza0l0ZW0pO1xuXHRcdC8vIGNvbnNvbGUubG9nKHN0b3JhZ2UuaW5ib3gpO1xuXHRcdHJlc2V0U2NyZWVuKCk7XG5cdFx0ZG9tRmFjdG9yeSh0YXNrSXRlbSwgc3RvcmFnZS5pbmJveC5pbmRleE9mKHRhc2tJdGVtKSk7XG5cdFx0dGFza0NvbXBsZXRlKCk7XG5cdH1cbn1cbi8vIGZ1bmN0aW9uIGNhbmNlbFNjcmVlbigpIHtcbi8vIFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4vLyBcdFx0aWYgKHRhc2tNb2RhbC5jb250YWlucyhlLnRhcmdldCkpIHtcbi8vIFx0XHRcdC8vIENsaWNrZWQgaW4gYm94XG4vLyBcdFx0XHRjb25zb2xlLmxvZyhcImluc2lkZVwiKTtcbi8vIFx0XHR9IGVsc2Uge1xuLy8gXHRcdFx0Ly8gQ2xpY2tlZCBvdXRzaWRlIHRoZSBib3hcbi8vIFx0XHRcdGNvbnNvbGUubG9nKFwib3V0c2lkZVwiKTtcbi8vIFx0XHRcdC8vIHJlc2V0U2NyZWVuKCk7XG4vLyBcdFx0fVxuLy8gXHR9KTtcbi8vIH1cbmZ1bmN0aW9uIGNsb3NlV2luZG93KGUpIHtcblx0Y29uc3Qgb3V0c2lkZUNsaWNrID1cblx0XHQhdGFza01vZGFsLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhYWRkVGFza0J0bi5jb250YWlucyhlLnRhcmdldCk7XG5cdGlmIChvdXRzaWRlQ2xpY2spIHtcblx0XHRyZXNldFNjcmVlbigpO1xuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZVdpbmRvdyk7XG5cdH1cbn1cbmZ1bmN0aW9uIG5ld1Rhc2tNb2RhbCgpIHtcblx0bGlzdC5zdHlsZS5vcGFjaXR5ID0gXCIwLjdcIjtcblx0bGlzdC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG5cdHNpZGVCYXIuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuXHR0YXNrTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VXaW5kb3cpO1xufVxuXG5mdW5jdGlvbiBzdWJtaXRUYXNrRGF0YSgpIHtcblx0Y29uc3Qgc3VibWl0VGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlVGFza0J0blwiKTtcblx0c3VibWl0VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkVG9BcnJheSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2soKSB7XG5cdG5ld1Rhc2tNb2RhbCgpO1xuXHRzdWJtaXRUYXNrRGF0YSgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gdGFzaygpIHtcblx0Y29uc3QgY3VycmVudCA9ICh0YWIpID0+IHtcblx0XHRjdXJyZW50VGFiID0gdGFiIHx8IFwiSW5ib3hcIjtcblx0XHQvLyBjb25zb2xlLmxvZyhjdXJyZW50VGFiKTtcblx0XHRyZXR1cm4gY3VycmVudFRhYjtcblx0fTtcblxuXHRjb25zdCBjcmVhdGUgPSAoKSA9PiBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVUYXNrKTtcblxuXHRmdW5jdGlvbiBkaXNwbGF5VG9Eb20oc3RvcmFnZUFycmF5KSB7XG5cdFx0c3RvcmFnZUFycmF5LmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG5cdFx0XHRkb21GYWN0b3J5KGl0ZW0sIGluZGV4KTtcblx0XHR9KTtcblx0fVxuXHRjb25zdCBjbGVhclRhc2tTY3JlZW4gPSAoKSA9PiB7XG5cdFx0bGV0IGNoaWxkID0gbGlzdC5sYXN0RWxlbWVudENoaWxkO1xuXG5cdFx0d2hpbGUgKGNoaWxkKSB7XG5cdFx0XHRsaXN0LnJlbW92ZUNoaWxkKGNoaWxkKTtcblx0XHRcdGNoaWxkID0gbGlzdC5sYXN0RWxlbWVudENoaWxkO1xuXHRcdH1cblx0fTtcblxuXHQvLyBkaXNwbGF5VG9Eb20oKTtcblx0cmV0dXJuIHtcblx0XHRjcmVhdGUsXG5cdFx0ZGlzcGxheVRvRG9tLFxuXHRcdGNsZWFyVGFza1NjcmVlbixcblx0XHRjdXJyZW50LFxuXHR9O1xufSkoKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc2Nzcy9zdHlsZS5zY3NzXCI7XG5pbXBvcnQgdGFza0NvbXBsZXRlIGZyb20gXCIuL2NvbXBsZXRlVGFza1wiO1xuaW1wb3J0IGRlZmF1bHRUYWIgZnJvbSBcIi4vZGVmYXVsdFRhYlwiO1xuaW1wb3J0IHRhYnMgZnJvbSBcIi4vdGFic1wiO1xuXG4vLyBjb25zb2xlLmxvZyhcIndlYnBhY2sgaGVyZVwiKTtcblxudGFicygpO1xuZGVmYXVsdFRhYigpO1xudGFza0NvbXBsZXRlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=