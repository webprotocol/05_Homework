var Gradient = {};

(function(){
	var MAX = 10;
	var MIN = 2;
	function _getRadialRanges() {
		return document.querySelectorAll('div#dvRadial input[type=range]');
	}

	function _getColorRanges() {
		return document.querySelectorAll('#dvColorBox input[type=range]');
	}

	function _getStartStyleStr() {
		return hdnGrient.value + '(';
	}

	function _getEndStyleStr() {
		return ')';
	}

	function _isMaxColor() {
		var childCnt = dvColorBox.childElementCount;
		if(childCnt == MAX) return true;
		return false;
	}

	function _isMinColor() {
		var childCnt = dvColorBox.childElementCount;
		if(childCnt == MIN) return true;
		return false;
	}

	function _makeRgbStr() {
		var colors = _getColorRanges();
		var len = colors.length;
		var str = '';
		for(var s=0; s<len; s++) {
			if(s%3 == 0) {
				if(str) {
					str = str.slice(0, -1);
					str += '),';
				}
				str += 'rgb(' + colors[s].value +',';
			}
			else {
				str += colors[s].value + ',';
			}
		}

		str = str.slice(0, -1);
		str += ')';

		console.log(str);
		return str;
	}

	Gradient.changeDirec = function(el) {
		var direc = el.value;

		if(el.nodeName.toLowerCase() == 'select') {
			if(direc) {
				txtDirec.value = '';
				txtDirec.setAttribute('disabled', 'disabled');
			}
			else {
				txtDirec.removeAttribute('disabled');
			}
		}

		hdnDirec.value = direc;
		result.style.backgroundImage = _getBgImgStr(direc);

	};



	Gradient.changeColor = function() {
		var target = event.target;
		var direc = hdnDirec.value;

		target.nextSibling.innerHTML = target.value;
		result.style.backgroundImage = _getBgImgStr(direc);
	}

	function _getBgImgStr(direc) {
		var styleStr = _getStartStyleStr();
		styleStr += direc + ',';
		styleStr += _makeRgbStr();
		styleStr += _getEndStyleStr();
		console.log(styleStr);
		return styleStr;
	}

	Gradient.selectGradi = function(rdo) {
		if(rdo.value == 'linear-gradient') {
			dvLinear.style.display = 'block';
			dvRadial.style.display = 'none';
		}
		else {
			dvLinear.style.display = 'none';
			dvRadial.style.display = 'block';
		}

		hdnGrient.value = rdo.value;
	}

	Gradient.changeShape = function(selEl) {
		var v = selEl.value;
		var ranges = _getRadialRanges();

		var str = _getStartStyleStr();
		if(v) {
			str += v + '' + ' at ' + ranges[0].value + '% ' + ranges[1].value + '%'
			str += ', red, white'
			str += ')';
		}

		//console.log(str)
		result.style.backgroundImage = str;
	}

	Gradient.changeStart = function(rng) {
		var selV = selShape.value || 'circle';
		var rngV = rng.value;
		rng.nextSibling.innerHTML = rngV + '%';

		var ranges = _getRadialRanges();
		var str = hdnGrient.value;

		str += '(';
		str += selV + '' + ' at ' + ranges[0].value + '% ' + ranges[1].value + '%'
		str += ', red, white'
		str += ')';

		//console.log(str)
		result.style.backgroundImage = str;
	}

	Gradient.addColor = function() {
		if(_isMaxColor()) return;

		var dv = document.createElement('div');
		for(var i=0; i<3; i++) {
			var rng = document.createElement('input');
			var span = document.createElement('span');
			span.innerHTML = '0'
			rng.type = 'range';
			rng.min = '0';
			rng.max = '255';
			rng.value = '0';
			rng.addEventListener('input',Gradient.changeColor, false);

			dv.appendChild(rng);
			dv.appendChild(span);
		}

		dvColorBox.appendChild(dv);
	}

	Gradient.delColor = function() {
		if(_isMinColor()) return;

		var child = document.querySelector('#dvColorBox div:last-child');
		dvColorBox.removeChild(child);


	}
})();

