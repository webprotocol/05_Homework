console.log('background_gen.js......');
function changeClip(rdo) {
	result.style.backgroundClip = rdo.value;
}

function changeOrigin(rdo) {
	result.style.backgroundOrigin = rdo.value;
}

function changeRepeat(rdo) {
	result.style.backgroundRepeat = rdo.value;
}

function changeSize(el) {
	var value = el.value;
	if(el.type == 'range') {
		el.nextSibling.innerHTML = (value = value + '%');

	}

	result.style.backgroundSize = value;
}

function changeAttachment(rdo) {
	result.style.backgroundAttachment = rdo.value;
}

function changePosition() {
	var target = event.target;
	var value = target.value;

	if(target.type == 'range') {
		value = posX.value + '% ' + posY.value + '%';
		target.nextSibling.innerHTML = target.value + '%';
	}

	result.style.backgroundPosition = value;
}

function changeBackground() {
	var txtEl = event.target;
	var values = txtEl.value;

	if(values) {
		var valueArr = values.split(' ');
		var len = valueArr.length;
		var e = 0;
		for(var i=0; i<len; i++) {
			if(!valueArr[i]) continue;

			switch(e) {
				case 0 :
					result.style.backgroundImage = valueArr[i];
				break;
				case 1 :
					result.style.backgroundRepeat = valueArr[i];
				break;
				case 2 :
					result.style.backgroundPosition = valueArr[i];
				break;
				case 3 :
					result.style.backgroundPosition = valueArr[i] + ' ' + valueArr[i-1];
				break;
				case 4 :
					result.style.backgroundAttachment = valueArr[i];
				break;
				default :
				break;
			}
			e++;
		}
	}
}