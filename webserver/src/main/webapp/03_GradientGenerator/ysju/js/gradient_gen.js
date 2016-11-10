function degChange(event){
	var value=event.target.value;
	console.log(value);

	// result.style.backgroundGradient=value+"deg"+colorX.value+colorY.value;
	result.style.backgroundImage ='linear-gradient('+value+'deg,'+colorX.value+','+colorY.value+')';
	degX.innerHTML=value+"deg";
}
function degRChange(event){
	var value=event.target.value;

    result.style.backgroundImage ='linear-gradient('+value+','+colorX.value+','+colorY.value+')';

}

function colorChange(event){
	var value=event.target.value;

	result.style.backgroundImage ='linear-gradient('+degr.value+'deg,'+colorX.value+','+colorY.value+')';

}
function typeChange(event){
	var value=event.target.value;
	
	result.style.backgroundImage ='radial-gradient('+value+','+colorX.value+','+colorY.value+')';
	//console.log(type.value);
	
}

function sizeChange(event){
	var value=event.target.value;

	result.style.backgroundImage ='radial-gradient('+type.value+' ' +size.value+ ' at '+moveX.value+'% '+moveY.value+'%,'+colorX.value+','+colorY.value+')';
	console.log('radial-gradient('+type.value+' ' +size.value+ ' at '+moveX.value+'% '+moveY.value+'%,'+colorX.value+','+colorY.value+')');

}
function xyMove(event){
	var value=event.target.value;
	result.style.backgroundImage ='radial-gradient('+type.value+' ' +size.value+ ' at '+moveX.value+'% '+moveY.value+'%,'+colorX.value+','+colorY.value+')';
	console.log('radial-gradient('+type.value+' ' +size.value+ ' at '+moveX.value+'% '+moveY.value+'%,'+colorX.value+','+colorY.value+')');
}