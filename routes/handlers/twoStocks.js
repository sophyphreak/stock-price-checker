// if (like) { }
// if (databaseHasSymbol) { }
// 2x2 = 4 different paths
const { getPrice } = require('./getPrice');
const { getStockLikes } = require('./getStockLikes');
const { updateStockWithLike } = require('./updateStockWithLike');

const twoStocks = (stock, like) => {
  const stock1 = stock[0].toUpperCase();
  const stock2 = stock[1].toUpperCase();
};

module.exports = { twoStocks };
