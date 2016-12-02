/*
▣실기시험 2(40점 만점)
    - 작성자 : 신한나 (5강의실)
    - 주 제 : imagemap, videoTag, javascript 연습
    - 목 적 : imagemap, video 연속재생, javascript를 이용한 캘린더
    - 기 능 : 홈페이지에 적용 할 수 있는 media관련 태그 연습
*/

var textbox = document.querySelector('#TextClear');
 var SelectCol = document.querySelector('#SelectCol');

/*
*   text에 입력시 table에 입력되도록 하는 쿼리
*/
function changeText(event){
    var me = event.target.value;

/* 1주 */
    if(SelectCol.value == "Onethree"){
       td3.innerHTML = me;
   }else if(SelectCol.value == "Onefour"){
       td4.innerHTML = me;
   }else if(SelectCol.value == "Onefive"){
       td5.innerHTML = me;
   }else if(SelectCol.value == "Onesix"){
       td6.innerHTML = me;
   }else if(SelectCol.value == "Oneseven"){
       td7.innerHTML = me;
   }
/* 2주 */
   else if(SelectCol.value == "Oneeight"){
       td8.innerHTML = me;
   }else if(SelectCol.value == "Onenine"){
       td9.innerHTML = me;
   }else if(SelectCol.value == "Oneten"){
       td10.innerHTML = me;
   }else if(SelectCol.value == "Oneeleven"){
       td11.innerHTML = me;
   }else if(SelectCol.value == "Onetwelve"){
       td12.innerHTML = me;
   }else if(SelectCol.value == "Onethirteen"){
       td13.innerHTML = me;
   }else if(SelectCol.value == "Onefourteen"){
       td14.innerHTML = me;
   }

/* 3주 */
    else if(SelectCol.value == "Onefifteen"){
       td15.innerHTML = me;
   }else if(SelectCol.value == "Onesixteen"){
       td16.innerHTML = me;
   }else if(SelectCol.value == "Oneseventeen"){
       td17.innerHTML = me;
   }else if(SelectCol.value == "Oneeighteen"){
       td18.innerHTML = me;
   }else if(SelectCol.value == "Onenineteen"){
       td19.innerHTML = me;
   }else if(SelectCol.value == "Onetwenty"){
       td20.innerHTML = me;
   }else if(SelectCol.value == "Onetwentyone"){
       td21.innerHTML = me;
   }

/* 4주 */
    else if(SelectCol.value == "Onetwentytwo"){
       td22.innerHTML = me;
   }else if(SelectCol.value == "Onetwentythree"){
       td23.innerHTML = me;
   }else if(SelectCol.value == "twentyfour"){
       td24.innerHTML = me;
   }else if(SelectCol.value == "twentyfive"){
       td25.innerHTML = me;
   }else if(SelectCol.value == "twentysix"){
       td26.innerHTML = me;
   }else if(SelectCol.value == "twentyseven"){
       td27.innerHTML = me;
   }else if(SelectCol.value == "twentyeight"){
       td28.innerHTML = me;
   }

/* 5주 */
    else if(SelectCol.value == "twentynine"){
       td29.innerHTML = me;
   }else if(SelectCol.value == "Onethirty"){
       td30.innerHTML = me;
   }else if(SelectCol.value == "Onethirtyone"){
       td31.innerHTML = me;
   }else if(SelectCol.value == "Onethirtytwo"){
       td32.innerHTML = me;
   }

}

/*
*   Select 입력시 text박스 clear
*/
function ChangeSelect(event){
    
   textbox.value = "";
   textbox.focus();
}


/*
*   적용버튼 클릭시
*/
function ClickOk(event){
    textbox.value = '';
    SelectCol.value= 'first';
}

/*
*   ClearAll 버튼 클릭시
*/
function ClickClear(event){
    var date = document.querySelectorAll('td[id^=td]');
    for(var i=0; i<date.length; i++){
        date[i].innerHTML = '';
    }
    textbox.value = '';
    SelectCol.value= 'first';
}