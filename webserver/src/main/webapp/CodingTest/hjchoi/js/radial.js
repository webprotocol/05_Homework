
// radial_js

var color = '';
var shape = '';
var size = '';

function changeColor(event) {
    color = event.target.value;
    
    result_out.style.backgroundImage = 'radial-gradient('+color+')';
}
function changeShape(event) {
    shape = event.target.value;
   
    result_out.style.backgroundImage = 'radial-gradient('+shape+','+color+')';
}
function changeSize(event) {
    size = event.target.value;

    result_out.style.backgroundImage = 'radial-gradient('+size+','+color+')';
}

