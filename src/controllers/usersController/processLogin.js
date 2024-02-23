const { validationResult } = require("express-validator");
const db = require('../../database/models')

module.exports = (req,res) => {
    const errors = validationResult(req);
    const {email, remember} = req.body;

    if(errors.isEmpty()){

        db.User.findOne({
            where : {
                email
            }
        })
        .then(({id,name,roleId}) => {
                req.session.userLogin = {
                    id,
                    name,
                    role : +roleId
                }

                remember && res.cookie('AR3DEX4EV3R_user', req.session.userLogin, {
                    maxAge : 1000 * 60 * 2
                })
                console.log('LOGIN' + req.session.userLogin)
                return res.redirect('/')
            })
            .catch(error => console.log(error))

    }else {
        return res.render('users/login',{
            errors : errors.mapped()
        })
    }
}