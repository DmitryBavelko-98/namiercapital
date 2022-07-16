export default function handleFilters() {
    if (location.href.includes('portfolio.html')) {
        const btns = document.querySelectorAll('.portfolio__btn'),
         cards = document.querySelectorAll('.card'),
         filters = document.querySelector('#portfolio__filters');

        function renderCards (filter) {
            cards.forEach(card => {
                const tags = Array.from(card.lastElementChild.lastElementChild.children)
                                    .map(tag => tag.innerHTML);
                card.classList.add('hide');
                if (tags.includes(filter.innerHTML)) {
                    card.classList.remove('hide')
                }
            });
        }

        function hideFilters () {
            btns.forEach(filter => {
                filter.classList.add('non-active');
                filter.setAttribute('disabled', 'disabled')
            })
        }

        function showFilter(filter) {
            filter.removeAttribute('disabled');
            filter.classList.remove('non-active');
            filter.classList.add('active');
            filter.nextElementSibling.classList.add('active');
        }

        function removeFilters() {
            btns.forEach(filter => {
                filter.removeAttribute('disabled');
                filter.classList.remove('non-active');
                filter.classList.remove('active');
                filter.nextElementSibling.classList.remove('active');      
            });
            cards.forEach(card => {
                card.classList.remove('hide');
            });
        }

        filters.addEventListener('click', (e) => {
            if (e.target.classList.contains('portfolio__btn')) {
                const target = e.target;
                renderCards(target)
                hideFilters();
                showFilter(target);
            }
            if (e.target.classList.contains('portfolio__cross')) {
                removeFilters();
            }
        });
    }
}



