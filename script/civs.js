var inIDEComparisonMode = false;


$(document).ready(function () {
	preload2([
	"Pictures/buttons/arrowleft.png",
	"Pictures/buttons/arrowleftLight.png",
	"Pictures/buttons/arrowRight.png",
	"Pictures/buttons/arrowRightLight.png",
	"Pictures/buttons/cross.png",
	"Pictures/buttons/selected.gif",
	"Pictures/buttons/SideBarLeft.png",
	"Pictures/buttons/SideBarRight.png"
	]);
}); 
function preload2(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
    });
}


$(document).ready(function(){
	$(".tech-image").click(function(){
		preload(civBigImageList);
	});
}); 
function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
    });
}

var civBigImageList = [
	"Pictures/tech-treesBig/brawl/assyrian.png",
	"Pictures/tech-treesBig/brawl/babylonian.png",
	"Pictures/tech-treesBig/newCivs/nubia.png",
	"Pictures/tech-treesBig/brawl/carthaginian.png",
	"Pictures/tech-treesBig/brawl/choson.png",
	"Pictures/tech-treesBig/brawl/egyptian.png",
	"Pictures/tech-treesBig/brawl/greek.png",
	"Pictures/tech-treesBig/brawl/hittite.png",
	"Pictures/tech-treesBig/brawl/macedonian.png",
	"Pictures/tech-treesBig/brawl/minoan.png",
	"Pictures/tech-treesBig/brawl/palmyra.png",
	"Pictures/tech-treesBig/newCivs/parthia.png",
	"Pictures/tech-treesBig/brawl/persian.png",
	"Pictures/tech-treesBig/brawl/phoenician.png",
	"Pictures/tech-treesBig/brawl/roman.png",
	"Pictures/tech-treesBig/newCivs/scythia.png",
	"Pictures/tech-treesBig/brawl/shang.png",
	"Pictures/tech-treesBig/brawl/sumerian.png",
	"Pictures/tech-treesBig/newCivs/thrace.png",
	"Pictures/tech-treesBig/brawl/yamato.png"
];

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
$(document).ready(function(){ $("#importantNap4")
	.mouseenter(function(){
		if(!isMobile.any()){
			$("#importantNap4").css("background-image", "url(Pictures/buttons/selected.gif)")
		}
	})
	.mouseleave(function() {
		if(!isMobile.any()){
			$("#importantNap4").css("background-image", "url(Pictures/buttons/not-selected.gif)")
		}
	})
})

// margins on desktop
$(document).ready(function(){
	if(!isMobile.any()){
		$("#importantNap, #importantNap2, #importantNap3, #importantNap4, #importantNapBlack, #importantNap2Black, #importantNap3Black, #importantNap4Black").css("margin-left", "calc(13% - 28px)")
		$("#importantNap, #importantNap2, #importantNap3, #importantNap4, #importantNapBlack, #importantNap2Black, #importantNap3Black, #importantNap4Black").css("margin-right", "calc(12% - 28px)")
		$("#noComparison, #upatchComparison, #rorComparison, #deComparison").css("margin-left", "calc(12.8% - 55px)")
		$("#noComparison, #upatchComparison, #rorComparison, #deComparison").css("margin-right", "calc(12% - 55px)")
	}
});

// mobile  scaling
$(document).ready(function(){
	$.fn.koonMuutosCivs();
});
$(window ).resize(function(){
	$.fn.koonMuutosCivs();
});

$.fn.koonMuutosCivs = function() { 
 	var leveys = $( window ).width()
	
	$(".techTreeImage").css({"width": leveys - 20});
	
	if( leveys <= 480) {
		$("#pdfDownlaod").css("left", "336px");
		$("p.explanation2").css({"margin-left": 10});
		$("p.explanation").css({"margin-left": 15});
	}else if( leveys <= 874){
		$("#pdfDownlaod").css({"left": leveys-(leveys*0.07)-110 });
		$("p.explanation2").css({"margin-left": (((1/(leveys/(leveys-240)))*leveys)-190)/5 });
		$("p.explanation").css({"margin-left": (((1/(leveys/(leveys-240)))*leveys)-170)/5 });
	}else{
		$("#pdfDownlaod").css("left", "700px");
		$("p.explanation2").css("margin-left", "90px");
		$("p.explanation").css("margin-left", "90px");
	}
	if(!isMobile.any()){
		$(".techTreeImage").css({"maxWidth": 830 });
	}else{
		$(".techTreeImage").css({"maxWidth": "100%" });	
	}
};

// button look changes on mobile
$(document).ready(function(){
	if(isMobile.any()){
		//common
		$("#noComparison").hide();
		$("#rorComparison").hide();
		$("#deComparison").hide();
		$("#upatchComparison").hide();
		$("#CompareTextMobile").text("Compare to other game Patches")
		$("#CompareTextMobile").css("width", "auto")
		$("#CompareTextMobile").css("font-size", "18px")
		$("#CompareTextMobile").css("margin", "4px 0px 0px 25%")
		$("#CompareTextMobile").css("letter-spacing", "3px")
		$("#CompareTextMobile").css("top", "0px")
		//filter
		$("#importantNap").text("None")
		$("#importantNap2").text("Upatch")
		$("#importantNap3").text("ROR 1,0a")
		$("#importantNap4").text("AOE:DE")
		$("#importantNap, #importantNap2, #importantNap3, #importantNap4").css("background-image", "url(Pictures/ui/style-03/info-box.gif)")
		$("#importantNap, #importantNap2, #importantNap3, #importantNap4").css("background-repeat", "repeat")
		$("#importantNap, #importantNap2, #importantNap3, #importantNap4").css("border-radius", "8px")
		$("#importantNap, #importantNap2, #importantNap3, #importantNap4").css("border-width", "4px")
		$("#importantNap, #importantNap2, #importantNap3, #importantNap4").css("border-style", "solid")
		$("#importantNap, #importantNap2, #importantNap3, #importantNap4").css("border-image", "url(Pictures/ui/style-03/bottom-ui.gif)30 round")
		$("#importantNap, #importantNap2, #importantNap3, #importantNap4").css("padding", "3px 5px 0px 5px")
		$("#importantNap, #importantNap2, #importantNap3, #importantNap4").css("height", "25px")
		$("#importantNap, #importantNap2, #importantNap3, #importantNap4").css("width", "auto")
		$("#importantNap, #importantNap2, #importantNap3, #importantNap4").css("min-width", "50px")
		$("#importantNap, #importantNap2, #importantNap3, #importantNap4").css("color", "#000")
		$("#importantNap, #importantNap2, #importantNap3, #importantNap4").css("font-weight", "bold")
		$("#importantNap, #importantNap2, #importantNap3, #importantNap4").css("font-size", "20px")
		$("#importantNap, #importantNap2, #importantNap3, #importantNap4").css("letter-spacing", "2px")
		$("#importantNap, #importantNap2, #importantNap3, #importantNap4").css("text-align", "center")
		$("#importantNap, #importantNap2, #importantNap3, #importantNap4").css("margin-top", "10px")
		//filter dark
		$("#importantNapBlack").text("None")
		$("#importantNap2Black").text("Upatch")
		$("#importantNap3Black").text("ROR 1,0a")
		$("#importantNap4Black").text("AOE:DE")
		$("#importantNapBlack, #importantNap2Black, #importantNap3Black, #importantNap4Black").css("background-image", "url(Pictures/ui/style-03/info-box-dark.gif)")
		$("#importantNapBlack, #importantNap2Black, #importantNap3Black, #importantNap4Black").css("background-repeat", "repeat")
		$("#importantNapBlack, #importantNap2Black, #importantNap3Black, #importantNap4Black").css("border-radius", "8px")
		$("#importantNapBlack, #importantNap2Black, #importantNap3Black, #importantNap4Black").css("border-width", "4px")
		$("#importantNapBlack, #importantNap2Black, #importantNap3Black, #importantNap4Black").css("border-style", "solid")
		$("#importantNapBlack, #importantNap2Black, #importantNap3Black, #importantNap4Black").css("border-image", "url(Pictures/ui/style-03/bottom-ui.gif)30 round")
		$("#importantNapBlack, #importantNap2Black, #importantNap3Black, #importantNap4Black").css("padding", "3px 5px 0px 5px")
		$("#importantNapBlack, #importantNap2Black, #importantNap3Black, #importantNap4Black").css("height", "25px")
		$("#importantNapBlack, #importantNap2Black, #importantNap3Black, #importantNap4Black").css("width", "auto")
		$("#importantNapBlack, #importantNap2Black, #importantNap3Black, #importantNap4Black").css("min-width", "50px")
		$("#importantNapBlack, #importantNap2Black, #importantNap3Black, #importantNap4Black").css("color", "#000")
		$("#importantNapBlack, #importantNap2Black, #importantNap3Black, #importantNap4Black").css("font-weight", "bold")
		$("#importantNapBlack, #importantNap2Black, #importantNap3Black, #importantNap4Black").css("font-size", "20px")
		$("#importantNapBlack, #importantNap2Black, #importantNap3Black, #importantNap4Black").css("letter-spacing", "2px")
		$("#importantNapBlack, #importantNap2Black, #importantNap3Black, #importantNap4Black").css("text-align", "center")
		$("#importantNapBlack, #importantNap2Black, #importantNap3Black, #importantNap4Black").css("margin-top", "10px")
	}
});
$(document).ready(function(){
	if(isMobile.any()){
		$("#importantNap, #importantNap2, #importantNap3, #importantNap4, #importantNapBlack, #importantNap2Black, #importantNap3Black, #importantNap4Black").css("margin-left", "calc(12% - 45px)")
		$("#importantNap, #importantNap2, #importantNap3, #importantNapBlack, #importantNap2Black, #importantNap3Black").css("margin-right", "calc(10% - 35px)")
	}
});


/* Brawl button */
function brawlButtonEffect(){
	for(var i = 0; i < civBigImageList.length; i++){
		var str_rep = civBigImageList[i].replace("upatch","brawl")
		civBigImageList[i] = str_rep
		var str_rep2 = civBigImageList[i].replace("ror","brawl")
		civBigImageList[i] = str_rep2
		var str_rep3 = civBigImageList[i].replace("aoe-de","brawl")
		civBigImageList[i] = str_rep3
	}
	$('.piece>img').each(function(){
		var $this = $(this);
		$this.attr('src',$this.attr('src').replace('upatch','brawl') .replace('ror','brawl') .replace('aoe-de','brawl')); 
	})
	$("#importantNap").hide();
	$("#importantNapBlack").show();
	$("#importantNap2").show();
	$("#importantNap2Black").hide();
	$("#importantNap3").show();
	$("#importantNap3Black").hide();
	$("#importantNap4").show();
	$("#importantNap4Black").hide();
	$("#popUpNoComparison").css("background-image", "url(Pictures/ui/style-03/info-box-dark.gif)");
	$("#popUpComaperedToUP").css("background-image", "url(Pictures/ui/style-03/info-box.gif)");
	$("#popUpComaperedToROR").css("background-image", "url(Pictures/ui/style-03/info-box.gif)");
	$("#popUpComaperedToDE").css("background-image", "url(Pictures/ui/style-03/info-box.gif)");
	
	$(".newCivilization").show();
	inIDEComparisonMode = false;
}

$(function(){ 
	$('#importantNap').click(function(){
		brawlButtonEffect()
	});
});
$(function(){ 
	$('#popUpNoComparison').click(function(){
		brawlButtonEffect()
		techImageClicked(popUpImageOnDisplay)
		preload(civBigImageList)
	});
});

/* Upatch button */
function uPatchButtonEffect(){
	for(var i = 0; i < civBigImageList.length; i++){
		var str_rep = civBigImageList[i].replace("brawl","upatch")
		civBigImageList[i] = str_rep
		var str_rep2 = civBigImageList[i].replace("ror","upatch")
		civBigImageList[i] = str_rep2
		var str_rep3 = civBigImageList[i].replace("aoe-de","upatch")
		civBigImageList[i] = str_rep3
	}
	$('.piece>img').each(function(){
		var $this = $(this);
		$this.attr('src',$this.attr('src').replace('brawl' ,'upatch') .replace('ror','upatch') .replace('aoe-de','upatch'));
	});
	$("#importantNap").show();
	$("#importantNapBlack").hide();
	$("#importantNap2").hide();
	$("#importantNap2Black").show();
	$("#importantNap3").show();
	$("#importantNap3Black").hide();
	$("#importantNap4").show();
	$("#importantNap4Black").hide();
	$("#popUpNoComparison").css("background-image", "url(Pictures/ui/style-03/info-box.gif)");
	$("#popUpComaperedToUP").css("background-image", "url(Pictures/ui/style-03/info-box-dark.gif)");
	$("#popUpComaperedToROR").css("background-image", "url(Pictures/ui/style-03/info-box.gif)");
	$("#popUpComaperedToDE").css("background-image", "url(Pictures/ui/style-03/info-box.gif)");
	
	$(".newCivilization").show();
	inIDEComparisonMode = false;
}
	
$(function(){
	$('#importantNap2').click(function(){
		uPatchButtonEffect()
	});
});
$(function(){
	$('#popUpComaperedToUP').click(function(){
		uPatchButtonEffect()
		techImageClicked(popUpImageOnDisplay)
		preload(civBigImageList)
	});
});

/* ROR button */
function RiseOfRomeButtonEffect(){
	for(var i = 0; i < civBigImageList.length; i++){
		var str_rep = civBigImageList[i].replace("upatch","ror")
		civBigImageList[i] = str_rep
		var str_rep2 = civBigImageList[i].replace("brawl","ror")
		civBigImageList[i] = str_rep2
		var str_rep3 = civBigImageList[i].replace("aoe-de","ror")
		civBigImageList[i] = str_rep3
	}
	$('.piece>img').each(function(){
		var $this = $(this);
		$this.attr('src',$this.attr('src').replace('upatch','ror') .replace('brawl','ror') .replace('aoe-de','ror'));
	});
	$("#importantNap").show();
	$("#importantNapBlack").hide();
	$("#importantNap2").show();
	$("#importantNap2Black").hide();
	$("#importantNap3").hide();
	$("#importantNap3Black").show();
	$("#importantNap4").show();
	$("#importantNap4Black").hide();
	$("#popUpNoComparison").css("background-image", "url(Pictures/ui/style-03/info-box.gif)");
	$("#popUpComaperedToUP").css("background-image", "url(Pictures/ui/style-03/info-box.gif)");
	$("#popUpComaperedToROR").css("background-image", "url(Pictures/ui/style-03/info-box-dark.gif)");
	$("#popUpComaperedToDE").css("background-image", "url(Pictures/ui/style-03/info-box.gif)");
	
	$(".newCivilization").show();
	inIDEComparisonMode = false;
}

$(function(){
	$('#importantNap3').click(function(){
		RiseOfRomeButtonEffect()
	});
});
$(function(){
	$('#popUpComaperedToROR').click(function(){
		RiseOfRomeButtonEffect()
		techImageClicked(popUpImageOnDisplay)
		preload(civBigImageList)
	});
});

/* DE button */
function definitiveEditionButtonEffect(){
	for(var i = 0; i < civBigImageList.length; i++){
		var str_rep = civBigImageList[i].replace("upatch","aoe-de")
		civBigImageList[i] = str_rep
		var str_rep2 = civBigImageList[i].replace("brawl","aoe-de")
		civBigImageList[i] = str_rep2
		var str_rep3 = civBigImageList[i].replace("ror","aoe-de")
		civBigImageList[i] = str_rep3
	}

	$('.piece>img').each(function(){
		var $this = $(this);
		$this.attr('src',$this.attr('src').replace('upatch','aoe-de') .replace('brawl','aoe-de') .replace('ror','aoe-de'));
	});

	$("#importantNap").show();
	$("#importantNapBlack").hide();
	$("#importantNap2").show();
	$("#importantNap2Black").hide();
	$("#importantNap3").show();
	$("#importantNap3Black").hide();
	$("#importantNap4").hide();
	$("#importantNap4Black").show();
	$("#popUpNoComparison").css("background-image", "url(Pictures/ui/style-03/info-box.gif)");
	$("#popUpComaperedToUP").css("background-image", "url(Pictures/ui/style-03/info-box.gif)");
	$("#popUpComaperedToROR").css("background-image", "url(Pictures/ui/style-03/info-box.gif)");
	$("#popUpComaperedToDE").css("background-image", "url(Pictures/ui/style-03/info-box-dark.gif)");
	
	$(".newCivilization").hide();
	inIDEComparisonMode = true;
}
$(function(){
	$('#importantNap4').click(function(){
		definitiveEditionButtonEffect()
	});
});
$(function(){
	$('#popUpComaperedToDE').click(function(){
		definitiveEditionButtonEffect()
		techImageClicked(popUpImageOnDisplay)
		preload(civBigImageList)
	});
});


// pop up images
var popUpImageOnDisplay = 0;
var rightSide;
var pieceHeight
var piece2Height
var headerHeight

$(document).ready(function(){
	pieceHeight = $(".piece:nth-of-type(3)").outerHeight() + 30  //doesn't take bottom margin into account. Maybe because last child has margin of 0
	console.log(pieceHeight + " pieceHeight before check")
	if(pieceHeight < 350){ //fails to load image size information some times
		pieceHeight = 1047
	}
	piece2Height = $(".piece2").outerHeight()
	headerHeight = $("header").outerHeight()
	console.log(pieceHeight + " pieceHeight")
	console.log(piece2Height + " piece2Height")
	console.log(headerHeight + " headerHeight")
});


//small images on click
$(document).ready(function(){
	$("#content .tech-image:eq(0)").click(function(){
		popUpImageOnDisplay = 0;
		techImageClicked(0);
		hideExtraInfo()
	});
});
$(document).ready(function(){
	$("#content .techTreeImage:eq(1)").click(function(){
		popUpImageOnDisplay = 1;
		techImageClicked(1);
		hideExtraInfo()
	});
});
$(document).ready(function(){
	$("#content .tech-image:eq(2)").click(function(){
		popUpImageOnDisplay = 2;
		techImageClicked(2);
		hideExtraInfo()
	});
});
$(document).ready(function(){
	$("#content .tech-image:eq(3)").click(function(){
		popUpImageOnDisplay = 3;
		techImageClicked(3)
		hideExtraInfo()
	});
});
$(document).ready(function(){
	$("#content .tech-image:eq(4)").click(function(){
		popUpImageOnDisplay = 4;
		techImageClicked(4)
		hideExtraInfo()
	});
});
$(document).ready(function(){
	$("#content .tech-image:eq(5)").click(function(){
		popUpImageOnDisplay = 5;
		techImageClicked(5)
		hideExtraInfo()
	});
});
$(document).ready(function(){
	$("#content .tech-image:eq(6)").click(function(){
		popUpImageOnDisplay = 6;
		techImageClicked(6)
		hideExtraInfo()
	});
});
$(document).ready(function(){
	$("#content .tech-image:eq(7)").click(function(){
		popUpImageOnDisplay = 7;
		techImageClicked(7)
		hideExtraInfo()
	});
});
$(document).ready(function(){
	$("#content .tech-image:eq(8)").click(function(){
		popUpImageOnDisplay = 8;
		techImageClicked(8)
		hideExtraInfo()
	});
});
$(document).ready(function(){
	$("#content .tech-image:eq(9)").click(function(){
		popUpImageOnDisplay = 9;
		techImageClicked(9)
		hideExtraInfo()
	});
});
$(document).ready(function(){
	$("#content .tech-image:eq(10)").click(function(){
		popUpImageOnDisplay = 10;
		techImageClicked(10)
		hideExtraInfo()
	});
});
$(document).ready(function(){
	$("#content .tech-image:eq(11)").click(function(){
		popUpImageOnDisplay = 11;
		techImageClicked(11)
		hideExtraInfo()
	});
});
$(document).ready(function(){
	$("#content .tech-image:eq(12)").click(function(){
		popUpImageOnDisplay = 12;
		techImageClicked(12)
		hideExtraInfo()
	});
});
$(document).ready(function(){
	$("#content .tech-image:eq(13)").click(function(){
		popUpImageOnDisplay = 13;
		techImageClicked(13)
		hideExtraInfo()
	});
});
$(document).ready(function(){
	$("#content .tech-image:eq(14)").click(function(){
		popUpImageOnDisplay = 14;
		techImageClicked(14)
		hideExtraInfo()
	});
});
$(document).ready(function(){
	$("#content .tech-image:eq(15)").click(function(){
		popUpImageOnDisplay = 15;
		techImageClicked(15);
		hideExtraInfo()
	});
});
$(document).ready(function(){
	$("#content .tech-image:eq(16)").click(function(){
		popUpImageOnDisplay = 16;
		techImageClicked(16);
		hideExtraInfo()
	});
});
$(document).ready(function(){
	$("#content .tech-image:eq(17)").click(function(){
		popUpImageOnDisplay = 17;
		techImageClicked(17);
		hideExtraInfo()
	});
});
$(document).ready(function(){
	$("#content .tech-image:eq(18)").click(function(){
		popUpImageOnDisplay = 18;
		techImageClicked(18);
		hideExtraInfo()
	});
});
$(document).ready(function(){
	$("#content .tech-image:eq(19)").click(function(){
		popUpImageOnDisplay = 19;
		techImageClicked(19);
		hideExtraInfo()
	});
});
$(document).ready(function(){
	$("#content .tech-image:eq(20)").click(function(){
		popUpImageOnDisplay = 20;
		techImageClicked(20);
		hideExtraInfo()
	});
});



//Exit/previous/next buttons actions
$(document).ready(function(){
	$("#popUpExitButton").click(function(){	
		extraInfoToggle(true)
		$("#civPopUpImages").css("visibility", "hidden");
		$.fn.widthReset();
		$.fn.locationOnExit();
	});
});
$.fn.widthReset = function(){
	showSideBar()
}
function showSideBar(){
	$(".piece").show()
}
$.fn.locationOnExit = function(){
	loactionToScrollDown = pieceHeight*popUpImageOnDisplay+piece2Height+headerHeight
	window.scrollTo(0, loactionToScrollDown);
	if (inIDEComparisonMode) {
		$(".newCivilization").hide();
	}
}

$(document).ready(function(){
	$("#popUpPreviousButton").click(function(){
		leftSideButton()
	});
});
function leftSideButton(){
	if(popUpImageOnDisplay > 0){
		popUpImageOnDisplay--;
		if (inIDEComparisonMode) {
			if (popUpImageOnDisplay == 2 || popUpImageOnDisplay == 11 || popUpImageOnDisplay == 15 || popUpImageOnDisplay == 18) {
				popUpImageOnDisplay--;
            }
        }
		techImageClicked(popUpImageOnDisplay)
	}
}

$(document).ready(function(){
	$("#popUpNextButton").click(function(){
		rightSideButton()
	});
});
function rightSideButton(){
	if(popUpImageOnDisplay < 19){
		popUpImageOnDisplay++
		if (inIDEComparisonMode) {
			if (popUpImageOnDisplay == 2 || popUpImageOnDisplay == 11 || popUpImageOnDisplay == 15 || popUpImageOnDisplay == 18) {
				popUpImageOnDisplay++;
			}
		}
		techImageClicked(popUpImageOnDisplay)
	}
}

function hideExtraInfo(){
	$("#popUpNoComparison, #popUpComaperedToUP, #popUpComaperedToROR, #popUpComaperedToDE").css("opacity", "0")
}

function techImageClicked(civSeenInPopup){
	$("#civPopUpImages").css("visibility", "visible")
	$("#techTreeImageBig").css({"background-image": "url(" + civBigImageList[civSeenInPopup] + ")"})
	hideSideBar()
	
	if (popUpImageOnDisplay == 19){
		$("#popUpNextButtonImage").css("opacity", overImageOpacity)
		$("#popUpNextButton").css("cursor", "default")
	}else{
		$("#popUpNextButton").css("cursor", "pointer")
		if(aspectRatio > imageAspect){
			$("#popUpNextButtonImage").css("opacity", overImageOpacity)
		}else{
		$("#popUpNextButtonImage").css("opacity", notOverImageOpacity)
		}
	}
	if(popUpImageOnDisplay == 0){
		$("#popUpPreviousButtonImage").css("opacity", overImageOpacity)
		$("#popUpPreviousButton").css("cursor", "default")
	}else{
		$("#popUpPreviousButton").css("cursor", "pointer")
		if(aspectRatio > imageAspect){
			$("#popUpPreviousButtonImage").css("opacity", overImageOpacity)
		}else{
		$("#popUpPreviousButtonImage").css("opacity", notOverImageOpacity)
		}
	}
}
function hideSideBar(){
	$(".piece").hide()	
}


var extraInformationHidden = true;

$(document).ready( function(){ 
	$("#techTreeAdditionalInfo").click(function(){
		extraInfoToggle(false)
	})
})

function extraInfoToggle(closeOnly){
	if(extraInformationHidden && !closeOnly){
		$("#popUpNoComparison, #popUpComaperedToUP, #popUpComaperedToROR, #popUpComaperedToDE").animate({
			 opacity: 1
		}, 200 );
		$("#techTreeAdditionalInfoImage").animate({ 
			"bottom": "+=3.5%",
			//"right": "+=1%",
			deg: 180 },{
				duration: 200,
				step: function(now) {
					$(this).css({ transform: 'rotate(' + now + 'deg)' });
			}
		});
		$("#techTreeAdditionalInfo").animate({ 
			"bottom": "+=3%"
		})
			
		extraInformationHidden = false;
	}else if(!extraInformationHidden){
		$("#popUpNoComparison, #popUpComaperedToUP, #popUpComaperedToROR, #popUpComaperedToDE").animate({
			 opacity: 0
		}, 200 );
		$("#techTreeAdditionalInfoImage").animate({ 
			"bottom": "-=3.5%",
			//"right": "-=1%",
			deg: 0 },{
				duration: 200,
				step: function(now) {
					$(this).css({ transform: 'rotate(' + now + 'deg)' });
			}
		});
		$("#techTreeAdditionalInfo").animate({ 
			"bottom": "-=3%"
		})
		extraInformationHidden = true;
	}
}


//button opacity effects
var aspectRatio;
var overImageOpacity = 0.12;
var notOverImageOpacity = 0.6; //basic opacity
var onHooverOpacity = 0.8;
var imageAspect = 1.15; // 0.914 width is static 1
var korkeus;
var leveys;

$(document).ready(function(){
	buttonOpacityOnstart()
	buttonBorderWidth()
})
$(window).resize(function(){
	buttonOpacityOnstart()
	buttonBorderWidth()
})

function buttonOpacityOnstart(){ 
	korkeus = $(window).height()
	leveys = $(window).width()
	aspectRatio = parseFloat(korkeus/leveys)
	if(aspectRatio > imageAspect ){
		$("#popUpPreviousButtonImage").css("opacity", overImageOpacity)
		$("#popUpNextButtonImage").css("opacity", overImageOpacity)
	}else{
		$("#popUpPreviousButtonImage").css("opacity", notOverImageOpacity)
		$("#popUpNextButtonImage").css("opacity", notOverImageOpacity)
	}
	$("#popUpExitButtonImage").css("opacity", notOverImageOpacity)
}
function buttonBorderWidth(){
	$("#popUpNoComparison, #popUpComaperedToUP, #popUpComaperedToROR, #popUpComaperedToDE").css({"border-width": parseInt((leveys)/110)})
	$("#popUpNoComparison, #popUpComaperedToUP, #popUpComaperedToROR, #popUpComaperedToDE").css({"font-size": parseInt((leveys)/90)})
}


//pop up buttons animations 
$(document).ready(function(){ $("#popUpExitButton")
	.mouseenter(function(){
		$("#popUpExitButtonImage").animate({
			 opacity: 1.0
		}, 200 );
		
	})
	.mouseleave(function() {
		$("#popUpExitButtonImage").animate({
			 opacity: notOverImageOpacity
		}, 200 );
	})
})

$(document).ready(function(){ $("#popUpPreviousButton")
	.mouseenter(function(){
		if(popUpImageOnDisplay > 0){
			$("#popUpPreviousButtonImage").animate({
				 opacity: onHooverOpacity
			}, 200 );
		}
	})
	.mouseleave(function() {
		if(aspectRatio > imageAspect ){
			$("#popUpPreviousButtonImage").animate({
				 opacity: overImageOpacity
			}, 200 );
		}else{
			$("#popUpPreviousButtonImage").animate({
				 opacity: notOverImageOpacity
			}, 200 );
		}
	})
})

$(document).ready(function(){ $("#popUpNextButton")
	.mouseenter(function(){
		if(popUpImageOnDisplay < 19){
			$("#popUpNextButtonImage").animate({
				 opacity: onHooverOpacity
			}, 200 );
		}
	})
	.mouseleave(function() {
		if(aspectRatio > imageAspect ){
			$("#popUpNextButtonImage").animate({
				 opacity: overImageOpacity
			}, 200 );
		}else{
			$("#popUpNextButtonImage").animate({
				 opacity: notOverImageOpacity
			}, 200 );
		}
	})
})


//buttons disbled on mobile
$(document).ready(function(){
	if(isMobile.any()){
		$("#popUpNoComparison, #popUpComaperedToUP, #popUpComaperedToROR, #popUpComaperedToDE, #popUpPreviousButton, #popUpNextButton, #rightSideCurve, #leftSideCurve, #techTreeAdditionalInfo, #techTreeAdditionalInfoImage").hide()
		$("#popUpExitButtonImage").css("opacity", 0.8)
		$("#popUpExitButtonImage").css("height", "10%")
		$("#popUpExitButtonImage").css("width", "10%")
		$("#popUpExitButton").css("height", "14%")
		$("#popUpExitButton").css("width", "14%")
	} 
})



//on swipe detector from
//https://www.kirupa.com/html5/detecting_touch_swipe_gestures.htm
$(document).ready(function(){
	var civContainer = document.querySelector("#civPopUpImages");
	
	civContainer.addEventListener("touchstart", startTouch, false);
	civContainer.addEventListener("touchmove", moveTouch, false);
	 
	// Swipe Up / Down / Left / Right
	var initialX = null;
	var initialY = null;
	 
	function startTouch(e) {
	  initialX = e.touches[0].clientX;
	  initialY = e.touches[0].clientY;
	};
	 
	function moveTouch(e) {
	  if (initialX === null) {
	    return;
	  }
	 
	  if (initialY === null) {
	    return;
	  }
	 
	  var currentX = e.touches[0].clientX;
	  var currentY = e.touches[0].clientY;
	 
	  var diffX = initialX - currentX;
	  var diffY = initialY - currentY;
	 
	  if (Math.abs(diffX) > Math.abs(diffY)) {
	    // sliding horizontally
	    if (diffX > 0) {
	      // swiped left
	      console.log("swiped left");
		  rightSideButton()
	    } else {
	      // swiped right
	      console.log("swiped right");
		  leftSideButton()
	    }  
	  } else {
	    // sliding vertically
	    if (diffY > 0) {
	      // swiped up
	      console.log("swiped up");
	    } else {
	      // swiped down
	      console.log("swiped down");
	    }  
	  }
	 
	  initialX = null;
	  initialY = null;
	   
	  e.preventDefault();
	};
})
	