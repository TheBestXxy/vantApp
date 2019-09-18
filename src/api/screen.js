document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
// document.body.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
var deviceWidth = document.documentElement.clientWidth;
if (deviceWidth > 750) deviceWidth = 750;
document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';

window.addEventListener("resize", function () {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
    var deviceWidth = document.documentElement.clientWidth;
    if (deviceWidth > 750) deviceWidth = 750;
    document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
}, false);


window.addEventListener("onload", function () {
    document.body.addEventListener('touchstart', function () {});
}, false);