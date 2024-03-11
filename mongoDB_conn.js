
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/UrlShortener')
  .then(() => console.log('Connected!'));
module.exports =mongoose
