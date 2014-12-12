Caman("#negImg", "../images/portra400.jpg", function () {
  // manipulate image here
  this.brightness(5).render();
  this.invert().render();
});

Caman("#idk", function () {
  // manipulate image here
  this.brightness(5).render();
});