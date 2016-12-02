
	// 작성자 : 김종순
	// 주제 :  애니매이션 
	// 목적 :  동작 제어
	// 기능 :  배경색 변경, 글자색 변경, 글자크기 변경, 글자 애니메이션 동작제어, 별 동작 제어



function color_out(event){
	var value = event.target.value;
	console.log(value);
	out_out.style.background = value;
}

function color1_out(event){
	var value = event.target.value;
	console.log(value);
	out1_out.style.color = value;
}

function text_out(event){
	var value = event.target.value;
	console.log(value);
	document.getElementById("out1_out").innerHTML = value;
}

function font_out1(event){
	var value = event.target.value;
	console.log(value);
	out1_out.style.fontSize = value+'pt';
}

   function changePlayState(event){
        var value= event.target.value;
        var out1 = document.querySelector("#out1_out");
        out1.style.animationPlayState= value;
    }
	

 function number_out(event){
	 var value = event.target.value;
	 out1_out.style.animationDuration = value + "s";
 }

 function out_X(event){
	 var value = event.target.value;
	 var out1 = document.querySelector("#out1_out");
	 out1.style.transform = "rotate("+ value + "deg)";
 }

function changePlayState1(event){
        var value = "running";
		var star1 = document.querySelectorAll(".star1");
		var i;
		for (i = 0; i < star1.length; i++) {
        star1[i].style.animationPlayState= value;}
    }
  
function changePlayState2(event){
        var value = "paused";
		var star1 = document.querySelectorAll(".star1");
        var i;
		for (i = 0; i < star1.length; i++) {
        star1[i].style.animationPlayState= value;}
    }
    