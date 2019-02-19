// if (twoStocks) { }
// if (like) { }
// if (databaseHasSymbol) { }
// 2x2x2 = 8 different paths
const assert = require('assert');
const { oneStock } = require('./oneStock');
const { twoStocks } = require('./twoStocks');

const handlers = async (stock, like) => {
  if (typeof stock === 'object') {
    assert(stock.isArray(), 'stock should be an array');
    return await twoStocks(stock, like);
  }
  return await oneStock(stock, like);
};

module.exports = { handlers };
