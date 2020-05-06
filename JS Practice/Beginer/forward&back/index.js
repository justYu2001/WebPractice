var btnback = document.querySelector('.content .btnback');
var btnforward = document.querySelector('.content .btnforward');
btnback.addEventListener('click', function () { return window.history.back(); });
btnforward.addEventListener('click', function () { return window.history.forward(); });
