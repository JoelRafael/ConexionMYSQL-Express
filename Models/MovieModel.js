'use strict'

const connection = require("./../ConexionDB/Conexion");
const MovieModel = ()=>{};

      MovieModel.getAll = (cb) => connection.query("SELECT * FROM movie", cb)
      MovieModel.insert = (data, cb) => connection.query("INSERT INTO movie SET ? ", data, cb)
      MovieModel.getOne = (MovieId, cb) => connection.query(`SELECT * FROM movie WHERE MovieId=${MovieId} `, cb)
      MovieModel.update = (movieid, data, cb) => connection.query(`UPDATE movie SET ? WHERE MovieId=${movieid}`, data, cb)
      MovieModel.delete = ()=>
      {

      }


module.exports = MovieModel