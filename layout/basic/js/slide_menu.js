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
        },
      });
    },

    // 하위 카테고리가 없는 항목에 noChild 클래스 부여
    checkNoChildItems: function () {
      $('#drawerCateList .drawer__cate-item').each(function () {
        var sParam = $(this).find('.drawer__cate-arrow').attr('cate');
        if (!sParam) {
          $(this).addClass('noChild');
          return;
        }
        var iCateNo = Number(drawer.getParam(sParam, 'cate_no'));
        if (!drawer.aSubCategory[iCateNo]) {
          $(this).addClass('noChild');
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

    // 드로어 열기
    open: function () {
      $('#slideMenuWrap').addClass('is-open').attr('aria-hidden', 'false');
      $('#drawerBackdrop').addClass('is-open');
      document.body.style.overflow = 'hidden';
      drawer.isOpen = true;
    },

    // 드로어 닫기
    close: function () {
      $('#slideMenuWrap').removeClass('is-open').attr('aria-hidden', 'true');
      $('#drawerBackdrop').removeClass('is-open');
      document.body.style.overflow = '';
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
        aHtml.push('<li class="drawer__cate-item noChild" id="cate' + sub.cate_no + '">');
        aHtml.push(
          '<a href="/product/list.html' +
            sub.param +
            '" class="drawer__cate-link view"' +
            ' data-i18n="LIST.PRD_CATE_NO_' +
            sub.cate_no +
            '" data-i18n-new>' +
            sub.name +
            '</a>',
        );
        aHtml.push('</li>');
      }

      $('#drawerSubList').html(aHtml.join(''));
      $('#drawerBackLabel').text(sCateName);
      $('#drawerPanel2').addClass('is-active');

      if (window.i18nextCafe24) {
        i18nextCafe24.translate('data-i18n-new');
      }
    },

    // 2depth 패널 숨기기
    hide2depth: function () {
      $('#drawerPanel2').removeClass('is-active');
      $('#drawerSubList').empty();
    },
  };

  $(function () {
    // 헤더 로고 텍스트를 드로어 로고에 복사
    var headerLogoText = $('.header__logo a').text().trim();
    if (headerLogoText) {
      $('.drawer__logo').text(headerLogoText);
    }

    drawer.fetchSubCategories();

    // 드로어 열기
    $(document).on('click', '#btnDrawerOpen', function () {
      drawer.open();
    });

    // 드로어 닫기
    $(document).on('click', '#btnDrawerClose, #btnDrawerClose2', function () {
      drawer.close();
    });

    // 백드롭 클릭 시 닫기
    $(document).on('click', '#drawerBackdrop', function () {
      drawer.close();
    });

    // 1depth → 2depth 전환
    $(document).on('click', '#drawerCateList .drawer__cate-arrow', function (e) {
      e.preventDefault();
      var sParam = $(this).attr('cate');
      if (!sParam) return;
      var iCateNo = Number(drawer.getParam(sParam, 'cate_no'));
      var sCateName = $(this).closest('.drawer__cate-item').find('.drawer__cate-link').text().trim();
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
  });
})(jQuery);
