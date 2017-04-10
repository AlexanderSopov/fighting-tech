module.exports = (function(){
	// Variables
	var var0,
		var1,
		var2;

	// Modules
	var nav 		= require('./nav'),
	 	utils	 	= require('./utils'),
		jQPlugins 	= require('./jQPlugins');

	// Initiate
	function init(){
	
	}
	// Return object	
	var publicAPI = {
		init:init,
		nav:nav,
		utils:utils,
		jQPlugins:jQPlugins
	};
	return publicAPI;
})();
