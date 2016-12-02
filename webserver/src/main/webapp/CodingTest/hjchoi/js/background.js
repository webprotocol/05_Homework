
// background_js

var red = 0;
var green = 0;
var blue = 0;

function changeWidth(event) {
    var width = event.target.value;
    result_out.style.borderWidth = width+'px';
}
function changebColor(event) {
    var bordercolor = event.target.value;
    result_out.style.borderColor = bordercolor;
}

function changeRed(event) {
    red = event.target.value;
    red_out.innerHTML = red;
    red_out1.innerHTML = red;

    result_out.style.backgroundColor = 'rgb(' +red+ ',' +green+ ',' +blue+ ')';
}
function changeGreen(event) {
    green = event.target.value;
    green_out.innerHTML = green;
    green_out1.innerHTML =', '+green;

    result_out.style.backgroundColor = 'rgb(' +red+ ',' +green+ ',' +blue+ ')';
}
function changeBlue(event) {
    blue = event.target.value;
    blue_out.innerHTML = blue;
    blue_out1.innerHTML = ', '+blue;

    result_out.style.backgroundColor = 'rgb(' +red+ ',' +green+ ',' +blue+ ')';
}

