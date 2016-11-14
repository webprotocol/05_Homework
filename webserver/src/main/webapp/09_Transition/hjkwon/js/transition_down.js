function MakeBoxH( amount ) {
    for ( var i = 1; i <= amount; i++ ) {
        var classname = "default";
        if ( i == 8 ) {
            classname = "animation"
        }
        document.write("<div class=" + classname + ">" + GetString(i) + "</div>");
    }
}

function GetString( labelnum ) {
    var str = "";
    switch(labelnum) {
        case 1:
            str = "Linear";
            break;
        case 2:
            str = "ease";
            break;
        case 3:
            str = "ease-in";
            break;
        case 4:
            str = "ease-out";
            break;
        case 5:
            str = "ease-in-out";
            break;
        case 6:
            str = "step-start";
            break;
        case 7:
            str = "step-end";
            break;
        case 8:
            str = "animation";
            break;
        default:
            str = "Box";
            break;
    }
    return str;
}