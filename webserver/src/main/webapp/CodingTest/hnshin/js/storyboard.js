/*
▣실기시험 1(40점 만점)
    - 작성자 : 신한나 (5강의실)
    - 주 제 : 문서편집 및 회원가입, 로그인이 가능한 홈페이지 
    - 목 적 : javascript를 이용한 글자속성변경, 에니메이션을 이용한 움직이는 div창
    - 기 능 : 문서 편집(font size,color,background-image 변경),로그인폼,회원가입폼
*/

//mobile temaDisplay
function temaDisplay(event){
    var  display_hide = document.querySelector('.display_hide');
     display_hide.style.display = 'block';
     display_hide.style.animationName = 'divdisplay';
     display_hide.style.animationDuration = '2s';
     display_hide.style.animarionTimingFunction = 'linear';
     display_hide.style.animationFillMode = 'forwards';
	 display_hide.style.transformOrigin = 'left top';
}

//font size, color , fontname
function changeFontStyle(event){
    var target = event.target;
    var value = event.target.value;
    var textarea = document.querySelector('#textArea');

//font Size
    if(target.id == "FontSize"){
        textarea.style.fontSize = value + 'pt'; 
    }
//font color
    else if(target.id == "FontColor"){
        textarea.style.color = value ;
//fontname
    }else if(target.id =="FontName"){
        console.log(value);
         textarea.style.fontFamily = value;
    }
}

//colorPickerDisplay
function changeFontColor(event){
    var colorPicker = document.querySelector('.colorPicker');
    colorPicker.style.display = 'block';
}
//colorPickerClick
function ColorClick(event){
    var me = event.target;
    var textarea = document.querySelector('#textArea');
    var colorPicker = document.querySelector('.colorPicker');

    if(me.id =="colorPickerTred"){
    textarea.style.color = 'red' ;
    }else if(me.id =="colorPickerTorange"){
    textarea.style.color = 'orange' ;
    }else if(me.id =="colorPickerTyellow"){
    textarea.style.color = 'yellow' ;
    }else if(me.id =="colorPickerTgreen"){
    textarea.style.color = 'green' ;
    }else if(me.id =="colorPickerTblue"){
    textarea.style.color = 'blue' ;
    }else if(me.id =="colorPickerTpurple"){
    textarea.style.color = 'purple' ;
    }else if(me.id =="colorPickerTlime"){
    textarea.style.color = 'lime' ;
    }else if(me.id =="colorPickerTpink"){
    textarea.style.color = 'pink' ;
    }else if(me.id =="colorPickerTcoral"){
    textarea.style.color = 'coral' ;
    }else if(me.id =="colorPickerTexit"){
    colorPicker.style.display = 'none';
    }
}


//italic
function changeFontItalic(event){
    var target = event.target;
    var value = event.target.value;
    var textarea = document.querySelector('#textArea');

     if(target.checked == true){
        textarea.style.fontStyle = value;
    }else {
         textarea.style.fontStyle = "normal";
    }
}

//bold
function changeFontBold(event){
    var target = event.target;
    var value = event.target.value;
    var textarea = document.querySelector('#textArea');

     if(target.checked == true){
        textarea.style.fontWeight = value;
    }else {
         textarea.style.fontWeight = "normal";
    }

}
//underline
function changeFontUndeline(event){
    var target = event.target;
    var value = event.target.value;
    var textarea = document.querySelector('#textArea');

     if(target.checked == true){
        textarea.style.textDecoration = value;
    }else {
         textarea.style.textDecoration = "none";
    }
}
//align
function changeFontAlign(event){
    var target = event.target;
    var value = event.target.value;
    var textarea = document.querySelector('#textArea');

     if(target.checked == true){
        textarea.style.textAlign = value;
    }else {
         textarea.style.textAlign = "left";
    }
}

//tema img changeFontBold
function temaClick(event){
    var value = event.target.value;
    var body = document.querySelector('body');
    body.style.backgroundImage = "url(" + value + ")";
}

