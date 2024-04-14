// CHANGING NAVBAR STYLES ON SCROLL 

window.addEventListener('scroll',() =>{
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY>0)
})


// show/hide faq answer

document.addEventListener('DOMContentLoaded', function () {
    const faqs = document.querySelectorAll('.faq');

    faqs.forEach(faq => {
        faq.addEventListener('click', () => {
            faq.classList.toggle('open');

            const icon = faq.querySelector('.faq__icon i');
            if (icon.classList.contains('uil-plus')) {
                icon.classList.replace('uil-plus', 'uil-minus');
            } else {

                icon.classList.replace('uil-minus', 'uil-plus');
            }

            const answer = faq.querySelector('.faq');
            answer.style.display = faq.classList.contains('open') ? 'block' : 'none';
        });
    });
});        



const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
});

closeBtn.addEventListener('click', () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
});

// show/hide nav menu



// const menu = document.querySelector(".nav__menu");
// const menuBtn = document.querySelector("#open-menu-btn");
// const closeBtn = document.querySelector("#close-menu-btn");


// menuBtn.addEventListener('click', () => {
//     menu.style.display = "flex";
//     closeBtn.style.display = "inline-block";
//     menuBtn.style.display = "none";
// })