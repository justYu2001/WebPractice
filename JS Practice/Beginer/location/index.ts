let btntogoogle = <HTMLAnchorElement>document.querySelector('.wrap .btntogoogle a');
let btnreload = <HTMLAnchorElement>document.querySelector('.wrap .btnreload');
let btnreplace = <HTMLAnchorElement>document.querySelector('.wrap .btnreplace a');

function btntogoogle_click(e:MouseEvent)
{
   e.preventDefault();
//    window.location.assign('http://www.google.com');
    window.location.href='http://www.google.com';
}

function btnreload_click(e:MouseEvent)
{
    e.preventDefault();
    window.location.reload(true);
}

function btnreplace_click(e:MouseEvent)
{
    e.preventDefault();
    window.location.replace('http://www.google.com');
}

btntogoogle.addEventListener('click',(e)=>btntogoogle_click(e));
btnreload.addEventListener('click',e=>btnreload_click(e));
btnreplace.addEventListener('click',e=>btnreplace_click(e));