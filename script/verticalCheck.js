var positioLoad = 0;

$(window).on('load',function(){
	var scroll = $(window).scrollTop();
	
	$(".top-list").css({"margin": "none" });
	$(".top-list").css({"float": "left" });
	$("#desktopHeaderInfo").css({"position": "fixed" });
	$("#mobileHeaderInfo").css({"position": "fixed" });
		$("#container").css({"margin-top": "60px" });
	
	if( $( window ).width() <= 874){
		$("#desktopHeaderInfo").css({"display": "none" });
		$("#mobileHeaderInfo").css({"display": "block" });
	}
	else {
		$("#desktopHeaderInfo").css({"display": "block" });
		$("#mobileHeaderInfo").css({"display": "none" });
		$("#desktopHeaderInfo").css({"width": $( window ).width() });
		$(".top-list-left").css({"width": ($( window ).width() - 870) /2 });
		if (!positioLoad){
			$("#desktopHeaderInfo").css({"top": -scroll});
			positioLoad = 1;
		}
	}
});

(function(window){
  var supportPageOffset = window.pageXOffset !== undefined;
  var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
/* Add an event to the window.onscroll event */
  window.addEventListener("scroll", function(e) {
/* A full compatability script from MDN for gathering the x and y values of scroll: */
var x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;

    //topSticky.style.top = -y + "px";
	$("#desktopHeaderInfo").css({"top": -y });
	$("#mobileHeaderInfo").css({"top": -y });
	if(!isMobile.any()){
		if ( window.innerWidth > 400 && window.innerWidth < 1800 ){
			$("#footer").css({"paddingLeft": x });
			$("#footer").css({"backgroundPositionX": x });
		}else if(window.innerWidth > 1800){
			$("#footer").css({"paddingLeft": 0 });
			$("#footer").css({"backgroundPositionX": 0 });
			$("#footer").css({"width": "100%" });
			$("#footer").css({"max-width": $( window ).width() });
		}else{
			$("#footer").css({"backgroundPositionX": x });
		}
		if ( window.innerWidth < 850 ){
			$("#desktopHeaderInfo").css({"backgroundPositionX": x });
		}
	}
});
  
})(window);