const header = document.getElementById('header');
const title = document.getElementById('title');
const description =document.getElementById('description');
const profile_img = document.getElementById('profile_img');
const seller_name = document.getElementById('name');
const price = document.getElementById('price');

const animate_bg = document.querySelectorAll('.animated_bg');
const animate_text = document.querySelectorAll('.animated_text');

setTimeout(showContent,2000);

function showContent(){
    header.innerHTML =`<img src="https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg" alt="">`;
    title.innerHTML = `คอมพิวเตอร์ `;
    description.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, ullam!`;
    profile_img.innerHTML=`<img src="https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">`;
    seller_name.innerHTML=`Sofia`;
    price.innerHTML=`ราคา 15,000 บาท`;
    animate_bg.forEach(el=>el.classList.remove('animated_bg'));
    animate_text.forEach(el=>el.classList.remove('animated_text'));
}
