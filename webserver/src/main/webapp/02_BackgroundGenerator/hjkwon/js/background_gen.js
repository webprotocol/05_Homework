function ChangeBackgroundImage() {
    var ImageURL = document.getElementById("ImageURL");
    var Container01 = document.getElementById("Container01");
    Container01.style['background-image'] = "URL(" + ImageURL.value + ")";
}

function ChangeClip(value) {
    var Container01 = document.getElementById("Container01");
    Container01.style['background-clip'] = value;
    console.log(value);
}

function ChangeOrigin(value) {
    var Container01 = document.getElementById("Container01");
    Container01.style['background-origin'] = value;
    console.log(value);
}

function ChangeRepeat(value) {
    var Container01 = document.getElementById("Container01");
    Container01.style['background-repeat'] = value;
    console.log(value);
}

function ChangeSize(value) {
    var Container01 = document.getElementById("Container01");
    Container01.style['background-size'] = value;
    console.log(value);
}

function ChangeSizeScale(value) {
    var Container01 = document.getElementById("Container01");
    Container01.style['background-size'] = value + "% " + value + "%";

    var ScaleBox = document.getElementById("ScaleSize");
        ScaleBox.innerHTML = value;
}

var m_Horizen = "left";
var m_Vertical = "top";

var m_Horizen_Cord = 0;
var m_Vertical_Cord = 0;

function ChangePositionH(value) {
    var Container01 = document.getElementById("Container01");
		m_Horizen = value;

    Container01.style['background-position'] = m_Horizen + " " + m_Vertical;
}

function ChangePositionHRange(value) {
    var Container01 = document.getElementById("Container01");
		m_Horizen_Cord = value;
    var ScaleBox = document.getElementById("ScaleSizeHRange");
        ScaleBox.innerHTML = value;

    Container01.style['background-position'] = m_Horizen_Cord + "% " + m_Vertical_Cord + "%";

}

function ChangePositionV(value) {
    var Container01 = document.getElementById("Container01");
		m_Vertical = value;

    Container01.style['background-position'] = m_Horizen + " " + m_Vertical;
}

function ChangePositionVRange(value) {
    var Container01 = document.getElementById("Container01");
		m_Vertical_Cord = value;
    var ScaleBox = document.getElementById("ScaleSizeVRange");
        ScaleBox.innerHTML = value;

    Container01.style['background-position'] = m_Horizen_Cord + "% " + m_Vertical_Cord + "%";
}

function ChangeAttachment(value) {
    var Container01 = document.getElementById("Container01");
		Container01.style['background-attachment'] = value;
}

function ChangeBackgroundAttrs() {
    var Container01 = document.getElementById("Container01");
    var Backgrounds = document.getElementById("Backgrounds");
		Container01.style.background = Backgrounds.value;
}