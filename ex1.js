var express = require ("express");
var path = require("path");
var request = require("request");
var cheerio = require("cheerio");
var fs = require('fs');
var app=express();
var port = 8000;

// var url="http://google.com"
// request(url,function(err,resp,body){
//   if(err){
//     console.log(err);
//   }else{
//     console.log(body);
//   }
// })

// var destination = fs.createWriteStream('./downloads/google.html');
// var url="http://google.com";
// request(url)
// .pipe(destination);

var destination = fs.createWriteStream('./downloads/google2.html');
var url="http://google.com";
request(url)
.pipe(destination)
.on("finish",function(){
  console.log("Rdy");
})
.on("error",function(){
  console.log(err);
})

app.listen(port);
console.log('server escuchando en '+ port);
