let btn = document.querySelector(".btn");
let tostMessage = document.querySelector(".tost-message");
let crossIcon = document.querySelector(".cross-icon");

btn.addEventListener("click", function(event) {
    event.preventDefault();
    tostMessage.classList.add("active")
});

crossIcon.addEventListener("click", function(event) {
    event.preventDefault();
    tostMessage.classList.remove('active');
    tostMessage.style.transition = "0.4s";
});