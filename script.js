//swlect the create button
let button = document.querySelector("#create");
console.log(button);
//select the password and password confirm
let password = document.querySelector("#password");
console.log(password);
let confirm = document.querySelector("#password-confirm");
console.log(confirm);
//select the error message
let message = document.querySelector(".error");
console.log(message)

function validate(){
    if(password.value === confirm.value){
        message.textContent = "passwords match";
        message.style.color = "green"
        confirm.setCustomValidity(" ");
    }else{
        confirm.setCustomValidity("passwords do not match")
    }
}