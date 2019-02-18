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
      if (like) {
        let { _id, likes } = await Stock.findOneAndUpdate(
          { symbol: stock },
          { $inc: { likes: 1 } },
          { new: true }
        );
      } else {
        let { _id, likes } = await Stock.findOne({ symbol: stock });
      }
      if (!_id) {
        if (like) {
          const doc = new Stock({
            symbol: stock,
            likes: 1
          });
          doc.save();
        } else {
          const doc = new Stock({
            symbol: stock,
            likes: 0
          });
          doc.save();
        }
        // more logic. how do i get likes out? etc etc.
        // would be nice to refactor this into cleaner helper functions.
      }
    }

    res.send(JSON.stringify(stockData));
  });
};
