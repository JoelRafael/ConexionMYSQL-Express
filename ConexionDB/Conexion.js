"use strict"

 const variable = require("./../config")
 const conf = require("./dbConf") 
 const mysql = require("mysql"),
       myConn = mysql.createConnection(variable)

       myConn.connect((err)=>{
           return (err)?console.log(`Error al Conectarse a MYSQL:${err.stack}`): console.log(`Conexion establecida con MYSQL N:${myConn.threadId}`);
       })
       

       module.exports = myConn;
       