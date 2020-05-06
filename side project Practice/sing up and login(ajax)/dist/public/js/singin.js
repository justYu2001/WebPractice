"use strict";
let btn_singin = document.querySelector('input[type="submit"]');
let form_login = document.querySelector('.warp form');
function btn_singin_click() {
    let txt_name = document.querySelector('#txt_name');
    let txt_password = document.querySelector('#txt_password');
    const user = {
        name: txt_name.value,
        password: txt_password.value
    };
    if (user.name == '' || user.password == '')
        return;
    let xhr = new XMLHttpRequest();
    xhr.open('post', window.location.href, true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(user));
    xhr.onload = () => {
        if (xhr.status == 200) {
            const res = JSON.parse(xhr.responseText);
            if (res.result) {
                alert('登入成功');
                window.location.replace('/');
            }
            else {
                if (res.reason == '密碼錯誤') {
                    alert(res.reason);
                    txt_password.value = '';
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
btn_singin.addEventListener('click', () => btn_singin_click());
form_login.addEventListener('submit', e => e.preventDefault());
//# sourceMappingURL=singin.js.map