function replaceClass() {
	var p = document.getElementsByClassName("para1");
	for (var i = 0; i < p.length; i) {
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
		if (bg[i].style.maxWidth === "700px") {
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
			bg[i].style.maxWidth = "700px";
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
	if (usMotto != null) {
		usMotto.classList.add("patriotic");
		var unum = document.getElementById("unum");
		unum.classList.add("latin");
		var usDime = document.getElementById("usDime");
		if (usDime != null) {
			if (!usDime.classList.contains("hidden")) {
				if (!usMotto.classList.contains("hidden")) {
					usDime.style.display = "block";
				}
				else {
					usDime.classList.add("hidden");
				}
			}
			usDime.classList.add("patriotic");
		}
	}
	var quotes = document.getElementsByClassName("quote");
	for (var i = 0; i < quotes.length; i++) {
		if (!quotes[i].classList.contains("patriotic")) {
			//Skip the usMotto quote
			quotes[i].style.borderTop = "5px solid #ff6600";
			quotes[i].style.borderBottom = "5px solid #ff6600";
			quotes[i].style.paddingTop = "5px";
			quotes[i].style.paddingBottom = "5px";
			quotes[i].style.fontFamily = "'Merienda One', sans-serif, serif";
			quotes[i].style.color = "#993300";
			quotes[i].style.fontSize = "1.4em";
			quotes[i].style.outline = "purple dashed medium";
			quotes[i].style.maxWidth = "800px";
		}
	}
	var speed = document.getElementById("speed");
	if (speed != null) {
		speed.style.outline = "blue dotted medium";
		speed.style.maxWidth = "500px";
		speed.style.fontSize = "1.25em";
	}
	var turtle = document.getElementById("turtle");
	if (turtle != null) {
		turtle.style.outline = "green solid medium";
		turtle.style.color = "purple";
		turtle.style.maxWidth = "500px";
	}
}

function addQuote() {
	var newQuote = document.getElementById("newQuote").value;
	if (newQuote != "") {
		var quotesDiv = document.getElementById("quotes");
		var newBlockquote = document.createElement("blockquote");
		var node = document.createTextNode(newQuote);
		newBlockquote.appendChild(node);
		newBlockquote.classList.add("quote");
		quotesDiv.appendChild(newBlockquote);
	}
}

function removeQuotes() {
	var quotesDiv = document.getElementById("quotes");
	var selectedQuotes = document.getElementsByClassName("selected");
	for (var i = 0; i < selectedQuotes.length; i) {
		quotesDiv.removeChild(selectedQuotes[i]);
	}
}

function replaceQuotes() {
	var selectedQuotes = document.getElementsByClassName("selected");
	var newQuote = document.getElementById("newQuote").value;
	if ((newQuote != "") && (selectedQuotes.length > 0)) {
		var quotesDiv = document.getElementById("quotes");
		var newBlockquote = document.createElement("blockquote");
		var node = document.createTextNode(newQuote);
		newBlockquote.appendChild(node);
		newBlockquote.classList.add("quote");
		//Replace the selected quote that is earliest in the list
		quotesDiv.replaceChild(newBlockquote, selectedQuotes[0]);

		//Remove the remaining selected quotes
		var quotesDiv = document.getElementById("quotes");
		for (var i = 0; i < selectedQuotes.length; i) {
			quotesDiv.removeChild(selectedQuotes[i]);
		}
	}
}

function insertQuote() {
	var newQuote = document.getElementById("newQuote").value;
	var selectedQuotes = document.getElementsByClassName("selected");
	if (newQuote != "") {
		if (selectedQuotes[0] != null) {
			var quotesDiv = document.getElementById("quotes");
			var newBlockquote = document.createElement("blockquote");
			var node = document.createTextNode(newQuote);
			newBlockquote.appendChild(node);
			newBlockquote.classList.add("quote");
			quotesDiv.insertBefore(newBlockquote, selectedQuotes[0]);
			deselectAllQuotes();
		}
		else {
			addQuote();
		}
	}
}

function hideQuotes() {
	var selectedQuotes = document.getElementsByClassName("selected");
	for (var i = 0; i < selectedQuotes.length; i++) {
		selectedQuotes[i].style.display = "none";
		selectedQuotes[i].classList.add("hidden");
	}
	deselectAllQuotes();
}

function unhideQuotes() {
	var hiddenQuotes = document.getElementsByClassName("hidden");
	for (var i = 0; i < hiddenQuotes.length; i++) {
		hiddenQuotes[i].style.display = "block";
	}
	for (var i = 0; i < hiddenQuotes.length; i) {
		hiddenQuotes[i].classList.remove("hidden");
	}
}

function deselectAllQuotes() {
	var selectedQuotes = document.getElementsByClassName("selected");
	for (var i = 0; i < selectedQuotes.length; i) {
		selectedQuotes[i].classList.remove("selected");
	}
}