let next = document.querySelector(".deplacement .fa-angle-left");
let prev = document.querySelector(".deplacement .fa-angle-right");
let imageText = document.querySelector(".textForgroup");
let children = document.querySelectorAll(".Switch");
let visible = document.querySelector(".deplacement span");
var image_1 = document.getElementById("image_1");
let titleForgroup = document.querySelector(".titleForgroups");
let innerTextForgroup = document.querySelector(".innerTextForgroup");
var cursor = 0;

console.log(titleForgroup.innerText);
next.addEventListener("click", setBackVisible);
prev.addEventListener("click", setVisible);

function setVisible(e) {

  let position = cursor;
  if (children[position++]) {
    children[position - 1].classList.remove("active");
    children[position].classList.add("active");
    image_1.style.backgroundImage = "url("+children[position].children[0].src +")";
    titleForgroup.innerText = children[position].children[1].innerText;
    visible.innerText = (position + 1)+" sur 4";
    position = position++;
    cursor = position;
  }

  console.log(position);
  console.log(cursor);
}
function setBackVisible() {
  let position = cursor;
  if (children[position - 1]) {
    children[position].classList.remove("active");
    children[position - 1].classList.add("active");
    image_1.style.backgroundImage = "url("+children[position - 1].children[0].src +")";
    titleForgroup.innerText = children[position - 1].children[1].innerText;
    visible.innerText = position+" sur 4";
    position = position - 1;
    cursor = position;
  }
  console.log(cursor);
  console.log(position);
}
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
