(function() {
	var colDv = document.querySelector('#colorDv');

	function _work(btn, comm, fn) {
		btn.addEventListener('click', function() {
			if(fn) {
				fn();
				return;
			}

			if(comm != 'selectAll') {
				var selObj = editorWin.getSelection();
				if(!selObj.toString()) return;
			}
		
			editorDoc.execCommand(comm,false, null);
			if(this.dataset.state == 'no') return;
			
			
			if(comm == 'selectAll') {
				if(this.dataset.state == 'on') {
					this.dataset.state = 'off';
				}
				else {
					if(editorDoc.selection) {//IE
						editorDoc.selection.empty();
					}
					else if(editorWin.getSelection && editorWin.getSelection().removeAllRanges) {
						editorWin.getSelection().removeAllRanges();
					}
				}
			}

		});
	}

	_work(btnB, 'bold');
	_work(btnI, 'italic');
	_work(btnA, 'selectAll');
	_work(btnUndo, 'undo');
	_work(btnOL, 'insertOrderedList');
	_work(btnUL, 'insertUnorderedList');
	_work(btnBG, 'backColor', function() {
		
		if(colDv.style.display == 'none') {
			colDv.style.display = '';
			//editorWin.setPBtnAttr('backColor');
		}
		else {
			colDv.style.display = 'none';
			//editorWin.setPBtnAttr('');
		}
	});

	window.closePanel = function(color, btnAttr) {
		colDv.style.display = 'none';
		//if(btnAttr == '')
		editorDoc.execCommand('backColor',false, color);
	}

}());