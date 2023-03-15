// DOM -> Document Object Module 

// console.log(document);
// console.log(document.getElementsByTagName("h1")[1]);

// const data = "p";
// document.getElementsByTagName(data)[0].innerHTML = "new value";

// const mytext = document.getElementsByClassName('test');


// document.getElementsByTagName('h1')[0].innerHTML = 'value one';

// for (let index = 0; index < mytext.length; index++) {

//     mytext[index].innerHTML = 'value two';
    
// }
// document.getElementById('text').innerHTML = 'value three';


// document.querySelector('.test').innerHTML = 'new value';

// for (let index = 0; index < document.querySelectorAll('.test').length; index++) {
 
//     document.querySelectorAll('.test')[index].innerHTML = 'new text';
    
// }




import { data } from "./data.js";
const text = document.querySelector('p');
const btn = document.querySelector('button');


const changeData = ()=>{
    if (btn.innerHTML === data.country[1]) {
        text.innerHTML = data.capital[0];
        btn.innerHTML = data.capital[1];
    }else{
        text.innerHTML = data.country[0];
        btn.innerHTML = data.country[1];
    }
}

btn.onclick = changeData;
// btn.addEventListener('click',changeData);