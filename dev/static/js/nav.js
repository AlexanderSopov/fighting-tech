module.exports = (function(){
	var menu = $("header div.menu");;

	function showMenu(logo){
		if($(window).width() < 750)
		menu.toggleClass("visible");
	}

	return {
		showMenu:showMenu
	}
})();