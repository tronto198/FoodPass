const express=require('express')
const app=express.Router();


app.get('/', function(req, res){
    res.send("Hello, world!")
  });
  module.exports=app;