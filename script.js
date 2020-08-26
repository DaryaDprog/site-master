let filters = document.querySelectorAll('.filter__title'),
    check = document.querySelectorAll('.location-item'),
    locationBtn = document.querySelector('.location-btn'),
    row = document.querySelector('.item-main'),
    mainBtn = document.querySelector('.main__btn'),
    extraItems = document.querySelector('.item-extra'),
    items = document.querySelector('.extra-items'),
    dropFiltersBtn = document.querySelector('.filter-btn--disabled'),
    all = document.querySelectorAll('input'),
    form = document.forms['main_form'],
    l = document.getElementsByName('location');

    /* Render filters */

filters.forEach( filter => {
    filter.addEventListener('click', () => {
        filter.classList.toggle('active');
    });
});

check.forEach((e)=>{
    e.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});

/* Location drop filter */
locationBtn.addEventListener('click', function(event) {
    event.preventDefault();
    check.forEach((e)=>{
        e.classList.remove('active');
        locationBtn.classList.add('active');
    });
});

/* Add new row */
    mainBtn.addEventListener('click', function() {
        event.preventDefault();
        let row1 = row.cloneNode(true),
            row2 = row.cloneNode(true),
            row3 = row.cloneNode(true);
            row.after(row1);
            row.after(row2);
            row.after(row3);
    });

/* Open extra items is additional filter */
extraItems.addEventListener('click', function() {
    extraItems.style.display = 'none';
    items.style.display = 'block';
});

/* Drop all filters */
dropFiltersBtn.addEventListener('click', function(event) {
    event.preventDefault();

               for(let i = 0; i < form.elements.length; i++) {
                if(form.elements[i].checked) {
                    form.elements[i].checked = false;
                    l.forEach((el) => {
                        el.classList.remove('active');
                    });
                }
            }
});