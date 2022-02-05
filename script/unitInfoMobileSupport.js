$(document).ready(function(){
	if(isMobile.any()){
		$("#desktopHeaderInfo").css({"display": "none" });
		$("#mobileHeaderInfo").css({"display": "block" });
		$("#footer").css("paddingLeft", "0px");
		if($( window ).width() < 1800){
			$("#footer").css("width", "1790px");
		}
		
	}	
});
