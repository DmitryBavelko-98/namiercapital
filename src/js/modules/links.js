export function changeLinks() {
    const links = document.querySelectorAll('.nav-link');
    const path = document.querySelector('.intro__path');

    for (let i = 0; i < links.length; i++) {
        const lower = links[i].innerHTML.toLowerCase();
        links[i].classList.remove('current-link');
        if (location.href.includes(lower)) {
            links[i].classList.add('current-link');
            path.innerHTML = links[i].innerHTML;
        }
    }
}

