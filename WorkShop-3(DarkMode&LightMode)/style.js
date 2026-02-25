const switch_toggle = document.querySelector('input[type="checkbox"]');
const toggle_icon = document.getElementById('toggle-icon');
const  Nav = document.getElementById('nav');
const img1 = document.getElementById('img-1');
const img2 = document.getElementById('img-2');
const img3 = document.getElementById('img-3');


function switchMode(e){
    if(e.target.checked){
        document.documentElement.setAttribute('data-theme','Dark');
        DarkMode();
        ImageSwitchMode('dark');
    }else{
        document.documentElement.setAttribute('data-theme','light');
        LightMode();
        ImageSwitchMode("light");
    }

}

function DarkMode(){
    toggle_icon.children[0].textContent="โหมดกลางคืน";
    toggle_icon.children[1].classList.replace('fa-sun','fa-moon');
    Nav.style.backgroundColor='rgb(0 0 0 /50%)';

}

function LightMode(){
    toggle_icon.children[0].textContent="โหมดกลางวัน";
    toggle_icon.children[1].classList.replace('fa-moon','fa-sun');
    Nav.style.backgroundColor='rgb(255 255 255 /50%)';
}
function ImageSwitchMode(mode){

    img1.src =`./img/undraw_completed_${mode}.svg`;
    img2.src =`./img/undraw_data-table_${mode}.svg`;
    img3.src =`./img/undraw_ai-research-assistant_${mode}.svg`;
}

switch_toggle.addEventListener('change',switchMode);