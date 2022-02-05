var slidedDown = false;

$(document).ready(function(){
	var onHideScroll;
	var onVisibleScroll;
	var lastScrollTop = 0;
	$(window).scroll(function(event){
		var st = $(this).scrollTop();
		if (st > lastScrollTop){
			// downscroll code
			if(onVisibleScroll+50 < $(window).scrollTop()){
				window.setTimeout(hideNav, 50);
			}
			onHideScroll = $(window).scrollTop()
		}else{
			// upscroll code
			if(onHideScroll-70 > $(window).scrollTop()){
				window.setTimeout(showNav, 50);
			}
			onVisibleScroll = $(window).scrollTop()
		}
	   lastScrollTop = st;
	});
	
	function hideNav() {
		$("#mobileHeaderInfo").css({"position": "static"})
		$("#container").css({"margin-top": "0px" })
		if(slidedDown){
			$("#mobileHeaderInfo").css({"top": "0px"})
			slidedDown = false
		}	
	}
	function showNav() {
		if($(window).scrollTop() > 250){
			$("#mobileHeaderInfo").css({"position": "fixed" })
			if($("#mobileHeaderInfo").css("display") == "block"){
				$("#container").css({"margin-top": "80px" })
				if(!slidedDown){
					$("#mobileHeaderInfo").css({"top": "-80px" })
					slideDown()
				}
				
			}
		}else{
			$("#mobileHeaderInfo").css({"position": "static"})
			$("#container").css({"margin-top": "0px" })
		}
	}
});

$(window).resize(function(){
	if($(window).width() > 875 && !isMobile.any()){
		$("#container").css({"margin-top": "0px" })
	}
});

function slideDown(){
	$("#mobileHeaderInfo").animate({ 
		top: "+=80px",
	}, 200 );
	slidedDown = true;
}
