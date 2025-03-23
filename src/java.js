let mode = document.querySelector("#mode");
let body = document.querySelector("body");
let navbar = document.querySelector("#navbar");
let buttom_navbar = document.querySelector("#buttom_navbar");
var flag = 0;
mode.addEventListener("click",function(){
    if(flag == 0){
        mode.innerHTML = "Light";
        body.style.backgroundColor = "black";
        body.style.color = "white";
        navbar.style.backgroundColor = "black";
        buttom_navbar.style.backgroundColor = "black";
        flag = 1;
    }else{
        mode.innerHTML = "Dark";
        body.style.backgroundColor = "white"
        body.style.color = "black";
        navbar.style.backgroundColor = "white";
        buttom_navbar.style.backgroundColor = "white";
        flag = 0;
    }
})

let a = prompt("Enter your Name");
let pritam = document.querySelector("#name");
let marque = document.querySelector("#marque");
let shop = document.querySelector("#shop");

marque.style.color = "blue";
marque.innerHTML = a;
pritam.style.color="red";
pritam.innerHTML = a;
shop.innerHTML = "Pagla " + a + "😂";