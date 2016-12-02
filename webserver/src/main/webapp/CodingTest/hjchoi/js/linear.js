
// linear_js

var color='';
var direction='';

function changeColor(event) {
    color = event.target.value;
    result_out.style.backgroundImage = 'linear-gradient('+direction+','+color+')';
}
function changeDir(event) {
    direction = event.target.value;
    result_out.style.backgroundImage = 'linear-gradient('+direction+','+color+')';
}
function changeDeg(event) {
    direction = event.target.value;
    result_out.style.backgroundImage = 'linear-gradient('+direction+'deg,'+color+')';
}