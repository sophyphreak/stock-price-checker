/*
 *
 *
 *       FILL IN EACH FUNCTIONAL TEST BELOW COMPLETELY
 *       -----[Keep the tests in the same order!]-----
 *       (if additional are added, keep them at the very end!)
 */

const chaiHttp = require('chai-http');
const chai = require('chai');
const assert = chai.assert;
const server = require('../server');

const { Stock } = require('../models/stock');

chai.use(chaiHttp);

suite('Functional Tests', () => {
  before(() => {
    Stock.remove({}, err => {
      if (err) console.log(err);
    });
  });
  suite('GET /api/stock-prices => stockData object', () => {
    test('1 stock', done => {
      chai
        .request(server)
        .get('/api/stock-prices')
        .query({ stock: 'goog' })
        .end((err, res) => {
          const data = JSON.parse(res.body);
          const { stock, price, likes } = data.stockData;
          assert.isString(stock);
          assert.equal(stock, 'GOOG', 'should be capitalized ticker symbol');
          assert.isNumber(parseFloat(price));
          assert.isNumber(likes);
          assert.equal(likes, 0, 'there should be no likes');
          done();
        });
    });

    test('1 stock with like', done => {
      chai
        .request(server)
        .get('/api/stock-prices')
        .query({ stock: 'goog', like: true })
        .end((err, res) => {
          const data = JSON.parse(res.body);
          const { stock, price, likes } = data.stockData;
          assert.isString(stock);
          assert.equal(stock, 'GOOG', 'should be capitalized ticker symbol');
          assert.isNumber(parseFloat(price));
          assert.isNumber(likes);
          assert.equal(likes, 1, 'there should be one like');
          done();
        });
    });

    test('1 stock with like again (ensure likes arent double counted)', done => {
      chai
        .request(server)
        .get('/api/stock-prices')
        .query({ stock: 'goog', like: true })
        .end((err, res) => {
          const data = JSON.parse(res.body);
          const { stock, price, likes } = data.stockData;
          assert.isString(stock);
          assert.equal(stock, 'GOOG', 'should be capitalized ticker symbol');
          assert.isNumber(parseFloat(price));
          assert.isNumber(likes);
          assert.equal(likes, 2, 'there should be one like');
          done();
        });
    });

    test('2 stocks', done => {});

    test('2 stocks with like', done => {});
  });
});
