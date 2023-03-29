// const text = document.querySelector('h1');
// // let fontSize = 32;
// text.style.fontSize = '32px';

// btn.onclick=()=>{

//     if (text.style.fontSize === '32px') {
//         text.style.fontSize = '20px';
//         // fontSize = 20;

//     }else{
//         text.style.fontSize = '32px';
//         // fontSize = 32;
//     }
// }

// console.log(text.style);


// console.log(typeof text.style);


// text.style.color = "red";
// text.style.backgroundColor = 'green'; 
// text.style.fontSize = '20px'




// const changeText = ()=>{
//     text.innerHTML = 'Test';
// }

// btn.addEventListener('click',changeText,true);

// document.querySelector('div').innerText = '<h1>Hello1</h1>';


// document.querySelector('button').onclick = ()=>{
//     document.querySelector('img').attributes[1].value = 'https://citytoursbaku.com/wp-content/uploads/2020/01/baku-3d-render-satellite-view-topographic-map-frank-ramspott.jpg'
// }

const btnMode = document.querySelectorAll('button')[0];
const menuBtn = document.querySelectorAll('button')[1];
const wrapper = document.querySelector('#wrapper');
const menuElem = document.querySelector('menu');


menuBtn.onclick = ()=>{

    menuElem.classList.toggle('show');
 
}


const mode=()=>{
    if (btnMode.innerHTML == '🌙') {
        // console.log('test');
        // wrapper.attributes[1].value = 'dark';
        wrapper.className = 'dark';

        btnMode.innerHTML = '☀️';
        
    }else{
        // wrapper.attributes[1].value = 'light';
        wrapper.className = 'light';

        btnMode.innerHTML = '🌙';
    }
}

btnMode.onclick = mode;




