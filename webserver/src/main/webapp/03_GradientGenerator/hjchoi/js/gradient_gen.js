
// linear
var color='';
var direction='';


// radial
var col='';
var shape='';
var size='';

// linear
function changeColor(event) {
	color=event.target.value;
	gardient_out.style.backgroundImage = 'linear-gradient('+direction+','+color+')';
}

function changeDirection(event) {
	direction = event.target.value;
	gardient_out.style.backgroundImage = 'linear-gradient('+direction+','+color+')';
}

// radial
function changeColor2(event) {
	col=event.target.value;
	gardient_out.style.backgroundImage = 'radial-gradient('+col+')';
}
function changeShape(event) {
	shape = event.target.value;
	gardient_out.style.backgroundImage = 'radial-gradient('+shape+','+col+')';
}
function changeSize(event) {
	size = event.target.value;
	gardient_out.style.backgroundImage = 'radial-gradient('+size+','+col+')';
}