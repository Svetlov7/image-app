/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./css/style.css?");

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar services = __webpack_require__(/*! ./services/services */ \"./js/services/services.js\");\n\nvar images = __webpack_require__(/*! ./images/images */ \"./js/images/images.js\");\n\nvar pagination = __webpack_require__(/*! ./pagination/pagination */ \"./js/pagination/pagination.js\");\n\nvar popup = __webpack_require__(/*! ./popup/popup */ \"./js/popup/popup.js\");\n\nimages.handler();\npopup.handler();\npagination.handler();\nservices.initValidation().then(function (res) {\n  return res;\n}).then(function (res) {\n  return services.getImagesByPage(res.token, 1).then(function (res) {\n    images.loopImgItem(res); //show initial number page\n\n    pagination.showInfo(res.pageCount);\n  })[\"catch\"](function (err) {\n    return console.log(err);\n  });\n});\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/images/images.js":
/*!*****************************!*\
  !*** ./js/images/images.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var popup = __webpack_require__(/*! ../popup/popup */ \"./js/popup/popup.js\");\n\nvar services = __webpack_require__(/*! ../services/services */ \"./js/services/services.js\");\n\nmodule.exports = function () {\n  var config = {\n    wrapper: '[data-img-container]',\n    prevButton: '[data-prev]',\n    nextButton: '[data-next]'\n  };\n  var $wrapper = document.querySelector(config.wrapper);\n  var $prevButton = document.querySelector(config.prevButton);\n  var $nextButton = document.querySelector(config.nextButton);\n\n  function handler() {\n    $wrapper.addEventListener('click', onImgClick);\n  }\n\n  function loopImgItem(data) {\n    var pictures = data.pictures;\n    var isPageAlreadyExist = document.querySelectorAll(\"[data-item-paged=\\\"\".concat(data.page, \"\\\"]\"));\n    var itemsAll = document.querySelectorAll(\"[data-item-paged]\");\n\n    if (isPageAlreadyExist.length > 0) {\n      hideAllItem();\n      isPageAlreadyExist.forEach(function (item) {\n        item.style.display = 'block';\n      });\n    } else {\n      hideAllItem();\n      pictures.forEach(function (item) {\n        $wrapper.insertAdjacentHTML('beforeend', renderImgItem(item.cropped_picture, item.id, data.page));\n      });\n    }\n\n    function hideAllItem() {\n      itemsAll.forEach(function (item) {\n        item.style.display = 'none';\n      });\n    }\n  }\n\n  function onImgClick(e) {\n    var target = e.target;\n\n    if (target.classList.contains('img__item')) {\n      target.classList.add('selected');\n      services.initValidation().then(function (res) {\n        return res;\n      }).then(function (res) {\n        return services.getImagesById(res.token, target.dataset.imgId);\n      }).then(function (res) {\n        popup.insertLightBoxPopup(res);\n      })[\"catch\"](function (err) {\n        return console.log(err);\n      });\n    }\n\n    hideButtonsSliderByIndex();\n  }\n\n  function hideButtonsSliderByIndex() {\n    var nodes = Array.prototype.slice.call(document.querySelectorAll('.img__item')),\n        elementPosition = document.getElementsByClassName('selected')[0];\n\n    if (nodes.indexOf(elementPosition) == 0) {\n      $prevButton.setAttribute(\"disabled\", 'disabled');\n    } else {\n      $prevButton.removeAttribute(\"disabled\");\n    }\n\n    if (nodes.indexOf(elementPosition) == nodes.length - 1) {\n      $nextButton.setAttribute(\"disabled\", 'disabled');\n    } else {\n      $nextButton.removeAttribute(\"disabled\");\n    }\n  }\n\n  function renderImgItem(src, id, paged) {\n    return \"\\n       <div class=\\\"img__item\\\" data-img-id=\\\"\".concat(id, \"\\\" data-item-paged=\\\"\").concat(paged, \"\\\">\\n            <img src=\\\"\").concat(src, \"\\\" alt=\\\"\\\">\\n        </div>\\n    \");\n  }\n\n  return {\n    loopImgItem: loopImgItem,\n    handler: handler\n  };\n}();\n\n//# sourceURL=webpack:///./js/images/images.js?");

/***/ }),

/***/ "./js/pagination/pagination.js":
/*!*************************************!*\
  !*** ./js/pagination/pagination.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var services = __webpack_require__(/*! ../services/services */ \"./js/services/services.js\");\n\nvar images = __webpack_require__(/*! ../images/images */ \"./js/images/images.js\");\n\nmodule.exports = function () {\n  var config = {\n    infoPagination: '[data-info]'\n  };\n  var $buttonNext = document.querySelector('[data-page-next]');\n  var $buttonPrev = document.querySelector('[data-page-prev]');\n  var $infoPagination = document.querySelector(config.infoPagination);\n  var currentPage = 1;\n\n  function handler() {\n    $buttonNext.addEventListener('click', changePage);\n    $buttonPrev.addEventListener('click', changePage);\n  }\n\n  function changePage() {\n    if (this.hasAttribute('data-page-prev')) {\n      currentPage--;\n      window.scrollTo({\n        top: 0,\n        behavior: \"smooth\"\n      });\n    } else {\n      currentPage++;\n      window.scrollTo({\n        top: 0\n      });\n    }\n\n    services.initValidation().then(function (res) {\n      return res;\n    }).then(function (res) {\n      return services.getImagesByPage(res.token, currentPage).then(function (res) {\n        showInfo(res.pageCount);\n        images.loopImgItem(res);\n      });\n    }); //write into url num of page\n\n    window.location.href = \"#page\".concat(currentPage);\n  }\n\n  function showInfo(totalPages) {\n    $infoPagination.innerHTML = \"\\n            <span class=\\\"page__info-number\\\">\".concat(currentPage ? currentPage : 1, \"</span>\\n            <span>of</span>\\n            <span class=\\\"page__info-number\\\">\").concat(totalPages, \"</span>\\n        \");\n    togglePaginationButtons(totalPages);\n  }\n\n  function togglePaginationButtons(totalPages) {\n    if (currentPage == totalPages) {\n      $buttonNext.setAttribute('disabled', 'disabled');\n    } else {\n      $buttonNext.removeAttribute('disabled');\n    }\n\n    if (currentPage == 1) {\n      $buttonPrev.setAttribute('disabled', 'disabled');\n    } else {\n      $buttonPrev.removeAttribute('disabled');\n    }\n  }\n\n  return {\n    handler: handler,\n    showInfo: showInfo\n  };\n}();\n\n//# sourceURL=webpack:///./js/pagination/pagination.js?");

/***/ }),

/***/ "./js/popup/popup.js":
/*!***************************!*\
  !*** ./js/popup/popup.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar services = __webpack_require__(/*! ../services/services */ \"./js/services/services.js\");\n\nmodule.exports = function () {\n  var config = {\n    popup: '.popup',\n    insertWrapperPopup: '[data-area-insert]',\n    closePopup: '[data-popup-close]',\n    nextButton: '[data-next]',\n    prevButton: '[data-prev]'\n  };\n  var $body = document.querySelector('body');\n  var $popup = document.querySelector(config.popup);\n  var $popupInsertingArea = $popup.querySelector(config.insertWrapperPopup);\n  var $closePopupEl = $popup.querySelector(config.closePopup);\n  var $nextButton = $popup.querySelector(config.nextButton);\n  var $prevButton = $popup.querySelector(config.prevButton);\n\n  function handler() {\n    $popup.addEventListener('click', shareLink);\n    $closePopupEl.addEventListener('click', popupClose);\n    $nextButton.addEventListener('click', showNextImg);\n    $prevButton.addEventListener('click', showPrevImg);\n  }\n\n  function popupShow() {\n    $popup.classList.remove('disable');\n    $body.classList.add('no-scroll');\n  }\n\n  function popupClose() {\n    $popup.classList.add('disable');\n    clearContentPopup();\n    var selectedEl = document.querySelector('.selected');\n    selectedEl.classList.remove('selected');\n    $body.classList.remove('no-scroll');\n  }\n\n  function clearContentPopup() {\n    $popup.querySelector('.popup__content').remove();\n  }\n\n  function shareLink(e) {\n    var target = e.target;\n\n    if (target.classList.contains('js-button')) {\n      var input = target.parentNode.querySelector('input');\n      input.select();\n      document.execCommand(\"copy\");\n      alert(\"Copied the text: \" + input.value);\n    }\n  }\n\n  function insertLightBoxPopup(data) {\n    $popupInsertingArea.insertAdjacentHTML('beforeend', renderLightBoxPopup(data));\n  }\n\n  function showNextImg() {\n    var _this = this;\n\n    var images = document.querySelectorAll('.img__item');\n\n    for (var i = 0; i < images.length; i++) {\n      if (images[i].classList.contains('selected')) {\n        (function () {\n          images[i].classList.remove('selected');\n          var nextImage = images[i += 1];\n          clearContentPopup();\n          services.initValidation().then(function (res) {\n            return res;\n          }).then(function (res) {\n            return services.getImagesById(res.token, nextImage.dataset.imgId);\n          }).then(function (res) {\n            insertLightBoxPopup(res);\n          });\n          nextImage.classList.add('selected');\n\n          if (i == [images.length - 1]) {\n            _this.setAttribute(\"disabled\", \"disabled\");\n          }\n\n          $prevButton.removeAttribute(\"disabled\");\n        })();\n      }\n    }\n  }\n\n  function showPrevImg() {\n    var _this2 = this;\n\n    var images = document.querySelectorAll('.img__item');\n\n    for (var i = 0; i < images.length; i++) {\n      if (images[i].classList.contains('selected')) {\n        (function () {\n          images[i].classList.remove('selected');\n          var prevImage = images[i -= 1];\n          clearContentPopup();\n          services.initValidation().then(function (res) {\n            return res;\n          }).then(function (res) {\n            return services.getImagesById(res.token, prevImage.dataset.imgId);\n          }).then(function (res) {\n            window.savedImgs = _objectSpread(_objectSpread({}, window.savedImgs), _defineProperty({}, res.id, res));\n            insertLightBoxPopup(res);\n          });\n          prevImage.classList.add('selected');\n\n          if (i == 0) {\n            _this2.setAttribute(\"disabled\", \"disabled\");\n          }\n\n          $nextButton.removeAttribute(\"disabled\");\n        })();\n      }\n    }\n  }\n\n  function renderLightBoxPopup(data) {\n    popupShow();\n    return \"\\n            <div class=\\\"popup__content\\\">\\n                <img src=\\\"\".concat(data.full_picture, \"\\\" alt=\\\"\\\">\\n                <div class=\\\"popup__info\\\">\\n                <div class=\\\"popup__info-content\\\">\\n                    <p>Author: \").concat(data.author, \"</p>\\n                    <p>Camera: \").concat(data.camera, \"</p>\\n                    <p class=\\\"popup__info-tags\\\">\").concat(data.tags, \"</p>\\n               </div>\\n                    <button class=\\\"popup__info-button js-button\\\">Share</button>\\n                    <input type=\\\"text\\\" class=\\\"input__link--hidden\\\" value=\\\"\").concat(data.full_picture, \"\\\">\\n                </div>\\n           </div>\\n    \");\n  }\n\n  return {\n    insertLightBoxPopup: insertLightBoxPopup,\n    handler: handler\n  };\n}();\n\n//# sourceURL=webpack:///./js/popup/popup.js?");

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nmodule.exports = function () {\n  var config = {\n    validation: {\n      \"apiKey\": \"23567b218376f79d9415\"\n    },\n    url: 'http://interview.agileengine.com'\n  };\n\n  function initValidation() {\n    return _initValidation.apply(this, arguments);\n  }\n\n  function _initValidation() {\n    _initValidation = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n      var response, data;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return fetch(\"\".concat(config.url, \"/auth\"), {\n                method: 'post',\n                headers: {\n                  'Content-Type': 'application/json'\n                },\n                body: JSON.stringify(config.validation)\n              });\n\n            case 3:\n              response = _context.sent;\n              _context.next = 6;\n              return response.json();\n\n            case 6:\n              data = _context.sent;\n\n              if (!(data.status == 'Unauthorized' || data.status == 'Not found' && response.status != 200)) {\n                _context.next = 12;\n                break;\n              }\n\n              alert('Something goes wrong!');\n              location.reload();\n              _context.next = 13;\n              break;\n\n            case 12:\n              return _context.abrupt(\"return\", data);\n\n            case 13:\n              _context.next = 18;\n              break;\n\n            case 15:\n              _context.prev = 15;\n              _context.t0 = _context[\"catch\"](0);\n              console.log(_context.t0);\n\n            case 18:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 15]]);\n    }));\n    return _initValidation.apply(this, arguments);\n  }\n\n  function getImagesByPage(_x) {\n    return _getImagesByPage.apply(this, arguments);\n  }\n\n  function _getImagesByPage() {\n    _getImagesByPage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(token) {\n      var page,\n          response,\n          data,\n          _args2 = arguments;\n      return regeneratorRuntime.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              page = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : 1;\n              _context2.prev = 1;\n              _context2.next = 4;\n              return fetch(\"\".concat(config.url, \"/images?page=\").concat(page), {\n                method: 'get',\n                headers: {\n                  'Authorization': \"Bearer \".concat(token)\n                }\n              });\n\n            case 4:\n              response = _context2.sent;\n              _context2.next = 7;\n              return response.json();\n\n            case 7:\n              data = _context2.sent;\n\n              if (!(data.status == 'Unauthorized' || data.status == 'Not found' && response.status != 200)) {\n                _context2.next = 13;\n                break;\n              }\n\n              alert('Something goes wrong!');\n              location.reload();\n              _context2.next = 14;\n              break;\n\n            case 13:\n              return _context2.abrupt(\"return\", data);\n\n            case 14:\n              _context2.next = 19;\n              break;\n\n            case 16:\n              _context2.prev = 16;\n              _context2.t0 = _context2[\"catch\"](1);\n              console.log(_context2.t0);\n\n            case 19:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, null, [[1, 16]]);\n    }));\n    return _getImagesByPage.apply(this, arguments);\n  }\n\n  function getImagesById(_x2) {\n    return _getImagesById.apply(this, arguments);\n  }\n\n  function _getImagesById() {\n    _getImagesById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(token) {\n      var id,\n          response,\n          data,\n          _args3 = arguments;\n      return regeneratorRuntime.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              id = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : null;\n              _context3.prev = 1;\n              _context3.next = 4;\n              return fetch(\"\".concat(config.url, \"/images/\").concat(id), {\n                method: 'get',\n                headers: {\n                  'Authorization': \"Bearer \".concat(token)\n                }\n              });\n\n            case 4:\n              response = _context3.sent;\n              _context3.next = 7;\n              return response.json();\n\n            case 7:\n              data = _context3.sent;\n\n              if (!(data.status == 'Unauthorized' || data.status == 'Not found' && response.status != 200)) {\n                _context3.next = 13;\n                break;\n              }\n\n              alert('Something goes wrong!');\n              location.reload();\n              _context3.next = 14;\n              break;\n\n            case 13:\n              return _context3.abrupt(\"return\", data);\n\n            case 14:\n              _context3.next = 19;\n              break;\n\n            case 16:\n              _context3.prev = 16;\n              _context3.t0 = _context3[\"catch\"](1);\n              console.log(_context3.t0);\n\n            case 19:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3, null, [[1, 16]]);\n    }));\n    return _getImagesById.apply(this, arguments);\n  }\n\n  return {\n    initValidation: initValidation,\n    getImagesByPage: getImagesByPage,\n    getImagesById: getImagesById\n  };\n}();\n\n//# sourceURL=webpack:///./js/services/services.js?");

/***/ })

/******/ });