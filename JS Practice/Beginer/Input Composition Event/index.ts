(function () {
  let inputTxt = <HTMLInputElement>document.querySelector('input');

  function inputTxtCompositionstartHandler(e: Event) {
    console.log('Compositionstart');
    console.log(e.data);
  }

  function inputTxtCompositionupdateHandler(e: Event) {
    console.log('Compositionupdate');
    console.log(e.data);
  }

  function inputTxtCompositionendHandler(e: Event) {
    console.log('Compositionend');
    console.log(e.data);
  }

  function inputTxtInputHandler(e: Event) {
    let tarI = <HTMLInputElement>e.target;
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

  inputTxt.addEventListener('input', (e) => inputTxtInputHandler(e));
})();
