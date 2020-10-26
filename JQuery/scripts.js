"use strict";

const list = $('#list');
const editForm = document.forms.editForm;
let currentIndex = "";

render();

list.on("click", function (e) {
    if (e.target.tagName !== "BUTTON") return;

    const element = e.target.parentElement;

    const comments = getComments();
    const index = Array.from(list[0].children).indexOf(element);

    switch(e.target.name){
        case "Delete":

            comments.splice(index, 1);
            localStorage.setItem("comments", JSON.stringify(comments));
            render();
            break;

        case "Edit":   
            
            currentIndex = index;
            editForm.elements.comment.value = comments[index].comment;
            $(editForm).css('display', 'flex');
            break;
    }
});

$(document.forms.comments).on("submit", function (e) {
    e.preventDefault();

    const comments = getComments();

     const userName = this.elements.userName.value;
     const comment = this.elements.comment.value;

     comments.push({ userName, comment });
   
     localStorage.setItem("comments", JSON.stringify(comments));

     render();

    this.elements.userName.value = "";
    this.elements.comment.value = "";

  });

  $(document.forms.editForm).on("submit", function (e) {

    e.preventDefault();
    $(editForm).css('display', 'none');

    const comments = getComments();

     const newComment = this.elements.comment.value;
     const currenComment = comments[currentIndex];
     
   if(newComment != currenComment.comment){ 

    const comment = {
      userName: currenComment.userName,
      comment: newComment,
      edited: true
    };

    comments.splice(currentIndex, 1, comment);

    localStorage.setItem("comments", JSON.stringify(comments));

    render();

   }
   currentIndex = "";

  });


  function render() {

    const template = $('#commentTemplate').text();
    const comments = getComments();
  
    const htmlText = comments
      .map(({ userName, comment, edited }) => {
        return template
          .replace("{{userName}}", userName)
          .replace("{{commentValue}}", comment)
          .replace("{{edited}}", edited ? "<i>(edited)</i>" : "");
      })
      .join("");

      list.html(htmlText);
  }

  function getComments() {
    return JSON.parse(localStorage.getItem("comments")) || [];
  }