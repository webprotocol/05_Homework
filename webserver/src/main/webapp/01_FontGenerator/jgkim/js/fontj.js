
(function (){
	var uiChoosers = document.querySelectorAll("fieldset input, fieldset select");
	for (var i = 0; i < uiChoosers.length; ++i)
	{
		uiChoosers[i][uiChoosers[i].dataset.event] = function (params)
		{
			switch (params.target.name)
			{
				case "cssOut" :
					textOut.style.cssText = cssOut.value;
				case "directInput" :
					textOut.style.font = event.target.value;
					break;
				case "font-size" :
					textOut.style[params.target.name] = params.target.value + "pt";
					break;
				case "CbItalic" :
					textOut.style['font-style'] = params.target.checked ? "italic" : "";
					break;
				case "CbVariant" :
					textOut.style['font-variant'] = params.target.checked ? "small-caps" : "";
					break;
				default:
					if (event.target == inputWeight)
					{
						textOut.style['fontWeight'] = event.target.value;
						break;
					}
					else if (event.target.value == "byValue")
					{
						inputWeight.disabled = false;
						break;
					}
					else
					{
						inputWeight.disabled = true;
					}
					textOut.style[params.target.name] = params.target.value;
					break;
			}
			if (params.target != cssOut)
				cssOut.value = textOut.style.cssText;
		};
	}

	var fsChoosers = document.querySelectorAll("div:nth-of-type(1) input");
	for (var i = 0; i < fsChoosers.length; ++i)
	{
		fsChoosers[i][fsChoosers[i].dataset.event] = function (event)
		{
			if (event.target.value == "1") {
				fs1.style.display = "block";
				fs2.style.display = "none";
			}
			else {
				fs1.style.display = "none";
				fs2.style.display = "block";
			}
		}
	}

})();

function css(element, property)
{
    return window.getComputedStyle( element, null ).getPropertyValue( property );
}
