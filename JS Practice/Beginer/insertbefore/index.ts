(function() {
  function keydownHandler(e: KeyboardEvent) {
    if (e.keyCode !== 13) return;
    else {
      let targetIndex = parseInt(
        (<HTMLInputElement>document.querySelector('input')).value
      );
      let list = <HTMLUListElement>document.querySelector('ul');
      let listArr = <NodeListOf<HTMLLIElement>>document.querySelectorAll('li');
      for (let i = targetIndex - 1; i < listArr.length; ++i) {
        listArr[i].innerText = (i + 2).toString();
      }
      let newLi = <HTMLLIElement>document.createElement('li');
      newLi.innerText = targetIndex.toString();
      newLi.style.color = 'lightblue';
      list.insertBefore(newLi, listArr[targetIndex - 1]);
    }
  }
  window.addEventListener('keydown', keydownHandler);
})();
