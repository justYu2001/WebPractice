var btn = document.querySelector('.btn a');
function btn_click(e) {
    e.preventDefault();
    window.open("https://www.google.com", "_blank", 'top=500,width=400,height=400,menubar=yes,status=yes,titlebar=yes,resizable=1');
    // window.open("https://www.w3schools.com", "_blank", "top=500,left=0,width=400,height=400");
}
btn.addEventListener('click', function (e) { return btn_click(e); });
