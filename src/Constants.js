module.exports = {
  PRODUCTS_PER_PAGE: 100,
  PAGES_PER_CATALOG: 100,
  URLS: {
    MAIN_MENU: 'https://www.wildberries.ru/webapi/menu/main-menu-ru-ru.json',
    PRODUCT: {
      CONTENT: 'https://wbx-content-v2.wbstatic.net/ru/{}.json',
      STOCKS: 'https://wbxcatalog-ru.wildberries.ru/nm-2-card/catalog{}',
      DETAILS: 'https://card.wb.ru/cards/detail{}',
      EXTRADATA: 'https://www.wildberries.ru/webapi/product/{}',
    },
    SEARCH: {
      EXACTMATCH: 'https://wbxsearch.wildberries.ru/exactmatch/v2/female',
      TOTALPRODUCTS: 'https://search.wb.ru/exactmatch/ru/female/v3/search',
      CATALOG: 'https://wbxcatalog-ru.wildberries.ru/{}/catalog', // shardKey, queryParams, query
      ADS: 'https://catalog-ads.wildberries.ru/api/v5/search',
    },
    RECOMMENDATIONS: {
      SIMILAR_BY_NM: 'https://www.wildberries.ru/webapi/recommendations/similar-by-nm/{?}',
    },
    IMAGES: {
      TINY: 'http://img1.wbstatic.net/small/new/{0}0000/{1}.jpg?r={2}', // 180x240
      SMALL: 'https://images.wbstatic.net/c246x328/new/{0}0000/{1}-{3}.jpg?r={2}', // 246x328
      MEDIUM: 'https://images.wbstatic.net/c516x688/new/{0}0000/{1}-{3}.jpg?r={2}', // 516x688
      BIG: 'https://images.wbstatic.net/big/new/{0}0000/{1}-{3}.jpg?r={2}', // 900x1200
    },
  },
  APPTYPES: {
    DESKTOP: 1,
    ANDROID: 64,
    IOS: 74,
  },
  WAREHOUSES: {
    507: 'Подольск',
    686: 'Новосибирск',
    1193: 'Хабаровск',
    1699: 'Краснодар',
    1733: 'Екатеринбург',
    2737: 'Санкт-Петербург',
    3158: 'Коледино',
    116433: 'Домодедово',
    117393: 'СЦ Минск',
    117501: 'Подольск 2',
    117986: 'Казань',
    120762: 'Электросталь',
    121709: 'Электросталь КБТ',
    124731: 'Крёкшино КБТ',
    130744: 'Склад Краснодар',
    159402: 'Санкт-Петербург 2',
    161812: 'Склад Санкт-Петербург КБТ',
  },
  DESTINATIONS: {
    UFO: [-1059500, -108082, -269701, 12358048],
    MSK: [-1029256, -102269, -2162196, -1257786],
  },
  STORES: {
    // Краснодарский Край
    UFO: [
      117673, 122258, 122259, 130744, 117501, 507, 3158, 124731,
      121709, 120762, 204939, 117986, 159402, 2737, 686, 1733,
    ],
    // Москва и московская область
    MSK: [
      117673, 122258, 122259, 125238, 125239, 125240, 507, 3158, 117501, 120602,
      120762, 6158, 121709, 124731, 130744, 159402, 2737, 117986, 1733, 686, 132043,
    ],
  },
  LOCALES: {
    RU: 'ru',
  },
  CURRENCIES: {
    RUB: 'rub',
  },
};
