import Swiper, { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.routes-container', {
    direction: 'horizontal',
    pagination: {
        el: '.swiper-pagination'
    }
});

swiper.slideNext();