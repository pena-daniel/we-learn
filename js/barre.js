var btnSearch= document.querySelector(".btnSearch");
var Barre = document.querySelector(".rechercher");
var visibility = "false";

btnSearch.addEventListener("click", (event)=>{
    event.preventDefault();
    Barre.style.height = "50px";
    if (visibility == "true") {
        Barre.style.height = "0px";
        visibility = "false";
    } else {
        Barre.style.height = "50px";
        visibility = "true";
    }
})
console.log(visibility);