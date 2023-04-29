// function Car(brand,model,year,color){
//         this.ibrand = brand;
//         this.imodel = model;
//         this.iyear = year;
//         this.icolor = color;
// }


// const myCar = new Car("BMW","X5",2021,'red');

// console.log(myCar.ibrand);



// class Car {
//     constructor(brand,model,year,color){
//         this.ibrand = brand;
//         this.imodel = model;
//         this.iyear = year;
//         this.icolor = color;
//         this.check =false;
//     }

//     calculateSpeed(km,hour){
//         return `${this.ibrand} speed is: ${km/hour}km/h`
//     }
//     checkOil(km){
//         if (km>=1000) {
//            this.check = true;
//         }else{
//             this.check = false;
//         }
//     }

//     oilAlert(){
//         if (this.check) {
//             return 'please, add oil'
//         }else{
//             return 'no problem'
//         }
//     }
// }


// const myCar = new Car("BMW","X5",2021,'red');

// console.log(myCar.calculateSpeed(1000,4));

// class Moto extends Car{
//     constructor(brand,model,year) {
//         super(brand)
//     }
    
 
// }

// const myMoto = new Moto("Yamaha","s500",2020,'red');
// console.log(myMoto.ibrand);
// console.log(myMoto.calculateSpeed(100,4));
// myMoto.checkOil(1000)
// console.log(myMoto.oilAlert());
