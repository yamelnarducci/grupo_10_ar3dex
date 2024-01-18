const { validationResult } = require("express-validator");
const { leerJSON, escribirJSON } = require("../../data");
const User = require("../../data/user");
const fs = require('fs')

module.exports = (req,res) => {

    const errors = validationResult(req);

    if(errors.isEmpty()){
        
        const {name, surname, email, password, userCategory} = req.body;
    
        const {userImage} = req.files;
    
        const newUser = new User(name, surname, email, password, userCategory, userImage);
        const users = leerJSON('users');
    
        users.push(newUser);
    
        escribirJSON(users, 'users')

        return res.redirect('/')
    

    }else{

        if(req.files.userImage){
            fs.existsSync(`./public/images/users/${req.files.userImage[0].filename}`) &&
            fs.unlinkSync(`./public/images/users/${req.files.userImage[0].filename}`)
        }

        console.log(req.files.userImage[0].filename)

        return res.render('users/register', {
            old : req.body,
            errors : errors.mapped()
        })
    }
}