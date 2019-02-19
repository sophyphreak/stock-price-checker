const { oneStock } = require('./oneStock');
const { twoStocks } = require('./twoStocks');

const handlers = async (stock, like) => {
  if (typeof stock === 'object') {
    return await twoStocks(stock, like);
  }
  return await oneStock(stock, like);
};

module.exports = { handlers };
