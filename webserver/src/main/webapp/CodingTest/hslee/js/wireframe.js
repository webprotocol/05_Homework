/*
▣ 실기시험 2 (40점 만점)
	- 작성자 : 이희수(5강의실)
	- 주 제 : 다양한 레이아웃의 구성으로 참여형 컨텐츠를 다룰 수 있는 웹페이지
	- 목 적 : HTML5 시멘틱태그를 효율적으로 활용하여 각 페이지별로 다양한 레이아웃으로 편집 할 수 있다
	- 기 능 : 각 페이지별로 JAVASCRIPT & CSS를 활용하여 참여형 컨텐츠를 만들어 페이지 체류시간을 올릴 수 있다
*/



var circle = true;

// calculator
	function addition (x,y) {
		return x+y;   //return: 값을 반환하는 명령어
	}
	function subtraction (x,y) {
		return x-y;
	}
	function multiplication (x,y) {
		return x*y;
	}
	function division (x,y) {
		return x/y;
	}

function button(op) {
	var first = document.getElementById("first");
	var num1 = first.value;
	var num1s = parseInt(num1);

	var second = document.getElementById("second");
	var num2 = second.value;
	var num2s = parseInt(num2);

	var result = document.getElementById("result");

	var num3;

	
	var img = event.target;
	
	if (circle) {
		img.style.borderRadius = "0px";
		circle = false;
	}
	else {
		img.style.borderRadius = "100px";
		circle = true;
	}

	if (op == '+') {
		num3 = addition (num1s, num2s);
	}
	else if (op == '-') {
		num3 = subtraction (num1s, num2s);
	}
	else if (op == '*') {
		num3 = multiplication (num1s, num2s);
	}
	else if (op == '/') {
		num3 = division (num1s, num2s);
	}

	result.value = String (num3);
}