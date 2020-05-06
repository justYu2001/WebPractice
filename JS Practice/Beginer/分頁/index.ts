interface ArrayConstructor {
    from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): Array<U>;
    from<T>(arrayLike: ArrayLike<T>): Array<T>;
}

function cmb_cities_init(data:Array<any>)
{
    let cmb_cities=<HTMLSelectElement>document.querySelector('#cities');
    const cities_arr =Array.from(new Set(data.map(e=>e.Zone)));
    cities_arr.forEach(e=>{
        let city=document.createElement('option');
        city.text=e;
        city.value=e;
        cmb_cities.appendChild(city);
    });
}

function pop_city_click(e:MouseEvent,data:Array<any>)
{
    let Attractions_title = <HTMLHeadingElement>document.querySelector('.Attractions .title');
    e.preventDefault();
    Attractions_title.innerHTML=(<HTMLAnchorElement>e.target).innerText;
    page_load(data,1);
}

function page_btn_click(e:MouseEvent,data:Array<any>)
{
    e.preventDefault();
    console.log(e.target);
    let te=<HTMLAnchorElement>e.target;
    page_load(data,parseInt(te.innerText));
}

function page_load(data:Array<any>,index:number)
{
    let btn_area=<HTMLDivElement>document.querySelector('.page_btn');
    let content_area=<HTMLDivElement>document.querySelector('.Attractions .content');
    let Attractions_title = <HTMLHeadingElement>document.querySelector('.Attractions .title');
    btn_area.innerHTML='';
    content_area.innerHTML='';
    const arr=data.filter(e=>e.Zone==Attractions_title.innerText);
    const page_num=Math.floor(arr.length/6<1?1:arr.length/6);
    for(let i=1;i<=page_num;++i)
    {
        let btn=document.createElement('a');
        btn.innerHTML=i.toString();
        btn.addEventListener('click',e=>page_btn_click(e,data));
        if(i==index)
        {
            btn.style.backgroundColor='black';
            btn.style.color='#ffffff';
        }
        btn_area.appendChild(btn);
    }
    for(let i=(index-1)*6;i<(index-1)*6+6;++i)
    {
        const name=arr[i].Name;
        const img=arr[i].Picture1;
        const zone=arr[i].Zone;
        const time=arr[i].Opentime;
        const tel = arr[i].Tel;
        const loc = arr[i].Add;
        const ticket = arr[i].Ticketinfo || '免費參觀';
        const tmp=
        `<div class="item item${i}">
            <img src="" alt="">
            <div class="nz">
                <div class="name">${name}</div>
                <div class="zone">${zone}</div>
            </div>
            <div class="info">
                <div class="time">
                    <img src="clock.png" alt="">
                    ${time}
                </div>
                <div class="loc">
                    <img src="map.png" alt="">
                    ${loc}
                </div>
                <div class="tel">
                    <img src="smartphone.png" alt="">
                    ${tel}
                </div>
                <div class="ticket">
                    <img src="ticket.png" alt="">
                    ${ticket}
                </div>
            </div>
        </div>`;
        content_area.innerHTML+=tmp;
        let item_img = <HTMLDivElement>document.querySelector(`.item${i} img`);
        item_img.style.backgroundImage=`url(${img})`;
    }
}

function cmb_cities_change(e:Event,data:Array<any>)
{
    let Attractions_title = <HTMLHeadingElement>document.querySelector('.Attractions .title');
    Attractions_title.innerText=(<HTMLSelectElement>e.target).value;
    page_load(data,1);
}

window.onload=()=>{
    const src_url='https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97';
    let xhr=new XMLHttpRequest();
    xhr.open('get',src_url,true);
    xhr.send();
    xhr.onload=()=>{
        if(xhr.status==200)
        {
            let Attractions_title = <HTMLHeadingElement>document.querySelector('.Attractions .title');
            let cmb_cities=<HTMLSelectElement>document.querySelector('#cities');
            let btnarr_pop_citie:NodeListOf<HTMLAnchorElement>=document.querySelectorAll('.pop_city');
            let ori_data=JSON.parse(xhr.responseText).result.records;
            let err_data=<string>ori_data[59].Add;
            ori_data[59].Add=err_data.slice(3,err_data.length);
            const data = <Array<any>>ori_data;
            Attractions_title.innerHTML=data[0].Zone;
            cmb_cities.addEventListener('change',e=>cmb_cities_change(e,data));
            cmb_cities_init(data);
            btnarr_pop_citie.forEach(e=>{
                e.addEventListener('click',ev=>pop_city_click(ev,data));
            });
            page_load(data,1);
            let page_btn_arr:NodeListOf<HTMLAnchorElement>=document.querySelectorAll('.page_btn a');
            console.log(page_btn_arr.length);
            page_btn_arr.forEach(e=>{
                e.addEventListener('click',ev=>page_btn_click(ev,data));
            });
        }
        else
        {
            alert('資料錯誤，請稍後再試');
        }
    }
}