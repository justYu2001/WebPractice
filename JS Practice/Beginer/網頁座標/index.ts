let elm = document.body;

function body_mousemove(e:MouseEvent)
{
    let mouseimg = <HTMLDivElement>document.querySelector('.mouseimg');
    mouseimg.style.left=(e.clientX-100)+'px';
    mouseimg.style.top = (e.clientY-100)+'px';
    console.log(e.clientX+','+e.clientY);
}

elm.addEventListener('mousemove',e=>body_mousemove(e));