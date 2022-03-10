'use strict'

const { send } = require("express/lib/response");
const MessageHelpers = require ("../Helpers/ReturnMessageHelper.js")
const MovieModel = require("./../Models/MovieModel")
 var MovieController = ()=>{};

      MovieController.getAll = (req, res, next)=>
      {
        MovieModel.getAll((err, rows)=>{
            return err?next(new Error("No hay registro de peliculas")): res.status(200).json(MessageHelpers.MessageHttp(false, "", rows))
        })
      }
      MovieController.insert = (req, res, next)=>
      {
            let json = {
                  Nombre:req.body.Nombre,
                  Clasificacion:req.body.Clasificacion
            }
        MovieModel.insert(json, (err, rows)=>{
              let message={
                    Error:false,
                    Message:"Registro incluido con exito"}
              return  err?res.status(500).send(MessageHelpers.MessageHttp(true, "Hubo un problema", ""))
              : res.status(201).json(MessageHelpers.MessageHttp(false, "Registro incluido con exito", ""))
        })
      }
      MovieController.getOne = (req, res, next)=>
      {

      }
      MovieController.update = (req, res, next)=>
      {

      }
      MovieController.delete = (req, res, next)=>
      {

      }

module.exports= MovieController;
