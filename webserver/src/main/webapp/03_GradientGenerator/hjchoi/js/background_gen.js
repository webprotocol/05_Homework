console.log("background_gen()...")

function changeClip(event) {
    var value = event.target.value;
    
    result.style.backgroundClip=value;

}
function changeOrigin(event) {
    var value = event.target.value;
    
    result.style.backgroundOrigin=value;

}
function changeRepeat(event) {
    var value = event.target.value;
    
    result.style.backgroundRepeat=value;

}
function changePosition(event) {
    var value = event.target.value;
	var PX = document.querySelector('#Xposition');
	var PY = document.querySelector('#Yposition');

	// 'auto','contain','cover'
	// 0~100

	// result.style.backgroundSize = value +'%';
	// persent.innerHTML = value;

    if(value=='left top'|| value=='left bottom' || value=='right top' || value=='right bottom' || value=='center center') {
    result.style.backgroundPosition=value;
    } else{
        result.style.backgroundPosition= PX.value+'%'+PY.value+'%';
        persentX.innerHTML= PX.value;
		persentY.innerHTML= PY.value;
    }
}

function changeBackground(event) {
    var value = event.target.value;
    
    result.style.background=value;

}
function changeAttachment(event) {
    var value = event.target.value;
    
    result.style.backgroundAttachment=value;

}
