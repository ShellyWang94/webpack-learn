webpackJsonp([2],{

/***/ 4:
/***/ function(module, exports) {

	'use strict';

	function Orange(color, num, weight, country, shape) {
		this.color = color;
		this.num = num;
		this.weight = weight;
		this.country = country;
		this.shape = shape;
	}
	Orange.prototype.getWeiht = function () {
		return this.weight;
	};
	Orange.prototype.getNum = function () {
		return this.num;
	};
	var orange = new Orange('orange', 5, 2, 'America', 'round');
	console.log(orange.getWeiht());
	console.log(orange.getNum());

/***/ }

});