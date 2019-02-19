const axios = require('axios');
const { Stock } = require('../../models/stock');

const oneStock = async (stock, like) => {
  stock = stock.toUpperCase();
  let stockLikes;
  if (like) {
    stockLikes = await updateStockWithLike(stock);
  } else {
    stockLikes = await getStockLikes(stock);
  }
  let price;
  try {
    price = await axios.get(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stock}&apikey=${
        process.env.API_KEY
      }`
    );
    price = price.data['Global Quote']['05. price'];
    // console.log(price);
  } catch (e) {
    console.log(e);
  }
  return JSON.stringify({
    stockData: { stock: stock, price: price, likes: stockLikes }
  });
  // return ['stockLikes:', stockLikes, 'price:', price];
};

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

module.exports = { oneStock };
