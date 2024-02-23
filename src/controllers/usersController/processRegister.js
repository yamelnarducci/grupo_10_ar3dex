const { validationResult } = require("express-validator");
const { leerJSON, escribirJSON } = require("../../data");
const User = require("../../data/user");
const fs = require('fs')
const bcryptjs = require('bcryptjs')
const db = require('../../database/models')

module.exports = (req,res) => {

    const errors = validationResult(req);
    const {name, surname, email, password} = req.body;

    if(errors.isEmpty()){

        db.Address.create()
            .then(address => {

                db.User.create({
                    name,
                    surname,
                    email,
                    password : bcryptjs.hashSync(password.trim(), 10),
                    roleId : 1,
                    addressId : address.id
                })
                    .then(user => {
                        console.log(user)
                        return res.redirect('/')
                    })
            })
            .catch(error=>console.log(error))
            
    }else{
        return res.render('users/register', {
            old : req.body,
            errors : errors.mapped()
        })
    }
}