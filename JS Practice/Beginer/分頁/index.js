function cmb_cities_init(data) {
    var cmb_cities = document.querySelector('#cities');
    var cities_arr = Array.from(new Set(data.map(function (e) { return e.Zone; })));
    cities_arr.forEach(function (e) {
        var city = document.createElement('option');
        city.text = e;
        city.value = e;
        cmb_cities.appendChild(city);
    });
}
function pop_city_click(e, data) {
    var Attractions_title = document.querySelector('.Attractions .title');
    e.preventDefault();
    Attractions_title.innerHTML = e.target.innerText;
    page_load(data, 1);
}
function page_btn_click(e, data) {
    e.preventDefault();
    console.log(e.target);
    var te = e.target;
    page_load(data, parseInt(te.innerText));
}
function page_load(data, index) {
    var btn_area = document.querySelector('.page_btn');
    var content_area = document.querySelector('.Attractions .content');
    var Attractions_title = document.querySelector('.Attractions .title');
    btn_area.innerHTML = '';
    content_area.innerHTML = '';
    var arr = data.filter(function (e) { return e.Zone == Attractions_title.innerText; });
    var page_num = Math.floor(arr.length / 6 < 1 ? 1 : arr.length / 6);
    for (var i = 1; i <= page_num; ++i) {
        var btn = document.createElement('a');
        btn.innerHTML = i.toString();
        btn.addEventListener('click', function (e) { return page_btn_click(e, data); });
        if (i == index) {
            btn.style.backgroundColor = 'black';
            btn.style.color = '#ffffff';
        }
        btn_area.appendChild(btn);
    }
    for (var i = (index - 1) * 6; i < (index - 1) * 6 + 6; ++i) {
        var name_1 = arr[i].Name;
        var img = arr[i].Picture1;
        var zone = arr[i].Zone;
        var time = arr[i].Opentime;
        var tel = arr[i].Tel;
        var loc = arr[i].Add;
        var ticket = arr[i].Ticketinfo || '免費參觀';
        var tmp = "<div class=\"item item" + i + "\">\n            <img src=\"\" alt=\"\">\n            <div class=\"nz\">\n                <div class=\"name\">" + name_1 + "</div>\n                <div class=\"zone\">" + zone + "</div>\n            </div>\n            <div class=\"info\">\n                <div class=\"time\">\n                    <img src=\"clock.png\" alt=\"\">\n                    " + time + "\n                </div>\n                <div class=\"loc\">\n                    <img src=\"map.png\" alt=\"\">\n                    " + loc + "\n                </div>\n                <div class=\"tel\">\n                    <img src=\"smartphone.png\" alt=\"\">\n                    " + tel + "\n                </div>\n                <div class=\"ticket\">\n                    <img src=\"ticket.png\" alt=\"\">\n                    " + ticket + "\n                </div>\n            </div>\n        </div>";
        content_area.innerHTML += tmp;
        var item_img = document.querySelector(".item" + i + " img");
        item_img.style.backgroundImage = "url(" + img + ")";
    }
}
function cmb_cities_change(e, data) {
    var Attractions_title = document.querySelector('.Attractions .title');
    Attractions_title.innerText = e.target.value;
    page_load(data, 1);
}
window.onload = function () {
    var src_url = 'https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97';
    var xhr = new XMLHttpRequest();
    xhr.open('get', src_url, true);
    xhr.send();
    xhr.onload = function () {
        if (xhr.status == 200) {
            var Attractions_title = document.querySelector('.Attractions .title');
            var cmb_cities = document.querySelector('#cities');
            var btnarr_pop_citie = document.querySelectorAll('.pop_city');
            var ori_data = JSON.parse(xhr.responseText).result.records;
            var err_data = ori_data[59].Add;
            ori_data[59].Add = err_data.slice(3, err_data.length);
            var data_1 = ori_data;
            Attractions_title.innerHTML = data_1[0].Zone;
            cmb_cities.addEventListener('change', function (e) { return cmb_cities_change(e, data_1); });
            cmb_cities_init(data_1);
            btnarr_pop_citie.forEach(function (e) {
                e.addEventListener('click', function (ev) { return pop_city_click(ev, data_1); });
            });
            page_load(data_1, 1);
            var page_btn_arr = document.querySelectorAll('.page_btn a');
            console.log(page_btn_arr.length);
            page_btn_arr.forEach(function (e) {
                e.addEventListener('click', function (ev) { return page_btn_click(ev, data_1); });
            });
        }
        else {
            alert('資料錯誤，請稍後再試');
        }
    };
};
