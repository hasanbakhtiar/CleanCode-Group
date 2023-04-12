import { en } from "../data/en.js";
import { az } from "../data/az.js";
const btnAz = document.querySelectorAll('button')[0];
const li = document.querySelectorAll('li');



btnAz.onclick = ()=>{
    if (btnAz.innerHTML ==="AZ") {
        for(let x in az[0].menu){
            li[x].innerHTML = az[0].menu[x];
           }
        
           az.map(item=>{
            document.querySelector('h1').innerHTML = item.header
           })
        btnAz.innerHTML = "EN"
    }else{
        for(let x in en[0].menu){
            li[x].innerHTML = en[0].menu[x];
           }
        
           en.map(item=>{
            document.querySelector('h1').innerHTML = item.header
           })
        btnAz.innerHTML = "AZ"

    }
}

// for(let x in az[0].menu){
//     console.log(az[0].menu[x].split(','));
// }
