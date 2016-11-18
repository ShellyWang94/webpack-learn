/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-10-18 15:29:28
 * @version $Id$
 */
 module.exports = function say(word){
 	var words = ['yes','no'];
 	var sayout;
 	if(word){
 		sayout = words[0]+'I DO';
	}	
	else{
		sayout = words[1]+'bye';
	}
	console.log(sayout);	
}