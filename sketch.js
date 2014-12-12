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
	background(255); //why does this not work when background is white?
	image(capture, 0, 0, 640, 480);
	filter('GRAY')
	capture.loadPixels();  //capture.loadPixels is undefined?
	filter('INVERT');
}






  // var stepSize = round(constrain(mouseX / 4, 6, 8));
 //     for (var y=0; y<height; y+=stepSize) {
 //       for (var x=0; x<width; x+=stepSize) {
 //       var i = y * width + x;
 //       var darkness = (255 - capture.pixels[i*4]) / 255;
 //       var radius = stepSize * darkness;
 //       var d = dist(mouseX, mouseY, width/2, height/2);
 //       fill(x/2, d, y/2);
 //       ellipse(x, y, radius, radius);
 //     }
 //   }
    //updatePixels();