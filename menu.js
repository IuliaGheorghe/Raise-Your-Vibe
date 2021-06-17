let mobileNav=document.getElementsByClassName("fa-bars")[0];
let mobileMenu = document.getElementById("mobile-menu");

let webMenu =document.getElementById('web-menu');
let open = false;

function showMenu(){

    if(!open){
        webMenu.style.display="flex";
        mobileNav.style.color="greenyellow";
        mobileMenu.style.backgroundColor="rgba(0, 0, 0, 0.75)";
        open=true;
    }

    else 
    {
        webMenu.style.display="none";
        mobileNav.style.color="#ddd";
        mobileMenu.style.backgroundColor="transparent";
        open=false;
    }
    
}

mobileNav.addEventListener("click", showMenu);