$(function() {

    // Inline popups
    $('.mfp-block').magnificPopup({
        removalDelay: 500, //delay removal by X to allow out-animation
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
        midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    });

    // Poup phone
    $('.popup__input_phone').mask('7 (999) 999-99-99');

    $('.hamburger').click(function () {
       if ($(this).hasClass('is-active')) {
           $(this).removeClass('is-active');
           $('.navigation-menu').slideUp(300).css('visibility', 'hidden');
       } else {
           $(this).addClass('is-active');
           $('.navigation-menu').slideDown(300).css('visibility', 'visible');
       }
    });

});
