const barra = document.querySelector('.nav');
const botonBurger = document.querySelector('.header__button');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');

botonBurger.addEventListener('click', () => {
    const visibilidad = barra.getAttribute('data-visible');

    // console.log(visibilidad);

    if(visibilidad === 'false') {
        barra.setAttribute('data-visible', true);
        botonBurger.setAttribute('aria-expanded', true);
        overlay.classList.add('overlay-visible');
        body.classList.add('no-scroll');    
    

    } else {
        barra.setAttribute('data-visible', false);
        botonBurger.setAttribute('aria-expanded', false);
        overlay.classList.remove('overlay-visible');
        body.classList.remove('no-scroll');    
    }
    
})