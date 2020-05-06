(function ($) {
    $('.block')
        .on('click', function () {
        $(this).animate({
            top: 300,
            left: 800
        }, {
            duration: 1000,
            specialEasing: {
                left: 'swing',
                top: 'linear'
            }
        }).animate({
            top: 0,
            left: 0
        }, {
            duration: 1000,
            specialEasing: {
                left: 'linear',
                top: 'swing'
            }
        });
    });
})($);
