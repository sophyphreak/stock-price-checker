const { Stock } = require('../../models/stock');
const { getPrice } = require('./getPrice');
const { getStockLikes } = require('./getStockLikes');
const { updateStockWithLike } = require('./updateStockWithLike');

const oneStock = async (stock, like) => {
  stock = stock.toUpperCase();
  let stockLikes;
  if (like) {
    stockLikes = await updateStockWithLike(stock);
  } else {
    stockLikes = await getStockLikes(stock);
  }
  const price = await getPrice(stock);
  return JSON.stringify({
    stockData: { stock: stock, price: price, likes: stockLikes }
  });
};

module.exports = { oneStock };
