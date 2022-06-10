const WBPrivateAPI = require('../src/WBPrivateAPI');

const wbapi = new WBPrivateAPI();

(async () => {
  const KEYWORD = 'менструальные чаши';
  const catalog = await wbapi.search(KEYWORD, 2);
  const ads = await wbapi.searchAds(KEYWORD);

  console.log(`
  Ключевое слово: ${KEYWORD}
  Найдено товаров: ${catalog.totalProducts}
  Всего страниц: ${catalog.pages}

  Всего рекламодателей: ${ads.adverts.length}
  Самый высокий CPM: ${ads.adverts[0].cpm} Рублей
  `);

  const product = catalog.page(1)[77];
  const stocks = await wbapi.getStocks(product);
  const promo = await wbapi.getPromo(product);
  console.log(stocks, product.totalStocks, promo);
})();
