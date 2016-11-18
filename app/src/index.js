
var obj = require('./say/sayName');
var x = require('./say/saywords');
require('./style.css');
require('./common/person');

const a = 123;
const b = 345; 
var sum = (a,b) => {
	console.log(a+b);
}
sum(a,b);
var s = new Set();
s.add(1).add(2);
s.forEach(i => {
	console.log(i+3);
});
x('yes');

//arrow : parameter => {code};
