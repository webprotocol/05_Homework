function ChangePosStatic() {
    var box = document.getElementById("m_Static");
    var Static_X = document.getElementById("m_Static_X");
    var Static_X_Value = document.getElementById("m_Static_X_Value");
    var Static_Y = document.getElementById("m_Static_Y");
    var Static_Y_Value = document.getElementById("m_Static_Y_Value");
    box.style['left'] = Static_X.value + "%";
    Static_X_Value.innerHTML = Static_X.value;
    box.style['top'] = Static_Y.value + "%";
    Static_Y_Value.innerHTML = Static_Y.value;
}

function ChangePosRelative() {
    var box = document.getElementById("m_Relative");
    var Relative_X = document.getElementById("m_Relative_X");
    var Relative_X_Value = document.getElementById("m_Relative_X_Value");
    var Relative_Y = document.getElementById("m_Relative_Y");
    var Relative_Y_Value = document.getElementById("m_Relative_Y_Value");
    box.style['left'] = Relative_X.value + "%";
    Relative_X_Value.innerHTML = Relative_X.value;
    box.style['top'] = Relative_Y.value + "%";
    Relative_Y_Value.innerHTML = Relative_Y.value;
}

function ChangePosFixed() {
    var box = document.getElementById("m_Fixed");
    var Fixed_X = document.getElementById("m_Fixed_X");
    var Fixed_X_Value = document.getElementById("m_Fixed_X_Value");
    var Fixed_Y = document.getElementById("m_Fixed_Y");
    var Fixed_Y_Value = document.getElementById("m_Fixed_Y_Value");
    box.style['left'] = Fixed_X.value + "%";
    Fixed_X_Value.innerHTML = Fixed_X.value;
    box.style['top'] = Fixed_Y.value + "%";
    Fixed_Y_Value.innerHTML = Fixed_Y.value;
}

function ChangePosAbsolute() {
    var box = document.getElementById("m_Absolute");
    var Absolute_X = document.getElementById("m_Absolute_X");
    var Absolute_X_Value = document.getElementById("m_Absolute_X_Value");
    var Absolute_Y = document.getElementById("m_Absolute_Y");
    var Absolute_Y_Value = document.getElementById("m_Absolute_Y_Value");
    box.style['left'] = Absolute_X.value + "%";
    Absolute_X_Value.innerHTML = Absolute_X.value;
    box.style['top'] = Absolute_Y.value + "%";
    Absolute_Y_Value.innerHTML = Absolute_Y.value;
}