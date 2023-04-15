// const h1 = document.querySelector('h1');
// console.log(document);

// p.innerHTML = h1.firstChild.nodeType;

// const ul = document.querySelector('ul');
// const p = document.querySelector('p');

// p.innerHTML = ul.firstChild.firstChild.nodeValue;
// p.innerHTML = ul.firstChild.parentElement.lastChild.firstChild.nodeValue; 
// p.innerHTML = ul.firstChild.parentElement.childNodes[2].firstChild.nodeValue.substring(0,1); 

// const newElem  =document.createElement('h1');
// const newText = document.createTextNode('Hello Mello');
// newElem.appendChild(newText);
// document.body.appendChild(newElem);
// console.log(newElem);




const input = document.querySelector('input');
const ol = document.querySelector('.list-group');
const h6 = document.querySelector('h6');
const form = document.querySelector('form');

const addData = (e) => {
    e.preventDefault();
    
    
    
    if (!input.value) {
        h6.innerHTML  = 'please,fill input';
        h6.setAttribute('class','alert alert-warning');
    } else {
        h6.innerHTML  = '   ';
        h6.setAttribute('class','');
        
        
        let li = document.createElement('li');
        li.innerHTML = input.value;
        li.setAttribute('class','list-group-item list-group-item-action')
        ol.appendChild(li);
        input.value = null;
        li.onclick=()=>{
            li.style.textDecoration = 'line-through';
            li.style.backgroundColor = 'grey';
            li.style.color = '#fff';
        }
        li.addEventListener('dblclick',()=>{
            li.remove();
        })
        
    }

}


form.onsubmit = addData;



// const addData = () => {
//     if (!input.value) {
//        btn.setAttribute("disable", "");
//     } else {
//         let li = document.createElement('li');
//         li.innerHTML = input.value;
//         ol.appendChild(li);
//         input.value = null;
//         btn.removeAttribute("disable");

        
//     }

// }
