function replaceClass() {
	var p = document.getElementsByClassName("para1");
	for (var i = 0; i < p.length; i++) {
		p[i].className = p[i].className.replace(/para1/, 'para3');
	}
}

//var parentDOM = document.getElementsByClassName("background");

//p = Array.prototype.slice.call(document.getElementsByClassName("portfolio"));

function addClass() {
	var p = document.getElementsByTagName("p");
	for (var i = 0; i < p.length; i++) {
		p[i].classList.add("bold");
	}
}

function removeClass() {
	var p = document.getElementsByTagName("p");
	for (var i = 0; i < p.length; i++) {
		p[i].classList.remove("bold");
	}
}

function toggleClass() {
	var p = document.getElementsByTagName("p");
	for (var i = 0; i < p.length; i++) {
		p[i].classList.toggle("italic");
	}
}

function toggleClassConditionally() {
	var p = document.getElementsByTagName("p");
	for (var i = 0; i < p.length; i++) {
		if (p[i].classList.contains('para3')) {
			p[i].classList.toggle("italic");
		}
	}
}

function changeBullet() {
	var list = document.getElementsByClassName("listA");
	for (var i = 0; i < list.length; i++) {
		switch(list[i].style.listStyleType) {
			case "decimal":
				list[i].style.listStyleType = "upper-roman";
				list[i].style.color = "#cc0099";
				list[i].style.marginLeft = "4em";
				list[i].style.fontFamily = "'Times New Roman', serif";
				break;
			case "upper-roman":
				list[i].style.listStyleType = "lower-roman";
				break;
			case "lower-roman":
				list[i].style.listStyleType = "upper-alpha";
				list[i].style.color = "red";
				list[i].style.marginLeft = "3.5em";
				list[i].style.fontFamily = "'Courier New', monospace";
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
			case "square":
				list[i].style.listStyleType = "decimal";
				list[i].style.color = "black";
				list[i].style.marginLeft = "2em";
				break;
			default:
				list[i].style.listStyleType = "upper-roman";
				list[i].style.color = "#cc0099";
				list[i].style.marginLeft = "4em";
				list[i].style.fontFamily = "'Times New Roman', serif";
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
		if (bg[i].style.maxWidth === "550px") {
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
			bg[i].style.maxWidth = "550px";
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

function enhanceQuotes() {
	var usMotto = document.getElementById("usMotto");
	usMotto.classList.add("patriotic");
	var unum = document.getElementById("unum");
	unum.classList.add("latin");
	var usDime = document.getElementById("usDime");
	usDime.style.display = "block";
	usDime.classList.add("patriotic");
	var quotes = document.getElementsByClassName("quote");
	for (var i = 0; i < quotes.length; i++) {
		if (i != 0) { //For the usMotto quote
			quotes[i].style.borderTop = "5px solid #ff6600";
			quotes[i].style.borderBottom = "5px solid #ff6600";
		}
		quotes[i].style.paddingTop = "5px";
		quotes[i].style.paddingBottom = "5px";
		quotes[i].style.fontFamily = "'Merienda One', sans-serif, serif";
		quotes[i].style.color = "#993300";
		quotes[i].style.fontSize = "1.4em";
		quotes[i].style.outline = "purple dashed medium";
		quotes[i].style.maxWidth = "800px";
	}
	var speed = document.getElementById("speed");
	speed.style.outline = "blue dotted medium";
	speed.style.maxWidth = "500px";
	speed.style.fontSize = "1.25em";
	var turtle = document.getElementById("turtle");
	turtle.style.outline = "green solid medium";
	turtle.style.color = "purple";
	turtle.style.maxWidth = "500px";
}

function addQuote() {
	var newQuote = document.getElementById("newQuote").value;
	var quotesDiv = document.getElementById("quotes");
	var newBlockquote = document.createElement("blockquote");
	var node = document.createTextNode(newQuote);
	newBlockquote.appendChild(node);
	newBlockquote.classList.add("quote");
	quotesDiv.insertBefore(newBlockquote, enhanceQuotesBtn);
}