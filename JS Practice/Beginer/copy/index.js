(function () {
    var btn = document.querySelector('button');
    btn.addEventListener('click', function () {
        var textRange = document.createRange();
        var copyArea = document.querySelector('.content');
        textRange.selectNode(copyArea);
        var selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(textRange);
        document.execCommand('copy');
        alert('複製成功!');
    });
    // document.addEventListener('copy', (e) => {
    //     e.preventDefault();
    //     alert('還想抄阿');
    // });
})();
