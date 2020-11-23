"use strict";

const MESSEGE_OPTIONS = ["ку ку"];
MESSEGE_OPTIONS.push('Привет!');
MESSEGE_OPTIONS.push('Добро пожаловать');
MESSEGE_OPTIONS.push('Как дела?');
MESSEGE_OPTIONS.push('Как настроение?');
MESSEGE_OPTIONS.push('Приятно познакомиться');
MESSEGE_OPTIONS.push('Как тебя зовут?');
MESSEGE_OPTIONS.push('Хорошая погода');
MESSEGE_OPTIONS.push('Добрый вечер');
MESSEGE_OPTIONS.push('Пока! Чат окончен');


document.addEventListener("change", onChange);

function onChange(event){
    const val = event.target.value;
    console.log("Вы: " + val);
    chat(val);
    event.target.value= '';
};

 function timeout(message, time = 0) {
   return new Promise((resolve) => {
   setTimeout(() => resolve(message), time * 1000);
    })
 };

 function random(min, max) {
   return Math.round(Math.random() * (max - min + 1)) + min;
 };

  async function randomMessage(val) {
    let index = 0;
    if (val == "флюгегехаймен"){
        index = 9;  
    }else{
        index = random(0, 9);
    }
   const message = MESSEGE_OPTIONS[index]; 
   return timeout(message, 3);
 };

  async function chat(val) {
      const message = await randomMessage(val);
      console.log("Бот: " + message);
      if (message == 'Пока! Чат окончен'){
          document.removeEventListener("change", onChange);
      } 
   }; 

console.log(MESSEGE_OPTIONS[random(0, 3)]);
  