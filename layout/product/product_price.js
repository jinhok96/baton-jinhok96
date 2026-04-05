(function () {
  function initPriceWrapper() {
    document.querySelectorAll('.price-wrapper').forEach(function (wrapper) {
      var salePriceEl = wrapper.querySelector('.sale-price');
      var saleRateEl = wrapper.querySelector('.sale-rate');
      if (!salePriceEl) return;

      var fullText = salePriceEl.textContent.trim();
      if (!fullText) return; // 비어있으면 CSS :empty 처리에 맡김

      // 할인율: "15%", "10.5%" 등 퍼센트 패턴 추출
      var rateMatch = fullText.match(/[\d.]+%/);
      // 판매가: 첫 번째 "숫자원" 패턴 추출
      var priceMatch = fullText.match(/[\d,]+원/);

      salePriceEl.textContent = priceMatch ? priceMatch[0] : fullText;
      if (saleRateEl) saleRateEl.textContent = rateMatch ? rateMatch[0] : '';
    });
  }

  document.addEventListener('DOMContentLoaded', initPriceWrapper);
})();
