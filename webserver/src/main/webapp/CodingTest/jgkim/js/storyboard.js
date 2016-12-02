/**
 ▣  실기시험 : (40점 만점)
 - 작성자 : 김진곤 (5강의실)
 - 주 제 : color picker
 - 목 적 : HTML5환경에서 색상 선택 툴을 제공한다.
 - 기 능 : 기능 : 사용자가 임의로 설정할 수 있는 사용자 팔레트 기능
 선택한 색상의 RGB값 표시 및 RGB값으로 색 선택 가능
 */

var picker = (function () {

	//Constant Variables
	var defaultSwatchColors = [
		"#554499", '#FFFB0D', '#0532FF', '#FF9300', '#00F91A', '#FF2700', '#000000',
		'#686868', '#EE5464', '#D27AEE', '#5BA8C4', '#E64AA9', '#A1BE29', '#FFFFFF'];

	/*
	 	declarations of helper function

	 */
	function clamp(value, min, max)
	{
		if (typeof value != "number" ||
			typeof min != "number" ||
			typeof max != "number")
			throw "invalid type";

		if (value < min)
			value = min;
		else if (value > max)
			value = max;

		return value;
	}

	function hueToRgb(p, q, t)
	{
		if (t < 0)
			t += 1;
		else if (t > 1)
			t -= 1;

		if(t < 1/6)
			return p + (q - p) * 6 * t;
		else if(t < 1/2)
			return q;
		else if(t < 2/3)
			return p + (q - p) * (2/3 - t) * 6;
		return p;
	}


	function hslToRgb(h, s, l)
	{
		var r, g, b;

		if (s == 0) {
			r = g = b = l; // achromatic
		} else {
			var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
			var p = 2 * l - q;
			r = hueToRgb(p, q, h + 1/3);
			g = hueToRgb(p, q, h);
			b = hueToRgb(p, q, h - 1/3);
		}

		return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
	}

	//h s v : [0 ~ 1]범위값 리턴
	function rgbToHsv(r, g, b)
	{
		r /= 255;
		g /= 255;
		b /= 255;

		var minRGB = Math.min(r, g, b);
		var maxRGB = Math.max(r, g, b);

		// Black-gray-white
		if (minRGB == maxRGB)
			return [0, 0, minRGB];

		// Colors other than black-gray-white:
		var d = (r==minRGB) ? g-b : ((b==minRGB) ? r-g : b-r);
		var h = (r==minRGB) ? 3 : ((b==minRGB) ? 1 : 5);

		return [(h - d/(maxRGB - minRGB)) / 6, (maxRGB - minRGB) / maxRGB, maxRGB];
	}

	/*
		classes
	 */

	function ColorPicker()
	{
		if (!(this instanceof ColorPicker))
			return new ColorPicker(arguments);

		this.frame = document.querySelector(".colorPickerPanel");

		this.defaultSwatches = document.querySelector("div.defaultSwatches");
		this.userSwatches = document.querySelector("div.userSwatches");
		this.colorSwatches = [];

		this.swatchEventCallback = this.swatchEventHandler.bind(this);
		for (var i = 0; i < defaultSwatchColors.length; ++i)
			this.addSwatch(defaultSwatchColors[i], false);

		var spectrumMapElem = document.querySelector(".spectrumMap");
		var spectrumPointerElem = document.querySelector(".spectrumPointer");
		var hueMapElem = document.querySelector(".hueMap");
		var huePointerElem = document.querySelector(".huePointer");
		this.redInputElem = document.querySelector("input.rgbInput#red");
		this.blueInputElem = document.querySelector("input.rgbInput#blue");
		this.greenInputElem = document.querySelector("input.rgbInput#green");
		this.colorBoxElem = document.querySelector(".colorBox");
		this.addSwatchElem = document.querySelector(".addSwatch");
		this.cancelElem = document.querySelector(".cancelButton");
		this.selectElem = document.querySelector(".selectButton");

		this.sMap = new SpectrumMap(this, spectrumMapElem, spectrumPointerElem);
		this.sMap.drawGradient();

		this.hueHandler = this.updateHue.bind(this);
		this.hue = new HueMap(this, hueMapElem, huePointerElem, this.hueHandler);

		this.eventTarget = null;
		this.mouseUpCallback = null;
		this.mouseMoveCallback = null;
		this.rgbInputListener = this.changeColorFromRGB.bind(this);

		this.frame.addEventListener("mouseout", this.mouseOut.bind(this));
		this.redInputElem.addEventListener("input", this.rgbInputListener);
		this.greenInputElem.addEventListener("input", this.rgbInputListener);
		this.blueInputElem.addEventListener("input", this.rgbInputListener);
		this.addSwatchElem.addEventListener("click", this.onSwatchAdd.bind(this));

		this.cancelElem.addEventListener("click", this.show.bind(this, false));
		this.selectElem.addEventListener("click", this.confirm.bind(this));

		this.onChanged = null;
		this.onSelected = null;

		this.show(false);
	}

	ColorPicker.prototype = {

		show : function (visible)
		{
			if (visible)
				this.frame.style.display = "block";
			else
				this.frame.style.display = "none";
		},

		confirm :function ()
		{
			this.show(false);
			if (this.onSelected)
				this.onSelected(this.sMap.color);
		},

		addSwatch : function (color, isCustom)
		{
			var tmp = new ColorSwatch(color, this.swatchEventCallback);
			if (isCustom) {
				this.userSwatches.appendChild(tmp.element);
				this.colorSwatches[this.colorSwatches.length] = tmp;
			} else {
				this.defaultSwatches.appendChild(tmp.element);
			}
		},

		correctNumberInput : function (event)
		{
			var digitRegex = /^\d+$/g;
			var target = event.target;
			if (digitRegex.test(target.value) && Number(target.value) < 256)
				return true;

			var orgValue = 0;
			switch (target)
			{
				case this.redInputElem :
					orgValue = this.sMap.r;
					break;
				case this.blueInputElem :
					orgValue = this.sMap.b;
					break;
				case this.greenInputElem :
					orgValue = this.sMap.g;
					break;
				default :
					throw "Unimplemented operation occurred.";
			}
			target.value = orgValue;
			return false;
		},

		changeColorFromRGB : function (event)
		{
			if (!this.correctNumberInput(event))
				return;
			var r = Number(this.redInputElem.value);
			var g = Number(this.greenInputElem.value);
			var b = Number(this.blueInputElem.value);

			this.sMap.setRgb(r, g, b);
			this.hue.setHueFromRgb(r, g, b);
		},

		onSwatchAdd : function ()
		{
			console.log(this.sMap.color);
			this.addSwatch(this.sMap.color, true);
		},

		colorChanged : function ()
		{
			this.redInputElem.value = this.sMap.r;
			this.greenInputElem.value = this.sMap.g;
			this.blueInputElem.value = this.sMap.b;
			this.colorBoxElem.style.backgroundColor = this.sMap.color;
			if (this.onChanged)
				this.onChanged(this.sMap.color);
		},

		swatchEventHandler : function (color)
		{
			var rgbRegex = /\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)/;
			var m = rgbRegex.exec(color);
			if (!m || m.length != 1)
				throw "unable to apply swatch color (unknown color pattern)";
			var rgbStr = m[0].replace(/\(|\)/g, "").split(",");
			var r = Number(rgbStr[0]);
			var g = Number(rgbStr[1]);
			var b = Number(rgbStr[2]);
			this.sMap.setRgb(r, g, b);
			this.hue.setHueFromRgb(r, g, b);
		},

		updateHue : function ()
		{
			this.sMap.hueValue = this.hue.hueValue;
			this.sMap.update();
		},

		mouseOut : function (event)
		{
			if (!this.eventTarget)
				return false;

			var rect = this.frame.getBoundingClientRect();
			if (event.clientX > rect.left &&
				event.clientY > rect.top &&
				event.clientX < rect.right &&
				event.clientY < rect.bottom)
				return;

			this.frame.removeEventListener("mouseup", this.mouseUpCallback);
			this.frame.removeEventListener("mousemove", this.mouseMoveCallback);
			if (typeof this.eventTarget.mouseOut === "function")
				this.eventTarget.mouseOut(event);
			this.eventTarget = null;
		},

		registerEventListener : function (target, event, listener)
		{
			if (this.eventTarget && this.eventTarget != target)
				throw "cannot register event listener : already exist";

			this.eventTarget = target;

			var callback = null;
			switch (event) {
				case "mouseup" :
					this.mouseUpCallback = callback = listener.bind(target);
					break;
				case "mousemove" :
					this.mouseMoveCallback = callback = listener.bind(target);
					break;
				default :
					throw "unsupported event";
			}
			this.frame.addEventListener(event, callback);
		},

		UnregisterEventListener : function (target, event)
		{
			var callback = null;
			switch (event) {
				case "mouseup" :
					callback = this.mouseUpCallback;
					this.mouseUpCallback = null;
					break;
				case "mousemove" :
					callback = this.mouseMoveCallback;
					this.mouseMoveCallback = null;
					break;
				default :
					throw "unsupported event";
			}
			this.eventTarget = null;
			this.frame.removeEventListener(event, callback);
		}
	};


	function ColorSwatch(color, eventListener)
	{
		if (!(this instanceof ColorSwatch))
			return new ColorSwatch(arguments);


		this.eventListener = eventListener;
		this.element = document.createElement("button");
		this.element.classList.add("swatch");
		this.element.style.backgroundColor = color;
		this.color = this.element.style.backgroundColor;
		this.element.addEventListener("click", this.clickListener.bind(this));
	}

	ColorSwatch.prototype = {

		clickListener : function ()
		{
			this.eventListener(this.color);
		}
	};


	function SpectrumMap(parent, frame, pointer)
	{
		if (!(this instanceof  SpectrumMap))
			return new SpectrumMap(arguments);

		this.parent = parent;
		this.frame = frame;
		this.pointer = pointer;
		this.color = "rgb(255, 255, 255)";
		this.r = 255;
		this.g = 255;
		this.b = 255;
		this.hueValue = 0;
		this.width = 0;
		this.height = 0;
		this.curPos = { x : 0, y : 0, xRatio : 0, yRatio : 0 };

		this.frame.addEventListener("mousedown", this.mouseDown.bind(this));
	}


	SpectrumMap.prototype = {

		_setGradient : function ()
		{
			var context = this.frame.getContext("2d");
			this._whiteGradient = context.createLinearGradient(0, 0, this.frame.width, 0);
			this._whiteGradient.addColorStop(0, "#fff");
			this._whiteGradient.addColorStop(1, "transparent");

			this._blackGradient = context.createLinearGradient(0, 0, 0, this.frame.height);
			this._blackGradient.addColorStop(0, "transparent");
			this._blackGradient.addColorStop(1, "#000");
		},

		/*
			calculates which color is selected.
		 */
		changePickedColor : function ()
		{
			var v = 1 - this.curPos.yRatio;
			var s = this.curPos.xRatio;

			var lightness = (v / 2) * (2 - s);
			var saturation = lightness && lightness < 1 ? s * v / (lightness < 0.5 ? lightness * 2 : 2 - lightness * 2) : s;
			var rgb = hslToRgb(this.hueValue, saturation, lightness);
			this.r = rgb[0];
			this.g = rgb[1];
			this.b = rgb[2];
			this.color = "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
			this.parent.colorChanged();
		},

		/*
			rgb값으로부터 변경
		 */
		setRgb : function (r, g, b)
		{
			this.r = r;
			this.g = g;
			this.b = b;
			var hsv = rgbToHsv(r, g, b);
			this.hueValue = hsv[0];
			var rect = this.frame.getBoundingClientRect();
			this.curPos.x = hsv[1] * rect.width;
			this.curPos.y = (1 - hsv[2]) * rect.height;
			this.curPos.xRatio = hsv[1];
			this.curPos.yRatio = 1 - hsv[2];

			this.color = "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
			this.drawGradient();
			this.locatePointer();
			this.parent.colorChanged();
		},

		getMousePosition : function(event)
		{
			var rect = this.frame.getBoundingClientRect();
			this.curPos.x = clamp(event.clientX - rect.left, 0, rect.width);
			this.curPos.y = clamp(event.clientY - rect.top, 0, rect.height);
			this.curPos.xRatio = this.curPos.x / rect.width;
			this.curPos.yRatio = this.curPos.y / rect.height;
		},

		locatePointer : function ()
		{
			this.pointer.style.left = this.curPos.x + "px";
			this.pointer.style.top = this.curPos.y + "px";
			this.pointer.style.backgroundColor = this.color;
		},

		mouseDown : function (event)
		{
			this.getMousePosition(event);
			this.changePickedColor();
			this.locatePointer();
			this.parent.registerEventListener(this, "mousemove", this.mouseMove);
			this.parent.registerEventListener(this, "mouseup", this.mouseUp);
		},

		mouseMove : function (event)
		{
			this.getMousePosition(event);
			this.changePickedColor();
			this.locatePointer();
		},

		mouseUp : function ()
		{
			this.parent.UnregisterEventListener(this, "mousemove");
			this.parent.UnregisterEventListener(this, "mouseup");
		},

		update : function ()
		{
			this.changePickedColor();
			this.drawGradient();
			this.locatePointer();
		},

		//draw gradient;
		drawGradient : function ()
		{
			this._setGradient();

			var context = this.frame.getContext("2d");
			var hueRGB = hslToRgb(this.hueValue, 1, .5);
			context.fillStyle = "rgb(" + hueRGB[0] + ", " + hueRGB[1] + ", " + hueRGB[2] + ")";
			context.fillRect(0, 0, this.frame.width, this.frame.height);

			context.fillStyle = this._whiteGradient;
			context.fillRect(0, 0, this.frame.width, this.frame.height);

			context.fillStyle = this._blackGradient;
			context.fillRect(0, 0, this.frame.width, this.frame.height);

			this.pointer.style.backgroundColor = this.color;
		}
	};


	function HueMap(parent, frame, pointer, updateListener)
	{
		if (!(this instanceof HueMap))
			return new HueMap(arguments);

		this.parent = parent;
		this.frame = frame;
		this.pointer = pointer;
		this.updateListener = updateListener;

		this.hueValue = 0; //값 범위 [0 ~ 1]

		//Draw gradient instantly
		var context = this.frame.getContext("2d");
		var hueGradient = context.createLinearGradient(0, 0, 0, this.frame.height);
		hueGradient.addColorStop(0.00, "hsl(360,100%,50%)");
		hueGradient.addColorStop(0.17, "hsl(61.2,100%,50%)");
		hueGradient.addColorStop(0.33, "hsl(118.8, 100%, 50%)");
		hueGradient.addColorStop(0.50, "hsl(180, 100%, 50%)");
		hueGradient.addColorStop(0.67, "hsl(241.2, 100%, 50%)");
		hueGradient.addColorStop(0.83, "hsl(298.8, 100%, 50%)");
		hueGradient.addColorStop(1.00, "hsl(0,100%,50%)");
		context.fillStyle = hueGradient;
		context.fillRect(0, 0, this.frame.width, this.frame.height);

		this.frame.addEventListener("mousedown", this.mouseDown.bind(this));
	}

	HueMap.prototype = {

		_update : function (event)
		{
			var rect = this.frame.getBoundingClientRect();
			var y = clamp(event.clientY - rect.top, 0, rect.height);
			this.hueValue = y / rect.height;
			//update pointer location
			this.pointer.style.top = y + "px";
			this.updateListener();
		},

		setHueFromRgb : function (r, g, b)
		{
			var rect = this.frame.getBoundingClientRect();
			var hsv = rgbToHsv(r, g, b);
			this.hueValue = hsv[0];
			this.pointer.style.top = hsv[0] * rect.height + "px";
		},

		mouseDown : function (event)
		{
			this.parent.registerEventListener(this, "mouseup", this.mouseUp);
			this.parent.registerEventListener(this, "mousemove", this.mouseMove);
			this._update(event);
		},

		mouseMove : function (event)
		{
			this._update(event);
		},

		mouseUp : function ()
		{
			this.parent.UnregisterEventListener(this, "mouseup");
			this.parent.UnregisterEventListener(this, "mousemove");
		}
	};

	return new ColorPicker();
})();


picker.onChanged = function (color)
{
	document.body.style.backgroundImage = "linear-gradient(to bottom, " + color + ", #333333)";
};

picker.onSelected = function (color)
{

};

function show(event)
{
	picker.show(true);
};