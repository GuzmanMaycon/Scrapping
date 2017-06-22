var express = require ("express");
var path = require("path");
var request = require("request");
var cheerio = require("cheerio");
var fs = require('fs');
var urls=[];
var app=express();
var port = 8000;

request('http://www.reddit.com', function(err,resp,body){
  if(!err && resp.statusCode == 200){
    var $= cheerio.load(body);
    //$(obj.class, #id)
      //$('a.title','#siteTable').each(function(){
        $("#imgFoto").each(function(){
        var url= $(this).attr('href');
        if(url.indexOf('i.imgur.com')!=-1){
          urls.push(url);
        }
      });
      console.log(urls);
      for(var i=0; i<urls.length;i++){
        request(urls[i]).pipe(fs.createWriteStream('img/'+i+'.jpg'));
      }
    }
})

app.listen(port);
console.log('server escuchando en '+ port);
