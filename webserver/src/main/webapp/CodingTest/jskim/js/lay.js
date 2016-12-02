   function changePlayState(event){
        var value = "running";
		var star1 = document.querySelectorAll(".star1");
		var i;
		for (i = 0; i < star1.length; i++) {
        star1[i].style.animationPlayState= value;}
    }
  
	  function changePlayState1(event){
        var value = "paused";
		var star1 = document.querySelectorAll(".star1");
        var i;
		for (i = 0; i < star1.length; i++) {
        star1[i].style.animationPlayState= value;}
    }
    
