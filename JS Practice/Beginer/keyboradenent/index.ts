let body = <HTMLBodyElement>document.body;
let circle = <HTMLDivElement>document.getElementById('circle');
const body_width = document.body.clientWidth;
circle.style.left='0px';

function move_to_right(e:KeyboardEvent)
{
    let cp = parseInt(circle.style.left.substring(0,circle.style.left.length-2));
    if(e.keyCode===39&&cp<body_width)
    {
        for(let i=cp;i<=document.body.clientWidth-200;++i)
        {
            setTimeout(()=>{
                circle.style.left=`${i}px`;
            },1*i);
        }
    }
}

function  move_to_left(e:KeyboardEvent) 
{
    let cp = parseInt(circle.style.left.substring(0,circle.style.left.length-2));
    console.log(cp);
    if(cp>0&&e.keyCode===37)
    {
        for(let i=cp;i>=0;--i)
        {
            setTimeout(()=>{
             circle.style.left=`${i}px`;   
            },1*(cp-i))
        }
    }
}

function  reset(e:KeyboardEvent)
{
    if(e.ctrlKey&&e.altKey&&e.keyCode===82)
    {
        circle.style.left='0px';
    }
}

body.addEventListener('keyup',e=>move_to_right(e),false);
body.addEventListener('keyup',e=>move_to_left(e),false);
body.addEventListener('keydown',e=>reset(e),false);