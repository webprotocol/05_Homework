var wireframe = (function(){

	function _createOption(v,t) {
		var opt = document.createElement('option');
		opt.value = v;
		opt.text = t;

		return opt;
	}

	function _delOption(selObj) {
		var opts = selObj.options;
		var len = opts.length;

		for(var i=len-1; i>=0; i--) {
			if(i == 0) continue;

			selObj.removeChild(opts[i]);
		}
	}

	function _addChapter(b) {
		if(!(b in bible)) return;

		var _b = bible[b];
		var _c = _b.chapter;

		for(var i=0; i<_c; i++) {
			selChap.appendChild(_createOption(i,(i+1) + '장'));
		}
	}

	function _addVerse() {
		var b = selBible.value;
		var c = selChap.value;

		var verseCnt = bible[b].versePerChap[c];

		for(var i=0; i<verseCnt; i++) {
			selVerse.appendChild(_createOption(b+'-'+c+'-'+i, (i+1) + '절'));
		}

	}

	function _writeTdBible(t) {
		var h = document.querySelector('#tdBible');
		h.innerHTML = t;
	}

	function _writeTdChapter(c) {
		var h = document.querySelector('#tdBible');
		h.innerHTML += c;
	}

	function _createDiv(id) {
		var vArr = id.split('-');
		var b = bible[vArr[0]].contentK[vArr[1]][vArr[2]];
		var dv = document.createElement('div');
		dv.className = 'dvKr';
		dv.id = 'dv-'+ id;
		dv.innerHTML = (parseInt(vArr[2]) + 1) + '.   ' + b;
		return dv;
	}

	function _createNivDiv(id) {
		var vArr = id.split('-');
		var b = bible[vArr[1]].contentE[vArr[2]][vArr[3]];
		var dv = document.createElement('div');
		dv.className = 'niv';
		dv.id = 'dv-niv-'+ id;
		dv.innerHTML = b;
		return dv;
	}

	function _insertAfter(newNode, referenceNode) {
    	referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
	}

	function _getRandomIndex(n) {
		var ar = new Array();
        var temp;
        var rnum;

        for(var i=1; i<=n; i++){
            ar.push(i);
        }

        for(var i=0; i< ar.length ; i++)
        {
            rnum = Math.floor(Math.random() *n);
            temp = ar[i];
            ar[i] = ar[rnum];
            ar[rnum] = temp;
        }

        return ar;
	}

	return {
		initBible : function() {
			for(var b in bible) {
				selBible.appendChild(_createOption(b,bible[b].kname));
			}
		},
		changeBible : function() {
			var v = selBible.value;
			_delOption(selChap);
			_delOption(selVerse);

			if(v != '') {
				_addChapter(v);
				_writeTdBible(selBible.options[selBible.selectedIndex].text);
			} 
			else {
				_writeTdBible('');
			}
			
		},
		changeChapter : function() {
			var v = selChap.value;
			_delOption(selVerse);

			if(v != '') {
				_addVerse();
				_writeTdChapter(selChap.options[selChap.selectedIndex].text);
			} 
			else {
				_writeTdChapter('');
			}
		},
		changeVerse : function() {
			var v = selVerse.value;
			if(v == '') return;

			var vArr = v.split('-');
			var b = bible[vArr[0]].contentK[vArr[1]][vArr[2]];
			
			var td = document.querySelector('.trContent > td');
			td.appendChild(_createDiv(v));

		},
		showNiv : function(btn) {
	
			var td = document.querySelector('.trContent > td');
			var contents = td.childNodes; 
			var divCnt = contents.length;
			
			if(divCnt > 0) {
				var isShow = btn.dataset.show == 'on';
				if(isShow){
					btn.dataset.show = 'off';
					btn.innerHTML = '번역본 감추기';

					for(var i=0; i<contents.length; i++) {
						if(contents[i].id.startsWith('dv-niv')) continue; 
						_insertAfter(_createNivDiv(contents[i].id), contents[i]);
					}
				}
				else {
					btn.dataset.show = 'on';
					btn.innerHTML = '번역본 보기'

					for(var i=contents.length-1; i>=0; i--) {
						if(contents[i].id.startsWith('dv-niv')) {
							td.removeChild(contents[i]);
						} 
					}
				}
			}
		},
		showWords : function(sel) {
			var v = sel.value;
			if(v == '') return;

			this.shuffle();
		},
		drop : function(e) {
			e.preventDefault();
			
			var imgId = e.dataTransfer.getData('id');
			var t;
			if(e.target.nodeName == 'IMG') {
				t = e.target.parentNode; 
			}
			else {
				t = e.target;
			}

			t.appendChild(document.querySelector('#' + imgId));

			

		},
		shuffle : function() {
			dvRanWords.innerHTML = '';
			dvWords.innerHTML = '';
			var img;
			var w = selWords.value.split('@');
			var cnt = parseInt(w[1]);
			var ranArr = _getRandomIndex(cnt);

			for(var i=0; i<cnt; i++) {
				img=document.createElement('img');
				img.id = w[0] + '_' + ranArr[i];
				img.className = 'imgWord';
				img.src = '../khnam/img/' + w[0] + '/' + w[0] + '_' + ranArr[i] + '.png';
				img.draggable = true;
				img.addEventListener('dragstart', function(){
					event.dataTransfer.setData('id', event.target.id);
				}, false);
				
				dvRanWords.appendChild(img);
			}

		},
		testEnd : function() {
			console.log(dvRanWords.childNodes.length);
			if(dvRanWords.childNodes.length !=0) {
				alert('문제를 다 푸세요!!!');
			}
			else {
				var imgs = dvWords.childNodes;
				var selv = selWords.value;
				var selvCnt = parseInt((selv.split('@'))[1]);
				var err = false;
				for(var i=0; i<selvCnt; i++) {
					
					var idx = (imgs[i].id.split('_'))[1];
					if((i+1) != idx) {
						err = true;
						break;
					} 
				}

				if(err) {
					alert('오답입니다!!');
				}
				else {
					alert('정답입니다!!');
				}
			}
		}

	};

}());

window.onload = function() {
	wireframe.initBible();
}


