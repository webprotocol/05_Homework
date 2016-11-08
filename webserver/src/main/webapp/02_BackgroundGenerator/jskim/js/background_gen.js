console.log("background_gen.js...");
/*
 * changeClip
 */
function changeClip(event){
    var value = event.target.value;
    console.log(value);
    
    result.style.backgroundClip = value;

}
/*
 * changeOrigin
 */
function changeOrigin(event){
    var value = event.target.value;
    console.log(value);
    
    result.style.backgroundOrigin = value;

}

/*
 * changeRepeat 
 */

function changeRepeat(event){
    var value = event.target.value;
    console.log(value);
    
    result.style.backgroundRepeat = value;  

}

/*
 * changeSize
 */

function changeSize(event){
    var value = event.target.value;
    console.log("background-size: " +value);

	/*
	 * value='auto'| 'contain'| 'cover'
	 * value= 0~100
	 */

	if(value== 'auto' || value== 'contain' || value== 'cover'){

    result.style.backgroundSize = value;
	} else{

	result.style.backgroundSize = value + '%';
	persent.innerHTML = value;
    
	}


}

// function changeSize1(event){
//     var value = event.target.value;
//     console.log("background-size: " +value);
//     result.style.backgroundSize = value +"%";
//     persent.innerHTML = value;
// }

/*
* changeAttachment
*/

function changeAttachment(event){
    var value = event.target.value;
    console.log("background-Attachment: " +value);
    result.style.backgroundAttachment = value;
}

/*
 * changePosition
 */

function changePosition(event){
    var value = event.target.value;
    console.log("background-Position: " +value);
    result.style.backgroundPosition = value;
	
	
}

function changePosition1(event){
	var value = event.target.value;
    var x = document.getElementById("result");
	x.style.backgroundPosition = value + "% " + y1.value + "%" ;
	persentX.innerHTML = value;
	
}

function changePosition2(event){
	var value = event.target.value;
	var y = document.getElementById("result");
	y.style.backgroundPosition = x1.value + "% " + value + "%";
	persentY.innerHTML = value;
}



/*
 * changeBackground
 */

function changeBackground(event){
    var value = event.target.value;
    console.log("background : " + value);
     result.style.background = value;  

}
