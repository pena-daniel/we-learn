

function SetHeight(params) {
    let chevron = document.querySelector("."+ params + " .fas");
    let cover = document.querySelector("."+ params + " .moduleTitle");
    let container = document.querySelector("."+ params + " .moduleContent");

    
     cover.addEventListener("click",()=>{
         if (chevron.classList[1] == "fa-chevron-down") {
            chevron.classList.value = "fas fa-chevron-up";
            container.style.height = "auto"; 
         }else{
            chevron.classList.value = "fas fa-chevron-down";
            container.style.height = "0px"; 
         }
     });
    
}
 

SetHeight("module1");
SetHeight("module2");
SetHeight("module3");
