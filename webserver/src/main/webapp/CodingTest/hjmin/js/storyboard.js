/*
▣ 실기시험 1 (40점 만점)
	- 작성자 : 민혜진(5강의실)
	- 주 제 : 사진 액자 프레임 바꾸기
	- 목 적 : background 속성과 font 속성 활용하기
	- 기 능 : 액자형태 배경 프레임 색깔 변경과 프레임 굵기와 형태 변형, 사진에 대한 메모 글꼴 변경과 스타일 설정
*/
var red = 255;
var green = 0;
var blue = 0;

function changeRed(event) {
	red = event.target.value;
	imgFrame.style.backgroundColor ='rgb('+ red + ',' + green + ', '+ blue +')';
	rgb_out.innerHTML = 'RGB(' +  red + ',' + green + ','+ blue +')';
}

function changeGreen(event) {
	green = event.target.value;
	imgFrame.style.backgroundColor ='rgb('+ red + ',' + green + ', '+ blue +')';
	rgb_out.innerHTML = 'RGB(' +  red + ',' + green + ','+ blue +')';
}

function changeBlue(event) {
	blue = event.target.value;
	imgFrame.style.backgroundColor ='rgb('+ red + ',' + green + ', '+ blue +')';
	rgb_out.innerHTML = 'RGB(' +  red + ',' + green + ','+ blue +')';
}

function changeDisplay(event) {
	var onoff = event.target.innerHTML;
	if(onoff == 'Frame menu') {
		menu1.style.display = 'block';
	} else if(onoff == 'Text menu') {
		menu2.style.display = 'block';
	} else {
		menu1.style.display = 'none';
		menu2.style.display = 'none';
	}
}

function changeBrwidth(event) {
	var value = event.target.value;
	imgFrame.style.borderWidth = value + 'px';
}

function changeBrstyle(event) {
	var value = event.target.value;
	imgFrame.style.borderStyle = value;
}

function changeBrcolor(event) {
	var value = event.target.value;
	imgFrame.style.borderColor = value;
}

function changeMemo(event) {
	var value = event.target.value;
	memo_out.innerHTML = value;
}

function changeFfamily(event){
	var value = event.target.value;
	memo_out.style.fontFamily = value;
}

function changeFstyle(event) {
	var value = event.target.value;
	memo_out.style.fontStyle = value;
}

function changeFweight(event) {
	var value = event.target.value;
	memo_out.style.fontWeight = value;
}

function changeFsize(event) {
	var value = event.target.value;
	memo_out.style.fontSize = value + 'px';
}
