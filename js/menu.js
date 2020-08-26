
let menu =document.querySelector('.navMenu');


// color du menu au scrool

window.addEventListener("scroll",(e)=>{
  menu.style.backgroundColor = 'rgb(17, 16, 16)';
});


// gestion du menu responsive

let button = document.querySelector(".subMenu");
let submenu = document.querySelector(".responsive");
let reviens = document.querySelector(".back-to");
let c = 0;

button.addEventListener("click", setPosition);
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
