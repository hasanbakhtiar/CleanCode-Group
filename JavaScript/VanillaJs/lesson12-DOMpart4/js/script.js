// console.log(fetch());
fetch('http://127.0.0.1:5500/data/data.json')
.then(res=>res.json())
.then((data)=>{
  
let li ="";
  console.log(data);
data.map(item=>{
  li+= `<li><img width="100" src="${item.image}">${item.title}</li>`;
})

document.querySelector('ol').innerHTML  = li;
})
.catch(err=>console.log(err))







