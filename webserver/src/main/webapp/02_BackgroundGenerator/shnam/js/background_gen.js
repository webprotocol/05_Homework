/*changeClip */

function changeClip(event) {
    console.log("backgroundClip:" + value);
    var value = event.target.value;

    result.style.backgroundClip = value;
}

/*changeOrigin*/

function changeOrigin(event) {
    console.log("backgroundOrigin:" + value);
    var value = event.target.value;

    result.style.backgroundOrigin = value;
}

/*changeRepeat*/
function changeRepeat(event) {
    console.log("backgroundRepeat:" + value);
    var value = event.target.value;

    result.style.backgroundRepeat = value;
}
/*changeSize */
function changeSize(event) {
    var value = event.target.value;
    console.log("backgroundSize:" + value);
    /*
    value = 'auto', 'contain', 'conver'
    value = 0~100
    */

    /*if (event.target.type == 'range') {
        percent.innerHTML = value + '%';
        value = value + '%';

    }
*/
    if (value == 'auto' || value == 'contain' || value == 'cover') {
        result.style.backgroundSize = value;
    } else {
        result.style.backgroundSize = value + '%';
        percent.innerHTML = value;
    }
}
/*changeRepeat*/
function changeBackground(event) {
    console.log("background" + value);
    var value = event.target.value;

    result.style.background = value;
}

function changePosition(event) {
    console.log("backgroundPosition" + value);
    var value = event.target.value;
    if (value == 'left top' || value == 'left bottom' || value == 'right top'|| value == 'right bottom'|| value == 'center center') {
        result.style.backgroundPosition = value;
    }
    else {
        result.style.backgroundPosition = posX.value + '% '+posY.value+ '%';
        event.target.nextSibling.innerHTML = value + '%';
    }
}
function changeAttachment(event){
    console.log("backgroundAttachment" + value);
    var value = event.target.value;

    result.style.backgroundAttachment = value;
}