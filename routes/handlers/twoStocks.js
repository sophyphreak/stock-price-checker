const { getPrice } = require('./getPrice');
const { getStockLikes } = require('./getStockLikes');
const { updateStockWithLike } = require('./updateStockWithLike');

const twoStocks = async (stock, like) => {
  const stock1 = stock[0].toUpperCase();
  const stock2 = stock[1].toUpperCase();
  price1 = await getPrice(stock1);
  price2 = await getPrice(stock2);
  let likes1, likes2;
  if (like) {
    likes1 = updateStockWithLike(stock1);
    likes2 = updateStockWithLike(stock2);
  } else {
    likes1 = getStockLikes(stock1);
    likes2 = getStockLikes(stock2);
  }
  return JSON.stringify({
    stockData: [
      {
        stock: stock1,
        price: price1,
        rel_likes: likes1 - likes2
      },
      {
        stock: stock2,
        price: price2,
        rel_likes: likes2 - likes1
      }
    ]
  });
};

module.exports = { twoStocks };
