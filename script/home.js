
$(document).ready(function(){
	if(isMobile.any()){
		$(".download").css("width", "224px")
		$(".download").css("height", "56px")
		$(".download").css("background-size", "224px 56px")
		$("div.otsikko").hide();
		$("div.piece").css("padding-top", "22px")
	}	
});

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
