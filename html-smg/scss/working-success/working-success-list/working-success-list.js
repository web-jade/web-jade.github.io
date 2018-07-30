$(function () {

    $('.working-success-list').owlCarousel({
        items: 4,
        nav: false,
        dots: false,
        mouseDrag: false,
        smartSpeed: 700,
        responsive: {
            0: {
                items: 1,
                mouseDrag: true,
                nav: true,
            },
            576: {
                items: 2,
                mouseDrag: true,
                nav: true,
            },
            768: {
                items: 2,
                mouseDrag: true,
                nav: true,
            },
            992: {
                items: 4,
                mouseDrag: false,
            },
            1200: {
                items: 4,
                mouseDrag: false,
            }
        },
        navText: ['<img class="banner-slider__arrow" src="img/banner/icons/arrow-left.png" alt="Left">', '<img class="banner-slider__arrow" src="img/banner/icons/arrow-right.png" alt="Right">']

    });
});
