const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click',()=>{
    if(input.getAttribute("type")==="password"){
        input.setAttribute("type","text");
        btn.innerText="ซ่อนรหัสผ่าน";
    }else{
        input.setAttribute("type","password");
        btn.innerText="แสดงรหัสผ่าน";
    }
});