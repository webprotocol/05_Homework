// linear 변수
	var direction ;
	var Lcolor ;
	var degree;
// radial 변수
	var shape ;
	var side ;
	var Rcolor ;
	var percent='';

// linear 구현 => background-image:linear-gradient(225deg , red,orange, white);
	function changeDirection(event){
		var value = event.target.value;
		if(value == linearWay.value){
			direction = value;
		linearoutPut.style.backgroundImage = 'linear-gradient('+ direction + ',' + Lcolor + ')';	
		
		}else if(value == deg.value){
			direction = value + 'deg';
			degreeSpan.innerHTML = value + 'º';
		linearoutPut.style.backgroundImage = 'linear-gradient('+ direction + ',' + Lcolor + ')';	
		}else{
			Lcolor = value;
		linearoutPut.style.backgroundImage = 'linear-gradient('+ direction + ',' + Lcolor + ')';
		}	
	}
// radial 구현 =>  background-image:radial-gradient( circle farthest-side at 40% 40% , red,purple, white);
	function changeShape(event){
		var value = event.target.value;
		
		if(value == shape1.value){
			shape = value;
			radialoutPut.style.backgroundImage = 'radial-gradient('+ shape + ' ' + side +' '+ percent + ' ,' + Rcolor + ')';
			radialoutPut.style.backgroundImage = '-webkit-radial-gradient('+ shape + ' ' + side +' '+ percent + ' ,' + Rcolor + ')';
		}else if(value == side1.value){
			side = value;
			radialoutPut.style.backgroundImage = 'radial-gradient('+ shape + ' ' + side +' '+ percent + ' ,' + Rcolor + ')';
			radialoutPut.style.backgroundImage = '-webkit-radial-gradient('+ shape + ' ' + side +' '+ percent + ' ,' + Rcolor + ')';
		}else if(value == radialPercent.value){
			percent = value;
			radialoutPut.style.backgroundImage = 'radial-gradient('+ shape + ' ' + side +' '+ percent + ' ,' + Rcolor + ')';
			radialoutPut.style.backgroundImage = '-webkit-radial-gradient('+ shape + ' ' + side +' '+ percent + ' ,' + Rcolor + ')';
		}else{
			Rcolor = value;
			radialoutPut.style.backgroundImage = 'radial-gradient('+ shape + ' ' + side +' '+ percent + ' ,' + Rcolor + ')';
			radialoutPut.style.backgroundImage = '-webkit-radial-gradient('+ shape + ' ' + side +' '+ percent + ' ,' + Rcolor + ')';
		}
			

	}
