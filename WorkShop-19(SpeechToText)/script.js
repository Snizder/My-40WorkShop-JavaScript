const btn = document.querySelector('.control');
const message = document.querySelector('.message');
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

function recordVoice() {
    const isRecording = btn.classList.contains('record');
    if (isRecording) {
        recognition.start();
        btn.classList.remove('record');
        btn.classList.add('pause');
        btn.innerText = 'Pause';
    } else {
        recognition.stop();
        btn.classList.remove('pause');
        btn.classList.add('record');
        btn.innerText = 'Record';
    }
}
function setVoiceToText(e) {
    let message = document.querySelector('.message');
    message.innerText += e.results[0][0].transcript;

}
function continueVoice() {
    const isPause = btn.classList.contains('pause');
    if (isPause) {
        recognition.start();
    }
}


function setUpVoice() {
    recognition.lang = 'th-TH';
    btn.addEventListener('click',recordVoice);
    recognition.addEventListener('result',setVoiceToText);
    recognition.addEventListener('end',continueVoice);
}

setUpVoice();


