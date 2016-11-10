 
 
function linear(event){
    var value=event.target.value;
    console.log("linear-gradient"+value);
    cccc.style.background='linear-gradient('+aa.value+','+bb.value+','+cc.value+','+dd.value+')';	
}

function radial(event){
    var value=event.target.value;
    console.log("radial-gradient"+value);
    qqqq.style.background='radial-gradient('+yy.value+','+zz.value+','+ww.value+')';	
}