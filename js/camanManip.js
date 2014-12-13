Caman("#negImg", "http://104.131.178.129:3001/neg/images/portra400.jpg", function () {
  // manipulate image here
  this.brightness(5).render();
  this.invert().render();
});

Caman("#idk", function () {
  // manipulate image here
  this.brightness(5).render();
});