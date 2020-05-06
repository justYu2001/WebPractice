var elm = document.body;
function body_mousemove(e) {
    var mouseimg = document.querySelector('.mouseimg');
    mouseimg.style.left = (e.clientX - 100) + 'px';
    mouseimg.style.top = (e.clientY - 100) + 'px';
    console.log(e.clientX + ',' + e.clientY);
}
elm.addEventListener('mousemove', function (e) { return body_mousemove(e); });
