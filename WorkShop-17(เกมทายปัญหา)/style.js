// const card = document.querySelector('.card');
const showBtn = document.getElementById('show');
const hiddenBtn = document.getElementById('btn-hidden');
const addContainer = document.getElementById('add-container');
const cardContainer = document.getElementById('card-container');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const currentEl = document.getElementById('current');
const clearBtn = document.getElementById('clear');
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');

const addCard = document.getElementById('add-card');

let currentActiveCard = 0;
let cardsEl = []; // เก็บการ์ดทั้งหมด
const cardsData = getCardsData(); // ดึงข้อมูลการ์ดจาก localStorage

function createCards() {
    cardsData.forEach((data, index) => {
        createSingleCard(data, index);
    });
}
function createSingleCard(data, index) {
    const card = document.createElement('div');
    card.classList.add('card');
    if (index === 0) {
        card.classList.add('active');
    }
    card.innerHTML = `
        <div class="inner-card">
                <div class="inner-card-front">
                    <p>${data.question}</p>
                </div>

                <div class="inner-card-back">
                    <p>${data.answer}</p>
                </div>
        </div>`;
    card.addEventListener('click', () => card.classList.toggle('show-answer'));
    cardsEl.push(card);
    cardContainer.appendChild(card);
    updateCurrentText();
}
function updateCurrentText() {
    currentEl.innerText = `${currentActiveCard + 1}/${cardsEl.length}`;
    
}
createCards();



// card.addEventListener('click', ()=>card.classList.toggle('show-answer'));
showBtn.addEventListener('click', ()=>addContainer.classList.add('show'));
hiddenBtn.addEventListener('click', ()=>addContainer.classList.remove('show'));
nextBtn.addEventListener('click', ()=>{
    cardsEl[currentActiveCard].className = 'card left';
    currentActiveCard++;
    if (currentActiveCard > cardsEl.length - 1) {
        currentActiveCard = cardsEl.length - 1;
    }
    cardsEl[currentActiveCard].className = 'card active';
    updateCurrentText();
});
prevBtn.addEventListener('click', ()=>{
    cardsEl[currentActiveCard].className = 'card right';
    currentActiveCard--;
    if (currentActiveCard < 0) {
        currentActiveCard = 0;
    }
    cardsEl[currentActiveCard].className = 'card active';
    updateCurrentText();
});

addCard.addEventListener('click', ()=>{
    const question = questionEl.value;
    const answer = answerEl.value;
    if (question.trim() && answer.trim()) {
        const newCard = { question, answer };
        createSingleCard(newCard);
        questionEl.value = '';
        answerEl.value = '';
            addContainer.classList.remove('show');
        cardsData.push(newCard);
        setCardsData(cardsData);}
});
function setCardsData(cards) {
    localStorage.setItem('cards', JSON.stringify(cards));
    window.location.reload();
}
function getCardsData(){
    const cards = JSON.parse(localStorage.getItem('cards'));
    return cards === null ? [] : cards;
}

clearBtn.addEventListener('click', ()=>{
    localStorage.clear();
    cardContainer.innerHTML = '';
    window.location.reload();
});