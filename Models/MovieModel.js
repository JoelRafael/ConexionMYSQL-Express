'use strict'

const connection = require("./../ConexionDB/Conexion");
 var MovieModel = ()=>{};

      MovieModel.getAll = (cb) => connection.query("SELECT * FROM movie", cb)
      
      MovieModel.insert = (data, cb) => connection.query("INSERT INTO movie SET ? ", data, cb)

      MovieModel.getOne = ()=>
      {

      }
      MovieModel.update = ()=>
      {

      }
      MovieModel.delete = ()=>
      {

      }


module.exports = MovieModel