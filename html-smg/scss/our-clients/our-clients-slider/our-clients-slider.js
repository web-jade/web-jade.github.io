$(function() {

    var owlClients = $('.our-clients-slider').owlCarousel({
        items: 4,
        loop: true,
        smartSpeed: 700,
        nav: false,
        dots: true,
        margin: 40,
        responsive: {
            0: {
                items: 1,
                mouseDrag: true,
            },
            576: {
                items: 2,
                mouseDrag: true,
            },
            768: {
                items: 3,
                mouseDrag: true,
            },
            992: {
                items: 3,
                mouseDrag: true,
            },
            1200: {
                items: 4,
                mouseDrag: false,
            }
        },
        // navText: ['<img class="our-clients-slider__arrow" src="img/our-clients/icons/left-arrow.svg" alt="Left">', '<img class="our-clients-slider__arrow" src="img/our-clients/icons/right-arrow.svg" alt="Right">']
    });

    $('.our-clients-slider__arrow_right').click(function() {
        owlClients.trigger('next.owl.carousel');
    })

    $('.our-clients-slider__arrow_left').click(function() {
        owlClients.trigger('prev.owl.carousel');
    })

});
