(function() {
	var result = document.querySelector("div[id=result]");

	function css(element, property)
	{
		return window.getComputedStyle(element, null).getPropertyValue(property);
	}

	function cssOut(csstext)
	{
		var uiCssText = document.querySelector("input[id=uiCssText]");
		uiCssText.value = csstext;
	}

	/*var changeBGStyleByValue = function (event)
	{
		result.style[event.target['name']] = event.target['value'] + "%";
	}*/

	var changeBGStyle = function (event)
	{
		result.style[event.target['name']] = event.target['value'];
		cssOut(result.style.cssText);
	}


	var changeBGCSS = function (event)
	{
		result.style.background = event.target.value;
		cssOut(result.style.cssText);
	}

	var changeStyle = function (event)
	{
		result.style.cssText = event.target.value;

	}

	var radioChoosers = document.querySelectorAll("input[type=radio]");
	for (var i = 0; i < radioChoosers.length; ++i)
	{
		radioChoosers[i].addEventListener("click", changeBGStyle);
	}

	var uiSizeChooser = document.querySelector("input[id=uiSizeChooser]");
	uiSizeChooser.addEventListener("input", function(event){
		document.querySelector("span[id=percent]").innerText = result.style[event.target['name']] = event.target['value'] + "%";
		cssOut(result.style.cssText);
	});

	var uiPosChooser = [document.querySelector("input[id=uiPosXChooser]"), document.querySelector("input[id=uiPosYChooser]")];
	uiPosChooser[0].addEventListener("input", function(event){
		result.style[event.target['name']] = event.target['value'] + "% " + uiPosChooser[1].value + "%";
		document.querySelector("span[id=posx]").innerText = "X = " + event.target['value'] + "%";
		cssOut(result.style.cssText);
	});

	uiPosChooser[1].addEventListener("input", function(event){
		result.style[event.target['name']] = uiPosChooser[0].value + "% " + event.target['value'] + "%";
		document.querySelector("span[id=posy]").innerText = "Y = " + event.target['value'] + "%";
		cssOut(result.style.cssText);
	});


	var shortCss = document.querySelector("input[id=shortCss]");
	shortCss.addEventListener("input", changeBGCSS);

	document.querySelector("input[id=uiCssText]").addEventListener("input", changeStyle);
})();