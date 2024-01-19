const fs = require('fs')
const { validationResult } = require("express-validator");

module.exports = (req,res) => {

    const errors = validationResult(req);

    if(errors.isEmpty()){
        
        //Implementar lógica de editar usuario

    }else{

        if(req.files.userImage){
            fs.existsSync(`./public/images/users/${req.files.userImage[0].filename}`) &&
            fs.unlinkSync(`./public/images/users/${req.files.userImage[0].filename}`)
        }


        return res.render('users/profile', {
            old : req.body,
            errors : errors.mapped()
        })
    }
}