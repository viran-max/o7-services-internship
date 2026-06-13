const reveals =
document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

reveals.forEach(section=>{

const top =
section.getBoundingClientRect().top;

const visible = 150;

if(top < window.innerHeight - visible){

section.classList.add("active");

}

});

});

window.dispatchEvent(
new Event("scroll")
);

const menu =
document.getElementById("menu");

const nav =
document.querySelector(".nav-links");

menu.addEventListener("click",()=>{

if(nav.style.display==="flex"){

nav.style.display="none";

}else{

nav.style.display="flex";

nav.style.flexDirection="column";

nav.style.position="absolute";

nav.style.top="70px";

nav.style.right="20px";

nav.style.padding="20px";

nav.style.background="#0f172a";

nav.style.borderRadius="10px";
}

});