const toggleButton = document.getElementById('toggle');
const openButton = document.getElementById('open');
const modal = document.getElementById('modal');
const closeButton = document.getElementById('close');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('show-nav');
});
openButton.addEventListener('click', () => {
    modal.classList.add('show-modal');
});
closeButton.addEventListener('click', () => {
    modal.classList.remove('show-modal');
});
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show-modal');
    }
});