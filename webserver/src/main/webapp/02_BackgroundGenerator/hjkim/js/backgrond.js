

function background_Clip(event) {
 var value = event.target.value;
    
    xxx.style.backgroundClip = value;
}

function change_Origin(event) {
    var value = event.target.value;
   
   xxx.style.backgroundOrigin = value;
}
function background_Size(event) {
    var value = event.target.value;
    
    xxx.style.backgroundSize = value;
}
function background_Repeat(event) {
    var value = event.target.value;
    
    xxx.style.backgroundRepeat = value;
}
function fontsize(event) {
    var value = event.target.value;
    console.log(value);
    xxx.style.backgroundSize = value +'%';
	persent.innerHTML = value;
    }
	if(value == 'auto'||value == 'contain'||value == 'cover') {
		xxx.style.backgroundSize = value;
	}else {
		xxx.style.backgroundSize =value + '%';
		persent.innerHTML = value;
	}

	function changePosition (event) {
		var value=event.target.value;
		xxx.style.backgroundPosition=value;
		console.log(value);
	}

function changePosition2 (event) 
{
	var value = event.target.value;
			xxx.style.backgroundPosition=positon2.value + '%' + positon3.value + '%';
		console.log(positon2.value + '%' + positon3.value + '%');
		persentX.innerHTML = positon2.value;
		persentY.innerHTML = positon3.value;

		 
		
		// xxx.style.backgroundPosition= value+ '%';
	
		// console.log(value);
		// persentX.innerHTML = value;
		// persentY.innerHTML = value;
}
	// if(value == 'left top'||value =='left bottom'||value=='right tob'||value=='right bottom'||value=='center center') {
	// 	xxx.style.backgroundPosition=value +'%';
	// 	persentX.innerHTML = value;
	// } else{
	// 	xxx.style.backgroundPosition=positon2.value + '%' + positon3.value + '%';
	// 	console.log(positon2.value + '%' + positon3.value + '%');
	// 	persentY.innerHTML = value;
	// }
