"use strict"
require("dotenv").config();
//Apuntando a produccion
let variables = {
host: process.env.HOST,
port : 3306,
user:process.env.USER,
password:process.env.PASSWORD,
database:process.env.DATABASE
}
module.exports = variables;