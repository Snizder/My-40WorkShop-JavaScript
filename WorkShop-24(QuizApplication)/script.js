const quizData = [
    {
        question: "1) 2 + 2 ได้เท่าไหร่?",
        a: "3",
        b: "4",
        c: "5",
        d: "6",
        correct: "b"
    },
    {
        question: "2) เมืองหลวงของประเทศไทยคืออะไร?",
        a: "เชียงใหม่",
        b: "ภูเก็ต",
        c: "กรุงเทพมหานคร",
        d: "ขอนแก่น",
        correct: "c"
    },
    {
        question: "3) HTML ย่อมาจากอะไร?",
        a: "Hyper Text Markup Language",
        b: "High Tech Modern Language",
        c: "Home Tool Markup Language",
        d: "Hyperlinks and Text Management Language",
        correct: "a"
    },
    {
        question: "4) สีของท้องฟ้าในเวลากลางวันคือสีอะไร?",
        a: "แดง",
        b: "น้ำเงิน",
        c: "เขียว",
        d: "ม่วง",
        correct: "b"
    }
];

const questionEl = document.getElementById('question');
const answersEls = document.querySelectorAll('.answer');
const a_text = document.getElementById('a-text');
const b_text = document.getElementById('b-text');
const c_text = document.getElementById('c-text');
const d_text = document.getElementById('d-text');
const submitBtn = document.getElementById('submit');
const quiz = document.querySelector('.question-container');

let currentQuiz = 0;
let score = 0;
loadQuiz();
function loadQuiz() {
    checkedAnswer();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}
function checkedAnswer() {
    answersEls.forEach(answerEl => answerEl.checked = false);
}

submitBtn.addEventListener('click', () => {
    let answer = getSelected();
    if (answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>คุณทำคะแนนได้ ${score}/${quizData.length} คะแนน!</h2>`;
        }
    }
});

function getSelected() {
    let answer;
    answersEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}