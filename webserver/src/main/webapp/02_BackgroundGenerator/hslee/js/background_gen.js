console.log("background_gen.js...")



/*changeClip*/
function changeClip(event) {
    var value = event.target.value;

    console.log("background-clip" + value);
    //result = html에서 정해준 id값//
    result.style.backgroundClip = value;
}


/*changeOrigin*/
function changeOrigin(event) {
    var value = event.target.value;
    console.log("background-origin" + value);

    result.style.backgroundOrigin = value;
}


/*changeRepeat*/
function changeRepeat(event) {
    var value = event.target.value;
    console.log("background-result" + value);

    result.style.backgroundRepeat = value;
}


/*changeSize*/
function changeSize(event) {
    var value = event.target.value;
    console.log("background-size" + value);

	if(value == 'auto' || value == 'contain' || value == 'cover') {
    	result.style.backgroundSize = value;
	}
		
	else {
    	result.style.backgroundSize = value+'%';
    	percent.innerHTML=value;

		}
}

/*changeSize 내방법*/
function changeSize(event) {
    var value = event.target.value;
    console.log("background-size" + value);

    result.style.backgroundSize = value;
    result.style.backgroundSize = value+'%';
    percent.innerHTML=value;
}



function changeAttachment(event) {
    var value = event.target.value;
    console.log("background-attachment" + value);

    result.style.backgroundAttachment = value;
}


/*changeBackground*/
function changeBackground(event) {
	var value = event.target.value;
    console.log("background-background" + value);

    result.style.background = value;

}


/*changePosition_first_x값만 이동해서 실패!*/
// function changePosition(event) {
// 	var value = event.target.value;
// 	console.log("background-position" + value);

// 	result.style.backgroundPosition = value;
// 	result.style.backgroundPosition = value+'%';
// 	result.style.backgroundPosition = value+'%';
// 	percentX.innerHTML=value;
// 	percentY.innerHTML=value;
// }


/*changePosition_서칭 작업한거 실패!*/
// function changePosition(event) {
// 	var value = event.target.value;
// 	// var percentX = document.querySelector("percentX");
// 	// var percentY = document.querySelector("percentY");
// 	// var rect = percentX.getBoundingClientRect();

// 	var percentX = window.screenX;
// 	var percentY = window.screenY;

// result.style.backgroundPosition = percentX + "%";
// result.style.backgroundPosition = percentY + "%";

// 	result.style.backgroundPosition = value;
// 	result.style.backgroundPosition = value+'%';
// 	result.style.backgroundPosition = value+'%';

// 	percentX.innerHTML=value;
// 	percentY.innerHTML=value;
// }


/*changePosition*/
function changePosition(event) {
	var value = event.target.value;
	var positionX = document.querySelector("#positionX");
	var positionY = document.querySelector("#positionY");
	console.log(positionX);

	if (value == 'left top' || value == 'left bottom' || value == 'right top' || value == 'right bottom' || value == 'center center') {
	result.style.backgroundPosition = value;	

	}

	else {
	result.style.backgroundPosition = positionX.value+'%' + positionY.value+'%';
	percentX.innerHTML=positionX.value;
	percentY.innerHTML=positionY.value;
	}

}