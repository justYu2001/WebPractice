var txtham = document.getElementById('txtham');
var txtcoke = document.getElementById('txtcoke');
var btncalc = document.getElementById('btncalc');
function txtham_blur(sender, e) {
    if (sender.value == '') {
        alert('給我ㄘ漢堡');
    }
}
function txtcoke_blur(sender) {
    if (sender.value == '') {
        alert('給我喝可樂');
    }
}
function btncalc_click() {
    if (txtham.value == '' || txtcoke.value == '') {
        alert('好好點餐啦');
    }
    else {
        var cn = parseInt(txtcoke.value) * 50;
        var bn = parseInt(txtham.value) * 20;
        var subtotal = document.getElementById('subtotal');
        subtotal.textContent = String(cn + bn);
    }
}
txtham.addEventListener('blur', function (e) {
    txtham_blur(this, e);
});
txtcoke.addEventListener('blur', function () {
    txtcoke_blur(this);
});
btncalc.addEventListener('click', btncalc_click);
