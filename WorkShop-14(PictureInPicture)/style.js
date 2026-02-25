const videoEl = document.getElementById('video');
const requestBtn = document.getElementById('requestbtn');
const shareBtn = document.getElementById('sharebtn');

shareBtn.addEventListener('click',async ()=>{
    shareBtn.disabled=true;
    await videoEl.requestPictureInPicture();
    shareBtn.disabled =false;
});
requestBtn.addEventListener('click',()=>{
    selectMediaStream();
});

// ส่งคำขอเข้าถึงอุปกรณ์
async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoEl.srcObject=mediaStream;
        videoEl.onloadedmetadata=()=>{
            videoEl.play();
        }
    }catch{
        console.log(err);
    }

}
