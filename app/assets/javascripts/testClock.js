window.onload = function() {
  time();
}
setInterval('time()',1000);

function time(){
  var now = new Date();
  document.getElementById("time").innerHTML = now.toLocaleTimeString();
}