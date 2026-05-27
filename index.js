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

const animations =
document.querySelectorAll(".animation");

window.addEventListener("scroll",()=>{

animations.forEach(item=>{

const itemTop =
item.getBoundingClientRect().top;

const triggerPoint =
window.innerHeight/1.3;

if(itemTop < triggerPoint){

item.classList.add("show");

}

});

});

const faqQuestions=
document.querySelectorAll(".faq-question");

faqQuestions.forEach(question=>{

question.addEventListener("click",()=>{

const answer=
question.nextElementSibling;

if(answer.style.maxHeight){

answer.style.maxHeight=null;

}
else{

answer.style.maxHeight=
answer.scrollHeight+"px";

}

});

});