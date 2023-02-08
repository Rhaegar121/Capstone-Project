"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack"] = self["webpackChunkwebpack"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;200;300;400;500;600;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n  font-family: 'Josefin Sans', sans-serif;\\r\\n}\\r\\n\\r\\n:root {\\r\\n  --border: black;\\r\\n  --my-border: 2px solid var(--border);\\r\\n}\\r\\n\\r\\nimg {\\r\\n  max-width: 100%;\\r\\n  max-height: 100%;\\r\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\r\\n}\\r\\n\\r\\nheader {\\r\\n  display: flex;\\r\\n  flex-wrap: nowrap;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 10px 60px;\\r\\n  border-bottom: 1px solid #cdcdcd;\\r\\n}\\r\\n\\r\\nheader #logo {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  gap: 5px;\\r\\n  font-size: 10px;\\r\\n  font-weight: 600;\\r\\n  border: 2px solid #000;\\r\\n  border-radius: 50%;\\r\\n  padding: 13px;\\r\\n}\\r\\n\\r\\nheader #link a {\\r\\n  text-decoration: none;\\r\\n  font-size: 20px;\\r\\n  margin-left: 60px;\\r\\n  color: #000;\\r\\n}\\r\\n\\r\\n#counter {\\r\\n  position: absolute;\\r\\n  text-align: center;\\r\\n  right: 60px;\\r\\n  top: 89px;\\r\\n  padding: 7px 0;\\r\\n  border: 2px solid #000;\\r\\n  width: 290px;\\r\\n  box-shadow: 3px 3px #292929;\\r\\n}\\r\\n\\r\\n#home {\\r\\n  display: grid;\\r\\n  grid-template-columns: auto auto auto auto;\\r\\n  row-gap: 30px;\\r\\n  margin-top: 50px;\\r\\n}\\r\\n\\r\\n#home .container {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n#home .container img {\\r\\n  width: 200px;\\r\\n  height: 250px;\\r\\n  object-fit: cover;\\r\\n  margin-bottom: 20px;\\r\\n}\\r\\n\\r\\n#home .container .caption {\\r\\n  font-size: 19px;\\r\\n  display: flex;\\r\\n  gap: 10px;\\r\\n  margin-bottom: 10px;\\r\\n}\\r\\n\\r\\n#home .container .caption .fa-heart:hover {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n#home .container .caption .fa-heart:active {\\r\\n  transform: scale(1.2);\\r\\n}\\r\\n\\r\\n.Btn {\\r\\n  width: fit-content;\\r\\n  padding: 5px;\\r\\n  align-self: flex-end;\\r\\n  border: var(--my-border);\\r\\n  box-shadow: 2px 2px black;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n#home .container button {\\r\\n  background-color: #fff;\\r\\n  padding: 7px;\\r\\n  margin: 5px 0;\\r\\n  box-shadow: 3px 3px #292929;\\r\\n}\\r\\n\\r\\n#home .container button:hover {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n#home .container button:active {\\r\\n  box-shadow: none;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  padding: 30px;\\r\\n  bottom: 0;\\r\\n  width: 100%;\\r\\n  border-top: 1px solid #cdcdcd;\\r\\n  background-color: #fff;\\r\\n}\\r\\n\\r\\n.close {\\r\\n  font-size: 50px;\\r\\n  font-weight: bolder;\\r\\n  cursor: pointer;\\r\\n  position: absolute;\\r\\n  right: 0;\\r\\n  padding-right: 25px;\\r\\n}\\r\\n\\r\\n.image {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  width: 300px;\\r\\n  height: auto;\\r\\n  object-fit: cover;\\r\\n  gap: 30px;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n#picture {\\r\\n  object-fit: fill;\\r\\n  width: 500px;\\r\\n}\\r\\n\\r\\nh2 {\\r\\n  font-size: 50px;\\r\\n}\\r\\n\\r\\n.comment {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  overflow: hidden;\\r\\n  overflow-y: auto;\\r\\n}\\r\\n\\r\\n.comment-container {\\r\\n  background: rgba(151, 148, 147, 70%);\\r\\n  backdrop-filter: blur(3px);\\r\\n  padding: 30px 50px;\\r\\n  gap: 15px;\\r\\n  align-items: center;\\r\\n  flex-direction: column;\\r\\n  display: flex;\\r\\n  position: relative;\\r\\n  overflow: hidden;\\r\\n  overflow-y: auto;\\r\\n  height: 100vh;\\r\\n}\\r\\n\\r\\n.properties {\\r\\n  display: grid;\\r\\n  grid-template-columns: auto auto;\\r\\n  gap: 15px;\\r\\n  column-gap: 80px;\\r\\n}\\r\\n\\r\\n.comments {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 15px;\\r\\n}\\r\\n\\r\\n.add_comment {\\r\\n  gap: 15px;\\r\\n  align-items: center;\\r\\n  flex-direction: column;\\r\\n  display: flex;\\r\\n  margin-top: 20px;\\r\\n}\\r\\n\\r\\nform {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 15px;\\r\\n}\\r\\n\\r\\ninput {\\r\\n  padding: 5px;\\r\\n}\\r\\n\\r\\ntextarea {\\r\\n  padding: 5px;\\r\\n  width: 300px;\\r\\n  height: 60px;\\r\\n}\\r\\n\\r\\n.hide {\\r\\n  display: none;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_displayData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/displayData.js */ \"./src/modules/displayData.js\");\n\n\n\nwindow.onload = () => {\n  (0,_modules_displayData_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n};\n\n\n//# sourceURL=webpack://webpack/./src/index.js?");

/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"baseUrl\": () => (/* binding */ baseUrl),\n/* harmony export */   \"involvementUrl\": () => (/* binding */ involvementUrl)\n/* harmony export */ });\nconst baseUrl = 'https://api.tvmaze.com/shows';\nconst involvementUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fZEB2tpIC45iiUMRjYli/';\n\n\n\n//# sourceURL=webpack://webpack/./src/modules/api.js?");

/***/ }),

/***/ "./src/modules/commentCounter.js":
/*!***************************************!*\
  !*** ./src/modules/commentCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ \"./src/modules/util.js\");\n\n\nconst countComments = async (id) => {\n  const comments = await (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.getComment)(id);\n  let number = 0;\n  for (let index = 0; index < comments.length; index += 1) {\n    number += 1;\n  }\n  return number;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countComments);\n\n//# sourceURL=webpack://webpack/./src/modules/commentCounter.js?");

/***/ }),

/***/ "./src/modules/displayComment.js":
/*!***************************************!*\
  !*** ./src/modules/displayComment.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ \"./src/modules/util.js\");\n/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentCounter.js */ \"./src/modules/commentCounter.js\");\n/* harmony import */ var _refreshComments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./refreshComments.js */ \"./src/modules/refreshComments.js\");\n\n\n\n\nconst updateComment = async (id) => {\n  // get comments and number of comments\n  await (0,_refreshComments_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(id);\n  const gotComment = await (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.getComment)(id);\n  const commentsNo = await (0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(id);\n\n  const commentSection = document.querySelector('h3');\n  commentSection.innerHTML = `\n    Comments (${commentsNo})\n    `;\n\n  const comments = document.querySelector('.comments');\n  let innertext = '';\n  if (!(gotComment.error)) {\n    gotComment.forEach((data) => {\n      innertext += `\n            <p>${data.creation_date} ${data.username}: ${data.comment}</p>\n            `;\n    });\n    comments.innerHTML = innertext;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateComment);\n\n\n//# sourceURL=webpack://webpack/./src/modules/displayComment.js?");

/***/ }),

/***/ "./src/modules/displayData.js":
/*!************************************!*\
  !*** ./src/modules/displayData.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ \"./src/modules/util.js\");\n/* harmony import */ var _displayComment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayComment.js */ \"./src/modules/displayComment.js\");\n/* harmony import */ var _movieCounter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movieCounter.js */ \"./src/modules/movieCounter.js\");\n\n\n\n\nconst displayData = async () => {\n  const home = document.querySelector('#home');\n  // fetching the likes from the API\n  const allLikes = await (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.getLike)();\n  // fetching the movie data from the API\n  const dataArray = await (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.getData)();\n\n  // looping through the array\n  dataArray.forEach((data, index) => {\n    // filtering the like for the movie id\n    const likes = allLikes.filter((like) => like.item_id === data.id);\n\n    // creating a new div element\n    const dataCard = document.createElement('div');\n    dataCard.classList.add('container');\n    dataCard.innerHTML = `<img src=\"${data.image.medium}\" alt=\"${data.name}\">\n    <div class=\"caption\">\n    <span class=\"title\">${data.name}</span>\n    <i class=\"fa-regular fa-heart\"></i>\n    </div>\n    <p id=\"like\">${likes.length > 0 ? likes[0].likes : 0} Likes</p>\n    <button id=\"film${index}\">Comments</button>\n    <button>Reservations</button>`;\n    home.appendChild(dataCard);\n\n    // updating likes on the home page\n    const likeBtn = dataCard.querySelector('.fa-heart');\n    likeBtn.onclick = () => {\n      const like = dataCard.querySelector('#like');\n      (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.pushLike)(data.id);\n      like.innerHTML = `${likes[0].likes + 1} Likes`;\n    };\n\n    // counting movies\n    const countMovie = document.querySelector('#counter');\n    countMovie.innerHTML = `Number of Movies and Series: ${(0,_movieCounter_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(dataArray)}`;\n\n    // opening comment popup page\n    const movieBtn = document.getElementById(`film${index}`);\n    movieBtn.addEventListener('click', async () => {\n      const comment = document.querySelector('.comment');\n      comment.classList.remove('hide');\n      const movie = await (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.getMovie)(data.id);\n\n      comment.innerHTML = `\n      <div class=\"comment-container\">\n        <div class=\"image\">\n            <img src=\"${movie.image.original}\" id=\"picture\" alt=\"${movie.name}\">\n            <span class=\"material-symbols-outlined close\" id=\"closeBtn${index}\">\n                close\n                </span>\n        </div>\n        <h2>${movie.name}</h2>\n        <div class=\"properties\">\n            <div><b>Language:</b> ${movie.language}</div>\n            <div><b>Average Rating:</b> ${movie.rating.average}</div>\n            <div><b>Type:</b> ${movie.type}</div>\n            <div><b>Date produced:</b> ${movie.premiered}</div>\n            <div><b>Genres:</b> ${movie.genres[0]}, ${movie.genres[1]}</div>\n            <div><b>Summary:</b> ${movie.summary}</div>\n        </div>\n        <section class=\"add_comment\">\n        <h3></h3>\n        <div class=\"comments\"></div>\n        <h4>Add a comment</h4>\n        <form action=\"\">\n            <div><input type=\"text\" id=\"name\" placeholder=\"Your name\"></div>\n            <div><textarea type=\"text\" id=\"comments\" placeholder=\"Your insights\" maxlength=\"500\"></textarea></div>\n            <button type=\"submit\" class=\"Btn\" id=\"submitComment\">Comment</button>\n        </form>\n        </section>\n      </div>`;\n\n      (0,_displayComment_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(movie.id);\n\n      const inputName = document.getElementById('name');\n      const inputComment = document.getElementById('comments');\n      const submit = document.getElementById('submitComment');\n\n      submit.addEventListener('click', (event) => {\n        event.preventDefault();\n        // add new comment\n        if (inputName.value !== '' && inputComment.value !== '') {\n          console.log('clicked');\n          (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.pushComment)(movie.id, inputName.value, inputComment.value);\n          const newComment = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.getComment)(movie.id);\n          console.log(newComment);\n\n          inputName.value = '';\n          inputComment.value = '';\n        }\n\n        (0,_displayComment_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(movie.id);\n      });\n\n      const closeMovie = document.querySelector(`#closeBtn${index}`);\n      closeMovie.addEventListener('click', () => comment.classList.add('hide'));\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayData);\n\n//# sourceURL=webpack://webpack/./src/modules/displayData.js?");

/***/ }),

/***/ "./src/modules/movieCounter.js":
/*!*************************************!*\
  !*** ./src/modules/movieCounter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst movieCount = (movie) => movie.length;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (movieCount);\n\n//# sourceURL=webpack://webpack/./src/modules/movieCounter.js?");

/***/ }),

/***/ "./src/modules/refreshComments.js":
/*!****************************************!*\
  !*** ./src/modules/refreshComments.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/modules/util.js\");\n\n\nconst refreshComment = async (id) => {\n  const gotComment = await (0,_util__WEBPACK_IMPORTED_MODULE_0__.getComment)(id);\n  //\n  console.log(gotComment);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (refreshComment);\n\n//# sourceURL=webpack://webpack/./src/modules/refreshComments.js?");

/***/ }),

/***/ "./src/modules/util.js":
/*!*****************************!*\
  !*** ./src/modules/util.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getComment\": () => (/* binding */ getComment),\n/* harmony export */   \"getData\": () => (/* binding */ getData),\n/* harmony export */   \"getLike\": () => (/* binding */ getLike),\n/* harmony export */   \"getMovie\": () => (/* binding */ getMovie),\n/* harmony export */   \"pushComment\": () => (/* binding */ pushComment),\n/* harmony export */   \"pushLike\": () => (/* binding */ pushLike)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/modules/api.js\");\n\n\nconst getData = async () => {\n  const response = await fetch(_api_js__WEBPACK_IMPORTED_MODULE_0__.baseUrl);\n  const data = await response.json();\n  return data;\n};\n\nconst getMovie = async (id) => {\n  const movieUrl = `${_api_js__WEBPACK_IMPORTED_MODULE_0__.baseUrl}/${id}`;\n  const response = await fetch(movieUrl);\n  const data = await response.json();\n  return data;\n};\n\nconst pushLike = async (id) => {\n  await fetch(`${_api_js__WEBPACK_IMPORTED_MODULE_0__.involvementUrl}likes/`, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({\n      item_id: id,\n    }),\n  });\n};\n\nconst getLike = async () => {\n  const response = await fetch(`${_api_js__WEBPACK_IMPORTED_MODULE_0__.involvementUrl}likes`);\n  const data = await response.json();\n  return data;\n};\n\nconst pushComment = async (id, username, comment) => {\n  await fetch(`${_api_js__WEBPACK_IMPORTED_MODULE_0__.involvementUrl}comments/`, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({\n      item_id: id,\n      username,\n      comment,\n    }),\n  });\n};\n\nconst getComment = async (id) => {\n  const response = await fetch(`${_api_js__WEBPACK_IMPORTED_MODULE_0__.involvementUrl}comments?item_id=${id}`);\n  const data = await response.json();\n  return data;\n};\n\n\n\n//# sourceURL=webpack://webpack/./src/modules/util.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);