/*
 실기시험 1 (40점만점)
 -작성자: 이동근 (5강의실)
 -주 제 : 회원가입 & 로그인 페이지
 -목 적 :회원가입 & 로그인
 -기 능 :회원가입 & 로그인
 */
function login() {
  document.querySelector('.loginforms').className = "loginforms login_process";  
document.querySelector('.login_form').style.display = "block";
document.querySelector('.signup_form').style.opacity = "0";               

setTimeout(function(){  document.querySelector('.login_form').style.opacity = "1"; },400);  
  
setTimeout(function(){    
document.querySelector('.signup_form').style.display = "none";
},200);  
  }

function signup(at) {
  document.querySelector('.loginforms').className = "loginforms signup_process";
  document.querySelector('.signup_form').style.display = "block";
document.querySelector('.login_form').style.opacity = "0";
  
setTimeout(function(){  document.querySelector('.signup_form').style.opacity = "1";
},100);  

setTimeout(function(){   document.querySelector('.login_form').style.display = "none";
},400);  


}    



function goback() {

document.querySelector('.loginforms').className = "loginforms";  
document.querySelector('.signup_form').style.opacity = "0";               
document.querySelector('.login_form').style.opacity = "0"; 

setTimeout(function(){
document.querySelector('.signup_form').style.display = "none";
document.querySelector('.login_form').style.display = "none";
},500);  
  
  }
