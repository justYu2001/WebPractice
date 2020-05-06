var square = document.getElementById('square');
function square_mousemove(sender) {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    square.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}
square.addEventListener('mousemove', function () {
    square_mousemove(this);
});
