/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-10-18 15:30:44
 * @version $Id$
 */
define('myModule',['./saywords'],function(saywords){
		console.log(saywords);
		var obj = {
			x: 13,
			y: 22,
			z: 55
		}
		return obj;

})
require.ensure([],function(require){
	require('./code-split/orange.js');
})
