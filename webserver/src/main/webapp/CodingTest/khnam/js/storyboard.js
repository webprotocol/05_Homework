var storyboard = {};
storyboard.linkSrcs = {
	 'storyboard' : 'editor.html'
	,'wireframe' : 'wireframe.html'
	,'projectview' : 'editor.html'
}

storyboard.load = (function() {
	storyboard.iframeLoad = function () {
		if(ifm) {
			ifm.height = '';
			var iBodyHeight = ifm.contentWindow.document.body.scrollHeight;
			
			ifm.height = iBodyHeight + 'px';
		}
	}

	return function() {
		ifm.addEventListener('load', storyboard.iframeLoad, false);

		var lis = document.querySelectorAll('.menu li');
		for(var i=lis.length-1; i>=0; i--) {
			lis[i].addEventListener('click', function() {
				ifm.src = storyboard.linkSrcs[this.id];
			
			}, false);
		}

		//페이지 로딩시 처음보여질 화면
		ifm.src = 'loading.html';
	}
})();

window.onload = function() {
	storyboard.load();
};