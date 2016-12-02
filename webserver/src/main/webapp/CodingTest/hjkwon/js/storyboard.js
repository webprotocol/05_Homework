var Status = "Terminated";
var Activated = [];
var Clicked = [];
var timer = -1;
var Timer_Handler = [];
var MoleValue = [];
var MaxMoles = 0;
var CalculatedPoints = 0;

//Setting
var timermax = 60;

function Initialize() {
	var Moles = document.getElementsByName("MoleMobile");
	var DebugBox = document.getElementsByClassName("DebugMoleActive");
	var DebugBoxClicked = document.getElementsByClassName("DebugMoleClicked");
	var DebugBoxValue = document.getElementsByClassName("DebugMoleValue");

	for ( var i = 0; i < 4; i++ ) {
		/* TimerHandler section
			0 : Tick Counter 
			1~3 : Mole handler
		*/
		Timer_Handler[i] = null;
	}

	for( var i = 0; i < Moles.length; i++) {
		Moles[i].style['transform'] = "translate( 0, 120px)";
		Activated[i] = false;
		Clicked[i] = 0;
		MoleValue[i] = 0;

		DebugBox[i].style['background-color'] = "red";
		DebugBoxClicked[i].innerHTML = Clicked[i];
		DebugBoxValue[i].innerHTML = 0;
	}
	timer = -1;
	MaxMoles = 1;

	CalculatedPoints = 0;

	document.getElementById("MoleCatched").innerHTML = 0;
	document.getElementById("ScoreValue").innerHTML = CalculatedPoints;
}

function PlayPauseButtonClicked() {
	if ( Status == "Terminated" ) {
		GameStart();
	}
	else if ( Status == "Paused" ) {
		GameResume();
	}
	else if ( Status == "Started" || Status == "Resumed" ) {
		GamePause();
	}
}

function GameStart() {
	Status = "Started";
	document.getElementById("DebugGameStatus").innerHTML = Status;
	ChangePlayPauseIcon()

	Initialize();

	//Transform PlayButton

	//Select Random Mole on Started
	CountTimer();
}

function CountTimer() {
	timer += 1;
	if ( timer >= timermax ) {
		TerminateAll();
		document.getElementById("DebugGameStatus").innerHTML = "Game Finished!";
		document.getElementById("DebugTimer").innerHTML = "";
	}
	else {
		Timer_Handler[0] = setTimeout( function() { CountTimer() }, 1000 );
		document.getElementById("DebugTimer").innerHTML = "Game Play Timer : " + timer + " / " + timermax + " (" + (timer / timermax * 100 ) + "%)";

		if ( timer / timermax >= 0.5000 ) {
			MaxMoles = 2;
		}
		if ( timer / timermax >= 0.8333 ) {
			MaxMoles = 3;
		}

		for ( var i = 1; i <= MaxMoles; i++ ) {
			var IndexValue = i;
			console.log("Checking Index:" + i );
			if ( !CheckMoleValue[i] ) {
				console.log("Timer Handler No." + i + " Activated.");
				Timer_Handler[i] = setTimeout( function() { WakeUpMole( RandomMinMax(0,6), IndexValue ) }, 0 );
			}
		}
	}
}

function CheckMoleValue( index ) {
	for ( var i = 0; i < MoleValue.length; i++ ) {
		if ( MoleValue[i] == index ) 
			return true;
	}
	return false;
}

function WakeUpMole( num , TimerIndex ) {
	console.log("Wake Up Mole Function Activated! Num:" + num + " TimerIndex:" + TimerIndex);
	var MoleNum = num;

	if ( timer < timermax ) {
		ActiveMole(num, TimerIndex);
	}
}

function ActiveMole( num, TimerIndex ) {
	console.log("Active Mole Function Activated! Num:" + num + " TimerIndex:" + TimerIndex);
	var Moles = document.getElementsByName("MoleMobile");
	var DebugBox = document.getElementsByClassName("DebugMoleActive");
	var DebugBoxValue = document.getElementsByClassName("DebugMoleValue");

	if ( !Activated[num] ) {
		Activated[num] = true;
		Moles[num].style['transform'] = "translate( 0, 0)";
		DebugBox[num].style['background-color'] = "green";
		MoleValue[num] = TimerIndex;
		DebugBoxValue[num].innerHTML = MoleValue[num];
		Timer_Handler[TimerIndex] = setTimeout( function() { DisableMole(num, MoleValue[num]) }, 1750 - 250 * MaxMoles );
	}
}

function DisableMole( MoleNum, TimerIndex ) {
	console.log("Disable Mole Function Activated! Num:" + MoleNum + " TimerIndex:" + TimerIndex);
	var Moles = document.getElementsByName("MoleMobile");
	var DebugBox = document.getElementsByClassName("DebugMoleActive");
	var DebugBoxValue = document.getElementsByClassName("DebugMoleValue");

	if ( Activated[MoleNum] ) {
		Moles[MoleNum].style['transform'] = "translate( 0, 120px)";
		DebugBox[MoleNum].style['background-color'] = "red";
		Activated[MoleNum] = false;
		clearTimeout( Timer_Handler[TimerIndex] = null );
		MoleValue[MoleNum] = 0;
		DebugBoxValue[MoleNum].innerHTML = MoleValue[MoleNum];
	}
}

function TerminateAll() {
	console.log("Terminate All Function Activated!");
	var Moles = document.getElementsByName("MoleMobile");
	for ( var i = 0; i <= Moles.length; i++ ) {
		DisableMole(i);
		Activated[i] = false;
	}
	for ( var i = 0; i <= 3; i++ ) {
		clearTimeout( Timer_Handler[i] );
	}
	timer = timermax;
	Status = "Terminated";
	if ( ButtonType == 1 ) {
		ChangePlayPauseIcon();
	}
	document.getElementById("DebugGameStatus").innerHTML = Status;
}

function GamePause() {
	Status = "Paused";
	ChangePlayPauseIcon();
	
	for ( var i = 0; i <= 3; i++ ) {
		clearTimeout( Timer_Handler[i] );
	}

	var Moles = document.getElementsByName("MoleMobile");
	for ( var i = 0; i <= Moles.length; i++ ) {
		DisableMole(i);
		Activated[i] = false;
	}

	document.getElementById("DebugGameStatus").innerHTML = Status;
}

function GameResume() {
	Status = "Resumed";
	ChangePlayPauseIcon();
	CountTimer();
	document.getElementById("DebugGameStatus").innerHTML = Status;
}

var ButtonType = 0;
function ChangePlayPauseIcon() {
	var Leftbox = document.getElementById("Left");
	var Rightbox = document.getElementById("Right");
	var Playbox = document.getElementById("PlayTriangle");


	if ( ButtonType == 0 ) {
		Leftbox.style['display'] = Rightbox.style['display'] = "block";
		Playbox.style['display'] = "none";

		ButtonType = 1;
	}
	else {
		Leftbox.style['display'] = Rightbox.style['display'] = "none";
		Playbox.style['display'] = "block";
		ButtonType = 0;
	}
}

function MoleClickEvent(num) {
	console.log("Mole Click Event Activated! Num:" + num);
	var Moles = document.getElementsByName("MoleMobile");
	var DebugBox = document.getElementsByClassName("DebugMoleClicked");
	var DebugBox2 = document.getElementsByClassName("DebugMoleValue");
	if ( Activated[num] ) {
		Clicked[num] += 1;
		DebugBox[num].innerHTML = Clicked[num];
		DebugBox2[num].innerHTML = MoleValue[num];
		DisableMole(num, MoleValue[num]);
		CalculatedPoints += MaxMoles * RandomMinMax(10,15);
	}

	var catched = 0;
	for ( var i = 0; i < Clicked.length; i++ ) {
		catched += Clicked[i];
	}

	document.getElementById("MoleCatched").innerHTML = catched;
	document.getElementById("ScoreValue").innerHTML = CalculatedPoints;

}

function RandomMinMax(min, max) {
	var value = min;
	var temp = Math.random() * (max - min + 1);
	var temp2 = parseInt(temp);
	value += temp2;
	return value;
}