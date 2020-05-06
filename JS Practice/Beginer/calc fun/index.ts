window.onload = ()=>{
    document.getElementById('btncalc').onclick=()=>{
        let hn = parseInt((<HTMLInputElement>document.getElementById('txtham')).value);
        let cn = parseInt((<HTMLInputElement>document.getElementById('txtcoke')).value);
        let total = hn*80+cn*20;
        document.getElementById('total').textContent=total.toString();
    }
    document.getElementById('btnclr').onclick=()=>{
        (<HTMLInputElement>document.getElementById('txtham')).value='0';
        (<HTMLInputElement>document.getElementById('txtcoke')).value='0';
        document.getElementById('total').textContent='0';
    }
}