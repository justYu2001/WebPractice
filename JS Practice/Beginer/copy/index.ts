(function () {
    let btn = <HTMLButtonElement>document.querySelector('button');
    btn.addEventListener('click', () => {
        let textRange = document.createRange();
        let copyArea = <HTMLDivElement>document.querySelector('.content');
        textRange.selectNode(copyArea);

        let selection = window.getSelection() as Selection;
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
