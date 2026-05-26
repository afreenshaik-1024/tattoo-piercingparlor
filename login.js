const themeBtn=
document.querySelector(".theme-btn");

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){

themeBtn.innerHTML=
'<i class="fa-solid fa-sun"></i>';

}
else{

themeBtn.innerHTML=
'<i class="fa-solid fa-moon"></i>';

}

});


function enableRTL(){

document.documentElement.dir=
document.documentElement.dir==="rtl"
?
"ltr"
:
"rtl";

}


function togglePassword(){

const password=
document.getElementById("password");

if(password.type==="password"){

password.type="text";

}
else{

password.type="password";

}

}