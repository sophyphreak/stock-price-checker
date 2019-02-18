/*
 *
 *
 *       Complete the API routing below
 *
 *
 */

'use strict';

require('../db/mongoose');

module.exports = app => {
  app.route('/api/stock-prices').get(async (req, res) => {
    let stockData = { stockData: {} };
    const { stock } = req.query.stock;
    if (stock.isArray()) {
      const stockOne = stock[0];
      const stockTwo = stock[1];
    }

    res.send(JSON.stringify(stockData));
  });
};
