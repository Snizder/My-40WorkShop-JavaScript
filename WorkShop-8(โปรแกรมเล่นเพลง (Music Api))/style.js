const music_Container = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progress_Container = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover'); 

const songs=["Contra","HavestMoon","Mario"];
let index=1;

function loadSongs(song){
    title.innerText = `เพลง ${song} .mp3`;
    cover.src=`./cover/${song}.jpg`
    audio.src=`./music/${song}.mp3`
}
playBtn.addEventListener('click',()=>{
    const isPlay = music_Container.classList.contains('play'); // เช็คว่าเล่นเพลงหรือไม่

    if(isPlay){
        pauseSong(); // หยุดเล่น
    }else{
        playSong(); // เล่นเพลงต่อ
    }
});

prevBtn.addEventListener('click',()=>{
    index--;
    if(index<0){
        index=songs.length-1;
    }
    loadSongs(songs[index]);
    playSong();
});
nextBtn.addEventListener('click',nextSong);

function nextSong(){
        index++;
    if(index > songs.length-1){
        index=0
    }
    loadSongs(songs[index]);
    playSong();
};
audio.addEventListener('ended',nextSong);

function pauseSong(){
    music_Container.classList.remove('play');
    playBtn.querySelector('i.fa-solid').classList.add('fa-play');
    playBtn.querySelector('i.fa-solid').classList.remove('fa-pause');
    audio.pause();
}

function playSong(){
    music_Container.classList.add('play');
    playBtn.querySelector('i.fa-solid').classList.remove('fa-play');
    playBtn.querySelector('i.fa-solid').classList.add('fa-pause');
    audio.play();
}
loadSongs(songs[index]);

audio.addEventListener('timeupdate',updateProgress);

function updateProgress(e){
    const {duration,currentTime} = e.srcElement;
    const progressPercent = (currentTime/duration)*100;
    progress.style.width = `${progressPercent}%`;
}

progress_Container.addEventListener('click',setProcess);

function setProcess(e){
    const width =this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX/width)*duration;
}

