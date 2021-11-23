window.onload = function () {
  var canvas = document.getElementById("game");
  var ctx = canvas.getContext("2d");
  var img = document.getElementById("ship");
  ctx.drawImage(img, 10, 10);
}
