/*
▣ 실기시험2 (40점 만점)
    -작성자 : 최혜진 (5강의실)
    -주 제 : 3D Dice
    -목 적 : HTML5 / CSS3 / Javascript를 이용하여 3D Dice를 완성 및 응용
    -기 능 : 3D Dice를 통해 시각적인 효과를 얻을 수 있다.
*/

// wireframe_js

var rotatex = '';
var rotatey = '';

function changeFront(event) {
    var cube = document.querySelector('.cube_3d');

    cube.style.transform = 'rotateX(-15deg) rotateY(15deg)';
}
function changeBack(event) {
    var cube = document.querySelector('.cube_3d');
    
    cube.style.transform = 'rotateX(212deg) rotateY(11deg)';
}
function changeLeft(event) {
    var cube = document.querySelector('.cube_3d');

    cube.style.transform = 'rotateX(-15deg) rotateY(75deg)';
}
function changeRight(event) {
    var cube = document.querySelector('.cube_3d');

    cube.style.transform = 'rotateX(-142deg) rotateY(69deg)';
}
function changeTop(event) {
    var cube = document.querySelector('.cube_3d');
    
    cube.style.transform = 'rotateX(-75deg) rotateY(-15deg)';
}
function changeBottom(event) {
    var cube = document.querySelector('.cube_3d');

    cube.style.transform = 'rotateX(100deg) rotateY(-15deg)';
}
function changeRotateX(event) {
    var cube = document.querySelector('.cube_3d');
    rotatex = event.target.value;

    ro_x.innerHTML = rotatex;
    cube.style.transform = 'rotateX('+rotatex+'deg)';
}
function changeRotateY(event) {
    var cube = document.querySelector('.cube_3d');
    rotatey = event.target.value;

    ro_y.innerHTML = rotatey;
    cube.style.transform = 'rotateX('+rotatex+'deg) rotateY('+rotatey+'deg)';
}


