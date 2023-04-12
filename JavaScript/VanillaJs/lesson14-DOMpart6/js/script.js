// localStorage.setItem('surname','Moco');
// document.querySelector('h1').innerHTML = localStorage.getItem('surname');
// localStorage.removeItem('surname')
// localStorage.clear();


const modeBtn = document.querySelector('#mode');
const nav  = document.querySelector('nav');

if (localStorage.getItem('mode')===null) {
    localStorage.setItem('mode','light');
}else{

    const mode = ()=>{
        if (modeBtn.innerHTML === 'Dark') {
            nav.className = 'navbar navbar-expand-lg bg-dark navbar-dark';
            modeBtn.className = 'btn btn-warning';
            modeBtn.innerHTML = 'Light'
            localStorage.setItem('mode','dark');

        }else{
            nav.className = 'navbar navbar-expand-lg bg-light navbar-light';
            modeBtn.className = 'btn btn-dark';
            modeBtn.innerHTML = 'Dark'
            localStorage.setItem('mode','light');

        }
}
modeBtn.onclick = mode; 

}

if (localStorage.getItem('mode') === 'light') {
    nav.className = 'navbar navbar-expand-lg bg-light navbar-light';
    modeBtn.className = 'btn btn-dark';
    modeBtn.innerHTML = 'Dark'
}else{
    nav.className = 'navbar navbar-expand-lg bg-dark navbar-dark';
    modeBtn.className = 'btn btn-warning';
    modeBtn.innerHTML = 'Light'
}

// mode end

// lang start
import { lang } from "../data/menu.js";
const langBtn  = document.querySelector('#lang');
const navLink = document.querySelectorAll('.nav-link');


const multiLang = ()=>{

    if (langBtn.innerHTML === "AZ") {
            for(let c in lang.az){
                navLink[c].innerHTML = lang.az[c];
            }
            langBtn.innerHTML = "EN";
    }else{
        for(let c in lang.en){
            navLink[c].innerHTML = lang.en[c];
        }
        langBtn.innerHTML = "AZ";

    }
}

langBtn.onclick = multiLang;

// lang end









