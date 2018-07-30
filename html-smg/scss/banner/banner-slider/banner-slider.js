$(function() {

    $('.banner-slider').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: true,
        mouseDrag: false,
        smartSpeed: 700,
        navText: ['<img class="banner-slider__arrow" src="img/banner/icons/arrow-left.png" alt="Left">', '<img class="banner-slider__arrow" src="img/banner/icons/arrow-right.png" alt="Right">']
    });

});
