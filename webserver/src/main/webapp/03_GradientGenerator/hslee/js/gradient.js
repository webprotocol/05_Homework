var color='';
var direction='';
var shape='';
var direc='';


function changeColor(event) {
	color = event.target.value;
	// console.log("background-color" + value);
	result.style.backgroundImage = 'linear-gradient('+ ',' + color +')';
}

function changeDir(event) {
	direction = event.target.value;
	// console.log("background-line" + value);
	result.style.backgroundImage = 'linear-gradient(' + direction+',' +color + ')';
}

function changeShape(event) {
	shape = event.target.value;
	result.style.backgroundImage = 'radial-gradient(' + shape +',' + color + ')';
}

function changeDirec(event) {
	direc = event.target.value;
	result.style.backgroundImage = 'radial-gradient('  + direc+',' +color + ')';
}

// function clearAll() {
// 	color_out.style.backgroundImage = '';
// 	dir_out.style.backgroundImage = '';
// 	shape_out.innerHTML = ''; 
// 	dir2_out.innerHTML = '';

// 	color.value = ""; 
// 	dir.velue = "";
// 	shape.value = "";
// 	dir2.value = "";
// }