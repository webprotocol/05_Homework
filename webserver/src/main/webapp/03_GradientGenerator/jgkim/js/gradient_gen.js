/**
 * Created by LaXid on 2016. 11. 8..
 */

(function () {

	function getDirectionValue()
	{
		if (document.querySelector("select[name=uiLinearDirection]").value == "degree")
			return document.querySelector("input[name=uiLinearDirectionCustom]").value + "deg";

		return document.querySelector("select[name=uiLinearDirection]").value;
	}


	function changeGradient()
	{
		var css;

		if (document.querySelectorAll("input[name=uiGradientType]")[0].checked) { //0 => Must be linear
			css = "linear-gradient(" + getDirectionValue();
		} else {
			css = "radial-gradient(";
			var params = makeRadialParam();
			css += params[0] + " " + params[1] + " at " + params[2];
		}

		var colorList = document.querySelector("ul[name=uiColorList]").childNodes;

		for (var i = 0; i < colorList.length; ++i)
			css += ", " + colorList[i].style.backgroundColor;
		css += ")";

		var resultViewer = document.querySelector("div[name=resultViewer]");
		document.body.style.backgroundImage = null;
		resultViewer.style.backgroundImage = null;
		if (document.querySelectorAll("input[name=uiViewSelector]")[0].checked) {
			resultViewer.style.display = "none";
			document.body.style.backgroundImage = css;
		} else {
			resultViewer.style.display = "block";
			resultViewer.style.backgroundImage = css;
		}
	}


	function addListItem(parent, color)
	{
		var li = document.createElement("li");
		li.style.backgroundColor = color;
		li.innerText = color;

		var removeButton = document.createElement("button");
		removeButton.innerText = "삭제";
		removeButton.addEventListener("click", function (event)
		{
			var pthis = event.target.parentNode;
			var whereFrom = pthis.parentNode.parentNode.parentNode;
			pthis.parentNode.removeChild(pthis);
			if (whereFrom == document.querySelector("div[name=uiLinearCtr]"))
				changeGradient(false);
			else
				changeGradient(true);
		});
		li.appendChild(removeButton);
		parent.appendChild(li);
	}


//for radial
	function makeRadialParam()
	{
		var params = [];
		var eli = document.querySelectorAll("input[name=uiRadialShape]")[0];
		var cir = document.querySelectorAll("input[name=uiRadialShape]")[1];
		params[params.length] = document.querySelector("input[name=uiRadialShape]").checked ? eli.value : cir.value;
		params[params.length] = document.querySelector("select[name=uiRadialSize]").value;
		params[params.length] =
			document.querySelector("input[name=uiRadialPosX]").value + "% " + document.querySelector("input[name=uiRadialPosY]").value + "%";
		return params;
	}



//control panel
	var uiCtr = document.querySelectorAll("input[name=uiGradientType]");
	for (var i = 0; i < uiCtr.length; ++i)
	{
		uiCtr[i].addEventListener("click", function (event)
		{
			if (event.target.value == "linear")
			{
				document.querySelector("div[name=uiLinearCtr]").style.display = "block";
				document.querySelector("div[name=uiRadialCtr]").style.display = "none";
				changeGradient(false);
			}
			else
			{
				document.querySelector("div[name=uiLinearCtr]").style.display = "none";
				document.querySelector("div[name=uiRadialCtr]").style.display = "block";
				changeGradient(true);
			}
		});
	}


//direction
	var uiLinearDir = document.querySelectorAll("select[name=uiLinearDirection]");
	for (i = 0; i < uiLinearDir.length; ++i)
	{
		uiLinearDir[i].addEventListener("change", function (event)
		{
			if (event.target.value == "degree")
				document.querySelector("input[name=uiLinearDirectionCustom]").style.display = "inline-block";
			else
				document.querySelector("input[name=uiLinearDirectionCustom]").style.display = "none";

			changeGradient(false);
		});
	}

//direction(custom)
	var uiDirCustom = document.querySelectorAll("input[name=uiLinearDirectionCustom]");
	for (i = 0; i < uiDirCustom.length; ++i)
	{
		uiDirCustom[i].addEventListener("input", function ()
		{
			changeGradient(false);
		})
	}


// EventListener color add button
	var uilAdd = document.querySelector("button[name=uiColorAdder]");
	uilAdd.addEventListener("click", function ()
	{
		var inputColor = document.querySelector("input[name=uiColorInput]").value;
		addListItem(document.querySelector("ul[name=uiColorList]"), inputColor);
		changeGradient(false);
	});
//

//register radial eventList
	var rShape = document.querySelectorAll("input[name=uiRadialShape]");
	for (i = 0; i < rShape.length; ++i)
	{
		rShape[i].addEventListener("click", function ()
		{
			changeGradient(true);
		})
	}

	var radialSize = document.querySelector("select[name=uiRadialSize]");
	radialSize.addEventListener("change", function ()
	{
		console.log(radialSize);
		changeGradient(true);
	});

	var rPosX = document.querySelector("input[name=uiRadialPosX]");
	var rPosY = document.querySelector("input[name=uiRadialPosY]");
	rPosX.addEventListener("input", function ()
	{
		changeGradient(true);
	});
	rPosY.addEventListener("input", function ()
	{
		changeGradient(true);
	});

	//
	var viewSelector = document.querySelectorAll("input[name=uiViewSelector]");
	for(i = 0; i < viewSelector.length; ++i)
	{
		viewSelector[i].addEventListener("click", function ()
		{
			changeGradient();
		})
	}

	//Register Hide button eventListener
	var hideButton = document.querySelector("button[name=uiHideButton]");
	hideButton.addEventListener("click", function ()
	{
		var cpBody = document.querySelector("div[name=controlPanelBody]");
		if (cpBody.style.display == "none") {
			cpBody.style.display = "block";
			hideButton.innerText = "-";
		} else {
			cpBody.style.display = "none";
			hideButton.innerText = "+";
		}
	});

	addListItem(document.querySelector("ul[name=uiColorList]"), "rgb(15, 184, 173)");
	addListItem(document.querySelector("ul[name=uiColorList]"), "rgb(31, 200, 219)");
	addListItem(document.querySelector("ul[name=uiColorList]"), "rgb(44, 181, 232)");

	changeGradient();
})();