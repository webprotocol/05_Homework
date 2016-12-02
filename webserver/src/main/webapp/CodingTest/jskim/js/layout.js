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