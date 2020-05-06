let block = <HTMLDivElement>document.getElementById('block');

function block_click(thisblock:HTMLDivElement,e:MouseEvent)
{
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    thisblock.style.backgroundColor=`rgb(${r},${g},${b})`;
}

function test()
{
    let block2=<HTMLDivElement>document.getElementById('block2');
    let r = Math.floor(Math.random()*256);
    let g = Math.ceil(Math.random()*255);
    let b = Math.floor(Math.random()*256);
    block2.style.backgroundColor=`rgb(${r},${g},${b})`;
}

block.addEventListener('click',function(e){block_click(this,e)},false);
block.addEventListener('click',test,false);
