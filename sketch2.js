function setup() {
  var negImg = createCanvas(800, 632); //need to autosize for photo?
  img = loadImage("images/portra400.jpg"); //loading a test image
  noStroke();
  fill(0);
}

function draw() {

Caman("develop", "images/portra400.jpg", function () {
  this.invert().render();
});

}