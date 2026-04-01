import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

export default [
  js.configs.recommended,
  prettier,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jquery,
        // Cafe24 platform globals
        EC_SHOP_MULTISHOP_SHIPPING: 'readonly',
        OrderHistory: 'readonly',
        Basket: 'readonly',
        SHOP_PRICE_FORMAT: 'readonly',
        sprintf: 'readonly',
        __: 'readonly',
        BASKET_CHK_ID_PREFIX: 'readonly',
        aBasketProductData: 'readonly',
        PRODUCT_COMMENT: 'readonly',
        APP_BOARD_UCC: 'readonly',
        i18nextCafe24: 'readonly',
        sSSUrl: 'readonly',
        ActiveXObject: 'readonly',
        getQueryString: 'readonly',
        zoom: 'writable',
        $xans_product_mobileimage_slider_0: 'readonly',
        // External libraries
        Swiper: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  },
  {
    ignores: ['js/swiper-bundle.js', '**/*.html'],
  },
];
