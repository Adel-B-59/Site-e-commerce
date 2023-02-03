"use strict";

const OpenNav = document.querySelector('.icon1')
const CloseNav = document.querySelector('.fermé')
const Menu = document.querySelector('.menu')

const PositionMenu = Menu.getBoundingClientRect().left;

OpenNav.addEventListener("click", ()=> {
    // console.log("a");
    if (PositionMenu<0){
        Menu.classList.add("monter")
    }
})

CloseNav.addEventListener("click", ()=> {
    if (PositionMenu<0){
        Menu.classList.remove("monter")
    }
})