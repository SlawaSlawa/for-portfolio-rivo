const burgerEl = document.querySelector(".burger-btn");

function burgerToggle() {
    const navEl = burgerEl
        .closest(".header__wrapper")
        .querySelector(".nav__list");
    burgerEl.classList.toggle("burger-btn--active");
    navEl.classList.toggle("nav__list--active");
}

burgerEl.addEventListener("click", burgerToggle);
console.log('script2');
console.log('script3!');