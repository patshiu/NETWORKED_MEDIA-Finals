function setup() {
  var negDev = createCanvas(640, 480);
  negDev.parent('myJS');
  capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture.hide();
  noStroke();
  fill(0);
}

function draw() {
	background(255);
	image(capture, 0, 0, 640, 480);
	filter('GRAY')
	capture.loadPixels();
	filter('INVERT');
}

Caman("#negDev", "images/portra.jpg", function () {
  this.brightness(5).render();
});