window.addEventListener('load', () => {
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 1,
        dots: '.glider-dots'
    });
});

// document.querySelectorAll('.glider-dot');
// .forEach((dot, index) => {
//     dot.setAttribute('day', index);
// })