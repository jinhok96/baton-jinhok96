(function () {
  'use strict';

  function initFixedSheet() {
    var openBtn = document.getElementById('fixedSheetOpen');
    var closeBtn = document.getElementById('fixedSheetClose');
    var backdrop = document.getElementById('fixedSheetBackdrop');
    var sheet = document.getElementById('fixedSheet');
    var scrollContent = document.getElementById('fixedSheetScrollContent');
    var actionContent = document.getElementById('fixedSheetActionContent');
    var scrollArea = document.getElementById('productScrollArea');
    var scrollSentinel = document.getElementById('productScrollAreaSentinel');
    var actionArea = document.getElementById('productActionArea');
    var actionSentinel = document.getElementById('productActionAreaSentinel');
    var totalPriceWrapper = document.getElementById('productTotalPriceWrapper');
    var actionWrapper = document.getElementById('productActionWrapper');

    if (!openBtn || !sheet || !scrollArea || !actionArea) return;

    function openSheet() {
      // 시트용 스타일로 교체 (원래: py-2, 액션: 래퍼 없음)
      if (totalPriceWrapper) totalPriceWrapper.className = 'py-2';
      if (actionWrapper) actionWrapper.className = '';

      scrollContent.appendChild(scrollArea);
      actionContent.appendChild(actionArea);
      sheet.classList.remove('translate-y-full');
      sheet.classList.add('translate-y-0');
      backdrop.classList.remove('opacity-0', 'pointer-events-none');
      backdrop.classList.add('opacity-100', 'pointer-events-auto');
      document.body.style.overflow = 'hidden';
    }

    function closeSheet() {
      scrollSentinel.after(scrollArea);
      actionSentinel.after(actionArea);

      // 메인 페이지용 스타일 복원
      if (totalPriceWrapper) totalPriceWrapper.className = 'p-4';
      if (actionWrapper) actionWrapper.className = 'flex flex-col gap-4 p-4';

      sheet.classList.remove('translate-y-0');
      sheet.classList.add('translate-y-full');
      backdrop.classList.remove('opacity-100', 'pointer-events-auto');
      backdrop.classList.add('opacity-0', 'pointer-events-none');
      document.body.style.overflow = '';
    }

    openBtn.addEventListener('click', openSheet);
    if (closeBtn) closeBtn.addEventListener('click', closeSheet);
    if (backdrop) backdrop.addEventListener('click', closeSheet);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFixedSheet);
  } else {
    initFixedSheet();
  }
})();
