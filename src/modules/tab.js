function tab(){
    const parent = document.querySelector('.tabheader__items');
    const genre = parent.querySelectorAll('.tabheader__item');
    const content = document.querySelectorAll('.tabcontent');
     // Tab
     function invise(){
        content.forEach((item) => {
            item.classList.remove('show', 'fade');
            item.classList.add('hide');
        })
        genre.forEach((item) => {
            item.classList.remove('tabheader__item_active')
        })
    }
    function visible (i = 0){
        content[i].classList.add('show', 'fade');
        content[i].classList.remove('hide');
        genre[i].classList.add('tabheader__item_active');
    }

    invise();
    visible();

    parent.addEventListener('click', logic);

    function logic(evt){
        const target = evt.target;
        if (target && target.classList.contains('tabheader__item')){  
            genre.forEach((item, idx) => {
                if (target == item){
                    invise();
                    visible(idx);
                }
            })
        }
    }
}

module.exports = tab