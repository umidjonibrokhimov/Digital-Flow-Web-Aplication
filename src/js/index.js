window.addEventListener('DOMContentLoaded', () => {
    // Menu
    let menuBtn = document.querySelector('#menu-btn'),
       closeBtn = document.querySelector('#close-btn'),
       menuCont = document.querySelector('[data-headerMenuModal]')

    menuBtn.addEventListener('click', () => {
        document.body.classList.add('active-menu');
    })


    closeBtn.addEventListener('click', () => {
        document.body.classList.toggle('active-menu');
    })

    menuCont.addEventListener('click', (e) => {
        if(e.target === menuCont){
        document.body.classList.remove('active-menu');
        }
    }) // end menu

    // Header
    let header = document.querySelector('#header');

    window.addEventListener('scroll' , () => {
        if (window.pageYOffset > 120) {
            header.classList.add("active-header");
        }else{
            header.classList.remove("active-header");
        }
    })
})