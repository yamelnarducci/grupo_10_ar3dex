const { check, body } = require("express-validator");
const { leerJSON } = require("../src/data");

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
            const users = leerJSON('users');
            const user = users.find(user => user.email === value.trim())

            if(user){
                return false
            }
            return true
        }).withMessage('El email ya se encutra registrado'),
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