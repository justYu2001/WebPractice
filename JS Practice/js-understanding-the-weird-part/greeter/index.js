(function (G$, $) {
    let g = G$('John', 'Doe');
    $('.loginBtn').on('click', function () {
        g.setLang(this.previousElementSibling.value).HTMLGreeting('h1');
    });
})(G$, $);
