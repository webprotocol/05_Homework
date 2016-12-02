/*
▣ 실기시험 1 (40점 만점)
	-작성자 : 남상혁 (5강의실)
	-주제 : 홈페이지 만들기
	-목적 : FC파라볼라 홍보
	-기능 : FC파라볼라의 신입회원 모집 및 경기신청을 하는 홈페이지
*/
function agree(event){
	if (confirm("가입을 하시겠습니까?") == true){
		alert("가입을 축하드립니다.");
	} else {
		alert("가입이 취소되었습니다.");
	}
}
function ok(event){
	if (confirm("경기신청을 하시겠습니까?")==true){
		alert("경기신청이 완료되었습니다.");
	} else {
		alert("경기신청이 취소되었습니다.");
	}
}

function chapClick(logObj) {

	var logs = document.querySelectorAll("article");
	var length = logs.length;
	for (var i = 0; i < length; i++) {
		if (logObj) {

			if (logObj == logs[i]) {
				logs[i].style.display = 'block';
			} else {
				logs[i].style.display = 'none';
			}

		} else {
			logs[i].style.display = 'none';
		}
	}
}