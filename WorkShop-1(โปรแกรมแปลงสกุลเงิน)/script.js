
const Currency_one = document.getElementById('currency-one');
const Currency_two = document.getElementById('currency-two');


const Amount_one = document.getElementById('amount-one');
const Amount_two = document.getElementById('amount-two');

const RateText = document.getElementById('rate');
const Swap = document.getElementById('btn');

Currency_one.addEventListener('change',CalculateMoney);
Currency_two.addEventListener('change',CalculateMoney);

Amount_one.addEventListener('input',CalculateMoney);
Amount_two.addEventListener('input',CalculateMoney);

function CalculateMoney(){
    /* เก็บค่าสกุลเงินที่เป็นภาษา ENG USD THB ประมาณนี้*/
    const one = Currency_one.value;
    const two = Currency_two.value;

    
    fetch(`https://v6.exchangerate-api.com/v6/785d397f517fdf4ab39551c3/latest/${one}`).then(res=>res.json()).then(data=>{const rate = data.conversion_rates[two];
        /* เปลี่ยนค่า จากที่กำหนดไว้ที่HTML เป็นค่าที่เรากำหนดเอง ตามโค้ดคือ 1 USD = 32 THB อะไรประมาณนี้   */
        RateText.innerText = `1 ${one} = ${rate} ${two}`;
        /* โค้ดส่วนนี้คือ ค่าในช่องINPUT ที่ inputช่อง1 คูณกับค่าเงิน Rate ที่มาจากthenข้างบนที่ดึงค่ามาจากapi จะได้ค่าเงินinputช่องที่ 2 */
        Amount_two.value = (Amount_one.value*rate).toFixed(2);
    })
}
/* โค้ดนี้คือสลับ ชื่อ  */
Swap.addEventListener('click',()=>{
    /* เก็บค่าสกุลเงินไว้ พักค่ามาไว้ในresult */
    const result = Currency_one.value;
    /* โค้ดนี้คือ ให้สกุลเงิน 1 เป็นสกุลเงิน 2 */
    Currency_one.value = Currency_two.value;
    Currency_two.value = result;
    /* ให้มันคำนวณค่าใหม่ */
    CalculateMoney()
})


CalculateMoney()