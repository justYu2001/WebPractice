(function () {
    var inputTxt = document.querySelector('input');
    function inputTxtCompositionstartHandler(e) {
        console.log('Compositionstart');
        console.log(e.data);
    }
    function inputTxtCompositionupdateHandler(e) {
        console.log('Compositionupdate');
        console.log(e.data);
    }
    function inputTxtCompositionendHandler(e) {
        console.log('Compositionend');
        console.log(e.data);
    }
    function inputTxtInputHandler(e) {
        var tarI = e.target;
        console.log('input');
        console.log(tarI.value);
    }
    //   inputTxt.addEventListener('compositionstart', (e) =>
    //     inputTxtCompositionstartHandler(e)
    //   );
    //   inputTxt.addEventListener('compositionupdate', (e) =>
    //     inputTxtCompositionupdateHandler(e)
    //   );
    //   inputTxt.addEventListener('compositionend', (e) =>
    //     inputTxtCompositionendHandler(e)
    //   );
    //input取代了他們
    inputTxt.addEventListener('input', function (e) { return inputTxtInputHandler(e); });
})();
