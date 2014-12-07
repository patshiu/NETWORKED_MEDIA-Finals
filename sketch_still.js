function setup() {
  createCanvas(800, 632);
img = loadImage("images/portra.jpg");
  // capture = createCapture(VIDEO);
  // capture.size(640, 480);
  // capture.hide();
  // noStroke();
  // fill(0);
}

function draw() {
	image(img,0,0);

	image(capture, 0, 0, 640, 480);
	filter('GRAY')
	capture.loadPixels();
	filter('INVERT');
}

Caman("#negDev", function () {
  this.brightness(5).render();
});