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
const { handlers } = require('./handlers/handlers');

module.exports = app => {
  app.route('/api/stock-prices').get(async (req, res) => {
    const { stock, like } = req.query;
    const result = await handlers(stock, like);
    res.json(result);
  });
};
