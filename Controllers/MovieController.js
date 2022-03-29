'use strict'
//import {MessageHelpers} from "../Helpers/ReturnMessageHelper.js"
const MessageHelpers = require ("../Helpers/ReturnMessageHelper.js")
const MovieModel = require("./../Models/MovieModel")


var MovieController = ()=>{};

      MovieController.getAll = (req, res, next)=>
      {
        MovieModel.getAll((err, rows)=>{
            return err?next(new Error("No hay registro de peliculas"))
                      :res.status(200).json(MessageHelpers.MessageHttp(false, "", rows))
        })
      }
      MovieController.insert = (req, res, next)=>
      {
            let json = {
                  Nombre:req.body.Nombre,
                  Clasificacion:req.body.Clasificacion
            }
        MovieModel.insert(json, (err, rows)=>{
              return  err?res.status(500).send(MessageHelpers.MessageHttp(true, "Hubo un problema", ""))
                         :res.status(201).json(MessageHelpers.MessageHttp(false, "Registro incluido con exito", ""))
        })
      }
      MovieController.getOne = (req, res, next)=>
      {
         MovieModel.getOne(req.params.MovieId, (err, rows)=>{
         return err?res.status(404).send(MessageHelpers.MessageHttp(true, "Pelicula no encontrada", ""))
                   :res.json(MessageHelpers.MessageHttp(false, "", rows))
         })
      }
      MovieController.update = (req, res, next)=>
      {
            let json={
                  Nombre:req.body.Nombre,
                  Clasificacion:req.body.Clasificacion
            }
            MovieModel.update(req.params.movieid, json, (err, rows)=>{
                  return err?res.status(500).send(MessageHelpers.MessageHttp(true, "Hubo un problema con el servidor al actualizar el item", ""))
                            :res.json(MessageHelpers.MessageHttp(false, "", "Item actualizado con exito"))
            })
      }
      MovieController.delete = (req, res, next)=>
      {
        MovieModel.delete(req.params.movieid, (err, rows)=>{
            return err?res.status(500).send(MessageHelpers.MessageHttp(true, "Hubo un problema con el servidor al eliminar el item", ""))
                      :res.json(MessageHelpers.MessageHttp(false, "", "Item eliminado con exito"))
        })
      }

module.exports= MovieController;
