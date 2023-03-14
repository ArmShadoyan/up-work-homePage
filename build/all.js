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

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ (() => {

eval("// import { menuRender } from \"./menu\";\r\n// import { hideSeen } from \"./menu\";\r\n// import { findWorkHtml } from \"./menu\";\r\n// import { whyUpworkHtml } from \"./menu\";\r\n// import { findTalentHtml } from \"./menu\";\r\n// import { findTalentRightBlockHtml } from \"./menu\";\r\n// import { findTalentFirstList } from \"./menu\";\r\n// import { findTalentSecondList } from \"./menu\";\r\n// import { findTalentThirdList } from \"./menu\";\r\n\r\n// import { miniMenuHtml } from \"./menu\";\r\n// import { miniMenuRender } from \"./menu\";\r\n// import { toggleBtnsFunc } from \"./menu\";\r\n// import { findTalentBtnsFunc } from \"./menu\";\r\n// import { blockTitleDiv } from \"./menu\";\r\n\r\n\r\n\r\n\r\n\r\nconst navBarContainer = document.querySelector(\".navBarContainer\")\r\nconst navBarTop = document.createElement(\"div\");\r\nconst navBarBottom = document.createElement(\"div\");\r\nnavBarTop.classList.add(\"navBarTop\");\r\nnavBarBottom.classList.add(\"navBarBottom\");\r\n\r\nfetch(\"http://localhost:8888/navBarContainer\")\r\n.then(data => data.json())\r\n.then(data =>{ \r\n\tconsole.log(data);\r\n\treturn data;\r\n}).then(data => {\r\n\tnavBarContainer.appendChild(navBarTopHtml(),navBarBottomHtml());\r\n}).then(data => {\r\n\r\n});\r\n\r\nfunction navBarTopHtml(){\r\n\tnavBarTop.innerHTML = `\r\n\t<div class=\"navLogo\">\r\n\t<div class=\"menuLogos\">\r\n\t\t<img src=\"imgs/navlogo/menu-hamburger-svgrepo-com.svg\" alt=\"\" class=\"openMenu\">\r\n\t\t<img src=\"imgs/navlogo/close-x-svgrepo-com.svg\" alt=\"\" class=\"closeMenu\">\r\n\t</div>\r\n\t<img src=\"/imgs/navlogo/navlogo.jpg\" alt=\"\" class=\"logoImg\">\r\n\t</div>\r\n\t<div class=\"navLeft\">\r\n\t\t<div class=\"navLeftOptions\">\r\n\t\t\t<div class=\"lis FindTalent\">\r\n\t\t\t\t<p>FindTalent</p>\r\n\t\t\t\t<div class=\"arrow\">\r\n\t\t\t\t\t<img src=\"/imgs/navoptionarrows/down.png\" alt=\"\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t<div class=\"lis FindWork\">\r\n\t\t\t<p>FindWork</p>\r\n\t\t\t<div class=\"arrow\">\r\n\t\t\t\t<img src=\"/imgs/navoptionarrows/down.png\" alt=\"\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"lis WhyUpwork\">\r\n\t\t\t<p>WhyUpwork</p>\r\n\t\t\t<div class=\"arrow\">\r\n\t\t\t\t<img src=\"/imgs/navoptionarrows/down.png\" alt=\"\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"lis EnterPrise\">\r\n\t\t\t<p>EnterPrise</p>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n\r\n<div class=\"navRight\">\r\n\t<form action=\"\">\r\n\t\t<img src=\"imgs/search/search.png\" alt=\"\">\r\n\t\t<input type=\"text\" placeholder=\"Search\">\r\n\t\t<button>\r\n\t\t\tTalent\r\n\t\t\t<img src=\"imgs/navoptionarrows/down.png\" alt=\"\">\r\n\t\t</button>\r\n\t</form>\r\n\t<a href=\"#\">Log In</a>\r\n\t<button class=\"signUpBtn\">Sign Up</button>\r\n</div>\r\n\r\n\t<!-- passive nav bar -->\r\n\r\n\t\t<div class=\"navBarPassive\">\r\n\t\t\t<div class=\"passiveNavRight\">\r\n\t\t\t\t<button class=\"signUpBtnResp\">Sign Up</button>\r\n\t\t\t\t<img src=\"imgs/search/search.png\" alt=\"\" class=\"searchImgResp\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t`;\r\n\r\n\treturn navBarTop;\r\n}\r\n\r\nfunction navBarBottomHtml(){\r\n\tnavBarBottom.innerHTML = `\r\n\t<div class=\"navRightOptions\">\r\n\t\t<a href=\"#\">Development & IT</a>\r\n\t\t<a href=\"#\">Design & Creative</a>\r\n\t\t<a href=\"#\">Sales & Marketing</a>\r\n\t\t<a href=\"#\">Writing & Translation</a>\r\n\t\t<a href=\"#\">Admin & Customer Support</a>\r\n\t\t<div class=\"moreBtn\">\r\n\t\t\t<span>More</span>\r\n\t\t\t<img src=\"imgs/navoptionarrows/down.png\" alt=\"\">\r\n\t\t</div>\r\n\t</div>\r\n\t`;\r\n\treturn navBarBottom;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://up-work/./js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/index.js"]();
/******/ 	
/******/ })()
;