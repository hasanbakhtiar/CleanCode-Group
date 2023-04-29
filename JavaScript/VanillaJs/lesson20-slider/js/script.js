const photoOne = document.querySelector('#p1');
const photoTwo = document.querySelector('#p2');
const photo = document.querySelectorAll('img');


const funcOne = ()=>{
    for (let i = 0; i < 2; i++) {
        photo[i].style.translate = "-100%"; 
    }
    
}

setTimeout(funcOne,1000)


setTimeout(()=>{
    for (let i = 0; i < 2; i++) {
        photo[i].style.translate = "-200%"; 
    }
},2000)



var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });