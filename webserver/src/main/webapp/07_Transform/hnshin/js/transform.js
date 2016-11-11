var Tx = 0, Ty = 0;
    var Sx = 1, Sy = 1;
    var Xangle = 1, Yangle = 1;

    // rotate
    function changeRotate(event){
        var value = event.target.value;
        var div = document.querySelector(".clock");
        
        if(event.target.id == 'RotateAngel'){
        clock.innerHTML = value ;
        div.style.transform = "rotate(" + value + "deg)" ;
        }else{
            div.style.transformOrigin = value;
        }


    }
    // translate
    function changeTranslate(event){
        var value = event.target.value;
        var  div = document.querySelector(".move");
        if(event.target.id == 'Tx'){
            Tx = value;
        div.style.transform = "translate(" + Tx +'px'+',' + Ty + "px)";
        }else{
            Ty = value;
        div.style.transform = "translate(" + Tx +'px'+',' + Ty + "px)";
        }
    }
    // scale
    function changeScale(event){
        var value = event.target.value;
        var  div = document.querySelector(".zoom");
        if(event.target.id == 'Sx'){
            Sx = value;
        div.style.transform = "scale(" + Sx +',' + Sy + ")";
        }else if(event.target.id == 'Sy'){
            Sy = value;
        div.style.transform = "scale(" + Sx+ ',' + Sy + ")";
        }else if(event.target.id == 'ScaleOrigin'){
            div.style.transformOrigin = value;
        }
    }
    // skew
    function changeSkew(event){
        var value = event.target.value;
        var  div = document.querySelector(".skew");
        if(event.target.id == 'Xangle'){
            Xangle = value;
        div.style.transform = "skew(" + Xangle+ 'deg' +',' + Yangle + "deg)";
        }else if(event.target.id == 'Yangle'){
            Yangle = value;
        div.style.transform = "skew(" + Xangle+ 'deg' +',' + Yangle + "deg)";
        }else{
            div.style.transformOrigin = value;
        }
    }
