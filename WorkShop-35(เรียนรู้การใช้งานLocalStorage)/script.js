const setting = document.getElementById('setting');
const text = document.querySelector('h2');
const resetBtn = document.getElementById('reset');
const body = document.querySelector('body');
setting.addEventListener('change',()=>{
    //บันทึกการตั้งค่าลงใน localstorage
    localStorage.setItem("night-mode",setting.checked);

    loadTheme();
});

resetBtn.addEventListener('click',()=>{
    localStorage.clear();
    loadTheme();
});

function loadTheme(){
    const status = JSON.parse(localStorage.getItem("night-mode"));
    setting.checked =status;
    if(setting.checked){
        text.innerText="โหมดกลางคืน";
        body.style.backgroundColor="black";
        body.style.color="white"
        body.style.transition="0.7s";
    }else{
        text.innerText="โหมดกลางวัน";
        body.style.backgroundColor="white";
        body.style.color="black"
        body.style.transition="0.7s";
    }
}
loadTheme();