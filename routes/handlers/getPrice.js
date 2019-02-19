const axios = require('axios');

const getPrice = async stock => {
  try {
    const rawData = await axios.get(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stock}&apikey=${
        process.env.API_KEY
      }`
    );
    const price = rawData.data['Global Quote']['05. price'];
    return price;
  } catch (e) {
    console.log(e);
  }
};

module.exports = { getPrice };
