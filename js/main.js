/* =============== SHOW / HIDE MENU =============== */

const navMenu = document.getElementById("nav-menu");

navToggle = document.getElementById("nav-toggle");

/* Validate if constant exists */

if(navToggle){
    navToggle.addEventListener("click", ()=>{
        navMenu.classList.toggle('show-menu');
    })
}