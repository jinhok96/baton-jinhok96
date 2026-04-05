(function () {
  'use strict';

  // 탭 초기화
  function initDetailTabs() {
    var tabNav = document.getElementById('detailTabNav');
    if (!tabNav) return;

    var buttons = tabNav.querySelectorAll('.detail-tab-btn');
    var sections = document.querySelectorAll('.detail-tab-section');

    // 탭 클릭 → 스크롤
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var targetId = btn.getAttribute('data-target');
        var target = document.getElementById(targetId);
        if (!target) return;

        var navHeight = tabNav.offsetHeight;
        var headerHeight = document.getElementById('header') ? document.getElementById('header').offsetHeight : 0;
        var top = target.getBoundingClientRect().top + window.scrollY - headerHeight - navHeight;
        window.scrollTo({ top: top, behavior: 'smooth' });
      });
    });

    // 스크롤 → 활성 탭 업데이트 (IntersectionObserver)
    var activeClass = ['text-primary', 'border-b-2', 'border-color-tertiary'];
    var inactiveClass = ['text-tertiary'];

    function setActive(targetId) {
      buttons.forEach(function (btn) {
        var isActive = btn.getAttribute('data-target') === targetId;
        activeClass.forEach(function (c) {
          btn.classList.toggle(c, isActive);
        });
        inactiveClass.forEach(function (c) {
          btn.classList.toggle(c, !isActive);
        });
      });
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -65% 0px', threshold: 0 },
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });

    // 초기 활성화
    if (buttons.length > 0) setActive(buttons[0].getAttribute('data-target'));
  }

  // 회원등급 할인혜택 버튼
  // Cafe24가 생성한 ec-front-product-show-benefit-icon img의 product-no/benefit을
  // 커스텀 버튼에 복사하고 동일 클래스를 부여해 Cafe24 핸들러가 직접 실행되도록 함
  function initBenefitButton() {
    var icon = document.querySelector('img.ec-front-product-show-benefit-icon');
    var btn = document.querySelector('.discount-member-btn');
    if (!icon || !btn) return;

    btn.setAttribute('product-no', icon.getAttribute('product-no'));
    btn.setAttribute('benefit', icon.getAttribute('benefit'));

    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var tooltipExisted = !!document.querySelector('.ec-base-tooltip.discount_layer.member_rating');
      icon.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
      // 최초 클릭 시 Cafe24 핸들러가 요소를 생성만 하고 표시하지 않으므로 한 번 더 클릭
      if (!tooltipExisted) {
        setTimeout(function () {
          icon.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
        }, 0);
      }
    });
  }

  // 작성자 이름 마스킹 (첫 글자 + **)
  function maskWriterNames() {
    document.querySelectorAll('.writer-name').forEach(function (el) {
      var name = el.textContent.trim();
      if (name.length > 0) {
        el.textContent = name.charAt(0) + '**';
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initDetailTabs();
      initBenefitButton();
      maskWriterNames();
    });
  } else {
    initDetailTabs();
    initBenefitButton();
    maskWriterNames();
  }
})();
