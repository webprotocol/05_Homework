var div21 = document.getElementById('rttr');
function drag(ev) {
    ev.dataTransfer.setData("text/plain", ev.target.id);
}
function allowDrop(ev) {
    ev.preventDefault();
}
function dropDrop(ev) {
    ev.preventDefault();
        var data = ev.dataTransfer.getData("text/plain");
        var t;
            if(ev.target.nodeName == 'TEXTAREA') {
    t = ev.target.parentNode;
}
            else {
    t = ev.target;
}
    t.appendChild(document.getElementById(data));
    div21.innerHTML = "CLICK";
}
function openA(event){
    var value = event.target;
    div21.innerHTML = "<textarea oncontextmenu='del(this)' onDragStart='drag(event)' draggable='true' class='span' id='df'  ></textarea>";
}
function del(t){
    event.preventDefault();
    if (confirm("정말 삭제하시겠습니까?") == true){ 
        t.parentNode.removeChild(t);
    }else{  
        return;
    }
}