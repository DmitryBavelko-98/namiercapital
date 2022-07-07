export function handleFilters() {
    const filters = document.querySelectorAll('.portfolio__btn');
    const crosses = document.querySelectorAll('#portfolio__cross');
    const cards = document.querySelectorAll('.card');

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
        filters.forEach(filter => {
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
        filters.forEach(filter => {
            filter.removeAttribute('disabled');
            filter.classList.remove('non-active');
            filter.classList.remove('active');
            filter.nextElementSibling.classList.remove('active');      
        });
        cards.forEach(card => {
            card.classList.remove('hide');
        });
    }

    filters.forEach(filter => {
        filter.addEventListener('click', (e) => {
            const target = e.target;
            renderCards(target)
            hideFilters();
            showFilter(target);
        });
    })

    crosses.forEach(cross => {
        cross.addEventListener('click', () => {
            removeFilters();
        })  
    })

}



