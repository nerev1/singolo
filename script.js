let menuList = document.querySelector('.menu');

menuList.addEventListener('click', (event) => {
    event.preventDefault();
    let menuItems = document.querySelectorAll('.menu__link');
    let target = event.target;
    for (let link of menuItems) {
        link.classList.remove('menu__link_active');
    }
    target.classList.add('menu__link_active');
});

let menuLinks = document.querySelectorAll('.menu__link');

for (let link of menuLinks) {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        let blockID = link.getAttribute('href');
        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
    })
}


let arrowLeft = document.querySelector('.arrow_left');
let arrowRight = document.querySelector('.arrow_right');
let sliderImages = document.querySelectorAll('slider-block');

arrowLeft.addEventListener('click', (event) => {
    document.querySelector('.slider__wrapper').append(document.querySelector('.slider-block'));

    for (item of document.querySelectorAll('.slider-block')) {
        item.classList.remove('slider-block_active');
    }
    document.querySelector('.slider-block').classList.add('slider-block_active');
});

arrowRight.addEventListener('click', (event) => {
    document.querySelector('.slider__wrapper').prepend(document.querySelector('.slider-block:last-of-type'));

    for (item of document.querySelectorAll('.slider-block')) {
        item.classList.remove('slider-block_active');
    }
    document.querySelector('.slider-block:last-of-type').classList.add('slider-block_active');
});