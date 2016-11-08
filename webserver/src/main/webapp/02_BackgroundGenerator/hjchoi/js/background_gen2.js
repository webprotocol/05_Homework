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
function changeSize(event) {
    var value = event.target.value;

	// 'auto','contain','cover'
	// 0~100

	// result.style.backgroundSize = value +'%';
	// persent.innerHTML = value;

    if(value=='auto'|| value=='contain' || value=='cover') {
    result.style.backgroundSize=value;
    } else{
        result.style.backgroundSize= value+'%';
        persent.innerHTML= value;
    }

}
