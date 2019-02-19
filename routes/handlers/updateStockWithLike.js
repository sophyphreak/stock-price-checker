const { Stock } = require('../../models/stock');

const updateStockWithLike = async stock => {
  let stockData;
  try {
    stockData = await Stock.findOneAndUpdate(
      { symbol: stock },
      { $inc: { likes: 1 } },
      { new: true }
    );
  } catch (e) {
    console.log('try/catch error in updateStockWithLike(): ', e);
  }
  if (stockData === null) {
    const doc = new Stock({
      symbol: stock,
      likes: 1
    });
    doc.save();
    return 1;
  }
  return stockData.likes;
};

module.exports = { updateStockWithLike };
