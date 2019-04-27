// Variable Declaration

var temp;

var points = 4;
var arrSelections = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];




// Functions


// Runs the tabs
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Updates resources counters.
function update() {
	document.getElementById("lblPoints").innerHTML = "Points: " + formatNumber(points);
	document.getElementById("lblSelections").innerHTML = getSelectionsText();
	color();
};

// Used to shorten numbers for efficient display
var ranges = [
  { divider: 1e18 , suffix: 'E' },
  { divider: 1e15 , suffix: 'P' },
  { divider: 1e12 , suffix: 'T' },
  { divider: 1e9 , suffix: 'G' },
  { divider: 1e6 , suffix: 'M' },
  { divider: 1e3 , suffix: 'k' }
];

function formatNumber(n) {
    if (n <= -1) {
        return "-" + formatNumber(0 - n);
    }
	for (var i = 0; i < ranges.length; i++)
	{
		if (n >= ranges[i].divider * 10) {
			return (parseInt(n / ranges[i].divider)).toString() + ranges[i].suffix;
		}
	}
	return Math.round(n).toString();
}

function pick(choice) {
	if ((arrSelections[choice] == 0) && (points > 0)) {
		arrSelections[choice] = 1;
		points -= 1;
	}
	else if (arrSelections[choice] == 1) {
		arrSelections[choice] = 0;
		points += 1;
	}
	update();
}

// Gets the Selections text
function getSelectionsText() {
	var text = "";
	
	text += "Selections:";
	if (arrSelections[0] == 1)
		text += "<br />" + ".jif";
	if (arrSelections[1] == 1)
		text += "<br />" + ".ppg";
	if (arrSelections[2] == 1)
		text += "<br />" + ".pan";
	if (arrSelections[3] == 1)
		text += "<br />" + ".run";
	if (arrSelections[4] == 1)
		text += "<br />" + ".fst";
	if (arrSelections[5] == 1)
		text += "<br />" + ".99z";
	if (arrSelections[6] == 1)
		text += "<br />" + ".fnt";
	if (arrSelections[7] == 1)
		text += "<br />" + ".mpx";
	if (arrSelections[8] == 1)
		text += "<br />" + ".cyo";
	if (arrSelections[9] == 1)
		text += "<br />" + ".lcs";
	if (arrSelections[10] == 1)
		text += "<br />" + ".rwl";
	if (arrSelections[11] == 1)
		text += "<br />" + ".wal";
	
	return text;
}


// Colors the selections so you know what you have
function color() {
	if (arrSelections[0] == 1)
		document.getElementById("pickOne").style.color = "green";
	else
		document.getElementById("pickOne").style.color = "red";
	
	if (arrSelections[1] == 1)
		document.getElementById("pickTwo").style.color = "green";
	else
		document.getElementById("pickTwo").style.color = "red";
	
	if (arrSelections[2] == 1)
		document.getElementById("pickThree").style.color = "green";
	else
		document.getElementById("pickThree").style.color = "red";
	
	if (arrSelections[3] == 1)
		document.getElementById("pickFour").style.color = "green";
	else
		document.getElementById("pickFour").style.color = "red";
	
	if (arrSelections[4] == 1)
		document.getElementById("pickFive").style.color = "green";
	else
		document.getElementById("pickFive").style.color = "red";
	
	if (arrSelections[5] == 1)
		document.getElementById("pickSix").style.color = "green";
	else
		document.getElementById("pickSix").style.color = "red";
	
	if (arrSelections[6] == 1)
		document.getElementById("pickSeven").style.color = "green";
	else
		document.getElementById("pickSeven").style.color = "red";
	
	if (arrSelections[7] == 1)
		document.getElementById("pickEight").style.color = "green";
	else
		document.getElementById("pickEight").style.color = "red";
	
	if (arrSelections[8] == 1)
		document.getElementById("pickNine").style.color = "green";
	else
		document.getElementById("pickNine").style.color = "red";
	
	if (arrSelections[9] == 1)
		document.getElementById("pickTen").style.color = "green";
	else
		document.getElementById("pickTen").style.color = "red";
	
	if (arrSelections[10] == 1)
		document.getElementById("pickEleven").style.color = "green";
	else
		document.getElementById("pickEleven").style.color = "red";
	
	if (arrSelections[11] == 1)
		document.getElementById("pickTwelve").style.color = "green";
	else
		document.getElementById("pickTwelve").style.color = "red";
}












