webpackHotUpdate("main",{

/***/ "./src/Components/ChoiceMenu.jsx":
/*!***************************************!*\
  !*** ./src/Components/ChoiceMenu.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_MenuPage_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../style/MenuPage.css */ "./src/style/MenuPage.css");
/* harmony import */ var _style_MenuPage_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_MenuPage_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/macbook/code/Projet_3_Ironhack/final_project_GoodToGo_front/src/Components/ChoiceMenu.jsx";



const ChoiceMenu = ({
  title,
  menus,
  handleAdd,
  handleDelete
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, menus.map(menu => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "menu-case",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: menu.image,
    alt: menu.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, menu.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, menu.description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "price-plus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      fontWeight: "bold"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, menu.price), "\u20AC"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: e => handleAdd(menu),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, "Commander"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ChoiceMenu);

/***/ })

})
//# sourceMappingURL=main.24d662f45cd0eb415153.hot-update.js.map