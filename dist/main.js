/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (() => {

eval("const popup_form = document.querySelector(\".form-popup\");\r\nconst close_form = document.querySelector(\"svg\")\r\n\r\ndocument.querySelector(\".new-schedule\").addEventListener(\"click\", () => {\r\n  popup_form.style.display = \"block\";\r\n  popup_form.style.opacity = 1;\r\n  popup_form.style.scale = 1;\r\n  popup_form.style.filter = \"drop-shadow(0 0 50px #9282fa69)\";\r\n\r\n  document.querySelector(\"main\").style.filter = \" grayscale(1) blur(10px)\";\r\n  document.querySelector(\".new-schedule\").style.opacity = 0;\r\n})\r\n\r\nclose_form.onclick = () => {\r\n  resetPage()\r\n}\r\n\r\nfunction resetPage() {\r\n  popup_form.style.opacity = 0;\r\n  popup_form.style.filter.remove;\r\n\r\n  document.querySelector(\"main\").style.filter = \"\";\r\n  document.querySelector(\".new-schedule\").style.opacity = 1;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://mundo-pt/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/main.js"]();
/******/ 	
/******/ })()
;