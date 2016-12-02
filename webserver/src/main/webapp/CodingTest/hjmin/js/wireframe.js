/*
▣ 실기시험 2 (40점 만점)
	- 작성자 : 민혜진(5강의실)
	- 주 제 : 세계지도 도시 이미지창
	- 목 적 : 애니메이션 활용하기
	- 기 능 : 텍스트 클릭시 이미지 팝업창 애니메이션 효과 적용
*/

function seoulPopup() {
	var popup = document.getElementById('img_seoul');
	popup.classList.toggle('show');
}
function chinaPopup() {
	var popup = document.getElementById('img_china');
	popup.classList.toggle('show');
}
function londonPopup() {
	var popup = document.getElementById('img_london');
	popup.classList.toggle('show');
}
function newyorkPopup() {
	var popup = document.getElementById('img_newyork');
	popup.classList.toggle('show');
}
function sydneyPopup() {
	var popup = document.getElementById('img_sydney');
	popup.classList.toggle('show');
}
function peruPopup() {
	var popup = document.getElementById('img_peru');
	popup.classList.toggle('show');
}
function kenyaPopup() {
	var popup = document.getElementById('img_kenya');
	popup.classList.toggle('show');
}
