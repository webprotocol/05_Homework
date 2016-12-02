/*
▣ 실기시험 2 (40점 만점)
- 작성자 : 주요섭 (5강의실)
- 주  제 : 소프트웨어 다운로드
- 목  적 : 학원 실습에 필요한 소프트웨어를 쉽고편한 다운로드
- 기  능 : 주요 소프트웨어 다운로드홈페이지 정리
	*/

function changebg(event){
	event.preventDefault();
	document.querySelector("#wrapper").style.backgroundImage="url(../ysju/img/"+event.target.className+".png)";
	for(var i=1;i<=4;i++){
		document.querySelector(".articlebg_"+i).style.display="none";
	}
	document.querySelector(".article"+event.target.className).style.display="block";
}

function plus(event){
	event.preventDefault();
	var num = event.target.parentNode.parentNode.nextElementSibling;
	if(num.style.display=="inline"){
		num.style.display="none";
	}
	else{
		num.style.display="inline";
	}

}