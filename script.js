const hours = document.getElementById("hour");
const minutes = document.getElementById("mins");
const seconds = document.getElementById("secs");
const getDay = document.getElementById("day");
const getDate = document.getElementById("date");
const amPm = document.getElementById("ampm")


const getDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];



function clock(){
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let day = date.getDay()
    let month = date.getMonth();
    let numDate = date.getDate();
    let year = date.getFullYear();
    let ampm;

    if(hour === 0){
        hour = 12;
        ampm = "AM";
    }
    if(hour > 12){
        hour = hour - 12;
        ampm = "PM";
    };

   hours.innerText = beforeZero(hour);
   minutes.innerText = beforeZero(min);
   seconds.innerText = beforeZero(sec);
   getDay.innerText = getDays[day];
   getDate.innerText = (`${month}/${numDate}/${year}`);
   amPm.innerText = ampm;
}

setInterval(()=>{
    clock();
}, 1000);

function beforeZero(time){
   return time < 10 ? `0${time}` : time;
}

// CODED BY : Rakib Hossen;
// Copyright: https://github.com/rakib-designs/;
// Fiverr Profile: https://www.fiverr.com/share/Q6406p;