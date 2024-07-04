const btnOpen = document.getElementById("btnOpentNav");
const btnClose = document.getElementById("btnCloseNav");
const navLinks = document.querySelectorAll(".nav-link");

const openNav = () => {
  btnOpen.setAttribute("aria-expanded", "true");
};
const closeNav = () => {
  btnOpen.setAttribute("aria-expanded", "false");
};

btnOpen.addEventListener("click", openNav);
btnClose.addEventListener("click", closeNav);

navLinks.forEach((link) => {
  link.addEventListener("click", closeNav);
});
