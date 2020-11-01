"use strict";

function updateTime(){

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let element = document.getElementById('watch');
    element.innerText = formatDate(hours) + ':' + formatDate(minutes) + ':' + formatDate(seconds);

    setTimeout(updateTime, 1000); 
}

function formatDate(value){
     if(value < 10){
         return '0'+ value;
     }

     return value;
}

updateTime();