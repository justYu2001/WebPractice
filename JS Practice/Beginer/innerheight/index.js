function window_resize() {
    var hstr = "innerheight:" + window.innerHeight + "px";
    var wstr = "innerwidth:" + window.innerWidth + "px";
    var lblh = document.querySelector('.lblh');
    var lblw = document.querySelector('.lblw');
    lblh.innerText = hstr;
    lblw.innerText = wstr;
}
window_resize();
window.addEventListener('resize', function () { return window_resize(); });
