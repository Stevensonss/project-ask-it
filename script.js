var navToggle = document.querySelector(".nav-toggle");
var header = document.querySelector("header");
var ham = document.querySelector(".ham");
var bur = document.querySelector(".bur");
var ger = document.querySelector(".ger");

navToggle.addEventListener("click", function(){
    header.classList.toggle("header-active");
    ham.classList.toggle("ham-active");
    bur.classList.toggle("bur-active");
    ger.classList.toggle("ger-active");
}) 