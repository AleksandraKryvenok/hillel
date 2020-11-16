"use strict";

function Accordion(element){
    this.title = element.querySelector(".title");
    this.body = element.querySelector(".body"); 

    this.toggle = function(){
        this.body.classList.toggle("hidden");
    };
    this.open = function(){
        this.body.classList.remove("hidden");
    };
    this.close = function(){
        this.body.classList.add("hidden");
    };

    //this.title.onclick = function(){console.log(this)};
};

const htmlAccordion = new Accordion(document.querySelector("#html"));
htmlAccordion.title.onclick = htmlAccordion.open;

const cssAccordion = new Accordion(document.querySelector("#css"));
const jsAccordion = new Accordion(document.querySelector("#js"));

const accordions = [htmlAccordion, cssAccordion, jsAccordion];

//при открытии скрываем все body
accordions.forEach(function(accordion){
    accordion.close();  
});

document.getElementById("openAll").addEventListener("click", function(){
    accordions.forEach(function(accordion){
        accordion.open();  
    });  
});

document.getElementById("closeAll").addEventListener("click", function(){
    accordions.forEach(function(accordion){
        accordion.close();  
    });  
});

document.getElementById("toggleAll").addEventListener("click", function(){
    accordions.forEach(function(accordion){
        accordion.toggle();  
    });  
});






