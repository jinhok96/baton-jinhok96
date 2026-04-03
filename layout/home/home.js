window.addEventListener('load', function () {
  new Swiper('#hero .swiper-container', {
    effect: 'fade',
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: false },
    pagination: { el: '#heroPagination', clickable: true },
  });
});
