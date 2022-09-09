import { showLogin } from "../login.js";
import { showAbout } from "./about.js";
import { showCatalog } from "./catalog.js";
import { showHome } from "./home.js";
import { showRegister } from "./register.js";


document.querySelector('nav').addEventListener('click', onNavigate);

showHome();

const sections ={
    'homeBtn' : showHome,
    'catalogBtn':showCatalog,
    'aboutBtn': showAbout,
    'loginBtn' : showLogin,
    'registerBtn' : showRegister,
};


function onNavigate(event){
    if(event.target.tagName == 'A'){
        
        const view = sections[event.target.id];
        if(typeof view == 'function'){
            event.preventDefault();
            view();
        }
            

    }
}

function checkUserNav(){
    const userData = sessionStorage.getItem('userData');
    if(userData != null){
        document.getElementById('userNav').style.display = 'inline-block';
        document.getElementById('guestNav').style.display = 'none';
    }
}
