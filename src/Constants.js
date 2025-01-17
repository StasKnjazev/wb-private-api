module.exports = {
  PRODUCTS_PER_PAGE: 100,
  PAGES_PER_CATALOG: 100,
  FEEDBACKS_PER_PAGE: 30,
  QUESTIONS_PER_PAGE: 30,
  URLS: {
    MAIN_MENU: 'https://www.wildberries.ru/webapi/menu/main-menu-ru-ru.json',
    PRODUCT: {
      STOCKS: 'https://wbxcatalog-ru.wildberries.ru/nm-2-card/catalog',
      CONTENT: 'https://wbx-content-v2.wbstatic.net/ru/{}.json',
      EXTRADATA: 'https://www.wildberries.ru/webapi/product/{}/data',
      DETAILS: 'https://card.wb.ru/cards/detail{}',
      FEEDBACKS: 'https://public-feedbacks.wildberries.ru/api/v1/feedbacks/site',
      QUESTIONS: 'https://questions.wildberries.ru/api/v1/questions',
      DELIVERYDATA: 'https://card.wb.ru/cards/list',
    },
    SEARCH: {
      SIMILAR_BY_NM: 'https://www.wildberries.ru/webapi/recommendations/similar-by-nm/{}',
      TOTALPRODUCTS: 'https://search.wb.ru/exactmatch/ru/female/v3/search',
      EXACTMATCH: 'https://search.wb.ru/exactmatch/ru/female/v4/search',
      CATALOG: 'https://wbxcatalog-ru.wildberries.ru/{}/catalog',
      ADS: 'https://catalog-ads.wildberries.ru/api/v5/search',
      CAROUSEL_ADS: 'https://carousel-ads.wildberries.ru/api/v4/carousel',
      HINT: 'https://search.wb.ru/suggests/api/v2/hint',
    },
    IMAGES: {
      TINY: 'http://img1.wbstatic.net/small/new/{0}0000/{1}.jpg?r={2}', // 180x240
      SMALL: 'https://images.wbstatic.net/c246x328/new/{0}0000/{1}-{3}.jpg?r={2}', // 246x328
      MEDIUM: 'https://images.wbstatic.net/c516x688/new/{0}0000/{1}-{3}.jpg?r={2}', // 516x688
      BIG: 'https://images.wbstatic.net/big/new/{0}0000/{1}-{3}.jpg?r={2}', // 900x1200
      FEEDBACK_BASE: 'https://feedbackphotos.wbstatic.net/',
    },
  },
  APPTYPES: {
    DESKTOP: 1,
    ANDROID: 32,
    IOS: 64,
  },
  WAREHOUSES: {
    KOLEDINO: { id: 507, title: 'Коледино' },
    NOVOSIBIRSK: { id: 686, title: 'Новосибирск' },
    HABAROVSK: { id: 1193, title: 'Хабаровск' },
    EKATERINBURG: { id: 1733, title: 'Екатеринбург' },
    SPB_UTK: { id: 2737, title: 'Санкт-Петербург Уткина Заводь' },
    SC_VOLGOGRAD: { id: 6144, title: 'СЦ Волгоград' },
    SC_YAROSLAVL: { id: 6154, title: 'СЦ Ярославль' },
    SC_RIYAZAN: { id: 6156, title: 'СЦ Рязань' },
    SC_KRASNOGORSK: { id: 6159, title: 'СЦ Красногорск' },
    SC_YUJNYE_VOROTA: { id: 158328, title: 'СЦ Южные Ворота' },
    SPB_SUSHARY: { id: 159402, title: 'Санкт-Петербург Шушары' },
    KAZAHSTAN: { id: 204939, title: 'Склад Казахстан' },
    KRASNODAR: { id: 130744, title: 'Склад Краснодар' },
    CHEHOV: { id: 206968, title: 'Чехов (Новоселки)' },
    ELEKTROSTAL: { id: 120762, title: 'Электросталь' },
    ELEKTROSTAL_KBT: { id: 121709, title: 'Электросталь КБТ' },
    ALEXIN: { id: 206348, title: 'Алексин' },
    BELYE_STOLBY: { id: 206236, title: 'Белые Столбы' },
    KAZAN: { id: 117986, title: 'Казань' },
    KREKSHYNO_KBT: { id: 124731, title: 'Крёкшино КБТ' },
    PODOLSK: { id: 117501, title: 'Подольск' },
    SC_ASTRAHAN: { id: 169872, title: 'СЦ Астрахань' },
    SC_BARNAUL: { id: 172430, title: 'СЦ Барнаул' },
    SC_BELAYA_DACHA: { id: 205228, title: 'СЦ Белая Дача' },
    SC_BRYANSK: { id: 172940, title: 'СЦ Брянск' },
    SC_BLADIMIR: { id: 144649, title: 'СЦ Владимир' },
    SC_IVANOVO: { id: 203632, title: 'СЦ Иваново' },
    SC_IJEVSK: { id: 158140, title: 'СЦ Ижевск' },
    SC_IRUTSK: { id: 131643, title: 'СЦ Иркутск' },
    SC_KALUGA: { id: 117442, title: 'СЦ Калуга' },
    SC_KIROV: { id: 205205, title: 'СЦ Киров' },
    SC_KOMSOMILSKAYA: { id: 154371, title: 'СЦ Комсомольская' },
    SC_KURSK: { id: 140302, title: 'СЦ Курск' },
    SC_KURIANOVSKAYA: { id: 156814, title: 'СЦ Курьяновская' },
    SC_LIPETSK: { id: 160030, title: 'СЦ Липецк' },
    SC_LOBNYA: { id: 117289, title: 'СЦ Лобня' },
    SC_MYTISCHI: { id: 115650, title: 'СЦ Мытищи' },
    SC_NABEREJNYE_CHELNY: { id: 204952, title: 'СЦ Набережные Челны' },
    SC_NIJNIY_NOVGOROD: { id: 118535, title: 'СЦ Нижний Новгород' },
    SC_PERM: { id: 147019, title: 'СЦ Пермь' },
    SC_PODREZKOVO: { id: 124716, title: 'СЦ Подрезково' },
    SC_SARATOV: { id: 158929, title: 'СЦ Саратов' },
    SC_SEROV: { id: 169537, title: 'СЦ Серов' },
    SC_SIMFEROPOL: { id: 144154, title: 'СЦ Симферополь' },
    SC_SMOLENSK: { id: 117497, title: 'СЦ Смоленск' },
    SC_TAMBOV: { id: 117866, title: 'СЦ Тамбов' },
    SC_TVER: { id: 117456, title: 'СЦ Тверь' },
    SC_TIUMEN: { id: 117819, title: 'СЦ Тюмень' },
    SC_UFA: { id: 149445, title: 'СЦ Уфа' },
    SC_CHEBOKSARY: { id: 203799, title: 'СЦ Чебоксары' },
    SC_CHELYABINSK: { id: 132508, title: 'СЦ Челябинск' },
  },
  DESTINATIONS: {
    KRASNODAR: {
      ids: [-1059500, -108082, -269701, 12358048],
      regions: [64, 58, 83, 4, 38, 80, 33, 70, 82, 86, 30, 69, 22, 66, 31, 40, 1, 48],
    },
    MOSCOW: {
      ids: [-1029256, -102269, -1278703, -1255563],
      regions: [68, 64, 83, 4, 38, 80, 33, 70, 82, 86, 75, 30, 69, 22, 66, 31, 40, 1, 48, 71],
    },
    KAZAHSTAN: {
      ids: [85, -3479876, 12358412, 12358388],
    },
    HABAROVSK: {
      ids: [-1221185, -151223, -1782064, -1785054],
      regions: [64, 4, 38, 80, 70, 82, 86, 30, 69, 22, 66, 40, 1, 48]
    },
    NOVOSIBIRSK: {
      ids: [-1221148, -140294, -1751445, -364763],
      regions: [64, 58, 83, 4, 38, 80, 33, 70, 82, 86, 30, 69, 22, 66, 31, 40, 1, 48],
    },
    EKATERINBURG: {
      ids: [-1113276, -79379, -1104258, -5803327],
      regions: [64, 58, 83, 4, 38, 80, 33, 70, 82, 86, 30, 69, 22, 66, 31, 40, 1, 48],
    },
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
  SEX: {
    FEMALE: 'female',
    MALE: 'male',
  },
  USERAGENT: 'Mozilla/5.0 (compatible; wb-private-api; +https://github.com/glmn/wb-private-api)',
};
