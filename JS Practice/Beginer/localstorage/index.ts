let txtname = <HTMLInputElement>document.querySelector('#txtname');
let txtage = <HTMLInputElement>document.querySelector('#txtage');
let btnsave = <HTMLButtonElement>document.querySelector('#btnsave');

function btnsave_click()
{
    const user={
        name:txtname.value,
        age:parseInt(txtage.value)
    };
    window.localStorage.setItem(txtname.value,JSON.stringify(user));
    txtage.value='';
    txtname.value='';
}

btnsave.addEventListener('click',function(){
    btnsave_click();
});