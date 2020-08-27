let next = document.querySelector(".deplacement .fa-angle-left");
let prev = document.querySelector(".deplacement .fa-angle-right");
let imageText = document.querySelector(".textForgroup");
let children = document.querySelectorAll(".Switch");
let visible = document.querySelector(".deplacement span");
var image_1 = document.getElementById("image_1");
let titleForgroup = document.querySelector(".titleForgroups");
let innerTextForgroup = document.querySelector(".innerTextForgroup");
var cursor = 0;


let textToChange = Array(
  ["DW  est une communauté de jeunes étudients  camerounais passionner par le code.En effet apres un ans d\'etude et aider par de nombreux profesionnels notement Mrs philippe et Mrs krawis développeurs à SEED nous avons decidés de monter Djoum wilfried et moi même ( daniel josue) une communauté pour aider d'autre jeunes qui veulent faire carriere dans le dis domaine et bien plus encore."],
  ["bonjour DW  est une communauté de jeunes étudients  camerounais passionner par le code.En effet d\'etude et aider par de nombreux profesionnels notement est une communauté de jeunes étudients  camerounais passionner par le code.En effet d\'etude et aider par de nombreux profesionnels notement"],
  ["bonsoir DW  est une communauté de jeunes étudients  camerounais passionner par le code.En effet d\'etude et aider par de nombreux profesionnels notement est une communauté de jeunes étudients  camerounais passionner par le code.En effet d\'etude et aider par de nombreux profesionnels notement est une communauté de jeunes étudients  camerounais passionner par le code.En effet d\'etude et aider par de nombreux profesionnels notement est une communauté de jeunes étudients  camerounais passionner par le code.En effet d\'etude et aider "],
  ["bienvenue DW  est une communauté de jeunes étudients  camerounais passionner par le code.En effet d\'etude et aider par de nombreux profesionnels notement est une communauté de jeunes étudients  camerounais passionner par le code.En effet d\'etude et aider par de nombreux profesionnels notement est une communauté de jeunes étudients  camerounais passionner par le code.En effet d\'etude et aider par de nombreux profesionnels notement"]
);

next.addEventListener("click", setBackVisible);
prev.addEventListener("click", setVisible);

function setVisible(e) {

  let position = cursor;
  if (children[position++]) {
    children[position - 1].classList.remove("active");
    children[position].classList.add("active");
    image_1.style.backgroundImage = "url("+children[position].children[0].src +")";
    titleForgroup.innerText = children[position].children[1].innerText;
    innerTextForgroup.innerText = textToChange[position];
    visible.innerText = (position + 1)+" sur 4";
    position = position++;
    cursor = position;
  }

}
function setBackVisible() {
  let position = cursor;
  if (children[position - 1]) {
    children[position].classList.remove("active");
    children[position - 1].classList.add("active");
    image_1.style.backgroundImage = "url("+children[position - 1].children[0].src +")";
    titleForgroup.innerText = children[position - 1].children[1].innerText;
    innerTextForgroup.innerText = textToChange[position - 1];
    visible.innerText = position+" sur 4";
    position = position - 1;
    cursor = position;
  }
  console.log(cursor);
  console.log(position);
}

