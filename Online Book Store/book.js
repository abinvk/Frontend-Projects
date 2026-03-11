let title = localStorage.getItem("title");
let author = localStorage.getItem("author");
let desc = localStorage.getItem("desc");

document.getElementById("title").innerText = title;
document.getElementById("author").innerText = author;
document.getElementById("desc").innerText = desc;