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
exports.id = "pages/api/deleteShoe";
exports.ids = ["pages/api/deleteShoe"];
exports.modules = {

/***/ "./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcHJpc21hLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUEsTUFBTUMsTUFBTSxHQUFHLElBQUlELHdEQUFKLEVBQWY7QUFDQSxpRUFBZUMsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy8uL2xpYi9wcmlzbWEuanM/YzU2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuZXhwb3J0IGRlZmF1bHQgcHJpc21hO1xuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/prisma.js\n");

/***/ }),

/***/ "./pages/api/deleteShoe.js":
/*!*********************************!*\
  !*** ./pages/api/deleteShoe.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/prisma */ \"./lib/prisma.js\");\n\nasync function handle(req, res) {\n  const {\n    shoeIndex\n  } = req.body;\n  const deleteShoe = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.default.amertabella.delete({\n    where: {\n      indice: Number(shoeIndex)\n    }\n  });\n  res.json(deleteShoe);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZGVsZXRlU2hvZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBRWUsZUFBZUMsTUFBZixDQUFzQkMsR0FBdEIsRUFBMkJDLEdBQTNCLEVBQWdDO0FBQzdDLFFBQU07QUFBRUMsSUFBQUE7QUFBRixNQUFnQkYsR0FBRyxDQUFDRyxJQUExQjtBQUNBLFFBQU1DLFVBQVUsR0FBRyxNQUFNTixtRUFBQSxDQUEwQjtBQUNqRFMsSUFBQUEsS0FBSyxFQUFFO0FBQ0xDLE1BQUFBLE1BQU0sRUFBRUMsTUFBTSxDQUFDUCxTQUFEO0FBRFQ7QUFEMEMsR0FBMUIsQ0FBekI7QUFLQUQsRUFBQUEsR0FBRyxDQUFDUyxJQUFKLENBQVNOLFVBQVQ7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy8uL3BhZ2VzL2FwaS9kZWxldGVTaG9lLmpzPzJkNDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByaXNtYSBmcm9tIFwiLi4vLi4vbGliL3ByaXNtYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGUocmVxLCByZXMpIHtcbiAgY29uc3QgeyBzaG9lSW5kZXggfSA9IHJlcS5ib2R5O1xuICBjb25zdCBkZWxldGVTaG9lID0gYXdhaXQgcHJpc21hLmFtZXJ0YWJlbGxhLmRlbGV0ZSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIGluZGljZTogTnVtYmVyKHNob2VJbmRleCksXG4gICAgfSxcbiAgfSk7XG4gIHJlcy5qc29uKGRlbGV0ZVNob2UpO1xufVxuIl0sIm5hbWVzIjpbInByaXNtYSIsImhhbmRsZSIsInJlcSIsInJlcyIsInNob2VJbmRleCIsImJvZHkiLCJkZWxldGVTaG9lIiwiYW1lcnRhYmVsbGEiLCJkZWxldGUiLCJ3aGVyZSIsImluZGljZSIsIk51bWJlciIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/deleteShoe.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/deleteShoe.js"));
module.exports = __webpack_exports__;

})();