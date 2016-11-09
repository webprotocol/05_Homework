	function radio1(event) {
			var value = event.target.value;
			gradient.style.backgroundLinear=value;
			console.log(value);
		}

    function radio2(event) {
        var value = event.target.value;
        gradient_out.style.background=value;
        console.log(value);
    }