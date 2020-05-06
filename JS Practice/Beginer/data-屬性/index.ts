let name_list = <HTMLDivElement>document.querySelector('.name_list');
let btnadd=<HTMLButtonElement>document.querySelector('#btnadd');

let arr=JSON.parse(String(window.localStorage.getItem('arr')))||[];

function add_list(index:number)
{
    name_list.innerHTML+=`<div class="item" data-name="${arr[index].farmer}" data-index="${index+1}">${arr[index].farmer}</div>`
    let item = <HTMLDivElement>document.querySelectorAll('.item')[index];
    let button = document.createElement('button');
    button.innerHTML='刪除';
    button.setAttribute('class','btn');
    button.setAttribute('data-index',index.toString());
    item.appendChild(button);
}

function load()
{
    name_list.innerHTML='';
    for(let i=0;i<arr.length;++i)
    {
        add_list(i);
    }
}

load();

function item_click(e:MouseEvent)
{
    if((<HTMLDivElement>e.target).nodeName=='DIV')
    {
        let index = parseInt(String((<HTMLDivElement>e.target).dataset.index));
        alert(`第${index}個人是${(<HTMLDivElement>e.target).dataset.name}`);
    }
    if((<HTMLButtonElement>e.target).nodeName=='BUTTON')
    {
        let index = parseInt(String((<HTMLButtonElement>e.target).dataset.index));
        arr.splice(index,1);
        window.localStorage.setItem('arr',JSON.stringify(arr));
        load();
    }
}

function btnadd_click()
{
    let txtname=<HTMLInputElement>document.querySelector('#txtname');
    if(txtname.value=='')
    {
        alert('你是沒名子膩');
        return;
    }
    const new_data={
        farmer:txtname.value
        };
    arr.push(new_data);
    window.localStorage.setItem('arr',JSON.stringify(arr));
    add_list(arr.length-1);
    txtname.value='';
}

name_list.addEventListener('click',e=>item_click(e));
btnadd.addEventListener('click',btnadd_click);

