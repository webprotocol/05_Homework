/*
▣ 실기시험 1 (40점 만점)
- 작성자 : 주요섭 (5강의실)
- 주  제 : 학원에서 먹을만한 점심메뉴
- 목  적 : 지금까지 배운 HTML, CSS복습
- 기  능 : 점심시간에 먹을만한 메뉴들을 정리
	*/
function btn(event){
	event.preventDefault();
	document.querySelector("#divhome").style.display="none";
	for(var i=1;i<=4;i++){
		document.querySelector("#div"+i).style.display="none";
	}
	document.querySelector("#"+event.target.className).style.display="inline";
}

function lunch(event){
	event.preventDefault();
	document.querySelector("#articlehome").style.display="none";
	for(var i=1;i<=12;i++){
		document.querySelector("#article_"+i).style.display="none";
	}
	document.querySelector("#"+event.target.className).style.display="inline";
}


function randomNumber(event){
	var cube=document.querySelector('.cube');
	var num=Math.floor(Math.random() * 6)+1;
	console.log(num);
	cube.style.animationName="changedice"+num;
}
function inputnumber(event){
	document.querySelector(".clickbtn").style.display="inline";
}
function selectnumber(event){
	var num=Math.floor(Math.random() * inputnum.value)+1;
	result.innerHTML=num+"번 당첨!";
}