/*
 ▣  실기시험 : (40점 만점)
 - 작성자 : 김진곤 (5강의실)
 - 주 제 : 주제 : 오디오 비주얼 이퀄라이저
 - 목 적 : 목적 : 제곧내
 - 기 능 : 기능 : 오디오 스펙트럼을 그래프형태로 나타내고 웨이브폼을 보여준다. <br>
 이퀄라이저 기능
 */

(function() {

	var AudioEffector = (function() {

		var audioFileName = "OMFGHello.mp3";
		var spectrumBandwidth = [18, 18, 18, 18, 18, 18, 18, 18, 18, 18,
			32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
			40, 40, 40, 40, 40, 50, 70, 204];
		var eqFreqs = [60, 170, 350, 1000, 3500, 10000];

		AudioEffector.prototype.context = null;
		AudioEffector.prototype.audioElem = null;
		AudioEffector.prototype.audioNode = null;
		AudioEffector.prototype.analyser = null;
		AudioEffector.prototype.eqFilters = null;

		AudioEffector.prototype.waveForm = null;
		AudioEffector.prototype.spectrum = null;
		AudioEffector.prototype.update = null;

		function AudioEffector()
		{
			this.update = this.doUpdate.bind(this);
			this.context = new AudioContext();
			this.audioElem = this.createAudioElem(audioFileName);
			this.analyser = this.context.createAnalyser();
			this.audioNode = this.context.createMediaElementSource(this.audioElem);
			this.eqFilters = this.createEqFilters(eqFreqs);
			this.audioNode.connect(this.eqFilters[0]);
			this.eqFilters[this.eqFilters.length - 1].connect(this.analyser);
			this.analyser.connect(this.context.destination);
			this.waveForm = new Uint8Array(this.analyser.frequencyBinCount);
			this.spectrum = new Float32Array(28);
			this.addController();
			this.audioElem.play();
			// console.log(bandwidth.reduce(function (x, sum) { return x + sum; }, 0));
		}

		AudioEffector.prototype.createAudioElem = function(src)
		{
			var elem = new Audio();
			elem.src = src;
			elem.crossOrigin = "anonymous";
			elem.preload = 'auto';
			// elem.controls = true;
			elem.volume = 1;
			elem.loop = true;
			document.body.appendChild(elem);
			return elem;
		};

		AudioEffector.prototype.createEqFilters = function (eqFreqs)
		{
			var filters = [];
			var context = this.context;
			eqFreqs.forEach(function(freq, i)
			{
				var eq = context.createBiquadFilter();
				eq.frequency.value = freq;
				eq.type = "peaking";
				eq.gain.value = 0;
				filters.push(eq);
			});

			for(var i = 0; i < filters.length - 1; i++)
				filters[i].connect(filters[i+1]);
			return filters;
		};

		AudioEffector.prototype.addController = function ()
		{
			var ranges = document.querySelectorAll('input[type=range]');
			var callback = this.eqCtrEventListener.bind(this);
			for (var i = 0; i < ranges.length; ++i)
				ranges[i].addEventListener("input", callback);
		};

		AudioEffector.prototype.eqCtrEventListener = function (event)
		{
			var value = Number(event.target.value);
			var index = Number(event.target.dataset['n']);
			this.eqFilters[index].gain.value = value;
			document.querySelector("#freqText"+index).innerText = value + " dB";
		};

		AudioEffector.prototype.doUpdate = function()
		{
			var freqData = new Uint8Array(this.analyser.frequencyBinCount);
			this.analyser.getByteFrequencyData(freqData);
			var sum = 0;
			var currLeft = spectrumBandwidth[0];
			var j = 0;
			for (var i = 0; i < freqData.length; ++i)
			{
				sum += freqData[i];
				if (--currLeft == 0)
				{
					this.spectrum[j] = sum / spectrumBandwidth[j];
					sum = 0;
					if (++j < spectrumBandwidth.length)
						currLeft = spectrumBandwidth[j];
				}
			}

			var waveData = new Uint8Array(this.analyser.frequencyBinCount);
			this.analyser.getByteTimeDomainData(waveData);
			this.waveForm = waveData;
		};

		return AudioEffector;
	})();


	var VisualEqualizer = (function() {

		var canvasWidth = 2000;
		var canvasHeight = 1000;

		VisualEqualizer.prototype.canvas = null;
		VisualEqualizer.prototype.context = null;
		VisualEqualizer.prototype.waveformStyle = null;

		VisualEqualizer.prototype.audioEffector = null;
		VisualEqualizer.prototype.run = null; //callback function

		function VisualEqualizer()
		{
			this.run = this.runRoutine.bind(this);
			this.initScreen();
			this.audioEffector = new AudioEffector();
			this.run();
		}

		VisualEqualizer.prototype.initScreen = function()
		{
			this.canvas = document.querySelector("canvas");
			this.context = this.canvas.getContext('2d');
			this.canvas.width = canvasWidth;
			this.canvas.height = canvasHeight;

			this.waveformStyle = this.context.createLinearGradient(0, 0, 0, this.canvas.height);
			this.waveformStyle.addColorStop(0.00, "rgb(193, 8, 27)");
			this.waveformStyle.addColorStop(0.50, "rgb(210, 122, 238)");
			this.waveformStyle.addColorStop(1.00, "rgb(22, 20, 225)");
		};


		VisualEqualizer.prototype.runRoutine = function()
		{
			this.audioEffector.update();
			var cWidth = this.canvas.width;
			var cHeight = this.canvas.height;
			var spectrum = this.audioEffector.spectrum;
			var waveform = this.audioEffector.waveForm;
			var segWidth = cWidth / spectrum.length;
			var padding = 5;
			var originValue = 128;

			/*
			 background color
			 */
			this.context.fillStyle = "rgb(234, 156, 180)";
			this.context.fillRect(0, 0, cWidth, cHeight);

			/*
			 Draw graph
			 */
			this.context.fillStyle = "rgba(124, 183, 239, .7)";
			for (var i = 0; i < spectrum.length; ++i)
			{
				var level = spectrum[i];
				this.context.fillRect(i * segWidth + padding, cHeight, segWidth - padding * 2, -level);
				this.context.fillRect(cWidth - i * segWidth - segWidth + padding, 0, segWidth - padding * 2, level);
			}

			/*
			 Draw waveform
			 */
			segWidth = cWidth / waveform.length;
			this.context.beginPath();
			this.context.strokeStyle = this.waveformStyle;
			this.context.lineWidth = 10;
			this.context.moveTo(0, cHeight / 2 + (waveform[0] - originValue) * 2.7);
			for (i = 0; i < waveform.length; ++i) {
				this.context.lineTo(i * segWidth, cHeight / 2 + (waveform[i] - originValue) * 2.7);
			}
			this.context.stroke();
			return requestAnimationFrame(this.run);
		};

		return VisualEqualizer;
	})();

	new VisualEqualizer();
})();
