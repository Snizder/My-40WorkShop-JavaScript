const categories = document.querySelectorAll('.category');

window.addEventListener('scroll',showCategory); 

function showCategory(){
    const calculateHeight = window.innerHeight / 5 * 4;


    categories.forEach(category=>{
        const categoryTop = category.getBoundingClientRect().top;

        if(categoryTop < calculateHeight){
            category.classList.add('active');
        }else{
            category.classList.remove('active');
        }


    });
}