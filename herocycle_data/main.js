// Variable Declaration

var temp;

var growthPoints = 5;
var arrGrowthSelections = [0, 0, 0]; // 0 = unselected, 1 = selected, 2 = locked in
var arrGrowthPrices = [1, 2, 3];
var arrGrowthPrereq = [-1, -1, 1]; // Location in arrGrowthSelections array of prereq; must have prereq locked in to take this. -1 means no prereq.

var changePoints = 3;
var arrChangeSelections = [0, 0, 0]; // 0 = unselected, 1 = selected, 2 = locked in
var arrChangePrices = [1, 2, 3];
var arrChangePrereq = [-1, -1, -1]; // Location in arrChangeSelections array of prereq; must have prereq locked in to take this. -1 means no prereq.

var damagePoints = 1;
var arrDamageSelections = [0, 0, 0]; // 0 = unselected, 1 = selected, 2 = locked in
var arrDamagePrices = [1, 2, 3];
var arrDamagePrereq = [2, -1, -1]; // Location in arrDamageSelections array of prereq; must have prereq locked in to take this. -1 means no prereq.

var arrChoiceCards = [];


var victoryStat = 0;

var arrAdventureOptions = [1, 0, 1]; // 0 = unshown/not option, 1 = shown/option, 2 = already used

var arrAdventureLewd = [0, 0, 1]; // yes/no is the Lewd stat significant
var arrAdventureMagic = [1, 0, 1]; // yes/no is the Magic stat significant

var arrAdventureDifficulty = [10, 12, 13];
var arrAdventureVictoryPoints = [[4, 2, 5], [4, 2, 5], [5, 1, 2]]; // Points awarded on victory
var arrAdventureLossPoints = [[5, 2, 4], [5, 2, 4], [2, 1, 5]]; // Points awarded on failure


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
	update();
}

function setTab(tabName) {
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
	update();
}

// Updates visuals.
function update() {
	document.getElementById("growthTab").innerHTML = "Growth " + getPoints("growth") + "/" + growthPoints;
	if (growthPoints < getPoints("growth")) { document.getElementById("growthTab").style.borderColor = "red"; }
	else { document.getElementById("growthTab").style.borderColor = "green"; }
	
	document.getElementById("changeTab").innerHTML = "Change " + getPoints("change") + "/" + changePoints;
	if (getPoints("change") != changePoints) { document.getElementById("changeTab").style.borderColor = "red"; }
	else { document.getElementById("changeTab").style.borderColor = "green"; }
	
	document.getElementById("damageTab").innerHTML = "Damage " + getPoints("damage") + "/" + damagePoints;
	if (getPoints("damage") < damagePoints) { document.getElementById("damageTab").style.borderColor = "red"; }
	else { document.getElementById("damageTab").style.borderColor = "green"; }
	
	document.getElementById("lblStats").innerHTML = getStatsText();
	
	if (canAdventure()) { document.getElementById("beginAdventure").style.borderColor = "green"; }
	else { document.getElementById("beginAdventure").style.borderColor = "red"; }
	

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

// Determines what happens when you pick an option
function pick(choice, category, btn) {
	if (category == "growth")
	{
		if (arrGrowthSelections[choice] == 0) {
			if (arrGrowthPrereq[choice] != -1)
			{
				if (arrGrowthSelections[arrGrowthPrereq[choice]] == 2) // Is the option indicated by your choice's prereq locked in?
				{
					arrGrowthSelections[choice] = 1;
					btn.style.borderColor = "green";
				}
			}
			else
			{
				arrGrowthSelections[choice] = 1;
				btn.style.borderColor = "green";
			}
		}
		else if (arrGrowthSelections[choice] == 1) {
			arrGrowthSelections[choice] = 0;
			btn.style.borderColor = "red";
		}
	}
	if (category == "change")
	{
		if (arrChangeSelections[choice] == 0) {
			if (arrChangePrereq[choice] != -1)
			{
				if (arrChangeSelections[arrChangePrereq[choice]] == 2) // Is the option indicated by your choice's prereq locked in?
				{
					arrChangeSelections[choice] = 1;
					btn.style.borderColor = "green";
				}
			}
			else
			{
				arrChangeSelections[choice] = 1;
				btn.style.borderColor = "green";
			}
		}
		else if (arrChangeSelections[choice] == 1) {
			arrChangeSelections[choice] = 0;
			btn.style.borderColor = "red";
		}
	}
	if (category == "damage")
	{
		if (arrDamageSelections[choice] == 0) {
			if (arrDamagePrereq[choice] != -1)
			{
				if (arrDamageSelections[arrDamagePrereq[choice]] == 2) // Is the option indicated by your choice's prereq locked in?
				{
					arrDamageSelections[choice] = 1;
					btn.style.borderColor = "green";
				}
			}
			else
			{
				arrDamageSelections[choice] = 1;
				btn.style.borderColor = "green";
			}
		}
		else if (arrDamageSelections[choice] == 1) {
			arrDamageSelections[choice] = 0;
			btn.style.borderColor = "red";
		}
	}
	if (!containsObject(btn, arrChoiceCards)) // If the player touches it, it's probably important
		arrChoiceCards.push(btn);
	update();
}

// Gets the Stats text
function getStatsText() {
	var text = "";
	
	text += "Stats:";
	if (getStat("lewd") > 0)
		text += "<br />" + "Lewdness: " + getStat("lewd");
	if (getStat("magic") > 0)
		text += "<br />" + "Magic: " + getStat("magic");
	
	return text;
}

// Gets your value in one of the stats
function getStat(stat) {
	var total = 0;
	if (stat == "lewd")
	{
		if (arrDamageSelections[0] != 0) { total += 1; };
		if (arrDamageSelections[1] != 0) { total += 2; };
		if (arrDamageSelections[2] != 0) { total += 3; };
	}
	if ((stat == "magic") || (stat == "all_good"))
	{
		if (arrGrowthSelections[0] != 0) { total += 1; };
		if (arrGrowthSelections[1] != 0) { total += 2; };
		if (arrGrowthSelections[2] != 0) { total += 3; };
	}
	return total;
}

function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return true;
        }
    }

    return false;
}

// Gets points spent on something specific
function getPoints(category)
{
	var total = 0;
	if (category == "growth")
	{
		for (i = 0; i < arrGrowthSelections.length; i++)
		{
			if (arrGrowthSelections[i] == 1)
			{
				total += arrGrowthPrices[i];
			}
		}
	}
	if (category == "change")
	{
		for (i = 0; i < arrChangeSelections.length; i++)
		{
			if (arrChangeSelections[i] == 1)
			{
				total += arrChangePrices[i];
			}
		}
	}
	if (category == "damage")
	{
		for (i = 0; i < arrDamageSelections.length; i++)
		{
			if (arrDamageSelections[i] == 1)
			{
				total += arrDamagePrices[i];
			}
		}
	}
	return total;
}

function canAdventure()
{
	if ((growthPoints >= getPoints("growth")) && (getPoints("change") == changePoints) && (getPoints("damage") >= damagePoints))
		return true;
	else
		return false;
}

// Moves you from Planning stage to Adventure stage
function beginAdventure()
{
	// Makes sure selections are valid
	if (canAdventure())
	{
		// Checking/updating displayed cards and stored values seperately. Such a cludge.
		for (i = 0; i < arrChoiceCards.length; i++) // Turns green cards blue, indicating they are locked in
		{
			if (arrChoiceCards[i].style.borderColor == "green")
				arrChoiceCards[i].style.borderColor = "blue"
		}
		for (i = 0; i < arrGrowthSelections.length; i++) // Turns growth selections into locked in
		{
			if (arrGrowthSelections[i] == 1)
			{
				arrGrowthSelections[i] = 2;
				extendReport("Growth option " + i + " successfully purchased for " + arrGrowthPrices[i] + " Growth points.");
			}
		}
		for (i = 0; i < arrChangeSelections.length; i++) // Turns growth selections into locked in
		{
			if (arrChangeSelections[i] == 1)
			{
				arrChangeSelections[i] = 2;
				extendReport("Change option " + i + " successfully purchased for " + arrChangePrices[i] + " Change points.");
			}
		}
		for (i = 0; i < arrDamageSelections.length; i++) // Turns growth selections into locked in
		{
			if (arrDamageSelections[i] == 1)
			{
				arrDamageSelections[i] = 2;
				extendReport("Damage option " + i + " successfully purchased for " + arrDamagePrices[i] + " Damage points.");
			}
		}
		
		// Hiding Planning stage menu bar, items (look into the engine that runs the tabs)
		document.getElementById("planningStage").style.display = "none";
		document.getElementById("tabButtons").style.display = "none";
		
		// Determining Adventure stage choices
		var options = 2; // Can adjust this later, should be like 3
		var picks = 0;
		var choice = 0;
		for (i = 0; i < arrAdventureOptions.length; i++)
		{
			if (arrAdventureOptions[i] != 2) // If it hasn't already been chosen
				arrAdventureOptions[i] = 0;
		}
		for (i = 0; i < 99; i++) // Should be plenty of tries
		{
			choice = (Math.floor(Math.random() * arrAdventureOptions.length))
			if (arrAdventureOptions[choice] == 0 && picks < options)
			{
				picks++;
				arrAdventureOptions[choice] = 1;
			}
		}
		
		// Generating informational notes about the adventures
		for (i = 0; i < arrAdventureOptions.length; i++)
		{
			var label = document.getElementById(String('lblAdvInfo_' + i));
			if ((Math.floor(20 - arrAdventureDifficulty[i] + getModifier(i)) * 5) > 0)
				label.innerHTML = "Success Chance: " + Math.min((Math.floor(20 - arrAdventureDifficulty[i] + getModifier(i)) * 5), 100) + "%   Victory Rewards: " + arrAdventureVictoryPoints[i][0] + "/" + arrAdventureVictoryPoints[i][1] + "/" + arrAdventureVictoryPoints[i][2] + "   Failure Effects: " + arrAdventureLossPoints[i][0] + "/" + arrAdventureLossPoints[i][1] + "/" + arrAdventureLossPoints[i][2];
			else
				label.innerHTML = "Success Chance: " + Math.max((Math.floor(20 - arrAdventureDifficulty[i] + getModifier(i)) * 5), 0) + "%   Victory Rewards: " + arrAdventureVictoryPoints[i][0] + "/" + arrAdventureVictoryPoints[i][1] + "/" + arrAdventureVictoryPoints[i][2] + "   Failure Effects: " + arrAdventureLossPoints[i][0] + "/" + arrAdventureLossPoints[i][1] + "/" + arrAdventureLossPoints[i][2];
		}
		
		// Showing Adventure stage choices/hiding ones that shouldn't be seen
		document.getElementById("adventureStage").style.display = "block";
		
		if (arrAdventureOptions[0] == 1) { document.getElementById("adventureOne").style.display = "block"; }
		else { document.getElementById("adventureOne").style.display = "none"; }
		
		if (arrAdventureOptions[1] == 1) { document.getElementById("adventureTwo").style.display = "block"; }
		else { document.getElementById("adventureTwo").style.display = "none"; }
		
		if (arrAdventureOptions[2] == 1) { document.getElementById("adventureThree").style.display = "block"; }
		else { document.getElementById("adventureThree").style.display = "none"; }
	}
	update();
}

// Moves you from Adventure stage to Planning stage
function endAdventure(adventure) // "adventure" is number indicating which trial the player chose. 
{
	// Check adventure success
	var modifier = getModifier(adventure);
	
	if ((modifier + (Math.floor(Math.random() * 20 + 1))) >= arrAdventureDifficulty[adventure])
		var victory = true;
	else
		var victory = false;
	
	
	// Give different amounts of points based on victory/defeat
	if (victory == true)
	{
		growthPoints = arrAdventureVictoryPoints[adventure][0];
		changePoints = arrAdventureVictoryPoints[adventure][1];
		damagePoints = arrAdventureVictoryPoints[adventure][2];
	}
	if (victory == false)
	{
		growthPoints = arrAdventureLossPoints[adventure][0];
		changePoints = arrAdventureLossPoints[adventure][1];
		damagePoints = arrAdventureLossPoints[adventure][2];
	}
	
	// Lock out adventure from being repeated
	arrAdventureOptions[adventure] = 2;
	
	// Hide Adventure stage stuff
	document.getElementById("adventureStage").style.display = "none";
	
	// Show Planning stage stuff
	document.getElementById("planningStage").style.display = "block";
	document.getElementById("tabButtons").style.display = "block";
	
	// Add something to the Info page explaining your victory/defeat
	setTab("Info");
	if (victory == true)
		extendReport(String("Victory against adventure number " + adventure + " was successfully achieved! " + growthPoints + "/" + changePoints + "/" + damagePoints + " points attained!"));
	if (victory == false)
		extendReport(String("Adventure number " + adventure + " bested you! " + growthPoints + "/" + changePoints + "/" + damagePoints + " points attained!"));

	// Check if you meet endgame conditions, runs through every stat
	if (getStat('lewd') >= 10)
		endGame('lewd');
	if (getStat('magic') >= 10)
		endGame('magic');
}

// Get difficulty modifier for an adventure
function getModifier(adventure)
{
	var modifier = 0;
	
	modifier += victoryStat;
	
	if (arrAdventureLewd[adventure] == 1) // Negative stat applies penalty if relevant, small bonus if not relevant
		modifier -= getStat('lewd');
	else
		modifier += getStat('lewd') / 4;
	
	if (arrAdventureMagic[adventure] == 1) // Positive stat applies bonus if relevant, small penalty if not relevant
		modifier += getStat('magic');
	else
		modifier -= getStat('magic') / 4;
	
	return modifier;
}

// Extends the Report on the Info page
function extendReport(text)
{
	var para = document.createElement("p");
	var node = document.createTextNode(text);
	para.appendChild(node);
	var reportNode = document.getElementById("divReport");
	reportNode.appendChild(para);
}

// We're in the endgame now
function endGame(avenge)
{
	extendReport("Game finished. The " + avenge + " ending has been achieved.");
	
	setTab('Ending');
		
	if (avenge == 'lewd') { document.getElementById("endLewd").style.display = "block"; }
	else { document.getElementById("endLewd").style.display = "none"; }
		
	if (avenge == 'magic') { document.getElementById("endMagic").style.display = "block"; }
	else { document.getElementById("endMagic").style.display = "none"; }
	
	document.getElementById("growthTab").style.display = "none";
	document.getElementById("changeTab").style.display = "none";
	document.getElementById("damageTab").style.display = "none";
	document.getElementById("beginAdventure").style.display = "none";
	document.getElementById("endTab").style.display = "block";
}

document.addEventListener('DOMContentLoaded', function() { initiate(); }, false);

function initiate()
{
	update();
	extendReport("It begins.");
	
	for (i = 0; i < arrGrowthSelections.length; i++) // Growth option info
	{
		var label = document.getElementById(String('lblGrowInfo_' + i));
		label.innerHTML = "Cost: " + arrGrowthPrices[i];
		if (arrGrowthPrereq[i] != -1)
			label.innerHTML += "<br> Requires " + arrGrowthPrereq[i];
	}
	
	for (i = 0; i < arrChangeSelections.length; i++) // Change option info
	{
		var label = document.getElementById(String('lblChangeInfo_' + i));
		label.innerHTML = "Cost: " + arrChangePrices[i];
		if (arrChangePrereq[i] != -1)
			label.innerHTML += "<br> Requires " + arrChangePrereq[i];
	}
	
	for (i = 0; i < arrDamageSelections.length; i++) // Damage option info
	{
		var label = document.getElementById(String('lblDamageInfo_' + i));
		label.innerHTML = "Cost: " + arrDamagePrices[i];
		if (arrDamagePrereq[i] != -1)
			label.innerHTML += "<br> Requires " + arrDamagePrereq[i];
	}
}

// Debug stuff
function modPoints(type, effect)
{
	switch(effect)
	{
		case 1: // +1 points
			switch(type)
			{
				case 'growth':
					growthPoints += 1;
					break;
				case 'change':
					changePoints += 1;
					break;
				case 'damage':
					damagePoints += 1;
					break;
			}
			break;
		case 2: // *2 points
			switch(type)
			{
				case 'growth':
					growthPoints *= 2;
					break;
				case 'change':
					changePoints *= 2;
					break;
				case 'damage':
					damagePoints *= 2;
					break;
			}
			break;
		case 3: // -1 points
			switch(type)
			{
				case 'growth':
					if (growthPoints > 0)
						growthPoints -= 1;
					break;
				case 'change':
					if (changePoints > 0)
						changePoints -= 1;
					break;
				case 'damage':
					if (damagePoints > 0)
						damagePoints -= 1;
					break;
			}
			break;
	}
	update();
}

// Toggles a spoiler
function toggleSpoiler(id)
{
	var label = document.getElementById(String('spoiler_' + id));
	if (label.style.display == "none")
		label.style.display = "block";
	else
		label.style.display = "none";
}

// Adjusts Victory stat
function modVictory(n)
{
	if (n == 1)
		victoryStat = 100;
	if (n == 2)
		victoryStat = 0;
	if (n == 3)
		victoryStat = -100;
	
	for (i = 0; i < arrAdventureOptions.length; i++)
	{
		var label = document.getElementById(String('lblAdvInfo_' + i));
		if ((Math.floor(20 - arrAdventureDifficulty[i] + getModifier(i)) * 5) > 0)
			label.innerHTML = "Success Chance: " + Math.min((Math.floor(20 - arrAdventureDifficulty[i] + getModifier(i)) * 5), 100) + "%   Victory Rewards: " + arrAdventureVictoryPoints[i][0] + "/" + arrAdventureVictoryPoints[i][1] + "/" + arrAdventureVictoryPoints[i][2] + "   Failure Effects: " + arrAdventureLossPoints[i][0] + "/" + arrAdventureLossPoints[i][1] + "/" + arrAdventureLossPoints[i][2];
		else
			label.innerHTML = "Success Chance: " + Math.max((Math.floor(20 - arrAdventureDifficulty[i] + getModifier(i)) * 5), 0) + "%   Victory Rewards: " + arrAdventureVictoryPoints[i][0] + "/" + arrAdventureVictoryPoints[i][1] + "/" + arrAdventureVictoryPoints[i][2] + "   Failure Effects: " + arrAdventureLossPoints[i][0] + "/" + arrAdventureLossPoints[i][1] + "/" + arrAdventureLossPoints[i][2];
	}
}























