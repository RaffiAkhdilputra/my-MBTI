const navbar = document.querySelector("#nav-btn");
const navbarMenu = document.querySelector(".sidebar");

navbar.addEventListener("click", () => {
    navbarMenu.classList.toggle("hidden")
});
