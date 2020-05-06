const url = 'https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97';

let xhr = new XMLHttpRequest();
xhr.open('get',url,true);
xhr.send();
xhr.onload=()=>{
    const data = JSON.parse(xhr.responseText);
    console.log(data);
};