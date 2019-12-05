const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
      type: Date,
      default: Date.now
  },
  labels: [
  ],
  // id: {
  //     type:Number,
  //     required: true
  // },
  status: {
    type: String,
    required: true
  }
});

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;
