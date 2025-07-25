
//Eshals Birth date counter


setInterval(bDate,1000);
const tick = document.getElementById("tickSound");

function bDate (){
    const dOb = new Date(2025,3,15,8,30,30);
    let now = new Date();

let years = now.getFullYear()-dOb.getFullYear();
let months = now.getMonth()-dOb.getMonth();
let days = now.getDate()-dOb.getDate();
let hours = now.getHours()-dOb.getHours();
let minutes = now.getMinutes() - dOb.getMinutes();
let seconds = now.getSeconds() - dOb.getSeconds();

if (seconds < 0) {
    seconds += 60;
    minutes--;
}
if (minutes < 0) {
    minutes += 60;
    hours--;
}
if (hours < 0) {
    hours += 24;
    days--;
}
if (days < 0) {
    months--;
    const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += previousMonth.getDate();
}
if (months < 0) {
    months += 12;
    years--;
}
document.getElementById("years").innerHTML=years;
document.getElementById("months").innerHTML=months;
document.getElementById("days").innerHTML= days;
document.getElementById("hours").innerHTML=hours;
document.getElementById("minutes").innerHTML=minutes;
document.getElementById("seconds").innerHTML=seconds;
  

//FInd age in TOTAL Months
function ageInMonths() {
    const birthDay = new Date(dOb.getFullYear(), dOb.getMonth(), dOb.getDate());
    const diffDays = Math.floor((now - birthDay)/(1000*60*60*24));
    const ttlMonths =Math.min((diffDays+1)/30.44).toFixed(1);
    let nMonths =  `Eshal is now ${ ttlMonths } Month's old  📅 `;
    document.getElementById("agebtn").innerHTML = nMonths;
}
document.getElementById("months").onclick = ageInMonths;


//FInd age in TOTAL days
function ageInDays(){
    const birthDay = new Date(dOb.getFullYear(), dOb.getMonth(), dOb.getDate());
    const diffDays = Math.floor((now - birthDay)/(1000*60*60*24));
    let nDays = `Eshal is now ${ diffDays+1 } day's old  📅 `;
    document.getElementById("agebtn").innerHTML =nDays;
}
document.getElementById("days").onclick = ageInDays;

//FInd age in TOTAL Hours
function ageInHours() {
    const birthDay = new Date(dOb.getFullYear(), dOb.getMonth(), dOb.getDate());
    const diffDays = Math.floor((now - birthDay)/(1000*60*60*24));
    const ttlHours =(diffDays+1)*24;
    let nHours = `Eshal is now ${ ttlHours + hours } Hour's old  📅 `;
    document.getElementById("agebtn").innerHTML = nHours;
}
document.getElementById("hours").onclick = ageInHours;

//FInd age in TOTAL Minutes
function ageInMinutes() {
    const birthDay = new Date(dOb.getFullYear(), dOb.getMonth(), dOb.getDate());
    const diffDays = Math.floor((now - birthDay)/(1000*60*60*24));
    const ttlMinutes =(diffDays+1)*(24*60);
    let nMinutes = `Eshal is now ${ ttlMinutes + minutes } Minute's old  📅 `;
    document.getElementById("agebtn").innerHTML = nMinutes;
}
document.getElementById("minutes").onclick = ageInMinutes;


const tick = document.getElementById("tickSound");
tick.currentTime = 0;
tick.play();

};


function startClock() {
    bDate(); // Initial call
    setInterval(bDate, 1000); // Repeat every second
}

function scrollToAge() {
    // Start the ticking clock
    startClock();
  
    // Scroll to #age section smoothly
    document.getElementById("age").scrollIntoView({
      behavior: 'smooth'
    });
  }
