function linear(event) {
	var value = event.target.value;
	console.log("change-direction:" + value);
	first.style.background = 'linear-gradient(' + one.value + ',' + two.value + ',' + three.value + ')';
	if (value == 'to bottom' || value == 'to top' || value == 'to right' || value == 'to left') {
		first.style.background = 'linear-gradient(' + one.value + ',' + two.value + ',' + three.value + ')';

	} else {
		first.style.background = 'linear-gradient(' + one1.value + 'deg,' + two.value + ',' + three.value + ')';
	}
}




function radial(event) {
	var value = event.target.value;
	console.log("change-direction:" + value);
	second.style.background = 'radial-gradient(' + four.value + ' ' + five.value + ' at ' + six.value + '% ' + six1.value + '%' + ',' + seven.value + ',' + eight.value + ')';
}
