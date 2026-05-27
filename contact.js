const menuBtn=document.getElementById("menuBtn");

const navLinks=document.querySelector(".nav-links");

const navButtons=document.querySelector(".nav-buttons");

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("active");

navButtons.classList.toggle("active");

});


function enableRTL(){

document.documentElement.dir=
document.documentElement.dir==="rtl"
?
"ltr"
:
"rtl";

}


const themeBtn=document.querySelector(".logo-btn");

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("light");

});

function openLoginPage(){

window.location.href="login.html";

}