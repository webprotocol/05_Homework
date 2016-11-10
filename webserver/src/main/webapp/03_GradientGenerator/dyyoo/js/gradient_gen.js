console.log("gradient_gen....");

function backgroundImage(event) {
    var value = event.target.value;
    ori.style.backgroundImage = "linear-gradient" + value;

    console.log("linear-gradient" + value );

}
function text(event) {
	var value = event.target.value;
	ori.style.background=value;
	console.log(value);
}

	// document.querySelector("div")