const Form =document.getElementById('form');
const UserName =document.getElementById('username');
const PassWord1 =document.getElementById('password');
const PassWord2 =document.getElementById('re-password');
const Email =document.getElementById('email');

Form.addEventListener('submit',function(e){
    e.preventDefault();

    checkInput([UserName,Email,PassWord1,PassWord2]);
    if (!validateEmail(Email.value.trim())){
        ShowError(Email,'อีเมลไม่ถูกต้อง');
    }
    else{
        ShowSuccess(Email);
    }
    checkPassword(PassWord1,PassWord2);
    checkInputLength(UserName,5,10);
    checkInputLength(PassWord1,5,12);
});

function ShowError(input,message){
    const formControl = input.parentElement;
    formControl.className='form-control error'
    const small= formControl.querySelector('small');
    small.innerText=message;
}

function ShowSuccess(input){
    const formControl = input.parentElement;
    formControl.className='form-control success'
}
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
function checkInput(inputArray){
    inputArray.forEach(function(input){
        if(input.value.trim() === ''){
            ShowError(input,`กรุณาป้อน ${getInputCase(input)}`);
        }else{
            ShowSuccess(input);
        }
    });
}
function getInputCase(input){
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}
function checkPassword(PassWord1,PassWord2){
    if(PassWord1.value !== PassWord2.value){
        ShowError(PassWord2,'รหัสผ่านไม่ตรงกัน');
    }
}
function checkInputLength(input,min,max){
    if(input.value.length<=min){
        ShowError(input,`${getInputCase(input)} ต้องมากกว่า ${min} ตัวอักษร`);
    }else if (input.value.length>max){
        ShowError(input,`${getInputCase(input)} ต้องไม่เกิน ${max} ตัวอักษร`);
    }else{
        ShowSuccess(input);
    }
}