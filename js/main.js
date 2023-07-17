// Фильтр на портфолио
var mixed = mixitup ('.container-filter');

// Плавная прокрутка
$(document).ready(function () {
    $('a[href^="#"]').click (function () {
        let target = $(this).attr('href');
        $('html, body').animate ({
            scrollTop: $(target).offset().top
        }, 500);
        return false;
    });

  // Кнопка наверх
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) 
        $('#toTop').fadeIn();
        else $('#toTop').fadeOut();
    });
    $('#toTop').click(function () {
        $('body, html').animate(
        {
            scrollTop: 0,
        },
        500
        );
    });
});