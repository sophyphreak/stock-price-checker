/*
 *
 *
 *       Complete the API routing below
 *
 *
 */

'use strict';

require('../db/mongoose');
const { Stock } = require('../models/stock');

module.exports = app => {
  app.route('/api/stock-prices').get(async (req, res) => {
    let stockData = { stockData: {} };
    const { stock, like } = req.query;
    if (stock.isArray()) {
      const stockOne = stock[0];
      const stockTwo = stock[1];
      // add more
    } else {
    }

    res.send(JSON.stringify(stockData));
  });
};
