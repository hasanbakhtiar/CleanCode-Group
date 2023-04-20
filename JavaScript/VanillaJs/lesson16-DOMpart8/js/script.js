// const info = localStorage.setItem('data','{"name":"JavaScript","year":"2023"}');
// const info = localStorage.getItem('data');
// const data = JSON.parse(info);

// console.log(data.name);


// const car = [
//     {
//         name: "Bmw",
//         model: "x5",
//         year: 2000,
//         newCar: true
//     },
//     {
//         name: "mercedes",
//         model: "s500",
//         year: 2100,
//         newCar: false
//     }
// ]

// localStorage.setItem('data',JSON.stringify(car))

// const comingdata = localStorage.getItem('data');
// const result = JSON.parse(comingdata);

// console.log(result);

// let li = "";
// result.map(i=>{
//     li+=`<li>${i.name}</li>`
// })

// document.querySelector('ol').innerHTML = li;




const ol = document.querySelector('ol');
const input = document.querySelector('input');
const form = document.querySelector('form');


let data= [];
let li = "";
form.onsubmit = e =>{
    e.preventDefault();
    data.push(input.value);
    localStorage.setItem('todo',JSON.stringify(data));
    // let comingData = JSON.parse(localStorage.getItem('todo'));
    let comingData = JSON.parse(localStorage.getItem('todo'));
    
    
    for(let a of comingData){
        if (a === input.value) {
            li+=`<input value="${a}"/><br>`
            break;
        }
    }
    ol.innerHTML = li;  
    input.value = "";   
}

let comingData = JSON.parse(localStorage.getItem('todo'));


comingData.map(item=>{
    console.log(item);
    li+=`<input value="${item}"/><br>`
})
ol.innerHTML = li;
