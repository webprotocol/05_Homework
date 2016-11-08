
function changeClip(event){
    var value=event.target.value;

    result.style.backgroundClip=value;  
}
function changeOrigin(event){
    var value=event.target.value;

    result.style.backgroundOrigin=value;  
}
function changeRepeat(event){
    var value=event.target.value;

    result.style.backgroundRepeat=value;  
}
function changeSize(event){
    var value=event.target.value;
    if(event.target.type=='range'){
        result.style.backgroundSize=value+"%";
        percent.innerHTML=value+"%";
    }
    else{
        result.style.backgroundSize=value;  
        percent.innerHTML=value;
    }
}
function changePosition(event){
	var value=event.target.value;
	if(event.target.id=='posX'){
        result.style.backgroundPosition=value+"%"+posY.value+"%";
        percentX.innerHTML=value+"%";
    }
	else if(event.target.id=='posY'){
        result.style.backgroundPosition=posX.value+"%"+value+"%";
        percentY.innerHTML=value+"%";
    }
    else{
        result.style.backgroundPosition=value;
		percentX.innerHTML=value;
		percentY.innerHTML=value;
    }
}
function changeAttachment(event){
	var value=event.target.value;
	result.style.backgroundAttachment=value;

}
function changeBackground(event){
	var value=event.target.value;

    result.style.background=value;  
}