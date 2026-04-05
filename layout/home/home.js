window.addEventListener('load', function () {
  new Swiper('#hero .swiper-container', {
    effect: 'fade',
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: false },
    pagination: { el: '#heroPagination', clickable: true },
  });

  document.querySelectorAll('[data-drag-scroll]').forEach(function (el) {
    var active = false;
    var dragged = false;
    var startX;
    var scrollLeft;

    el.addEventListener('mousedown', function (e) {
      active = true;
      dragged = false;
      startX = e.pageX;
      scrollLeft = el.scrollLeft;
      el.style.cursor = 'grabbing';
      el.style.userSelect = 'none';
      e.preventDefault();
    });

    document.addEventListener('mouseup', function () {
      if (!active) return;
      active = false;
      el.style.cursor = '';
      el.style.userSelect = '';
    });

    document.addEventListener('mousemove', function (e) {
      if (!active) return;
      var dx = e.pageX - startX;
      if (Math.abs(dx) > 4) dragged = true;
      el.scrollLeft = scrollLeft - dx;
    });

    el.addEventListener(
      'click',
      function (e) {
        if (dragged) {
          dragged = false;
          e.preventDefault();
          e.stopPropagation();
        }
      },
      true,
    );
  });
});
