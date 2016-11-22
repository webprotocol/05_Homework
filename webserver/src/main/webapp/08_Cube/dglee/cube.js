var m_ModValueX = 0;
var m_ModValueY = 0;
var m_ModValueZ = 0;


function RotateCube_DimX() {
    var ModValue = document.getElementById("DimX").value;
    m_ModValueX = ModValue;
    document.getElementById("DimXValue").innerHTML = ModValue; 

    InvalidateProperties();
}

function RotateCube_DimY() {
    var ModValue = document.getElementById("DimY").value;
    m_ModValueY = ModValue;
    document.getElementById("DimYValue").innerHTML = ModValue; 

    InvalidateProperties();
}

function RotateCube_DimZ() {
    var ModValue = document.getElementById("DimZ").value;
    m_ModValueZ = ModValue;
    document.getElementById("DimZValue").innerHTML = ModValue; 

    InvalidateProperties();
}

function InvalidateProperties() {
    
    var Target = document.getElementById("Cube");

    Target.style['transform'] = "rotateX(" + m_ModValueX + "deg) rotateY(" + m_ModValueY + "deg) rotateZ(" + m_ModValueZ + "deg)";

}