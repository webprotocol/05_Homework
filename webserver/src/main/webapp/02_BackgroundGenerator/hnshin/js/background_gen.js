console.log("background_gen.js...");

/*
*   changeClip
*/
function changeClip(event){
    var value = event.target.value;
    console.log("backgroundclip : "+ value);

     result.style.backgroundClip = value;
}
/*
*   changeOrigin
*/
function changeOrigin(event){
    var value = event.target.value;
    console.log("backgroundOrigin : " + value);

    result.style.backgroundOrigin = value;
}
/*
*   changeRepeat
*/
function changeRepeat(event){
    var value = event.target.value ;
        console.log("backgroundRepeat : " + value);

    result.style.backgroundRepeat = value;

}
/*
*   changeSize
*/
function changeSize(event){
    var value = event.target.value ;
        console.log("backgroundSize : " + value);

/*
*	'auto', 'contain' , 'cover'
*	0 ~ 100
*/
if(value =='auto'|| value =='cover' || value =='contain'){
    result.style.backgroundSize = value;
}else{
    result.style.backgroundSize = value + '%';
    persent.innerHTML = value;
}

}
/*
*   changeAttachment
*/  
function changeAttachment(event){
    var value = event.target.value ;
        console.log("backgroundAttachment : " + value);

    result.style.backgroundAttachment = value;
}

 /*
*   changePosition
*/  
   function changePosition(event){
	var value = event.target.value;
	console.log("backgroundposition : " + value);
	var positionX = document.querySelector('#PositionX');
	var positionY = document.querySelector('#PositionY');
	// console.log(positionX.value , positionY.value);
	
	if (value == 'left top' || value=='left center' || value == 'left bottom'|| 
	 value == 'right top' || value == 'right center'|| value == 'right bottom' ||
	 value == 'center top' || value == 'center center' || value == 'center bottom'){
	result.style.backgroundPosition = value;
   }else {
	   result.style.backgroundPosition = positionX.value + '%' + positionY.value + '%';
	   persentX.innerHTML = positionX.value;
	   persentY.innerHTML = positionY.value;
   }
}

/*
*	changeBackground
*/
function changeBackground(event){
    var value = event.target.value ;
	console.log("background : " + value);

    result.style.background = value;
}