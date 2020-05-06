(function ($) {
    function tar_exist(handler) {
        var tar = $('.tar');
        var exsiting = tar.hasClass('tar');
        if (exsiting)
            handler(tar);
        else
            alert('請先選一個目標');
    }
    $('div')
        .on('click', function (ev) {
        ev.stopImmediatePropagation();
        $('.tar').removeClass('tar');
        $(this).addClass('tar');
    });
    $('#btn_tar')
        .on('click', function () {
        tar_exist(function (tar) {
            // let classname=tar.attr('class')?.split(/\s/g)[0];
            // alert(classname);
            console.log(tar);
        });
    });
    $('#btn_pn')
        .on('click', function () {
        tar_exist(function (tar) {
            tar.removeClass('tar');
            tar.parent().addClass('tar');
        });
    });
    $('#btn_parents')
        .on('click', function () {
        tar_exist(function (tar) {
            tar.removeClass('tar');
            tar.parents().addClass('tar');
        });
    });
    $('#btn_parentsuntil')
        .on('click', function () {
        tar_exist(function (tar) {
            tar.removeClass('tar');
            tar.parentsUntil(document.body, 'div').addClass('tar');
        });
    });
    $('#btn_next')
        .on('click', function () {
        tar_exist(function (tar) {
            tar.removeClass('tar');
            tar.next().addClass('tar');
        });
    });
    $('#btn_prev')
        .on('click', function () {
        tar_exist(function (tar) {
            tar.removeClass('tar');
            tar.prev().addClass('tar');
        });
    });
    $('#btn_nextall')
        .on('click', function () {
        tar_exist(function (tar) {
            tar.removeClass('tar');
            tar.nextAll().addClass('tar');
        });
    });
    $('#btn_prevall')
        .on('click', function () {
        tar_exist(function (tar) {
            tar.removeClass('tar');
            tar.prevAll().addClass('tar');
        });
    });
    $('#btn_nextuntil')
        .on('click', function () {
        tar_exist(function (tar) {
            tar.removeClass('tar');
            tar.nextUntil('.red_block:last-child').addClass('tar');
        });
    });
    $('#btn_prevuntil')
        .on('click', function () {
        tar_exist(function (tar) {
            tar.removeClass('tar');
            tar.prevUntil('.red_block:first-child').addClass('tar');
        });
    });
    $('#btn_siblings')
        .on('click', function () {
        tar_exist(function (tar) {
            tar.removeClass('tar');
            tar.siblings().addClass('tar');
        });
    });
    $('#btn_find')
        .on('click', function () {
        tar_exist(function (tar) {
            tar.removeClass('tar');
            tar.find('div').addClass('tar');
        });
    });
    $('#btn_children')
        .on('click', function () {
        tar_exist(function (tar) {
            tar.removeClass('tar');
            tar.children('.green_block').addClass('tar');
        });
    });
    $('#btn_end')
        .on('click', function () {
        tar_exist(function (tar) {
            tar.removeClass('tar');
            tar.children().end().parent().addClass('tar');
        });
    });
})($);
