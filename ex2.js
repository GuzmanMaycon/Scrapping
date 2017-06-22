var express = require ("express");
var path = require("path");
var request = require("request");
var cheerio = require("cheerio");
var fs = require('fs');
var app=express();
var port = 8000;

var destination = fs.createWriteStream('./downloads/google3.html');
var url="https://www.carneuniversitario.com.pe/Search.aspx?CodAlumno=0010011200033";
request(url,function(err,resp,body){
  var $ = cheerio.load(body);
  // var Etiquetas = $('.Etiquetas');
  // var EtiquetasNameText = Etiquetas.text();

  var universidad = $('#lblUniversidad')
  var nombreUniversidad = universidad.text();

  var codigo = $('#lblCodigo')
  var numeroCodigo = codigo.text();

  var documento = $('#lblDocumento')
  var numeroDocumento = documento.text();

  var apellidoPaterno = $('#lblApellidoPaterno')
  var nombreApellidoPaterno = apellidoPaterno.text();

  var apellidoMaterno = $('#lblApellidoMaterno')
  var nombreApellidoMaterno = apellidoMaterno.text();

  var nombres = $('#lblNombres')
  var nombreNombres = nombres.text();

  var facultad = $('#lblFacultad')
  var nombreFacultad = facultad.text();

  var carrera = $('#lblCarrera')
  var nombreCarrera = carrera.text();

  var autogenerado = $('#AutoGenerado')
  var codigoAutogenerado = autogenerado.text();



  var datos={
    nombreUniversidad:nombreUniversidad,
    numeroCodigo:numeroCodigo,
    numeroDocumento:numeroDocumento,
    nombreApellidoPaterno:nombreApellidoPaterno,
    nombreApellidoMaterno:nombreApellidoMaterno,
    nombreNombres:nombreNombres,
    nombreFacultad:nombreFacultad,
    nombreCarrera:nombreCarrera,
    codigoAutogenerado:codigoAutogenerado,
  };
  console.log(datos);

})


app.listen(port);
console.log('server escuchando en '+ port);
