const rating = document.querySelectorAll('i');
const result = document.getElementById('result');

rating.forEach((star,selectIndex)=>{
    star.addEventListener('click',()=>{
        rating.forEach((star,choice)=>{
            if(selectIndex>=choice){
                //เติมสีเข้าไป
                star.classList.add('active');
            }else{
                //ลบสี
                star.classList.remove('active');
            }
        });
        result.innerText="ผลการประเมิณ"+(selectIndex+1)+"/5";
    });
});