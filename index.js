// active menu ///////

let menuLi = document.querySelectorAll("header ul li a");
let section = document.querySelectorAll("section");

function activeMenu() {
  let len = section.length;
  while (--len && window.scrollY * 97 < section[len].offsetTop) {}
  menuLi.forEach((sec) => sec.classList.remove("active"));
  menuLi[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);

// sticky navbar ///////

const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 50);
});

// toggle icon ///////
let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

window.onscroll = () => {
  menuIcon.classList.remove("bx-x");
  navlist.classList.remove("open");
};

// scroll reveal ///////

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home, .home-content", { origin: "top" });
ScrollReveal().reveal("home-image", { origin: "bottom" });
