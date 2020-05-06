var btntogoogle = document.querySelector('.wrap .btntogoogle a');
var btnreload = document.querySelector('.wrap .btnreload');
var btnreplace = document.querySelector('.wrap .btnreplace a');
function btntogoogle_click(e) {
    e.preventDefault();
    //    window.location.assign('http://www.google.com');
    window.location.href = 'http://www.google.com';
}
function btnreload_click(e) {
    e.preventDefault();
    window.location.reload(true);
}
function btnreplace_click(e) {
    e.preventDefault();
    window.location.replace('http://www.google.com');
}
btntogoogle.addEventListener('click', function (e) { return btntogoogle_click(e); });
btnreload.addEventListener('click', function (e) { return btnreload_click(e); });
btnreplace.addEventListener('click', function (e) { return btnreplace_click(e); });
