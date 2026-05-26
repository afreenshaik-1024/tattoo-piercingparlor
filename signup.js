const themeBtn=
document.querySelector(".theme-btn");

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("light");

themeBtn.innerHTML=
document.body.classList.contains("light")

? '<i class="fa-solid fa-sun"></i>'

: '<i class="fa-solid fa-moon"></i>';

});


function enableRTL(){

document.documentElement.dir=
document.documentElement.dir==="rtl"
?
"ltr"
:
"rtl";

}


function togglePassword(id){

const input=
document.getElementById(id);

input.type=
input.type==="password"
?
"text"
:
"password";

}