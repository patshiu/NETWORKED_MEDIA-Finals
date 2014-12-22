var temperatureVal = 0 ,
hueVal = 0, // 0 - 100 
exposureVal = 0, // -100 - 100
contrastVal = 0, // -100 - 100 
shadowsVal = 0, // LATER
highlightsVal = 0, // LATER
clarityVal = 0, //currently mapped to vibrance -100 - 100
gammaVal = 0, // 0 - 10 
sharpnessVal = 0 ; // 0 - 100



//create an array of all elements with class "controlBox" (divs containing the sliders)
var allControls = document.getElementsByClassName("controlBox");

//create an array of all the elements of class "controlBtn"
var allBtns = document.getElementsByClassName("controlBtn");


var brightnessSlider = document.getElementById("slider1");
var brightnessVal = document.getElementById("slider1").value;
var brightnessDisplay = document.getElementById("currentVal");



brightnessSlider.onchange = function () {
	brightnessVal = document.getElementById("slider1").value;
	console.log(brightnessVal);
	brightnessDisplay.innerHTML = brightnessVal; 
	Caman("#negImg", "../images/portra400.jpg", editImg );
};


//Hard link — http://104.131.178.129:3001/neg/images/portra400.jpg

window.onload = function () {
	Caman("#negImg", "../images/portra400.jpg", plainInvert );
	brightnessDisplay.innerHTML = "0"	; 
	prepareEventHandlers();
};

function prepareEventHandlers() {
	//SET UP BUTTONS
	for (var i = 0; i < allBtns.length; i++){
		allBtns[i].onclick = function() {
			var indexOfClicked = allBtns.indexOf(this);
			//console.log("Control button number ", index , " was clicked");
			console.log("it worked! This is button number ", indexOfClicked);
			showOnlyControl(0);
		};
	}
}

function hideAllControls() {
	for (var i = 0; i < allControls.length; i++){
		allControls[i].style.display = 'none';
	}
}

function showOnlyControl(index) {
	var i; 
	for (i = 0; i < allControls.length; i++){
		if (i != index ){
			allControls[i].style.display = 'none';
			console.log("Set control #", i ," to invisible.");
		} else {
			allControls[i].style.display = 'block';
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


function editImg () {
  // manipulate image here
  this.revert();
  this.newLayer( function () {
	  this.setBlendingMode("normal");
	  this.opacity(100);
	  this.copyParent();
	  this.filter.invert();
	  this.filter.brightness(brightnessVal);
  });
  this.render();
}
