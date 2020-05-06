(function ($) {
    $('.btn').on('click', function () {
        $(this).text($(this).text() === '展開' ? '收合' : '展開');
        $('.content').slideToggle();
    });
})($);
