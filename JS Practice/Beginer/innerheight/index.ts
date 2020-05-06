

function window_resize()
{
    let hstr=`innerheight:${window.innerHeight}px`;
    let wstr = `innerwidth:${window.innerWidth}px`;
    let lblh = <HTMLLabelElement>document.querySelector('.lblh');
    let lblw = <HTMLLabelElement>document.querySelector('.lblw');
    lblh.innerText=hstr;
    lblw.innerText=wstr;
}

window_resize();

window.addEventListener('resize',()=>window_resize());