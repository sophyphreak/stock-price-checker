const mongoose = require('mongoose');

const Stock = mongoose.model('Stock', {
  symbol: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    default: 0
  }
});

module.exports = {
  Stock
};
