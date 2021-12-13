"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/postShoes";
exports.ids = ["pages/api/postShoes"];
exports.modules = {

/***/ "./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcHJpc21hLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUEsTUFBTUMsTUFBTSxHQUFHLElBQUlELHdEQUFKLEVBQWY7QUFDQSxpRUFBZUMsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy8uL2xpYi9wcmlzbWEuanM/YzU2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuZXhwb3J0IGRlZmF1bHQgcHJpc21hO1xuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/prisma.js\n");

/***/ }),

/***/ "./pages/api/postShoes.js":
/*!********************************!*\
  !*** ./pages/api/postShoes.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/prisma */ \"./lib/prisma.js\");\n\nasync function handle(req, res) {\n  const {\n    tipo,\n    genere,\n    nome,\n    retail,\n    outlet\n  } = req.body;\n  const postShoes = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.default.amertabella.create({\n    data: {\n      tipo: tipo,\n      genere: genere,\n      nome: nome,\n      retail: retail,\n      outlet: outlet\n    }\n  });\n  res.json(postShoes);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcG9zdFNob2VzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFFZSxlQUFlQyxNQUFmLENBQXNCQyxHQUF0QixFQUEyQkMsR0FBM0IsRUFBZ0M7QUFDN0MsUUFBTTtBQUFFQyxJQUFBQSxJQUFGO0FBQVFDLElBQUFBLE1BQVI7QUFBZ0JDLElBQUFBLElBQWhCO0FBQXNCQyxJQUFBQSxNQUF0QjtBQUE4QkMsSUFBQUE7QUFBOUIsTUFBeUNOLEdBQUcsQ0FBQ08sSUFBbkQ7QUFFQSxRQUFNQyxTQUFTLEdBQUcsTUFBTVYsbUVBQUEsQ0FBMEI7QUFDaERhLElBQUFBLElBQUksRUFBRTtBQUNKVCxNQUFBQSxJQUFJLEVBQUVBLElBREY7QUFFSkMsTUFBQUEsTUFBTSxFQUFFQSxNQUZKO0FBR0pDLE1BQUFBLElBQUksRUFBRUEsSUFIRjtBQUlKQyxNQUFBQSxNQUFNLEVBQUVBLE1BSko7QUFLSkMsTUFBQUEsTUFBTSxFQUFFQTtBQUxKO0FBRDBDLEdBQTFCLENBQXhCO0FBU0FMLEVBQUFBLEdBQUcsQ0FBQ1csSUFBSixDQUFTSixTQUFUO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9hcGkvcG9zdFNob2VzLmpzP2YyODYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByaXNtYSBmcm9tIFwiLi4vLi4vbGliL3ByaXNtYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGUocmVxLCByZXMpIHtcbiAgY29uc3QgeyB0aXBvLCBnZW5lcmUsIG5vbWUsIHJldGFpbCwgb3V0bGV0IH0gPSByZXEuYm9keTtcblxuICBjb25zdCBwb3N0U2hvZXMgPSBhd2FpdCBwcmlzbWEuYW1lcnRhYmVsbGEuY3JlYXRlKHtcbiAgICBkYXRhOiB7XG4gICAgICB0aXBvOiB0aXBvLFxuICAgICAgZ2VuZXJlOiBnZW5lcmUsXG4gICAgICBub21lOiBub21lLFxuICAgICAgcmV0YWlsOiByZXRhaWwsXG4gICAgICBvdXRsZXQ6IG91dGxldCxcbiAgICB9LFxuICB9KTtcbiAgcmVzLmpzb24ocG9zdFNob2VzKTtcbn1cbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJoYW5kbGUiLCJyZXEiLCJyZXMiLCJ0aXBvIiwiZ2VuZXJlIiwibm9tZSIsInJldGFpbCIsIm91dGxldCIsImJvZHkiLCJwb3N0U2hvZXMiLCJhbWVydGFiZWxsYSIsImNyZWF0ZSIsImRhdGEiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/postShoes.js\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/postShoes.js"));
module.exports = __webpack_exports__;

})();