$(".products__list").slick({
  responsive: [
    { breakpoint: 9999, settings: "unslick" },
    {
      breakpoint: 767,
      settings: {
        dots: !0,
        infinite: !0,
        speed: 300,
        slidesToShow: 1,
        dotsClass: "products__dots",
      },
    },
  ],
});

$(document).ready(function () {
  $(".responsive").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
