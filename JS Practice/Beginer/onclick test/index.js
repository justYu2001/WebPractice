var block = document.getElementById('block');
function block_click(thisblock, e) {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    thisblock.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}
function test() {
    var block2 = document.getElementById('block2');
    var r = Math.floor(Math.random() * 256);
    var g = Math.ceil(Math.random() * 255);
    var b = Math.floor(Math.random() * 256);
    block2.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}
block.addEventListener('click', function (e) { block_click(this, e); }, false);
block.addEventListener('click', test, false);
