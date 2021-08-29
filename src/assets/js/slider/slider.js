window.onload =function(){
$('.autoplay').slick({
    dots: false,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: null,
    nextArrow: null,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });}