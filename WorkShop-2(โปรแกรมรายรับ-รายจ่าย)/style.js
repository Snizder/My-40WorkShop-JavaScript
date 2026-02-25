const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const text = document.getElementById('text');
const form = document.getElementById('form');
const amount = document.getElementById('amount');

const dataTransaction = []
let transactions = dataTransaction;

function init() {
    list.innerHTML = '';
    transactions.forEach(addDataToList);
    calculateMoney();

}

function addDataToList(transactions) {
    const symbol = transactions.amount < 0 ? '-' : '+';

    const status = transactions.amount < 0 ? 'minus' : 'plus';

    const result = numberWithCommas(Math.abs(transactions.amount))
    const item = document.createElement('li');
    item.classList.add(status);
    item.innerHTML = `${transactions.text}<span>${symbol}${result}</span> <button class="delete-btn" onclick="removedata(${transactions.id})">x</button>`
    list.appendChild(item);
}

/* โค้ดนี้ค่าแปลงค่าใช้comma */
function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}
/* โค้ดนี้คือ สุ่มจำนวนid  */
function AutoId() {
    return Math.floor(Math.random() * 1000000)
}

/* โค้ดนี้คือ คำนวณตัง */
function calculateMoney() {
    /* แปลงArray จาก Transaction เป็น Array ก้อนใหม่ ที่ชื่อว่า amounts  */
    const amounts = transactions.map(t => Number(t.amount));
    /* คำนวณยอดคงเหลือ */
    const total = amounts.reduce((result, item) => (result += item), 0).toFixed(2);
    /* คำนวณรายรับ */
    const income = amounts.filter(item => item > 0).reduce((result, item) => (result += item), 0).toFixed(2);
    /* คำนวณรายจ่าย */
    const expense = (amounts.filter(item => item < 0).reduce((result, item) => (result += item), 0) * -1).toFixed(2);

    /* แสดงผลยอดคงเหลือ */
    balance.innerText = `฿` + numberWithCommas(total);
    /* แสดงผลคำนวณรายรับ */
    money_plus.innerText = `฿` + numberWithCommas(income);
    /* แสดงผลคำนวณรายจ่าย */
    money_minus.innerText = `฿` + numberWithCommas(expense);

}
function removedata(id) {
    transactions = transactions.filter(transactions => transactions.id !== id)
    init();
}



function AddTransaction(e) {
    e.preventDefault();
    if (text.value.trim() === '' || amount.value.trim() === '') {
        alert("กรุณาป้อนข้อมูลให้ครบ");
    } else {
        const data = {
            id: AutoId(),
            text: text.value,
            amount: +amount.value
        }
        transactions.push(data);
        addDataToList(data);
        calculateMoney();
        amount.value = '';
    }
}

form.addEventListener('submit', AddTransaction)

init();