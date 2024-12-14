let one = 1;

setInterval(function () {
  document.getElementById("slide" + one).checked = true;
  one++;

  if (one > 4) {
    one = 1;
  }
}, 4000);
