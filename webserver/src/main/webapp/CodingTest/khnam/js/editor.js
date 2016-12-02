var editorDoc;
var editorWin;

window.onload = function() {
	var editor = document.querySelector('#editor');
	editorWin = editor.contentWindow;
	editorDoc = editorWin.document;

	var editorBody = editorDoc.body;

	//turn off spellcheck 
	if('spellcheck' in editorBody) {
		editorBody.spellcheck = false;
	}

	if('contentEditable' in editorBody) {
		editorBody.contentEditable = true;
	}
	else { //Firefox earlier than version 3
		if('designMode' in editorDoc) {
			editorDoc.designMode = 'on';
		}
	}

	if(parent.storyboard.iframeLoad) {
		parent.storyboard.iframeLoad();
	}

}