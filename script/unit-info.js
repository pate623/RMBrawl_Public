var woodworkingLow = false;

$(document).ready(function () {
	var elements = document.querySelectorAll("div");
	for (var i = 0; i < elements.length; i++) {
		var element = elements[i];
		if (!element.id.includes("-nap")) {
			continue;
		}

		//console.log(element.id);
		if (element.id == "merchant-ship-nap") {
			MerchantShipToggle(element);
		}
		else if (element.id == "sentry-tower-nap") {
			SentryTowerToggle(element);
		}
		else if (element.id == "domestication-nap") {
			DomesticationToggle();
		}
		else if (element.id == "stonemining-nap") {
			StoneMiningToggle(element);
		}
		else if (element.id == "siegecraft-nap") {
			SiegeCraftToggle(element);
		}
		else if (element.id == "woodworking-nap") {
			WoodworkingToggle();
		}
		else if (element.id == "craftsmanship-nap") {
			CraftsmanshipToggle(element);
		}
		else if (element.id == "medicine-nap") {
			MedicineToggle(element);
		}
		else if (element.id == "alchemy-nap") {
			AlchemyToggle(element);
		}
		else if (element.id == "cataphract-nap") {
			CataphractToggle(element);
		}
		else if (element.id == "heavycat-nap") {
			HeavycatToggle(element);
		}
		else if (element.id == "slinger-nap") {
			SlingerToggle(element);
		}
		else {
			DefaultToggling(element);
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
			$("#slinger").css("top", "1913px");
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
