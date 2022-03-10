"use strict"
 const conf = require("./dbConf")
 const mysql = require("mysql"),
       dbOptions={
           host:conf.mysql.host,
           port:conf.mysql.port,
           user:conf.mysql.user,
           password:conf.mysql.password,
           database:conf.mysql.database
       },
       myConn = mysql.createConnection(dbOptions)

       myConn.connect((err)=>{
           return (err)?console.log(`Error al Conectarse a MYSQL:${err.stack}`): console.log(`Conexion establecida con MYSQL N:${myConn.threadId}`);
       })

       module.exports = myConn;
       