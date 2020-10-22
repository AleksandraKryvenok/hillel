"use strict";

const list = document.getElementById("list");
const editForm = document.forms.editForm;
let currentUserName = "";

const data = localStorage.getItem("comments")
  ? JSON.parse(localStorage.getItem("comments"))
  : {};

list.addEventListener("click", function (e) {
    if (e.target.tagName !== "BUTTON") return;

    const element = e.target.parentElement;
    const propName = element.id;

    switch(e.target.name){
        case "Delete":

            element.remove();
            delete data[propName];
            localStorage.setItem("comments", JSON.stringify(data));
            break;

        case "Edit":   

            currentUserName = propName;
            editForm.elements.comment.value = data[propName];
            editForm.style.display = "flex";
            break;
    }
});


document.forms.comments.addEventListener("submit", function (e) {
    e.preventDefault();

     const userName = this.elements.userName.value;
     const comment = this.elements.comment.value;
   
     data[userName] = comment;
   
     localStorage.setItem("comments", JSON.stringify(data));

    addElement(data, userName);

    this.elements.userName.value = "";
    this.elements.comment.value = "";

  });

  document.forms.editForm.addEventListener("submit", function (e) {
    e.preventDefault();
    editForm.style.display = "none";

     const newComment = this.elements.comment.value;
     const currenComment = data[currentUserName];
     
   if(newComment != currenComment){
    data[currentUserName]  = newComment;  

    const comElement = document.getElementById(currentUserName);
    comElement.getElementsByTagName("div")[0].innerText = newComment;
    comElement.getElementsByTagName("h3")[0].innerText = currentUserName + "(edited)";

   }
   currentUserName = "";
   localStorage.setItem("comments", JSON.stringify(data));

  });

  for (let key in data) {

    addElement(data, key);

  };

  function addElement(data, key){

    const template = document.getElementById("commentTemplate").innerText;
    const newTemplate = template.replace("{{userName}}", key).replace("{{commentValue}}", data[key]).replace("{{idValue}}", key);

    list.innerHTML += newTemplate;

  }