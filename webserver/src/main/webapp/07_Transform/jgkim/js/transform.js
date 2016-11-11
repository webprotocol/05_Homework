/**
 * Created by LaXid on 2016. 11. 11..
 */

(function ()
{
	var moveTarget;
	var preX;
	var preY;

	function mMove(event)
	{
		var deltaX = event.pageX - preX;
		var deltaY = event.pageY - preY;

		var tmp = moveTarget.style.transform.match(/[-\d]+px\,\s[-\d]+px/);
		var pos;
		var newX;
		var newY;
		if (tmp && tmp.length != 0) {
			pos = moveTarget.style.transform.match(/[-\d]+px\,\s[-\d]+px/)[0].replace(/[(px)\s]/g, "").split(",");
			newX = Number(pos[0]) + deltaX;
			newY = Number(pos[1]) + deltaY;
		} else {
			newX = deltaX;
			newY = deltaY;
		}

		moveTarget.style.transform = "translate(" + newX + "px, " + newY + "px)";
		document.querySelector("span[id=tranXOut]").innerText = newX;
		document.querySelector("span[id=tranYOut]").innerText = newY;

		preX = event.pageX;
		preY = event.pageY;
	};

	var sections = document.querySelectorAll("div[id=tranBox]");
	for (i = 0; i < sections.length; ++i)
	{
		sections[i].addEventListener("mousedown", function (event)
		{
			var maxZ = 0;
			for (var i = 0; i < sections.length; ++i)
				maxZ = Math.max(maxZ, sections[i].style.zIndex);
			if (maxZ != 0 && maxZ != this.style.zIndex)
				this.style.zIndex = maxZ + 1;

			moveTarget = event.target;
			moveTarget.addEventListener("mousemove", mMove);
			preX = event.pageX;
			preY = event.pageY;
		});

		sections[i].addEventListener("mouseup", function ()
		{
			moveTarget.removeEventListener("mousemove", mMove);
			moveTarget = null;
		});
	}

	// tran
	// function trans()
	// {
	// 	var xCtr = document.querySelector("input[id=tranXCtr]");
	// 	var yCtr = document.querySelector("input[id=tranYCtr]");
	// 	document.querySelector("div[id=tranBox]").style.transform =
	// 		"translate(" + xCtr.value + "px ," + yCtr.value + "px)";
	// 	document.querySelector("span[id=tranXOut]").innerText = xCtr.value;
	// 	document.querySelector("span[id=tranYOut]").innerText = yCtr.value;
	// };
	// document.querySelector("input[id=tranXCtr]").addEventListener("input", trans);
	// document.querySelector("input[id=tranYCtr]").addEventListener("input", trans);

	// scale
	function scale()
	{
		var xCtr = document.querySelector("input[id=scaleXCtr]");
		var yCtr = document.querySelector("input[id=scaleYCtr]");
		document.querySelector("div[id=scaleBox]").style.transform =
			"scale(" + xCtr.value + ", " + yCtr.value;
		document.querySelector("span[id=scaleXOut]").innerText = xCtr.value;
		document.querySelector("span[id=scaleYOut]").innerText = yCtr.value;
	}
	document.querySelector("input[id=scaleXCtr]").addEventListener("input", scale);
	document.querySelector("input[id=scaleYCtr]").addEventListener("input", scale);

	// rot
	document.querySelector("input[id=rotCtr]").addEventListener("input", function ()
	{
		document.querySelector("div[id=rotBox").style.transform = "rotate(" + this.value + "deg)";
		document.querySelector("span[id=degreeOut]").innerText = this.value;
	});

	// skew
	function skew()
	{
		var xCtr = document.querySelector("input[id=skewXCtr]");
		var yCtr = document.querySelector("input[id=skewYCtr]");
		document.querySelector("div[id=skewBox]").style.transform =
			"skew(" + xCtr.value + "deg, " + yCtr.value + "deg)";
		document.querySelector("span[id=skewXOut]").innerText = xCtr.value;
		document.querySelector("span[id=skewYOut]").innerText = yCtr.value;
	}
	document.querySelector("input[id=skewXCtr]").addEventListener("input", skew);
	document.querySelector("input[id=skewYCtr]").addEventListener("input", skew);


	var originCtr = document.querySelectorAll("input[name=origin]");
	for (var i = 0; i < originCtr.length; ++i)
	{
		originCtr[i].addEventListener("input", function ()
		{
			var target = document.querySelector("div[id=" + this.dataset['target'] + "]");
			var oPos = target.style.transformOrigin;
			oPos = oPos == "" ? "50% 50%" : oPos;
			oPos = oPos.split(" ");
			if (this.dataset['dir'] == "0")
				target.style.transformOrigin = this.value + "% " + oPos[1];
			else
				target.style.transformOrigin = oPos[0] + " " + this.value + "%";

		});
	}
})();

