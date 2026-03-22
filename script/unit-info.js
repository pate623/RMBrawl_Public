var woodworkingLow = false;

$(document).ready(function () {
	var elements = document.querySelectorAll("div");
	for (var i = 0; i < elements.length; i++) {
		var element = elements[i];
		if (!element.id.includes("-nap")) {
			continue;
		}

		//console.log(element.id);
		switch (element.id) {
			case "merchant-ship-nap":
				MerchantShipToggle(element);
				break;
			case "sentry-tower-nap":
				SentryTowerToggle(element);
				break;
			case "domestication-nap":
				DomesticationToggle(element);
				break;
			case "stonemining-nap":
				StoneMiningToggle(element);
				break;
			case "siegecraft-nap":
				SiegeCraftToggle(element);
				break;
			case "woodworking-nap":
				WoodworkingToggle(element);
				break;
			case "craftsmanship-nap":
				CraftsmanshipToggle(element);
				break;
			case "medicine-nap":
				MedicineToggle(element);
				break;
			case "alchemy-nap":
				AlchemyToggle(element);
				break;
			case "cataphract-nap":
				CataphractToggle(element);
				break;
			case "heavycat-nap":
				HeavycatToggle(element);
				break;
			case "slinger-nap":
				SlingerToggle(element);
				break;
			default:
				DefaultToggling(element);
				break;
		}
	}
});

function DefaultToggling(element) {
	let detailsObjectName = element.id.replace("-nap", "");
	//console.log(detailsObjectName);
	$("#" + element.id).click(function () {
		$("#" + detailsObjectName).toggle();
	});

	$("#" + detailsObjectName).click(function () {
		$("#" + detailsObjectName).toggle();
	});
}

function MerchantShipToggle(element) {
	$("#merchant-ship-nap").click(function () {
		if (!$("#fishing-ship").is(":hidden")) {
			$("#merchant-ship").css("top", "313px");
		} else {
			$("#merchant-ship").css("top", "292px");
		}
		$("#merchant-ship").toggle();
	});
	
	let detailsObjectName = element.id.replace("-nap", "");
	$("#" + detailsObjectName).click(function () {
		$("#" + detailsObjectName).toggle();
	});
}

function SentryTowerToggle(element) {
	$("#sentry-tower-nap").click(function () {
		if (!$("#trade-boat").is(":hidden")) {
			$("#sentry-tower").css("top", "382px");
		} else {
			$("#sentry-tower").css("top", "361px");
		}
		$("#sentry-tower").toggle();
	});
	
	let detailsObjectName = element.id.replace("-nap", "");
	$("#" + detailsObjectName).click(function () {
		$("#" + detailsObjectName).toggle();
	});
}

function DomesticationToggle() {
	$("#domestication-nap").click(function () {
		$("#domestication").toggle();
	});

	$("#domestication").click(function () {
		$("#domestication").toggle();
		if ($("#woodworking").is(":hidden")) {
			woodworkingLow = false;
		}
	});
}

function StoneMiningToggle(element) {
	$("#stonemining-nap").click(function () {
		if (woodworkingLow) {
			$("#stonemining").css("top", "836px");
		} else {
			$("#stonemining").css("top", "826px");
		}
		$("#stonemining").toggle();
	});

	let detailsObjectName = element.id.replace("-nap", "");
	$("#" + detailsObjectName).click(function () {
		$("#" + detailsObjectName).toggle();
	});
}

function SiegeCraftToggle(element) {
	$("#siegecraft-nap").click(function () {
		if (!$("#artisanship").is(":hidden")) {
			$("#siegecraft").css("top", "818px");
		} else {
			$("#siegecraft").css("top", "782px");
		}
		$("#siegecraft").toggle();
	});

	let detailsObjectName = element.id.replace("-nap", "");
	$("#" + detailsObjectName).click(function () {
		$("#" + detailsObjectName).toggle();
	});
}

function WoodworkingToggle() {
	$("#woodworking-nap").click(function () {
		if (!$("#domestication").is(":hidden")) {
			$("#woodworking").css("top", "790px");
			woodworkingLow = true;
		} else {
			$("#woodworking").css("top", "772px");
			woodworkingLow = false;
		}
		$("#woodworking").toggle();
		if ($("#woodworking").is(":hidden")) {
			woodworkingLow = false;
		}
	});

	$("#woodworking").click(function () {
		$("#woodworking").toggle();
		if ($("#woodworking").is(":hidden")) {
			woodworkingLow = false;
		}
	});
}

function CraftsmanshipToggle(element) {
	$("#craftsmanship-nap").click(function () {
		if (!$("#irrigation").is(":hidden")) {
			$("#craftsmanship").css("top", "793px");
			woodworkingLow = true;
		} else {
			$("#craftsmanship").css("top", "768px");
			woodworkingLow = false;
		}
		$("#craftsmanship").toggle();
	});

	let detailsObjectName = element.id.replace("-nap", "");
	$("#" + detailsObjectName).click(function () {
		$("#" + detailsObjectName).toggle();
	});
}

function MedicineToggle(element) {
	$("#medicine-nap").click(function () {
		if (!$("#martyrdom").is(":hidden")) {
			$("#medicine").css("top", "1192px");
		} else {
			$("#medicine").css("top", "1167px");
		}
		$("#medicine").toggle();
	});

	let detailsObjectName = element.id.replace("-nap", "");
	$("#" + detailsObjectName).click(function () {
		$("#" + detailsObjectName).toggle();
	});
}

function AlchemyToggle(element) {
	$("#alchemy-nap").click(function () {
		if (!$("#aristocracy").is(":hidden")) {
			$("#alchemy").css("top", "1765px");
		} else {
			$("#alchemy").css("top", "1740px");
		}
		$("#alchemy").toggle();
	});

	let detailsObjectName = element.id.replace("-nap", "");
	$("#" + detailsObjectName).click(function () {
		$("#" + detailsObjectName).toggle();
	});
}

function CataphractToggle(element) {
	$("#cataphract-nap").click(function () {
		if (!$("#scythe").is(":hidden")) {
			$("#cataphract").css("top", "2073px");
		} else {
			$("#cataphract").css("top", "2061px");
		}
		$("#cataphract").toggle();
	});

	let detailsObjectName = element.id.replace("-nap", "");
	$("#" + detailsObjectName).click(function () {
		$("#" + detailsObjectName).toggle();
	});
}

function HeavycatToggle(element) {
	$("#heavycat-nap").click(function () {
		if (!$("#helepolis").is(":hidden")) {
			$("#heavycat").css("top", "2533px");
		} else {
			$("#heavycat").css("top", "2495px");
		}
		$("#heavycat").toggle();
	});

	let detailsObjectName = element.id.replace("-nap", "");
	$("#" + detailsObjectName).click(function () {
		$("#" + detailsObjectName).toggle();
	});
}

function SlingerToggle(element) {
	$("#slinger-nap").click(function () {
		if ($("#clayBolt").is(":hidden")) {
			$("#slinger").css("top", "1933px");
		} else {
			$("#slinger").css("top", "1939px");
		}
		$("#slinger").toggle();
	});

	let detailsObjectName = element.id.replace("-nap", "");
	$("#" + detailsObjectName).click(function () {
		$("#" + detailsObjectName).toggle();
	});
}
