const express = require('express')
const app = express()
const port = 8000
const mongoose = require('./mongoDB_conn')
const cors = require('cors')
const Url=require('./models/url')

app.use(cors())
app.use(express.json())

app.post('/seturl', async(req, res) => {
 console.log(req.body)
 const {name,url}=req.body
 let user =await Url.findOne({"urlname":name});

 if (user==null){
  let seturl=new Url();
  seturl.urlname=name;
  seturl.url=url;
  seturl.save()
 }

 else{
  res.status(400).send("please enter a unique name")
  return
 }
 res.status(200).send("added sucessfully")
  
})

app.get('/:name',async (req, res) => {
 let user = req.params['name'];
 let url= await Url.findOne({urlname:user});
 console.log(url.url);
 if (url){
  res.redirect(url.url);
 }
 else{
  res.send("urlname notfound")
 }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})