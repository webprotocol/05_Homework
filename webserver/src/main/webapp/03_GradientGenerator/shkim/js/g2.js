
var color='';
var direction='';


function changeColor(event) {
	color=event.target.value;
	
	gardient_out.style.backgroundImage = 'linear-gradient('+direction+','+color+')';
}

function changeDirection(event) {
	direction = event.target.value;
	console.log(direction);
	gardient_out.style.backgroundImage = 'linear-gradient('+direction+','+color+')';
}