(function () {
    function keydownHandler(e) {
        if (e.keyCode !== 13)
            return;
        else {
            var targetIndex = parseInt(document.querySelector('input').value);
            var list = document.querySelector('ul');
            var listArr = document.querySelectorAll('li');
            for (var i = targetIndex - 1; i < listArr.length; ++i) {
                listArr[i].innerText = (i + 2).toString();
            }
            var newLi = document.createElement('li');
            newLi.innerText = targetIndex.toString();
            newLi.style.color = 'lightblue';
            list.insertBefore(newLi, listArr[targetIndex - 1]);
        }
    }
    window.addEventListener('keydown', keydownHandler);
})();
