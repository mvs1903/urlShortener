const mongoose= require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UrlSchema = new Schema({
  urlname:String,
  url:String,
});

const Url = mongoose.model('urls', UrlSchema);

module.exports= Url
