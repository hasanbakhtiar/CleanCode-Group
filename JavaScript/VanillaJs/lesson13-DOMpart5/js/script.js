
// try{
//   throw 'everything is ok'
//   coansole.log("hello");

// }catch(err){
//   console.log(err);
// }finally{
//   console.log('finally running everytime');
// }

// .then()
// .catch()
// .finally()




// const myFetch = new Promise((resolve,reject)=>{
//         let data = true;
//         if (data) {
//           resolve("data ugurla yuklendi");
//         }else{
//           reject('data yuklenmedi');
//         }
// });

// console.log(myFetch);

// myFetch.then(res=>console.log(res))
// .catch(err=>console.log(err))




// fetch("https://fakestaoreapi.com/products")
// .then(res=>console.log(res))
// .catch(err=>console.log(err))


// console.log(fetch());




// const fetchApi = function async(){

// }

const fetchApi = async()=>{
 const comingdata = await fetch('https://fakestoreapi.com/products')
    const convertObject = await comingdata.json();
    console.log(convertObject);
}

fetchApi();