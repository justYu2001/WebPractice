var name_list = document.querySelector('.name_list');
var btnadd = document.querySelector('#btnadd');
var arr = JSON.parse(String(window.localStorage.getItem('arr'))) || [];
function add_list(index) {
    name_list.innerHTML += "<div class=\"item\" data-name=\"" + arr[index].farmer + "\" data-index=\"" + (index + 1) + "\">" + arr[index].farmer + "</div>";
    var item = document.querySelectorAll('.item')[index];
    var button = document.createElement('button');
    button.innerHTML = '刪除';
    button.setAttribute('class', 'btn');
    button.setAttribute('data-index', index.toString());
    item.appendChild(button);
}
function load() {
    console.log(arr);
    name_list.innerHTML = '';
    for (var i = 0; i < arr.length; ++i) {
        add_list(i);
    }
}
load();
function item_click(e) {
    if (e.target.nodeName == 'DIV') {
        var index = parseInt(String(e.target.dataset.index));
        alert("\u7B2C" + index + "\u500B\u4EBA\u662F" + e.target.dataset.name);
    }
    if (e.target.nodeName == 'BUTTON') {
        var index = parseInt(String(e.target.dataset.index));
        arr.splice(index, 1);
        window.localStorage.setItem('arr', JSON.stringify(arr));
        load();
    }
}
function btnadd_click() {
    var txtname = document.querySelector('#txtname');
    if (txtname.value == '') {
        alert('你是沒名子膩');
        return;
    }
    var new_data = {
        farmer: txtname.value
    };
    arr.push(new_data);
    window.localStorage.setItem('arr', JSON.stringify(arr));
    add_list(arr.length - 1);
    txtname.value = '';
}
name_list.addEventListener('click', function (e) { return item_click(e); });
btnadd.addEventListener('click', btnadd_click);
