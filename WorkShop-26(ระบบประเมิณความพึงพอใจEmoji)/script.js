const ratingContainer = document.querySelector('.rating-container');
const rating = document.querySelectorAll('.rating');
const panel =document.getElementById('panel');
const sendBtn = document.getElementById('send');
let selected;

ratingContainer.addEventListener('click',(e)=>{
    if(e.target.parentNode.classList.contains('rating')){
        removeActive();
        e.target.parentNode.classList.add('active');
        selected =e.target.nextElementSibling.innerHTML;
    }
});

function removeActive(){
    // วนลูบโดยให้i เริ่มที่0 ถ้าi น้อยกว่า ขนาดratingให้ i เพิ่มขึ้นที่ละ1
    // i คือ index เอาไว้ระบุขนาดของ rating
    for(let i = 0;i<rating.length;i++){
        // อันนี้คือ rating ช่องที่ i คือ rating[0],rating[1],rating[2] 3ภาพพอดี
        rating[i].classList.remove('active');
    }
}

sendBtn.addEventListener('click',()=>{
    panel.innerHTML=`
    <img src="./Images/heart.svg" alt="" class='img-complete'>
    <strong>ขอบคุณที่ใช้บริการของเรา</strong>
    <br>
    <strong>ผลการประเมิณ :${selected}</strong>

    `
});