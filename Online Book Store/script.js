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

let searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function(){

let searchValue = this.value.toLowerCase();

let books = document.querySelectorAll(".book");

books.forEach(function(book){

let button = book.querySelector(".open-book");

let title = button.dataset.title.toLowerCase();
let author = button.dataset.author.toLowerCase();

if(title.includes(searchValue) || author.includes(searchValue)){
book.style.display = "block";
}else{
book.style.display = "none";
}

});

});