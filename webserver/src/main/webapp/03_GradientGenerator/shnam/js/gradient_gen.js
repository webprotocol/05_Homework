function linearChange(event) {
    console.log(linearChange);
    var value = event.target.value;

    if (!isNaN(value)) {

        value = value + 'deg';
        degree.innerHTML = value;
    }

    result.style.backgroundImage = 'linear-gradient(' + value + ','+ color1.value + ',' + color2.value +','+color3.value+')';
}
function radialChange1(event) {

    var value = event.target.value;
    result.style.backgroundImage = 'radial-gradient(' + radial.value + ',' + color1.value + ',' + color2.value +','+color3.value+')';
}

function changeColor(event) {
    var value = event.target.value;
    changeColor.innerHTML = color1.value;
    changeColor.innerHTML = color2.value;
    changeColor.innerHTML = color3.value;
    result.style.backgroundImage = 'linear-gradient('+ color1.value +',' + color2.value + ','+color3.value+')';

}
function radialChange2(evnet){
	var value= event.target.value;
	value = value + '%';
	percent1.innerHTML = value;
	console.log('radial-gradient('+ radial.value + ' at '+ percent3.value + '% '+percent4.value + '%,  '+ color1.value + ',' + color2.value +','+color3.value+')');
	result.style.backgroundImage = 'radial-gradient('+ radial.value + ' at '+ percent3.value + '% '+percent4.value + '%,'+ color1.value + ',' + color2.value +','+color3.value+')';
}

function radialChange3(evnet){
	var value= event.target.value;
	value = value + '%';
	percent2.innerHTML = value;
	console.log('radial-gradient('+ radial.value + ' at '+ percent3.value + '% '+percent4.value + '%,  '+ color1.value + ',' + color2.value +','+color3.value+')');
	result.style.backgroundImage = 'radial-gradient('+ radial.value + ' at '+ percent3.value + '% '+percent4.value + '%,'+ color1.value + ',' + color2.value +','+color3.value+')';
}
