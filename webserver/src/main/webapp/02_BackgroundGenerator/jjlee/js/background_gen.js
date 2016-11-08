console.log("background_gen.js...")

// changeClip
function changeClip(event){
    var value=event.target.value;
    console.log("background-clip:"+value);
    result.style.backgroundClip=value;
}

// changeOrigin
function changeOrigin(event){
    var value=event.target.value;
    console.log("background-origin:"+value);
    result.style.backgroundOrigin=value;
}

// changeRepeat
function changeRepeat(event){
    var value=event.target.value;
    console.log("background-repeat:"+value);
    result.style.backgroundRepeat=value;
}

// changeSize
function changeSize(event){
    var value=event.target.value;
    console.log("background-size:"+value);

	/*
	* value= 'auto,'contain','cover'  
	* value= 0~100  
	* 숫자와 문자를 모두 인식하도록 아래와 같이 if구문을 이용
	*/ 
	if(value=='auto'||value=='contain'||value=='cover'){
    result.style.backgroundSize=value;

	} else{
    result.style.backgroundSize=value+"%";
	percent.innerHTML=value;
} }

// changePosition
function changePosition(event){
    var value=event.target.value;
	 
    console.log("background-size:"+value);

	if(value=='left top'||value=='left bottom'||value=='right top'||value=='right bottom'||value=='center center'){
    result.style.backgroundPosition=value;

	} else{
    result.style.backgroundPosition=hor.value+"%"+ver.value+"%";
	percentX.innerHTML=hor.value;
    percentY.innerHTML=ver.value;

} }

// changeBackground
function changeBackground(event){
    var value=event.target.value;
    console.log("background:"+value);
    result.style.background=value;
}

// changeAttachment
function changeAttachment(event){
    var value=event.target.value;
    console.log("change-attachment:"+value);
    result.style.backgroundAttachment=value;
}
