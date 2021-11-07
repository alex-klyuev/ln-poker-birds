/* eslint-disable no-console */
const mongoose = require('mongoose');

// for local use:
mongoose.connect('mongodb://localhost:27017/ln_poker_birds', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log('Connected to Mongo');
});

// for deployment through docker:
/* mongoose.connect('mongodb://database:27017/PokerBirds', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, () => {
  console.log('Connected to Mongo');
}); */
