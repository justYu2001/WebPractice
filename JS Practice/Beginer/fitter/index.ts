let flag=0;
let btn_query=document.createElement('button');
btn_query.id='btn_query';
btn_query.textContent='確認';
btn_query.className='btn';
let rtxt_result  = <HTMLDivElement>document.getElementById('rtxt_result');
let cmb_query_codition = <HTMLSelectElement>document.getElementById('cmb_query_codition');
let txt_name_arr:NodeListOf<HTMLInputElement>=document.querySelectorAll('.txt_nameinput');
let txt_age_arr:NodeListOf<HTMLInputElement>=document.querySelectorAll('.txt_ageinput');
let txt_favor_arr:NodeListOf<HTMLInputElement>=document.querySelectorAll('.txt_favorinput');

txt_name_arr.forEach(e=>{
    e.addEventListener('blur',ev=>name_check(ev));
});

txt_age_arr.forEach(e=>{
    e.addEventListener('blur',ev=>age_check(ev));
});

txt_favor_arr.forEach(e=>{
    e.addEventListener('blur',ev=>favor_check(ev));
});

function name_check(e:Event)
{
    let reg= /^[A-za-z]+$/;
    let name=(<HTMLInputElement>e.target).value;
    if(!reg.test(name))
    {
        alert('名子只能有大小寫英文字母');
        (<HTMLInputElement>e.target).value='';
    }
}

function age_check(e:Event)
{
    let reg=/^[1-9]$|^[1-9][0-9]$/;
    let age=(<HTMLInputElement>e.target).value;
    if(!reg.test(age))
    {
        alert('年齡有誤');
        (<HTMLInputElement>e.target).value='';
    }
}

function favor_check(e:Event)
{
    let reg=/^[A-Za-z][A-Za-z ]*$/;
    let favor=(<HTMLInputElement>e.target).value;
    if(!reg.test(favor))
    {
        alert('只能有字母和空白字元');
        (<HTMLInputElement>e.target).value='';
    }
}

function cmb_query_codition_change(cmb_query_codition:HTMLSelectElement,e:Event){
    let newinserte = document.createElement("select");
    let query_block = <HTMLDivElement>document.getElementById('query_block');
    newinserte.name='args';
    newinserte.id='cmb_query_args';
    newinserte.className='query_cmb';
    if(cmb_query_codition.value==='age')
    {
        if(flag===2)
        {
            let name_span = <HTMLSpanElement>document.getElementById('name_span');
            let txt_name = <HTMLInputElement>document.getElementById('txt_name');
            let btn_query = <HTMLButtonElement>document.getElementById('btn_query');
            name_span.remove();
            txt_name.remove();
            btn_query.remove();
        }
        if(flag===3)
        {
            let index_span = <HTMLSpanElement>document.getElementById('index_span');
            let btn_query = <HTMLButtonElement>document.getElementById('btn_query');
            index_span.remove();
            btn_query.remove();
        }
        flag=1;
        let init_option=document.createElement('option');
        init_option.value='init';
        init_option.text='請選擇';
        init_option.disabled=true;
        init_option.selected=true;
        newinserte.add(init_option);
        let bigger_option=document.createElement('option');
        bigger_option.value='bigger';
        bigger_option.text='大於';
        newinserte.add(bigger_option);
        let smaller_option=document.createElement('option');
        smaller_option.value='smaller';
        smaller_option.text='小於';
        newinserte.add(smaller_option);
        query_block.insertBefore(newinserte,rtxt_result);
        let txt_age=document.createElement('input');
        txt_age.id='txt_age';
        txt_age.className='txt_queryinput';
        query_block.insertBefore(txt_age,rtxt_result);
        let newspan=document.createElement('span');
        newspan.textContent='歲';
        newspan.id='age_span';
        query_block.insertBefore(newspan,rtxt_result);
        query_block.insertBefore(btn_query,rtxt_result);
    }
    if(cmb_query_codition.value==='name')
    {
        if(flag===1)
        {
            let cmb_query_args = <HTMLSelectElement>document.getElementById('cmb_query_args');
            let txt_age = <HTMLInputElement>document.getElementById('txt_age');
            let age_span = <HTMLSpanElement>document.getElementById('age_span');
            let btn_query = <HTMLButtonElement>document.getElementById('btn_query');
            cmb_query_args.remove();
            txt_age.remove();
            age_span.remove();
            btn_query.remove();
        }
        if(flag===3)
        {
            let index_span = <HTMLSpanElement>document.getElementById('index_span');
            let btn_query = <HTMLButtonElement>document.getElementById('btn_query');
            index_span.remove();
            btn_query.remove();
        }
        flag=2;
        let newspan = document.createElement('span');
        newspan.textContent='姓名:';
        newspan.id='name_span';
        query_block.insertBefore(newspan,rtxt_result);
        let txt_name=document.createElement('input');
        txt_name.className='txt_queryinput';
        txt_name.id='txt_name';
        query_block.insertBefore(txt_name,rtxt_result);
        query_block.insertBefore(btn_query,rtxt_result);
    }
    if(cmb_query_codition.value==='index')
    {
        if(flag===1)
        {
            let cmb_query_args = <HTMLSelectElement>document.getElementById('cmb_query_args');
            let txt_age = <HTMLInputElement>document.getElementById('txt_age');
            let age_span = <HTMLSpanElement>document.getElementById('age_span');
            let btn_query = <HTMLButtonElement>document.getElementById('btn_query');
            cmb_query_args.remove();
            txt_age.remove();
            age_span.remove();
            btn_query.remove();
        }
        if(flag===2)
        {
            let name_span = <HTMLSpanElement>document.getElementById('name_span');
            let txt_name = <HTMLInputElement>document.getElementById('txt_name');
            let btn_query = <HTMLButtonElement>document.getElementById('btn_query');
            name_span.remove();
            txt_name.remove();
            btn_query.remove();
        }
        flag=3;
        let newspan = document.createElement('span');
        newspan.id= 'index_span';
        newspan.appendChild(document.createTextNode('第'));
        let txt_index = document.createElement('input');
        txt_index.id='txt_index';
        txt_index.setAttribute('class','txt_queryinput');
        newspan.appendChild(txt_index);
        newspan.appendChild(document.createTextNode('個'));
        query_block.insertBefore(newspan,rtxt_result);
        query_block.insertBefore(btn_query,rtxt_result);
    }
}

function btn_query_click(btn_query:HTMLButtonElement,e:MouseEvent){
    rtxt_result.innerHTML='';
    let user_data=[];
    let user_name=document.querySelectorAll('.txt_nameinput');
    let user_age=document.querySelectorAll('.txt_ageinput');
    let user_favor = document.querySelectorAll('.txt_favorinput');
    for(let i=1;i<=user_age.length;++i)
        {
            user_data.push({
                name:(<HTMLSelectElement>user_name[i-1]).value,
                age:parseInt((<HTMLSelectElement>user_age[i-1]).value),
                favor:(<HTMLSelectElement>user_favor[i-1]).value
            });
        }
    let query_condition = (<HTMLSelectElement>document.getElementById('cmb_query_codition')).value;
    if(query_condition==='name')
    {   
        let result = user_data.filter(e=>e.name.includes((<HTMLInputElement>document.getElementById('txt_name')).value));
        result.forEach(e=>{
            rtxt_result.innerHTML+=e.name+'<br>'
        });
    }
    if(query_condition==='age')
    {
        let query_arg = (<HTMLInputElement>document.getElementById('cmb_query_args')).value;
        let query_age = parseInt((<HTMLInputElement>document.getElementById('txt_age')).value);
        if(query_arg==='bigger')
        {
            let result=user_data.filter(user=>user.age>query_age);
            result.forEach(e=>{
                rtxt_result.innerHTML+=e.name+'<br>';
            });
        }
        if(query_arg==='smaller')
        {
            let result = user_data.filter(user=>user.age<query_age);
            result.forEach(e=>{
                rtxt_result.appendChild(document.createTextNode(e.name));
                rtxt_result.appendChild(document.createElement('br'));
            });
        }
    }
    if(query_condition==='index')
    {
        rtxt_result.innerHTML='';
        let query_arg = parseInt((<HTMLInputElement>document.getElementById('txt_index')).value);
        let result = user_data.filter((e,i)=>i===query_arg-1);
        result.forEach(e=>{
            rtxt_result.appendChild(document.createTextNode(e.name));
        });
    }
}

cmb_query_codition.addEventListener('change',function(e){cmb_query_codition_change(this,e)},false);
btn_query.addEventListener('click',function(e){btn_query_click(this,e)},false);