var aboutMeBtn = document.getElementById("about-me-btn");
var portBtn = document.getElementById("portfolio-btn");
var contactBtn = document.getElementById("contact-btn");
var heroDiv = document.getElementById("hero-img");
var aboutMeDiv = document.getElementById("about-me");
var portDiv = document.getElementById("portfolio")
var contactDiv = document.getElementById("contact")

aboutMeBtn.addEventListener("click", function (){

    console.log("About Me Clicked")
    heroDiv.classList.add("hidden");
    aboutMeDiv.classList.remove("hidden");


});

portBtn.addEventListener("click", function (){

    console.log("Portfolio Clicked");
    heroDiv.classList.add("hidden");
    aboutMeDiv.classList.add("hidden");
    portDiv.classList.remove("hidden");


});

contactBtn.addEventListener("click", function (){

    console.log("Contact Clicked");
    heroDiv.classList.add("hidden");
    aboutMeDiv.classList.add("hidden");
    portDiv.classList.add("hidden");
    contactDiv.classList.remove("hidden");


});