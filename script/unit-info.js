// half invisibility
	/*
$(document).ready(function(){
	$(".invisible").mouseover(function(){
		$("#ground2").css("z-index", "2");
	});
});
$(document).ready(function(){
	$(".invisible").mouseout(function(){
		$("#ground2").css("z-index", "-2");
	});
});
	*/
var cataphractLow = false;
var woodworkingLow = false;
	
// info boxes visible/invisible
	//Water Units
		// dock
			$(document).ready(function(){
    			$("#dock-nap").click(function(){
    			    $("#dock").toggle();
    			});
			});
			$(document).ready(function(){
    			$("#dock").click(function(){
        			$("#dock").toggle();
    			});
			});
		// scout ship
			$(document).ready(function(){
				$("#scout-ship-nap").click(function(){
					$("#scout-ship").toggle();
    			});
			});
			$(document).ready(function(){
    			$("#scout-ship").click(function(){
    	    		$("#scout-ship").toggle();
				});
			});
		//war galley
			$(document).ready(function(){
    			$("#war-galley-nap").click(function(){
    		    	$("#war-galley").toggle();
				});
			});
			$(document).ready(function(){
    			$("#war-galley").click(function(){
		 			$("#war-galley").toggle();
				});
			});
		//trieme
			$(document).ready(function(){
    			$("#trieme-nap").click(function(){
		 			$("#trieme").toggle();
				});
			});
			$(document).ready(function(){
    			$("#trieme").click(function(){
					$("#trieme").toggle();
				});
			});
		//juggernaught
			$(document).ready(function(){
    			$("#juggernaught-nap").click(function(){
		 			$("#juggernaught").toggle();
				});
			});
			$(document).ready(function(){
    			$("#juggernaught").click(function(){
					$("#juggernaught").toggle();
				});
			});
		//fire-galley
			$(document).ready(function(){
    			$("#fire-galley-nap").click(function(){
					$("#fire-galley").toggle();
				});
			});
			$(document).ready(function(){
				$("#fire-galley").click(function(){
					$("#fire-galley").toggle();
				});
			});
		//catapult-trieme
			$(document).ready(function(){
    			$("#catapult-trieme-nap").click(function(){
					$("#catapult-trieme").toggle();
				});
			});
			$(document).ready(function(){
				$("#catapult-trieme").click(function(){
					$("#catapult-trieme").toggle();
				});
			});
		//fishing-boat
			$(document).ready(function(){
    			$("#fishing-boat-nap").click(function(){
					$("#fishing-boat").toggle();
				});
			});
			$(document).ready(function(){
				$("#fishing-boat").click(function(){
					$("#fishing-boat").toggle();
				});
			});
		//fishing-ship
			$(document).ready(function(){
    			$("#fishing-ship-nap").click(function(){
					$("#fishing-ship").toggle();
				});
			});
			$(document).ready(function(){
				$("#fishing-ship").click(function(){
					$("#fishing-ship").toggle();
				});
			});
		//trade-boat
			$(document).ready(function(){
    			$("#trade-boat-nap").click(function(){
					$("#trade-boat").toggle();
				});
			});
			$(document).ready(function(){
				$("#trade-boat").click(function(){
					$("#trade-boat").toggle();
				});
			});
		//merchant-ship
			$(document).ready(function(){
    			$("#merchant-ship-nap").click(function(){
					$("#merchant-ship").toggle();
				});
			});
			$(document).ready(function(){
				$("#merchant-ship").click(function(){
					$("#merchant-ship").toggle();
				});
			});
		//light-transport
			$(document).ready(function(){
    			$("#light-transport-nap").click(function(){
					$("#light-transport").toggle();
				});
			});
			$(document).ready(function(){
				$("#light-transport").click(function(){
					$("#light-transport").toggle();
				});
			});	
		//heavy-transport
			$(document).ready(function(){
    			$("#heavy-transport-nap").click(function(){
					$("#heavy-transport").toggle();
				});
			});
			$(document).ready(function(){
				$("#heavy-transport").click(function(){
					$("#heavy-transport").toggle();
				});
			});
	//Granary technologies
		//granary
			$(document).ready(function(){
    			$("#granary-nap").click(function(){
					$("#granary").toggle();
				});
			});
			$(document).ready(function(){
				$("#granary").click(function(){
					$("#granary").toggle();
				});
			});
		//creel
			$(document).ready(function(){
				$("#creel-nap").click(function(){
					$("#creel").toggle();
				});
			});
			$(document).ready(function(){
				$("#creel").click(function(){
					$("#creel").toggle();
				});
			})
		//watch-tower
			$(document).ready(function(){
    			$("#watch-tower-nap").click(function(){
					$("#watch-tower").toggle();
				});
			});
			$(document).ready(function(){
				$("#watch-tower").click(function(){
					$("#watch-tower").toggle();
				});
			});
		//sentry-tower
			$(document).ready(function(){
    			$("#sentry-tower-nap").click(function(){
					$("#sentry-tower").toggle();
				});
			});
			$(document).ready(function(){
				$("#sentry-tower").click(function(){
					$("#sentry-tower").toggle();
				});
			});
		//guard-tower
			$(document).ready(function(){
    			$("#guard-tower-nap").click(function(){
					$("#guard-tower").toggle();
				});
			});
			$(document).ready(function(){
				$("#guard-tower").click(function(){
					$("#guard-tower").toggle();
				});
			});
		//ballista-tower
			$(document).ready(function(){
    			$("#ballista-tower-nap").click(function(){
					$("#ballista-tower").toggle();
				});
			});
			$(document).ready(function(){
				$("#ballista-tower").click(function(){
					$("#ballista-tower").toggle();
				});
			});
		//small-wall
			$(document).ready(function(){
    			$("#small-wall-nap").click(function(){
					$("#small-wall").toggle();
				});
			});
			$(document).ready(function(){
				$("#small-wall").click(function(){
					$("#small-wall").toggle();
				});
			})
		//medium-wall
			$(document).ready(function(){
    			$("#medium-wall-nap").click(function(){
					$("#medium-wall").toggle();
				});
			});
			$(document).ready(function(){
				$("#medium-wall").click(function(){
					$("#medium-wall").toggle();
				});
			})
		//big-wall
			$(document).ready(function(){
    			$("#big-wall-nap").click(function(){
					$("#big-wall").toggle();
				});
			});
			$(document).ready(function(){
				$("#big-wall").click(function(){
					$("#big-wall").toggle();
				});
			})
	//temple tech
		//temple
			$(document).ready(function(){
    			$("#temple-nap").click(function(){
					$("#temple").toggle();
				});
			});
			$(document).ready(function(){
				$("#temple").click(function(){
					$("#temple").toggle();
				});
			})
		//priest
			$(document).ready(function(){
    			$("#priest-nap").click(function(){
					$("#priest").toggle();
				});
			});
			$(document).ready(function(){
				$("#priest").click(function(){
					$("#priest").toggle();
				});
			})
		//astrology
			$(document).ready(function(){
    			$("#astrology-nap").click(function(){
					$("#astrology").toggle();
				});
			});
			$(document).ready(function(){
				$("#astrology").click(function(){
					$("#astrology").toggle();
				});
			})
		//medicine
			$(document).ready(function(){
    			$("#medicine-nap").click(function(){
					if ( !$("#martyrdom").is(":hidden") ){
						$("#medicine").css("top", "1192px");
					}else{
						$("#medicine").css("top", "1167px");
					}
					$("#medicine").toggle();
				});
			});
			$(document).ready(function(){
				$("#medicine").click(function(){
					$("#medicine").toggle();
				});
			})
		//fanaticism
			$(document).ready(function(){
    			$("#fanaticism-nap").click(function(){
					$("#fanaticism").toggle();
				});
			});
			$(document).ready(function(){
				$("#fanaticism").click(function(){
					$("#fanaticism").toggle();
				});
			})
		//mysticism
			$(document).ready(function(){
    			$("#mysticism-nap").click(function(){
					$("#mysticism").toggle();
				});
			});
			$(document).ready(function(){
				$("#mysticism").click(function(){
					$("#mysticism").toggle();
				});
			})
		//afterlife
			$(document).ready(function(){
    			$("#afterlife-nap").click(function(){
					$("#afterlife").toggle();
				});
			});
			$(document).ready(function(){
				$("#afterlife").click(function(){
					$("#afterlife").toggle();
				});
			})
		//jihad
			$(document).ready(function(){
    			$("#jihad-nap").click(function(){
					$("#jihad").toggle();
				});
			});
			$(document).ready(function(){
				$("#jihad").click(function(){
					$("#jihad").toggle();
				});
			})
		//Polytheism
			$(document).ready(function(){
    			$("#polytheism-nap").click(function(){
					$("#polytheism").toggle();
				});
			});
			$(document).ready(function(){
				$("#polytheism").click(function(){
					$("#polytheism").toggle();
				});
			})
		//Monotheism
			$(document).ready(function(){
    			$("#monotheism-nap").click(function(){
					$("#monotheism").toggle();
				});
			});
			$(document).ready(function(){
				$("#monotheism").click(function(){
					$("#monotheism").toggle();
				});
			})
		//martyrdom
			$(document).ready(function(){
    			$("#martyrdom-nap").click(function(){
					$("#martyrdom").toggle();
				});
			});
			$(document).ready(function(){
				$("#martyrdom").click(function(){
					$("#martyrdom").toggle();
				});
			})
	//Market technologies
		//Farm
			$(document).ready(function(){
    			$("#farm-nap").click(function(){
					$("#farm").toggle();
				});
			});
			$(document).ready(function(){
				$("#farm").click(function(){
					$("#farm").toggle();
				});
			})
		//Market
			$(document).ready(function(){
    			$("#market-nap").click(function(){
					/*
					if ( !$("#farm").is(":hidden") ){
						$("#market").css("top", "958px");
					}else{
						$("#market").css("top", "943px");
					}*/
					$("#market").toggle();
				});
			});
			$(document).ready(function(){
				$("#market").click(function(){
					$("#market").toggle();
				});
			})
		//Wheel
			$(document).ready(function(){
    			$("#wheel-nap").click(function(){
					$("#wheel").toggle();
				});
			});
			$(document).ready(function(){
				$("#wheel").click(function(){
					$("#wheel").toggle();
				});
			})
		//domestication
			$(document).ready(function(){
    			$("#domestication-nap").click(function(){
					$("#domestication").toggle();
				});
			});
			$(document).ready(function(){
				$("#domestication").click(function(){
					$("#domestication").toggle();
					if ($("#woodworking").is(":hidden")){
						woodworkingLow = false;
					}
				});
			})
		//Plow
			$(document).ready(function(){
    			$("#plow-nap").click(function(){
					/*
					if ( !$("#wheel").is(":hidden") ){
						$("#plow").css("top", "1035px");
					}else{
						$("#plow").css("top", "1009px");
					}*/
					$("#plow").toggle();
				});
			});
			$(document).ready(function(){
				$("#plow").click(function(){
					$("#plow").toggle();
				});
			})
		//irrigation
			$(document).ready(function(){
    			$("#irrigation-nap").click(function(){
					$("#irrigation").toggle();
				});
			});
			$(document).ready(function(){
				$("#irrigation").click(function(){
					$("#irrigation").toggle();
				});
			})
		//goldmining
			$(document).ready(function(){
    			$("#goldmining-nap").click(function(){
					$("#goldmining").toggle();
				});
			});
			$(document).ready(function(){
				$("#goldmining").click(function(){
					$("#goldmining").toggle();
				});
			})
		//coinage
			$(document).ready(function(){
    			$("#coinage-nap").click(function(){
					/*if ( !$("#irrigation").is(":hidden") ){
						$("#coinage").css("top", "1085px");
					}else{
						$("#coinage").css("top", "1068px");
					}*/
					$("#coinage").toggle();
				});
			});
			$(document).ready(function(){
				$("#coinage").click(function(){
					$("#coinage").toggle();
				});
			})
		//stonemining
			$(document).ready(function(){
    			$("#stonemining-nap").click(function(){
					if ( woodworkingLow ){
						$("#stonemining").css("top", "836px");
					}else{
						$("#stonemining").css("top", "826px");
					}
					$("#stonemining").toggle();
				});
			});
			$(document).ready(function(){
				$("#stonemining").click(function(){
					$("#stonemining").toggle();
				});
			})
		//siegecraft
			$(document).ready(function(){
    			$("#siegecraft-nap").click(function(){
					
					if (!$("#artisanship").is(":hidden")){
						$("#siegecraft").css("top", "818px");
					}else{
						$("#siegecraft").css("top", "782px");
					}
					
					$("#siegecraft").toggle();
				});
			});
			$(document).ready(function(){
				$("#siegecraft").click(function(){
					$("#siegecraft").toggle();
				});
			})
		//woodworking
			$(document).ready(function(){
    			$("#woodworking-nap").click(function(){
					if (!$("#domestication").is(":hidden")){
						$("#woodworking").css("top", "790px");
						woodworkingLow = true;
					}else{
						$("#woodworking").css("top", "772px");
						woodworkingLow = false;
					}
					$("#woodworking").toggle();
					if ($("#woodworking").is(":hidden")){
						woodworkingLow = false;
					}
				});
			});
			$(document).ready(function(){
				$("#woodworking").click(function(){
					$("#woodworking").toggle();
					if ($("#woodworking").is(":hidden")){
						woodworkingLow = false;
					}
				});
			})
		//artisanship
			$(document).ready(function(){
    			$("#artisanship-nap").click(function(){
					$("#artisanship").toggle();
				});
			});
			$(document).ready(function(){
				$("#artisanship").click(function(){
					$("#artisanship").toggle();
				});
			})
		//craftsmanship
			$(document).ready(function(){
    			$("#craftsmanship-nap").click(function(){
					if (!$("#irrigation").is(":hidden")){
						$("#craftsmanship").css("top", "792px");
						woodworkingLow = true;
					}else{
						$("#craftsmanship").css("top", "772px");
						woodworkingLow = false;
					}
					$("#craftsmanship").toggle();
				});
			});
			$(document).ready(function(){
				$("#craftsmanship").click(function(){
					$("#craftsmanship").toggle();
				});
			})
		//pottery
			$(document).ready(function(){
    			$("#pottery-nap").click(function(){
					$("#pottery").toggle();
				});
			});
			$(document).ready(function(){
				$("#pottery").click(function(){
					$("#pottery").toggle();
				});
			})
	//governmentcenter
		//governmentcenter
			$(document).ready(function(){
    			$("#governmentcenter-nap").click(function(){
					$("#governmentcenter").toggle();
				});
			});
			$(document).ready(function(){
				$("#governmentcenter").click(function(){
					$("#governmentcenter").toggle();
				});
			})
		//towncenter
			$(document).ready(function(){
    			$("#towncenter-nap").click(function(){
					/*
					if ( !$("#governmentcenter").is(":hidden") ){
						$("#towncenter").css("top", "1366px");
					}else{
						$("#towncenter").css("top", "1345px");
					}*/
					$("#towncenter").toggle();
				});
			});
			$(document).ready(function(){
				$("#towncenter").click(function(){
					$("#towncenter").toggle();
				});
			})
		//logistics
			$(document).ready(function(){
    			$("#logistics-nap").click(function(){
					$("#logistics").toggle();
				});
			});
			$(document).ready(function(){
				$("#logistics").click(function(){
					$("#logistics").toggle();
				});
			})
		//architecture
			$(document).ready(function(){
    			$("#architecture-nap").click(function(){
					$("#architecture").toggle();
				});
			});
			$(document).ready(function(){
				$("#architecture").click(function(){
					$("#architecture").toggle();
				});
			})
		//engineering
			$(document).ready(function(){
    			$("#engineering-nap").click(function(){
					$("#engineering").toggle();
				});
			});
			$(document).ready(function(){
				$("#engineering").click(function(){
					$("#engineering").toggle();
				});
			})
		//alchemy
			$(document).ready(function(){
    			$("#alchemy-nap").click(function(){
					if ( !$("#aristocracy").is(":hidden") ){
						$("#alchemy").css("top", "1765px");
					}else{
						$("#alchemy").css("top", "1740px");
					}
					$("#alchemy").toggle();
				});
			});
			$(document).ready(function(){
				$("#alchemy").click(function(){
					$("#alchemy").toggle();
				});
			})
		//ballistics
			$(document).ready(function(){
    			$("#ballistics-nap").click(function(){
					$("#ballistics").toggle();
				});
			});
			$(document).ready(function(){
				$("#ballistics").click(function(){
					$("#ballistics").toggle();
				});
			})
		//nobility
			$(document).ready(function(){
    			$("#nobility-nap").click(function(){
					$("#nobility").toggle();
				});
			});
			$(document).ready(function(){
				$("#nobility").click(function(){
					$("#nobility").toggle();
				});
			})
		//aristocracy
			$(document).ready(function(){
    			$("#aristocracy-nap").click(function(){
					$("#aristocracy").toggle();
				});
			});
			$(document).ready(function(){
				$("#aristocracy").click(function(){
					$("#aristocracy").toggle();
				});
			})
		//uniqueTechnology
			$(document).ready(function(){
				$("#uniqueTechnology-nap").click(function(){
					$("#uniqueTechnology").toggle();
				});
			});
			$(document).ready(function(){
				$("#uniqueTechnology").click(function(){
					$("#uniqueTechnology").toggle();
				});
			})
		//mathematics
			$(document).ready(function(){
				$("#mathematics-nap").click(function(){
					$("#mathematics").toggle();
				});
			});
			$(document).ready(function(){
				$("#mathematics").click(function(){
					$("#mathematics").toggle();
				});
			})
		//house
			$(document).ready(function(){
    			$("#house-nap").click(function(){
					$("#house").toggle();
				});
			});
			$(document).ready(function(){
				$("#house").click(function(){
					$("#house").toggle();
				});
			})
		//towncenter2
			$(document).ready(function(){
    			$("#towncenter2-nap").click(function(){
					$("#towncenter2").toggle();
				});
			});
			$(document).ready(function(){
				$("#towncenter2").click(function(){
					$("#towncenter2").toggle();
				});
			})
		//villager
			$(document).ready(function(){
    			$("#villager-nap").click(function(){
					$("#villager").toggle();
				});
			});
			$(document).ready(function(){
				$("#villager").click(function(){
					$("#villager").toggle();
				});
			})
		//Linen Cloth
			$(document).ready(function(){
    			$("#linencloth-nap").click(function(){
					$("#linencloth").toggle();
				});
			});
			$(document).ready(function(){
				$("#linencloth").click(function(){
					$("#linencloth").toggle();
				});
			})
		/*Akinaka
			$(document).ready(function(){
    			$("#akinaka-nap").click(function(){
					$("#akinaka").toggle();
				});
			});
			$(document).ready(function(){
				$("#akinaka").click(function(){
					$("#akinaka").toggle();
				});
			}) */
		//toolage
			$(document).ready(function(){
    			$("#toolage-nap").click(function(){
					$("#toolage").toggle();
				});
			});
			$(document).ready(function(){
				$("#toolage").click(function(){
					$("#toolage").toggle();
				});
			})
		//bronzeage
			$(document).ready(function(){
    			$("#bronzeage-nap").click(function(){
					$("#bronzeage").toggle();
				});
			});
			$(document).ready(function(){
				$("#bronzeage").click(function(){
					$("#bronzeage").toggle();
				});
			})
		//ironage
			$(document).ready(function(){
    			$("#ironage-nap").click(function(){
					$("#ironage").toggle();
				});
			});
			$(document).ready(function(){
				$("#ironage").click(function(){
					$("#ironage").toggle();
				});
			})
		//wonder
			$(document).ready(function(){
    			$("#wonder-nap").click(function(){
					$("#wonder").toggle();
				});
			});
			$(document).ready(function(){
				$("#wonder").click(function(){
					$("#wonder").toggle();
				});
			})
	//Storage Pit
		//storagepit
			$(document).ready(function(){
    			$("#storagepit-nap").click(function(){
					$("#storagepit").toggle();
				});
			});
			$(document).ready(function(){
				$("#storagepit").click(function(){
					$("#storagepit").toggle();
				});
			})
		//leathercavalry
			$(document).ready(function(){
    			$("#leathercavalry-nap").click(function(){
					$("#leathercavalry").toggle();
				});
			});
			$(document).ready(function(){
				$("#leathercavalry").click(function(){
					$("#leathercavalry").toggle();
				});
			})
		//scalecavalry
			$(document).ready(function(){
    			$("#scalecavalry-nap").click(function(){
					$("#scalecavalry").toggle();
				});
			});
			$(document).ready(function(){
				$("#scalecavalry").click(function(){
					$("#scalecavalry").toggle();
				});
			})
		//chaincavalry
			$(document).ready(function(){
    			$("#chaincavalry-nap").click(function(){
					$("#chaincavalry").toggle();
				});
			});
			$(document).ready(function(){
				$("#chaincavalry").click(function(){
					$("#chaincavalry").toggle();
				});
			})
		//leatherarcher
			$(document).ready(function(){
    			$("#leatherarcher-nap").click(function(){
					$("#leatherarcher").toggle();
				});
			});
			$(document).ready(function(){
				$("#leatherarcher").click(function(){
					$("#leatherarcher").toggle();
				});
			})
		//scalearcher
			$(document).ready(function(){
    			$("#scalearcher-nap").click(function(){
					$("#scalearcher").toggle();
				});
			});
			$(document).ready(function(){
				$("#scalearcher").click(function(){
					$("#scalearcher").toggle();
				});
			})
		//chainarcher
			$(document).ready(function(){
    			$("#chainarcher-nap").click(function(){
					$("#chainarcher").toggle();
				});
			});
			$(document).ready(function(){
				$("#chainarcher").click(function(){
					$("#chainarcher").toggle();
				});
			})
		//leathermelee
			$(document).ready(function(){
    			$("#leathermelee-nap").click(function(){
					$("#leathermelee").toggle();
				});
			});
			$(document).ready(function(){
				$("#leathermelee").click(function(){
					$("#leathermelee").toggle();
				});
			})
		//scalemelee
			$(document).ready(function(){
    			$("#scalemelee-nap").click(function(){
					$("#scalemelee").toggle();
				});
			});
			$(document).ready(function(){
				$("#scalemelee").click(function(){
					$("#scalemelee").toggle();
				});
			})
		//chainmelee
			$(document).ready(function(){
    			$("#chainmelee-nap").click(function(){
					$("#chainmelee").toggle();
				});
			});
			$(document).ready(function(){
				$("#chainmelee").click(function(){
					$("#chainmelee").toggle();
				});
			})
		//toolworking
			$(document).ready(function(){
    			$("#toolworking-nap").click(function(){
					$("#toolworking").toggle();
				});
			});
			$(document).ready(function(){
				$("#toolworking").click(function(){
					$("#toolworking").toggle();
				});
			})
		//metalworking
			$(document).ready(function(){
    			$("#metalworking-nap").click(function(){
					$("#metalworking").toggle();
				});
			});
			$(document).ready(function(){
				$("#metalworking").click(function(){
					$("#metalworking").toggle();
				});
			})
		//metallurgy
			$(document).ready(function(){
    			
				$("#metallurgy-nap").click(function(){
					/*	
					if ( !$("#chainmelee").is(":hidden") ){
						$("#metallurgy").css("top", "1760px");
					}else{
						$("#metallurgy").css("top", "1725px");
					}
					*/
					$("#metallurgy").toggle();
				});
			});
			$(document).ready(function(){
				$("#metallurgy").click(function(){
					$("#metallurgy").toggle();
				});
			})
		//bronzeshield
			$(document).ready(function(){
    			$("#bronzeshield-nap").click(function(){
					$("#bronzeshield").toggle();
				});
			});
			$(document).ready(function(){
				$("#bronzeshield").click(function(){
					$("#bronzeshield").toggle();
				});
			})
		//ironshield
			$(document).ready(function(){
    			$("#ironshield-nap").click(function(){
					$("#ironshield").toggle();
				});
			});
			$(document).ready(function(){
				$("#ironshield").click(function(){
					$("#ironshield").toggle();
				});
			})
		//towershield
			$(document).ready(function(){
    			$("#towershield-nap").click(function(){
					$("#towershield").toggle();
				});
			});
			$(document).ready(function(){
				$("#towershield").click(function(){
					$("#towershield").toggle();
				});
			})
	//Academy-units
		//Academy
			$(document).ready(function(){
    			$("#academy-nap").click(function(){
					$("#academy").toggle();
				});
			});
			$(document).ready(function(){
				$("#academy").click(function(){
					$("#academy").toggle();
				});
			})
		//hoplite
			$(document).ready(function(){
    			$("#hoplite-nap").click(function(){
					/*
					if ( !$("#academy").is(":hidden") ){
						$("#hoplite").css("top", "1955px");
					}else{
						$("#hoplite").css("top", "1945px");
					}*/
					$("#hoplite").toggle();
				});
			});
			$(document).ready(function(){
				$("#hoplite").click(function(){
					$("#hoplite").toggle();
				});
			})
		//phalanx
			$(document).ready(function(){
    			$("#phalanx-nap").click(function(){
					$("#phalanx").toggle();
				});
			});
			$(document).ready(function(){
				$("#phalanx").click(function(){
					$("#phalanx").toggle();
				});
			})
		//centurion
			$(document).ready(function(){
    			$("#centurion-nap").click(function(){
					$("#centurion").toggle();
				});
			});
			$(document).ready(function(){
				$("#centurion").click(function(){
					$("#centurion").toggle();
				});
			})
	//Stable units
		//stable
			$(document).ready(function(){
    			$("#stable-nap").click(function(){
					$("#stable").toggle();
				});
			});
			$(document).ready(function(){
				$("#stable").click(function(){
					$("#stable").toggle();
				});
			})
		//scout
			$(document).ready(function(){
    			$("#scout-nap").click(function(){
					$("#scout").toggle();
				});
			});
			$(document).ready(function(){
				$("#scout").click(function(){
					$("#scout").toggle();
				});
			})
		//chariot
			$(document).ready(function(){
    			$("#chariot-nap").click(function(){
					$("#chariot").toggle();
				});
			});
			$(document).ready(function(){
				$("#chariot").click(function(){
					$("#chariot").toggle();
				});
			})
		//scythe
			$(document).ready(function(){
    			$("#scythe-nap").click(function(){
					$("#scythe").toggle();
				});
			});
			$(document).ready(function(){
				$("#scythe").click(function(){
					$("#scythe").toggle();
				});
			})
		//cavalry
			$(document).ready(function(){
    			$("#cavalry-nap").click(function(){
					/*
					if ( !$("#chariot").is(":hidden") ){
						$("#cavalry").css("top", "2065px");
					}else{
						$("#cavalry").css("top", "2051px");
					}
					*/
					$("#cavalry").toggle();
				});
			});
			$(document).ready(function(){
				$("#cavalry").click(function(){
					$("#cavalry").toggle();
				});
			})
		//heavycav
			$(document).ready(function(){
    			$("#heavycav-nap").click(function(){
					$("#heavycav").toggle();
				});
			});
			$(document).ready(function(){
				$("#heavycav").click(function(){
					$("#heavycav").toggle();
				});
			})
		//cataphract
			$(document).ready(function(){
    			$("#cataphract-nap").click(function(){
					
					if ( !$("#scythe").is(":hidden") ){
						$("#cataphract").css("top", "2073px");
					}else{
						$("#cataphract").css("top", "2061px");
					}
					
					$("#cataphract").toggle();
				});
			});
			$(document).ready(function(){
				$("#cataphract").click(function(){
					$("#cataphract").toggle();
					cataphractLow = false;
				});
			})
		//warelephant
			$(document).ready(function(){
    			$("#warelephant-nap").click(function(){
					$("#warelephant").toggle();
				});
			});
			$(document).ready(function(){
				$("#warelephant").click(function(){
					$("#warelephant").toggle();
				});
			})
		//armorele	
			$(document).ready(function(){
    			$("#armorele-nap").click(function(){
					/*
					if (cataphractLow){
						$("#armorele").css("top", "2107px");
					}else{
						$("#armorele").css("top", "2107px");
					}
					*/
					$("#armorele").toggle();
				});
			});
			$(document).ready(function(){
				$("#armorele").click(function(){
					$("#armorele").toggle();
				});
			})
		//camel
			$(document).ready(function(){
    			$("#camel-nap").click(function(){
					$("#camel").toggle();
				});
			});
			$(document).ready(function(){
				$("#camel").click(function(){
					$("#camel").toggle();
				});
			})
		//heavy camel
			$(document).ready(function(){
				$("#heavyCamel-nap").click(function(){
					$("#heavyCamel").toggle();
				});
			});
			$(document).ready(function(){
				$("#heavyCamel").click(function(){
					$("#heavyCamel").toggle();
				});
			})
	//Archery units
		//archery
			$(document).ready(function(){
    			$("#archery-nap").click(function(){
					$("#archery").toggle();
				});
			});
			$(document).ready(function(){
				$("#archery").click(function(){
					$("#archery").toggle();
				});
			})
		//crossBow
			$(document).ready(function(){
    			$("#crossBow-nap").click(function(){
					$("#crossBow").toggle();
				});
			});
			$(document).ready(function(){
				$("#crossBow").click(function(){
					$("#crossBow").toggle();
				});
			})
		//improvedbow
			$(document).ready(function(){
    			$("#improvedbow-nap").click(function(){
					/*
					if ( !$("#chararch").is(":hidden") ){
						$("#improvedbow").css("top", "2291px");
					}else{
						$("#improvedbow").css("top", "2281px");
					}*/
					$("#improvedbow").toggle();
				});
			});
			$(document).ready(function(){
				$("#improvedbow").click(function(){
					$("#improvedbow").toggle();
				});
			})
		//compie
			$(document).ready(function(){
    			$("#compie-nap").click(function(){
					$("#compie").toggle();
				});
			});
			$(document).ready(function(){
				$("#compie").click(function(){
					$("#compie").toggle();
				});
			})
		//recurvebow
			$(document).ready(function(){
    			$("#recurvebow-nap").click(function(){
					$("#recurvebow").toggle();
				});
			});
			$(document).ready(function(){
				$("#recurvebow").click(function(){
					$("#recurvebow").toggle();
				});
			})
		//bowman
			$(document).ready(function(){
    			$("#bowman-nap").click(function(){
					$("#bowman").toggle();
				});
			});
			$(document).ready(function(){
				$("#bowman").click(function(){
					$("#bowman").toggle();
				});
			})
		//chararch
			$(document).ready(function(){
    			$("#chararch-nap").click(function(){
					$("#chararch").toggle();
				});
			});
			$(document).ready(function(){
				$("#chararch").click(function(){
					$("#chararch").toggle();
				});
			})
		//horsearcher
			$(document).ready(function(){
    			$("#horsearcher-nap").click(function(){
					$("#horsearcher").toggle();
				});
			});
			$(document).ready(function(){
				$("#horsearcher").click(function(){
					$("#horsearcher").toggle();
				});
			})
		//elearcher
			$(document).ready(function(){
    			$("#elearcher-nap").click(function(){
					$("#elearcher").toggle();
				});
			});
			$(document).ready(function(){
				$("#elearcher").click(function(){
					$("#elearcher").toggle();
				});
			})
		//heavhorsearch
			$(document).ready(function(){
    			$("#heavhorsearch-nap").click(function(){
					/*
					if ( !$("#recurvebow").is(":hidden") ){
						$("#heavhorsearch").css("top", "2325px");
					}else{
						$("#heavhorsearch").css("top", "2310px");
					}
					*/
					$("#heavhorsearch").toggle();
				});
			});
			$(document).ready(function(){
				$("#heavhorsearch").click(function(){
					$("#heavhorsearch").toggle();
				});
			})
	//siege workskhop
		//siegeshop
			$(document).ready(function(){
    			$("#siegeshop-nap").click(function(){
					$("#siegeshop").toggle();
				});
			});
			$(document).ready(function(){
				$("#siegeshop").click(function(){
					$("#siegeshop").toggle();
				});
			})
		//stonethrow
			$(document).ready(function(){
    			$("#stonethrow-nap").click(function(){
					$("#stonethrow").toggle();
				});
			});
			$(document).ready(function(){
				$("#stonethrow").click(function(){
					$("#stonethrow").toggle();
				});
			})
		//ballista
			$(document).ready(function(){
    			$("#ballista-nap").click(function(){
					$("#ballista").toggle();
				});
			});
			$(document).ready(function(){
				$("#ballista").click(function(){
					$("#ballista").toggle();
				});
			})
		//helepolis
			$(document).ready(function(){
    			$("#helepolis-nap").click(function(){
					$("#helepolis").toggle();
				});
			});
			$(document).ready(function(){
				$("#helepolis").click(function(){
					$("#helepolis").toggle();
				});
			})
		//cat
			$(document).ready(function(){
    			$("#cat-nap").click(function(){
					$("#cat").toggle();
				});
			});
			$(document).ready(function(){
				$("#cat").click(function(){
					$("#cat").toggle();
				});
			})
		//heavycat
				$(document).ready(function(){
    			$("#heavycat-nap").click(function(){
					
					if ( !$("#helepolis").is(":hidden") ){
						$("#heavycat").css("top", "2533px");
					}else{
						$("#heavycat").css("top", "2495px");
					}
					
					$("#heavycat").toggle();
				});
			});
			$(document).ready(function(){
				$("#heavycat").click(function(){
					$("#heavycat").toggle();
				});
			})
	//Barrack units
		//barrack
			$(document).ready(function(){
    			$("#barrack-nap").click(function(){
					$("#barrack").toggle();
				});
			});
			$(document).ready(function(){
				$("#barrack").click(function(){
					$("#barrack").toggle();
				});
			})
		//shortsword
			$(document).ready(function(){
    			$("#shortsword-nap").click(function(){
					$("#shortsword").toggle();
				});
			});
			$(document).ready(function(){
				$("#shortsword").click(function(){
					$("#shortsword").toggle();
				});
			})
		//broadsword
			$(document).ready(function(){
    			$("#broadsword-nap").click(function(){
					$("#broadsword").toggle();
				});
			});
			$(document).ready(function(){
				$("#broadsword").click(function(){
					$("#broadsword").toggle();
				});
			});
		//longsword
			$(document).ready(function(){
    			$("#longsword-nap").click(function(){
					$("#longsword").toggle();
				});
			});
			$(document).ready(function(){
				$("#longsword").click(function(){
					$("#longsword").toggle();
				});
			});
		//legion
			$(document).ready(function(){
    			$("#legion-nap").click(function(){
					$("#legion").toggle();
				});
			});
			$(document).ready(function(){
				$("#legion").click(function(){
					$("#legion").toggle();
				});
			});
		//slinger
			$(document).ready(function(){
    			$("#slinger-nap").click(function(){
					$("#slinger").toggle();
				});
			});
			$(document).ready(function(){
				$("#slinger").click(function(){
					$("#slinger").toggle();
				});
			});
		//improved slinger
			$(document).ready(function(){
    			$("#Hslinger-nap").click(function(){
					$("#Hslinger").toggle();
				});
			});
			$(document).ready(function(){
				$("#Hslinger").click(function(){
					$("#Hslinger").toggle();
				});
			});
		//Heavy slinger
			$(document).ready(function(){
    			$("#ironSlinger-nap").click(function(){
					$("#ironSlinger").toggle();
				});
			});
			$(document).ready(function(){
				$("#ironSlinger").click(function(){
					$("#ironSlinger").toggle();
				});
			});
		//clubman
			$(document).ready(function(){
    			$("#clubman-nap").click(function(){
					$("#clubman").toggle();
				});
			});
			$(document).ready(function(){
				$("#clubman").click(function(){
					$("#clubman").toggle();
				});
			});
		//axeman
			$(document).ready(function(){
    			$("#axeman-nap").click(function(){
					$("#axeman").toggle();
				});
			});
			$(document).ready(function(){
				$("#axeman").click(function(){
					$("#axeman").toggle();
				});
			});
	//Wild animals	
		//alligator
			$(document).ready(function(){
    			$("#alligator-nap").click(function(){
					$("#alligator").toggle();
				});
			});
			$(document).ready(function(){
				$("#alligator").click(function(){
					$("#alligator").toggle();
				});
			});
		//alligator2
			$(document).ready(function(){
    			$("#alligator6-nap").click(function(){
					$("#alligator6").toggle();
				});
			});
			$(document).ready(function(){
				$("#alligator6").click(function(){
					$("#alligator6").toggle();
				});
			});
		//alligator3
			$(document).ready(function(){
    			$("#alligator3-nap").click(function(){
					$("#alligator3").toggle();
				});
			});
			$(document).ready(function(){
				$("#alligator3").click(function(){
					$("#alligator3").toggle();
				});
			});
		//alligator4
			$(document).ready(function(){
    			$("#alligator7-nap").click(function(){
					$("#alligator7").toggle();
				});
			});
			$(document).ready(function(){
				$("#alligator7").click(function(){
					$("#alligator7").toggle();
				});
			});
		//alligator5
			$(document).ready(function(){
    			$("#alligator5-nap").click(function(){
					$("#alligator5").toggle();
				});
			});
			$(document).ready(function(){
				$("#alligator5").click(function(){
					$("#alligator5").toggle();
				});
			});
		//gazel
			$(document).ready(function(){
    			$("#gazel-nap").click(function(){
					$("#gazel").toggle();
				});
			});
			$(document).ready(function(){
				$("#gazel").click(function(){
					$("#gazel").toggle();
				});
			});
		//gazel2
			$(document).ready(function(){
    			$("#gazel2-nap").click(function(){
					$("#gazel2").toggle();
				});
			});
			$(document).ready(function(){
				$("#gazel2").click(function(){
					$("#gazel2").toggle();
				});
			});
		//lion
			$(document).ready(function(){
    			$("#lion-nap").click(function(){
					$("#lion").toggle();
				});
			});
			$(document).ready(function(){
				$("#lion").click(function(){
					$("#lion").toggle();
				});
			});
		//lion2
			$(document).ready(function(){
    			$("#lion2-nap").click(function(){
					$("#lion2").toggle();
				});
			});
			$(document).ready(function(){
				$("#lion2").click(function(){
					$("#lion2").toggle();
				});
			});
		//elephant
			$(document).ready(function(){
    			$("#elephant-nap").click(function(){
					$("#elephant").toggle();
				});
			});
			$(document).ready(function(){
				$("#elephant").click(function(){
					$("#elephant").toggle();
				});
			});