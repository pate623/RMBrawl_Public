function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
    });
}
preload([
    'Pictures/buttons/selected.gif',
    'Pictures/buttons/not-selected.gif',
    'Pictures/buttons/puhekupla-disabled.gif',
    'Pictures/ui/style-03/bottom-ui.gif',
    'Pictures/ui/style-03/info-box.gif',
    'Pictures/ui/style-03/info-box-dark.gif',
    'Pictures/ui/style-00/download-hoover.png'
]);

// on hoover button effects when on desktop
$(document).ready(function(){ $("#importantNap")
	.mouseover(function(){
		if(!isMobile.any()){
			$("#importantNap").css("background-image", "url(Pictures/buttons/selected.gif)");
		}
	})
	.mouseout(function() {
		if(!isMobile.any()){
			$("#importantNap").css("background-image", "url(Pictures/buttons/not-selected.gif)")
		}
	})
})
$(document).ready(function(){ $("#importantNap2")
	.mouseenter(function(){
		if(!isMobile.any()){
			$("#importantNap2").css("background-image", "url(Pictures/buttons/selected.gif)")
		}
	})
	.mouseleave(function() {
		if(!isMobile.any()){
			$("#importantNap2").css("background-image", "url(Pictures/buttons/not-selected.gif)")
		}
	})
})
$(document).ready(function(){ $("#importantNap3")
	.mouseenter(function(){
		if(!isMobile.any()){
			$("#importantNap3").css("background-image", "url(Pictures/buttons/selected.gif)")
		}
	})
	.mouseleave(function() {
		if(!isMobile.any()){
			$("#importantNap3").css("background-image", "url(Pictures/buttons/not-selected.gif)")
		}
	})
})
// button look changes on mobile
$(document).ready(function(){
	if(isMobile.any()){
		//common
		$("#all").hide();
		$("#important").hide();
		//$("#relevant").hide();
		$("#relevant").text("Filter Information")
		$("#relevant").css("width", "auto")
		$("#relevant").css("font-size", "18px")
		$("#relevant").css("margin-top", "4px")
		$("#relevant").css("letter-spacing", "2px")
		$("#relevant").css("top", "0px")
		//filter
		$("#importantNap").text("Important")
		$("#importantNap2").text("Essential")
		$("#importantNap3").text("All")
		$("#importantNap, #importantNap2, #importantNap3").css("background-image", "url(Pictures/ui/style-03/info-box.gif)")
		$("#importantNap, #importantNap2, #importantNap3").css("background-repeat", "repeat")
		$("#importantNap, #importantNap2, #importantNap3").css("border-radius", "8px")
		$("#importantNap, #importantNap2, #importantNap3").css("border-width", "4px")
		$("#importantNap, #importantNap2, #importantNap3").css("border-style", "solid")
		$("#importantNap, #importantNap2, #importantNap3").css("border-image", "url(Pictures/ui/style-03/bottom-ui.gif)30 round")
		$("#importantNap, #importantNap2, #importantNap3").css("padding", "3px 5px 0px 5px")
		$("#importantNap, #importantNap2, #importantNap3").css("height", "25px")
		$("#importantNap, #importantNap2, #importantNap3").css("width", "auto")
		$("#importantNap, #importantNap2, #importantNap3").css("min-width", "80px")
		$("#importantNap, #importantNap2, #importantNap3").css("color", "#000")
		$("#importantNap, #importantNap2, #importantNap3").css("font-weight", "bold")
		$("#importantNap, #importantNap2, #importantNap3").css("font-size", "20px")
		$("#importantNap, #importantNap2, #importantNap3").css("letter-spacing", "2px")
		$("#importantNap, #importantNap2, #importantNap3").css("text-align", "center")
		$("#importantNap, #importantNap2, #importantNap3").css("margin-top", "10px")
		//filter dark
		$("#importantNapBlack").text("Important")
		$("#importantNap2Black").text("Essential")
		$("#importantNap3Black").text("All")
		$("#importantNapBlack, #importantNap2Black, #importantNap3Black").css("background-image", "url(Pictures/ui/style-03/info-box-dark.gif)")
		$("#importantNapBlack, #importantNap2Black, #importantNap3Black").css("background-repeat", "repeat")
		$("#importantNapBlack, #importantNap2Black, #importantNap3Black").css("border-radius", "8px")
		$("#importantNapBlack, #importantNap2Black, #importantNap3Black").css("border-width", "4px")
		$("#importantNapBlack, #importantNap2Black, #importantNap3Black").css("border-style", "solid")
		$("#importantNapBlack, #importantNap2Black, #importantNap3Black").css("border-image", "url(Pictures/ui/style-03/bottom-ui.gif)30 round")
		$("#importantNapBlack, #importantNap2Black, #importantNap3Black").css("padding", "3px 5px 0px 5px")
		$("#importantNapBlack, #importantNap2Black, #importantNap3Black").css("height", "25px")
		$("#importantNapBlack, #importantNap2Black, #importantNap3Black").css("width", "auto")
		$("#importantNapBlack, #importantNap2Black, #importantNap3Black").css("min-width", "80px")
		$("#importantNapBlack, #importantNap2Black, #importantNap3Black").css("color", "#000")
		$("#importantNapBlack, #importantNap2Black, #importantNap3Black").css("font-weight", "bold")
		$("#importantNapBlack, #importantNap2Black, #importantNap3Black").css("font-size", "20px")
		$("#importantNapBlack, #importantNap2Black, #importantNap3Black").css("letter-spacing", "2px")	
		$("#importantNapBlack, #importantNap2Black, #importantNap3Black").css("text-align", "center")	
		$("#importantNapBlack, #importantNap2Black, #importantNap3Black").css("margin-top", "10px")	
		//small buttons
		$("div.breaker").css("height", "42px")
		$("p.starter").css("height", "42x")
		$("p.starter").css("font-size", "32px")
		$(".smallImage").css("height", "32px")
		$(".smallImage").css("width", "32px")
		$(".smallImage").css("margin-left", "8px")
		$("#hiddenBonusDamageTitle").text("Hidden bonus damage")
	}
});


// Buttons and poster scaling
$(document).ready(function(){
	$.fn.nappulaKoonMuutos();
	$.fn.posterScaling();
});
$(window ).resize(function(){
	$.fn.nappulaKoonMuutos();
	$.fn.posterScaling();
});

$.fn.nappulaKoonMuutos = function() { 
 	var leveys = $( window ).width()
	
	if( leveys <= 480) {
		$("#all").css({"left": 0});
		$("#importantNap3Black").css({"left": 22});
		$("#importantNap3").css({"left": 22});
		
		$("#relevant").css({"left": 100});
		if(isMobile.any()){
			$("#importantNap2Black").css({"left": 115});
			$("#importantNap2").css({"left": 115});
		}else{
			$("#importantNap2Black").css({"left": 122});
			$("#importantNap2").css({"left": 122});
		}
		$("#important").css({"left": 200});
		$("#importantNapBlack").css({"left": 222});
		$("#importantNap").css({"left": 222});
		
		$("#comment").css({"left": 310});
		$("#commentdisabled").css({"left": 331});
		$("#commentenabled").css({"left": 331});
		$("#colorBlindRG").css({"left": "auto"});
		$("#colorBlindRG").css({"right": "3%"});
	}
	else if( leveys <= 874){
		// text
		$("#all").css({"left": leveys/(394/97)-97-20});//  480-874  0-97
		$("#relevant").css({"left": leveys/(394/168)-118+14});// 394  268-100 -50
		$("#important").css({"left": leveys/(394/236)-136+50});// 394  436-200 -50-50
		$("#comment").css({"left": leveys/(394/385)-235+76});// 394  695-310 -50-50-50
		//buttons
		$("#commentdisabled").css({"left": leveys/(394/387)-235+95});// 394  718-331
		$("#commentenabled").css({"left": leveys/(394/387)-235+95});
		$("#importantNap3Black").css({"left": leveys/(394/98)-98});// 394  120-22
		$("#importantNap3").css({"left": leveys/(394/98)-98});
		if(isMobile.any()){
			$("#importantNap2Black").css({"left": leveys/(394/168)-118+30});// 394  290-122
			$("#importantNap2").css({"left": leveys/(394/168)-118+30});
		}else{
			$("#importantNap2Black").css({"left": leveys/(394/168)-118+36});// 394  290-122
			$("#importantNap2").css({"left": leveys/(394/168)-118+36});
		}
		$("#importantNap").css({"left": leveys/(394/238)-136+68});// 394  460-222
		$("#importantNapBlack").css({"left": leveys/(394/238)-136+68});
		$("#colorBlindRG").css({"left": "auto"});
		$("#colorBlindRG").css({"right": "3%"});
	}
	else{
		$("#all").css({"left": 97});
		$("#importantNap3Black").css({"left": 120});
		$("#importantNap3").css({"left": 120});
		
		$("#relevant").css({"left": 268});
		$("#importantNap2Black").css({"left": 290});
		$("#importantNap2").css({"left": 290});
		
		$("#important").css({"left": 436});
		$("#importantNapBlack").css({"left": 460});
		$("#importantNap").css({"left": 460});
		
		$("#comment").css({"left": 695});
		$("#commentdisabled").css({"left": 718});
		$("#commentenabled").css({"left": 718});
		$("#colorBlindRG").css({"left": 775});
		$("#colorBlindRG").css({"right": "auto"});
		
	};
};
$.fn.posterScaling = function() { 
	var leveys = $( window ).width()
	if(isMobile.any()){
		$("#smallImageOfPoster").css({"width": leveys-10});
		$("#smallImageOfPoster").css({ "height": (leveys - 10) * 0.5625 });
		$(".pieceImage").css({ "height": (leveys - 10) * 0.5625 });
		//smallImage
		$(".posterLink").css("width", "100%");
	}else if($(window).width() < 870){
		$("#smallImageOfPoster").css({"width": leveys -10});
		$("#smallImageOfPoster").css({"height": (leveys -10) * 0.5625 });
		$(".pieceImage").css({"height": (leveys -10) * 0.5625 });
	}else{
		$("#smallImageOfPoster").css({"width": 840});
		$("#smallImageOfPoster").css({"height": 840 * 0.5625 });
		$(".pieceImage").css({"height": 473 });
	}
};


// color blind mode
var coloroblind = false

//Triggers
$(document).ready(function(){
	$("#colorBlindRG").click(function(){
		$.fn.colorBlindSettings()
	})	
})
$(document).ready(function(){
	if (typeof(Storage) !== "undefined") {
		if(localStorage.getItem("colorBLind") == true){
			coloroblind = false
			$.fn.colorBlindSettings()
		}
	}
})

//effects
$.fn.colorBlindSettings = function() {
	if(!coloroblind){ // change to color blind supported mode
		$("span.buff").css("color" , "#03C");
		$("#colorBlindRG").html("<img src=\"Pictures/buttons/blueGreen.png\" width=\"35\" height=\"35\" alt=\"green blue switch\" title=\"Change blue text to green\" />")
		coloroblind = true
		if (typeof(Storage) !== "undefined") {
			localStorage.setItem("colorBLind", 1);
		}
	}else{
		$("span.buff").css("color" , "#494");
		$("#colorBlindRG").html("<img src=\"Pictures/buttons/greenBlue.png\" width=\"35\" height=\"35\" alt=\"green blue switch\" title=\"Change green text to blue\" />")
		coloroblind = false
		if (typeof(Storage) !== "undefined") {
			localStorage.setItem("colorBLind", 0);
		}
	}
}


//buttons toggling effects
// important 1
	$(document).ready(function(){
		$("#importantNap").click(function(){
			$("important-1").show();
			$("important-2").hide();
			$("important-3").hide();
				$("#importantNap").hide();
				$("#importantNapBlack").show();
				$("#importantNap2").show();
				$("#importantNap2Black").hide();
				$("#importantNap3").show();
				$("#importantNap3Black").hide();
					// workers and resources
					$("#worker-most").hide();
					$("#lessinfo-worker-most").hide();
					$("#moreinfo-worker-middle").hide();
					$("#lessinfo-worker-middle").hide();
					$("#moreinfo-worker-least").show();
					$("#worker-least").show();
					// market
					$("#market-most").hide();
					$("#lessinfo-market-most").hide();
					$("#moreinfo-market-middle").hide();
					$("#lessinfo-market-middle").hide();
					$("#moreinfo-market-least").show();
					$("#market-least").show();
					// towers and walls
					$("#towers-most").hide();
					$("#lessinfo-towers-most").hide();
					$("#moreinfo-towers-middle").hide();
					$("#lessinfo-towers-middle").hide();
					$("#moreinfo-towers-least").show();
					$("#towers-least").show();
					// tool age fights
					$("#tool-most").hide();
					$("#lessinfo-tool-most").hide();
					$("#moreinfo-tool-middle").hide();
					$("#lessinfo-tool-middle").hide();
					$("#moreinfo-tool-least").show();
					$("#tool-least").show();
					// bronze age fights
					$("#bronze-most").hide();
					$("#lessinfo-bronze-most").hide();
					$("#moreinfo-bronze-middle").hide();
					$("#lessinfo-bronze-middle").hide();
					$("#moreinfo-bronze-least").show();
					$("#bronze-least").show();
					// iron age fights
					$("#iron-most").hide();
					$("#lessinfo-iron-most").hide();
					$("#moreinfo-iron-middle").hide();
					$("#lessinfo-iron-middle").hide();
					$("#moreinfo-iron-least").show();
					$("#iron-least").show();
					// others
					$("#others-most").hide();
					$("#lessinfo-others-most").hide();
					$("#moreinfo-others-middle").hide();
					$("#lessinfo-others-middle").hide();
					$("#moreinfo-others-least").show();
					$("#others-least").show();
					// civ
					$("#civ-most").hide();
					$("#lessinfo-civ-most").hide();
					$("#moreinfo-civ-middle").hide();
					$("#lessinfo-civ-middle").hide();
					$("#moreinfo-civ-least").show();
					$("#civ-least").show();
					// siege
					$("#siege-most").hide();
					$("#lessinfo-siege-most").hide();
					$("#moreinfo-siege-middle").hide();
					$("#lessinfo-siege-middle").hide();
					$("#moreinfo-siege-least").show();
					$("#siege-least").show();
					// meta
					$("#meta-most").hide();
					$("#lessinfo-meta-most").hide();
					$("#moreinfo-meta-middle").hide();
					$("#lessinfo-meta-middle").hide();
					$("#moreinfo-meta-least").show();
					$("#meta-least").show();
					// newUnits
					$("#newUnits-most").hide();
					$("#lessinfo-newUnits-most").hide();
					$("#moreinfo-newUnits-middle").hide();
					$("#lessinfo-newUnits-middle").hide();
					$("#moreinfo-newUnits-least").show();
					$("#newUnits-least").show();
		});
	});
// important 2
	$(document).ready(function(){
		$("#importantNap2").click(function(){
			$("important-1").show();
			$("important-2").show();
			$("important-3").hide();
				$("#importantNap").show();
				$("#importantNapBlack").hide();
				$("#importantNap2").hide();
				$("#importantNap2Black").show();
				$("#importantNap3").show();
				$("#importantNap3Black").hide();
					// workers and resources
					$("#worker-most").hide();
					$("#lessinfo-worker-most").hide();
					$("#moreinfo-worker-middle").show();
					$("#lessinfo-worker-middle").show();
					$("#moreinfo-worker-least").hide();
					$("#worker-least").hide();
					// market
					$("#market-most").hide();
					$("#lessinfo-market-most").hide();
					$("#moreinfo-market-middle").show();
					$("#lessinfo-market-middle").show();
					$("#moreinfo-market-least").hide();
					$("#market-least").hide()
					// towers and walls
					$("#towers-most").hide();
					$("#lessinfo-towers-most").hide();
					$("#moreinfo-towers-middle").show();
					$("#lessinfo-towers-middle").show();
					$("#moreinfo-towers-least").hide();
					$("#towers-least").hide();
					// tool age fights
					$("#tool-most").hide();
					$("#lessinfo-tool-most").hide();
					$("#moreinfo-tool-middle").show();
					$("#lessinfo-tool-middle").show();
					$("#moreinfo-tool-least").hide();
					$("#tool-least").hide();
					// bronze age fights
					$("#bronze-most").hide();
					$("#lessinfo-bronze-most").hide();
					$("#moreinfo-bronze-middle").show();
					$("#lessinfo-bronze-middle").show();
					$("#moreinfo-bronze-least").hide();
					$("#bronze-least").hide();
					// iron age fights
					$("#iron-most").hide();
					$("#lessinfo-iron-most").hide();
					$("#moreinfo-iron-middle").show();
					$("#lessinfo-iron-middle").show();
					$("#moreinfo-iron-least").hide();
					$("#iron-least").hide();
					// others 
					$("#others-most").hide();
					$("#lessinfo-others-most").hide();
					$("#moreinfo-others-middle").show();
					$("#lessinfo-others-middle").show();
					$("#moreinfo-others-least").hide();
					$("#others-least").hide();
					// civ 
					$("#civ-most").hide();
					$("#lessinfo-civ-most").hide();
					$("#moreinfo-civ-middle").show();
					$("#lessinfo-civ-middle").show();
					$("#moreinfo-civ-least").hide();
					$("#civ-least").hide();
					// siege 
					$("#siege-most").hide();
					$("#lessinfo-siege-most").hide();
					$("#moreinfo-siege-middle").show();
					$("#lessinfo-siege-middle").show();
					$("#moreinfo-siege-least").hide();
					$("#siege-least").hide();
					// meta 
					$("#meta-most").hide();
					$("#lessinfo-meta-most").hide();
					$("#moreinfo-meta-middle").show();
					$("#lessinfo-meta-middle").show();
					$("#moreinfo-meta-least").hide();
					$("#meta-least").hide();
					// newUnits 
					$("#newUnits-most").hide();
					$("#lessinfo-newUnits-most").hide();
					$("#moreinfo-newUnits-middle").show();
					$("#lessinfo-newUnits-middle").show();
					$("#moreinfo-newUnits-least").hide();
					$("#newUnits-least").hide();
		});
	});
// important 3
	$(document).ready(function(){
		$("#importantNap3").click(function(){
			$("important-1").show();
			$("important-2").show();
			$("important-3").show();
				$("#importantNap").show();
				$("#importantNapBlack").hide();
				$("#importantNap2").show();
				$("#importantNap2Black").hide();
				$("#importantNap3").hide();
				$("#importantNap3Black").show();
					// workers and resources
					$("#worker-most").show();
					$("#lessinfo-worker-most").show();
					$("#moreinfo-worker-middle").hide();
					$("#lessinfo-worker-middle").hide();
					$("#moreinfo-worker-least").hide();
					$("#worker-least").hide();
					// market
					$("#market-most").show();
					$("#lessinfo-market-most").show();
					$("#moreinfo-market-middle").hide();
					$("#lessinfo-market-middle").hide();
					$("#moreinfo-market-least").hide();
					$("#market-least").hide();
					// towers and walls
					$("#towers-most").show();
					$("#lessinfo-towers-most").show();
					$("#moreinfo-towers-middle").hide();
					$("#lessinfo-towers-middle").hide();
					$("#moreinfo-towers-least").hide();
					$("#towers-least").hide();
					// tool age fights
					$("#tool-most").show();
					$("#lessinfo-tool-most").show();
					$("#moreinfo-tool-middle").hide();
					$("#lessinfo-tool-middle").hide();
					$("#moreinfo-tool-least").hide();
					$("#tool-least").hide();
					// bronze age fights
					$("#bronze-most").show();
					$("#lessinfo-bronze-most").show();
					$("#moreinfo-bronze-middle").hide();
					$("#lessinfo-bronze-middle").hide();
					$("#moreinfo-bronze-least").hide();
					$("#bronze-least").hide();
					// iron age fights
					$("#iron-most").show();
					$("#lessinfo-iron-most").show();
					$("#moreinfo-iron-middle").hide();
					$("#lessinfo-iron-middle").hide();
					$("#moreinfo-iron-least").hide();
					$("#iron-least").hide();
					// others
					$("#others-most").show();
					$("#lessinfo-others-most").show();
					$("#moreinfo-others-middle").hide();
					$("#lessinfo-others-middle").hide();
					$("#moreinfo-others-least").hide();
					$("#others-least").hide();
					// civ
					$("#civ-most").show();
					$("#lessinfo-civ-most").show();
					$("#moreinfo-civ-middle").hide();
					$("#lessinfo-civ-middle").hide();
					$("#moreinfo-civ-least").hide();
					$("#civ-least").hide();
					// siege
					$("#siege-most").show();
					$("#lessinfo-siege-most").show();
					$("#moreinfo-siege-middle").hide();
					$("#lessinfo-siege-middle").hide();
					$("#moreinfo-siege-least").hide();
					$("#siege-least").hide();
					// meta
					$("#meta-most").show();
					$("#lessinfo-meta-most").show();
					$("#moreinfo-meta-middle").hide();
					$("#lessinfo-meta-middle").hide();
					$("#moreinfo-meta-least").hide();
					$("#meta-least").hide();
					// newUnits
					$("#meta-most").show();
					$("#lessinfo-newUnits-most").show();
					$("#moreinfo-newUnits-middle").hide();
					$("#lessinfo-newUnits-middle").hide();
					$("#moreinfo-newUnits-least").hide();
					$("#newUnits-least").hide();
		});
	});
// Worker piece	
	//lessinfo-worker-most
		$(document).ready(function(){
			$("#lessinfo-worker-most").click(function(){
				// info shown
				$("#Workers important-1").show();
				$("#Workers important-2").show();
				$("#Workers important-3").hide();
				$("#resources important-1").show();
				$("#resources important-2").show();
				$("#resources important-3").hide();
						// show and hide buttons toggled
						$("#worker-most").hide();
						$("#lessinfo-worker-most").hide();
						$("#moreinfo-worker-middle").show();
						$("#lessinfo-worker-middle").show();
						$("#moreinfo-worker-least").hide();
						$("#worker-least").hide();
			});
		});
	//moreinfo-worker-middle
		$(document).ready(function(){
			$("#moreinfo-worker-middle").click(function(){
				// info shown
				$("#Workers important-1").show();
				$("#Workers important-2").show();
				$("#Workers important-3").show();
				$("#resources important-1").show();
				$("#resources important-2").show();
				$("#resources important-3").show();
						// show and hide buttons toggled
						$("#worker-most").show();
						$("#lessinfo-worker-most").show();
						$("#moreinfo-worker-middle").hide();
						$("#lessinfo-worker-middle").hide();
						$("#moreinfo-worker-least").hide();
						$("#worker-least").hide();
			});
		});
	//lessinfo-worker-middle
		$(document).ready(function(){
			$("#lessinfo-worker-middle").click(function(){
				// info shown
				$("#Workers important-1").show();
				$("#Workers important-2").hide();
				$("#Workers important-3").hide();
				$("#resources important-1").show();
				$("#resources important-2").hide();
				$("#resources important-3").hide();
						// show and hide buttons toggled
						$("#worker-most").hide();
						$("#lessinfo-worker-most").hide();
						$("#moreinfo-worker-middle").hide();
						$("#lessinfo-worker-middle").hide();
						$("#moreinfo-worker-least").show();
						$("#worker-least").show();
			});
		});	
	//moreinfo-worker-least
		$(document).ready(function(){
			$("#moreinfo-worker-least").click(function(){
				// info shown
				$("#Workers important-1").show();
				$("#Workers important-2").show();
				$("#Workers important-3").hide();
				$("#resources important-1").show();
				$("#resources important-2").show();
				$("#resources important-3").hide();
						// show and hide buttons toggled
						$("#worker-most").hide();
						$("#lessinfo-worker-most").hide();
						$("#moreinfo-worker-middle").show();
						$("#lessinfo-worker-middle").show();
						$("#moreinfo-worker-least").hide();
						$("#worker-least").hide();
			});
		});
// market piece	
	//lessinfo-market-most
		$(document).ready(function(){
			$("#lessinfo-market-most").click(function(){
				// info shown
				$("#market important-1").show();
				$("#market important-2").show();
				$("#market important-3").hide();
						// show and hide buttons toggled
						$("#market-most").hide();
						$("#lessinfo-market-most").hide();
						$("#moreinfo-market-middle").show();
						$("#lessinfo-market-middle").show();
						$("#moreinfo-market-least").hide();
						$("#market-least").hide();
			});
		});
	//moreinfo-market-middle
		$(document).ready(function(){
			$("#moreinfo-market-middle").click(function(){
				// info shown
				$("#market important-1").show();
				$("#market important-2").show();
				$("#market important-3").show();
						// show and hide buttons toggled
						$("#market-most").show();
						$("#lessinfo-market-most").show();
						$("#moreinfo-market-middle").hide();
						$("#lessinfo-market-middle").hide();
						$("#moreinfo-market-least").hide();
						$("#market-least").hide();
			});
		});
	//lessinfo-market-middle
		$(document).ready(function(){
			$("#lessinfo-market-middle").click(function(){
				// info shown
				$("#market important-1").show();
				$("#market important-2").hide();
				$("#market important-3").hide();
						// show and hide buttons toggled
						$("#market-most").hide();
						$("#lessinfo-market-most").hide();
						$("#moreinfo-market-middle").hide();
						$("#lessinfo-market-middle").hide();
						$("#moreinfo-market-least").show();
						$("#market-least").show();
			});
		});	
	//moreinfo-market-least
		$(document).ready(function(){
			$("#moreinfo-market-least").click(function(){
				// info shown
				$("#market important-1").show();
				$("#market important-2").show();
				$("#market important-3").hide();
						// show and hide buttons toggled
						$("#market-most").hide();
						$("#lessinfo-market-most").hide();
						$("#moreinfo-market-middle").show();
						$("#lessinfo-market-middle").show();
						$("#moreinfo-market-least").hide();
						$("#market-least").hide();
			});
		});
// tower piece	
	//lessinfo-towers-most
		$(document).ready(function(){
			$("#lessinfo-towers-most").click(function(){
				// info shown
				$("#towers important-1").show();
				$("#towers important-2").show();
				$("#towers important-3").hide();
				$("#walls important-1").show();
				$("#walls important-2").show();
				$("#walls important-3").hide();
						// show and hide buttons toggled
						$("#towers-most").hide();
						$("#lessinfo-towers-most").hide();
						$("#moreinfo-towers-middle").show();
						$("#lessinfo-towers-middle").show();
						$("#moreinfo-towers-least").hide();
						$("#towers-least").hide();
			});
		});
	//moreinfo-towers-middle
		$(document).ready(function(){
			$("#moreinfo-towers-middle").click(function(){
				// info shown
				$("#towers important-1").show();
				$("#towers important-2").show();
				$("#towers important-3").show();
				$("#walls important-1").show();
				$("#walls important-2").show();
				$("#walls important-3").show();
						// show and hide buttons toggled
						$("#towers-most").show();
						$("#lessinfo-towers-most").show();
						$("#moreinfo-towers-middle").hide();
						$("#lessinfo-towers-middle").hide();
						$("#moreinfo-towers-least").hide();
						$("#towers-least").hide();
			});
		});
	//lessinfo-towers-middle
		$(document).ready(function(){
			$("#lessinfo-towers-middle").click(function(){
				// info shown
				$("#towers important-1").show();
				$("#towers important-2").hide();
				$("#towers important-3").hide();
				$("#walls important-1").show();
				$("#walls important-2").hide();
				$("#walls important-3").hide();
						// show and hide buttons toggled
						$("#towers-most").hide();
						$("#lessinfo-towers-most").hide();
						$("#moreinfo-towers-middle").hide();
						$("#lessinfo-towers-middle").hide();
						$("#moreinfo-towers-least").show();
						$("#towers-least").show();
			});
		});	
	//moreinfo-towers-least
		$(document).ready(function(){
			$("#moreinfo-towers-least").click(function(){
				// info shown
				$("#towers important-1").show();
				$("#towers important-2").show();
				$("#towers important-3").hide();
				$("#walls important-1").show();
				$("#walls important-2").show();
				$("#walls important-3").hide();
						// show and hide buttons toggled
						$("#towers-most").hide();
						$("#lessinfo-towers-most").hide();
						$("#moreinfo-towers-middle").show();
						$("#lessinfo-towers-middle").show();
						$("#moreinfo-towers-least").hide();
						$("#towers-least").hide();
			});
		});
// tool piece	
	//lessinfo-tool-most
		$(document).ready(function(){
			$("#lessinfo-tool-most").click(function(){
				// info shown
				$("#tool important-1").show();
				$("#tool important-2").show();
				$("#tool important-3").hide();
						// show and hide buttons toggled
						$("#tool-most").hide();
						$("#lessinfo-tool-most").hide();
						$("#moreinfo-tool-middle").show();
						$("#lessinfo-tool-middle").show();
						$("#moreinfo-tool-least").hide();
						$("#tool-least").hide();
			});
		});
	//moreinfo-tool-middle
		$(document).ready(function(){
			$("#moreinfo-tool-middle").click(function(){
				// info shown
				$("#tool important-1").show();
				$("#tool important-2").show();
				$("#tool important-3").show();
						// show and hide buttons toggled
						$("#tool-most").show();
						$("#lessinfo-tool-most").show();
						$("#moreinfo-tool-middle").hide();
						$("#lessinfo-tool-middle").hide();
						$("#moreinfo-tool-least").hide();
						$("#tool-least").hide();
			});
		});
	//lessinfo-tool-middle
		$(document).ready(function(){
			$("#lessinfo-tool-middle").click(function(){
				// info shown
				$("#tool important-1").show();
				$("#tool important-2").hide();
				$("#tool important-3").hide();
						// show and hide buttons toggled
						$("#tool-most").hide();
						$("#lessinfo-tool-most").hide();
						$("#moreinfo-tool-middle").hide();
						$("#lessinfo-tool-middle").hide();
						$("#moreinfo-tool-least").show();
						$("#tool-least").show();
			});
		});	
	//moreinfo-tool-least
		$(document).ready(function(){
			$("#moreinfo-tool-least").click(function(){
				// info shown
				$("#tool important-1").show();
				$("#tool important-2").show();
				$("#tool important-3").hide();
						// show and hide buttons toggled
						$("#tool-most").hide();
						$("#lessinfo-tool-most").hide();
						$("#moreinfo-tool-middle").show();
						$("#lessinfo-tool-middle").show();
						$("#moreinfo-tool-least").hide();
						$("#tool-least").hide();
			});
		});
// bronze piece	
	//lessinfo-bronze-most
		$(document).ready(function(){
			$("#lessinfo-bronze-most").click(function(){
				// info shown
				$("#bronze important-1").show();
				$("#bronze important-2").show();
				$("#bronze important-3").hide();
						// show and hide buttons toggled
						$("#bronze-most").hide();
						$("#lessinfo-bronze-most").hide();
						$("#moreinfo-bronze-middle").show();
						$("#lessinfo-bronze-middle").show();
						$("#moreinfo-bronze-least").hide();
						$("#bronze-least").hide();
			});
		});
	//moreinfo-bronze-middle
		$(document).ready(function(){
			$("#moreinfo-bronze-middle").click(function(){
				// info shown
				$("#bronze important-1").show();
				$("#bronze important-2").show();
				$("#bronze important-3").show();
						// show and hide buttons toggled
						$("#bronze-most").show();
						$("#lessinfo-bronze-most").show();
						$("#moreinfo-bronze-middle").hide();
						$("#lessinfo-bronze-middle").hide();
						$("#moreinfo-bronze-least").hide();
						$("#bronze-least").hide();
			});
		});
	//lessinfo-bronze-middle
		$(document).ready(function(){
			$("#lessinfo-bronze-middle").click(function(){
				// info shown
				$("#bronze important-1").show();
				$("#bronze important-2").hide();
				$("#bronze important-3").hide();
						// show and hide buttons toggled
						$("#bronze-most").hide();
						$("#lessinfo-bronze-most").hide();
						$("#moreinfo-bronze-middle").hide();
						$("#lessinfo-bronze-middle").hide();
						$("#moreinfo-bronze-least").show();
						$("#bronze-least").show();
			});
		});	
	//moreinfo-bronze-least
		$(document).ready(function(){
			$("#moreinfo-bronze-least").click(function(){
				// info shown
				$("#bronze important-1").show();
				$("#bronze important-2").show();
				$("#bronze important-3").hide();
						// show and hide buttons toggled
						$("#bronze-most").hide();
						$("#lessinfo-bronze-most").hide();
						$("#moreinfo-bronze-middle").show();
						$("#lessinfo-bronze-middle").show();
						$("#moreinfo-bronze-least").hide();
						$("#bronze-least").hide();
			});
		});
// iron piece	
	//lessinfo-iron-most
		$(document).ready(function(){
			$("#lessinfo-iron-most").click(function(){
				// info shown
				$("#iron important-1").show();
				$("#iron important-2").show();
				$("#iron important-3").hide();
						// show and hide buttons toggled
						$("#iron-most").hide();
						$("#lessinfo-iron-most").hide();
						$("#moreinfo-iron-middle").show();
						$("#lessinfo-iron-middle").show();
						$("#moreinfo-iron-least").hide();
						$("#iron-least").hide();
			});
		});
	//moreinfo-iron-middle
		$(document).ready(function(){
			$("#moreinfo-iron-middle").click(function(){
				// info shown
				$("#iron important-1").show();
				$("#iron important-2").show();
				$("#iron important-3").show();
						// show and hide buttons toggled
						$("#iron-most").show();
						$("#lessinfo-iron-most").show();
						$("#moreinfo-iron-middle").hide();
						$("#lessinfo-iron-middle").hide();
						$("#moreinfo-iron-least").hide();
						$("#iron-least").hide();
			});
		});
	//lessinfo-iron-middle
		$(document).ready(function(){
			$("#lessinfo-iron-middle").click(function(){
				// info shown
				$("#iron important-1").show();
				$("#iron important-2").hide();
				$("#iron important-3").hide();
						// show and hide buttons toggled
						$("#iron-most").hide();
						$("#lessinfo-iron-most").hide();
						$("#moreinfo-iron-middle").hide();
						$("#lessinfo-iron-middle").hide();
						$("#moreinfo-iron-least").show();
						$("#iron-least").show();
			});
		});	
	//moreinfo-iron-least
		$(document).ready(function(){
			$("#moreinfo-iron-least").click(function(){
				// info shown
				$("#iron important-1").show();
				$("#iron important-2").show();
				$("#iron important-3").hide();
						// show and hide buttons toggled
						$("#iron-most").hide();
						$("#lessinfo-iron-most").hide();
						$("#moreinfo-iron-middle").show();
						$("#lessinfo-iron-middle").show();
						$("#moreinfo-iron-least").hide();
						$("#iron-least").hide();
			});
		});
// others piece	
	//lessinfo-others-most
		$(document).ready(function(){
			$("#lessinfo-others-most").click(function(){
				// info shown
				$("#others important-1").show();
				$("#others important-2").show();
				$("#others important-3").hide();
						// show and hide buttons toggled
						$("#others-most").hide();
						$("#lessinfo-others-most").hide();
						$("#moreinfo-others-middle").show();
						$("#lessinfo-others-middle").show();
						$("#moreinfo-others-least").hide();
						$("#others-least").hide();
			});
		});
	//moreinfo-others-middle
		$(document).ready(function(){
			$("#moreinfo-others-middle").click(function(){
				// info shown
				$("#others important-1").show();
				$("#others important-2").show();
				$("#others important-3").show();
						// show and hide buttons toggled
						$("#others-most").show();
						$("#lessinfo-others-most").show();
						$("#moreinfo-others-middle").hide();
						$("#lessinfo-others-middle").hide();
						$("#moreinfo-others-least").hide();
						$("#others-least").hide();
			});
		});
	//lessinfo-others-middle
		$(document).ready(function(){
			$("#lessinfo-others-middle").click(function(){
				// info shown
				$("#others important-1").show();
				$("#others important-2").hide();
				$("#others important-3").hide();
						// show and hide buttons toggled
						$("#others-most").hide();
						$("#lessinfo-others-most").hide();
						$("#moreinfo-others-middle").hide();
						$("#lessinfo-others-middle").hide();
						$("#moreinfo-others-least").show();
						$("#others-least").show();
			});
		});	
	//moreinfo-others-least
		$(document).ready(function(){
			$("#moreinfo-others-least").click(function(){
				// info shown
				$("#others important-1").show();
				$("#others important-2").show();
				$("#others important-3").hide();
						// show and hide buttons toggled
						$("#others-most").hide();
						$("#lessinfo-others-most").hide();
						$("#moreinfo-others-middle").show();
						$("#lessinfo-others-middle").show();
						$("#moreinfo-others-least").hide();
						$("#others-least").hide();
			});
		});		
// civ piece	
	//lessinfo-civ-most
		$(document).ready(function(){
			$("#lessinfo-civ-most").click(function(){
				// info shown
				$("#allcivinfo important-1").show();
				$("#allcivinfo important-2").show();
				$("#allcivinfo important-3").hide();
				$("#specificcivinfo important-1").show();
				$("#specificcivinfo important-2").show();
				$("#specificcivinfo important-3").hide();
				$("#uniqueTechnologes important-1").show();
				$("#uniqueTechnologes important-2").show();
				$("#uniqueTechnologes important-3").hide();
						// show and hide buttons toggled
						$("#civ-most").hide();
						$("#lessinfo-civ-most").hide();
						$("#moreinfo-civ-middle").show();
						$("#lessinfo-civ-middle").show();
						$("#moreinfo-civ-least").hide();
						$("#civ-least").hide();
			});
		});
	//moreinfo-civ-middle
		$(document).ready(function(){
			$("#moreinfo-civ-middle").click(function(){
				// info shown
				$("#allcivinfo important-1").show();
				$("#allcivinfo important-2").show();
				$("#allcivinfo important-3").show();
				$("#specificcivinfo important-1").show();
				$("#specificcivinfo important-2").show();
				$("#specificcivinfo important-3").show();
				$("#uniqueTechnologes important-1").show();
				$("#uniqueTechnologes important-2").show();
				$("#uniqueTechnologes important-3").show();
						// show and hide buttons toggled
						$("#civ-most").show();
						$("#lessinfo-civ-most").show();
						$("#moreinfo-civ-middle").hide();
						$("#lessinfo-civ-middle").hide();
						$("#moreinfo-civ-least").hide();
						$("#civ-least").hide();
			});
		});
	//lessinfo-civ-middle
		$(document).ready(function(){
			$("#lessinfo-civ-middle").click(function(){
				// info shown
				$("#allcivinfo important-1").show();
				$("#allcivinfo important-2").hide();
				$("#allcivinfo important-3").hide();
				$("#specificcivinfo important-1").show();
				$("#specificcivinfo important-2").hide();
				$("#specificcivinfo important-3").hide();
				$("#uniqueTechnologes important-1").show();
				$("#uniqueTechnologes important-2").hide();
				$("#uniqueTechnologes important-3").hide();
						// show and hide buttons toggled
						$("#civ-most").hide();
						$("#lessinfo-civ-most").hide();
						$("#moreinfo-civ-middle").hide();
						$("#lessinfo-civ-middle").hide();
						$("#moreinfo-civ-least").show();
						$("#civ-least").show();
			});
		});	
	//moreinfo-civ-least
		$(document).ready(function(){
			$("#moreinfo-civ-least").click(function(){
				// info shown
				$("#allcivinfo important-1").show();
				$("#allcivinfo important-2").show();
				$("#allcivinfo important-3").hide();
				$("#specificcivinfo important-1").show();
				$("#specificcivinfo important-2").show();
				$("#specificcivinfo important-3").hide();
				$("#uniqueTechnologes important-1").show();
				$("#uniqueTechnologes important-2").show();
				$("#uniqueTechnologes important-3").hide();
						// show and hide buttons toggled
						$("#civ-most").hide();
						$("#lessinfo-civ-most").hide();
						$("#moreinfo-civ-middle").show();
						$("#lessinfo-civ-middle").show();
						$("#moreinfo-civ-least").hide();
						$("#civ-least").hide();
			});
		});		
// siege piece	
	//lessinfo-siege-most
		$(document).ready(function(){
			$("#lessinfo-siege-most").click(function(){
				// info shown
				$("#siege important-1").show();
				$("#siege important-2").show();
				$("#siege important-3").hide();
						// show and hide buttons toggled
						$("#siege-most").hide();
						$("#lessinfo-siege-most").hide();
						$("#moreinfo-siege-middle").show();
						$("#lessinfo-siege-middle").show();
						$("#moreinfo-siege-least").hide();
						$("#siege-least").hide();
			});
		});
	//moreinfo-siege-middle
		$(document).ready(function(){
			$("#moreinfo-siege-middle").click(function(){
				// info shown
				$("#siege important-1").show();
				$("#siege important-2").show();
				$("#siege important-3").show();
						// show and hide buttons toggled
						$("#siege-most").show();
						$("#lessinfo-siege-most").show();
						$("#moreinfo-siege-middle").hide();
						$("#lessinfo-siege-middle").hide();
						$("#moreinfo-siege-least").hide();
						$("#siege-least").hide();
			});
		});
	//lessinfo-siege-middle
		$(document).ready(function(){
			$("#lessinfo-siege-middle").click(function(){
				// info shown
				$("#siege important-1").show();
				$("#siege important-2").hide();
				$("#siege important-3").hide();
						// show and hide buttons toggled
						$("#siege-most").hide();
						$("#lessinfo-siege-most").hide();
						$("#moreinfo-siege-middle").hide();
						$("#lessinfo-siege-middle").hide();
						$("#moreinfo-siege-least").show();
						$("#siege-least").show();
			});
		});	
	//moreinfo-siege-least
		$(document).ready(function(){
			$("#moreinfo-siege-least").click(function(){
				// info shown
				$("#siege important-1").show();
				$("#siege important-2").show();
				$("#siege important-3").hide();
						// show and hide buttons toggled
						$("#siege-most").hide();
						$("#lessinfo-siege-most").hide();
						$("#moreinfo-siege-middle").show();
						$("#lessinfo-siege-middle").show();
						$("#moreinfo-siege-least").hide();
						$("#siege-least").hide();
			});
		});
// newUnits piece	
	//lessinfo-newUnits-most
		$(document).ready(function(){
			$("#lessinfo-newUnits-most").click(function(){
				// info shown
				$("#newUnits important-1").show();
				$("#newUnits important-2").show();
				$("#newUnits important-3").hide();
						// show and hide buttons toggled
						$("#newUnits-most").hide();
						$("#lessinfo-newUnits-most").hide();
						$("#moreinfo-newUnits-middle").show();
						$("#lessinfo-newUnits-middle").show();
						$("#moreinfo-newUnits-least").hide();
						$("#newUnits-least").hide();
			});
		});
	//moreinfo-newUnits-middle
		$(document).ready(function(){
			$("#moreinfo-newUnits-middle").click(function(){
				// info shown
				$("#newUnits important-1").show();
				$("#newUnits important-2").show();
				$("#newUnits important-3").show();
						// show and hide buttons toggled
						$("#newUnits-most").show();
						$("#lessinfo-newUnits-most").show();
						$("#moreinfo-newUnits-middle").hide();
						$("#lessinfo-newUnits-middle").hide();
						$("#moreinfo-newUnits-least").hide();
						$("#newUnits-least").hide();
			});
		});
	//lessinfo-newUnits-middle
		$(document).ready(function(){
			$("#lessinfo-newUnits-middle").click(function(){
				// info shown
				$("#newUnits important-1").show();
				$("#newUnits important-2").hide();
				$("#newUnits important-3").hide();
						// show and hide buttons toggled
						$("#newUnits-most").hide();
						$("#lessinfo-newUnits-most").hide();
						$("#moreinfo-newUnits-middle").hide();
						$("#lessinfo-newUnits-middle").hide();
						$("#moreinfo-newUnits-least").show();
						$("#newUnits-least").show();
			});
		});	
	//moreinfo-newUnits-least
		$(document).ready(function(){
			$("#moreinfo-newUnits-least").click(function(){
				// info shown
				$("#newUnits important-1").show();
				$("#newUnits important-2").show();
				$("#newUnits important-3").hide();
						// show and hide buttons toggled
						$("#newUnits-most").hide();
						$("#lessinfo-newUnits-most").hide();
						$("#moreinfo-newUnits-middle").show();
						$("#lessinfo-newUnits-middle").show();
						$("#moreinfo-newUnits-least").hide();
						$("#newUnits-least").hide();
			});
		});	
// newUnits piece	
	//lessinfo-newUnits-most
		$(document).ready(function(){
			$("#lessinfo-newUnits-most").click(function(){
				// info shown
				$("#newUnits important-1").show();
				$("#newUnits important-2").show();
				$("#newUnits important-3").hide();
						// show and hide buttons toggled
						$("#newUnits-most").hide();
						$("#lessinfo-newUnits-most").hide();
						$("#moreinfo-newUnits-middle").show();
						$("#lessinfo-newUnits-middle").show();
						$("#moreinfo-newUnits-least").hide();
						$("#newUnits-least").hide();
			});
		});
	//moreinfo-newUnits-middle
		$(document).ready(function(){
			$("#moreinfo-newUnits-middle").click(function(){
				// info shown
				$("#newUnits important-1").show();
				$("#newUnits important-2").show();
				$("#newUnits important-3").show();
						// show and hide buttons toggled
						$("#newUnits-most").show();
						$("#lessinfo-newUnits-most").show();
						$("#moreinfo-newUnits-middle").hide();
						$("#lessinfo-newUnits-middle").hide();
						$("#moreinfo-newUnits-least").hide();
						$("#newUnits-least").hide();
			});
		});
	//lessinfo-newUnits-middle
		$(document).ready(function(){
			$("#lessinfo-newUnits-middle").click(function(){
				// info shown
				$("#newUnits important-1").show();
				$("#newUnits important-2").hide();
				$("#newUnits important-3").hide();
						// show and hide buttons toggled
						$("#newUnits-most").hide();
						$("#lessinfo-newUnits-most").hide();
						$("#moreinfo-newUnits-middle").hide();
						$("#lessinfo-newUnits-middle").hide();
						$("#moreinfo-newUnits-least").show();
						$("#newUnits-least").show();
			});
		});	
	//moreinfo-newUnits-least
		$(document).ready(function(){
			$("#moreinfo-newUnits-least").click(function(){
				// info shown
				$("#newUnits important-1").show();
				$("#newUnits important-2").show();
				$("#newUnits important-3").hide();
						// show and hide buttons toggled
						$("#newUnits-most").hide();
						$("#lessinfo-newUnits-most").hide();
						$("#moreinfo-newUnits-middle").show();
						$("#lessinfo-newUnits-middle").show();
						$("#moreinfo-newUnits-least").hide();
						$("#newUnits-least").hide();
			});
		});	
	
		
// comment
	$(document).ready(function(){
		$("#commentenabled").click(function(){
			$(".comment").hide();
			$(".comment2").hide();
			$("#commentdisabled").show();
			$("#commentenabled").hide();
				// small hide and visible burttons toggle
				$("#commentenabled-worker").hide();
				$("#commentdisabled-worker").show();
				$("#commentenabled-worker").hide();
				$("#commentdisabled-worker").show();
				$("#commentenabled-market").hide();
				$("#commentdisabled-market").show();
				$("#commentenabled-towers").hide();
				$("#commentdisabled-towers").show();
				$("#commentenabled-tool").hide();
				$("#commentdisabled-tool").show();
				$("#commentenabled-bronze").hide();
				$("#commentdisabled-bronze").show();
				$("#commentenabled-iron").hide();
				$("#commentdisabled-iron").show();
				$("#commentenabled-others").hide();
				$("#commentdisabled-others").show();
				$("#commentenabled-civs").hide();
				$("#commentdisabled-civs").show();
				$("#commentenabled-bugs").hide();
				$("#commentdisabled-bugs").show();
				$("#commentenabled-siege").hide();
				$("#commentdisabled-siege").show();
				$("#commentenabled-meta").hide();
				$("#commentdisabled-meta").show();
				$("#commentenabled-newUnits").hide();
				$("#commentdisabled-newUnits").show();
		});
	});
	$(document).ready(function(){
		$("#commentdisabled").click(function(){
			$(".comment").show();
			$(".comment2").show();
			$("#commentdisabled").hide();
			$("#commentenabled").show();
				// small hide and visible burttons toggle
				$("#commentenabled-worker").show();
				$("#commentdisabled-worker").hide();
				$("#commentenabled-worker").show();
				$("#commentdisabled-worker").hide();
				$("#commentenabled-market").show();
				$("#commentdisabled-market").hide();
				$("#commentenabled-towers").show();
				$("#commentdisabled-towers").hide();
				$("#commentenabled-tool").show();
				$("#commentdisabled-tool").hide();
				$("#commentenabled-bronze").show();
				$("#commentdisabled-bronze").hide();
				$("#commentenabled-iron").show();
				$("#commentdisabled-iron").hide();
				$("#commentenabled-others").show();
				$("#commentdisabled-others").hide();
				$("#commentenabled-civs").show();
				$("#commentdisabled-civs").hide();
				$("#commentenabled-bugs").show();
				$("#commentdisabled-bugs").hide();
				$("#commentenabled-siege").show();
				$("#commentdisabled-siege").hide();
				$("#commentenabled-meta").show();
				$("#commentdisabled-meta").hide();
				$("#commentenabled-newUnits").show();
				$("#commentdisabled-newUnits").hide();
		});
	});
//piece comments
	//workers
		$(document).ready(function(){
			$("#commentenabled-worker").click(function(){
				$("#Workers .comment") .hide();
				$("#Workers .comment2").hide();
				$("#resources .comment") .hide();
				$("#resources .comment2").hide();
				$("#commentenabled-worker").hide();
				$("#commentdisabled-worker").show();

			});
		});
		$(document).ready(function(){
			$("#commentdisabled-worker").click(function(){
				$("#Workers .comment") .show();
				$("#Workers .comment2").show();
				$("#resources .comment") .show();
				$("#resources .comment2").show();
				$("#commentenabled-worker").show();
				$("#commentdisabled-worker").hide();

			});
		});
	//walls and towers
		$(document).ready(function(){
			$("#commentenabled-towers").click(function(){
				$("#towers .comment") .hide();
				$("#towers .comment2").hide();
				$("#walls .comment") .hide();
				$("#walls .comment2").hide();
				$("#commentenabled-towers").hide();
				$("#commentdisabled-towers").show();	
	
			});
		});
		$(document).ready(function(){
			$("#commentdisabled-towers").click(function(){
				$("#towers .comment") .show();
				$("#towers .comment2").show();
				$("#walls .comment") .show();
				$("#walls .comment2").show();
				$("#commentenabled-towers").show();
				$("#commentdisabled-towers").hide();
	
			});
		});
	//market
		$(document).ready(function(){
			$("#commentenabled-market").click(function(){
				$("#market .comment") .hide();
				$("#market .comment2").hide();
				$("#commentenabled-market").hide();
				$("#commentdisabled-market").show();
	
			});
		});
		$(document).ready(function(){
			$("#commentdisabled-market").click(function(){
				$("#market .comment") .show();
				$("#market .comment2").show();
				$("#commentenabled-market").show();
				$("#commentdisabled-market").hide();
	
			});
		});	
	//tool age fights
		$(document).ready(function(){
			$("#commentenabled-tool").click(function(){
				$("#tool .comment") .hide();
				$("#tool .comment2").hide();
				$("#commentenabled-tool").hide();
				$("#commentdisabled-tool").show();
	
			});
		});
		$(document).ready(function(){
			$("#commentdisabled-tool").click(function(){
				$("#tool .comment") .show();
				$("#tool .comment2").show();
				$("#commentenabled-tool").show();
				$("#commentdisabled-tool").hide();
	
			});
		});		
	//broze age fights
		$(document).ready(function(){
			$("#commentenabled-bronze").click(function(){
				$("#bronze .comment") .hide();
				$("#bronze .comment2").hide();
				$("#commentenabled-bronze").hide();
				$("#commentdisabled-bronze").show();	
	
			});
		});
		$(document).ready(function(){
			$("#commentdisabled-bronze").click(function(){
				$("#bronze .comment") .show();
				$("#bronze .comment2").show();
				$("#commentenabled-bronze").show();
				$("#commentdisabled-bronze").hide();
	
			});
		});	
	//iron age fights
		$(document).ready(function(){
			$("#commentenabled-iron").click(function(){
				$("#iron .comment") .hide();
				$("#iron .comment2").hide();
				$("#commentenabled-iron").hide();
				$("#commentdisabled-iron").show();
	
			});
		});
		$(document).ready(function(){
			$("#commentdisabled-iron").click(function(){
				$("#iron .comment") .show();
				$("#iron .comment2").show();
				$("#commentenabled-iron").show();
				$("#commentdisabled-iron").hide();
	
			});
		});	
	//others
		$(document).ready(function(){
			$("#commentenabled-others").click(function(){
				$("#others .comment") .hide();
				$("#others .comment2").hide();
				$("#commentenabled-others").hide();
				$("#commentdisabled-others").show();
	
			});
		});
		$(document).ready(function(){
			$("#commentdisabled-others").click(function(){
				$("#others .comment") .show();
				$("#others .comment2").show();
				$("#commentenabled-others").show();
				$("#commentdisabled-others").hide();
	
			});
		});
	//civs
		$(document).ready(function(){
			$("#commentenabled-civs").click(function(){
				$("#allcivinfo .comment") .hide();
				$("#allcivinfo .comment2").hide();
				$("#specificcivinfo .comment") .hide();
				$("#specificcivinfo .comment2").hide();
				$("#commentenabled-civs").hide();
				$("#commentdisabled-civs").show();
	
			});
		});
		$(document).ready(function(){
			$("#commentdisabled-civs").click(function(){
				$("#allcivinfo .comment") .show();
				$("#allcivinfo .comment2").show();
				$("#specificcivinfo .comment") .show();
				$("#specificcivinfo .comment2").show();
				$("#commentenabled-civs").show();
				$("#commentdisabled-civs").hide();
	
			});
		});
	//bugs
		$(document).ready(function(){
			$("#commentenabled-bugs").click(function(){
				$("#bugs .comment") .hide();
				$("#bugs .comment2").hide();
				$("#commentenabled-bugs").hide();
				$("#commentdisabled-bugs").show();
	
			});
		});
		$(document).ready(function(){
			$("#commentdisabled-bugs").click(function(){
				$("#bugs .comment") .show();
				$("#bugs .comment2").show();
				$("#commentenabled-bugs").show();
				$("#commentdisabled-bugs").hide();
	
			});
		});
	//siege
		$(document).ready(function(){
			$("#commentenabled-siege").click(function(){
				$("#siege .comment") .hide();
				$("#siege .comment2").hide();
				$("#commentenabled-siege").hide();
				$("#commentdisabled-siege").show();
	
			});
		});
		$(document).ready(function(){
			$("#commentdisabled-siege").click(function(){
				$("#siege .comment") .show();
				$("#siege .comment2").show();
				$("#commentenabled-siege").show();
				$("#commentdisabled-siege").hide();
	
			});
		});
		//meta 
		$(document).ready(function(){
			$("#commentenabled-meta").click(function(){
				$("#meta .comment") .hide();
				$("#meta .comment2").hide();
				$("#commentenabled-meta").hide();
				$("#commentdisabled-meta").show();
	
			});
		});
		$(document).ready(function(){
			$("#commentdisabled-meta").click(function(){
				$("#meta .comment") .show();
				$("#meta .comment2").show();
				$("#commentenabled-meta").show();
				$("#commentdisabled-meta").hide();
	
			});
		});
		//newUnits
		$(document).ready(function(){
			$("#commentenabled-newUnits").click(function(){
				$("#newUnits .comment") .hide();
				$("#newUnits .comment2").hide();
				$("#commentenabled-newUnits").hide();
				$("#commentdisabled-newUnits").show();
	
			});
		});
		$(document).ready(function(){
			$("#commentdisabled-newUnits").click(function(){
				$("#newUnits .comment") .show();
				$("#newUnits .comment2").show();
				$("#commentenabled-newUnits").show();
				$("#commentdisabled-newUnits").hide();
	
			});
		});

//image comparison
function initComparisons() {
  var x, i;
  /*find all elements with an "overlay" class:*/
  x = document.getElementsByClassName("img-comp-overlay");
  for (i = 0; i < x.length; i++) {
    /*once for each "overlay" element:
    pass the "overlay" element as a parameter when executing the compareImages function:*/
    compareImages(x[i]);
  }
  function compareImages(img) {
    var slider, img, clicked = 0, w, h;
    /*get the width and height of the img element*/
    w = img.offsetWidth;
    h = img.offsetHeight;
    /*set the width of the img element to 50%:*/
    img.style.width = (w / 2) + "px";
    /*create slider:*/
    slider = document.createElement("DIV");
    slider.setAttribute("class", "img-comp-slider");
    /*insert slider*/
    img.parentElement.insertBefore(slider, img);
    /*position the slider in the middle:*/
    slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
    slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
    /*execute a function when the mouse button is pressed:*/
    slider.addEventListener("mousedown", slideReady);
    /*and another function when the mouse button is released:*/
    window.addEventListener("mouseup", slideFinish);
    /*or touched (for touch screens:*/
    slider.addEventListener("touchstart", slideReady);
    /*and released (for touch screens:*/
    window.addEventListener("touchend", slideFinish);
    function slideReady(e) {
      /*prevent any other actions that may occur when moving over the image:*/
      e.preventDefault();
      /*the slider is now clicked and ready to move:*/
      clicked = 1;
      /*execute a function when the slider is moved:*/
      window.addEventListener("mousemove", slideMove);
      window.addEventListener("touchmove", slideMove);
    }
    function slideFinish() {
      /*the slider is no longer clicked:*/
      clicked = 0;
    }
    function slideMove(e) {
      var pos;
      /*if the slider is no longer clicked, exit this function:*/
      if (clicked == 0) return false;
      /*get the cursor's x position:*/
      pos = getCursorPos(e)
      /*prevent the slider from being positioned outside the image:*/
      if (pos < 0) pos = 0;
      if (pos > w) pos = w;
      /*execute a function that will resize the overlay image according to the cursor:*/
      slide(pos);
    }
    function getCursorPos(e) {
      var a, x = 0;
      e = e || window.event;
      /*get the x positions of the image:*/
      a = img.getBoundingClientRect();
      /*calculate the cursor's x coordinate, relative to the image:*/
      x = e.pageX - a.left;
      /*consider any page scrolling:*/
      x = x - window.pageXOffset;
      return x;
    }
    function slide(x) {
      /*resize the image:*/
      img.style.width = x + "px";
      /*position the slider:*/
      slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
    }
  }
}

$(document).ready(function(){
	if(isMobile.any()){
		//remove picture width as well as border sizes
		var marginal = ($(window).width() - 563 - 20) / 2; 
		console.log("marginal " + marginal)
		$(".img-comp-container").css("margin-left", marginal );
	}
});


// changes image comparison scaling upon both on resize and on load
// initialize the comparison after size check
$(document).ready(function(){
	$.fn.imageComparisonScaling();
	initComparisons();
});
$(window).resize(function(){
	$.fn.imageComparisonScaling();
});

$.fn.imageComparisonScaling = function() { 
	var smallestWDTH = 480;
	
	if($(window).width() < smallestWDTH){
		$(".img-comp-container").css("margin-left", 1);
		$(".img-comp-container").css("width", smallestWDTH - 30);
		$(".img-comp-container").css("height", smallestWDTH * 6 / 5  - 36 );
		
		$(".img-comp-img img").css("width", smallestWDTH - 30 );
		$(".img-comp-img").css("width", smallestWDTH - 30 );
		
		$(".img-comp-img img").css("height", smallestWDTH * 6 / 5  - 36  );
		$(".img-comp-img").css("height", smallestWDTH * 6 / 5  - 36  );
		
		//$(".img-comp-overlay img").css("width", (smallestWDTH - 30) / 2 );
		
	}else if($(window).width() < 550){
		$(".img-comp-container").css("margin-left", 1);
		$(".img-comp-container").css("width", $(window).width() - 30);
		$(".img-comp-container").css("height", $(window).width() * 6 / 5  - 36 );
		
		$(".img-comp-img img").css("width", $(window).width() - 30 );
		$(".img-comp-img").css("width", $(window).width() - 30 );
		
		$(".img-comp-img img").css("height", $(window).width() * 6 / 5  - 36  );
		$(".img-comp-img").css("height", $(window).width() * 6 / 5  - 36  );
		
		//$(".img-comp-overlay img").css("width", ($(window).width() - 30) / 2 );
		
	}else if($(window).width() < 850){
		$(".img-comp-container").css("margin-left", ($(window).width() - 530) / 2 );
		$(".img-comp-container").css("width", "auto" );
		$(".img-comp-container").css("height", 600 );
		
		$(".img-comp-img img").css("width", 500);
		$(".img-comp-img img").css("height", 600 );
		$(".img-comp-img").css("width", 500);
		$(".img-comp-img").css("height", 600 );
		
		//$(".img-comp-overlay img").css("width", 500 / 2 );
	}else{
		$(".img-comp-container").css("margin-left", 162);	
		$(".img-comp-container").css("width", "auto" );
		$(".img-comp-container").css("height", 600 );
		
		$(".img-comp-img img").css("width", 500);
		$(".img-comp-img img").css("height", 600);
		$(".img-comp-img").css("height", 600 );
		$(".img-comp-img").css("width", 500);
		
		//$(".img-comp-overlay img").css("width", 500 / 2 );
	}
}; 

