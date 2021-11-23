const darkMode = document.querySelector(".dark-mode-toggle");
const body = document.querySelector(".body");


darkMode.addEventListener("click", ()=>{
    body.classList.toggle("active")
});
    
