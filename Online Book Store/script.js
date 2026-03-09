let buttons = document.querySelectorAll(".open-book");

buttons.forEach(function(btn){

btn.onclick = function(){

let title = this.dataset.title;
let author = this.dataset.author;
let desc = this.dataset.desc;

document.getElementById("title").innerText = title;
document.getElementById("author").innerText = author;
document.getElementById("desc").innerText = desc;

document.getElementById("bookDetails").style.display = "block";

}

});

function closeDetails(){
document.getElementById("bookDetails").style.display = "none";
}