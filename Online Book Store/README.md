# Step by Step

- Books photos add.
- Maximum 50 books and Details add.

# Design Details

- first row 4 books photos and details.
- 50 Buttons add.
- Button name = book details
- Background color = 
- Button color =

# Add More 

- Book details button click then next page move. That page is book paurchase page.
- 


book-store/
│
├── index.html        (Welcome / Landing page)
├── gallery.html      (Book gallery page)
│
├── css/
│     style.css
│
├── js/
│     script.js
│
└── images/
      book1.jpg
      book2.jpg
      ...
      book50.jpg




data-title  → book name
data-author → author name
data-desc   → book description










<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Online Book Store</title>

<link rel="stylesheet" href="style.css">
</head>

<body>

<h1 class="title">Book Gallery</h1>

<div class="book-container">

<div class="book">
<img src="images/book1.jpg">

<button 
class="open-book"
data-title="Animal Farm"
data-author="George Orwell"
data-desc="A famous political satire novel">

Open Book

</button>
</div>


<div class="book">
<img src="images/book2.jpg">

<button 
class="open-book"
data-title="Rich Dad Poor Dad"
data-author="Robert Kiyosaki"
data-desc="A popular book about money and investing">

Open Book

</button>
</div>

</div>


<!-- Popup -->

<div id="bookModal" class="modal">

<div class="modal-content">

<span class="close">&times;</span>

<h2 id="bookTitle"></h2>

<p id="bookAuthor"></p>

<p id="bookDesc"></p>

</div>

</div>


<script src="script.js"></script>

</body>
</html>









body{
font-family:Arial;
background:#BDDDFC;
margin:0;
}

/* title */

.title{
text-align:center;
margin-top:20px;
}

/* book grid */

.book-container{
display:grid;
grid-template-columns:repeat(4,1fr);
gap:40px;
padding:20px;
}

.book{
text-align:center;
}

.book img{
width:120px;
height:180px;
object-fit:cover;
}

button{
margin-top:10px;
padding:8px;
background:orange;
border:none;
border-radius:6px;
color:white;
cursor:pointer;
}

/* popup */

.modal{
display:none;
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,0.6);
}

.modal-content{
background:white;
width:300px;
margin:10% auto;
padding:20px;
border-radius:10px;
text-align:center;
}

.close{
cursor:pointer;
font-size:22px;
float:right;
}








const buttons = document.querySelectorAll(".open-book");

const modal = document.getElementById("bookModal");

const title = document.getElementById("bookTitle");
const author = document.getElementById("bookAuthor");
const desc = document.getElementById("bookDesc");

const closeBtn = document.querySelector(".close");


buttons.forEach(button => {

button.addEventListener("click", () => {

title.textContent = button.dataset.title;
author.textContent = "Author: " + button.dataset.author;
desc.textContent = button.dataset.desc;

modal.style.display = "block";

});

});


closeBtn.onclick = function(){
modal.style.display = "none";
};










