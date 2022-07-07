export function changeHeaderColor() {
    const header = document.querySelector('.header');
    const submenu = document.querySelector('.header__submenu');

    if (location.href.includes('contact.html')) {
        header.classList.add('header_contact');
        submenu.classList.add('header__submenu_blue')
    }
}