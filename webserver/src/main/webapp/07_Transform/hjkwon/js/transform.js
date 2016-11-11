function TranslateBox() {
    var TX_Range = document.getElementById("m_TX_Range").value;
    var TY_Range = document.getElementById("m_TY_Range").value;

    var Translate = document.getElementById("m_Translate");

    Translate.style['transform'] = 'translate(' + TX_Range + '%, ' + TY_Range + '% )';

    document.getElementById("m_TX").innerHTML = TX_Range;
    document.getElementById("m_TY").innerHTML = TY_Range;
}

function ScaleBox() {
    var SX_Range = document.getElementById("m_SX_Range").value;
    var SY_Range = document.getElementById("m_SY_Range").value;

    var Scale = document.getElementById("m_Scale");

    Scale.style['transform'] = 'scale(' + Int2Percent(SX_Range) + ', ' + Int2Percent(SY_Range) + ')';

    document.getElementById("m_SX").innerHTML = SX_Range;
    document.getElementById("m_SY").innerHTML = SY_Range;
}

function RotateBox() {
    var RotateAngle = document.getElementById("m_Rotate_Angle").value;

    var Rotate = document.getElementById("m_Rotate");

    Rotate.style['transform'] = 'rotate(' + RotateAngle + 'deg )';

    document.getElementById("m_Angle").innerHTML = RotateAngle;
}

function SkewBox() {
    var SkewAngle1 = document.getElementById("m_Skew_Angle1").value;
    var SkewAngle2 = document.getElementById("m_Skew_Angle2").value;
    
    var Skew = document.getElementById("m_Skew");

    Skew.style['transform'] = 'skew(' + SkewAngle1 + 'deg, ' + SkewAngle2 + 'deg )';

    document.getElementById("m_Skew1").innerHTML = SkewAngle1;
    document.getElementById("m_Skew2").innerHTML = SkewAngle2;
}

function SetOriginBox(index) {
    var value = document.body;
    var variable = [];
    switch( index ) {
        case 1: // TranslateBox
            value = document.getElementById("m_Transform");
            variable[0] = document.getElementById("m_Transform_OX_Range").value;
            variable[1] = document.getElementById("m_Transform_OY_Range").value;
            document.getElementById("m_TOX").innerHTML = variable[0];
            document.getElementById("m_TOY").innerHTML = variable[1];
            break;
        case 2: // ScaleBox
            value = document.getElementById("m_Scale");
            variable[0] = document.getElementById("m_Scale_OX_Range").value;
            variable[1] = document.getElementById("m_Scale_OY_Range").value;
            document.getElementById("m_SOX").innerHTML = variable[0];
            document.getElementById("m_SOY").innerHTML = variable[1];
            break;
        case 3: // RotateBox
            value = document.getElementById("m_Rotate");
            variable[0] = document.getElementById("m_Rotate_OX_Range").value;
            variable[1] = document.getElementById("m_Rotate_OY_Range").value;
            document.getElementById("m_ROX").innerHTML = variable[0];
            document.getElementById("m_ROY").innerHTML = variable[1];
            break;
        case 4: // SkewBox
            value = document.getElementById("m_Skew");
            variable[0] = document.getElementById("m_Skew_OX_Range").value;
            variable[1] = document.getElementById("m_Skew_OY_Range").value;
            document.getElementById("m_SkOX").innerHTML = variable[0];
            document.getElementById("m_SkOY").innerHTML = variable[1];
            break;
    } 
    value.style['transform-origin'] = variable[0] + '%' + variable[1] + "%";
}

function Int2Percent( value ) {
    return parseInt( value ) * 0.01;
}