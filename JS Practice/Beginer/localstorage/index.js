var txtname = document.querySelector('#txtname');
var txtage = document.querySelector('#txtage');
var btnsave = document.querySelector('#btnsave');
function btnsave_click() {
    var user = {
        name: txtname.value,
        age: parseInt(txtage.value)
    };
    window.localStorage.setItem(txtname.value, JSON.stringify(user));
    txtage.value = '';
    txtname.value = '';
}
btnsave.addEventListener('click', function () {
    btnsave_click();
});
