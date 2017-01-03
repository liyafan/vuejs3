/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	
	var common = __webpack_require__(5);
	//var html = require('./scripts/tpls/index.string');
	var html = __webpack_require__(6);
	
	common.render(html);
	
	//require('./scripts/views/index.js');

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	var common = {
	  render: function (str) {
	    var body = document.body;
	    body.innerHTML = str + body.innerHTML;
	  }
	};
	
	module.exports = common;

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "	<section>	<ul class=\"listMain\">		<li>			<img src=\"images/class-font-01.png\">			<p>透明隐形眼镜</p>		</li>		<li>			<img src=\"images/class-font-01.png\">			<p>透明隐形眼镜</p>		</li>		<li>			<img src=\"images/class-font-01.png\">			<p>透明隐形眼镜</p>		</li>		<li>			<img src=\"images/class-font-01.png\">			<p>透明隐形眼镜</p>		</li>		<li>			<img src=\"images/class-font-01.png\">			<p>透明隐形眼镜</p>		</li>		<li>			<img src=\"images/class-font-01.png\">			<p>透明隐形眼镜</p>		</li>		<li>			<img src=\"images/class-font-01.png\">			<p>透明隐形眼镜</p>		</li>	</ul></section>"

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map