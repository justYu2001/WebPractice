var flag = 0;
var btn_query = document.createElement('button');
btn_query.id = 'btn_query';
btn_query.textContent = '確認';
btn_query.className = 'btn';
var rtxt_result = document.getElementById('rtxt_result');
var cmb_query_codition = document.getElementById('cmb_query_codition');
var txt_name_arr = document.querySelectorAll('.txt_nameinput');
var txt_age_arr = document.querySelectorAll('.txt_ageinput');
var txt_favor_arr = document.querySelectorAll('.txt_favorinput');
txt_name_arr.forEach(function (e) {
    e.addEventListener('blur', function (ev) { return name_check(ev); });
});
txt_age_arr.forEach(function (e) {
    e.addEventListener('blur', function (ev) { return age_check(ev); });
});
txt_favor_arr.forEach(function (e) {
    e.addEventListener('blur', function (ev) { return favor_check(ev); });
});
function name_check(e) {
    var reg = /^[A-za-z]+$/;
    var name = e.target.value;
    if (!reg.test(name)) {
        alert('名子只能有大小寫英文字母');
        e.target.value = '';
    }
}
function age_check(e) {
    var reg = /^[1-9]$|^[1-9][0-9]$/;
    var age = e.target.value;
    if (!reg.test(age)) {
        alert('年齡有誤');
        e.target.value = '';
    }
}
function favor_check(e) {
    var reg = /^[A-Za-z][A-Za-z ]*$/;
    var favor = e.target.value;
    if (!reg.test(favor)) {
        alert('只能有字母和空白字元');
        e.target.value = '';
    }
}
function cmb_query_codition_change(cmb_query_codition, e) {
    var newinserte = document.createElement("select");
    var query_block = document.getElementById('query_block');
    newinserte.name = 'args';
    newinserte.id = 'cmb_query_args';
    newinserte.className = 'query_cmb';
    if (cmb_query_codition.value === 'age') {
        if (flag === 2) {
            var name_span = document.getElementById('name_span');
            var txt_name = document.getElementById('txt_name');
            var btn_query_1 = document.getElementById('btn_query');
            name_span.remove();
            txt_name.remove();
            btn_query_1.remove();
        }
        if (flag === 3) {
            var index_span = document.getElementById('index_span');
            var btn_query_2 = document.getElementById('btn_query');
            index_span.remove();
            btn_query_2.remove();
        }
        flag = 1;
        var init_option = document.createElement('option');
        init_option.value = 'init';
        init_option.text = '請選擇';
        init_option.disabled = true;
        init_option.selected = true;
        newinserte.add(init_option);
        var bigger_option = document.createElement('option');
        bigger_option.value = 'bigger';
        bigger_option.text = '大於';
        newinserte.add(bigger_option);
        var smaller_option = document.createElement('option');
        smaller_option.value = 'smaller';
        smaller_option.text = '小於';
        newinserte.add(smaller_option);
        query_block.insertBefore(newinserte, rtxt_result);
        var txt_age = document.createElement('input');
        txt_age.id = 'txt_age';
        txt_age.className = 'txt_queryinput';
        query_block.insertBefore(txt_age, rtxt_result);
        var newspan = document.createElement('span');
        newspan.textContent = '歲';
        newspan.id = 'age_span';
        query_block.insertBefore(newspan, rtxt_result);
        query_block.insertBefore(btn_query, rtxt_result);
    }
    if (cmb_query_codition.value === 'name') {
        if (flag === 1) {
            var cmb_query_args = document.getElementById('cmb_query_args');
            var txt_age = document.getElementById('txt_age');
            var age_span = document.getElementById('age_span');
            var btn_query_3 = document.getElementById('btn_query');
            cmb_query_args.remove();
            txt_age.remove();
            age_span.remove();
            btn_query_3.remove();
        }
        if (flag === 3) {
            var index_span = document.getElementById('index_span');
            var btn_query_4 = document.getElementById('btn_query');
            index_span.remove();
            btn_query_4.remove();
        }
        flag = 2;
        var newspan = document.createElement('span');
        newspan.textContent = '姓名:';
        newspan.id = 'name_span';
        query_block.insertBefore(newspan, rtxt_result);
        var txt_name = document.createElement('input');
        txt_name.className = 'txt_queryinput';
        txt_name.id = 'txt_name';
        query_block.insertBefore(txt_name, rtxt_result);
        query_block.insertBefore(btn_query, rtxt_result);
    }
    if (cmb_query_codition.value === 'index') {
        if (flag === 1) {
            var cmb_query_args = document.getElementById('cmb_query_args');
            var txt_age = document.getElementById('txt_age');
            var age_span = document.getElementById('age_span');
            var btn_query_5 = document.getElementById('btn_query');
            cmb_query_args.remove();
            txt_age.remove();
            age_span.remove();
            btn_query_5.remove();
        }
        if (flag === 2) {
            var name_span = document.getElementById('name_span');
            var txt_name = document.getElementById('txt_name');
            var btn_query_6 = document.getElementById('btn_query');
            name_span.remove();
            txt_name.remove();
            btn_query_6.remove();
        }
        flag = 3;
        var newspan = document.createElement('span');
        newspan.id = 'index_span';
        newspan.appendChild(document.createTextNode('第'));
        var txt_index = document.createElement('input');
        txt_index.id = 'txt_index';
        txt_index.setAttribute('class', 'txt_queryinput');
        newspan.appendChild(txt_index);
        newspan.appendChild(document.createTextNode('個'));
        query_block.insertBefore(newspan, rtxt_result);
        query_block.insertBefore(btn_query, rtxt_result);
    }
}
function btn_query_click(btn_query, e) {
    rtxt_result.innerHTML = '';
    var user_data = [];
    var user_name = document.querySelectorAll('.txt_nameinput');
    var user_age = document.querySelectorAll('.txt_ageinput');
    var user_favor = document.querySelectorAll('.txt_favorinput');
    for (var i = 1; i <= user_age.length; ++i) {
        user_data.push({
            name: user_name[i - 1].value,
            age: parseInt(user_age[i - 1].value),
            favor: user_favor[i - 1].value
        });
    }
    var query_condition = document.getElementById('cmb_query_codition').value;
    if (query_condition === 'name') {
        var result = user_data.filter(function (e) { return e.name.includes(document.getElementById('txt_name').value); });
        result.forEach(function (e) {
            rtxt_result.innerHTML += e.name + '<br>';
        });
    }
    if (query_condition === 'age') {
        var query_arg = document.getElementById('cmb_query_args').value;
        var query_age_1 = parseInt(document.getElementById('txt_age').value);
        if (query_arg === 'bigger') {
            var result = user_data.filter(function (user) { return user.age > query_age_1; });
            result.forEach(function (e) {
                rtxt_result.innerHTML += e.name + '<br>';
            });
        }
        if (query_arg === 'smaller') {
            var result = user_data.filter(function (user) { return user.age < query_age_1; });
            result.forEach(function (e) {
                rtxt_result.appendChild(document.createTextNode(e.name));
                rtxt_result.appendChild(document.createElement('br'));
            });
        }
    }
    if (query_condition === 'index') {
        rtxt_result.innerHTML = '';
        var query_arg_1 = parseInt(document.getElementById('txt_index').value);
        var result = user_data.filter(function (e, i) { return i === query_arg_1 - 1; });
        result.forEach(function (e) {
            rtxt_result.appendChild(document.createTextNode(e.name));
        });
    }
}
cmb_query_codition.addEventListener('change', function (e) { cmb_query_codition_change(this, e); }, false);
btn_query.addEventListener('click', function (e) { btn_query_click(this, e); }, false);
