const carone = [
    {
        brand:"BMW",
        model:"X5",
        year:2022
    },
    {
        brand:"Mercedes",
        model:"S500",
        year:2021
    },
    {
        brand:"Audi",
        model:"A4",
        year:2020
    }
]


const cartwo = [
    {
        brand:"BMW1",
        model:"X5",
        year:2022
    },
    {
        brand:"Mercedes1",
        model:"S500",
        year:2021
    },
    {
        brand:"Audi1",
        model:"A4",
        year:2020
    }
]




const brandList = (data)=>{
    data.forEach(item=>{
        console.log(item.brand);
    })
}

brandList(carone);
console.log("-----------------------------");
brandList(cartwo);




// let mynewvalue = [];

// for (let i = 0; i < car.length; i++) {

//     mynewvalue.push(car[i].brand)
// }

// console.log(mynewvalue.join(' and '));


// console.log(car);

// car.map((item,count)=>{
//     console.log(count + item.brand );
//     // console.log(count);
// })




