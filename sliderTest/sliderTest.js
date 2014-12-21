console.log("PRINT ME. ");

var brightnessSlider = document.getElementById("slider1");
var brightnessVal = document.getElementById("slider1").value;

brightnessSlider.onchange = function () {
	brightnessVal = document.getElementById("slider1").value;
	console.log(brightnessVal);
}

