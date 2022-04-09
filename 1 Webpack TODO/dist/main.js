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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("\r\n\r\nlet Save = document.getElementById(\"Save\");\r\nlet Previous = document.getElementById(\"Previous\");\r\nlet New = document.getElementById(\"New\");\r\n\r\n\r\nNew.addEventListener(\"click\", () => {\r\n    let more = document.getElementById(\"more\");\r\n\r\n    more.style.visibility = \"hidden\";\r\n\r\n    let input = document.getElementById(\"input\");\r\n\r\n    input.style.visibility = \"visible\";\r\n})\r\n\r\nSave.addEventListener(\"click\", () => {\r\n\r\n    let input = document.getElementById(\"input\").value;\r\n    let more = document.getElementById(\"more\");\r\n    let div1 = document.createElement('div');\r\n\r\n    if(input.length > 0){\r\n        div1.setAttribute(\"id\", \"div1\");\r\n        div1.innerHTML = input;\r\n        \r\n        more.append(div1);\r\n\r\n        let alert = document.getElementById(\"alert\");\r\n\r\n        alert.style.visibility = \"visible\";\r\n        alert.style.width = \"180px\";\r\n        alert.innerHTML = \"Your Note is Saved...\";\r\n\r\n        setTimeout(() => {\r\n            alert.style.visibility = \"hidden\";\r\n            alert.style.width = \"auto\";\r\n            alert.innerHTML = null;\r\n        }, 2000)\r\n        \r\n\r\n        let Remove = false;\r\n\r\n        div1.addEventListener(\"click\", ()=> {\r\n            div1.style.border = \"0.5px solid red\";\r\n\r\n            Remove = true;\r\n            let Remove = document.getElementById(\"Remove\");\r\n\r\n\r\n            Remove.addEventListener(\"click\", ()=> {\r\n                if( Remove === true){\r\n                    div1.remove();\r\n\r\n                    let alert = document.getElementById(\"alert\");\r\n    \r\n                    alert.style.visibility = \"visible\";\r\n                    alert.style.width = \"180px\";\r\n                    alert.innerHTML = \"Your Note is Removed...\";\r\n            \r\n                    setTimeout(() => {\r\n                        alert.style.visibility = \"hidden\";\r\n                        alert.style.width = \"auto\";\r\n                        alert.innerHTML = null;\r\n                    }, 2000)\r\n                }\r\n        \r\n            })\r\n\r\n        })\r\n\r\n        div1.addEventListener(\"dblclick\", ()=> {\r\n            Remove = false;\r\n            div1.style.border = \"none\";\r\n        })\r\n    }  \r\n})\r\n\r\n\r\nPrevious.addEventListener(\"click\", ()=> {\r\n        \r\n    let more = document.getElementById(\"more\");\r\n    let input = document.getElementById(\"input\");\r\n\r\n    input.style.visibility = \"hidden\";\r\n    more.style.visibility = \"visible\";\r\n    console.log(x)\r\n})\r\n  \n\n//# sourceURL=webpack://ass/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;