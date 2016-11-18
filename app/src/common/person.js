/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-11-17 16:35:47
 * @version $Id$
 */
function Person(name, age, sex){
	this.name = name;
	this.age = age;
	this.sex = sex;
}
Person.prototype.setName = function(name){
	this.name = name;
}
//for all img load
var delayload = (function(){
	var body = document.querySelector('body');
	var img = document.createElement('img');
	body.appendChild(img);

	return {
		setSrc: function(src){
			img.src = src;
		}
	}
})();
//set loading img and set img src by this
var proxy = (function(){
	var img = document.createElement('img');
	img.onload = ()=>{
		delayload.setSrc(img.src);
	};
	return {
		setSrc: (src)=>{
			delayload.setSrc('./imgs/loading.gif');
			img.src = src;
		}
	}
})();
proxy.setSrc('./imgs/jimmy.jpg');