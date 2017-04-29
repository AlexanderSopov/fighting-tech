module.exports = (function(){
	var menu = $("header div.menu");

	function showMenu(logo){
		if($(window).width() < 750)
		menu.toggleClass("visible");
	}

	function goTo(selector){
	    $('html, body').animate({
    	    scrollTop: $(selector).offset().top
    	}, 500);
		//window.scrollTo(0, $(selector).offset().top);
	}

	return {
		goTo:goTo,
		showMenu:showMenu
	}
})();