// cube X
	function RotateX(event) {
			var me = event.target;
			var span = me.nextSibling;
			var value = me.value;
			var cube = document.querySelector('.cube');
			span.innerHTML = value;
			cube.style.transform = "rotateX(" + value + "deg)";
}

// border-color
	var red = 255;
	var green = 0;
	var blue = 0;   

	function Red(event) {
		red = event.target.value;
		red_output.style.background = 'rgb(' +red+',0,0)';
		border_output.style['border-color'] = 'rgb('+ red + ',' + green + ',' + blue + ')';
		
	}  

	function Green(event) {
		green = event.target.value;
		green_output.style.background = 'rgb(0,' +green+',0)';

		border_output.style['border-color'] = 'rgb('+ red + ',' + green + ',' + blue + ')';

	}  

	function Blue(event) {
		blue = event.target.value;
		blue_output.style.background = 'rgb(0,0,' + blue+')';

		border_output.style['border-color'] = 'rgb('+ red + ',' + green + ',' + blue + ')';
}  

// gradient
	var color='';
	var direction='';
	var shape='';
	var direc='';

	function Color(event) {
		color = event.target.value;
		document.body.style.backgroundImage = 'linear-gradient('+ ',' + color +')';
	}

	function Direction(event) {
		direction = event.target.value;
		document.body.style.backgroundImage = 'linear-gradient(' + direction+',' +color + ')';
	}

	function Shape(event) {
		shape = event.target.value;
		document.body.style.backgroundImage = 'radial-gradient(' + shape+',' +color + ')';
	}

	function Direction2(event) {
		direc = event.target.value;
		document.body.style.backgroundImage = 'radial-gradient(' + direc+',' +color + ')';
}