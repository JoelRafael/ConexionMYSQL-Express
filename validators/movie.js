const {body} = require("express-validator")
const {validateResult} = require ("../Helpers/validateHelper.js")
const ValidateCreate = [
body('Nombre', 'Ingrese un nombre valido')
.exists()
.not ()
.isEmpty()
.isLength({min:5, max:10}),

body('Clasificacion', 'Ingrese una clasificacion valida')
.exists()
.not ()
.isEmpty()
.isNumeric()
.custom((value, {req})=>{
if(value < 1 || value > 10){
    throw new Error('El rango de clasificacion no puede ser menor que 1 ni mayor que 10')
}
return true
}),
(req, res, next)=>{
validateResult(req, res, next)
}

]
module.exports = {ValidateCreate}