/*
▣ 실기시험 1 (40점 만점)
	- 작성자 : 이희수(5강의실)
	- 주 제 : HTML5 ＆ CSS3를 응용하여 웹브라우저를 자유롭게 꾸밀 수 있는 편지쓰기
	- 목 적 : input태그의 다양한 type을 이용하여 문서편집(편지쓰기)을 편리하게 할 수 있다
	- 기 능 : HTML5 & CSS3를 자유롭게 활용할 수 있으며 JAVASCRIPT를 이용하여 CSS를 효과적으로 나타낸다
*/
	

	var stickerX = 0;
	var stickerY = 0;

	var scaleX = 1;
	var scaleY = 1;


// font-family
	function changeFont(event) {
		var value = event.target.value;
		text_out.style.fontFamily = value;
	}
// font-size
	function changeSize(event) {
		var value = event.target.value;
		text_out.style.fontSize = value + 'pt';
	}
// font-color
	 function changeColor(event) {
		 var value = event.target.value;
		 text_out.innerHTML = value;
		 text_out.style.color = value;
	 }
// font-style.1
	 function changeNormal(event) {
        var value = event.target.value; 
        text_out.style.fontStyle = value;
    }
// font-style.2
    function changeItalic(event) {
        var value = event.target.value;
        text_out.style.fontStyle = value;
    }
//font-align
	function changeAlign(event) {
		var value = event.target.value;
		var textarea = document.querySelector('#text_out');
		text_out.style.textAlign = value;
	}

//font-bold
    function changeBolder(event) {
        var value = event.target.value;
        text_out.style.fontWeight = value;
    }
	
// skin ver.1
	function changePage1(event) {
		document.body.style.backgroundImage = "url('img/pattern01.png')";
	}
// skin ver.2
	function changePage2(event) {
		document.body.style.backgroundImage = "url('img/pattern02.png')";
	}
// skin ver.3
	function changePage3(event) {
		document.body.style.backgroundImage = "url('img/pattern03.png')";
	}
// skin ver.4
	function changePage4(event) {
		document.body.style.backgroundImage = "url('img/pattern04.png')";
	}
// skin ver.5
	function changePage5(event) {
		document.body.style.backgroundImage = "url('img/pattern05.png')";
	}
// skin ver.6
	function changePage6(event) {
		document.body.style.backgroundImage = "url('img/pattern08.png')";
	}
// skin ver.7
	function changePage7(event) {
		document.body.style.backgroundImage = "url('img/pattern07.png')";
	}
// skin ver.7
	function changePage8(event) {
		document.body.style.backgroundImage = "url('img/letterbg.png')";
	}

	

//sticker ver.5
	function changeSticker(event) {
		document.sticker.src = "img/" + event.target.value + ".png";
		
	}
//sticker translate
	function translateSticker(event) {
		var value = event.target.value;

		if (event.target.id == 'tx') {
			stickerX = value;
			transX.innerHTML = value;
		}
		else {
			stickerY = value;
			transY.innerHTML = value;
		}
		document.sticker.style.transform = "translate(" + stickerX + "px," + stickerY + "px)";
	}

//sticker scale
	function scaleSticker(event) {
		var value = event.target.value;
		
		if (event.target.id == 's1') {
			scaleX = value;
		}
		else {
			scaleY = value;
		}
		document.sticker.style.transform = "scale(" + scaleX + "," + scaleY + ")";
	}

//sticker rotation/skew/origin
	function Sticker(event) {
		var value = event.target.value;

		if (event.target.id == 'r1') {
			stickerX = value;
			rotate.innerHTML = value;
			document.sticker.style.transform = "rotate(" + value + "deg)";
		}

		else if (event.target.id == 'k1') {
			stickerY = value;
			skew.innerHTML = value;
			document.sticker.style.transform = "skew(" + value + "deg)";
		}
		else {
			document.sticker.style.transformOrigin = o1.value;
		}
	}

	

	