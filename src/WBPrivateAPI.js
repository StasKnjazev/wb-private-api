const format = require('string-format');
const Constants = require('./Constants');
const WBProduct = require('./WBProduct');
const WBCatalog = require('./WBCatalog');
const SessionBuilder = require('./SessionBuilder');

format.extend(String.prototype, {});

class WBPrivateAPI {
  /* Creating a new instance of the class WBPrivateAPI. */
  constructor({ destination }) {
    this.session = SessionBuilder.create();
    this.destination = destination;
  }

  /**
   * It searches for products by keyword.
   * @param {string} keyword - The keyword to search for
   * @param {number} pageCount - Number of pages to retrieve
   * @returns {WBCatalog} WBCatalog objects with WBProducts inside it
   */
  async search(keyword, pageCount = 0) {
    const products = [];

    const totalProducts = await this.searchTotalProducts(keyword);
    if (totalProducts === 0) return [];

    const [shardKey, preset, presetValue] = await this._getQueryParams(keyword);
    const catalogConfig = { keyword, shardKey, preset, presetValue };

    let totalPages = Math.round((totalProducts / 100) + 0.5);
    if (totalPages > Constants.PAGES_PER_CATALOG) { totalPages = Constants.PAGES_PER_CATALOG; }

    if (pageCount > 0) {
      if (pageCount < totalPages) {
        totalPages = pageCount;
      }
    }
    const threads = Array(totalPages).fill(1).map((x, y) => x + y);
    const parsedPages = await Promise.all(
      threads.map((thr) => this.getCatalogPage(catalogConfig, thr)),
    );

    parsedPages.every((val) => products.push(...val.map((v) => new WBProduct(v))));

    Object.assign(catalogConfig, { pages: totalPages, products });

    return new WBCatalog(catalogConfig);
  }

  /**
   * It takes a keyword and returns an array of three elements,
   * shardKey, preset and preset value
   * @param {string} keyword - The keyword you want to search for.
   * @returns {array} - An array of shardKey, preset and preset value
   */
  async _getQueryParams(keyword) {
    const res = await this.session.get(Constants.URLS.SEARCH.EXACTMATCH, {
      params: {
        query: keyword,
        resultset: 'catalog',
      },
    });
    return [res.data.shardKey, ...res.data.query.split('=')];
  }

  /**
   * It returns the total number of products for a given keyword
   * @param {string} keyword - the search query
   * @returns Total number of products
   */
  async searchTotalProducts(keyword) {
    const res = await this.session.get(Constants.URLS.SEARCH.TOTALPRODUCTS, {
      params: {
        appType: Constants.APPTYPES.DESKTOP,
        query: keyword,
        couponsGeo: [2, 7, 3, 6, 19, 21, 8],
        curr: Constants.CURRENCIES.RUB,
        dest: this.destination,
        locale: Constants.LOCALES.RU,
        resultset: 'filters',
        stores: Constants.STORES.UFO,
      },
    });
    return res.data.filters.data.total;
  }

  /**
   * It gets all products from specified page
   * @param {object} catalogConfig - { shradKey, preset, presetValue }
   * @param {number} page - page number
   * @returns {array} - An array of products
   */
  async getCatalogPage(catalogConfig, page = 1) {
    return new Promise(async (resolve) => {
      let foundProducts;
      const options = {
        params: {
          query: catalogConfig.keyword,
          appType: Constants.APPTYPES.DESKTOP,
          locale: Constants.LOCALES.RU,
          page,
          dest: this.destination.ids,
          sort: 'popular',
          limit: Constants.PRODUCTS_PER_PAGE,
          regions: this.destination.regions,
          resultset: 'catalog',
        },
      };
      try {
        const url = Constants.URLS.SEARCH.EXACTMATCH;
        const res = await this.session.get(url, options);
        foundProducts = res.data.data.products;
      } catch (err) {
        await this.getCatalogPage(catalogConfig, page);
      }
      resolve(foundProducts);
    });
  }

  /**
   * Search for adverts and their ads form specified keyword
   * @param {string} keyword - the search query
   * @returns {object} - An object with adverts and their ads
   */
  async getSearchAds(keyword) {
    const options = { params: { keyword } };
    const res = await this.session.get(Constants.URLS.SEARCH.ADS, options);
    return res.data;
  }

  /**
   * Search for carousel ads inside product card
   * @param {number} productId - product id
   * @returns {array} - An array with ads
   */
  async getCarouselAds(productId) {
    const options = {
      params: {
        nm: productId,
      },
    };
    const res = await this.session.get(Constants.URLS.SEARCH.CAROUSEL_ADS, options);
    return res.data;
  }

  /**
   * It takes a query string and returns a list of suggestions that match the query
   * @param {string} query - the search query
   * @returns {array} - An array of objects.
   */
  async keyHint(query) {
    const options = {
      params: {
        query,
        gender: Constants.SEX.FEMALE,
        locale: Constants.LOCALES.RU,
      },
    };
    const res = await this.session.get(Constants.URLS.SEARCH.HINT, options);
    return res.data;
  }

  /**
   * It takes a productId, makes a request to the server, and returns the similar Ids
   * @param productId - The product ID of the product you want to search for similar
   * @returns {object} with similar product Ids
   */
  async searchSimilarByNm(productId) {
    const options = { headers: { 'x-requested-with': 'XMLHttpRequest' } };
    const url = Constants.URLS.SEARCH.SIMILAR_BY_NM.format(productId);
    const res = await this.session.get(url, options);
    return res.data;
  }

  /**
   * It takes an array of productIds and a destination, and returns an array of
   * products with delivery time data
   * @param config - { productIds, dest }
   * @returns {object} of products with delivety times
   */
  async getDeliveryDataByNms(productIds) {
    return new Promise(async (resolve) => {
      const options = {
        params: {
          appType: Constants.APPTYPES.DESKTOP,
          locale: Constants.LOCALES.RU,
          dest: this.destination.ids,
          nm: productIds.join(';'),
        },
      };
      try {
        const url = Constants.URLS.PRODUCT.DELIVERYDATA;
        const res = await this.session.get(url, options);
        const foundProducts = res.data.data.products;
        resolve(foundProducts);
      } catch (err) {
        await this.getDeliveryDataByNms(productIds);
      }
    });
  }
}

module.exports = WBPrivateAPI;
