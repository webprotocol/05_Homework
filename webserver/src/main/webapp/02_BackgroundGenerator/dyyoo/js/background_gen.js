console.log("background_gen.js...");

/*
 * changeClip
 */
function changeClip(event) {
    var value = event.target.value;
    console.log("background-clip: " + value);

    result.style.backgroundClip = value;
}
/*
 * changeOrigin
 */
function changeOrigin(event) {
    var value = event.target.value;
    console.log("background-origin: " + value);

    result.style.backgroundOrigin = value;
}
/*
 * changeRepeat
 */
function changeRepeat(event) {
    var value = event.target.value;
    console.log("background-repeat: " + value);

    result.style.backgroundRepeat = value;
}
/*
 * changeSize
 */
function changeSize(event) {
    var value = event.target.value;
    console.log("background-size: " + value);

	/* 
	 * 
	 * value = 'auto' | 'contain' | 'cover'
	 * value = 0 ~ 100
	 */

    if (value == 'auto' || value == 'contain' || value == 'cover') {
        result.style.backgroundSize = value;
    } else {
        result.style.backgroundSize = value + '%';
        persent.innerHTML = value;
    }

}


function changeAttachment(event) {
    var value = event.target.value;
    console.log("background-Attachment: " + value);
    result.style.backgroundAttachment = value;
}

function changePosition(event) {
    var value = event.target.value;
    console.log("background-position: " + value);

    if (value == 'left top' || value == 'left bottom' || value == 'right top' || value == 'right bottom' || value == 'center center') {
        result.style.backgroundPosition = value;
    } else {
        result.style.backgroundPosition = xx.value + '%' + yy.value + '%';
        persentX.innerHTML = xx.value;
        persentY.innerHTML = yy.value;

    }



}






/*
 * changeBackground
 */
function changeBackground(event) {
    var value = event.target.value;
    console.log("background: " + value);

    result.style.background = value;

}