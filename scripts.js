"use strict";

const input = document.getElementsByTagName("input")[0];
const todoList = document.getElementById("todo");
const doneList = document.getElementById("done");
// const lisContainer = document.getElementsByClassName("list-container")[0];
let counterToDo = 0;
let counterDone = 0;

document.addEventListener("change", (event) => {

    if(event.target.type == "text"){
        addTask(event.target.value, false);
        input.value = "";  
    }else{
        const currentValue = event.target.value;
        const isChecked = event.target.checked;
        const parentElement = event.target.closest(".list");

        event.target.parentNode.remove();
      
        if(parentElement.id == "todo"){
            counterToDo--;
            if(counterToDo == 0){
                changeVisibility(todoList, "none"); 
            }
         }else{
            counterDone--;
            if(counterDone == 0){
                changeVisibility(doneList, "none"); 
            }
        };

        addTask(currentValue, isChecked);
    }
});


const addTask = function (curValue, isCheck) {

    const template = document.getElementById("template").innerText;
    const newTemplate = template.replace("{{textValue}}", curValue).replace("{{value}}", curValue);
    if (isCheck) {
        doneList.innerHTML += newTemplate.replace("{{checked}}", "checked");
        counterDone++;
        if(doneList.style.display = "none") {
            changeVisibility(doneList, "flex"); 
        } 
    } else {
        todoList.innerHTML += newTemplate.replace("{{checked}}", "");
        counterToDo++;
        if(todoList.style.display = "none") {
            changeVisibility(todoList, "flex"); 
        }  
    }

  };

function changeVisibility(element, visibility){
        element.style.display = visibility; 
  };

