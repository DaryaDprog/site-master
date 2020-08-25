let filters = document.querySelectorAll('.filter__title');

filters.forEach( filter => {
    filter.addEventListener('click', () => {
        filter.classList.toggle('active');
    });
});


let check = document.querySelectorAll('.location-item'),
    locationBtn = document.querySelector('.location-btn');

    check.forEach((e)=>{
        e.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
    locationBtn.addEventListener('click', function(event) {
        event.preventDefault();
        check.forEach((e)=>{
            e.classList.remove('active');
            locationBtn.classList.add('active');
        });
    });


let row = document.querySelector('.main__row'),
    mainBtn = document.querySelector('.main__btn');

    mainBtn.addEventListener('click', function() {
        event.preventDefault();

        let rows = row.cloneNode(true);
        row.after(rows);
    });

let extraItems = document.querySelector('.item-extra'),
    items = document.querySelector('.extra-items'); 

extraItems.addEventListener('click', function() {
    extraItems.style.display = 'none';
    items.style.display = 'block';
});
   
let dropFiltersBtn = document.querySelector('.filter-btn--disabled');

let all = document.querySelectorAll('input');

let form = document.forms['main_form'];
let l = document.getElementsByName('location');

dropFiltersBtn.addEventListener('click', function(event) {
    event.preventDefault();

               for(let i=0;i<form.elements.length;i++) {
                if(form.elements[i].checked) {
                    form.elements[i].checked=false;
                    l.forEach((el) => {
                        el.classList.remove('active');
                    });
                }
            }
   

    // function clearCheckBoxes() {
    //         var form=document.forms['main_form'];
            
    //         for(var i=0;i<form.elements.length;i++) {
    //             if(form.elements[i].checked) {
    //                 form.elements[i].checked=false;
    //             }
    //         }
        
    //     }
    

});