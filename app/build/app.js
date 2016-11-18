webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var obj = __webpack_require__(2);
	var x = __webpack_require__(3);
	__webpack_require__(5);
	__webpack_require__(9);

	var a = 123;
	var b = 345;
	var sum = function sum(a, b) {
		console.log(a + b);
	};
	sum(a, b);
	var s = new Set();
	s.add(1).add(2);
	s.forEach(function (i) {
		console.log(i + 3);
	});
	x('yes');

	//arrow : parameter => {code};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	/**
	 * 
	 * @authors Your Name (you@example.org)
	 * @date    2016-10-18 15:30:44
	 * @version $Id$
	 */
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = function (saywords) {
		console.log(saywords);
		var obj = {
			x: 13,
			y: 22,
			z: 55
		};
		return obj;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	__webpack_require__.e/* nsure */(2, function (require) {
		__webpack_require__(4);
	});

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * 
	 * @authors Your Name (you@example.org)
	 * @date    2016-10-18 15:29:28
	 * @version $Id$
	 */
	module.exports = function say(word) {
	  var words = ['yes', 'no'];
	  var sayout;
	  if (word) {
	    sayout = words[0] + 'I DO';
	  } else {
	    sayout = words[1] + 'bye';
	  }
	  console.log(sayout);
	};

/***/ },
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
]);