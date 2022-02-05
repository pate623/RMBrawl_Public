// change check upon both on resize and on load
$(document).ready(function(){
	$.fn.headerScaling();
}); 
$(window).resize(function(){
	$.fn.headerScaling();
});


$.fn.headerScaling = function() { 
	// nav bar height scale
	heightWithNoScaling = parseFloat($("header").css('height')) + parseFloat($("#container").css('height')) + parseFloat($("#footer").css('height'));
	if ($("#navbarMobile").css('display') === 'block' ){
		$("main").css({"height": "auto" });
		if( heightWithNoScaling > $(window).height() && heightWithNoScaling > 995 ){
			$("#navbarMobile").css({"height": heightWithNoScaling-82 });
		}else if ($(window).height() < 995){
			$("#navbarMobile").css({"height": 995-82 });
			$("main").css({"height": "995px" });
		}else{
			$("#navbarMobile").css({"height": $(window).height()-82 });
		}
	}else{
		$("main").css({"height": "auto" });
	}
	// mobile and desktop styles
	if($( window ).width() <= 610){
		$("#logoTopMobile").css({"marginLeft":$(window).width()-250 });
	}else{
		$("#logoTopMobile").css({"marginLeft": ($(window).width()-227)/2 });
	}
	if( $( window ).width() <= 874){
		$("#desktopHeaderInfo").css({"display": "none" });
		$("#mobileHeaderInfo").css({"display": "block" });
		$(".piece2").css({"paddingLeft": 0});
		$("#container").css("borderWidth", "0px");
		$("#container").css("borderBottomWidth", "2px" );
		$("#container").css("borderTopWidth", "2px");
	}else {
		if (isMobile.any()){
			// mobile scale on big screens
			$("#desktopHeaderInfo").css({"display": "none"});
			$("#mobileHeaderInfo").css({"display": "block"});
			$("#container").css("maxWidth", "100%");
			$("#container").css("borderWidth", "0px");
			$("#container").css("borderBottomWidth", "2px" );
			$("#container").css("borderTopWidth", "2px");
			$("#content").css("maxWidth", "100%" );
		}else{
			$("#desktopHeaderInfo").css({"display": "block" });
			$("#mobileHeaderInfo").css({"display": "none" });
			$("#desktopHeaderInfo").css({"width": $(window).width() });
			$("#container").css("borderWidth", "2px");
		}
	}
}; 


// mobile nav toggle
$(document).ready(function(){
	$("#brawlMobile").click(function(){
		$("#navbarMobile").toggle();
		// navbar whole document height
		wholeHeight = $(document).height() -82;
		$("#navbarMobile").css({"height": wholeHeight });
		$("main").css({"height": $(document).height() });
		if ($("#navbarMobile").css('display') === 'none') {
   			$("#navbarMobile").css({"height": 0 });
			$("main").css({"height": "auto" });
		}
	});
});
$(document).ready(function(){
	$("#olderNotes-Mobile").click(function(){
		$("#dropdownContent-Mobile").toggle();
	});
});
// nav disappears on clicking somewhere else than on the nav
$(document).ready(function(){
	$("article").click(function(){
		$("#navbarMobile").css({"display": "none" });
		$("#navbarMobile").css({"height": 0 });
		if ($("#navbarMobile").css('display') === 'none') {
   			$("#navbarMobile").css({"height": 0 });
			$("main").css({"height": "auto" });
		}
	});
});
$(document).ready(function(){
	$("footer").click(function(){
		$("#navbarMobile").css({"display": "none" });
		$("#navbarMobile").css({"height": 0 });
		if ($("#navbarMobile").css('display') === 'none') {
   			$("#navbarMobile").css({"height": 0 });
			$("main").css({"height": "auto" });
		}
	});
});
