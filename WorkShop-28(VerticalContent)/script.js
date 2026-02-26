const slideContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.left-content');
const slideLeft = document.querySelector('.right-content');

const UpBtn = document.querySelector('.up-button');
const DownBtn = document.querySelector('.down-button');

const slideLength= slideRight.querySelectorAll('div').length;


let activeIndex =0;

UpBtn.addEventListener('click',()=>changeImage('up'));

DownBtn.addEventListener('click',()=>changeImage('down'));

function changeImage(direction){
    const slideHeight = slideContainer.clientHeight;
    if(direction=='down'){
        activeIndex++;
        if(activeIndex>slideLength-1){
            activeIndex=0;
        }
    }else if(direction == 'up'){
        activeIndex--;
        if(activeIndex<0){
            activeIndex = slideLength-1;
        }
    }
    slideLeft.style.transform=`translateY(-${activeIndex*slideHeight}px)`;
    slideRight.style.transform=`translateY(-${activeIndex*slideHeight}px)`;

}