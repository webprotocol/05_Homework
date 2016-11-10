
function changeLindirec(event) {
	var value = event.target.value;
	console.log(value);

	if(value == 'to top' || value == 'to right' || value == 'to bottom' || value == 'to left') {
		result.style.background = 'linear-gradient('+ linear_direc.value + ',' + linear_color1.value + ',' + linear_color2.value + ')';
		console.log('linear-gradient('+ linear_direc.value + ',' + linear_color1.value + ',' + linear_color2.value + ')');
	} else {
	result.style.background = 'linear-gradient('+ gra_deg.value + 'deg,' + linear_color1.value + ',' + linear_color2.value + ')';
	
	lin_deg.innerHTML = gra_deg.value + 'º';
	}
}

function changeRadial(event) {
	var value = event.target.value;

	if (value == gra_direc1.value || value == gra_direc2.value) {
		result1.style.backgroundImage = 'radial-gradient(' + radial_shape.value + ' ' + radial_size.value + ' at ' + gra_direc1.value + '% ' + gra_direc2.value + '%,' + radial_color1.value + ',' + radial_color2.value +')';
		console.log('radial-gradient(' + radial_shape.value + ' ' + radial_size.value + ' at ' + gra_direc1.value + ' ' + gra_direc2.value + ',' + radial_color1.value + ',' + radial_color2.value +')');
		
		rad_direc1.innerHTML = gra_direc1.value;
		rad_direc2.innerHTML = gra_direc2.value;
	} else {
		result1.style.backgroundImage = 'radial-gradient(' + radial_shape.value + ' ' + radial_size.value + ',' + radial_color1.value + ',' + radial_color2.value +')';
		console.log('radial-gradient(' + radial_shape.value + ' ' + radial_size.value + ',' + radial_color1.value + ',' + radial_color2.value +')');
	}
}