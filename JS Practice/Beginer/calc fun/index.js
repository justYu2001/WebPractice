window.onload = function () {
    document.getElementById('btncalc').onclick = function () {
        var hn = parseInt(document.getElementById('txtham').value);
        var cn = parseInt(document.getElementById('txtcoke').value);
        var total = hn * 80 + cn * 20;
        document.getElementById('total').textContent = total.toString();
    };
    document.getElementById('btnclr').onclick = function () {
        document.getElementById('txtham').value = '0';
        document.getElementById('txtcoke').value = '0';
        document.getElementById('total').textContent = '0';
    };
};
