function modal(){
    const modalTriger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal'),
    body = document.querySelector('body');

    // modal section
    modalTriger.forEach(item => {
        item.addEventListener('click', openModal);
    });
    const timer = setTimeout(openModal, 5000)

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '' ) {
            closeModal();
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape'){
            closeModal();
        }
    })

    function openModal (){
        modal.classList.add('show')
        modal.classList.remove('hide')
        body.style.overflow = 'hidden';
        clearTimeout(timer)
    }
    function closeModal (){
        modal.classList.add('hide')
        modal.classList.remove('show')
        body.style.overflow = '';
    }

    function showModalByScroll (){
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
            openModal();
            window.removeEventListener('scroll', showModalByScroll)
        }
    }

    window.addEventListener('scroll', showModalByScroll)
}

module.exports = modal