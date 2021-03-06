// Variable Declaration

var temp;

var growthPoints = 5;
var arrGrowthSelections = [0, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 0]; // 0 = unselected, 1 = selected, 2 = locked in
var arrGrowthPrices = [7, 9, 10, 3, 9,   9, 2, 2, 6, 10,   6, 10, 3, 7, 6,   3, 8, 6, 6, 2,   6, 3, 7, 5, 2,   7, 6, 3, 6, 5,   5, 9, 5, 3, 10,   10, 2, 6, 6, 5,   6, 3, 4, 5, 5,   6, 10, 10, 3, 7,   5, 2, 5, 6, 9,   10, 10, 2, 5, 7];
var arrGrowthPrereq = [-1, 0, 1, -1, 3,   3, -1, 6, 6, 8,   6, 10, -1, 12, 12,   -1, 15, 15, 15, -1,   -1, -1, 21, 21, -1,   24, 24, -1, 27, 27,   -1, 30, -1, -1, 33,   33, -1, 36, 36, -1,   39, -1, 41, 41, 41,   -1, 45, 45, -1, 48,   -1, -1, 51, 51, 51,   54, 54, -1, 57, -1]; // Location in arrGrowthSelections array of prereq; must have prereq locked in to take this. -1 means no prereq.
var arrGrowthName = ["Fast", "Faster", "Fastest", "Telekinetic Shroud", "Kinesis X",   "Kinesis Y", "Heroic Form", "Immortal", "Unbroken", "Unbreakable",   "Mighty", "Herculean", "White Magic", "Deathbreaker", "Cursebreaker",   "Elementalism", "Elemental Forge", "Elemental Transmutation", "Narrow Paths", "Baleful Glow",   "Ritualism", "Aetherflux", "Flux Memory", "Flux Storm", "Necessary Talent",   "Necessary Ability", "Necessary Knowledge", "Box of Scraps", "Submaterial Refinement", "Always Prepared",   "Painless Augmentation", "Unbound Alteration", "Mass Proliferation", "Extended Tree", "Deep Extraction",   "Unreality Synthesis", "Endless Riches", "Ancient Armory", "Relic Vault", "Band of Friends",   "League of Heroes", "Ruler", "Political Consolidation", "Economic Update", "Expansion Plans",   "Spirit Seed", "Investment", "Divine Plan", "Wanted Alive", "Inevitable Escape",   "Datashift", "A Chance", "Everyone Lives", "Soft Counter", "Ray of Hope",   "Darkest Hour", "True Heroes", "Chekhov", "Guiding Light", "Criticality"]

var changePoints = 3;
var arrChangeSelections = [0, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 0]; // 0 = unselected, 1 = selected, 2 = locked in
var arrChangePrices = [1, 1, 1, 1, 1,   1, 1, 1, 1, 1,   1, 1, 1, 1, 1,   1, 1, 1, 1, 1,   1, 1, 1, 1, 1,   1, 1, 1, 1, 1,   1, 1, 1, 1, 1,   1, 1, 1, 1, 1,   1, 1, 1, 1, 1];
var arrChangePrereq = [-1, 0, -1, -1, -1,   -1, -1, -1, -1, -1,   9, -1, -1, -1, -1,   -1, -1, -1, -1, -1,   -1, -1, -1, -1, -1,   -1, 25, -1, -1, -1,   -1, 30, 31, -1, 33,   -1, -1, -1, -1, -1,   39, -1, -1, -1, -1]; // Location in arrChangeSelections array of prereq; must have prereq locked in to take this. -1 means no prereq.
var arrChangeName = ["Petty Aura of Death", "Lesser Aura of Death", "Aura of Cleansing", "Ekksbaen", "False Void",   "Poisonous", "Orchestrated", "Bit of Flair", "Touch of Chosinspry", "Bloody Harvest",   "Bloody Synthesis", "Partnership", "Signature Style", "Entitlement", "Aftshadow",   "Withdrawn", "Damage Dispersion", "Self-Assessment", "Honesty", "Understanding",   "Freedom", "Bloodthirst", "Motive Flux", "Fateful Exchange", "Semifertility",   "Perfected Digestion", "Metabolic Shift", "Move Speed", "Natural Habitat", "New Light",   "Basic Rescale", "Extreme Rescale", "Ridiculous Rescale", "Skin Shift", "Unusual Skin",   "Decorative", "Reshaped", "Timelock", "Acquired Instability", "Relimb",   "Destructure", "Recomposed", "Good Touch", "Outflow", "Bounty"];

var damagePoints = 1;
var arrDamageSelections = [0, 0, 0]; // 0 = unselected, 1 = selected, 2 = locked in
var arrDamagePrices = [1, 2, 3];
var arrDamagePrereq = [2, -1, -1]; // Location in arrDamageSelections array of prereq; must have prereq locked in to take this. -1 means no prereq.
var arrDamageName = ["DOne", "DTwo", "DThree"];

var arrChoiceCards = [];



var victoryStat = 0;

var arrMight = 		[2, 2, 2, 1, 2,   2, 1, 1, 2, 2,   2, 2, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 1, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 0,   1, 0, 0, 0, 0];
var arrMagic = 		[0, 1, 1, 0, 1,   0, 0, 0, 0, 0,   0, 1, 1, 1, 1,   1, 1, 1, 2, 1,   1, 1, 2, 1, 0,   1, 0, 0, 0, 0,   0, 0, 0, 0, 0,   1, 0, 0, 1, 0,   0, 0, 0, 0, 0,   0, 0, 1, 0, 0,   0, 0, 0, 0, 1,   0, 0, 0, 0, 0];
var arrArtifice = 	[0, 0, 0, 0, 0,   1, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 1, 1, 0, 0,   1, 0, 0, 0, 1,   1, 1, 1, 2, 1,   1, 2, 1, 1, 2,   2, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 1, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 0];
var arrAllies = 	[0, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 1, 1,   0, 1, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 0,   1, 1, 1, 0, 0,   0, 1, 1, 1, 2,   2, 1, 1, 2, 2,   2, 2, 2, 0, 0,   0, 0, 1, 0, 0,   0, 1, 0, 0, 1];
var arrFortune = 	[0, 0, 0, 0, 0,   0, 0, 0, 0, 1,   0, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 1, 0,   0, 1, 0, 0, 1,   0, 0, 0, 0, 1,   0, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 1, 2,   2, 1, 1, 2, 2,   2, 2, 1, 2, 1];



var arrAdventureOptions = [1, 0, 1]; // 0 = unshown/not option, 1 = shown/option, 2 = already used

// Maybe replace these with two things: one goes 'what one positive stat is significant', other goes 'what one negative stat is significant'
var arrAdventureLewd = [0, 0, 1]; // yes/no is the Lewd stat significant
var arrAdventureMight = [1, 0, 1]; // yes/no is the Might stat significant

var arrAdventureDifficulty = [10, 12, 13];
var arrAdventureVictoryPoints = [[4, 2, 5], [4, 2, 5], [5, 1, 2]]; // Points awarded on victory
var arrAdventureLossPoints = [[5, 2, 4], [5, 2, 4], [2, 1, 5]]; // Points awarded on failure


// Functions


// Runs the tabs
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
	update();
}

function setTab(tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tablinks.length; i++) {
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
	
	if (getStat("might") > 0)
		text += "<br />" + "Might: " + getStat("might");
	if (getStat("magic") > 0)
		text += "<br />" + "Magic: " + getStat("magic");
	if (getStat("artifice") > 0)
		text += "<br />" + "Artifice: " + getStat("artifice");
	if (getStat("allies") > 0)
		text += "<br />" + "Allies: " + getStat("allies");
	if (getStat("fortune") > 0)
		text += "<br />" + "Fortune: " + getStat("fortune");
	
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
	
	if (stat == "might")
	{	for (var i = 0; i < arrGrowthSelections.length; i++)
		{	if (arrGrowthSelections[i] != 0)
				total += arrMight[i];
		}
	}
	if (stat == "magic")
	{ 	for (var i = 0; i < arrGrowthSelections.length; i++)
		{	if (arrGrowthSelections[i] != 0)
				total += arrMagic[i];
		}
	}
	if (stat == "artifice")
	{	for (var i = 0; i < arrGrowthSelections.length; i++)
		{	if (arrGrowthSelections[i] != 0)
				total += arrArtifice[i];
		}
	}
	if (stat == "allies")
	{	for (var i = 0; i < arrGrowthSelections.length; i++)
		{	if (arrGrowthSelections[i] != 0)
				total += arrAllies[i];
		}
	}
	if (stat == "fortune")
	{	for (var i = 0; i < arrGrowthSelections.length; i++)
		{	if (arrGrowthSelections[i] != 0)
				total += arrFortune[i];
		}
	}
	
	return total;
}

function containsObject(obj, list) {
    var i;
    for (var i = 0; i < list.length; i++) {
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
		for (var i = 0; i < arrGrowthSelections.length; i++)
		{
			if (arrGrowthSelections[i] == 1)
			{
				total += arrGrowthPrices[i];
			}
		}
	}
	if (category == "change")
	{
		for (var i = 0; i < arrChangeSelections.length; i++)
		{
			if (arrChangeSelections[i] == 1)
			{
				total += arrChangePrices[i];
			}
		}
	}
	if (category == "damage")
	{
		for (var i = 0; i < arrDamageSelections.length; i++)
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
		for (var i = 0; i < arrChoiceCards.length; i++) // Turns green cards blue, indicating they are locked in
		{
			if (arrChoiceCards[i].style.borderColor == "green")
				arrChoiceCards[i].style.borderColor = "blue"
		}
		for (var i = 0; i < arrGrowthSelections.length; i++) // Turns growth selections into locked in
		{
			if (arrGrowthSelections[i] == 1)
			{
				arrGrowthSelections[i] = 2;
				extendReport("Growth: " + arrGrowthName[i] + " purchased for " + arrGrowthPrices[i] + " Growth points.");
			}
		}
		for (var i = 0; i < arrChangeSelections.length; i++) // Turns growth selections into locked in
		{
			if (arrChangeSelections[i] == 1)
			{
				arrChangeSelections[i] = 2;
				extendReport("Change: " + arrChangeName[i] + " purchased for " + arrChangePrices[i] + " Change points.");
			}
		}
		for (var i = 0; i < arrDamageSelections.length; i++) // Turns growth selections into locked in
		{
			if (arrDamageSelections[i] == 1)
			{
				arrDamageSelections[i] = 2;
				extendReport("Damage: " + arrDamageName[i] + " purchased for " + arrDamagePrices[i] + " Damage points.");
			}
		}
		
		// Hiding Planning stage menu bar, items (look into the engine that runs the tabs)
		document.getElementById("planningStage").style.display = "none";
		document.getElementById("tabButtons").style.display = "none";
		
		// Determining Adventure stage choices
		var options = 2; // Can adjust this later, should be like 3
		var picks = 0;
		var choice = 0;
		for (var i = 0; i < arrAdventureOptions.length; i++)
		{
			if (arrAdventureOptions[i] != 2) // If it hasn't already been chosen
				arrAdventureOptions[i] = 0;
		}
		for (var i = 0; i < 99; i++) // Should be plenty of tries
		{
			choice = (Math.floor(Math.random() * arrAdventureOptions.length))
			if (arrAdventureOptions[choice] == 0 && picks < options)
			{
				picks++;
				arrAdventureOptions[choice] = 1;
			}
		}
		
		// Generating informational notes about the adventures
		for (var i = 0; i < arrAdventureOptions.length; i++)
		{
			var label = document.getElementById(String('lblAdvInfo_' + i));
			if ((Math.floor(20 - arrAdventureDifficulty[i] + getModifier(i)) * 5) > 0)
				label.innerHTML = "Success Chance: " + Math.min((Math.floor(20 - arrAdventureDifficulty[i] + getModifier(i)) * 5), 100) + "%   Victory Rewards: " + arrAdventureVictoryPoints[i][0] + "/" + arrAdventureVictoryPoints[i][1] + "/" + arrAdventureVictoryPoints[i][2] + "   Failure Effects: " + arrAdventureLossPoints[i][0] + "/" + arrAdventureLossPoints[i][1] + "/" + arrAdventureLossPoints[i][2];
			else
				label.innerHTML = "Success Chance: " + Math.max((Math.floor(20 - arrAdventureDifficulty[i] + getModifier(i)) * 5), 0) + "%   Victory Rewards: " + arrAdventureVictoryPoints[i][0] + "/" + arrAdventureVictoryPoints[i][1] + "/" + arrAdventureVictoryPoints[i][2] + "   Failure Effects: " + arrAdventureLossPoints[i][0] + "/" + arrAdventureLossPoints[i][1] + "/" + arrAdventureLossPoints[i][2];
		}
		
		// Showing Adventure stage choices/hiding ones that shouldn't be seen
		document.getElementById("adventureStage").style.display = "block";
		
		for (var i = 0; i < arrAdventureOptions.length; i++)
		{
			var label = document.getElementById(String('adventure_' + i));
			if (arrAdventureOptions[i] == 1) { label.style.display = "block"; }
			else { label.style.display = "none"; }
		}
		
		// Check if you meet endgame conditions, runs through every stat
		// Arguably a waste to do it after setting up the adventure stuff, but eh, better than risking the ending being overridden by adventures
		if (getStat('lewd') >= 10)
			endGame('lewd');
		if (getStat('might') >= 10)
			endGame('might');

	}
	update();
}

// Moves you from Adventure stage to Planning stage
function endAdventure(adventure) // "adventure" is number indicating which trial the player chose. 
{
	// Check adventure success
	var modifier = getModifier(adventure);
	var roll = (Math.floor(Math.random() * 20 + 1))
	
	if ((modifier + roll) >= arrAdventureDifficulty[adventure])
	{
		var victory = true;
		extendReport(String("Adventure: Your roll of " + roll + ", with it's modifier of " + modifier + ", met the difficulty of " + arrAdventureDifficulty[adventure]));
	}
	else
	{
		var victory = false;
		extendReport(String("Adventure: Your roll of " + roll + ", with it's modifier of " + modifier + ", did not meet the difficulty of " + arrAdventureDifficulty[adventure]));
	}
	
	
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
	
	// Add something to the Report page explaining your victory/defeat
	setTab("Report");
	if (victory == true)
		extendReport(String("Adventure: Victory against adventure number " + adventure + " was achieved. " + growthPoints + "/" + changePoints + "/" + damagePoints + " points were awarded."));
	if (victory == false)
		extendReport(String("Adventure: Defeated by adventure number " + adventure + ". " + growthPoints + "/" + changePoints + "/" + damagePoints + " points were awarded."));
	extendReport("---");
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
	
	if (arrAdventureMight[adventure] == 1) // Positive stat applies bonus if relevant, small penalty if not relevant
		modifier += getStat('might');
	else
		modifier -= getStat('might') / 4;
	
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
	extendReport("Info: Game finished. The " + avenge + " ending has been achieved.");
	
	setTab('Ending');
		
	if (avenge == 'lewd') { document.getElementById("endLewd").style.display = "block"; }
	else { document.getElementById("endLewd").style.display = "none"; }
		
	if (avenge == 'might') { document.getElementById("endMight").style.display = "block"; }
	else { document.getElementById("endMight").style.display = "none"; }
	
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
	extendReport("Info: The game begins.");
	
	for (var i = 0; i < arrGrowthSelections.length; i++) // Growth option info
	{
		var label = document.getElementById(String('lblGrowInfo_' + i));
		label.innerHTML = "Cost: " + arrGrowthPrices[i];
		if (arrGrowthPrereq[i] != -1)
			label.innerHTML += "<br> Requires " + arrGrowthName[arrGrowthPrereq[i]];
		if (arrMight[i] + arrMagic[i] + arrArtifice[i] + arrAllies[i] + arrFortune[i] > 0)
			label.innerHTML += "<br> Grants"
		if (arrMight[i] > 0)
			label.innerHTML += " +" + arrMight[i] + " Might";
		if (arrMagic[i] > 0)
			label.innerHTML += " +" + arrMagic[i] + " Magic";
		if (arrArtifice[i] > 0)
			label.innerHTML += " +" + arrArtifice[i] + " Artifice";
		if (arrAllies[i] > 0)
			label.innerHTML += " +" + arrAllies[i] + " Allies";
		if (arrFortune[i] > 0)
			label.innerHTML += " +" + arrFortune[i] + " Fortune";
	}
	
	for (var i = 0; i < arrChangeSelections.length; i++) // Change option info
	{
		var label = document.getElementById(String('lblChangeInfo_' + i));
		label.innerHTML = "Cost: " + arrChangePrices[i];
		if (arrChangePrereq[i] != -1)
			label.innerHTML += "<br> Requires " + arrChangeName[arrChangePrereq[i]];
	}
	
	for (var i = 0; i < arrDamageSelections.length; i++) // Damage option info
	{
		var label = document.getElementById(String('lblDamageInfo_' + i));
		label.innerHTML = "Cost: " + arrDamagePrices[i];
		if (arrDamagePrereq[i] != -1)
			label.innerHTML += "<br> Requires " + arrDamageName[arrDamagePrereq[i]];
	}
}

// Debug: adjust points
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

// Debug: Adjusts Victory stat
function modVictory(n)
{
	if (n == 1)
		victoryStat = 100;
	if (n == 2)
		victoryStat = 0;
	if (n == 3)
		victoryStat = -100;
	
	for (var i = 0; i < arrAdventureOptions.length; i++)
	{
		var label = document.getElementById(String('lblAdvInfo_' + i));
		if ((Math.floor(20 - arrAdventureDifficulty[i] + getModifier(i)) * 5) > 0)
			label.innerHTML = "Success Chance: " + Math.min((Math.floor(20 - arrAdventureDifficulty[i] + getModifier(i)) * 5), 100) + "%   Victory Rewards: " + arrAdventureVictoryPoints[i][0] + "/" + arrAdventureVictoryPoints[i][1] + "/" + arrAdventureVictoryPoints[i][2] + "   Failure Effects: " + arrAdventureLossPoints[i][0] + "/" + arrAdventureLossPoints[i][1] + "/" + arrAdventureLossPoints[i][2];
		else
			label.innerHTML = "Success Chance: " + Math.max((Math.floor(20 - arrAdventureDifficulty[i] + getModifier(i)) * 5), 0) + "%   Victory Rewards: " + arrAdventureVictoryPoints[i][0] + "/" + arrAdventureVictoryPoints[i][1] + "/" + arrAdventureVictoryPoints[i][2] + "   Failure Effects: " + arrAdventureLossPoints[i][0] + "/" + arrAdventureLossPoints[i][1] + "/" + arrAdventureLossPoints[i][2];
	}
}

// Debug: Shows all possible adventures
function revealAdventures()
{
	for (var i = 0; i < arrAdventureOptions.length; i++)
	{
		var label = document.getElementById(String('adventure_' + i));
		label.style.display = "block";
	}
}























