$(function() {

    $('.btn-services').click(function (e) {
        e.preventDefault();

        if ($(this).hasClass('btn-services_active')) {
            $('.services__list').slideUp(300);
            $(this).removeClass('btn-services_active');
            $(this).text('Открыть полную карту услуг');
        } else {
            $('.services__list').slideDown(300);
            $(this).addClass('btn-services_active');
            $(this).html('Свернуть <img src="img/services/icon-arrow.svg" class="btn__icon">');
        }
    });

    $('.services__more').click(function () {
       $('.services__row_style').slideDown(300);
       $(this).hide();
    });

});
