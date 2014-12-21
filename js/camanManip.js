console.log("PRINT ME. ");

var brightnessSlider = document.getElementById("slider1");
var brightnessVal = document.getElementById("slider1").value;


brightnessSlider.onchange = function () {
	brightnessVal = document.getElementById("slider1").value;
	console.log(brightnessVal);
	Caman("#negImg", "../images/portra400.jpg", editImg );
}

//Hard link — http://104.131.178.129:3001/neg/images/portra400.jpg


Caman("#negImg", "../images/portra400.jpg", invert );


function invert () {
	this.invert();
	this.render();
}


function editImg () {
  // manipulate image here
  this.newLayer( function () {
	  this.setBlendingMode("normal");
	  this.opacity(100);
	  this.copyParent();
	  this.filter.brightness(brightnessVal);
  });
  this.render();
}

Caman("#idk", function () {
  // manipulate image here
  this.brightness(5).render();
});