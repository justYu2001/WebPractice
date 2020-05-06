"use strict";
let txt_name = document.querySelector('#txt_name');
let txt_password = document.querySelector('#txt_password');
let btn_singup = document.querySelector('.warp_footer input');
let data_form = document.querySelector('form');
let xhr = new XMLHttpRequest();
function btn_singup_click() {
    if (txt_name.value == '' || txt_password.value == '')
        return;
    const user = {
        name: txt_name.value,
        password: txt_password.value
    };
    xhr.open('post', window.location.href, true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(user));
    xhr.onload = () => {
        if (xhr.status == 200) {
            const res = JSON.parse(xhr.responseText);
            if (res.result) {
                alert('註冊成功');
                window.location.replace('/singin');
            }
            else {
                if (res.reason == '伺服器錯誤') {
                    alert(res.reason + '\n請稍後再試');
                    window.location.reload(true);
                }
                else {
                    alert(res.reason);
                    txt_name.value = '';
                }
            }
        }
        else {
            alert('伺服器錯誤\n請稍後再試');
            window.location.reload(true);
        }
    };
}
btn_singup.addEventListener('click', () => btn_singup_click());
data_form.addEventListener('submit', e => e.preventDefault());
//# sourceMappingURL=singup.js.map