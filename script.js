
function clock() {
const fullDate = new Date()
var hour = fullDate.getHours();
var min = fullDate.getMinutes();
var sec = fullDate.getSeconds();

if (hour < 10) {
  hour = "0" + hour;
}

if (min < 10) {
  min = "0" + min;
}

if (sec < 10) {
  sec = "0" + sec;
}

document.getElementById('hour').innerHTML = hour;
document.getElementById('minutes').innerHTML = ":" + min;
document.getElementById('seconds').innerHTML = ":" + sec;
}

setInterval(clock,1000);
