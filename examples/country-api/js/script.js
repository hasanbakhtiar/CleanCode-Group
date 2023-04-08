const row = document.querySelector('.row');
const btn = document.querySelectorAll('button');

let startCount = 0;
let endCount = 50;




const fetchApi = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => {
            let col = "";
            data.slice(startCount, endCount).map((item, i) => {
                col += `<div class="col-12 col-sm-6 col-md-3">
            <div class="card">
            <img height="200" src="${item.flags.png}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${item.name.common}</h5>
              <p class="card-text">${item.capital}</p>
              <a href="#" class="btn btn-primary">${startCount+i+1}</a>
            </div>
          </div>
            </div>`
            })
            row.innerHTML = col;
        })
}

btn[0].onclick = () => {
    startCount = 0;
    endCount = 50;
    mycount=0;
    fetchApi()
}
btn[1].onclick = () => {
    startCount = 50;
    endCount = 100;
    mycount=50;

    fetchApi()
}
btn[2].onclick = () => {
    startCount = 100;
    endCount = 150;
    fetchApi()
}
btn[3].onclick = () => {
    startCount = 150;
    endCount = 200;
    fetchApi()
}
btn[4].onclick = () => {
    startCount = 200;
    endCount = 250;
    fetchApi()
}

fetchApi()