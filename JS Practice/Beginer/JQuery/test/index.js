(function ($) {
    var ta = $('a');
    function test() {
        console.log(1);
    }
    ta.on('click', test);
    ta.on('click', test);
})($);
