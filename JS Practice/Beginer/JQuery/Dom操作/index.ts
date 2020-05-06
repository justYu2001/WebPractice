(function($){
    $('img').on('click',()=>{
        alert(1);
    });
    $('.block').on('mouseenter mouseleave click',function(){
        let r=Math.floor(Math.random()*255);
        let g=Math.floor(Math.random()*255);
        let b=Math.floor(Math.random()*255);
        $(this).css({
            backgroundColor:`rgb(${r},${g},${b})`
        });
    });
})($)