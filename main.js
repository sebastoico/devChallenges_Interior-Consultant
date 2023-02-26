const mobileMenuIcon = document.querySelector(".mobile-menu__icon");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuCloseIcon = document.querySelector(".mobile-menu__close-icon");
const desktopSize = window.matchMedia("(min-width: 1024px)");

mobileMenuIcon.addEventListener("click", displayMobileMenu);
mobileMenuCloseIcon.addEventListener("click", displayMobileMenu);

window.addEventListener("resize", () => closeMobileMenu(desktopSize));

function displayMobileMenu() {
  mobileMenu.classList.toggle("mobile-menu--inactive");
}
function closeMobileMenu(desktopSize) {
  if (desktopSize.matches) {
    mobileMenu.classList.add("mobile-menu--inactive");
  }
}
