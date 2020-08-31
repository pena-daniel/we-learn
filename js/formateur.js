var test = document.querySelector(".test");
var contain = document.querySelector(".sideMenu");
var ul = document.querySelector(".sideMenu ul");
console.log(contain);
console.log(test);


ul.addEventListener("mouseover",()=>{
    test.innerText = "We-learn";
    contain.style.width = '18%';

});
ul.addEventListener("mouseout",()=>{
    test.innerText = "W";
    test.style.fontSize = "20px";
    test.style.fontWeight = "600";
    test.style.paddingLeft = "15px";
    contain.style.width = '3.5%'; 
});

