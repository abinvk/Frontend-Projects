let buttons = document.querySelectorAll(".open-book");

buttons.forEach(function(btn){

btn.onclick = function(){

let title = this.dataset.title;
let author = this.dataset.author;
let desc = this.dataset.desc;

localStorage.setItem("title", title);
localStorage.setItem("author", author);
localStorage.setItem("desc", desc);

window.location.href = "book.html";

}

});