/*
▣ 실기시험 2 (40점 만점)
	-작성자 : 남상혁 (5강의실)
	-주제 : 홈페이지 만들기
	-목적 : HTML5 + CSS3 책복습
	-기능 : HTML5 + CSS3 실습 코드 보기
*/

function chapClick(chapObj) {

	var chaps = document.querySelectorAll("article");
	var length = chaps.length;
	for (var i = 0; i < length; i++) {
		if (chapObj) {

			if (chapObj == chaps[i]) {
				chaps[i].style.display = 'block';
			} else {
				chaps[i].style.display = 'none';
			}

		} else {
			chaps[i].style.display = 'none';
		}
	}
}
