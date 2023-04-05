$(document).ready(function(){
    $('.carousel__inner').slick(
        {
            speed: 1200,
            adaptiveHeight: true,
            prevArrow: '<button type="button" class="slick-prev"><img src="/src/icons/chevron-left-solid.png" alt="left chevron"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="/src/icons/chevron right solid.png" alt="right chevron"</button>',
            responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false
                  }
                },
              ]
        });
        $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
          $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
        });

        $('.catalog-item__link').each(function(i) {
          $(this).on('click', function (e){
            e.preventDefault();
            $('.catalog-item__content').toggleClass('.')
            })

        })
});



