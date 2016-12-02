
// text_js

function changeBG(event) {
    var bg = event.target.value;

    result_out.style.backgroundColor= bg;
}
function changeText(event) {
    var color = event.target.value;

    result_out1.style.color = color;
}
function changeStyle(event) {
    var font =event.target.value;

    result_out1.style.fontStyle = font;
}