function changeClip(event) {
    var value = event.target.value;
    console.log("clip" + value);
    result.style.backgroundClip = value;
}

function changeOrigin(event) {
    var value = event.target.value;
    console.log("origin" + value);
    result.style.backgroundOrigin = value;
}
function changeRepeat(event) {
    var value = event.target.value;
    console.log("repeat" + value);
    result.style.backgroundRepeat = value;
}
function changeSize(event) {
    var value = event.target.value;
    console.log("size" + value);
    // result.style.backgroundSize = value;
    //  result.style.backgroundSize = value + "%";
    //  percent.innerHTML = value;

    if (value == 'auto' || value == 'contain' || value == 'cover'){
        result.style.backgroundSize = value;
}else {
        result.style.backgroundSize = value + "%";
        percent.innerHTML = value;

    }
}

function changePositon(event) {
    var value = event.target.value;
    var x=  document.getElementById("percentX");
    var y=  document.getElementById("percentY");

    if (value == 'left top' || value == 'left bottom' || value == 'right top' || value == 'right bottom' || value == 'center center'){
        result.style.backgroundPosition = value;
    }else{
        result.style.backgroundPosition = poX.value + "% " + poY.value + "% ";
         x.innerHTML = poX.value;
         y.innerHTML = poY.value;
         
    
    }
}


function changeBackground(event) {
    var value = event.target.value;
    console.log("Background" + value);
    result.style.background = value;
}


function changeAttachment(event) {
    var value = event.target.value;
    console.log("changeAttachment" + value);
    result.style.backgroundAttachment = value;
}