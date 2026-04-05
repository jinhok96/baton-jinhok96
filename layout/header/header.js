(function ($) {
  var drawer = {
    aSubCategory: {},
    isOpen: false,

    // Cafe24 API에서 서브카테고리 데이터 가져오기
    fetchSubCategories: function () {
      $.ajax({
        url: '/exec/front/Product/SubCategory',
        dataType: 'json',
        success: function (aData) {
          if (!aData) {
            drawer.checkNoChildItems();
            drawer.setActiveCategory();
            return;
          }
          for (var i = 0; i < aData.length; i++) {
            var sParentCateNo = aData[i].parent_cate_no;
            if (!drawer.aSubCategory[sParentCateNo]) {
              drawer.aSubCategory[sParentCateNo] = [];
            }
            drawer.aSubCategory[sParentCateNo].push(aData[i]);
          }
          drawer.checkNoChildItems();
          drawer.setActiveCategory();
        },
      });
    },

    // 현재 페이지 카테고리 활성화 (underline)
    setActiveCategory: function () {
      // 쿼리 파라미터 방식 (?cate_no=43) 또는 pretty URL 방식 (/category/name/24/) 모두 처리
      var iCurrentCateNo = Number(drawer.getParam(window.location.href, 'cate_no'));
      if (!iCurrentCateNo) {
        var aParts = window.location.pathname.split('/');
        var iCateIdx = aParts.indexOf('category');
        if (iCateIdx !== -1) {
          for (var j = iCateIdx + 1; j < aParts.length; j++) {
            if (/^\d+$/.test(aParts[j])) {
              iCurrentCateNo = Number(aParts[j]);
              break;
            }
          }
        }
      }
      if (!iCurrentCateNo) return;

      // nav [cate] 항목들의 cate_no 목록 수집 (대분류 레벨)
      var aNavCateNos = [];
      $('[cate]').each(function () {
        var n = Number(drawer.getParam($(this).attr('cate'), 'cate_no'));
        if (n) aNavCateNos.push(n);
      });

      // 현재 cate_no에서 출발해 nav 항목에 도달할 때까지 부모를 탐색
      var iActiveCateNo = 0;
      var iLookup = iCurrentCateNo;
      for (var depth = 0; depth < 5; depth++) {
        if (aNavCateNos.indexOf(iLookup) !== -1) {
          iActiveCateNo = iLookup;
          break;
        }
        var iParent = 0;
        for (var sP in drawer.aSubCategory) {
          var aSubs = drawer.aSubCategory[sP];
          for (var i = 0; i < aSubs.length; i++) {
            if (Number(aSubs[i].cate_no) === iLookup) {
              iParent = Number(sP);
              break;
            }
          }
          if (iParent) break;
        }
        if (!iParent) break;
        iLookup = iParent;
      }

      if (iActiveCateNo) {
        // 대분류 nav 항목 밑줄
        $('[cate]').each(function () {
          if (Number(drawer.getParam($(this).attr('cate'), 'cate_no')) === iActiveCateNo) {
            $(this).addClass('underline');
          }
        });
      } else if (iCurrentCateNo === 43) {
        // 전체 페이지 직접 접근
        $('a[href*="cate_no=43"]').not('[cate]').addClass('underline');
      }
    },

    // 하위 카테고리가 없는 항목의 화살표 버튼 숨기기
    checkNoChildItems: function () {
      $('#drawerCateList .drawer__cate-item').each(function () {
        var sParam = $(this).find('.drawer__cate-link').attr('cate');
        if (!sParam) {
          $(this).find('.drawer__cate-arrow').addClass('hidden');
          return;
        }
        var iCateNo = Number(drawer.getParam(sParam, 'cate_no'));
        if (!drawer.aSubCategory[iCateNo]) {
          $(this).find('.drawer__cate-arrow').addClass('hidden');
        }
      });
    },

    getParam: function (sUrl, sKey) {
      if (typeof sUrl !== 'string') return undefined;
      var aUrl = sUrl.split('?');
      var aParam = {};
      var sQueryString = aUrl[1];
      if (sQueryString) {
        var aFields = sQueryString.split('&');
        for (var i = 0; i < aFields.length; i++) {
          var aField = aFields[i].split('=');
          aParam[aField[0]] = aField[1];
        }
      }
      return sKey ? aParam[sKey] : aParam;
    },

    // 스크롤바 너비 계산 함수
    getScrollbarWidth: function () {
      return window.innerWidth - document.documentElement.clientWidth;
    },

    // 드로어 열기
    open: function () {
      var scrollbarWidth = drawer.getScrollbarWidth();

      $('#slideMenuWrap').removeClass('translate-x-full').addClass('translate-x-0').attr('aria-hidden', 'false');

      // 스크롤 방지 및 레이아웃 시프트 방지
      $('body').css({
        overflow: 'hidden',
        'padding-right': scrollbarWidth + 'px',
      });

      // 헤더 오른쪽에 여백 추가해서 레이아웃 시프트 방지
      $('#header').css('right', scrollbarWidth + 'px');

      drawer.isOpen = true;
    },

    // 드로어 닫기
    close: function () {
      $('#slideMenuWrap').removeClass('translate-x-0').addClass('translate-x-full').attr('aria-hidden', 'true');

      // 스크롤 및 여백 복구
      $('body').css({
        overflow: '',
        'padding-right': '',
      });
      $('#header').css('right', '');

      drawer.isOpen = false;
      drawer.hide2depth();
    },

    // 2depth 패널 표시
    show2depth: function (iCateNo, sCateName) {
      var aSubs = drawer.aSubCategory[iCateNo];
      if (!aSubs || aSubs.length === 0) return;

      var aHtml = [];
      for (var i = 0; i < aSubs.length; i++) {
        var sub = aSubs[i];
        aHtml.push('<li class="text-h4 text-primary" id="cate' + sub.cate_no + '">');
        aHtml.push(
          '<a href="/product/list.html' +
            sub.param +
            '" data-i18n="LIST.PRD_CATE_NO_' +
            sub.cate_no +
            '" data-i18n-new>' +
            sub.name +
            '</a>',
        );
        aHtml.push('</li>');
      }

      $('#drawerSubList').html(aHtml.join(''));
      $('#drawerBackLabel').text(sCateName);
      $('#drawerPanel1').addClass('-translate-x-full');
      $('#drawerPanel2').removeClass('translate-x-full').addClass('translate-x-0');

      if (window.i18nextCafe24) {
        i18nextCafe24.translate('data-i18n-new');
      }
    },

    // 2depth 패널 숨기기
    hide2depth: function () {
      $('#drawerPanel2').removeClass('translate-x-0').addClass('translate-x-full');
      $('#drawerPanel1').removeClass('-translate-x-full');
      $('#drawerSubList').empty();
    },
  };

  $(function () {
    drawer.fetchSubCategories();
    drawer.setActiveCategory();

    // 드로어 열기
    $(document).on('click', '#btnDrawerOpen', function () {
      drawer.open();
    });

    // 드로어 닫기
    $(document).on('click', '#btnDrawerClose', function () {
      drawer.close();
    });

    // 1depth → 2depth 전환 (하위 분류 있으면 패널 열기, 없으면 링크 이동)
    $(document).on('click', '#drawerCateList .drawer__cate-link', function (e) {
      var sParam = $(this).attr('cate');
      if (!sParam) return;
      var iCateNo = Number(drawer.getParam(sParam, 'cate_no'));
      if (!drawer.aSubCategory[iCateNo]) return;
      e.preventDefault();
      var sCateName = $(this).find('span').first().text().trim();
      drawer.show2depth(iCateNo, sCateName);
    });

    // 2depth → 1depth 뒤로가기
    $(document).on('click', '#btnDrawerBack', function () {
      drawer.hide2depth();
    });

    // ESC 키로 닫기
    $(document).on('keydown', function (e) {
      if (e.key === 'Escape' && drawer.isOpen) {
        drawer.close();
      }
    });

    // 화면 리사이즈 시 스크롤 복구; 디바운스 0.2초
    var resizeTimer;
    $(window).on('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        if (window.innerWidth >= 768 && drawer.isOpen) {
          drawer.close();
        }
      }, 200);
    });
  });
})(jQuery);
