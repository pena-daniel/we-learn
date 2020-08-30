// sous menu de  la partie option dans le header

var option = document.querySelector(".share_option");
var optionSubmenu = document.querySelector(".items_options");
var verifie = 1;

option.addEventListener('click',(e)=>{
    if (verifie == 1) {
        optionSubmenu.style.display = 'block';
        verifie = 0;
    } else {
        optionSubmenu.style.display = 'none';
        verifie = 1;
    }
    e.stopPropagation();
});
optionSubmenu.addEventListener('click',(e)=>{
    e.stopPropagation();
});


// pour le l'affichage des cours 

let change = 0;
let menuSelect =document.querySelector(".menu_content");
let titleMenu = document.querySelector(".selectMenu");

function SetHeight(params) {
    let value = document.querySelector("."+params);
    let chevron = document.querySelector("."+params+" .fa-chevron-down");
    let contain = document.querySelector("."+params+" .contenu");
    value.addEventListener("click",(e)=>{
        if (chevron.classList[1] == "fa-chevron-down") {
            chevron.classList.value = "fas fa-chevron-up";
            contain.style.height = "auto";
            contain.style.paddingTop = "5px";
            contain.style.paddingBottom = "5px";
        }else{
            chevron.classList.value = "fas fa-chevron-down";
            contain.style.height = "0px";
            contain.style.paddingTop = "0px";
            contain.style.paddingBottom = "0px";
        }
        e.stopPropagation();
    });  
}
document.querySelectorAll(".contenu").forEach(element => {
    element.addEventListener("click",(e)=>{
        e.stopPropagation();
    });
});

let cross = document.querySelector(".menu_content .fa-times");

cross.addEventListener("click",(e)=>{
    if (cross.classList[1] == "fa-times") {
        menuSelect.classList.add("btn-reponsive");
        cross.style.color ='rgb(22, 22, 22)';
        titleMenu.innerHTML = '<p><p><i class="fas fa-long-arrow-alt-left"></i></p>Contenu du cours</p>';
        document.querySelector(".right_content").style.width = "0%";
        document.querySelector(".left_content").style.width = "100%";
        
        change = 1;
    }
    e.stopPropagation();
});

// pour le menu deroulant des cours

menuSelect.addEventListener("click",(e)=>{
    if (change == 1){
        menuSelect.classList.remove("btn-reponsive");
        titleMenu.innerHTML = '<p>Contenu du cours</p>';
        cross.style.color ='#fffff';
        document.querySelector(".right_content").style.width = "25%";
        document.querySelector(".left_content").style.width = "80%";
        document.querySelector(".vid_content").style.height = "auto";
        change = 0;
    }
});
    

SetHeight("Title_items0");
SetHeight("Title_items1");
SetHeight("Title_items2");