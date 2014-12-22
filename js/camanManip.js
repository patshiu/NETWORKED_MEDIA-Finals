var temperatureVal = 0 ,
hueVal = 0, // 0 - 100 
exposureVal = 0, // -100 - 100
contrastVal = 0, // -100 - 100 
shadowsVal = 0, // LATER
highlightsVal = 0, // LATER
clarityVal = 0, //currently mapped to vibrance -100 - 100
gammaVal = 1, // 0 - 10 
sharpnessVal = 0 ; // 0 - 100



//create an array of all elements with class "controlBox" (divs containing the sliders)
var allControls = document.getElementsByClassName("controlBox");

//create an array of all the elements of class "controlBtn"
var allBtns = document.getElementsByClassName("controlBtn");

//set up the sliders
var temperatureSlider = document.getElementById("temperatureSlider");
var hueSlider = document.getElementById("hueSlider");
var exposureSlider = document.getElementById("exposureSlider");
var contrastSlider = document.getElementById("contrastSlider");
var shadowsSlider = document.getElementById("shadowsSlider");
var highlightsSlider = document.getElementById("highlightsSlider");
var claritySlider = document.getElementById("claritySlider");
var gammaSlider = document.getElementById("gammaSlider");
var sharpnessSlider = document.getElementById("sharpnessSlider");


//set up the value displays
var currentTemperatureVal = document.getElementById("currentTemperatureVal");
var currentHueVal = document.getElementById("currentHueVal");
var currentExposureVal = document.getElementById("currentExposureVal");
var currentContrastVal = document.getElementById("currentContrastVal");
var currentShadowsVal = document.getElementById("currentShadowsVal");
var currentHighlightsVal = document.getElementById("currentHighlightsVal");
var currentClarityVal = document.getElementById("currentClarityVal");
var currentGammaVal = document.getElementById("currentGammaVal");
var currentSharpnessVal = document.getElementById("currentSharpnessVal");


//Temperature
temperatureSlider.onchange = function () {
	temperatureVal = document.getElementById("temperatureSlider").value;
	console.log(temperatureVal);
	currentTemperatureVal.innerHTML = temperatureVal; 
	Caman("#negImg", "../images/portra400.jpg", editImg );
};


//Hue
hueSlider.onchange = function () {
	hueVal = document.getElementById("hueSlider").value;
	console.log(hueVal);
	currentHueVal.innerHTML = hueVal; 
	Caman("#negImg", "../images/portra400.jpg", editImg );
};

//Exposure
exposureSlider.onchange = function () {
	exposureVal = document.getElementById("exposureSlider").value;
	console.log(exposureVal);
	currentExposureVal.innerHTML = exposureVal; 
	Caman("#negImg", "../images/portra400.jpg", editImg );
};

//Contrast
contrastSlider.onchange = function () {
	contrastVal = document.getElementById("contrastSlider").value;
	console.log(contrastVal);
	currentContrastVal.innerHTML = contrastVal; 
	Caman("#negImg", "../images/portra400.jpg", editImg );
};

//Shadows
shadowsSlider.onchange = function () {
	shadowsVal = document.getElementById("shadowsSlider").value;
	console.log(shadowsVal);
	currentShadowsVal.innerHTML = shadowsVal; 
	Caman("#negImg", "../images/portra400.jpg", editImg );
};

//Highlights
highlightsSlider.onchange = function () {
	highlightsVal = document.getElementById("highlightsSlider").value;
	console.log(highlightsVal);
	currentHighlightsVal.innerHTML = highlightsVal; 
	Caman("#negImg", "../images/portra400.jpg", editImg );
};

//Clarity
claritySlider.onchange = function () {
	clarityVal = document.getElementById("claritySlider").value;
	console.log(clarityVal);
	currentClarityVal.innerHTML = clarityVal; 
	Caman("#negImg", "../images/portra400.jpg", editImg );
};

//Gamma
gammaSlider.onchange = function () {
	gammaVal = document.getElementById("gammaSlider").value;
	console.log(gammaVal);
	currentGammaVal.innerHTML = gammaVal; 
	Caman("#negImg", "../images/portra400.jpg", editImg );
};

//Sharpness
sharpnessSlider.onchange = function () {
	sharpnessVal = document.getElementById("sharpnessSlider").value;
	console.log(sharpnessVal);
	currentSharpnessVal.innerHTML = sharpnessVal; 
	Caman("#negImg", "../images/portra400.jpg", editImg );
};





//Hard link — http://104.131.178.129:3001/neg/images/portra400.jpg

window.onload = function () {
	Caman("#negImg", "../images/portra400.jpg", plainInvert );
	//Load slider values into displays
	updateValues();
	//Hide all sliders except for temperature
	showOnlyControl(0);
	prepareEventHandlers();
};



function makeBtnActive(index) {
	allBtns[index].childNodes[0].classList.add("active");
}

function makeBtnInactive(index) {
	allBtns[index].childNodes[0].classList.remove("active");
}

function showOnlyControl(index) {
	for (var i = 0; i < allControls.length; i++){
		if (i != index ){
			allControls[i].style.display = 'none';
			makeBtnInactive(i);
			console.log("Set control #", i ," to invisible.");
		} else {
			allControls[i].style.display = 'block';
			makeBtnActive(i);
			console.log("Set control #", i ," to visible.");
		}
		
	}
}



function plainInvert() {
	this.resize({ //sizing the image down to see if rendering speeds improve
		width: 320,
		height: 253
	});
	this.invert();
	this.render();
}


function editImg() {
  // manipulate image here
  this.revert();
  this.newLayer( function () {
	  this.setBlendingMode("normal");
	  this.opacity(100);
	  this.copyParent();
	  
	  this.filter.invert();
	  //Temperature

	  //Hue
	  this.filter.hue(hueVal);

	  //Exposure
	  this.filter.exposure(exposureVal);

	  //Contrast
	  this.filter.contrast(contrastVal/2);

	  // //Shadows
	  
	  // //Highlights

	  //Clarity
	  this.filter.vibrance(clarityVal);

	  //Gamma
	  this.filter.gamma(gammaVal);

	  //Sharpness
	  //this.filter.sharpen(sharpnessVal);

  });
  this.render();
}

function updateValues() {
	currentTemperatureVal.innerHTML = temperatureVal; 
	currentHueVal.innerHTML = hueVal; // 0 - 100 
	currentExposureVal.innerHTML = exposureVal; // -100 - 100
	currentContrastVal.innerHTML = contrastVal; // -100 - 100 
	currentShadowsVal.innerHTML = shadowsVal; // LATER
	currentHighlightsVal.innerHTML = highlightsVal; // LATER
	currentClarityVal.innerHTML = clarityVal;//currently mapped to vibrance -100 - 100
	currentGammaVal.innerHTML = gammaVal; // 0 - 10 
	currentSharpnessVal.innerHTML = sharpnessVal; // 0 - 100
}
