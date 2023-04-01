import { products } from "../data/products.js";
const ol = document.querySelector("ol");
const btn = document.querySelectorAll("button");
let selectCategory = "";

// products.map(info);

// function info(value){
//     console.log(value.title);
// }



const myFilter = () => {
  const checkCategory = (value) => {
    return value.category == selectCategory;
  };
  const catProducts = products.filter(checkCategory);

  let li = "";
const alldata = selectCategory==""?products:catProducts;
  alldata.map((item) => {
    li += `<div class="animate__animated animate__bounceInUp">
    <li >${item.title}</li>
    <img  width="150" src="${item.photo}"/>
    </div>`;
  });
  ol.innerHTML = li;
};


btn[0].onclick = () => {
    selectCategory = "Sofa";
    
      myFilter();
  
  };
  btn[1].onclick = () => {
    selectCategory = "Table";
  myFilter();
  
  };
  btn[2].onclick = () => {
    selectCategory = "Organization";
  myFilter();
  
  };
myFilter();