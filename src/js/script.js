$(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        adaptiveHeight: false,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="./icons/prevArrow.svg" alt="arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./icons/nextArrow.svg" alt="arrow"></button>',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                        arrows: false,
                        dots: true
                    }
            },
        ]
      });
  });
      