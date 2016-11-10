//color
function changeColor(e) {
    var value = event.target.value;

    result.style.backgroundImage = "linear-gradient(" + selDir.value + ", " + colorX.value + ", " + colorY.value + ")";
}


//direction
function changeDirection(e) {
    if (e.target.type == "range") {
        degree.innerHTML = e.target.value + " deg";
        result.style.backgroundImage = "linear-gradient(" + e.target.value + "deg, " + colorX.value + ", " + colorY.value + ")";
    }

    else {
        result.style.backgroundImage = "linear-gradient(" + e.target.value + ", " + colorX.value + ", " + colorY.value + ")";
    }


}

