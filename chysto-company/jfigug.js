let toLeft = document.querySelector('.arrow-left');
let toRight = document.querySelector('.arrow-right');
let slider = document.querySelector('.item-wrap');


// let sliderItem = document.querySelectorAll('.slider-item')


toLeft.addEventListener('click', function () {
    if (slider.scrollLeft <= 0) {
        slider.scrollLeft += slider.scrollWidth;
    }
    else {
        slider.scrollLeft -= 400;
    }

})


toRight.addEventListener('click', function () {
    let maxScrollRight = slider.scrollWidth - slider.clientWidth;
    if (slider.scrollLeft >= maxScrollRight - 1) {
        slider.scrollLeft -= slider.scrollWidth;
    }
    else {
        slider.scrollLeft += 400;
    }
})


// --------------------
let orderBtn = document.querySelector('.order-btn');
let formRegister = document.querySelector('.form-register');
let divClose = document.querySelector('.close');


divClose.onclick = function () {
    formRegister.style.opacity = 0;
    setTimeout(() => {
        formRegister.style.display = 'none';
    }, 500);
    document.body.style.overflow = '';
}
orderBtn.onclick = function () {
    formRegister.style.display = 'flex';
    setTimeout(() => {
        formRegister.style.opacity = 1;

    }, 100);
    document.body.style.overflow = 'hidden';

}