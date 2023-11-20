const $burger_menu = document.querySelector(".header__menu-button");
const $list_menu = document.querySelector(".header__menu");
const $background_page = document.querySelector(".background-page");

const $tab_button = document.querySelectorAll(".tab__item");
const $tab_content = document.querySelector(".tab__content");

$burger_menu.addEventListener("click", () => {
    $list_menu.classList.toggle("header__menu--active");
    document.body.classList.toggle("lock");
});

// let previous_active = null;

// for (let i = 0; i < $tab_button.length; i++) {
//     for (let i = 0; i < $tab_button.length; i++) {
//         $tab_button[i].addEventListener("click", () => {
//             $tab_button[i].classList.add("tab--active");
//             previous_active.classList.remove("tab--active");
//         });
//     }
//     if ($tab_button[i].classList.contains("tab--active")) {
//         previous_active = $tab_button[i];
//     }
// }
