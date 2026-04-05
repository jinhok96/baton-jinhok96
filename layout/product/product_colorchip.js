(function () {
  'use strict';

  function initColorChip() {
    var chipList = document.getElementById('colorChipList');
    var bigImg = document.getElementById('colorChipBigImg');
    if (!chipList || !bigImg) return;

    // 옵션 영역에서 이미지 목록 수집
    var optionImgs = document.querySelectorAll('.xans-product-option ul li img');
    if (!optionImgs.length) {
      var section = chipList.closest('section');
      if (section) section.style.display = 'none';
      return;
    }

    var chips = [];

    optionImgs.forEach(function (img) {
      var chip = document.createElement('button');
      chip.type = 'button';
      chip.className =
        'data-active:border-color-tertiary border-color-primary bg-primary flex items-center justify-center border border-solid p-1 relative rounded shrink-0';

      var inner = document.createElement('div');
      inner.className = 'relative size-8 shrink-0 overflow-hidden rounded-[2px]';

      var chipImg = document.createElement('img');
      chipImg.src = img.src;
      chipImg.alt = img.alt || '';
      chipImg.className = 'absolute inset-0 size-full object-cover';

      inner.appendChild(chipImg);
      chip.appendChild(inner);
      chipList.appendChild(chip);
      chips.push({ el: chip, src: img.src });
    });

    function activate(index) {
      chips.forEach(function (c, i) {
        if (i === index) {
          c.el.setAttribute('data-active', '');
        } else {
          c.el.removeAttribute('data-active');
        }
      });

      var bigSrc = chips[index].src.replace('/small/', '/big/');
      bigImg.src = bigSrc;
      bigImg.alt = chips[index].el.querySelector('img').alt;
    }

    chips.forEach(function (c, i) {
      c.el.addEventListener('click', function () {
        activate(i);
      });
    });

    if (chips.length > 0) activate(0);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initColorChip);
  } else {
    initColorChip();
  }
})();
