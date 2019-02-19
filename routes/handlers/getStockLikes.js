const { Stock } = require('../../models/stock');

const getStockLikes = async stock => {
  let stockData;
  try {
    stockData = await Stock.findOne({ symbol: stock });
  } catch (e) {
    console.log('try/catch error in getStockLikes(): ', e);
  }
  if (stockData === null) {
    const doc = new Stock({
      symbol: stock
    });
    doc.save();
    return 0;
  }
  return stockData.likes;
};

module.exports = { getStockLikes };
