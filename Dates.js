const d = new Date();
document.getElementById("demo").innerHTML = d; 
const d = new Date(2020, 11, 24, 10, 33, 30, 0);
document.getElementById("demo").innerHTML = d;
const d = new Date(2018);
document.getElementById("demo").innerHTML = d;
const d = new Date(0);
document.getElementById("demo").innerHTML = d; // Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)
const d = new Date();
document.getElementById("demo").innerHTML = d.toString();
const d = new Date();
document.getElementById("demo").innerHTML = d.toUTCString();
const d = new Date();
document.getElementById("demo").innerHTML = d.toDateString();
const d = new Date();
document.getElementById("demo").innerHTML = d.toISOString();