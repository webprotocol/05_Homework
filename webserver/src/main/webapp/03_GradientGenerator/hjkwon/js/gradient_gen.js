var m_GradientType = "linear";

function MoveOptionContainer() {
	var cord_X = document.getElementById("OptionContainer_X").value;
	var cord_Y = document.getElementById("OptionContainer_Y").value;

	var OptionContainer = document.getElementById("OptionContainer");
	OptionContainer.style['left'] = cord_X + "%";
	OptionContainer.style['top'] = cord_Y + "%";
}

function GetGradientType() {
	var GradientType = document.getElementsByName('GradientType');
	for (var i = 0; i < GradientType.length; i++ ) {
		if (GradientType[i].checked) {
			return GradientType[i].value;
		}
	}
}

function ChangeType() {
	var value = GetGradientType();
	var box = document.getElementById("GradientAttributes");
	box.innerHTML = '<legend>Gradient Attributes</legend>';
	switch (value) {
		case "linear":
			box.innerHTML += 'Direction : <input type="text" id="Attr01" value="45deg">';
			break;
		case "radial":
			box.innerHTML += 'Shape : <input type="text" id="Attr01" value="circle">';
			break;
	}
}


function GenerateGradient() {
	var value = GetGradientType();
	switch (value) {
		case "linear":
			Gradient_Linear();
			break;
		case "radial":
			Gradient_Radial();
			break;
		default:
			console.log("cannot find " + value);
			break;
	}
}

var m_NumberOfColors = 2;

function GenerateColorBoxes() {
	var ColorBox = document.getElementById("ColorBox");
	ColorBox.innerHTML = null;

	var NumberOfColors = document.getElementById("NumberOfColors");

	for (var i = 1; i <= NumberOfColors.value; i++) {
		var divs = Math.round( ( 100 / ( NumberOfColors.value - 1 ) ) * ( i - 1 ) );
		ColorBox.innerHTML += '<span>Color' + i + ' : # <input type="text" Name="ColorCol" class="ColorCode"> <input type="text" Name="ColorColSpot" class="ColorCodeSpot" value=' + divs + '>%</span>';
		m_NumberOfColors = i;
	}
}

function GenerateGradientString() {
	var str = ""; // default
	var ColorCol = document.getElementsByName("ColorCol");
	var ColorColSpot = document.getElementsByName("ColorColSpot");
	for (var i = 0; i < ColorCol.length; i++) {
		var Color = ColorCol[i].value;
		var Spot = ColorColSpot[i].value;
		if (Color == null) {
			switch (i) {
				case 1:
					Color.value = "000000";
					break;
				case 2:
					Color.value = "FFFFFF";
					break;
			}
		}
		str += "#" + Color + " " + Spot + "%";
		if ( i + 1 != ColorCol.length) {
			str += ", ";
		}
	}
	return str;
}

function Gradient_Linear() {
	var body = document.body;
	var LinearDirection = document.getElementById("Attr01").value;
	body.style['background-image'] = 'linear-gradient( ' + LinearDirection + ', ' + GenerateGradientString() + ' )';
	console.log('linear-gradient( ' + LinearDirection + ', ' + GenerateGradientString() + ' )');
}

function Gradient_Radial() {
	var body = document.body;
	var RadialShape = document.getElementById("Attr01").value;
	body.style['background-image'] = 'radial-gradient( ' + RadialShape + ', ' + GenerateGradientString() + ' )';
	console.log(GenerateGradientString());
}