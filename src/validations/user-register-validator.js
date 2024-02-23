const { check, body } = require("express-validator");

const db = require('../database/models')

module.exports = [
    check('name')
        .notEmpty().withMessage('El nombre es obligatorio').bail()
        .isLength({
            min : 2
        }).withMessage('Mínimo dos caracteres').bail()
        .isAlpha('es-ES', {ignore:' '}).withMessage('Sólo caracteres alfabéticos').bail(),
    check('surname')
        .notEmpty().withMessage('El apellido es obligatorio').bail()
        .isLength({
            min : 2
        }).withMessage('Mínimo dos caracteres').bail()
        .isAlpha('es-ES', {ignore:' '}).withMessage('Sólo caracteres alfabéticos').bail(),
    body('email')
        .notEmpty().withMessage('El email es obligatorio').bail()
        .isEmail().withMessage('el Email tiene un formato inválido')
        .custom((value, {req}) => {
            return db.User.findOne({
                where : {
                    email : value
                }
            }).then(user => {
                if(user) {
                    return Promise.reject()
                }
            }).catch(error => {
                console.log(error)
                return Promise.reject("El mail ya se encuentra registrado")
            })
        }),
    check('password')
        .notEmpty().withMessage('La contraseña es obligatoria')
        .isLength({
            min: 6,
            max: 12
        }),
    body('passwordConfirm')
        .notEmpty().withMessage('Debe confirmar la contraseña').bail()
        .custom((value, {req}) => {
            if(value != req.body.password){
                return false
            }
            return true
        }).withMessage('Las contraseñas no coinciden'),
    check('remember')
        .notEmpty().withMessage('Debe aceptar los terminos y condiciones')
]