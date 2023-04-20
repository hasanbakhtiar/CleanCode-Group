const text = document.querySelector('p');


// text.innerHTML = window
// console.log(window.chrome);

// text.innerHTML = location.href;
// location.assign('https://google.com');


// setInterval(()=>{document.write('hello')},1)


// setTimeout(() => {
//     document.write('mello')
// }, 2000);

setInterval(() => {
    text.innerHTML = new Date().getMilliseconds(); 
}, 1);

text.innerHTML = new Date().getMilliseconds(); 
console.log(new Date().getFullYear());