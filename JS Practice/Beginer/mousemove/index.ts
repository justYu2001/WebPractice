let square = <HTMLDivElement>document.getElementById('square');

 function square_mousemove(sender:HTMLDivElement)
 {
     let r = Math.floor(Math.random()*256);
     let g = Math.floor(Math.random()*256);
     let b = Math.floor(Math.random()*256);
     square.style.backgroundColor=`rgb(${r},${g},${b})`;
 }

 square.addEventListener('mousemove',function(){
    square_mousemove(this);
 });