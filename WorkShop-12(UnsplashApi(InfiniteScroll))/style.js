const count =10;
const apiKey='z7C3HLaxL4n2_HeBkgzIfn6XSGeu4KcwQZKp7lYp3OY';
const apiUrl =`https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

const imageContainer = document.getElementById('image-container');
let photoArray=[];

async function getPhoto(){
    try{
    const res = await fetch(apiUrl);
    photoArray=await res.json();
        displayImage();
    }catch(err){
        console.log(err);
    }
}

function displayImage(){
    photoArray.forEach((photo)=>{

        const item = document.createElement('a');
        item.setAttribute('href',photo.links.html);
        item.setAttribute('target','_blank');

        const img= document.createElement('img');
        img.setAttribute('src',photo.urls.regular);
        img.setAttribute('title',photo.alt_description);
        img.setAttribute('alt',photo.alt_description);

        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}
getPhoto();
window.addEventListener('scroll',()=>{
    if(window.innerHeight+window.scrollY>=document.body.offsetHeight-100){
        // ดึงข้อมูลมาแสดงผล
        getPhoto();
    }
});
