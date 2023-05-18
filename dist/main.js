/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _making_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./making-requests */ \"./src/making-requests.js\");\n\r\n\r\n\r\n\r\n\r\ndocument.getElementById('buttonList').addEventListener('click' , _making_requests__WEBPACK_IMPORTED_MODULE_0__.listPosts);\r\ndocument.getElementById('getPostByIdButton').addEventListener('click', _making_requests__WEBPACK_IMPORTED_MODULE_0__.getPostById);\r\ndocument.getElementById('createPostButton').addEventListener('click', _making_requests__WEBPACK_IMPORTED_MODULE_0__.createPost);\r\ndocument.getElementById('removePostButton').addEventListener('click', _making_requests__WEBPACK_IMPORTED_MODULE_0__.removePost)\r\n\r\n\n\n//# sourceURL=webpack://api_connection/./src/index.js?");

/***/ }),

/***/ "./src/making-requests.js":
/*!********************************!*\
  !*** ./src/making-requests.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createPost\": () => (/* binding */ createPost),\n/* harmony export */   \"getPostById\": () => (/* binding */ getPostById),\n/* harmony export */   \"listPosts\": () => (/* binding */ listPosts),\n/* harmony export */   \"removePost\": () => (/* binding */ removePost)\n/* harmony export */ });\nfunction listPosts()\r\n{\r\n    fetch('https://jsonplaceholder.typicode.com/posts')\r\n    .then(function(response) {\r\n        if(response.ok) {\r\n            return response.json();\r\n        }\r\n        throw new Error('Request failed');\r\n    })\r\n    .then(function(data){\r\n        var results = document.getElementById('result');\r\n       // results.innerHTML = 'result';\r\n        data.forEach(function(item) {\r\n            var listItem = document.createElement('li');\r\n            listItem.textContent = JSON.stringify(item, null, 2);\r\n            results.appendChild(listItem);\r\n        });\r\n        //results.textContent = JSON.stringify(data);\r\n        //console.log(data);\r\n    })\r\n    .catch(function(error){\r\n        console.log(error);\r\n    });\r\n  \r\n}\r\n\r\nfunction getPostById()\r\n{\r\n    fetch('https://jsonplaceholder.typicode.com/posts/1')\r\n    .then(function(response) {\r\n        if(response.ok) {\r\n            return response.json();\r\n        }\r\n        throw new Error('Request failed');\r\n    })\r\n    .then(function(data){\r\n        var results = document.getElementById('result');\r\n\r\n        results.textContent = JSON.stringify(data);\r\n    })\r\n    .catch(function(error){\r\n        console.log(error);\r\n    });\r\n}\r\n\r\nfunction createPost()\r\n{\r\n    fetch('https://jsonplaceholder.typicode.com/posts', {\r\n  method: 'POST',\r\n  body: JSON.stringify({\r\n    title: 'foo',\r\n    body: 'bar',\r\n    //userId: 1,\r\n  }),\r\n  headers: {\r\n    'Content-type': 'application/json; charset=UTF-8',\r\n  }\r\n})\r\n  .then((response) => response.json())\r\n  .then((json) => console.log(json));\r\n}\r\n\r\nfunction removePost() {\r\n    fetch('https://jsonplaceholder.typicode.com/posts/1', {\r\n  method: 'DELETE',\r\n});\r\n}\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://api_connection/./src/making-requests.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;