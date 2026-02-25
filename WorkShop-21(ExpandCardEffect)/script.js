const items = document.querySelectorAll('.items');

// Add click event to each item
// เมื่อคลิกที่ item จะเพิ่ม class active และเรียกใช้ฟังก์ชัน removeClassActive เพื่อเอา class active ออกจาก item อื่นๆ
items.forEach((item)=>{
    item.addEventListener('click',()=>{
        item.classList.toggle('active');
        removeClassActive(item);
    })
});

// Remove class active from other items
// e เอาไว้เช็คว่า item ไหนที่ถูกคลิกแล้วจะไม่เอา class active ออก
function removeClassActive(e) {
    items.forEach(item => {
        // ถ้า item ที่ถูกคลิกไม่ใช่ item ที่กำลังเลือกอยู่ จะเอา class active ออก
        if(item !== e) {
            item.classList.remove('active');
        }
    });
}