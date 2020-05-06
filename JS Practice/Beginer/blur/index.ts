let txtham = <HTMLInputElement>document.getElementById('txtham');
let txtcoke = <HTMLInputElement>document.getElementById('txtcoke');
let btncalc = <HTMLButtonElement>document.getElementById('btncalc');

function txtham_blur(sender:HTMLInputElement,e:FocusEvent) {
    if(sender.value=='')
    {
        alert('給我ㄘ漢堡');
    }
}

function txtcoke_blur(sender:HTMLInputElement) {
    if(sender.value=='')
    {
        alert('給我喝可樂');
    }
}

function btncalc_click() {
    if(txtham.value==''||txtcoke.value=='')
    {
        alert('好好點餐啦');
    }
    else
    {
        let cn=parseInt(txtcoke.value)*50;
        let bn=parseInt(txtham.value)*20;
        let subtotal = <HTMLSpanElement>document.getElementById('subtotal');
        subtotal.textContent=String(cn+bn);
    }
}

txtham.addEventListener('blur',function(e){
    txtham_blur(this,e);
});
txtcoke.addEventListener('blur',function() {
    txtcoke_blur(this);
});

btncalc.addEventListener('click',btncalc_click);
