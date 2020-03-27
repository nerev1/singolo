//-------------------------------------------------------------------------------navigation
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

//-------------------------------------------------------------------------------slider

let sliderSize = document.querySelector('.slider-content').offsetWidth;
let slides = document.querySelectorAll('.slide');
let slideAmount = slides.length;
let activeSlide = 0;

function leftHandler() {
    
    let previousSlide = activeSlide == 0 ? slideAmount - 1 : activeSlide - 1;
    slides[activeSlide].classList.add('active-to-right');
    slides[previousSlide].classList.add('left-to-active');
    
    slides[activeSlide].addEventListener('animationend', event => {
        event.target.classList.remove('active-to-right');
        event.target.classList.remove('slide_active');
    });
    
    slides[previousSlide].addEventListener('animationend', event => {
        event.target.classList.remove('left-to-active');
        event.target.classList.add('slide_active');
    });
    activeSlide = previousSlide;
}

function rightHandler() {
    
    let nextSlide = activeSlide == slideAmount - 1 ? 0 : activeSlide + 1;
    slides[activeSlide].classList.add('active-to-left');
    slides[nextSlide].classList.add('right-to-active');
    
    slides[activeSlide].addEventListener('animationend', event => {
        event.target.classList.remove('active-to-left');
        event.target.classList.remove('slide_active');
    });
    
    slides[nextSlide].addEventListener('animationend', event => {
        event.target.classList.remove('right-to-active');
        event.target.classList.add('slide_active');
    });
    activeSlide = nextSlide;
}

document.querySelector('.arrow_left').addEventListener('click', leftHandler);

document.querySelector('.arrow_right').addEventListener('click', rightHandler);

//-------------------------------------------------------------------------------phones
let phoneVertical = document.querySelector('.phone_vertical');
let phoneHorizontal = document.querySelector('.phone_horizontal');

phoneVertical.querySelector('.phone__button').addEventListener('click', turnOffVertical);

function turnOffVertical(event) {
    phoneVertical.querySelector('.phone__screen').classList.toggle('phone__screen_turned-off');
}

phoneHorizontal.querySelector('.phone__button').addEventListener('click', turnOffHorizontal);

function turnOffHorizontal(event) {
    phoneHorizontal.querySelector('.phone__screen').classList.toggle('phone__screen_turned-off');
}

//-------------------------------------------------------------------------------portfolio
let tagList = document.querySelectorAll('.tag');

    [].forEach.call(tagList, item => {
        item.addEventListener('click', tagHandler);
    });

function tagHandler(event) {
    let imageList = document.querySelectorAll('.portfolio__image');
    if (!event.target.classList.contains('tag_active')) {
        for (let tag of tagList) {
            tag.classList.remove('tag_active');
        }
        event.target.classList.add('tag_active');
        document.querySelector('.portfolio__images .layout-column').append(imageList[0]);
    }
}

let imageList = document.querySelectorAll('.portfolio__image');

[].forEach.call(imageList, (image) => {
    image.addEventListener('mouseover', addImageBorderHover);
    image.addEventListener('mouseout', removeImageBorderHover);
    image.addEventListener('click', setActive);
});

function addImageBorderHover(event) {
    event.target.closest('.portfolio__image').classList.add('portfolio__image_hovered');
}

function removeImageBorderHover(event) {
    event.target.closest('.portfolio__image').classList.remove('portfolio__image_hovered');
}

function setActive() {
    for (let image of imageList) {
        image.classList.remove('.portfolio__image_active');
    }
    event.target.closest('.portfolio__image').classList.add('portfolio__image_active');
}