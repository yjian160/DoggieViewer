(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./client/components/DoggieList.jsx":
/*!******************************************!*\
  !*** ./client/components/DoggieList.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash.debounce */ \"./node_modules/lodash.debounce/index.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar DoggieList = function DoggieList(_ref) {\n  var doggieList = _ref.doggieList,\n      selectedBreed = _ref.selectedBreed;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, doggieList.map(function (dog) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      src: dog\n    }));\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DoggieList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvY29tcG9uZW50cy9Eb2dnaWVMaXN0LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0RvZ2dpZUxpc3QuanN4P2U5YzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBkZWJvdW5jZSBmcm9tIFwibG9kYXNoLmRlYm91bmNlXCI7XG5cbnZhciBEb2dnaWVMaXN0ID0gKHtkb2dnaWVMaXN0LCBzZWxlY3RlZEJyZWVkfSkgPT4gKFxuICAgIDxkaXY+XG4gICAgICAgIHtkb2dnaWVMaXN0Lm1hcChkb2cgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkb2d9PjwvaW1nPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBEb2dnaWVMaXN0OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFFQTtBQUFBO0FBR0E7QUFSQTtBQUNBO0FBV0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/components/DoggieList.jsx\n");

/***/ }),

/***/ "./client/containers/DoggieListContainer.js":
/*!**************************************************!*\
  !*** ./client/containers/DoggieListContainer.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_DoggieList_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../components/DoggieList.jsx */ \"./client/components/DoggieList.jsx\");\n\n\n\nvar mapStateToProps = (state) => ({\n    doggieList: state.DoggieList,\n    selectedBreed: state.BreedsFilter.selectedBreed\n});\n\nvar mapDispatchToProps = (dispatch) => ({\n    \n});\n\nconst DoggieListContainer = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(mapStateToProps, mapDispatchToProps)(_components_DoggieList_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (DoggieListContainer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvY29udGFpbmVycy9Eb2dnaWVMaXN0Q29udGFpbmVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbnRhaW5lcnMvRG9nZ2llTGlzdENvbnRhaW5lci5qcz82ZmMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgRG9nZ2llTGlzdCBmcm9tICcuLy4uL2NvbXBvbmVudHMvRG9nZ2llTGlzdC5qc3gnXG5cbnZhciBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gICAgZG9nZ2llTGlzdDogc3RhdGUuRG9nZ2llTGlzdCxcbiAgICBzZWxlY3RlZEJyZWVkOiBzdGF0ZS5CcmVlZHNGaWx0ZXIuc2VsZWN0ZWRCcmVlZFxufSk7XG5cbnZhciBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gICAgXG59KTtcblxuY29uc3QgRG9nZ2llTGlzdENvbnRhaW5lciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKERvZ2dpZUxpc3QpO1xuZXhwb3J0IGRlZmF1bHQgRG9nZ2llTGlzdENvbnRhaW5lcjsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/containers/DoggieListContainer.js\n");

/***/ })

}]);