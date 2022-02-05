var wholeHeight;
var originalHeight;
var heightWithNoScaling;
// check if on mobile
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

// scaling in both mobile and desktop
$(document).ready(function(){
	$.fn.commmonScaling();
});
$(window).resize(function(){
	$.fn.commmonScaling();
});

$.fn.commmonScaling = function() { 
	var leveys = $( window ).width()
	
	if( leveys > 874){
		if (isMobile.any()){
			// mobile scale on big screens
			$(".piece2").css({"paddingLeft": ($(window).width()-870 )/6});
			$(".piece2").css({"paddingRight": ($(window).width()-870 )/6});
			$(".techTreeImage").css("maxWidth", "100%"); // tech tree page only
			$(".explanation2").css("margin-left", "15%");
			$(".otsikko").css("margin-left", "17%");
			$("#pdfDownlaod").css("left", "80%");
			$("#CompareTextMobile").css("padding-left", "10%");
		}else{
			$(".top-list-left").css({"width": ($(window).width() - 870)/2 });
			$("#container").css("borderWidth", "2px");
			$("#pdfDownlaod").css("left", "700px");
		}
	}else{ 
		if(isMobile.any()){
			$(".otsikko").css("margin-left", "30px");
			$("#CompareTextMobile").css("padding-left", "0px");
			$(".piece2").css("padding-right", "0px");
		}
		if( leveys <= 480) {
			$("#notesPDF").css("left", "331px");
			$("p.explanation2").css({"marginLeft": 7});
			$("p.explanation2").css({"marginRight": 7});
			$("#pdfDownlaod").css("left", "90%");
		}else if( leveys <= 874){
			$("#notesPDF").css({"left": leveys - 150 });
			$("p.explanation2").css({"marginLeft": (((1/(leveys/(leveys-260)))*leveys)-190)/5 });
			$("p.explanation2").css({"marginRight": (((1/(leveys/(leveys-260)))*leveys)-190)/5 });
		}else{
			$("#notesPDF").css("left", "715px");
			$("p.explanation2").css("marginLeft", "90px");
			$("p.explanation2").css("marginRight", "90px");
		}
	}

	//footer height scaling when windows is thinner than footer-adjust
	if(isMobile.any())
	{
		if(leveys <= 750){
			$("#modCreditedPrograms").css({"height": "360px" });
			$("#modCreditedPrograms").css("padding-left", (leveys - 500) / 2 );
			
		}else{
			$("#modCreditedPrograms").css({"height": "250px" });
			$("#modCreditedPrograms").css("padding-left", "0px");
	
		}
	}
	else
	{
		if(leveys <= 750){
			$("#modCreditedPrograms").css("height", "175px");
			$("#modCreditedPrograms").css("padding-left", (leveys - 500) / 2 );
			
		}else{
			$("#modCreditedPrograms").css("height", "125px");
			$("#modCreditedPrograms").css("padding-left", "0px");
	
		}
	}
}; 

// footer mobile scaling
$(document).ready(function(){
	if (isMobile.any()){
		$(".CreditedMod").css({"height": "125px" });
		$("#siteWaterMarks").css({"width": "100%" });
		document.getElementById("siteWaterMarks").innerHTML = "<br>" + document.getElementById("siteWaterMarks").innerHTML;
	}
});