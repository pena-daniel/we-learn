
let menu =document.querySelector('.navMenu');


// color du menu au scrool

window.addEventListener("scroll",(e)=>{
  menu.style.backgroundColor = 'rgba(240, 240, 221, 0.979)';
});


// gestion du menu responsive

let buttons = document.querySelector(".subMenu");
let submenu = document.querySelector(".responsive");
let reviens = document.querySelector(".back-to");
let c = 0;

buttons.addEventListener("click", setPosition);
reviens.addEventListener("click", setPosition);
function setPosition() {
  if (c == 0) {
    submenu.style.left = " 0%";
    c = 1;
  } else {
    submenu.style.left = " -100%";
    c = 0;
  }
}
