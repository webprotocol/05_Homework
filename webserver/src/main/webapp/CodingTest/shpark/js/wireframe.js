function change(event) {
    var value = event.target;
    var pi = document.querySelector('.d_2');
    var img = document.querySelectorAll('.img');
    if (event.id == "x") {
        pi.style.transform = "rotate(90deg)";
        for (var i = 0; i < img.length; i++) {
            img[i].style.transform = "rotateZ(270deg)";
        }
    }
    else {
        pi.style.transform = "rotateZ(0deg) ";
        for (var i = 0; i < img.length; i++) {
            img[i].style.transform = "rotateZ(0deg)";
        }
    }
}
var index = 2;
function changeV(event) {
    var value = event.target;
    var div1 = document.querySelector('.menu li div >#a1');
    var div2 = document.querySelector('.menu li div >#a2');
    var chan = document.querySelectorAll('.d_3');
    if (event.id == "a1") {
        div2.style.zIndex = index;
        index++;
        for (var i = 0; i < chan.length; i++) {
            chan[i].style.transformOrigin = "50% 50% 300px";
        }
    }
    else {
        div1.style.zIndex = index;
        index++;
        for (var i = 0; i < chan.length; i++) {
            chan[i].style.transformOrigin = "50% 50% -300px";
        }
    }
}



