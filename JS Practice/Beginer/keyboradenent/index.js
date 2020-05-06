var body = document.body;
var circle = document.getElementById('circle');
var body_width = document.body.clientWidth;
circle.style.left = '0px';
function move_to_right(e) {
    var cp = parseInt(circle.style.left.substring(0, circle.style.left.length - 2));
    if (e.keyCode === 39 && cp < body_width) {
        var _loop_1 = function (i) {
            setTimeout(function () {
                circle.style.left = i + "px";
            }, 1 * i);
        };
        for (var i = cp; i <= document.body.clientWidth - 200; ++i) {
            _loop_1(i);
        }
    }
}
function move_to_left(e) {
    var cp = parseInt(circle.style.left.substring(0, circle.style.left.length - 2));
    console.log(cp);
    if (cp > 0 && e.keyCode === 37) {
        var _loop_2 = function (i) {
            setTimeout(function () {
                circle.style.left = i + "px";
            }, 1 * (cp - i));
        };
        for (var i = cp; i >= 0; --i) {
            _loop_2(i);
        }
    }
}
function reset(e) {
    if (e.ctrlKey && e.altKey && e.keyCode === 82) {
        circle.style.left = '0px';
    }
}
body.addEventListener('keyup', function (e) { return move_to_right(e); }, false);
body.addEventListener('keyup', function (e) { return move_to_left(e); }, false);
body.addEventListener('keydown', function (e) { return reset(e); }, false);
