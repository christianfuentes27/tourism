window.addEventListener('load', () => {
    new Glider(document.querySelector('.glider-1'), {
        slidesToShow: 1,
        dots: '.glider-dots'
    });

    new Glider(document.querySelector('.glider-2'), {
        slidesToShow: 1,
        dots: '.glider-dots2'
    });

    new Glider(document.querySelector('.glider-3'), {
        slidesToShow: 1,
        dots: '.glider-dots3'
    });
});

// document.querySelectorAll('.glider-dot');
// .forEach((dot, index) => {
//     dot.setAttribute('day', index);
// })