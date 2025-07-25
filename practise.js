// class car {
//     constructor(name, model, year){
//         this.name = name;
//         this.model = model;
//         this.year = year;
//     }
// }
// let myCar = new car("BMW", "i7", 2021)
// console.log(myCar);



const dOb = new Date(2025,3,15,8,30,30);
let now = new Date();


// function ageInDays() {
//     const birthDay = new Date(dOb.getFullYear(), dOb.getMonth(), dOb.getDate());
//     const diffDays = Math.floor((now - birthDay)/(1000*60*60*24));
//     return diffDays+1;
// }
// const ttlDays = ageInDays();
// document.getElementById("days").innerHTML= ttlDays;
let minutes = now.getMinutes() - dOb.getMinutes();

function ageInMinutes() {
    const birthDay = new Date(dOb.getFullYear(), dOb.getMonth(), dOb.getDate());
    const diffDays = Math.floor((now - birthDay)/(1000*60*60*24));
    const ttlMinutes =(diffDays+1)*24*60;
    let nMinutes = `Eshal is now ${ ttlMinutes + minutes } Minutes old  📅 `;
}

console.log(minutes);

