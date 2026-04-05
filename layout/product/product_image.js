(function ($) {
  // GIF 추가 이미지 - 재생 아이콘 표시
  function initGifPlayIcons() {
    $('.gif-play-icon').each(function () {
      var img = $(this).closest('li').find('img')[0];
      if (img && /\.gif(\?|$)/i.test(img.src)) {
        $(this).removeClass('hidden');
      }
    });
  }

  // 썸네일 클릭 → 메인 이미지 교체
  function initThumbSwitch() {
    var $mainImg = $('#prdBigImg');
    var $thumbs = $('.xans-product-addimage ul > li');
    var originalSrc = $mainImg.attr('src');

    // 각 썸네일에 big URL 미리 저장 (첫 번째는 {$big_img} URL 그대로 사용)
    $thumbs.each(function (i) {
      var img = $(this).find('img')[0];
      if (!img) return;
      var bigSrc = i === 0 ? originalSrc : img.src.replace('/small/', '/big/');
      $(this).data('bigSrc', bigSrc);
    });

    $thumbs.first().attr('data-active', '');

    $thumbs.on('click', function () {
      var bigSrc = $(this).data('bigSrc');
      if (!bigSrc) return;

      $mainImg.attr('src', bigSrc);
      $thumbs.removeAttr('data-active');
      $(this).attr('data-active', '');
    });
  }

  $(function () {
    initGifPlayIcons();
    initThumbSwitch();
  });
})(jQuery);
