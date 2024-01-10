const container = document.querySelector(".container");
const navOpen = container.querySelector("#open");
const navClose = container.querySelector("#close");

navOpen.addEventListener("click", function () {
    container.classList.add("show-nav");

});

navClose.addEventListener("click", function () {
    container.classList.remove("show-nav");
});
