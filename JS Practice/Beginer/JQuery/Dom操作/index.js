(function ($) {
    $('img').on('click', function () {
        alert(1);
    });
    $('.block').on('mouseenter mouseleave click', function () {
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        $(this).css({
            backgroundColor: "rgb(" + r + "," + g + "," + b + ")"
        });
    });
})($);
