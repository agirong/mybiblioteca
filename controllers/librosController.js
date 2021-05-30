var conexion = require('../config/conexion');
var libro= require("../model/libro");

module.exports={
    
    index:function(req,res){
        libro.obtener(conexion,function (err,datos){
            console.log(datos);
            res.render('./libros/index', { title: 'App', libros:datos });
        });
    },
    crear:function(req,res){
        res.render('./libros/crear');
    }
}