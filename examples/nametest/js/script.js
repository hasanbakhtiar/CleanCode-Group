const btn =document.querySelector('button');
const text = document.querySelector('p');
const input = document.querySelector('input');

btn.onclick=()=>{
    if (input.value ==='Hasan') {
        text.innerHTML = input.value;
    }else{
        text.innerHTML = `Senin adin Hasandir. ${input.value} deyil.`
    }
    
}
