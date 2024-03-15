
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mvs81349:jG0CCGQ9knydKrVA@cluster0.m2ouoe3.mongodb.net/')
  .then(() => console.log('Connected!'));
module.exports =mongoose
