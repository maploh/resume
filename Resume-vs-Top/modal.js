const closeEl = document.querySelector(".close");
const modalEl = document.querySelector(".modal");
const contactNavEl = document.querySelector(".contact-nav");

closeEl.addEventListener("click", function(){
    modalEl.classList.remove("show-modal");
})

contactNavEl.addEventListener("click", function(){
    modalEl.classList.add("show-modal");
})

window.addEventListener("click", function(event){
    if(event.target === modalEl){
        modalEl.classList.remove("show-modal");
    }
})