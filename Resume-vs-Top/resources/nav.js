const navTriggerEl = document.querySelector(".nav-trigger");
const navBarEl = document.querySelector(".nav");
const mainContentEl = document.querySelector("main");
const listNavEl = document.getElementsByClassName("nav-list");
const navEl = document.querySelector("nav");

navTriggerEl.addEventListener("click", function () {
    navBarEl.classList.add("nav-triggered");
    mainContentEl.classList.add("opaque");
    mainContentEl.classList.add("shift");
})

for (let item of listNavEl) {
    item.addEventListener("click", function () {
        navBarEl.classList.remove("nav-triggered");
        mainContentEl.classList.remove("opaque");
    })
}

window.addEventListener("click", function (event) {
    if (event.target !== navEl && event.target !== navTriggerEl) {
        navBarEl.classList.remove("nav-triggered");
        mainContentEl.classList.remove("opaque");
    }
})

window.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
        navBarEl.classList.remove("nav-triggered");
        mainContentEl.classList.remove("opaque");
    }
})