function changeColor() {	
	var p = document.getElementsByClassName("para");
	for (var i = 0; i < p.length; i++) {
		p[i].style.color = "purple";
	}
	
	/*var li = document.getElementsByTagName("li");
	for (var i = 0; i < li.length; i++) {
		li[i].style.color = "purple";
	}*/
	/*var p = document.getElementsByTagName("p");
	for (var i = 0; i < p.length; i++) {
		p[i].style.color = "purple";
	}*/
	
	//portfolio.className = portfolio.className.replace(/portfolio/, 'portfolio2');
	
	//var parentDOM = document.getElementsByClassName("background");
	
	//p = Array.prototype.slice.call(document.getElementsByClassName("portfolio"));
}

function changeBullet() {
	var list = document.getElementsByClassName("list");
	for (var i = 0; i < list.length; i++) {
		switch(list[i].style.listStyleType) {
			case "decimal":
				list[i].style.listStyleType = "upper-roman";
				list[i].style.color = "#cc0099";
				list[i].style.marginLeft = "4em";
				list[i].style.fontFamily = '"Times New Roman", serif';
				break;
			case "upper-roman":
				list[i].style.listStyleType = "lower-roman";
				break;
			case "lower-roman":
				list[i].style.listStyleType = "upper-alpha";
				list[i].style.color = "red";
				list[i].style.marginLeft = "3.5em";
				list[i].style.fontFamily = '"Courier New", monospace';
				break;
			case "upper-alpha":
				list[i].style.listStyleType = "lower-alpha";
				break;
			case "lower-alpha":
				list[i].style.listStyleType = "circle";
				list[i].style.color = "green";
				list[i].style.marginLeft = "3em";
				list[i].style.fontFamily = "Verdana, sans-serif";
				break;
			case "circle":
				list[i].style.listStyleType = "square";
				break;
			default:
				list[i].style.listStyleType = "decimal";
				list[i].style.color = "black";
				list[i].style.marginLeft = "2em";
		}
	}
}

function enhanceTable() {
	var infoTable = document.getElementsByClassName("infoTable");
	for (var i = 0; i < infoTable.length; i++) {
		infoTable[i].style.color = "#0066ff";
		infoTable[i].style.fontSize = "1.75em";
		infoTable[i].style.fontFamily = '"Times New Roman", serif';
		var headers = infoTable[i].getElementsByTagName("th");
		for (var j = 0; j < headers.length; j++) {
			headers[j].style.borderBottom = "3px solid #0066ff";
		}
		var cells = infoTable[i].getElementsByTagName("th td");
		for (var j = 0; j < cells.length; j++) {
			cells[j].style.padding = "12px";
		}
	}

	var headerRow = document.getElementsByClassName("headerRow");
	for (var i = 0; i < headerRow.length; i++) {
		var headers = headerRow[i].getElementsByTagName("th");
		for (var j = 0; j < headers.length; j++) {
			headers[j].style.fontStyle = "italic";
		}
	}
}

function adjustBackground() {
	var bg = document.getElementsByClassName("background");
	var bodySetting;
	for (var i = 0; i < bg.length; i++) {
		if (bg[i].style.maxWidth === "500px") {
			bg[i].style.backgroundColor = "white";
			bg[i].style.maxWidth = "none";
			bg[i].style.marginLeft = "0";
			bg[i].style.marginRight = "0";
			bg[i].style.paddingLeft = "0";
			bg[i].style.paddingRight = "0";
			bg[i].style.paddingTop = "0";
			bg[i].style.paddingBottom = "0";
			bodySetting = "empty";
		}
		else {
			bg[i].style.backgroundColor = "beige";
			bg[i].style.maxWidth = "500px";
			bg[i].style.marginLeft = "auto";
			bg[i].style.marginRight = "auto";
			bg[i].style.paddingLeft = "28px";
			bg[i].style.paddingRight = "28px";
			bg[i].style.paddingTop = "10px";
			bg[i].style.paddingBottom = "20px";
			bodySetting = "enhanced";
		}
	}
	if (bodySetting === "empty") {
		document.body.style.backgroundColor = "white";
	}
	else {
		document.body.style.backgroundColor = "#99ffcc";
	}
}