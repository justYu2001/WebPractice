let btnback = <HTMLDivElement>document.querySelector('.content .btnback');
let btnforward = <HTMLDivElement>document.querySelector('.content .btnforward');

btnback.addEventListener('click',()=>window.history.back());
btnforward.addEventListener('click',()=>window.history.forward());