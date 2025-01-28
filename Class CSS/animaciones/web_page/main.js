document.querySelectorAll(".header__nav-link").forEach(element => {
    element.addEventListener("click", () => {
        document.querySelector("#open-menu").checked = false;
    })
});